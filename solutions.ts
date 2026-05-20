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