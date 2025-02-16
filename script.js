function toggleMenu(){
    // document is a inbuilt js to target an element in a webpage
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    // when clicked will add or remove the open class
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}