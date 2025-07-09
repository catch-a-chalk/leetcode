# 2703. Return Length of Arguments Passed

**Уровень:** Easy  
**Темы:** #Функции #Аргументы #JavaScript  
**Ссылка:** [LeetCode Problem](https://leetcode.com/problems/return-length-of-arguments-passed/)

## 📜 Условие
Напишите функцию `argumentsLength`, которая возвращает количество переданных ей аргументов.

#### **Пример 1:**  
> **Входные данные:** args = [5]  
> **Выходные данные:** 1  
> **Объяснение**:  
> `argumentsLength(5); // 1`  
> Функции передан один аргумент, следовательно, она возвращает число 1  

#### **Пример 2:**  
> **Входные данные:** args = [{}, null, "3"]  
> **Выходные данные:** 3  
> **Объяснение**:  
> `argumentsLength({}, null, "3"); // 3`  
> Функции передано три аргумента, следовательно, она возвращает число 3  

## 🎯 Решение
```javascript
var argumentsLength = function(...args) {
  return args.length;
};
```