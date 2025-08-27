# 2705. Compact Object

**Уровень:** Medium  
**Темы:** #Рекурсия #Объекты #Массивы #ФункциональноеПрограммирование  
**Ссылка:** [Аналогичная задача на LeetCode](https://leetcode.com/problems/compact-object/)

## 📜 Условие
Дан объект или массив `obj`, вернуть компактный объект.  

Компактный объект, в отличие от объекта в простом понимании, удаляет ложные (falsy) значения. В процессе операции обрабатываются входной родительский и вложенные дочерние объекты. Массивы считаются объектами, если значения являются ключами. `falsy` значением называют `false`, возвращенный операцией `Boolean(value)`.  

Реализуйте функцию `compactObject`, которая:
- Принимает объект или массив `obj`
- Удаляет все falsy-значения (согласно `Boolean(value)`)
- Рекурсивно обрабатывает вложенные объекты и массивы
- Сохраняет структуру данных

## Примеры

#### **Пример 1:**  
> **Входные данные:**  obj = [null, 0, false, 1]  
> **Выходные данные:** [1]  
> **Объяснение**: все ложные значения были удалены из массива.  

#### **Пример 2:**  
> **Входные данные:**  obj = {"a": null, "b": [false, 1]}  
> **Выходные данные:** {"b": [1]}  
> **Объяснение**: из obj["a"] и obj["b"][0] были удалены ложные значения.   

#### **Пример 3:**  
> **Входные данные:**  obj = [null, 0, 5, [0], [false, 16]]  
> **Выходные данные:** [5, [], [16]]  
> **Объяснение**: элементы obj[0], obj[1], obj[3][0], obj[4][0] были ложными.  

## 🎯 Решение
### Рекурсивный подход с проверкой типов
```javascript
var compactObject = function(obj) {
  if (Array.isArray(obj)) {
    const result = [];
    for (let item of obj) {
      if (typeof item === 'object' && item !== null) {
        item = compactObject(item);
      }
      if (item) {
        result.push(item);
      }
    };
    return result;
  }

  else if (typeof obj === 'object' && obj !== null) {
    const result = {};
    for (let key in obj) {
      let value = obj[key];
      if (typeof value === 'object' && value !== null) {
        value = compactObject(value);
      }
      if (value) {
        result[key] = value;
      }
    }
    return result;
  }
  return obj;
};
```