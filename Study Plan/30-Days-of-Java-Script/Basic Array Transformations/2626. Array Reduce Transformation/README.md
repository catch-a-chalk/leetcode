# 2626. Array Reduce Transformation

**Уровень:** Easy  
**Темы:** #Массивы #Функции #Reduce  
**Ссылка:** [LeetCode Problem](https://leetcode.com/problems/array-reduce-transformation/)

## 📜 Условие
Реализуйте функцию `reduce`, которая:
- Принимает массив `nums`, функцию `fn` и начальное значение `init`
- Возвращает результат последовательного применения `fn` к каждому элементу  
**Запрещено** использовать встроенный `Array.reduce()`.

#### **Пример 1:**  
> **Входные данные:** nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0  
> **Выходные данные:** 10  
> **Объяснение**:  
> Начальное значение `init= 0`  
> (0) + nums[0] = 1  
> (1) + nums[1] = 3  
> (3) + nums[2] = 6  
> (6) + nums[3] = 10  
> Результатом будет ответ 10  

#### **Пример 2:**  
> **Входные данные:** nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100  
> **Выходные данные:** 130  
> **Объяснение**:  
> Начальное значение `init= 100`  
> (100) + nums[0] * nums[0] = 101  
> (101) + nums[1] * nums[1] = 105  
> (105) + nums[2] * nums[2] = 114  
> (114) + nums[3] * nums[3] = 130  
> Результатом будет ответ 130  

#### **Пример 3:**  
> **Входные данные:** nums = []
fn = function sum(accum, curr) { return 0; }
init = 25  
> **Выходные данные:** 25  
> **Объяснение**:  
> Для пустых массивов результатом всегда будет исходное значение  

## 🎯 Решение
```javascript
var reduce = function(nums, fn, init) {
    if (nums.length !== 0) {
        let val = fn(init, nums[0]);
        for (let i = 1; i < nums.length; i++) {
            val = fn(val, nums[i]);
        }
        return val;
    }
    return init;
}
```