const xhttp = new XMLHttpRequest();
const endPointRoot = "https://tommypardeepproject.xyz/labs/5";

const errorMsg = "Invalid Input! Please try again!";

function getAll() {
    xhttp.open("GET", endPointRoot, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        output_text = "";
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText)
            for (let each in data) {
                output_text += data[each]["user_name"] + ": " + data[each]["user_score"] + "</br></br>";
            }
            console.log(output_text);
            document.getElementById("data").innerHTML = output_text;
        }
    }

}

getAll();