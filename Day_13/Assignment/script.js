let products = [
    {
      "id": 1,
      "name": "Wireless Bluetooth Headphones",
      "category": "Electronics",
      "price": 49.99,
      "rating": 4.5,
      "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/v/p/3/-original-imah8bfrrurageu2.jpeg?q=70"
    },
    {
      "id": 2,
      "name": "Gaming Mouse",
      "category": "Electronics",
      "price": 29.99,
      "rating": 4.2,
      "image": "https://rukminim2.flixcart.com/image/612/612/kt4ozgw0/mouse/o/i/y/g102-light-sync-logitech-original-imag6jj3yqnb2zdf.jpeg?q=70"
    },
    {
      "id": 3,
      "name": "Mechanical Keyboard",
      "category": "Electronics",
      "price": 79.99,
      "rating": 4.7,
      "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/keyboard/gaming-keyboard/g/t/t/katana-x2-tkl-mechanical-evofox-original-imah4yj6r7ncvegh.jpeg?q=70"
    },
    {
      "id": 4,
      "name": "Smartwatch",
      "category": "Wearable",
      "price": 199.99,
      "rating": 4.8,
      "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/s/3/l/-original-imah2thyufannsyg.jpeg?q=70"
    },
    {
      "id": 5,
      "name": "Running Shoes",
      "category": "Fashion",
      "price": 59.99,
      "rating": 4.3,
      "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/d/t/z/-original-imagz5kyh95rcyug.jpeg?q=70"
    },
    {
      "id": 6,
      "name": "Leather Wallet",
      "category": "Fashion",
      "price": 19.99,
      "rating": 4.0,
      "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/wallet-card-wallet/k/c/4/rfid-protected-100-genuine-leather-wallet-for-men-pen-combo-1-9-original-imah9k4t24vsgrxz.jpeg?q=70"
    },
    {
      "id": 7,
      "name": "Digital Camera",
      "category": "Electronics",
      "price": 349.99,
      "rating": 4.6,
      "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/dslr-camera/n/p/t/eos-r50-24-2-r50-canon-original-imagngc7syac8pfd.jpeg?q=70"
    },
    {
      "id": 8,
      "name": "Backpack",
      "category": "Accessories",
      "price": 39.99,
      "rating": 4.4,
      "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/backpack/8/9/l/-original-imah2uw5gjzauzqt.jpeg?q=70"
    },
    {
      "id": 9,
      "name": "Sunglasses",
      "category": "Fashion",
      "price": 24.99,
      "rating": 4.1,
      "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/sunglass/u/p/s/free-retro-metal-sunglasses-with-tiger-decoration-square-rimless-original-imah2zq4jydmqhuw.jpeg?q=70"
    },
    {
      "id": 10,
      "name": "Water Bottle",
      "category": "Home & Kitchen",
      "price": 14.99,
      "rating": 4.2,
      "image": "https://rukminim2.flixcart.com/image/612/612/kjlrb0w0-0/bottle/t/2/d/500-smart-vacuum-insulated-water-bottle-with-led-temperature-original-imafz4q3q83cjdzs.jpeg?q=70"
    },
    {
      "id": 11,
      "name": "Bluetooth Speaker",
      "category": "Electronics",
      "price": 59.99,
      "rating": 4.5,
      "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/q/e/7/-original-imah7effhzz6ku5a.jpeg?q=70"
    },
    {
      "id": 12,
      "name": "Electric Kettle",
      "category": "Home & Kitchen",
      "price": 34.99,
      "rating": 4.6,
      "image": "https://rukminim2.flixcart.com/image/612/612/l5iid8w0/electric-kettle/1/2/c/-original-imagg6ekh4muwjrx.jpeg?q=70"
    },
    {
      "id": 13,
      "name": "Portable Power Bank",
      "category": "Electronics",
      "price": 39.99,
      "rating": 4.3,
      "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/power-bank/y/q/b/-original-imah439zxhbh6ueg.jpeg?q=70"
    },
    {
      "id": 14,
      "name": "Smart LED Bulb",
      "category": "Home & Kitchen",
      "price": 19.99,
      "rating": 4.7,
      "image": "https://rukminim2.flixcart.com/image/612/612/l47cu4w0/smart-lighting/v/e/n/10-essld1in007p-led-avita-original-imagf5h4syvrf5ve.jpeg?q=70"
    },
    {
      "id": 15,
      "name": "Noise Cancelling Earbuds",
      "category": "Electronics",
      "price": 89.99,
      "rating": 4.8,
      "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/x/6/6/-original-imagzv54hzzudcmy.jpeg?q=70"
    },
    {
      "id": 16,
      "name": "Travel Pillow",
      "category": "Accessories",
      "price": 22.99,
      "rating": 4.2,
      "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/pillow/2/7/w/14-ultimate-cozy-sleeping-pillow-high-density-gel-microfiber-bed-original-imahynuuygcfzdvw.jpeg?q=70"
    },
    {
      "id": 17,
      "name": "Yoga Mat",
      "category": "Fitness",
      "price": 29.99,
      "rating": 4.5,
      "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/sport-mat/p/b/g/eva-tpe-anti-slip-home-gym-exercise-workout-fitness-for-men-original-imah4qn9cdjt4mss.jpeg?q=70"
    },
    {
      "id": 18,
      "name": "Men's Wrist Watch",
      "category": "Fashion",
      "price": 129.99,
      "rating": 4.6,
      "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/9/h/o/1-bi5110-54x-citizen-men-original-imagqsjn4z72ghyt.jpeg?q=70"
    },
    {
      "id": 19,
      "name": "Wireless Charger",
      "category": "Electronics",
      "price": 27.99,
      "rating": 4.3,
      "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/charging-pad/f/p/b/15w-wireless-charger-oxford-series-fast-pd-qi-certified-with-original-imah9ppybhhdjmfg.jpeg?q=70"
    },
    {
      "id": 20,
      "name": "Graphic T-Shirt",
      "category": "Fashion",
      "price": 19.99,
      "rating": 4.1,
      "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/i/4/c/xxl-royalty-crown-r-men-tshirt-bqf-original-imagzbze4tcsv5qk.jpeg?q=70"
    }
];
  

function displayProducts(filteredProducts = products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });
}

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = products.find(p => p.id === productId);

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
}

function filterAndSort() {
    let search = document.getElementById('searchBar').value.toLowerCase();
    let category = document.getElementById('categoryFilter').value;
    let sort = document.getElementById('priceSort').value;

    let filtered = products.filter(p =>
        (p.name.toLowerCase().includes(search)) &&
        (category === "" || p.category === category)
    );

    if (sort === "low") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
        filtered.sort((a, b) => b.price - a.price);
    }

    displayProducts(filtered);
}

function goToCart() {
    window.location.href = 'cart.htm';
}

document.getElementById('searchBar').addEventListener('input', filterAndSort);
document.getElementById('categoryFilter').addEventListener('change', filterAndSort);
document.getElementById('priceSort').addEventListener('change', filterAndSort);

window.onload = () => displayProducts();
///new 
function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const tableBody = document.querySelector("#cartTable tbody");
    tableBody.innerHTML = '';

    if (cart.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="6">Your cart is empty! Add some products!</td></tr>`;
        updateTotal(0);
        return;
    }

    cart.forEach((item, index) => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>$${item.price}</td>
            <td><img src="${item.image}" style="height: 50px;"></td>
            <td>
                <button onclick="updateQuantity(${index}, -1)">-</button>
                ${item.quantity}
                <button onclick="updateQuantity(${index}, 1)">+</button>
            </td>
            <td><button onclick="removeFromCart(${index})">Remove</button></td>
        `;
    });

    updateTotal(cart.reduce((acc, item) => acc + item.price * item.quantity, 0));
}
function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function purchase() {
    alert("Thank you for your purchase!");
    localStorage.removeItem('cart');
    loadCart();
}

function updateTotal(total) {
    document.getElementById('totalAmount').innerText = `Total: $${total}`;
}

if (window.location.pathname.includes('cart.htm')) {
    loadCart();
}

