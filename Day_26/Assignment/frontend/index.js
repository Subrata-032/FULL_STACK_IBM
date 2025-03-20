document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const res = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
    });

    console.log(res)

    const data = await res.json();
    console.log(data)
    alert(data.message);
    window.location.href="login.htm"
});

document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const res = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    console.log(data)
    if (data.token) {
        localStorage.setItem('token', data.token);
        window.location.href = 'dashboard.htm';
    } else {
        alert('Login failed');
    }
});


// const productContainer = document.getElementById("product-container");
// const nextBtn = document.getElementById("next-btn");

// let currentPage = 1;

// async function fetchProducts() {
//     try {
//         const response = await fetch(`http://localhost:8080/api/products?page=${currentPage}`,{
//             method:"GET"
//         });
//         const data = await response.json();

//         console.log(data)

//         displayProducts(data.products);
//     } catch (error) {
//         console.error("Error fetching products:", error);
//     }
// }

//chatgpt
const productContainer = document.getElementById("product-container");

let currentPage = 1;
let isLoading = false;
let hasMoreProducts = true;

async function fetchProducts() {
    if (isLoading || !hasMoreProducts) 
        return;

    isLoading = true;

    try {
        const response = await fetch(`http://localhost:8080/api/products?page=${currentPage}&limit=10`, {
            method: "GET"
        });

        const data = await response.json();

        console.log(data);

        if (data.products.length) {
            displayProducts(data.products);
            currentPage++;
        } else {
            hasMoreProducts = false; // No more products to load
        }
    } catch (error) {
        console.error("Error fetching products:", error);
    }

    isLoading = false;
}

function displayProducts(products) {
    products.forEach((product, index) => {
        let productBox = document.createElement("div");
        productBox.className = "product-box";

        let heading = document.createElement("h3");
        heading.innerText = product.category || "No Category";

        let img = document.createElement("img");
        img.src = product.image || "placeholder.jpg";
        

        let name = document.createElement("p");
        name.innerText = product.name;

        let price = document.createElement("p");
        price.innerText = `Price: $${product.price}`;

        let rating = document.createElement("p");
        rating.innerText = `Rating: ${product.rating || "N/A"}`;

        let button = document.createElement("button");
        button.innerText = "Add to Cart";
        button.addEventListener("click", () => {
            addToCart(product);
        });

        productBox.append(heading, img, name, price, rating, button);
        productContainer.append(productBox);
    });
}


// nextBtn.addEventListener("click", () => {
//     currentPage++;
//     fetchProducts();
// });

//chatgpt
function handleScroll() {
    // Get the scroll position and window height
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    // If near the bottom of the page, load more products
    if (scrollTop + clientHeight >= scrollHeight - 10) {
        fetchProducts();
    }
}

// Add scroll event listener
window.addEventListener("scroll", handleScroll);

fetchProducts();

