window.addEventListener("scroll", onScroll);

onScroll();

function onScroll() {
    showNavOnScroll();
    showBackToTopButton();

    activateMenuAtCurrentSection(home);
    activateMenuAtCurrentSection(services);
    activateMenuAtCurrentSection(about);
    activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2;

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;
    
    const sectionEndsAt = sectionTop + sectionHeight;

    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

    const sectionId = section.getAttribute("id");
    
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);
  
    menuElement.classList.remove('active');

    if (sectionBoundaries) {
      menuElement.classList.add('active');
    }
}

function showNavOnScroll() {
    const navigation = document.querySelector("#navigation");

    if(scrollY > 0) return navigation.classList.add("scroll");

    navigation.classList.remove("scroll");
}

function showBackToTopButton() {
    const backToTopButton = document.querySelector("#backToTopButton");

    if(scrollY > 400) return backToTopButton.classList.add("show");

    backToTopButton.classList.remove("show");
}

function openMenu() {
    document.body.classList.add("menu-expanded");
}

function closeMenu() {
    document.body.classList.remove("menu-expanded");
}

ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 700,
}).reveal(`
    #home, #home img, #home .stats, 
    #services, #services header, #services .card,
    #about, #about header, #about .content
`);