const me1 = document.getElementById("me1");
const me2 = document.getElementById("me2");


function vmi() {
    me1.classList.remove("nohide");
    me1.classList.add("hide");

    me2.classList.remove("hide");
    me2.classList.add("nohide");
}

function vmi2() {
    me2.classList.remove("nohide");
    me2.classList.add("hide");

    me1.classList.remove("hide");
    me1.classList.add("nohide");
}
