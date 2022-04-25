//Un closure es la combinación de una función y el ámbito léxico en la cual a sido declarada dicha función, recuerda el ámbito en el cual a sido creado.


// Alcancía

const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`moneyBox: $${saveCoins}`); 
}

moneyBox(5);
moneyBox(10);




const moneyBox2 = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox = moneyBox2();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);