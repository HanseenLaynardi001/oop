let sepeda = {
    brand: "Polygon",
    gear: 21,
    color: "hitam",

    start: function() {
        console.log("Sepeda mulai dikayuh.");
    },
    brake: function() {
        console.log("Sepeda mengerem.");
    }
};


console.log(sepeda.brand);  
console.log(sepeda.color);  
sepeda.start();             
sepeda.brake();             