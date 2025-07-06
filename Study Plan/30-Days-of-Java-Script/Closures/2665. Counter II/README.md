# 2665. Counter II

**Уровень:** Easy  
**Темы:** #Замыкания #Объекты #Инкапсуляция  
**Ссылка:** [LeetCode Problem](https://leetcode.com/problems/counter-ii/)

## 📜 Условие  
Напишите функцию `createCounter`, которая принимает целое число `init` и возвращает объект с тремя методами:  

1. `increment()` — увеличивает текущее значение на 1 и возвращает его
2. `decrement()` — уменьшает текущее значение на 1 и возвращает его
3. `reset()` — сбрасывает значение до `init` и возвращает его

#### **Пример 1:**  
> **Входные данные:** init = 5, calls = ["increment","reset","decrement"]  
> **Выходные данные:** [6,5,4]  
> **Объяснение**:  
> ```javascript
> const counter = createCounter(5);  
> counter.increment(); // 6  
> counter.reset(); // 5  
> counter.decrement(); // 4  
> ```

#### **Пример 2:**  
> **Входные данные:** init = 0, calls = ["increment","increment","decrement","reset","reset"]  
> **Выходные данные:** [1,2,1,0,0]  
> **Объяснение**:  
> ```javascript
> const counter = createCounter(0);  
> counter.increment(); // 1  
> counter.increment(); // 2  
> counter.decrement(); // 1  
> counter.reset(); // 0  
> counter.reset(); // 0  
> ```

## 🎯 Решение #1
```javascript
var createCounter = function(init) {
    let currentValue = init;

    return {
        increment: function() {
            return ++currentValue;
        },
        decrement: function() {
            return --currentValue;
        },
        reset: function() {
            return (currentValue = init);
        }
    };
};
```