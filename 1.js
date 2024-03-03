"use strict";

/*
Создать переменные positive и negative, в которые пользователь вводит с 
клавиатуры значения. Нужно попросить пользователя ввести положительное число в 
переменную positive и отрицательное в переменную negative. 
Перед тем, как положить значения в данные переменные необходимо их превратить 
в числа.
После ввода значений, необходимо вывести "Все значения верные.", если 
пользователь действительно ввел корректные значения, которые мы просили его 
ввести.
Если же пользователь где-то ввел неверное значение, то необходимо вывести 
в консоль "Одно или более значений некорректно.".
*/

let positive;
let negative; 
do { positive = +prompt('write a positive number');
     negative = +prompt('write a negative number');
    if (Number.isNaN(positive) || Number.isNaN(negative)) {
        alert('the numbers should be negative or positive');
    } else if (positive < 0 || negative > 0) { 
        alert('enter the corect number'); 
    }   
} while (Number.isNaN(positive) || Number.isNaN(negative) || positive < 0 || negative > 0);
console.log(`all numbers are correctly written ${positive} and ${negative}`);
