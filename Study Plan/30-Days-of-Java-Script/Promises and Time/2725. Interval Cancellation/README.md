# 2725. Interval Cancellation

**Уровень:** Medium  
**Темы:** #Таймеры #Асинхронность #Интервалы  
**Ссылка:** [LeetCode Problem](https://leetcode.com/problems/interval-cancellation/)

## 📜 Условие
Даны функция `fn`, массив аргументов `args` и временной интервал `t`. Вернуть функцию `cancelFn` для остановки интервала.  
После задержки `cancelTimeMs` будет вызвана останавливающая функция `cancelFn`.  
> `setTimeout(cancelFn, cancelTimeMs)`  

Функция `fn` с `args` должна вызываться немедленно, после чего она снова вызывается каждые `t` миллисекунд до тех пор, пока `cancelFn` не вызовется в `cancelTimeMs` мс.

#### **Пример 1:**  
> **Входные данные:** fn = (x) => x * 2, args = [4], t = 35  
> **Выходные данные:**
>```
>[  
>  {"time": 0, "returned": 8},  
>  {"time": 35, "returned": 8},  
>  {"time": 70, "returned": 8},  
>  {"time": 105, "returned": 8},  
>  {"time": 140, "returned": 8},  
>  {"time": 175, "returned": 8}  
>]  
>```  
> **Объяснение**:  
>```  
> const cancelTimeMs = 190;  
> const cancelFn = cancellable((x) => x * 2, [4], 35);  
> setTimeout(cancelFn, cancelTimeMs);  
> ```  
> Каждые 35ms вызывается fn(4). До тех пор, пока t не будет равно 190ms, функция будет вызываться.  
> 1-й вызов в 0ms. fn(4) возвращает 8.  
> 2-й вызов в 35ms. fn(4) возвращает 8.  
> 3-й вызов в 70ms. fn(4) возвращает 8.  
> 4-й вызов в 105ms. fn(4) возвращает 8.  
> 5-й вызов в 140ms. fn(4) возвращает 8.  
> 6-й вызов в 175ms. fn(4) возвращает 8.  
> Останавливается в 190ms  

#### **Пример 2:**  
> **Входные данные:** fn = (x1, x2) => (x1 * x2), args = [2, 5], t = 30  
> **Выходные данные:**
>```
>[  
>  {"time": 0, "returned": 10},  
>  {"time": 30, "returned": 10},  
>  {"time": 60, "returned": 10},  
>  {"time": 90, "returned": 10},  
>  {"time": 120, "returned": 10},  
>  {"time": 150, "returned": 10}  
>]  
>```  
> **Объяснение**:  
>```  
> const cancelTimeMs = 165;  
> const cancelFn = cancellable((x1, x2) => (x1 * x2), [2, 5], 30)  
> setTimeout(cancelFn, cancelTimeMs)  
> ```  
> Каждые 30ms вызывается fn(2,5 ). До тех пор, пока t не будет равно 195ms, функция будет вызываться.  
> 1-й вызов fn в 0ms  
> 2-й вызов fn в 30ms  
> 3-й вызов fn в 60ms  
> 4-й fвызов n в 90ms  
> 5-й вызов fn в 120ms  
> 6-й вызов fn в 150ms  
> Останавливается в 165ms  

## 🎯 Решение
### Оптимальное решение (с `setInterval`)
```javascript
var cancellable = function(fn, args, t) {
  fn(...args); // Немедленный вызов
  const timer = setInterval(() => fn(...args), t);
  return () => clearInterval(timer); // Функция отмены
};
```