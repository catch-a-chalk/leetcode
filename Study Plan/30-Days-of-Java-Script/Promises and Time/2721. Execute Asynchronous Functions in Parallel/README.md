# 2721. Execute Asynchronous Functions in Parallel

**Уровень:** Medium  
**Темы:** #Асинхронность #Promises #ПараллельноеВыполнение  
**Ссылка:** [LeetCode Problem](https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/)

## 📜 Условие
Дан массив асинхронных функций `functions`, каждая из которых не принимает аргументов и возвращает промис. Необходимо реализовать функцию, которая выполняет все эти промисы параллельно и возвращает новый промис `promise`, который:

- `Резолвится`, когда все промисы из `functions` параллельно успешно выполнены. Значением будет массив результатов в исходном порядке.
- `Отменяется`, если любой из промисов отклонён. При этом возвращается причина первого отклонённого промиса.

Пожалуйста, решите задачу без встроенной функции `Promise.all()`.

#### **Пример 1:**  
> **Входные данные:** functions = [
>  () => new Promise(resolve => setTimeout(() => resolve(5), 200))
> ]  
> **Выходные данные:** {"t": 200, "resolved": [5]}  
> **Объяснение**:  
> promiseAll(functions).then(console.log); // [5]  
> Одиночная функция была исполнена при 200ms с величиной 5.  

#### **Пример 2:**  
> **Входные данные:** functions = [
>  () => new Promise(resolve => setTimeout(() => resolve(1), 200)), 
>  () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
> ]  
> **Выходные данные:** {"t": 100, "rejected": "Error"}  
> **Объяснение**:  
> С момента как один из промисов был отклонен, другой возвращенный промис также отклоняется с аналогичной ошибкой в то же время.  

#### **Пример 3:**  
> **Входные данные:** functions = [
>  () => new Promise(resolve => setTimeout(() => resolve(4), 50)), 
>  () => new Promise(resolve => setTimeout(() => resolve(10), 150)), 
>  () => new Promise(resolve => setTimeout(() => resolve(16), 100))
> ]  
> **Выходные данные:** {"t": 150, "resolved": [4, 10, 16]}  
> **Объяснение**:  
> Все промисы были возвращены со значением.  

## 🎯 Решение
```javascript
var promiseAll = function(functions) {
  return new Promise((resolve, reject) => {
    const results = [];
    let counted = 0;

    functions.forEach((fn, index) => {
      try {
        fn()
          .then(result => {
            results[index] = result; // cохраняем результат именно по индексу, чтобы не нарушить порядок
            counted++;
            if (counted === functions.length) {
              resolve(results);
            }
          })
          .catch(reject);
      }
      catch (error) {
        reject(error);
      }
    });
    if (functions.length === 0) {
      resolve([]);
    }
  });
};
```