class Owner {
    constructor(
      public firstName: string,
      public lastName: string,
      public age: number
    ) {
      if (age < 0) throw new Error("Age must be >= 0");
    }
  
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  
  const andrej = new Owner("Andrej", "Barosevcic", 17);

  myEngine.setOwner(andrej);

  type FuelType = "petrol" | "diesel" | "electric" | "hybrid" | string;
  