# 2704. To Be Or Not To Be

**Уровень:** Easy  
**Темы:** #Функции #Тестирование #ОбработкаОшибок  
**Ссылка:** [LeetCode Problem](https://leetcode.com/problems/to-be-or-not-to-be/)

## 📜 Условие  
Напишите функцию `expect`, которая помогает тестировать код. Она должна принимать любое значение `val` и возвращать объект с двумя методами:

1. `toBe(val)` — сравнивает значения через `===`:
   - Если равны, возвращает `true`
   - Если не равны, выбрасывает ошибку `"Not Equal"`

2. `notToBe(val)` — проверяет неравенство через `!==`:
   - Если не равны, возвращает `true`
   - Если равны, выбрасывает ошибку `"Equal"`

#### **Пример 1:**  
> **Входные данные:** func = () => expect(5).toBe(5)  
> **Выходные данные:** {"value": true}  
> **Объяснение**:  5 === 5, так что это выражение возвращает true  

#### **Пример 2:**  
> **Входные данные:** func = () => expect(5).toBe(null)  
> **Выходные данные:** {"error": "Not Equal"}  
> **Объяснение**:  5 !== null, так что это выражение выбрасывает ошибку throw new Error "Not Equal"

#### **Пример 3:**  
> **Входные данные:** func = () => expect(5).notToBe(null)  
> **Выходные данные:** {"value": true}  
> **Объяснение**:  5 !== null, так что это выражение возвращает true

## 🎯 Решение
```javascript
var expect = function(val) {
    return {
        toBe: function(value) {
            if (val !== value) {
                throw new Error("Not Equal");
            }
            return true;
        },
        notToBe: function(value) {
            if (val === value) {
                throw new Error("Equal");
            }
            return true;
        }
    };
};
```