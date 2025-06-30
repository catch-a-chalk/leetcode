# 2620. Counter

**Уровень:** Easy  
**Темы:** #Функции #Замыкания  
**Ссылка:** [LeetCode Problem](https://leetcode.com/problems/counter/)

## 📜 Условие
Напишите функцию `createCounter`, которая принимает целое число `n` и возвращает `counter` функцию. Эта функция `counter` сначала возвращает `n`, а затем при каждом последующем вызове возвращает значение на 1 больше предыдущего (`n`, `n + 1`, `n + 2` и т.д.).

#### **Пример 1:**  
> **Входные данные:**  
> `n = 10`  
> **Вызовы:**  
> `counter()`, `counter()`, `counter()`  
> **Выходные данные:**  
> `[10, 11, 12]`  
> **Объяснение:**  
> ```javascript
> const counter = createCounter(10);
> counter(); // 10
> counter(); // 11
> counter(); // 12
> ```

#### **Пример 2:**
> **Входные данные:**  
> `n = -2`  
> **Вызовы:**  
> `counter()`, `counter()`, `counter()`, `counter()`, `counter()`  
> **Выходные данные:**  
> `[-2, -1, 0, 1, 2]`  
> **Объяснение:**  
> ```javascript
> const counter = createCounter(-2);
> counter(); // -2
> counter(); // -1
> counter(); // 0
> counter(); // 1
> counter(); // 2
> ```

#### **Ограничения:**
> - `-1000 <= n <= 1000`

## 🎯 Решение
```javascript
var createCounter = function(n) {
    return function() {
        return n++;
    };
};
```