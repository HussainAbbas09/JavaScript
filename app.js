const products = [
    {
      id: 1,
      name: "iPhone 15",
      category: "Mobile",
      price: 250000,
      stock: 10,
      brand: "Apple",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Galaxy S24",
      category: "Mobile",
      price: 220000,
      stock: 0,
      brand: "Samsung",
      rating: 4.6,
    },
    {
      id: 3,
      name: "MacBook Air M3",
      category: "Laptop",
      price: 350000,
      stock: 5,
      brand: "Apple",
      rating: 4.9,
    },
    {
      id: 4,
      name: "Dell XPS 13",
      category: "Laptop",
      price: 280000,
      stock: 3,
      brand: "Dell",
      rating: 4.5,
    },
    {
      id: 5,
      name: "AirPods Pro",
      category: "Accessories",
      price: 65000,
      stock: 15,
      brand: "Apple",
      rating: 4.7,
    },
    {
      id: 6,
      name: "Galaxy Buds",
      category: "Accessories",
      price: 35000,
      stock: 0,
      brand: "Samsung",
      rating: 4.3,
    },
    {
      id: 7,
      name: "HP Pavilion",
      category: "Laptop",
      price: 180000,
      stock: 7,
      brand: "HP",
      rating: 4.2,
    },
    {
      id: 8,
      name: "Samsung A55",
      category: "Mobile",
      price: 120000,
      stock: 12,
      brand: "Samsung",
      rating: 4.4,
    },
];


console.log("1. Product Names — `map()`")
let onlyNames = products.map(product => product.name)
console.log(onlyNames);


console.log("2. Product Prices — `map()`")
let onlyPrice = products.map(product => product.price)
console.log(onlyPrice);


console.log("3. Formatted Products — `map()`")
let formattedProducts = products.map(product => `${product.name} - Rs. ${product.price}`)
console.log(formattedProducts);


console.log("4. Add Discount — `map()`")
const discountedProducts = products.map(product => {
    product.discountedPrice = product.price * 0.9;
    return product;
});


console.log("5. Available Products — filter()   ")
let stock = products.filter(product => (product.stock > 0)).map(product => product.name)
console.log(stock);


console.log("6. Mobile Products — filter()")
let mobile = products.filter(product => product.category === "Mobile").map(product => product.name)
console.log(mobile);


console.log("7. Expensive Products — filter()")
let price = products.filter(product => product.price > 200000).map(product => product.name)
console.log(price);


console.log("8. Highly Rated Products — filter()")
let rating = products.filter(product => (product.rating >= 4.5)).map(product => product.name)
console.log(rating);


console.log("9. Apple Products — filter()")
let apple = products.filter(product => product.brand === "Apple").map(product => product.name)
console.log(apple);


console.log("10. Multiple Conditions — filter()")
let multi = products.filter(product => (product.price < 200000 && product.stock > 0)).map(product => product.name)
console.log(multi);


console.log("11. Available Laptops — filter() + map()")
let laptops = products.filter(product => (product.category === "Laptop")).map(product => product.name)
console.log(laptops);


console.log("12. Discounted Apple Products ⭐")
let appleDiscounted = products.filter(product => (product.brand === "Apple")).map(product => product.name)
console.log(appleDiscounted);
