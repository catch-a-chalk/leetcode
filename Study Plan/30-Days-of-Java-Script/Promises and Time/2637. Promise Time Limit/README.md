# 2637. Promise Time Limit

**Уровень:** Medium  
**Темы:** #Promise #Асинхронность #Таймауты  
**Ссылка:** [LeetCode Problem](https://leetcode.com/problems/promise-time-limit/)

## 📜 Условие
Создайте функцию с ограничением времени выполнения:
1. Принимает асинхронную функцию `fn` и время `t` (мс)
2. Возвращает новую функцию, которая:
   - Resolve с результатом `fn`, если выполнение заняло ≤ `t` мс
   - Reject с `"Time Limit Exceeded"`, если превышен лимит `t`

#### **Пример 1:**  
> **Входные данные:**  
> ```
> fn = async (n) => {  
>  await new Promise(res => setTimeout(res, 100));  
>  return n * n;  
>  }  
> inputs = [5]  
> t = 50  
> ```
> **Выходные данные:** {"rejected":"Time Limit Exceeded","time":50}  
> **Объяснение**:  
> ```
> const limited = timeLimit(fn, t)  
> const start = performance.now()  
> let result;  
> try {  
>   const res = await limited(...inputs)  
>   result = {"resolved": res, "time": Math.floor(performance.now() - start)};  
> } catch (err) {  
>   result = {"rejected": err, "time": Math.floor(performance.now() - start)};  
> }  
> console.log(result) // Выходные данные
> ```
> Входящая функция должна резолвиться через 100мс. Однако, ограничение по времени составляет 50мс, поэтому выполнение будет отменено по прошествии 50мс.

#### **Пример 2:**  
> **Входные данные:**  
> ```
> fn = async (n) => {  
>  await new Promise(res => setTimeout(res, 100));  
>  return n * n;  
> }  
> inputs = [5]  
> t = 150  
> ```
> **Выходные данные:** {"resolved":25,"time":100}  
> **Объяснение**:  
> Функция выполнена 5 * 5 = 25 при t = 100мс. Ограничение по времени не было достигнуто.

#### **Пример 3:**  
> **Входные данные:**  
> ```
> fn = async (a, b) => {  
>  await new Promise(res => setTimeout(res, 120));  
>  return a + b;  
> }  
> inputs = [5,10]  
> t = 150  
> ```
> **Выходные данные:** {"resolved":15,"time":120}  
> **Объяснение**:  
> Функция выполнена 5 + 10 = 15 при t = 120мс. Ограничение по времени не было достигнуто.

#### **Пример 4:**  
> **Входные данные:**  
> ```
> fn = async () => {  
>  throw "Error";  
> }  
> inputs = []  
> t = 1000  
> ```
> **Выходные данные:** {"rejected":"Error","time":0}  
> **Объяснение**:  
> Функция незамедлительно возвращает ошибку.

## 🎯 Решение
### Оптимальное решение (Promise.race)
```javascript
var timeLimit = function(fn, t) {
  return async function(...args) {
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t);
    });
    try {
      const result = await Promise.race([
        fn(...args),
        timeoutPromise
      ]);
      return result;
    } catch (err) {
        throw err;
    }
  };
};
```