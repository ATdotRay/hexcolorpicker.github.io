
const alphabetNumbers = ['a','b','c','d','e','f', 0,1,2,3,4,5,6,7,8,9];
const mainButton = document.querySelector('.main-Btn');
const body = document.body;

mainButton.addEventListener('click', () => {
    hexNumberArr = ['#']; //array to store hex value in
    hexNumber = '';
    hexRandomNumbers =[];
    
    for (let i = 0; i < 6; i++) {
        const randomNumber = Math.floor( Math.random() * alphabetNumbers.length );
        hexRandomNumbers.unshift(randomNumber)
    }
    
    // console.log(hexRandomNumbers);
    
    for (let i=0; i<6; i++) {
        let number = hexRandomNumbers[i];
        let pick = alphabetNumbers[number];
        hexNumberArr.push(pick);
    }
    
    // console.log(hexNumberArr);
    hexNumber = hexNumberArr.join('');
    console.log(hexNumber);
        body.style.backgroundColor = hexNumber;

    let hexColor = document.querySelector('.colorInfo');
    hexColor.textContent = `${hexNumber}`;
});
// body.style.backgroundColor = hexNumber;