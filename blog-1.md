## How do Pick and Omit utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself).

## Introduction: 
## Pick:
Pick is one of the features of the Utility type in TypeScript. It selects specific properties from an interface or a type. Basically, it is used when we want a smaller version of a big object, and it just picks those things which we want to pick. It makes our code safer and cleaner code.

For example:
        interface Person {
            id: number;
            name: string;
            email: string;
            password: string;
        }

It is an interface of Person. Here have id, name, email, and password. Now, if I just need id, name and email from the person interface, we will use Pick.
Like: 
        type Data = Pick<Person, "id" | "name" | "email">;

As a result, it gives us 

        type Data = {
            id: number;
            name: string;
            email: string;
        }       

Pick's real-life usage:
1․ Public API response (hide password)․
2․ Form data (only required fields)

## How this keeps your code DRY (Don't Repeat Yourself)?
Ans: Pick helps keep your code DRY because you can make specialized subtypes of a master interface without needing to define the properties again; all the related types are kept consistent automatically․

//----------------------------------------------------------------------


## Omit:
Omit is also an important feature of the Utility type in TypeScript. It helps to create a new type by removing selected properties from the existing interface. We can reuse an interface and exclude unnecessary fields. It saves time, and we don't need to rewrite a new interface to create the same kind of interface.

For example: 

        interface Person {
            id: number;
            name: string;
            email: string;
            password: string;
        }

        type ShowPersonData = Omit<Person, "password">;

After running the code omit remove the password from Person interface and ShowPersonData contains all properties of Person except password.
Now,  
        type ShowPersonData {
            id: number;
            name: string;
            email: string;
        }

## How this keeps your code DRY (Don't Repeat Yourself)?
Ans: Omit keeps code DRY (Don't Repeat Yourself) because I don't need to duplicate the entire interface just to remove one. If the main Person interface changes later, the derived types automatically stay updated.


## Conclusion:
TypeScript's utility types‚ such as Pick and Omit‚ provide a means to create a more flexible type based on a base interface‚ thereby providing a method to avoid code duplication․ This prevents the codebase from becoming bloated‚ keeps it consistent and easier to maintain‚ following the DRY (Don't Repeat Yourself) principle․