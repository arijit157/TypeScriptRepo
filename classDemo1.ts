class Car {
    make: string;
    model: string;
    year: string;

    constructor(make: string, model: string, year: string) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    showDetails(): void{
        console.log(`${this.make} : ${this.model} : ${this.year}`);
    }
}

let car1=new Car("Mercedes Benz", "E-Class", "2022");
car1.showDetails();