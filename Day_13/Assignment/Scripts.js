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

if (window.location.pathname.includes('cart.html')) {
    loadCart();
}
