const products = [
  { id: 1, name: "Laptop", quantity: 1, price: 90000, rating: 4.5 },
  { id: 2, name: "Mouse", quantity: 2, price: 1200, rating: 4.2 },
  { id: 3, name: "Keyboard", quantity: 8, price: 4500, rating: 4.8 },
  { id: 4, name: "Monitor", quantity: 2, price: 35000, rating: 4.3 },
  { id: 5, name: "Headphones", quantity: 5, price: 3000, rating: 4.9 },
  { id: 6, name: "Webcam", quantity: 6, price: 6500, rating: 4.1 }
];


console.log("Part 1: Sort Questions (Easy to Medium)");
// 1. Price: Low to High
console.log([...products].sort((a, b) => a.price - b.price));

// 2. Price: High to Low
console.log([...products].sort((a, b) => b.price - a.price));

// 3. Name: A to Z
console.log([...products].sort((a, b) => a.name.localeCompare(b.name)));

// 4. Rating: Highest First
console.log([...products].sort((a, b) => b.rating - a.rating));

// 5. Quantity: Low to High
console.log([...products].sort((a, b) => a.quantity - b.quantity));

// 6. 3 Most Expensive Products
console.log([...products].sort((a, b) => b.price - a.price).slice(0, 3));

// 7. 2 Cheapest Products
console.log([...products].sort((a, b) => a.price - b.price).slice(0, 2));

// 8. Products Below 10,000, Sorted by Price
console.log(products.filter(p => p.price < 10000).sort((a, b) => a.price - b.price));

// 9. Top 3 Highest-Rated Products
console.log([...products].sort((a, b) => b.rating - a.rating).slice(0, 3));

// 10. Rating High to Low, Then Price Low to High
console.log([...products].sort((a, b) => b.rating - a.rating || a.price - b.price));



console.log("Part 2: Reduce Questions (Easy to Medium)");
// 1. Total Price
console.log(products.reduce((sum, p) => sum + p.price, 0));

// 2. Total Quantity
console.log(products.reduce((sum, p) => sum + p.quantity, 0));

// 3. Average Price
console.log(products.reduce((sum, p) => sum + p.price, 0) / products.length);

// 4. Most Expensive Product
console.log(products.reduce((max, p) => p.price > max.price ? p : max));

// 5. Cheapest Product
console.log(products.reduce((min, p) => p.price < min.price ? p : min));

// 6. Highest-Rated Product
console.log(products.reduce((max, p) => p.rating > max.rating ? p : max));

// 7. Count Products Priced Above 5,000
console.log(products.reduce((count, p) => p.price > 5000 ? count + 1 : count, 0));

// 8. Total Inventory Value
console.log(products.reduce((sum, p) => sum + p.price * p.quantity, 0));

// 9. Total Quantity with Rating Above 4.3
console.log(products.reduce((sum, p) => p.rating > 4.3 ? sum + p.quantity : sum, 0));

// 10. Total Products, Quantity, and Inventory Value
console.log(products.reduce((total, p) => {
    total.products++;
    total.quantity += p.quantity;
    total.value += p.price * p.quantity;
    return total;
}, { products: 0, quantity: 0, value: 0 }));