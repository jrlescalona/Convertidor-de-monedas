function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    // Aclave de API
    const apiKey = '6f819cc9884b47609ed414b53fe8bd07';
    const apiUrl = `https://open.er-api.com/v6/latest/${fromCurrency}?app_id=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const exchangeRate = data.rates[toCurrency];
            const result = (amount * exchangeRate).toFixed(2); // Redondear a 2 decimales
            document.getElementById('result').innerHTML = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
        })
        .catch(error => console.error('Error:', error));
}
