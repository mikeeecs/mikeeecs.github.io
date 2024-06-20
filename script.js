function temperatureConverter() {
    const inputCelcius = document.getElementById('inputCelcius');
    const outputFahrenheit = document.getElementById('outputFahrenheit');
    
    const celsius = parseFloat(inputCelcius.value);
    const fahrenheit = (celsius * 9/5) + 32;
    
    outputFahrenheit.textContent = ` ${fahrenheit.toFixed(2)}°F`;
}