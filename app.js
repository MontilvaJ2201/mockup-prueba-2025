var registerButton = document.getElementById("registerButton");
if (registerButton) {
    registerButton.addEventListener("click", function() {
        var form = document.querySelector(".hero-fields");
        if (form instanceof HTMLElement) {
            var isFormVisible = form.style.maxHeight !== "0px";
            form.style.maxHeight = isFormVisible ? "0px" : form.scrollHeight + "px";
        } else {
            console.log("No se pudo encontrar el elemento .hero-fields o no es un HTMLElement");
        }
    });
} else {
    console.log("No se pudo encontrar el elemento #registerButton");
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var header = document.querySelector('.header');
    var cardSection = document.querySelector('.card-section').getBoundingClientRect();
    if (window.pageYOffset >= cardSection.top) {
        navbar.style.position = 'fixed';
        navbar.style.backgroundColor = 'rgb(26, 112, 151)';
        navbar.style.color = '#fff';
        header.style.backgroundColor = 'rgb(26, 112, 151)';
        header.style.color = '';
        link.style.color = 'rgb(26, 112, 151)';

        var headerLinks = header.querySelectorAll('a, a i, a p');
        headerLinks.forEach(function(link) {
            link.style.color = 'rgb(26, 112, 151) !important';
        });
    } else {
        navbar.style.position = 'sticky';
        navbar.style.backgroundColor = 'transparent';
        navbar.style.color = '#000';
        header.style.backgroundColor = 'rgb(26, 112, 151)';
        header.style.color = '';

        var headerLinks = header.querySelectorAll('a, a i, a p');
        headerLinks.forEach(function(link) {
            link.style.color = '';
        });
    }
});

let videos = document.querySelectorAll('.video');
let indicators = document.querySelectorAll('.indicator');
let currentVideo = 0;
let modal = document.getElementById('myModal');
let modalVideo = document.getElementById('modal-video');
let close = document.querySelector('.close');
let playIcon = document.querySelector('.play-icon');

if (videos[currentVideo]) {
    videos[currentVideo].play();
    indicators[currentVideo].classList.add('active');
}

setInterval(function() {
    if (videos[currentVideo]) {
        videos[currentVideo].style.display = 'none';
        indicators[currentVideo].classList.remove('active');
        
        currentVideo = (currentVideo + 1) % videos.length;
        
        if (videos[currentVideo]) {
            videos[currentVideo].style.display = 'block';
            videos[currentVideo].play();
            
            indicators[currentVideo].classList.add('active');
        }
    }
}, 5000);

if (playIcon) {
    playIcon.addEventListener('click', function() {
        if (modal && modalVideo && videos[currentVideo]) {
            modal.style.display = 'block';
            modalVideo.src = videos[currentVideo].src;
            modalVideo.play();
        }
    });
}

if (close) {
    close.addEventListener('click', function() {
        if (modal && modalVideo) {
            modal.style.display = 'none';
            modalVideo.pause();
        }
    });
}

var toggleButton = document.getElementById('toggle-button');
var toggleContainer = document.querySelector('.toggle-container');
var isToggled = false;

toggleButton.addEventListener('click', function() {
    isToggled = !isToggled;
    if (isToggled) {
        toggleButton.style.transform = 'translateX(' + (toggleContainer.offsetWidth - toggleButton.offsetWidth) + 'px)';
    } else {
        toggleButton.style.transform = 'translateX(0)';
    }
});