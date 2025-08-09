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




#### **Пример 1:**  
> **Входные данные:**  
> actions = ["TimeLimitedCache", "set", "get", "count", "get"]  
> values = [[], [1, 42, 100], [1], [], [1]]  
> timeDelays = [0, 0, 50, 50, 150]  
> **Выходные данные:** [null, false, 42, 1, -1]  
> **Объяснение**:  
> При t=0 инициирован кэш.  
> При t=0 добавлена пара ключ-значение (1: 42) с временным лимитом 100мс. Величины не существует, возвращается false.  
> При t=50 запрашивается key=1, возвращается значение 42 (из 1:42 выше).  
> При t=50 вызывается count(), при этом в кэше имеется один активный ключ.  
> При t=100 key=1 прекращает свое действие.  
> При t=150 вызывается get(1), но, так как кэш уже очищен, получаем -1.  

#### **Пример 2:**  
> **Входные данные:**  
> actions = ["TimeLimitedCache", "set", "set", "get", "get", "get", "count"]  
> values = [[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []]  
> timeDelays = [0, 0, 40, 50, 120, 200, 250]  
> **Выходные данные:** [null, false, true, 50, 50, -1, 0]  
> **Объяснение**: у объекта нет никаких пар-ключей, так что он пустой.  
> При t=0 инициирован кэш.  
> При t=0 добавлена пара ключ-значение (1: 42) с временным лимитом 50мс. Величины не существует, возвращается false.  
> При t=40 добавляется ключ-значение (1: 50) с временным лимитом 100мс. Не истекшая величина уже существует, следовательно, получаем true и переписываем предыдущее значение.  
> При t=50 вызван get(1), возвращающий 50.  
> При t=120 вызван get(1), возвращающий 50.  
> При t=140 key=1 прекращает свое действие.  
> При t=200 вызывается get(1), но, так как кэш уже очищен, получаем -1.  
> При t=250 вызывается count(), который возвращает 0, т.к. кэш пуст.  

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