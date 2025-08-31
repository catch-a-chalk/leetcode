# 2726. Calculator with Method Chaining

**Уровень:** Easy  
**Темы:** #Классы #ЦепочкаМетодов #МатематическиеОперации  
**Ссылка:** [LeetCode Problem](https://leetcode.com/problems/calculator-with-method-chaining/)

## 📜 Условие
Спроектируйте класс `Calculator`, который предоставляет математические операции: сложение, вычитание, умножение, деление и возведение в степень. Класс должен позволять выполнять последовательные операции с использованием цепочки методов.

Конструктор класса принимает число, которое служит начальным значением результата.

Методы класса:
- **add** - добавляет число к результату и возвращает обновлённый Calculator
- **subtract** - вычитает число из результата и возвращает обновлённый Calculator
- **multiply** - умножает результат на число и возвращает обновлённый Calculator
- **divide** - делит результат на число и возвращает обновлённый Calculator (при делении на 0 бросает ошибку)
- **power** - возводит результат в степень числа и возвращает обновлённый Calculator
- **getResult** - возвращает текущий результат

Решения с точностью до 10⁻⁵ считаются корректными.

## Примеры

#### **Пример 1:**  
> **Входные данные:**  
> ```javascript
> actions = ["Calculator", "add", "subtract", "getResult"],  
> values = [10, 5, 7]  
> ```  
> **Выходные данные:**  
> ```javascript
> 8
> ```  
> **Объяснение:**  
> ```javascript
> new Calculator(10).add(5).subtract(7).getResult() // 10 + 5 - 7 = 8
> ```

#### **Пример 2:**  
> **Входные данные:**  
> ```javascript
> actions = ["Calculator", "multiply", "power", "getResult"],  
> values = [2, 5, 2]  
> ```  
> **Выходные данные:**  
> ```javascript
> 100
> ```  
> **Объяснение:**  
> ```javascript
> new Calculator(2).multiply(5).power(2).getResult() // (2 * 5) ^ 2 = 100
> ```

#### **Пример 3:**  
> **Входные данные:**  
> ```javascript
> actions = ["Calculator", "divide", "getResult"],  
> values = [20, 0]  
> ```  
> **Выходные данные:**  
> ```javascript
> "Division by zero is not allowed" // Делить на ноль нельзя
> ```  
> **Объяснение:**  
> ```javascript
> new Calculator(20).divide(0).getResult() // Бросает ошибку
> ```

## 🎯 Решение
```javascript
class Calculator {
  /** 
   * @param {number} value
   */
  constructor(value) {
    this.result = value;
  }
  
  /** 
   * @param {number} value
   * @return {Calculator}
   */
  add(value){
    this.result += value;
    return this;
  }
  
  /** 
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value){
    this.result -= value;
    return this;
  }
  
  /** 
   * @param {number} value
   * @return {Calculator}
   */  
  multiply(value) {
    this.result *= value;
    return this;
  }
  
  /** 
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (value !== 0) {
      this.result /= value;
      return this;
    } else {
      throw new Error("Division by zero is not allowed");
    };
  }
  
  /** 
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    this.result **= value;
    return this;
  }
  
  /** 
   * @return {number}
   */
  getResult() {
    return this.result;
  }
}
```