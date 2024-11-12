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
}

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
);

// Array of images for different views of the car
let images = [
    "carImage/Carfront.jpg",
    "carImage/Carside.jpg",
    "carImage/Carback.jpg",
    "carImage/Carangle.jpg",
    "carImage/Carside2.jpg",
    "carImage/CarinBox.jpg",
    "carImage/CarinBox2.jpg"
];
let currentImageIndex = 0;

// Function to change car image to different views
function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.querySelector(".car-display img").src = images[currentImageIndex];
}

// Display car details
// This function updates the HTML to display details of the toy car
function displayCar() {
    const carDisplayDiv = document.getElementById('carDisplay');
    carDisplayDiv.innerHTML = `
        <img src="${images[currentImageIndex]}" alt="${myCar.brand} ${myCar.model}" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 15px;">
        <h2>${myCar.brand} - ${myCar.model}</h2>
        <p>Color: ${myCar.color}</p>
        <p>Price: $${myCar.price}</p>
        <p>Dimensions: ${myCar.dimensions.length}cm x ${myCar.dimensions.width}cm x ${myCar.dimensions.height}cm</p>
        <p>Weight: ${myCar.weight}kg</p>
        <p>Material: ${myCar.material}</p>
        <p>Year: ${myCar.year}</p>
        <p>Vehicle Type: ${myCar.vehicleType}</p>
        <p>Scale: ${myCar.scale}</p>
        <p>SKU: ${myCar.sku}</p>
        <p>UPC: ${myCar.upc}</p>
        <p>Packaging: ${myCar.packaging}</p>
    `;
}
