
//----BTN2----//
document.getElementById('button2').onclick = function () {
    let myname = document.getElementById('inputtext').value;
    if (myname == '') {
        alert('Please enter your name')
        return;
    }
    document.getElementById('output').innerHTML = myname;
}
//----BTN4-----//
let cities = ['Faisalabad', 'Lahore', 'Karachi', 'Peshawar', 'Quetta', 'Kashmir', 'Multan'];
document.getElementById('button4').onclick = function () {
    document.getElementById('output').innerHTML = '';
    for (let i = 0; i < cities.length; i++) {
        let city = cities[i]
        document.getElementById('output').innerHTML += i + 1 + ")" + city + "<br>";
    }
}
//-----BTN3----//
document.getElementById('button3').onclick = function () {
    let newcity=document.getElementById('inputtext').value;
    if (newcity == '') {
        alert('Please enter city name')
        return;
    }
    cities.push(newcity);
    document.getElementById('output').innerHTML = newcity + '<span> has been added successfully'
}
//------BTN5----//
document.getElementById('button5').onclick = function () {
let number=document.getElementById('inputtext').value;
if (number == '') {
    alert('Please enter number')
    return;
}
document.getElementById('output').innerHTML = '';
for (let i = 1; i < 10; i++) {
    document.getElementById('output').innerHTML +=` ${number} * ${i} == ${number*i} <br>` ; 
    
}
}
//----clear btn----//
document.getElementById('clearbtn').onclick = function () {
    document.getElementById('output').innerHTML = ''
}