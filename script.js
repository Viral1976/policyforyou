function trackWhatsAppClick() {
    gtag('event', 'whatsapp_click', {
        event_category: 'Contact',
        event_label: 'WhatsApp Button'
    });
}
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
