/*const body = document.querySelector("body");
      
      const menuBtn = document.querySelector(".menu-btn");
      const cancelBtn = document.querySelector(".cancel-btn");*/
/*menuBtn.onclick =() => {
        navbar.classList.add("show");
        menuBtn.classList.add("hide");
        body.classList.add("disabled");
      };
      cancelBtn.onclick = () => {
        body.classList.remove("disabled");
        navbar.classList.remove("show");
        menuBtn.classList.remove("hide");
      };*/
function Sticky() {
  const navbar = document.querySelector(".navbar1");
  console.log(navbar);
  window.onscroll = () => {
    this.scrollY > 20
      ? navbar.classList.add("sticky")
      : navbar.classList.remove("sticky");
  };
}

/*function MenuBtn() {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
}
function CancelBtn() {
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}*/
