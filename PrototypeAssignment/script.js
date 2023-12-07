let car = {
    make: 'Tata',
    model: 'Civic',
    color: 'Blue',
    whieeles: 4,
    mileage: 3000,
    isWorking: true,
    colorPrint: function () {
        console.log(this.color);
    }
}

let newCar1 = Object.create(car);


newCar1.color = "Red";
newCar1.isWorking = false;
newCar1.breakType = "Dish";
newCar1.fuleType = "Petrol";


let newCar2 = Object.create(car);


newCar2.color = "Green";
newCar2.isWorking = true;
newCar2.breakType = "Hybrid";
newCar2.fuleType = "Desel";
newCar2.sunRoof = true;
newCar2.whieeles = 6;



console.log(newCar1.color);
console.log(newCar1.isWorking);
console.log(newCar1.breakType);
console.log(newCar1.fuleType);
console.log(newCar1.sunRoof);

console.log(car);

console.log(newCar1);
console.log(newCar2);

newCar1.colorPrint();
newCar2.colorPrint();

console.log("*****************************************************************************")





// using Constrctor function

function Car(make, model, color, whieeles, mileage, isWorking){
    this.make = make;
    this.model = model;
    this.color = color;
    this.whieeles = whieeles;
    this.mileage = mileage;
    this.isWorking = isWorking;
    this.colorPrint = function () {
        console.log(this.color);
    }
}

function NewCar(make, model, color, whieeles, mileage, isWorking, breakType, fuleType){
    Car.call(this, make, model, color, whieeles, mileage, isWorking);
    this.breakType = breakType;
    this.fuleType = fuleType;
}

let c1 = new Car("Tata", "Civic", "Blue", 4, 3000, true);

let nc1 = new NewCar("Tata", "Civic", "Red", 6, 3000, false, "Hybrid", "Petrol");


console.log(c1);
console.log(nc1);

console.log(nc1.model);
nc1.colorPrint()
