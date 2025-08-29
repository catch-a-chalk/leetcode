# 2694. Event Emitter

**Уровень:** Medium  
**Темы:** #События #Паттерны #Классы #УправлениеСостоянием  
**Ссылка:** [LeetCode Problem](https://leetcode.com/problems/event-emitter/)

## 📜 Условие
Необходимо реализовать класс `EventEmitter`, который позволяет подписываться на события и вызывать их. Интерфейс похож на EventEmitter в Node.js и Event Target в DOM.

Класс должен иметь два метода:

- **subscribe(eventName, callback)** - подписывает callback на событие eventName
  - Событие может иметь multiple listeners
  - Callbacks вызываются в порядке подписки
  - Возвращает объект с методом unsubscribe для отмены подписки
  - При отписке callback удаляется из списка подписок

- **emit(eventName, args)** - вызывает все callbacks, подписанные на событие eventName
  - Принимает опциональный массив аргументов args
  - Если нет подписчиков - возвращает пустой массив
  - Иначе возвращает массив результатов всех callbacks в порядке подписки

## Примеры

#### **Пример 1:**  
> **Входные данные:**  
> ```javascript
> actions = ["EventEmitter", "emit", "subscribe", "subscribe", "emit"],  
> values = [[], ["firstEvent"], ["firstEvent", "function cb1() { return 5; }"], ["firstEvent", "function cb2() { return 6; }"], ["firstEvent"]]  
> ```  
> **Выходные данные:**  
> ```javascript
> [[],["emitted",[]],["subscribed"],["subscribed"],["emitted",[5,6]]]
> ```  
> **Объяснение:** Нет callback'ов при первом emit, затем два подписчика возвращают [5, 6].

#### **Пример 2:**  
> **Входные данные:**  
> ```javascript
> actions = ["EventEmitter", "subscribe", "emit", "emit"],  
> values = [[], ["firstEvent", "function cb1(...args) { return args.join(','); }"], ["firstEvent", [1,2,3]], ["firstEvent", [3,4,6]]]  
> ```  
> **Выходные данные:**  
> ```javascript
> [[],["subscribed"],["emitted",["1,2,3"]],["emitted",["3,4,6"]]]
> ```  
> **Объяснение:** Обратите внимание, что метод `emit` может принимать массив опционально.

#### **Пример 3:**  
> **Входные данные:**  
> ```javascript
> actions = ["EventEmitter", "subscribe", "emit", "unsubscribe", "emit"],  
> values = [[], ["firstEvent", "(...args) => args.join(',')"], ["firstEvent", [1,2,3]], [0], ["firstEvent", [4,5,6]]]  
> ```  
> **Выходные данные:**  
> ```javascript
> [[],["subscribed"],["emitted",["1,2,3"]],["unsubscribed",0],["emitted",[]]]
> ```  
> **Объяснение:** После unsubscribe событие больше не обрабатывается.

#### **Пример 4:**  
> **Входные данные:**  
> ```javascript
> actions = ["EventEmitter", "subscribe", "subscribe", "unsubscribe", "emit"],  
> values = [[], ["firstEvent", "x => x + 1"], ["firstEvent", "x => x + 2"], [0], ["firstEvent", [5]]]  
> ```  
> **Выходные данные:**  
> ```javascript
> [[],["subscribed"],["subscribed"],["unsubscribed",0],["emitted",[7]]]
> ```  
> **Объяснение:** После отписки первого callback'a вызывается только второй.

## 🎯 Решение
```javascript
class EventEmitter {
  constructor() {
    this.events = new Map();
  }
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }
    const listeners = this.events.get(eventName);
    listeners.push(callback);

    // Возвращаем объект для отписки
    return {
      unsubscribe: () => {
        const index = listeners.indexOf(callback);
        if (index !== -1) {
          listeners.splice(index, 1);
        }
      }
    };
  }
  
  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    if (!this.events.has(eventName)) {
      return [];
    }
    const listeners = this.events.get(eventName);
    return listeners.map(callback => callback(...args));
  }
}
```