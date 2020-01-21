class Car {
    constructor(brand) {
        this.brand = brand;
    }
    x = 10;
    printBrand = function() {
        console.log(this.brand);
    }
}

var carObj = {
    model: "Saab",
    printModel: function() {
        console.log(this.model);
    }
}

var car1 = new Car("Saab");
var car2 = new Car("Volvo");
carObj.model = "Ford";
carObj.printModel();
console.log(car1.brand);
console.log(car2.brand);
car1.owner = "Bob";
car1.printBrand();

console.log(car1.x);
car1.x++;
console.log(car2.x);
console.log(car1.x);





