// Problem 1
function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));


// Problem 2
function reverseString(str: string): string {
    return str.split('').reverse().join('');
}
console.log(reverseString("typescript"));


// Problem 3
type StringOrNumber = string | number;
function checkType(input: StringOrNumber): string {
    if (typeof input === 'string') {
        return "String";
    } else {
        return "Number";
    }
}
console.log(checkType("Hello"));
console.log(checkType(42));
// console.log(checkType(true)); // wrong type


// Problem 4
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
     return obj[key];
}
const user = { id: 1, name: "John Doe", age: 21 };
console.log(getProperty(user, "name"));

// Problem 5