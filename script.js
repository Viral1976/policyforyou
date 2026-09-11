function trackWhatsAppClick() {
    if (typeof gtag === "function") {
        gtag("event", "whatsapp_click", {
            event_category: "Contact",
            event_label: "WhatsApp Button"
        });
    }
}


/* =========================================================
   POLICYFORYOU - INSURANCE INQUIRY
   Company → Plan → Benefits → WhatsApp
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const typeSelect = document.getElementById("inqType");
    const companySelect = document.getElementById("inqCompany");
    const planSelect = document.getElementById("inqPlan");
    const benefitsList = document.getElementById("benefitsList");

    if (!typeSelect || !companySelect || !planSelect) {
        return;
    }


    /* =====================================================
       COMPANY → PLANS
    ===================================================== */

    const planData = {

        "LIC": {

            "LIC's Digi Term": [
                "Pure term life protection",
                "Level or Increasing Sum Assured options",
                "High Sum Assured rebate may be available",
                "Flexible policy term options"
            ],

            "LIC's New Tech-Term": [
                "Level or Increasing Sum Assured",
                "Regular, Limited or Single premium options",
                "Flexible policy term",
                "Family financial protection"
            ],

            "LIC's New Jeevan Amar": [
                "Pure term life protection",
                "Level or Increasing Sum Assured options",
                "Flexible premium payment options",
                "Family protection"
            ],

            "LIC's Saral Jeevan Bima": [
                "Simple pure term life protection",
                "Flexible premium payment options",
                "Straightforward family protection"
            ],

            "LIC's Bima Kavach": [
                "Pure risk term protection",
                "Choice of death benefit options",
                "Flexible premium payment options"
            ],

            "LIC's Yuva Term": [
                "Term life protection",
                "Designed for eligible younger customers",
                "Flexible protection options"
            ],

            "LIC's Digi Credit Life": [
                "Credit-linked life protection",
                "Life cover for eligible borrowers",
                "Flexible premium payment options"
            ],

            "LIC's Yuva Credit Life": [
                "Credit-linked life protection",
                "Designed for eligible younger borrowers",
                "Flexible premium payment options"
            ],

            "LIC's Jeevan Umang": [
                "Whole-life protection",
                "Survival benefit during policy term",
                "Long-term financial planning"
            ],

            "LIC's Jeevan Utsav": [
                "Whole-life savings and protection",
                "Guaranteed additions as applicable",
                "Long-term financial planning"
            ],

            "LIC's Amritbaal": [
                "Child-focused insurance plan",
                "Guaranteed additions as applicable",
                "Flexible premium payment options"
            ],

            "LIC's Bima Lakshmi": [
                "Life insurance and savings",
                "Designed for eligible female lives",
                "Long-term financial protection"
            ]
        },


        "Edelweiss Life Insurance": {

            "Zindagi Protect Plus": [
                "Term life protection",
                "Protection option up to eligible age",
                "Regular or limited premium options",
                "Optional benefits may be available"
            ],

            "Assured Income STAR": [
                "Guaranteed income options",
                "Life protection",
                "Maturity benefit as applicable",
                "Rider options may be available"
            ],

            "Guaranteed Flexi STAR": [
                "Guaranteed benefit options",
                "Flexible premium and policy term choices",
                "Life protection",
                "Income or lump-sum options"
            ],

            "Premier Guaranteed STAR": [
                "Guaranteed income and/or maturity benefit",
                "Life protection",
                "Flexible policy options",
                "Rider options may be available"
            ],

            "Flexi Goal Secure": [
                "Life insurance protection",
                "Multiple benefit options",
                "Future goal planning",
                "Survival benefit options"
            ],

            "Flexi Dream Plan": [
                "Life insurance protection",
                "Multiple payout options",
                "Future financial planning",
                "Flexible benefit options"
            ],

            "Wealth Rise+": [
                "Market-linked wealth accumulation",
                "Life protection",
                "Fund choices",
                "Additional benefit options"
            ],

            "Wealth Plus": [
                "Life cover plus wealth accumulation",
                "Multiple fund options",
                "Child-focused benefit options",
                "Long-term wealth planning"
            ],

            "Flexi Savings Plan": [
                "Life cover with savings",
                "Flexible income options",
                "Choice of income start year",
                "Bonus may apply as per policy terms"
            ],

            "Wealth Ultima": [
                "Wealth accumulation",
                "Life protection",
                "Fund choices",
                "Long-term financial planning"
            ],

            "Saral Jeevan Bima": [
                "Simple pure term protection",
                "Flexible premium payment options",
                "Life protection for family"
            ]
        },


        "Niva Bupa Health Insurance": {

            "ReAssure 3.0": [
                "Unlimited sum insured option",
                "Restoration benefits",
                "Worldwide treatment option",
                "Health coverage as per policy terms"
            ],

            "Aspire": [
                "Age-lock premium feature",
                "Maternity benefits as applicable",
                "Restoration benefits",
                "Family health protection"
            ],

            "Rise": [
                "Flexible premium options",
                "Health coverage options",
                "Digital consultation benefits",
                "Family protection"
            ]
        }
    };


    /* =====================================================
       INSURANCE TYPE → COMPANY
    ===================================================== */

    function updateCompanies() {

        const selectedType = typeSelect.value;

        companySelect.innerHTML =
            '<option value="">Select Company</option>';

        planSelect.innerHTML =
            '<option value="">First Select Company</option>';

        companySelect.disabled = true;
        planSelect.disabled = true;

        showBenefits([
            "Select a Company & Plan to see key benefits."
        ]);


        if (selectedType === "Life") {

            addCompany("LIC");
            addCompany("Edelweiss Life Insurance");
        }


        else if (selectedType === "Health") {

            addCompany("Niva Bupa Health Insurance");
        }


        else if (selectedType === "Both") {

            addCompany("LIC");
            addCompany("Edelweiss Life Insurance");
            addCompany("Niva Bupa Health Insurance");
        }


        else {

            companySelect.innerHTML =
                '<option value="">First Select Insurance Type</option>';

            return;
        }


        companySelect.disabled = false;
    }


    function addCompany(companyName) {

        const option = document.createElement("option");

        option.value = companyName;
        option.textContent = companyName;

        companySelect.appendChild(option);
    }


    /* =====================================================
       COMPANY → PLAN
    ===================================================== */

    function updatePlans() {

        const selectedCompany = companySelect.value;

        planSelect.innerHTML =
            '<option value="">Select Plan / Product</option>';

        planSelect.disabled = true;

        showBenefits([
            "Select a Plan to see key benefits."
        ]);


        if (!selectedCompany || !planData[selectedCompany]) {
            return;
        }


        Object.keys(planData[selectedCompany]).forEach(function (planName) {

            const option = document.createElement("option");

            option.value = planName;
            option.textContent = planName;

            planSelect.appendChild(option);
        });


        planSelect.disabled = false;
    }


    /* =====================================================
       PLAN → BENEFITS
    ===================================================== */

    function updateBenefits() {

        const selectedCompany = companySelect.value;
        const selectedPlan = planSelect.value;

        if (
            !selectedCompany ||
            !selectedPlan ||
            !planData[selectedCompany] ||
            !planData[selectedCompany][selectedPlan]
        ) {

            showBenefits([
                "Select a Company & Plan to see key benefits."
            ]);

            return;
        }


        showBenefits(
            planData[selectedCompany][selectedPlan]
        );
    }


    function showBenefits(items) {

        if (!benefitsList) {
            return;
        }

        benefitsList.innerHTML = "";


        items.forEach(function (item) {

            const li = document.createElement("li");

            li.textContent = "✓ " + item;

            benefitsList.appendChild(li);
        });
    }


    /* =====================================================
       EVENTS
    ===================================================== */

    typeSelect.addEventListener("change", updateCompanies);

    companySelect.addEventListener("change", updatePlans);

    planSelect.addEventListener("change", updateBenefits);


    /* =====================================================
       WHATSAPP INQUIRY
    ===================================================== */

    window.sendInquiryToWhatsApp = function () {

        const name =
            document.getElementById("inqName").value.trim();

        const mobile =
            document.getElementById("inqMobile").value.trim();

        const insuranceType =
            typeSelect.value;

        const company =
            companySelect.value;

        const plan =
            planSelect.value;

        const coverage =
            document.getElementById("inqCoverage").value.trim();

        const message =
            document.getElementById("inqMessage").value.trim();


        /* Required fields */

        if (
            !name ||
            !mobile ||
            !insuranceType ||
            !company ||
            !plan
        ) {

            alert(
                "Please fill Name, Mobile Number, Insurance Type, Company and Plan."
            );

            return;
        }


        /* Mobile validation */

        if (!/^[0-9]{10}$/.test(mobile)) {

            alert(
                "Please enter a valid 10-digit mobile number."
            );

            return;
        }


        /* Google Analytics Lead */

        if (typeof gtag === "function") {

            gtag("event", "generate_lead", {

                method: "WhatsApp",

                insurance_type: insuranceType,

                company: company,

                plan: plan
            });
        }


        /* WhatsApp message */

        const whatsappMessage =
            "🛡️ NEW INSURANCE INQUIRY\n\n" +

            "👤 Name: " +
            name + "\n" +

            "📱 Mobile: " +
            mobile + "\n" +

            "🛡️ Insurance Type: " +
            insuranceType + "\n" +

            "🏢 Company: " +
            company + "\n" +

            "📋 Plan / Product: " +
            plan + "\n" +

            "💰 Coverage / Requirement: " +
            (coverage || "Not specified") + "\n" +

            "📝 Message: " +
            (message || "Not specified") + "\n\n" +

            "📌 From PolicyForYou.in Website";


        const whatsappURL =
            "https://wa.me/918511169616?text=" +
            encodeURIComponent(whatsappMessage);


        window.open(
            whatsappURL,
            "_blank"
        );
    };


    /* =====================================================
       INITIAL STATE
    ===================================================== */

    companySelect.disabled = true;

    planSelect.disabled = true;

});
