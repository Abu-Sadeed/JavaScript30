const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handleEnter(){
    this.classList.add("trigger-enter");
    setTimeout(() => this.classList.contains("trigger-enter") && this.classList.add("trigger-enter-active"), 150);
    background.classList.add("open");
    const dropdown = this.querySelector(".dropdown");
    const dropdownCords = dropdown.getBoundingClientRect();
    const navCords = nav.getBoundingClientRect();

    const cords = {
        width: dropdownCords.width,
        height: dropdownCords.height,
        top: dropdownCords.top - navCords.top + window.scrollY,
        left: dropdownCords.left -navCords.left + window.scrollX
    };

    background.style.width = `${cords.width}px`;
    background.style.height = `${cords.height}px`;
    background.style.transform = `translate(${cords.left}px, ${cords.top}px`;
    
}

function handleLeave(){
    this.classList.remove("trigger-enter", "trigger-enter-active");
    background.classList.remove("open");
}

triggers.forEach(trigger => trigger.addEventListener("mouseenter", handleEnter));
triggers.forEach(trigger => trigger.addEventListener("mouseleave", handleLeave));