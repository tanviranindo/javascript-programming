let toggle = false;

const clearText = () => {
    document.getElementById("magicBox").value = "";
};

const toggleCase = () => {
    if (toggle) document.getElementById("magicBox").value = document.getElementById("magicBox").value.toLowerCase();
    else document.getElementById("magicBox").value = document.getElementById("magicBox").value.toUpperCase();
    toggle = !toggle;
};

const sortText = () => {
    let array = [];
    document.getElementById("magicBox").value.split("\n").forEach((value) => {
        array.push(value);
    });

    document.getElementById("magicBox").value = array.sort().join("\n");
};

const reverseText = () => {
    let array = [];
    document.getElementById("magicBox").value.split("\n").forEach((value) => {
        array.push(value);
    });

    document.getElementById("magicBox").value = array.reverse().join("\n");
};

const stripBlank = () => {
    let array = [];
    document.getElementById("magicBox").value.split("\n").forEach((value) => {
        let temp = value.trim();
        if (temp != "") array.push(temp);
    });

    document.getElementById("magicBox").value = array.join("\n");
};

const addNumber = () => {
    let array = [];
    document.getElementById("magicBox").value.split("\n").forEach((value, index) => {
        array.push(index + 1 + ". " + value);
    });

    document.getElementById("magicBox").value = array.join("\n");
};

const shuffle = () => {
    let arr = document.getElementById("magicBox").value.split("\n");
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    document.getElementById("magicBox").value = arr.join("\n");
};