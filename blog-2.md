# How do the four pillars of OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation—help manage logic and reduce complexity in large-scale TypeScript projects?

## Answer:
## Introduction:
The four pillars of OOP help to manage logic and reduce complexity, duplication, and maintenance issues in large-scale TypeScript projects by providing a structured and scalable code organization approach.

## 1. Inheritance
   Inheritance allows classes to inherit properties and methods from the parent classes, and it facilitates code reuse and reduces duplication.

For example:

    class Animal {
        move() {
            console.log("Animal is moving");
        }
    }

    class Dog extends Animal {
        bark() {
            console.log("Dog is barking");
        }
    }

    const dog = new Dog();
    dog.move();
    dog.bark();

Here dog.move() is inherited from the Animal class, and dog.bark() is defined in the Dog class.
So I can say that inheritance reduces code duplication because it shared logic from parent to child classes and reused by multiple child classes.

## 2. Polymorphism
   Polymorphism allows different classes to provide different implementations for the same method name․

For example:

    class Animal {
        makeSound() : void {
            console.log("Animal makes a sound");
        }
    }

    class Dog extends Animal {
        makeSound() : void {
            console.log("Dog barks");
        }
    }

    class Cat extends Animal {
        makeSound() : void {
            console.log("Cat meows");
        }
    }

Here the makeSound() method is defined for each animal object according to derived classes․ It shows a flexible and extensible coding style using polymorphism.

## 3. Abstraction
   Abstraction is the process of hiding unnecessary details and showing only the essential features of an object. It helps to reduce complexity and improve maintainability.

For example:

    abstract class Payment {
        amount: number;

        constructor(amount: number) {
            this.amount = amount;
        }
        
        abstract pay(): void;

        showAmount(): void {
            console.log(`Amount: ${this.amount}`);
        }
    }

    class CardPayment extends Payment {
        pay(): void {
            console.log("Paid by card");
        }
    }

    const cardPayment = new CardPayment(100);
    cardPayment.showAmount();
    cardPayment.pay();

Here the CardPayment class implements the pay() method from the Payment abstract class and it abstracts the payment process. Basically, it hides the implementation details of the payment process from the user. In Abstraction we just know what to do but not how to do it.


## 4. Encapsulation
   Encapsulation is the process of bundling data and methods that operate on that data within a single unit, such as a class. It helps to hide the internal details of an object and provide a clean interface for interacting with it. Basically, it helps to protect data and privacy by providing controlled access to it.

For example:    

    class BankAccount {
        private balance: number;

        constructor(balance: number) {
            this.balance = balance;
        }

        deposit(amount: number): void {
            this.balance += amount;
        }

        withdraw(amount: number): void {
            this.balance -= amount;
        }

        getBalance(): number {
            return this.balance;
        }
    }

    const account = new BankAccount(100);
    account.deposit(50);
    account.withdraw(25);
    console.log(account.getBalance());

Here we can just call the methods to interact with the object without knowing the internal details of the object. We can not directly access the balance property from outside the class.
If we needs to access the balance property from outside the class, we can use the getBalance() method. Thats the way encapsulation gives us security and control over the data.


## Conclusion
The four object-oriented programming (OOP) pillars‚ which are inheritance‚ polymorphism‚ abstraction‚ and encapsulation‚ can help better structure the application‚ improve code reusability and maintainability‚ and reduce code duplication and complexity‚ thus improving the scalability of a larger application built with TypeScript․ If used correctly‚ these principles can help create cleaner‚ more efficient software systems․