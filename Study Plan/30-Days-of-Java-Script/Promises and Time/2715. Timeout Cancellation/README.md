# 2715. Timeout Cancellation

**Уровень:** Medium  
**Темы:** #Таймеры #Асинхронность #ОтменаОпераций  
**Ссылка:** [LeetCode Problem](https://leetcode.com/problems/timeout-cancellation/)

## 📜 Условие
Даны функция `fn`, массив аргументов `args` и таймаут `t` в миллисекундах. Требуется вернуть функцию `cancelFn`.  

После  выполнения с задержкой `cancelTimeNs`, вызвать функцию `cancelFn`.  
> `setTimeout(cancelFn, cancelTimeMs)`  

Если `cancelFn` вызвана до истечения `t` - отменить выполнение `fn`.

## 🎯 Решения

### Решение 1: прямолинейный подход
```javascript
var cancellable = function(fn, args, t) {
  const timerId = setTimeout(() => fn(...args), t);
  const cancelFn = () => clearTimeout(timerId);
  return cancelFn;
};
```

### Решение 2: подход ES6
```javascript
var cancellable = (fn, args, t) => {
  const timer = setTimeout(fn, t, ...args);
  return () => clearTimeout(timer);
};
```