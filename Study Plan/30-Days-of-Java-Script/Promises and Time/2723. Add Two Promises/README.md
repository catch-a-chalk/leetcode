# 2723. Add Two Promises

**Уровень:** Easy  
**Темы:** #Promise #Async/Await #Асинхронность  
**Ссылка:** [LeetCode Problem](https://leetcode.com/problems/add-two-promises/)

## 📜 Условие
Даны два промиса `promise1` и `promise2`, каждый из которых резолвится с числом. Необходимо вернуть новый промис, который возвращает сумму этих чисел.

#### **Пример 1:**  
> **Входные данные:**  
> promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)),  
> promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))  
> **Выходные данные:** 7  
> **Объяснение**:  
> Два исходных промиса возвращают числа 2 и 5, возвращаемый по условиям задачи промис будет результатом сложения 2 + 5 = 7. Время, при котором промисы срабатывают, идет последовательно и не мешает ходу задачи.

#### **Пример 2:**  
> **Входные данные:**  
> promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)),  
> promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))  
> **Выходные данные:** -2  
> **Объяснение**:  
> Два исходных промиса возвращают числа 10 и -12, возвращаемый по условиям задачи промис будет результатом сложения 10 + -12 = 2.  

## 🎯 Решения

### Решение 1: Async/Await (самое читаемое)
```javascript
var addTwoPromises = async function(promise1, promise2) {
  return await promise1 + await promise2;
};
```

### Решение 2: используем Promise.all
```javascript
var addTwoPromises = function(promise1, promise2) {
  return Promise.all([promise1, promise2])
    .then(([num1, num2]) => num1 + num2);
};
```

### Решение 3: вложенное then
```javascript
var addTwoPromises = function(promise1, promise2) {
  return new Promise((resolve) => {
    promise1.then((num1) => {
      promise2.then((num2) => {
          resolve(num1 + num2);
      });
    });
  });
};
```