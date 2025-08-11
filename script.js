
function showSection(event, id) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.tabs button').forEach(btn => btn.classList.remove('active'));

    document.getElementById(id).classList.add('active');
    event.target.classList.add('active');
}

// Calculator
function calculate(operator) {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    let result = "";

    if (isNaN(n1) || isNaN(n2)) {
        result = "Please enter valid numbers.";
    } else {
        switch (operator) {
            case '+': result = n1 + n2; break;
            case '-': result = n1 - n2; break;
            case '*': result = n1 * n2; break;
            case '/': result = n2 === 0 ? "Cannot divide by zero" : (n1 / n2); break;
        }
    }

    document.getElementById("result").textContent = `Result: ${result}`;
}

function clearCalc() {
    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
    document.getElementById("result").innerText = '';
}

// Currency converter
const exchangeRates = {
    USD: { INR: 83.3, EUR: 0.92, GBP: 0.78, JPY: 143.2, AUD: 1.49, USD: 1 },
    INR: { USD: 0.012, EUR: 0.011, GBP: 0.0094, JPY: 1.72, AUD: 0.018, INR: 1 },
    EUR: { USD: 1.09, INR: 90.7, GBP: 0.85, JPY: 156.8, AUD: 1.62, EUR: 1 },
    GBP: { USD: 1.28, INR: 107.3, EUR: 1.17, JPY: 184.3, AUD: 1.90, GBP: 1 },
    JPY: { USD: 0.007, INR: 0.58, EUR: 0.0064, GBP: 0.0054, AUD: 0.010, JPY: 1 },
    AUD: { USD: 0.67, INR: 55.3, EUR: 0.62, GBP: 0.52, JPY: 97.2, AUD: 1 }
};

function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const from = document.getElementById("from-currency").value;
    const to = document.getElementById("to-currency").value;

    if (isNaN(amount)) {
        alert("Please enter a valid amount.");
        return;
    }

    const rate = exchangeRates[from][to];
    const result = (amount * rate).toFixed(2);
    document.getElementById("converted-result").innerText = `${amount} ${from} = ${result} ${to}`;
}

function clearConverter() {
    document.getElementById("amount").value = '';
    document.getElementById("converted-result").innerText = '';
}

// Calculate interest
function calculateInterest() {
    const P = parseFloat(document.getElementById("principal").value);
    const R = parseFloat(document.getElementById("rate").value);
    const T = parseFloat(document.getElementById("time").value);

    if (isNaN(P) || isNaN(R) || isNaN(T)) {
        document.getElementById("interest-result").innerText = "Please enter all values.";
        return;
    }

    const interest = (P * R * T) / 100;
    const total = P + interest;
    document.getElementById("interest-result").innerText =
        `Interest: ₹${interest.toFixed(2)}, Total: ₹${total.toFixed(2)}`;
}

// Toggle theme
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("light-mode");

    const isLight = body.classList.contains("light-mode");

    // Change CSS variables dynamically (optional glow customization)
    document.documentElement.style.setProperty(
        "--glow-color",
        isLight ? "#00bcd4" : "#38bdf8"
    );
}
