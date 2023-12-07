function Vehicle(brand, model, speed, fuelType){
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType = fuelType;
}

function accelerate(){
    this.speed += 15;
    console.log("Now speed: " + this.speed);
}

function brake(){
    this.speed -= 17;
    console.log("Now speed: " + this.speed);
}

function refuel(){
    console.log("The vehicle is refueling...")
}

Vehicle.prototype.accelerate = accelerate;
Vehicle.prototype.brake = brake;
Vehicle.prototype.refuel = refuel;



function Car(brand, model, speed, fuelType, noOfWhiles){
    Vehicle.call(this, brand, model, speed, fuelType);
    this.noOfWhiles = noOfWhiles;
    this.honk = function (){
        console.log("Honking...");
    }
}


function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear){
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfEngines = numberOfEngines;
    this.hasLandingGear = hasLandingGear;
    this.takeOff = function(){
        console.log("Airplane is taking off...");
    }
}


Object.setPrototypeOf(Car.prototype, Vehicle.prototype);
Object.setPrototypeOf(Airplane.prototype, Vehicle.prototype);

let car1 = new Car("Tata", "T-2303", 90, "Desel", 4);

let air1 = new Airplane("Indigo", "BOING-360", 250, "Gesoline", 2, true);

console.log(car1);
console.log(air1);

car1.honk();
car1.refuel();
car1.accelerate();
car1.brake();

air1.takeOff();
air1.accelerate();

console.log("Fule type of Airplane: " + air1.fuelType);