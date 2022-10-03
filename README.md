# Typescript: The Complete Developer's Guide

Typescript projects worked on "Typescript: The Complete Developer's Guide" course

## Notes

### Dependencies Used:

1. `npm install -g typescript` - TypeScript is a language for application-scale JavaScript.
2. `npm install -g ts-node` - TypeScript execution and REPL (Read-Eval-Print-Loop) for Node.js
3. `npm install -g parcel-bundler` - Tool to help us run Typescript in the browser
4. `npm install @faker-js/faker` - Generate massive amounts of fake (but realistic) data for testing and development.
5. `npm install @types/google.maps` - Type definitions for Google Maps JavaScript API
6. `npm install nodemon` - nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
7. `npm install concurrently` - Run multiple commands concurrently. Like npm run watch-js & npm run watch-less but better.
8. `tsc -w` - TS Compiler in watch mode.
9. `npm install @types/node` - Type Definition files for Node.js and its libraries.
10. `npm install json-server` - Backend JSON Server
11. `npm install axios` - To make HTTP network calls

### Type Guards:

- **typeof** - Narrow type of a value to a primitive type (i.e., number, string, boolean, symbol)
- **instanceof** - Narrow down every other type of value (i.e., every other value that is created with a constructor function)

### Abstract Classes:

- Can't be used to create an object directly
- Only used as a parent class
- Can contain real implementation for some methods
- The implemented methods can refer to other methods that don't actually exist yet (we still have to provide names and types for the un-implemented methods)
- Can make child classes promise to implement some other method

### Inheritance vs Abstract Classes:

#### Inheritance -

1. Sets up a contract between different classes
2. Use when we have very different objects that we want to work together
3. Promotes loose coupling

#### Abstract Classes -

1. Sets up a contract between different classes
2. Use when we are trying to build up a definition of an object
3. Strongly couples classes together

### Enums:

- Follow near-identical syntax rules as normal objects
- Creates an object with the same keys and values when converted from TS to JS
- Primary goal is to signal to other engineers that these are all closely related values
- Use whenever we have a small fixed set of values that are all closely related and known at compile time

### Generics:

- Like function arguments, but for types in class/function definitions
- Allows us to define the type of a property/argument/return value at a future point
- Used heavily when writing reusable code

### Inheritance vs Composition:

- **Inheritance** is characterized by an "_is-a_" relationship between two classes.
- **Composition** is characterized by an "_has-a_" relationship between two classes.

### Optional Interface Properties:

- A `?` after the property key lets the interface property to be optional

### TypeScript Decorator:

- Functions that can be used to modify/change/anything/different properties/methods in the class
- Not same as JavaScript decorators
- Used inside/on classes only
- Understanding the order in which decorators are ran are the key to understanding them
- It is Experimental! (Bound to change)
- **Decorator Factory** - A decorator that returns a function (Just the syntax looks sometimes a lil bit nasty 🙂)

#### Decorators on a property, method, accessor

- First argument is the prototype of the object
- Second argument is the key of the property/method/accessor on the object
- Third argument is the property descriptor
- Decorators are applied when the code for this class is ran (not when an instance is created)
