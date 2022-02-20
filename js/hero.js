const lbtokg = 0.4536;
const kgtolb = 2.2046;

function convert(value) {

    if (document.getElementById("convert").value == "1") {
        document.getElementById("output").value = (value * lbtokg).toFixed(4) + " kilograms";
        console.log(document.querySelector("output").value)
    } else if (document.getElementById("convert").value == "2") {
        document.getElementById("output").value = (value * kgtolb).toFixed(4) + " pounds";
    }

    if (document.getElementById("convert-input").value == 0) {
        document.getElementById("output").value = "";
    }
};

var changeConversion = () => {
    var value = document.getElementById("convert-input").value;
    if (value == 0) return 0;
    convert(value);
};

var clearit = () => {
    document.getElementById("convert-input").value = "";
    document.getElementById("output").value = "";
};