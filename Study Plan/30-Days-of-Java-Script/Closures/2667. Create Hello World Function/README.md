# 2667. Create Hello World Function

**Уровень:** Easy
**Темы:** #Функции #Замыкания
**Ссылка:** [LeetCode Problem](https://leetcode.com/problems/create-hello-world-function/)

## 📜 Условие
Напишите функцию `createHelloWorld`, которая возвращает новую функцию. Возвращаемая функция должна всегда возвращать строку `"Hello World"`, независимо от переданных аргументов.

> #### **Пример 1:**
> **Входные данные:** args = []
> **Выходные данные:** "Hello World"
> **Объяснение**:
> const f = createHelloWorld();
> f(); // "Hello World"
>
> Новая функция `f()`, возвращаемая функцией `createHelloWorld`, всегда должна вовзращать строку `Hello World`. Функция `f()` создается сборщиком LeetCode и прописывать самостоятельно её не требуется.

> #### **Пример 2:**
> **Входные данные:** args = [{}, null,42]
> **Выходные данные:** "Hello World"
> **Объяснение**:
> const f = createHelloWorld();
> f({}, null, 42); // "Hello World"
>
> Функция может принимать любые аргументы, но она всегда должна возвращать `Hello World`.

#### **Ограничения:**
> - `0 <= args.length <= 10`

## 🎯 Решение
```javascript
var createHelloWorld = function() {
  return function(...args) {
    return "Hello World"
  }
};
```