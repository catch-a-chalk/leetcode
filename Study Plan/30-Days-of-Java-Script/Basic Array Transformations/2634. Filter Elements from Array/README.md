# 2634. Filter Elements from Array

**Уровень:** Easy  
**Темы:** #Массивы #Функции #Фильтрация  
**Ссылка:** [LeetCode Problem](https://leetcode.com/problems/filter-elements-from-array/)

## 📜 Условие
Реализуйте функцию `filter`, которая принимает массив `arr` и функцию-фильтр `fn`, и возвращает новый массив, содержащий только элементы, для которых `fn(arr[i], i)` возвращает truthy-значение.  
**Запрещено** использовать встроенный `Array.filter()`.

#### **Пример 1:**  
> **Входные данные:** arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }  
> **Выходные данные:** [20,30]  
> **Объяснение**:  
> `const newArray = filter(arr, fn); // [20, 30]`  
> Функция вычеркивает все величины, которые меньше 10  

#### **Пример 2:**  
> **Входные данные:** arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }  
> **Выходные данные:** [1]  
> **Объяснение**:  
> `fn` может принимать индекс каждого элемента массива  
> В таком случае функция удаляет все элементы, индекс которых не равен 0  

#### **Пример 3:**  
> **Входные данные:** arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }  
> **Выходные данные:** [-2,0,1,2]  
> **Объяснение**:  
> Ложные (falsey) значения, такие как 0, должны отфильтровываться  
> Функция plusOne добавляет 1 к каждому элементу, таким образом:  
> ```javascript
> -2 → 0 (-2+1= -1, но -1 это truthy)  
> -1 → 0 (-1+1= 0 → falsey → удаляется)  
> 0 → 1 (0+1=1 → truthy)  
> 1 → 2 (1+1=2 → truthy)  
> 2 → 3 (2+1=3 → truthy)  
> ```

## 🎯 Решения

### Решение 1: Императивный подход
```javascript
var filter = function(arr, fn) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
};
```
### Решение 2: Фуцнкциональный подход
```javascript
var filter = function(arr, fn) {
    return arr.reduce((acc, val, i) => {
        if (fn(val, i)) acc.push(val);
        return acc;
    }, []);
};
```