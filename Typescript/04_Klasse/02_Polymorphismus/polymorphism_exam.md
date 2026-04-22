# Polymorphism Exam

**Name:** ________________________  
**Date:** ________________________  
**Total Points:** 50

---

## Question 1: Method Availability (10 points)

Given the following class hierarchy:

```typescript
class Vehicle {
  start(): void { console.log("Starting..."); }
  stop(): void { console.log("Stopping..."); }
}

class Car extends Vehicle {
  start(): void { console.log("Car starting..."); }
  honk(): void { console.log("Beep!"); }
}

class Bike extends Vehicle {
  ringBell(): void { console.log("Ring ring!"); }
}
```

**Complete the table (✓ for available, ✗ for not available):**

| Class   | start() | stop() | honk() | ringBell() |
|---------|---------|--------|--------|------------|
| Vehicle |         |        |        |            |
| Car     |         |        |        |            |
| Bike    |         |        |        |            |

---

## Question 2: Method Calls (12 points)

Given:

```typescript
const v: Vehicle = new Car();

v.start();  // What is printed? _______________________
v.stop();   // What is printed? _______________________
v.honk();   // Compile error? YES / NO (circle one)
```

**Explain why:**  
________________________________________________  
________________________________________________

---

## Question 3: Riedmannsches Schalenmodell (15 points)

Draw the **Riedmannsche Schalenmodell** for the following class hierarchy.  
Show each class as a shell/circle with all available methods listed inside.

```typescript
class Animal {
  eat(): void { }
  sleep(): void { }
}

class Dog extends Animal {
  bark(): void { }
  eat(): void { } // overrides
}
```



---

## Question 4: Runtime Behavior (8 points)

```typescript
class Shape {
  draw(): void { console.log("Shape"); }
}

class Circle extends Shape {
  draw(): void { console.log("Circle"); }
}

class Square extends Shape {
  draw(): void { console.log("Square"); }
}

const shapes: Shape[] = [new Circle(), new Square(), new Shape()];
shapes.forEach(s => s.draw());
```

**What is the output?**

Line 1: _______________________  
Line 2: _______________________  
Line 3: _______________________

---

## Question 5: Type Guards (5 points)

```typescript
class Bird {
  fly(): void { }
}

class Penguin extends Bird {
  fly(): void { console.log("Can't fly!"); }
  swim(): void { console.log("Swimming!"); }
}

const b: Bird = new Penguin();
b.swim();  // What happens? ______________________________
```

