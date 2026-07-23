var bal = Number(prompt("Enter your bank balance:"));
var itemPrice = Number(prompt("Enter the item price:"));
if (bal >= itemPrice) {
    console.log("Purchase Successful");
} else {
    console.log("Insufficient Balance");
}