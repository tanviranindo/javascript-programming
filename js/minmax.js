function minMax() {
    var value = document.getElementById("input").value.toString();



    window.addEventListener('keydown', (element) => {


        if (element.key == "Enter") {
            var numeberList = value.split(" ");
            let min = Number.POSITIVE_INFINITY;
            let max = Number.NEGATIVE_INFINITY;
            let sum = 0;
            var reversed = "";

            for (let index = numeberList.length - 1; index > -1; index--) {
                let number = parseInt(numeberList[index]);
                sum += number;
                if (number < min) min = number;
                if (number > max) max = number;
                reversed += number;
                if (index > 0) reversed += ", ";
            }

            document.getElementById("min").innerHTML = min;
            document.getElementById("max").innerHTML = max;
            document.getElementById("sum").innerHTML = sum;
            document.getElementById("avg").innerHTML = sum / numeberList.length;
            document.getElementById("reverse").innerHTML = reversed;
        }
    })
}