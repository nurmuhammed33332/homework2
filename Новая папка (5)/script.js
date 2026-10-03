let num = prompt("Введите число:");

if (num === null || num.trim() === "" || isNaN(num)) {
  alert("введите только числа");
} else {
  num = Number(num);
  if (num % 2 === 0) {
    alert("четное");
  } else {
    alert("нечетное");
  }
}