document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const userName=name;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
   

    const res = await fetch('http://localhost:7070/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, email, password }),
    });

    const data = await res.json();
    alert(data.message);
});

document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const res = await fetch('http://localhost:7070/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.token) {
        localStorage.setItem('token', data.token);
        window.location.href = 'dashboard.htm';
    } else {
        alert('Login failed');
    }
});
