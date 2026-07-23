var productname = prompt("Enter the product name:");
var price = Number(prompt("Enter the price of the product:"));
var quantity = Number(prompt("Enter the quantity of the product:"));
var total = price * quantity;
alert(`Product: ${productname}\nPrice: $${price}\nQuantity: ${quantity}\nTotal: ${total}`);