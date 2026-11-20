let products = [
    {
        name: "iPhone 15",
        price: 150000,
        category: "Electronics",
        rating: 5,
        image: "https://placehold.co/300x200?text=iPhone"
    },
    {
        name: "Samsung Galaxy",
        price: 120000,
        category: "Electronics",
        rating: 4,
        image: "https://placehold.co/300x200?text=Samsung"
    },
    {
        name: "Nike Shoes",
        price: 12000,
        category: "Fashion",
        rating: 5,
        image: "https://placehold.co/300x200?text=Nike+Shoes"
    },
    {
        name: "T-Shirt",
        price: 2500,
        category: "Fashion",
        rating: 3,
        image: "https://placehold.co/300x200?text=T-Shirt"
    },
    {
        name: "Watch",
        price: 8000,
        category: "Accessories",
        rating: 4,
        image: "https://placehold.co/300x200?text=Watch"
    },
    {
        name: "Headphones",
        price: 5000,
        category: "Electronics",
        rating: 2,
        image: "https://placehold.co/300x200?text=Headphones"
    }
];

let cart = 0;
let page = 1;
let selectedCategories = [];

let categories = [...new Set(products.map(p => p.category))];

document.getElementById("categories").innerHTML =
    categories.map(category => `
        <label>
            <input type="checkbox" value="${category}"
            onchange="filterProducts()">
            ${category}
        </label>
    `).join("");

function filterProducts() {

    page = 1;

    selectedCategories = [
        ...document.querySelectorAll(
            "#categories input:checked"
        )
    ].map(input => input.value);

    let min = Number(document.getElementById("minPrice").value) || 0;

    let max = document.getElementById("maxPrice").value === ""
        ? Infinity
        : Number(document.getElementById("maxPrice").value);

    let rating = Number(document.getElementById("rating").value);

    let search = document.getElementById("search").value.toLowerCase();

    let filtered = products.filter(p => {

        return (
            (selectedCategories.length === 0 ||
            selectedCategories.includes(p.category)) &&

            p.price >= min &&
            p.price <= max &&

            p.rating >= rating &&

            p.name.toLowerCase().includes(search)
        );

    });

    let sort = document.getElementById("sort").value;

    if (sort === "low") {
        filtered.sort((a, b) => a.price - b.price);
    }
    else if (sort === "high") {
        filtered.sort((a, b) => b.price - a.price);
    }
    else if (sort === "ratingLow") {
        filtered.sort((a, b) => a.rating - b.rating);
    }
    else if (sort === "ratingHigh") {
        filtered.sort((a, b) => b.rating - a.rating);
    }
    else if (sort === "az") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (sort === "za") {
        filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    displayProducts(filtered);
}

function displayProducts(filtered) {

    document.getElementById("total").innerText =
        "Total Products: " + filtered.length;

    let showProducts = filtered.slice(0, page * 6);

    document.getElementById("products").innerHTML =
        showProducts.map((p, index) => `
            <div class="card">

                <img src="${p.image}" alt="${p.name}">

                <h3>${p.name}</h3>

                <p>${p.category}</p>

                <p class="price">Rs. ${p.price}</p>

                <p class="stars">
                    ${"★".repeat(p.rating)}
                    ${"☆".repeat(5 - p.rating)}
                </p>

                <button onclick="addToCart()">
                    Add to Cart
                </button>

            </div>
        `).join("");

    document.getElementById("message").innerText =
        filtered.length === 0 ? "No products found!" : "";

    document.getElementById("loadMore").style.display =
        showProducts.length < filtered.length ? "block" : "none";
}

function addToCart() {
    cart++;
    document.getElementById("cart").innerText = cart;
    alert("Product added to cart!");
}

function loadMore() {
    page++;
    filterProducts();
}

function clearFilters() {

    document.querySelectorAll("#categories input")
        .forEach(input => input.checked = false);

    document.getElementById("minPrice").value = "";
    document.getElementById("maxPrice").value = "";
    document.getElementById("rating").value = "0";
    document.getElementById("search").value = "";
    document.getElementById("sort").value = "default";

    page = 1;
    filterProducts();
}

document.getElementById("minPrice")
    .addEventListener("input", filterProducts);

document.getElementById("maxPrice")
    .addEventListener("input", filterProducts);

document.getElementById("rating")
    .addEventListener("change", filterProducts);

document.getElementById("search")
    .addEventListener("input", filterProducts);

document.getElementById("sort")
    .addEventListener("change", filterProducts);

filterProducts();