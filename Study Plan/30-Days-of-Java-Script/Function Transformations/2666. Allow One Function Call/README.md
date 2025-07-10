# 2666. Allow One Function Call

**Уровень:** Easy  
**Темы:** #Замыкания #Функции #Декораторы  
**Ссылка:** [LeetCode Problem](https://leetcode.com/problems/allow-one-function-call/)

## 📜 Условие
Реализуйте функцию `once`, которая принимает функцию `fn` и возвращает новую функцию, которая:
- При первом вызове работает идентично `fn`
- При последующих вызовах возвращает `undefined`
- Не вызывает оригинальную функцию повторно

## 🎯 Решение
```javascript
var once = function(fn) {
  let called = false;
  return function(...args) {
      if (!called) {
          called = true;
          return fn.apply(this, args);
      }
  };
};
```