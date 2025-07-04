# 2635. Apply Transform Over Each Element in Array

**Уровень:** Easy  
**Темы:** #Массивы #Функции #Итерация  
**Ссылка:** [LeetCode Problem](https://leetcode.com/problems/apply-transform-over-each-element-in-array/)

## 📜 Условие
Реализуйте функцию `map`, которая принимает массив `arr` и функцию преобразования `fn`, и возвращает новый массив, где каждый элемент преобразован через `fn(arr[i], i)`.  
**Запрещено** использовать встроенный `Array.map()`.

## 🎯 Решение
```javascript
var map = function(arr, fn) {
    const newArr = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = fn(arr[i], i);
    }
    return newArr;
};
```