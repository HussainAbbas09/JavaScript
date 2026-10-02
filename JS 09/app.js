console.log("map() and filter() Exercises");
console.log("1. map()");
console.log("1. Double the numbers");
const numbers = [1, 2, 3, 4, 5];
let Double = numbers.map(numbers => numbers + numbers)
console.log(Double);


console.log("2. Add 10 to each number");
const numbers2 = [5, 10, 15, 20];
let addTen = numbers2.map(numbers2 => numbers2 + 10);
console.log(addTen);


console.log("3. Convert names to uppercase");
const names = ["ali", "sara", "ahmed"];
let upperNames = names.map(name => name.toUpperCase());
console.log(upperNames);


console.log("2. filter()");
console.log("1. Get even numbers");
const even = [1, 2, 3, 4, 5, 6];
let evenNumbers = even.filter(n => n % 2 === 0);
console.log(evenNumbers);


console.log("2. Get numbers greater than 10");
const greater = [5, 12, 8, 20, 3, 15];
let greaterNumbers = greater.filter(n => n > 10);
console.log(greaterNumbers);


console.log("3. Get names longer than 4 characters");
const longNames = ["Ali", "Ahmed", "Sara", "Usman", "John"];
let longNameList = longNames.filter(name => name.length > 4);
console.log(longNameList);


console.log("Use both");
console.log("1. First filter numbers greater than 5, then map them to double:");
const num = [2, 6, 8, 3, 10];
let doubledNumbers = num.filter(n => n > 5).map(n => n * 2);
console.log(doubledNumbers);


// -----------------------------------------------------------------------------------------------------------


console.log("JavaScript map() & filter() Exercises");
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
    const discount = product.price * 0.90;
    return {
        ...product,
        discountedPrice: discount
    };
});
console.log(discountedProducts);


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
let appleDiscounted = products.filter(product => (product.brand === "Apple")).map(product => {
    const discount = product.price * 0.85;
    return {
        name: product.name,
        discountedPrice: discount
    };
});
console.log(appleDiscounted);


console.log("13. In-Stock Mobile Names ⭐")
let inStockMobile = products.filter(product => (product.category === "Mobile" && product.stock > 0)).map(product => `${product.name} - Rs. ${product.price}`)
console.log(inStockMobile);


console.log("14. Challenge 🔥")
let challenge = products.filter(product => (product.stock > 0 && product.rating >= 4.5 && product.price < 300000)).map(product => `${product.name} - Rs. ${product.price}`);
console.log(challenge);
