# 2625. Flatten Deeply Nested Array

**Уровень:** Medium  
**Темы:** #Рекурсия #Массивы #ОбходДерева  
**Ссылка:** [LeetCode Problem](https://leetcode.com/problems/flatten-deeply-nested-array/)

## 📜 Условие
Дан многомерный массив `arr` и глубина `n`. Необходимо вернуть "уплощённую" версию массива.

Многомерный массив — это рекурсивная структура данных, содержащая целые числа или другие многомерные массивы.

Уплощённый массив — это версия массива, в которой некоторые или все подмассивы удалены и заменены фактическими элементами этих подмассивов. Операция уплощения должна выполняться только если текущая глубина вложенности меньше `n`. Глубина элементов в первом массиве считается равной 0.

Запрещено использовать встроенный метод `Array.flat()`.

## Примеры

#### **Пример 1:**  
> **Входные данные:**  
> ```javascript
> arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
> n = 0
> ```  
> **Выходные данные:**  
> ```javascript
> [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
> ```  
> **Объяснение:** глубина n=0 всегда возвращает исходный массив, так как минимальная глубина подмассивов (0) не меньше n=0.

#### **Пример 2:**  
> **Входные данные:**  
> ```javascript
> arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
> n = 1
> ```  
> **Выходные данные:**  
> ```javascript
> [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
> ```  
> **Объяснение:** подмассивы глубины 0 уплощаются, но [9, 10, 11] остаётся, так как его глубина 1.

#### **Пример 3:**  
> **Входные данные:**  
> ```javascript
> arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
> n = 2
> ```  
> **Выходные данные:**  
> ```javascript
> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
> ```  
> **Объяснение:** все подмассивы имеют глубину ≤ 1, поэтому полностью уплощаются.

## 🎯 Решения

### Решение 1: итеративное (без рекурсии)
```javascript
var flat = function (arr, n) {
  let current = arr;
  for (let depth = 0; depth < n; depth++) {
    let flattened = [];
    let hasArrays = false;
    
    for (const item of current) {
      if (Array.isArray(item)) {
        flattened.push(...item);
        hasArrays = true;
      } else {
        flattened.push(item);
      }
    }
    current = flattened;
    if (!hasArrays) break;
  }
  return current;
};
```

### Решение 2: с рекурсией
```javascript
var flat = function (arr, n) {
  if (n === 0) return arr;
  
  let result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flat(item, n - 1));
    } else {
      result.push(item);
    }
  }
  return result;
};
```

### Решение 3: используя стэк
```javascript
var flat = function(arr, depth) {
  const stack = [...arr.map(item => [item, depth])];
  const result = [];
  
  while (stack.length > 0) {
    const [item, depth] = stack.pop();
    
    if (Array.isArray(item) && depth > 0) {
      stack.push(...item.map(subItem => [subItem, depth - 1]));
    } else {
      result.push(item);
    }
  }
  
  return result.reverse();
};
```