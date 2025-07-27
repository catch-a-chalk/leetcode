# 2622. Cache With Time Limit

**Уровень:** Medium  
**Темы:** #Кэширование #Таймеры #Классы  
**Ссылка:** [LeetCode Problem](https://leetcode.com/problems/cache-with-time-limit/)

## 📜 Условие
Напишите класс, который сохраняет пары ключ-значение с таймером удаления, закрепленным за каждым отдельным ключом.  

У класса есть три метода:  
- `set(key, value, duration)`: принимает число `key`, число `value` и `duration` в миллисекундах. Как только истекает `duration`, ключ становится недоступным. Метод должен возвращать `true`, если такой же неистекший ключ существует, и `false`, если наоборот. Величины `value` и `duration` должны быть переписаны, если ключ уже существует.  
- `get(key)`: возвращает значение, если ключ действующий, или `-1` если ключ истёк/отсутствует.  
- `count()` - возвращает количество активных ключей.  

## Черновик
```javascript
var TimeLimitedCache = function() {
  this.cache = {}; // { key: { value, timer } }
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
  let keyExists = false;
  if (this.cache[key]) {
    clearTimeout(this.cache[key].timer); // 1. Очищаем старый таймер
    keyExists = true;
  }
  const timer = setTimeout(() => { // 2. Устанавливаем новый таймер
    delete this.cache[key];
  }, duration);
  this.cache[key] = { value, timer }; // 3. Сохраняем данные
  return keyExists;
};

TimeLimitedCache.prototype.get = function(key) {
  return this.cache[key]?.value ?? -1;
};

TimeLimitedCache.prototype.count = function() {
  return Object.keys(this.cache).length;
};
```

## 🎯 Решение
```javascript
var TimeLimitedCache = function() {
  this.cache = {}; // Полка с продуктами
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
  let exists = Boolean(this.cache[key]);
  if (exists) clearTimeout(this.cache[key].timer); // Выбросили старый
    
  this.cache[key] = {
    value,
    timer: setTimeout(() => delete this.cache[key], duration) // Новый таймер
  };
  return exists;
};

TimeLimitedCache.prototype.get = function(key) {
  return this.cache[key]?.value ?? -1;
};

TimeLimitedCache.prototype.count = function() {
  return Object.keys(this.cache).length;
};
```