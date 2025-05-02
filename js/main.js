const mainMenus = document.querySelectorAll(".main-menu");
const brHead = document.querySelector(".br-head");
mainMenus.forEach((menu) => {
  const subMenu = menu.querySelector(".sub-menu");
  menu.addEventListener("mouseenter", () => {
    document
      .querySelectorAll(".sub-menu")
      .forEach((sm) => sm.classList.remove("show"));
    if (subMenu) subMenu.classList.add("show");
    brHead.classList.add("active");
  });
});
document.addEventListener("mousemove", (e) => {
  const inMenu = e.target.closest(".br-menu") || e.target.closest(".sub-menu");
  if (!inMenu) {
    document
      .querySelectorAll(".sub-menu")
      .forEach((sm) => sm.classList.remove("show"));
    brHead.classList.remove("active");
  }
});
