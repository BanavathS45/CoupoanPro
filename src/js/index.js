const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close1 = document.getElementById("close");
if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active")
    })
}
if (close1) {
    close1.addEventListener("click", () => {
        nav.classList.remove("active")
    })
}
feature = [{
        image: "../Assets/Images/Features/f1.png",
        title: "Free Shipping"
    },
    {
        image: "../Assets/Images/Features/f2.png",
        title: "Online Order"
    },
    {
        image: "../Assets/Images/Features/f3.png",
        title: "Save Money"
    },
    {
        image: "../Assets/Images/Features/f4.png",
        title: " Promotions"
    },
    {
        image: "../Assets/Images/Features/f5.png",
        title: "Happy Sell"
    },
    {
        image: "../Assets/Images/Features/f6.png",
        title: "24/7 Support"
    }



]