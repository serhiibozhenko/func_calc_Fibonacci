let operationAgain = true;
while (operationAgain) {
  let f0;
  let f1;
  let n;
  while (
    isNaN(f0) ||
    f0 == "" ||
    (f0 == null && isNaN(f1)) ||
    f1 == "" ||
    (f1 == null && isNaN(n)) ||
    n == "" ||
    n == null
  ) {
    f0 = +prompt(
      "Введите первое число для подсчета n-го обобщенного числа Фибоначчи"
    );

    f1 = +prompt(
      "Введите второе число для подсчета n-го обобщенного числа Фибоначчи"
    );

    n = +prompt("Введите порядковый номер числа Фибоначчи, которое надо найти");
  }

  function fibonachi(f0, f1, n) {
    if (n > 0) {
      let i;
      for (i = 3; i <= n; i++) {
        let f2 = f0 + f1;
        f0 = f1;
        f1 = f2;
      }
      return f1;
    } else
      for (i = 3; i <= n; i++) {
        let f2 = f0 - f1;
        f0 = f1;
        f1 = f2;
      }
    return f1;
  }

  alert(fibonachi(f0, f1, n));

  operationAgain = confirm(
    "Хотите снова реализовать функцию для подсчета n-го обобщенного числа Фибоначчи?"
  );
}
