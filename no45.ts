function createCar(manufacturer: string, modelName: string, ...options: { [key: string]: any }[]): { manufacturer: string, modelName: string, options: { [key: string]: any } } {
    const car: { manufacturer: string, modelName: string, options: { [key: string]: any } } = {
        manufacturer: manufacturer,
        modelName: modelName,
        options: {}
    };

    for (const option of options) {
        const key = Object.keys(option)[0];
        car.options[key] = option[key];
    }

    return car;
}

// Call the function with required information and additional options
const myCar = createCar("Toyota", "Camry", { color: "Blue", year: 2022, features: ["Navigation", "Sunroof"] });

// Print the returned object
console.log(myCar);
