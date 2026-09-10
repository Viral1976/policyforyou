function trackWhatsAppClick() {
    gtag('event', 'whatsapp_click', {
        event_category: 'Contact',
        event_label: 'WhatsApp Button'
    });
}
/* =========================================================
   INSURANCE INQUIRY - COMPANY → PLAN → BENEFITS
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const typeSelect = document.getElementById("inqType");
    const companySelect = document.getElementById("inqCompany");
    const planSelect = document.getElementById("inqPlan");
    const benefitsList = document.getElementById("benefitsList");
    const benefitsBox = document.getElementById("planBenefits");

    if (!typeSelect || !companySelect || !planSelect) {
        return;
    }

    const plans = {

        "LIC": {

            "LIC's Digi Term": [
                "Level Sum Assured or Increasing Sum Assured options",
                "High Sum Assured rebate may be available",
                "Pure protection-focused term insurance"
            ],

            "LIC's New Tech-Term": [
                "Level Sum Assured or Increasing Sum Assured",
                "Single, Regular or Limited premium options",
                "Flexible policy term and premium payment options"
            ],

            "LIC's New Jeevan Amar": [
                "Term life protection for family",
                "Level or Increasing Sum Assured options",
                "Flexible premium payment choices"
            ],

            "LIC's Saral Jeevan Bima": [
                "Simple pure term life protection",
                "Flexible premium payment options",
                "Designed for straightforward family protection"
            ],

            "LIC's Bima Kavach": [
                "Choice of two death benefit options",
                "Single, Regular or Limited premium payment options",
                "Pure-risk term protection"
            ],

            "LIC's Jeevan Raksha": [
                "High life cover at affordable rates",
                "Coverage options for eligible lives",
                "Flexible policy term and premium payment choices"
            ],

            "LIC's Yuva Term": [
                "Term life protection",
                "Designed for younger customers",
                "Flexible protection options"
            ],

            "LIC's Digi Credit Life": [
                "Credit-linked life protection",
                "Single or Limited premium options",
                "Special rates for women may apply"
            ],

            "LIC's Yuva Credit Life": [
                "Credit-linked life protection",
                "Designed for eligible younger borrowers",
                "Flexible premium payment options"
            ],

            "LIC's Jeevan Umang": [
                "Whole-life insurance protection",
                "Survival benefits during the policy term",
                "Long-term family financial planning"
            ],

            "LIC's Jeevan Utsav": [
                "Whole-life savings and protection",
                "Guaranteed additions as applicable",
                "Long-term financial planning"
            ],

            "LIC's Jeevan Utsav Single Premium": [
                "Single-premium whole-life plan",
                "Savings plus life protection",
                "Guaranteed additions as applicable"
            ],

            "LIC's Amritbaal": [
                "Child-focused insurance plan",
                "Guaranteed additions during policy term",
                "Flexible premium payment options"
            ],

            "LIC's Bima Lakshmi": [
                "Life insurance and savings plan",
                "Designed exclusively for female lives",
                "Savings-oriented financial protection"
            ],

            "LIC's Jan Suraksha": [
                "Micro insurance life protection",
                "Guaranteed additions",
                "Auto Cover facility as applicable"
            ],

            "LIC's New Tech-Term / Other Plan": [
                "Please contact Viral Upadhyay for current plan details",
                "Plan availability and terms should be confirmed before purchase"
            ]
        },

        "Edelweiss Life Insurance": {

            "Edelweiss Life - Assured Income STAR": [
                "Regular guaranteed income",
                "Maturity benefit at policy term end",
                "Life cover for family protection",
                "Riders may be available"
            ],

            "Edelweiss Life - Guaranteed Flexi STAR": [
                "Assured returns through plan options",
                "Lumpsum or lumpsum plus income options",
                "Flexible premium and policy term choices",
                "Choice of riders"
            ],

            "Edelweiss Life - Zindagi Protect Plus": [
                "Term life cover",
                "Protection option up to age 100",
                "Limited-pay or regular-pay options",
                "Optional benefits for spouse/child and premium breaks"
            ],

            "Edelweiss Life - Premier Guaranteed STAR": [
                "Guaranteed regular income and/or maturity lumpsum",
                "Life protection for family",
                "Flexible policy term and premium payment options",
                "Rider options"
            ],

            "Edelweiss Life - Flexi Goal Secure": [
                "Life insurance protection",
                "Multiple benefit options",
                "Survival benefit accumulation option",
                "Customised future-goal planning"
            ],

            "Edelweiss Life - Flexi Dream Plan": [
                "Life insurance protection",
                "Multiple payout options",
                "Accrual of survival benefits",
                "Two-gether option"
            ],

            "Edelweiss Life - Wealth Rise+": [
                "Market-linked returns",
                "Guaranteed lumpsum option",
                "Enhanced cover options",
                "Little Star benefit option"
            ],

            "Edelweiss Life - Wealth Plus": [
                "Life cover plus wealth accumulation",
                "Additional fund allocation from first policy year",
                "Child-focused Rising Start benefit",
                "Choice of multiple funds"
            ],

            "Edelweiss Life - Flexi Savings Plan": [
                "Flexible income plus life cover",
                "Three plan options",
                "Choice of income start year",
                "Cash/reversionary bonus may apply"
            ],

            "Edelweiss Life - Wealth Ultima": [
                "Wealth accumulation plus protection",
                "Child-focused benefit option",
                "Life cover options",
                "Choice of funds"
            ],

            "Edelweiss Life - Saral Jeevan Bima": [
                "Simple pure term life protection",
                "Flexible premium payment options",
                "Limited-pay option",
                "Tax benefits as per applicable law"
            ]

        },

        "Niva Bupa Health Insurance": {

            "ReAssure 3.0": [
                "Unlimited sum insured option",
                "Day 1 coverage for eligible pre-existing disease conditions",
                "Worldwide treatment option",
                "Unlimited restoration as applicable"
            ],

            "Aspire": [
                "Age-lock premium feature until first claim",
                "Carry forward unused sum insured",
                "Maternity benefits including IVF and adoption",
                "Unlimited restoration as applicable"
            ],

            "Rise": [
                "Flexible or one-time premium payment options",
                "Premium-back feature with bonus as applicable",
                "Smart Cash benefit for eligible government-hospital treatment",
                "Unlimited digital consultations"
            ],

            "Niva Bupa Health Plan - Need Advice": [
                "Personalised health insurance recommendation",
                "Family and individual options",
                "Coverage selected according to your needs",
                "Final benefits depend on selected product and policy terms"
            ]
        }
    };


    /* ---------------------------------------------------------
       INSURANCE TYPE → COMPANY
       --------------------------------------------------------- */

    typeSelect.addEventListener("change", function () {

        const type = this.value;

        companySelect.innerHTML =
            '<option value="">Select Company</option>';

        planSelect.innerHTML =
            '<option value="">Select Plan / Product</option>';

        companySelect.disabled = true;
        planSelect.disabled = true;

        showBenefits([
            "Select a Company & Plan to see key benefits."
        ]);

        if (!type) {
            companySelect.innerHTML =
                '<option value="">First Select Insurance Type</option>';
            return;
        }

        let companies = [];

        if (type === "Life") {
            companies = [
                "LIC",
                "Edelweiss Life Insurance"
            ];
        }

        if (type === "Health") {
            companies = [
                "Niva Bupa Health Insurance"
            ];
        }

        if (type === "Both") {
            companies = [
                "LIC",
                "Edelweiss Life Insurance",
                "Niva Bupa Health Insurance"
            ];
        }

        companies.forEach(function (company) {

            const option = document.createElement("option");

            option.value = company;
            option.textContent = company;

            companySelect.appendChild(option);
        });

        companySelect.disabled = false;
    });


    /* ---------------------------------------------------------
       COMPANY → PLAN
       --------------------------------------------------------- */

    companySelect.addEventListener("change", function () {

        const company = this.value;

        planSelect.innerHTML =
            '<option value="">Select Plan / Product</option>';

        planSelect.disabled = true;

        showBenefits([
            "Select a Plan to see key benefits."
        ]);

        if (!company || !plans[company]) {
            return;
        }

        Object.keys(plans[company]).forEach(function (plan) {

            const option = document.createElement("option");

            option.value = plan;
            option.textContent = plan;

            planSelect.appendChild(option);
        });

        planSelect.disabled = false;
    });


    /* ---------------------------------------------------------
       PLAN → BENEFITS
       --------------------------------------------------------- */

    planSelect.addEventListener("change", function () {

        const company = companySelect.value;
        const plan = this.value;

        if (
            !company ||
            !plan ||
            !plans[company] ||
            !plans[company][plan]
        ) {
            showBenefits([
                "Select a Company & Plan to see key benefits."
            ]);
            return;
        }

        showBenefits(plans[company][plan]);
    });


    function showBenefits(benefits) {

        if (!benefitsList) {
            return;
        }

        benefitsList.innerHTML = "";

        benefits.forEach(function (benefit) {

            const li = document.createElement("li");

            li.textContent = "✓ " + benefit;

            benefitsList.appendChild(li);
        });
    }


    /* ---------------------------------------------------------
       WHATSAPP INQUIRY
       --------------------------------------------------------- */

    window.sendInquiryToWhatsApp = function () {

        const name =
            document.getElementById("inqName").value.trim();

        const mobile =
            document.getElementById("inqMobile").value.trim();

        const type =
            document.getElementById("inqType").value;

        const company =
            document.getElementById("inqCompany").value;

        const plan =
            document.getElementById("inqPlan").value;

        const coverage =
            document.getElementById("inqCoverage").value.trim();

        const message =
            document.getElementById("inqMessage").value.trim();


        if (!name || !mobile || !type || !company || !plan) {

            alert(
                "Please fill Name, Mobile, Insurance Type, Company and Plan."
            );

            return;
        }


        if (!/^[0-9]{10}$/.test(mobile)) {

            alert("Please enter a valid 10-digit mobile number.");

            return;
        }


        /* Google Analytics Lead Event */

        if (typeof gtag === "function") {

            gtag("event", "generate_lead", {

                method: "WhatsApp",

                insurance_type: type,

                company: company,

                plan: plan

            });
        }


        const whatsappNumber = "918511169616";


        const whatsappMessage =
            "🛡️ NEW INSURANCE INQUIRY\n\n" +

            "👤 Name: " +
            name + "\n" +

            "📱 Mobile: " +
            mobile + "\n" +

            "🛡️ Insurance Type: " +
            type + "\n" +

            "🏢 Company: " +
            company + "\n" +

            "📋 Plan / Product: " +
            plan + "\n" +

            "💰 Coverage / Requirement: " +
            (coverage || "Not specified") + "\n" +

            "📝 Message: " +
            (message || "Not specified") + "\n\n" +

            "📌 From PolicyForYou.in Website";


        const url =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);


        window.open(url, "_blank");
    };

});
function sendInquiryWhatsApp() {

    const name = document.getElementById("inquiryName").value;
    const mobile = document.getElementById("inquiryMobile").value;
    const type = document.getElementById("insuranceType").value;
    const message = document.getElementById("inquiryMessage").value;

    const whatsappNumber = "918511169616";

    const whatsappMessage =
        "New Insurance Inquiry%0A%0A" +
        "Name: " + encodeURIComponent(name) + "%0A" +
        "Mobile: " + encodeURIComponent(mobile) + "%0A" +
        "Insurance Type: " + encodeURIComponent(type) + "%0A" +
        "Requirement: " + encodeURIComponent(message);

    const whatsappURL =
        "https://wa.me/" + whatsappNumber +
        "?text=" + whatsappMessage;

    window.open(whatsappURL, "_blank");
}
/* ==========================================
   INSURANCE INQUIRY - COMPANY / PLAN / BENEFITS
========================================== */

const planData = {

  "LIC": {

    "Digi Term": [
      "Pure term protection",
      "Level or Increasing Sum Assured option",
      "High Sum Assured rebate",
      "Special rates for eligible customers"
    ],

    "New Tech-Term": [
      "Level or Increasing Sum Assured",
      "Single, Regular or Limited premium options",
      "Flexible policy term options",
      "Life protection for family"
    ],

    "
