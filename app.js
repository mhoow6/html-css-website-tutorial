// 가급적 DOM 엘리먼트를 가져올때는 getElementById을 쓰자
// getElementById 리턴값은 HTMLCollection (name, id, index number로 HTMLCollection의 항목(itmes)들에 접근할 수 있다)
// querySelector 리턴값은 NodeList (index Number로만 NodeList의 항목(items)들에 접근할 수 있다)
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});
