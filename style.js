document.addEventListener("DOMContentLoaded", () =>{


    const hamburger =
    document.querySelector(".hamburger");
    const menu =
    document.querySelector(".navbar ul");

    hamburger.addEventListener("click", () =>{
        menu.classList.toggle("active");
    });


console.log("connected!");

const scrollContainer =
document.querySelector('.room-scrol');
const leftBtn =
document.querySelector('.arrow-left');
const rightBtn =
document.querySelector('.arrow-right');

console.log(scrollContainer, leftBtn,
    rightBtn
);

const scrollAmount = 300;

rightBtn.addEventListener('click', ()=> {
    scrollContainer.scrollBy({
        left: scrollAmount,
    behave: 'smooth'
});
});

leftBtn.addEventListener('click', ()=> {
    scrollContainer.scrollBy({
        left:-scrollAmount,
    behave: 'smooth'
});
});









function checkScroll() {
    const maxScroll = 
    scrollContainer.scrollWidth - 
    scrollContainer.clientWidth;

        leftBtn.disabled = 
    scrollContainer.scrollLeft <= 0;
        rightBtn.disabled =
    scrollContainer.scrollLeft >= maxScroll;
}

scrollContainer.addEventListener('scroll',
    checkScroll);
    checkScroll();

})