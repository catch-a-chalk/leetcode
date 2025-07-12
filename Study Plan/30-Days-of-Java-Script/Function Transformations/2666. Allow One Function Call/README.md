# 2666. Allow One Function Call

**Уровень:** Easy  
**Темы:** #Замыкания #Функции #Декораторы  
**Ссылка:** [LeetCode Problem](https://leetcode.com/problems/allow-one-function-call/)

## 📜 Условие
Реализуйте функцию `once`, которая принимает функцию `fn` и возвращает новую функцию, которая:
- При первом вызове работает идентично `fn`
- При последующих вызовах возвращает `undefined`
- Не вызывает оригинальную функцию повторно

## 🎯 Решения

### Решение 1: с использованием 'флага'
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

### Решение 2: с удалением функции
```javascript
var once = function(fn) {
  return function(...args) {
      if (fn) {
          const result = fn.apply(this, args);
          fn = null;
          return result;
      }
  };
};
```

### Решение 3: подсчёт вызовов
```javascript
var once = function(fn) {
  let callCount = 0;
  return function(...args) {
      if (callCount++ < 1) {
          return fn.apply(this, args);
      }
  };
};
```