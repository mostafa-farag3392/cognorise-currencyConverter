document.addEventListener('DOMContentLoaded', () => {
    const currencyOne = document.getElementById('currency-one');
    const currencyTwo = document.getElementById('currency-two');
    const amountOne = document.getElementById('amount-one');
    const amountTwo = document.getElementById('amount-two');
    const rateElement = document.getElementById('rate');
    const swapButton = document.getElementById('swap');

    const exchangeRates = {
        USD: 1,
        EUR: 0.85,
        GBP: 0.75,
        JPY: 110.57,
        INR: 74.15,
        AUD: 1.35,
        CAD: 1.25,
        CHF: 0.91,
        CNY: 6.47,
        SEK: 8.62,
        NZD: 1.42
    };

    // Populate the dropdowns
    function populateDropdowns() {
        const currencies = Object.keys(exchangeRates);
        currencies.forEach(currency => {
            const optionOne = document.createElement('option');
            optionOne.value = currency;
            optionOne.textContent = currency;
            currencyOne.appendChild(optionOne);

            const optionTwo = document.createElement('option');
            optionTwo.value = currency;
            optionTwo.textContent = currency;
            currencyTwo.appendChild(optionTwo);
        });

        calculate(); // Initial calculation
    }

    function calculate() {
        const currencyOneValue = currencyOne.value;
        const currencyTwoValue = currencyTwo.value;

        const rate = exchangeRates[currencyTwoValue] / exchangeRates[currencyOneValue];
        rateElement.textContent = `1 ${currencyOneValue} = ${rate.toFixed(4)} ${currencyTwoValue}`;
        amountTwo.value = (amountOne.value * rate).toFixed(2);
    }

    currencyOne.addEventListener('change', calculate);
    currencyTwo.addEventListener('change', calculate);
    amountOne.addEventListener('input', calculate);
    amountTwo.addEventListener('input', calculate);
    swapButton.addEventListener('click', () => {
        const temp = currencyOne.value;
        currencyOne.value = currencyTwo.value;
        currencyTwo.value = temp;
        calculate();
    });

    populateDropdowns(); // Populate dropdowns when the page loads
});


