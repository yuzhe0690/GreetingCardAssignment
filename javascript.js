var submit = document.getElementById("submit");
submit.addEventListener("click", displayDetails);

var row = 0;
var newRow = display.insertRow(row);

function displayDetails() {

    var message = document.getElementById("message").value;

    if (!message) {
        alert("Please Fill All The Boxes");
        return;
    }
    var display = document.getElementById("display");

    var cell1 = newRow.insertCell(0);   

    cell1.innerHTML = message;

    var responsive = document.getElementById("responsive");
    newRow = responsive.insertRow(row);

}
