function copyPhoneNumber() {
    var tempInput = document.createElement("textarea");
    tempInput.value = "9985852147";
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Phone number copied to clipboard");
}
