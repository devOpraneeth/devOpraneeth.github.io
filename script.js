function calculateEmissions() {
    const mode = document.getElementById('mode').value;
    const distance = parseFloat(document.getElementById('distance').value);
    const passengers = parseInt(document.getElementById('passengers').value);

    const co2Emissions = mode === 'car' ? distance * 0.23 : mode === 'bus' ? distance * 0.06 : mode === 'train' ? distance * 0.03 : mode === 'airplane' ? distance * 0.52 : mode === 'motorcycle' ? distance * 0.12 : mode === 'bicycle' ? distance * 0.005 : mode === 'walking' ? distance * 0.0001 : 0;

    const totalEmissions = co2Emissions * passengers;

    document.getElementById('result').innerText = `Total Carbon Emissions: ${totalEmissions.toFixed(2)} kg CO2e`;
}

document.getElementById('calculator-form').addEventListener('submit', (event) => {
    event.preventDefault();
    calculateEmissions();
});