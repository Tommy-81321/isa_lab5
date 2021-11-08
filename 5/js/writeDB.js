const xhttp = new XMLHttpRequest();
const endPointRoot = "https://tommypardeepproject.xyz/labs/5";

const errorMsg = "Invalid Input! Please try again!";

function post() {
    let name = document.getElementById("name").value;
    let score = document.getElementById("score").value;

    if (name.length != 0 && score.length != 0 && isNaN(name) && isNaN(score) == false) {
        let params = "name=" + name + "&score=" + score;
        console.log(params);

        xhttp.open("POST", endPointRoot, true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(params);
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("msg").innerHTML = this.responseText;
            }
        }
    } else {
        document.getElementById("msg").innerHTML = errorMsg;
    }
}