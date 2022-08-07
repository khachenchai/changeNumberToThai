var thaiNumber = ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"];
        
function convertNumberToThai() {
    var originalText = document.getElementById("original").value;
    var i = 0;
    thaiNumber.forEach(element => {
        originalText = originalText.replace(new RegExp(i, 'g'), element);
        i++;
    });
    document.getElementById("converted").value = originalText;
}