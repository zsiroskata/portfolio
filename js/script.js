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



/* slider */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

/*form ellenőrzése*/
function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
        alert('Name is required.');
        return false;
    }

    if (!email || !emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (!message) {
        alert('Message is required.');
        return false;
    }

    fetch('process_form.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            name: name,
            email: email,
            message: message,
        })
    })
    .then(response => response.text())
    .then(data => {
        document.body.innerHTML = data;
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error processing the form.');
    });
}