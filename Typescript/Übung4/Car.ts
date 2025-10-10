interface Car {
  brand: string;
  model: string;
  price: number;
  year: number;
  color?: string;        
  mileage?: number;      

  getAge(): number;

  
  toString(): string;
}
