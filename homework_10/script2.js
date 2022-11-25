'use strict'

const fibonacci2 = (function makeFibonacciFunction() {
    let nextIndex = 1;
    let lastIndex = -1;
  
    return function () {
      const result = lastIndex + nextIndex;
      lastIndex = nextIndex;
      nextIndex = result;
      console.log(result);
      return result;
    };
  })();
  
  fibonacci2(); // Вывод в консоль: 0
  fibonacci2(); // Вывод в консоль: 1
  fibonacci2(); // Вывод в консоль: 1
  fibonacci2(); // Вывод в консоль: 2
  fibonacci2(); // Вывод в консоль: 3
  fibonacci2(); // Вывод в консоль: 5
  fibonacci2(); // Вывод в консоль: 8
  fibonacci2(); // Вывод в консоль: 13
  fibonacci2(); // Вывод в консоль: 21
  