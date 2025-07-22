# 2715. Timeout Cancellation

**Уровень:** Medium  
**Темы:** #Таймеры #Асинхронность #ОтменаОпераций  
**Ссылка:** [LeetCode Problem](https://leetcode.com/problems/timeout-cancellation/)

## 📜 Условие
Даны функция `fn`, массив аргументов `args` и таймаут `t` в миллисекундах. Требуется вернуть функцию `cancelFn`.  

После  выполнения с задержкой `cancelTimeNs`, вызвать функцию `cancelFn`.  
> `setTimeout(cancelFn, cancelTimeMs)`  

Если `cancelFn` вызвана до истечения `t` - отменить выполнение `fn`.

#### **Пример 1:**  
> **Входные данные:** fn = (x) => x * 5, args = [2], t = 20  
> **Выходные данные:** [{"time": 20, "returned": 10}]  
> **Объяснение**:  
> const cancelTimeMs = 50;  
> const cancelFn = cancellable((x) => x * 5, [2], 20);  
> setTimeout(cancelFn, cancelTimeMs);  
> После выполнения функции `fn(2)` на 20мс, останавливающая функция `cancelFn` была отложена на 50мс после вызова `cancelTimeMs`.  

#### **Пример 2:**  
> **Входные данные:** fn = (x1, x2) => x1 * x2, args = [2,4], t = 30  
> **Выходные данные:** [{"time": 30, "returned": 8}]  
> **Объяснение**:  
> const cancelTimeMs = 100;  
> const cancelFn = cancellable((x1, x2) => x1 * x2, [2,4], 30);  
> setTimeout(cancelFn, cancelTimeMs);  
> После выполнения функции `fn(2, 4)` на 30мс, останавливающая функция `cancelFn` была отложена на 100мс после вызова `cancelTimeMs`.  

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