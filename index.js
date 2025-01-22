// var navLinks = document.getElementById("navLinks");
// function showMenu(){
//     navLinks.style.right = "0";
// }
// function hideMenu(){
//     navLinks.style.right = "-200px";
// }



var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}






    const nav = document.querySelector('.nav-links');
    const toggleMenu = document.querySelector('.fa');

    toggleMenu.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });





// Campus -student start 
// JavaScript to toggle showing more students
document.getElementById("moreBtn").addEventListener("click", function(event) {
    event.preventDefault();  // Prevent default link behavior
    const hiddenStudents = document.querySelectorAll(".hidden-students");

    // Loop through hidden students and reveal them
    hiddenStudents.forEach(function(student) {
        if (student.style.display === "none" || student.style.display === "") {
            student.style.display = "block";  // Show hidden students
        } else {
            student.style.display = "none";  // Hide them again if clicked multiple times
        }
    });

    // Toggle the button text between "MORE STUDENT" and "LESS STUDENT"
    if (this.innerHTML === "MORE STUDENT") {
        this.innerHTML = "LESS STUDENT";
    } else {
        this.innerHTML = "MORE STUDENT";
    }
});



// staffs 


// Initialize the carousel with auto-slide (optional)
var myCarousel = document.querySelector('#testimonialCarousel');
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000, // Auto-slide every 3 seconds
  pause: 'hover'
});


//  Email verification code 


document.getElementById('contactForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var subject = document.getElementById('subject').value.trim();
    var message = document.getElementById('message').value.trim();
    var errorMessage = document.getElementById('error-message');

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Validate form fields
    if (name === '' || email === '' || subject === '' || message === '') {
        errorMessage.textContent = 'All fields are required!';
        event.preventDefault(); // Stop form submission
        return;
    }

    // Validate email
    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address!';
        event.preventDefault(); // Stop form submission
        return;
    }

    // If no errors, clear the error message
    errorMessage.textContent = '';
});



// about us 
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}









