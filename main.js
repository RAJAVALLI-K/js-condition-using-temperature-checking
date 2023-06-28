// 2- Write a program to read temperature and display a suitable message according to temperature state below.
// Temp < 0 then Freezing weather
// Temp 0-10 then Very Cold weather
// Temp 10-20 then Cold weather
// Temp 20-30 then Normal in Temp
// Temp 30-40 then Its Hot
// Temp >=40 then Its Very Hot


let temperature = parseInt(prompt('Enter a temperatureerature:'));
if (temperature >= 40) {
    console.log('then Its Very Hot');
}

else if (temperature < 40 && temperature >= 30) {
    console.log('then Its Hot');
}

else if (temperature < 30 && temperature >= 20) {
    console.log('then Normal in temperature');
}

else if (temperature < 20 && temperature >= 10) {
    console.log('then Cold weather');
}

else if (temperature < 10 && temperature >= 0) {
    console.log('then Very Cold weather');
}

else if (temperature < 0) {
    console.log('then Freezing weather');
}

else {
    console.log('no weather');
}


switch (true) {
    case (temperature >= 40):
        console.log('then Its Very Hot');
        break;
    case (temperature < 40 && temperature >= 30):
        console.log('then Its Hot');
        break;
    case (temperature < 30 && temperature >= 20):
        console.log('then Normal in temperature');
        break;
    case (temperature < 20 && temperature >= 10):
        console.log('then Cold weather');
        break;
    case (temperature < 10 && temperature > 0):
        console.log('then Very Cold weather');
        break;
    case (temperature < 0):
        console.log('then Freezing weather');
        break;

    default:
        console.log('no weather');
        break;
}