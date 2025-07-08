# 2629. Function Composition

**Уровень:** Easy  
**Темы:** #Функции #Композиция #ФункциональноеПрограммирование  
**Ссылка:** [LeetCode Problem](https://leetcode.com/problems/function-composition/)

## 📜 Условие
Даны массив функций `[f1, f2, f3, ..., fn]` и значение `x`. Необходимо реализовать функцию `compose`, которая возвращает новую функцию, представляющую композицию всех функций массива. Композиция выполняется справа налево:  
`fn(x) = f1(f2(f3(...(x))))`  

Для пустого массива функций вернуть identity-функцию `f(x) = x`.  

#### **Пример 1:**  
> **Входные данные:** functions = [x => x + 1, x => x * x, x => 2 * x], x = 4  
> **Выходные данные:** 65  
> **Объяснение**:  
> Вычисляем справа налево  
> Начинаем с `x = 4`  
> 2 * (4) = 8  
> (8) * (8) = 64  
> (64) + 1 = 65  

#### **Пример 2:**  
> **Входные данные:** functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1  
> **Выходные данные:** 1000  
> **Объяснение**:  
> Вычисляем справа налево  
> 10 * (1) = 10  
> 10 * (10) = 100  
> 10 * (100) = 1000  

#### **Пример 3:**  
> **Входные данные:** functions = [], x = 42  
> **Выходные данные:** 42  
> **Объяснение**:  
> Композиция нуля функций — это тождественная функция  

## 🎯 Решения

### Решение 1: используем `reduceRight`
```javascript
var compose = function(functions) {
  return function(x) {
      return functions.reduceRight((acc, fn) => fn(acc), x);
  }
};
```

### Решение 2: используем `reverse`
```javascript
var compose = function(functions) {
  return function(x) {
      if (functions.length === 0) return x;
      functions.reverse().forEach(fn => {
          x = fn(x);
      });
      return x;
  }
};
```

### Решение 3: через цикл
```javascript
var compose = function(functions) {
  return function(x) {
      for (let i = functions.length - 1; i >= 0; i--) {
          x = functions[i](x);
      }
      return x;
  }
};
```