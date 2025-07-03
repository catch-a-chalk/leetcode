# 2665. Counter II

**Уровень:** Easy  
**Темы:** #Замыкания #Объекты #Инкапсуляция  
**Ссылка:** [LeetCode Problem](https://leetcode.com/problems/counter-ii/)

## 📜 Условие  
Напишите функцию `createCounter`, которая принимает целое число `init` и возвращает объект с тремя методами:  

1. `increment()` — увеличивает текущее значение на 1 и возвращает его
2. `decrement()` — уменьшает текущее значение на 1 и возвращает его
3. `reset()` — сбрасывает значение до `init` и возвращает его

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