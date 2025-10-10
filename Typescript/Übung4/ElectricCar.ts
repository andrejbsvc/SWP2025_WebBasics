class ElectricCar implements Car {
  constructor(
    public brand: string,
    public model: string,
    public price: number,
    public year: number,
    public color?: string,
    public mileage?: number
  ) {}

  getAge(): number {
    return new Date().getFullYear() - this.year;
  }

  toString(): string {
    return `${this.year} ${this.brand} ${this.model} - $${this.price.toLocaleString()}`;
  }
}

const car1 = new ElectricCar("Tesla", "Model 3", 45000, 2021, "red", 15000);
const car2 = new ElectricCar("Rimac Nevera", "Model 2", 2100000, 2024, "grey");

console.log(car2.toString()); 

console.log(`Car age: ${car2.getAge()} years`);
