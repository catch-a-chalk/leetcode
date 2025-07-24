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