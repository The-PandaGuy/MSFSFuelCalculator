const inputDis = document.getElementById('inputDis');
const inputWDA = document.getElementById('inputWDA');
const inputWAA = document.getElementById('inputWAA');
const inputDisRes = document.getElementById('inputDisRes');
const calculate = document.getElementById('calculate');
const h3 = document.getElementById('totalFuelH3');
const inputExtraFuel = document.getElementById('inputExtraFuel');

calculate.addEventListener('click', calcFuel);

function TripFuel(){
    const tripFuelKg = 2.79 * Number(inputDis.value);

    const ProdGal = 0.8 * 3.78541;
    const tripFuelVar = tripFuelKg / ProdGal;

    return tripFuelVar;
}

function ContingincyFuel(){
    const tripFuel = TripFuel();

    const contingincyFuelVar = 5 * tripFuel / 100;
    return contingincyFuelVar;
}

function alternateFuel(){
    const altFuelKg = 2.79 * Number(inputDisRes.value);

    const altProdGal = 0.8 * 3.78541;
    const alternateFuelVar = altFuelKg / altProdGal;

    return alternateFuelVar;
}

function TaxiFuel(){
    const taxiAA = Number(inputWAA.value);
    const taxiDA = Number(inputWDA.value);

    const MpM = 23 / 60;
    const fuelBurnAA = MpM * 15;
    const fuelBurnDA = MpM * 15;


    const taxiDurationAA = taxiAA * fuelBurnAA;
    const taxiDurationDA = taxiDA * fuelBurnDA;

    const fuelBurnVar = taxiDurationAA + taxiDurationDA;

    return fuelBurnVar;
}

function calcFuel(){
    const alternateFuelTotal = alternateFuel();
    const contingincyFuelTotal = ContingincyFuel();
    const taxiFuelTotal = TaxiFuel();
    const tripFuelTotal = TripFuel();
    const extraFuelTotal = Number(inputExtraFuel.value);

    const totalFuel = Number(Math.round(taxiFuelTotal + tripFuelTotal + contingincyFuelTotal + alternateFuelTotal + extraFuelTotal + 900));
    const fuelPrc = Math.round(totalFuel * 100 / 9000);

    const h3HTML = `
        <h3>${totalFuel} Gallons of Fuel or ${fuelPrc}%<h3>
    `;

    h3.innerHTML = h3HTML;

    inputDis.value = "";
    inputWAA.value = "";
    inputWDA.value = "";
    inputDisRes.value = "";
    inputExtraFuel.value = "";
}