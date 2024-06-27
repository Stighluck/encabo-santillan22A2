function toggleAnswer(element) {
    let arrow = element;
    let answer = element.nextElementSibling; 

    let currentRotation = arrow.style.transform;
    if (currentRotation === "rotate(90deg)") {
        arrow.style.transform = "rotate(0deg)";
        arrow.style.color = "#1b1b1b";
    } else {
        arrow.style.transform = "rotate(90deg)";
        arrow.style.color = "#ff6060";
    }
    arrow.style.transition = "transform 0.3s ease";

    answer.classList.toggle('expanded');
}zx
function updateFavicon() {
    const lightFavicon = document.getElementById('favicon-light');
    const darkFavicon = document.getElementById('favicon-dark');
    
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        lightFavicon.setAttribute('rel', 'alternate icon');
        darkFavicon.setAttribute('rel', 'icon');
    } else {
        lightFavicon.setAttribute('rel', 'icon');
        darkFavicon.setAttribute('rel', 'alternate icon');
    }
}
updateFavicon();
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);

function openLogin() {
    const overlay = document.getElementById("overlaylogin");
    const form = document.getElementById("loginform");
    overlay.style.display = "block"; 
    form.style.display = "block";
    requestAnimationFrame(() => {
        overlay.classList.add('activated');
        form.classList.add('activated');
    });
}

function exitLogin() {
    const overlay = document.getElementById("overlaylogin");
    const form = document.getElementById("loginform");
    overlay.classList.remove('activated');
    overlay.addEventListener('transitionend', handleTransitionEnd);
    form.classList.remove('activated');
    form.addEventListener('transitionend', handleTransitionEnd);

    function handleTransitionEnd() {
        overlay.style.display = 'none'; 
        overlay.removeEventListener('transitionend', handleTransitionEnd);
        form.style.display = 'none'; 
        form.removeEventListener('transitionend', handleTransitionEnd);
    }
}
function openContactUs() {
    const overlay = document.getElementById("overlaycontact");
    overlay.style.display = "block"; 
    const form = document.getElementById("contactform");
    form.style.display = "block"; 
    
    requestAnimationFrame(() => {
        overlay.classList.add('activated');
        form.classList.add('activated');
    });
}

function exitContactUs() {
    const overlay = document.getElementById("overlaycontact");
    const form = document.getElementById("contactform");
    overlay.classList.remove('activated');
    overlay.addEventListener('transitionend', handleTransitionEnd);
    form.classList.remove('activated');
    form.addEventListener('transitionend', handleTransitionEnd);

    
    function handleTransitionEnd() {
        overlay.style.display = 'none'; 
        overlay.removeEventListener('transitionend', handleTransitionEnd);
        form.style.display = 'none'; 
        form.removeEventListener('transitionend', handleTransitionEnd);
    }
}


