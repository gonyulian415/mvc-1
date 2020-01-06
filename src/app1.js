import $ from "jquery";
import "./app1.css";
const $btn1 = $("#add1");
const $btn2 = $("#minus1");
const $btn3 = $("#mul2");
const $btn4 = $("#divide2");
const $num = $("#number");

const n = localStorage.getItem("n");
$num.text(n || 100);

$btn1.on("click", () => {
  let num = parseInt($num.text());
  num += 1;
  localStorage.setItem("n", num);
  $num.text(num);
});
$btn2.on("click", () => {
  let num = parseInt($num.text());
  num -= 1;
  localStorage.setItem("n", num);
  $num.text(num);
});
$btn3.on("click", () => {
  let num = parseInt($num.text());
  num *= 2;
  localStorage.setItem("n", num);
  $num.text(num);
});
$btn4.on("click", () => {
  let num = parseInt($num.text());
  num /= 2;
  localStorage.setItem("n", num);
  $num.text(num);
});
