// Toy Car Constructor
// This constructor function is used to create new ToyCar objects with specific properties
function ToyCar(model, brand, color, price, length, width, height, weight, material, year, scale, vehicleType, sku, upc, packaging) {
    this.model = model;
    this.brand = brand;
    this.color = color;
    this.price = price;
    this.dimensions = { 
        length: length,
        width: width,
        height: height
    };
    this.weight = weight;
    this.material = material;
    this.year = year;
    this.scale = scale;
    this.vehicleType = vehicleType;
    this.sku = sku;
    this.upc = upc;
    this.packaging = packaging;
// Creating an instance of the ToyCar
// Creating a new toy car object using the ToyCar constructor
const myCar = new ToyCar(
    "C1000 Fenderside Pickup Truck", 
    "GMC", 
    "Blue/White", 
    19.99, 
    15, // length in cm
    6,  // width in cm
    5,  // height in cm
    0.5, // weight in kg
    "Plastic", 
    1966, 
    "1:24", // Corrected scale
    "Pickup Truck", // Corrected vehicle type
    "79035WL-MMT-BLUE", // Corrected SKU
    "694365739707", 
    "Window Box"
