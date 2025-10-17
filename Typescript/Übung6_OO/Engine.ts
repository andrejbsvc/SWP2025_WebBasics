class Engine {
    private owner?: Owner;
  
    constructor(
      public manufacturer: string,
      public horsepower: number,
      public fuel: FuelType
    ) {
      if (horsepower < 0) throw new Error("Horsepower must be >= 0");
    }
  
    setOwner(owner: Owner) {
      this.owner = owner;
    }
  
    removeOwner() {
      this.owner = undefined;
    }
  
    getOwner(): Owner | undefined {
      return this.owner;
    }
  
    info(): string {
      const ownerInfo = this.owner
        ? `Owner: ${this.owner.fullName} (Alter: ${this.owner.age})`
        : "Owner: none";
      return `Engine - Hersteller: ${this.manufacturer}, Horsepower: ${this.horsepower}, Fuel: ${this.fuel}. ${ownerInfo}`;
    }
  }




  const myEngine = new Engine("Volkswagen", 150, "petrol");
  


  
 
  console.log(myEngine.info());
  
  
 