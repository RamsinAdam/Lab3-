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
