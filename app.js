const btn = document.querySelector("#v2");
btn.onclick = function () {
  console.log("You clicked me");
};
function scream() {
  console.log("AAA");
}
btn.onmouseenter = scream;

const btn3 = document.querySelector("#v3");

btn3.addEventListener("click", () => {
  alert("Clicked");
});
