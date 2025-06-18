
function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    if (user === "Miqueias" && pass === "14032011") {
        document.getElementById("loginScreen").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
    } else {
        document.getElementById("loginError").innerText = "Usuário ou senha incorretos.";
    }
}

function submitOrder(event) {
    event.preventDefault();
    document.getElementById("orderResult").innerText = "✅ Pedido realizado com sucesso (simulado)!";
    document.getElementById("orderForm").reset();
}
