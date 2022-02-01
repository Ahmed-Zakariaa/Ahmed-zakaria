//global variable
const activeSection = document.querySelectorAll('section');
console.log(activeSection);
const navLinks = document.querySelectorAll('.nav-link');
console.log(navLinks);
window.addEventListener('scroll', ()=> {
    activeSection.forEach(section => {
        const viewSec = section.getBoundingClientRect();
        const sectionAttr = section.getAttribute('id');
        if (viewSec.top > -30 && viewSec.top < 500) {
            navLinks.forEach(navlink => {
                const actLink = navlink.getAttribute('href');
                if (actLink === '#'+sectionAttr) {
                    navlink.classList.add('active-class')
                }
                else {
                    navlink.classList.remove('active-class')
                }
            })
        }
    });
});
window.addEventListener('scroll' , ()=> {
    const topBtn = document.getElementById('top-btn');
    if (document.documentElement.scrollTop > 350) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }
});
function toTop () {
    document.documentElement.scrollTop = 0;
} 
//const sectionId = activeSection.getAttribute('id');
// navLinks.forEach(navLink=> {
//     const linkAttr = navLink.getAttribute('href');
//     console.log(linkAttr);
//     console.log(sectionId);
//     navLink.addEventListener('click', (evt)=> {
//        // evt.preventDefault();
//     })
// })