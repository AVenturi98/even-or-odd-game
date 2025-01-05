const btnEvenContain = document.querySelector('.btn-even');
const btnOddContain = document.querySelector('.btn-odd');
const btnEven = document.getElementById('even');
const btnOdd = document.getElementById('odd');
const numberChoosedEven = document.querySelector('.choosed-number-even');
const numberChoosedOdd = document.querySelector('.choosed-number-odd');
const evenBtns = document.querySelector('.even-btns');
const oddBtns = document.querySelector('.odd-btns');
const btnNumZero = document.getElementById('0');
const btnNumOne = document.getElementById('1');
const btnNumTwo = document.getElementById('2');
const btnNumThree = document.getElementById('3');
const btnNumFour = document.getElementById('4');
const btnNumFive = document.getElementById('5');
const totalNumber = document.querySelector('.total');
const btnPlay = document.getElementById('play');
const btnOddPc = document.getElementById('btn-odd-pc');
const btnEvenPc = document.getElementById('btn-even-pc');
const numberEvenText = document.getElementById('number-even-text');
const numberOddText = document.getElementById('number-odd-text')
// console.log(numberEvenText, numberOddText)

// creo una funzione per ricavare i numeri pari
function evenChooseNum(e) {
    for (let i = 0; i < 6; i++) {
        if (i % 2 === 0) {
            e.innerHTML += `<button type="button" id=${i}>${i}</button>`
        }
    }
}

// creo una funzione per ricavare i numeri dispari
function oddChooseNum(e) {
    for (let i = 0; i < 6; i++) {
        if (i % 2 === 1) {
            e.innerHTML += `<button type="button" id=${i}>${i}</button>`
        }
    }
}

//creo una funzione per cambiare colore ai numeri cliccandoci sopra
function changeColorNumber(num) {
    num.addEventListener('click', () => {
        num.classList.toggle('color')
    })
}

//funzione per far scoparire dei tasti e apparirne altri
function changeForChange(btn, btns) {
    btn.classList.add('d-none')
    btns.classList.remove('d-none')
}

//ottengo la somma dei numeri una volta selezionati
function getNumber(element) {
    return parseInt(element.innerHTML, 10)
}

//funzione per ottenere la somma di due fattori 
function sumNumbers() {
    const evenNumber = getNumber(numberChoosedEven)
    const oddNumber = getNumber(numberChoosedOdd)
    const total = evenNumber + oddNumber
    return total
}

//genero un numero random da inserire in bacheca
function printRandomNumber(element) {
    element.innerHTML = parseInt(Math.random() * 5)
}


btnEven.addEventListener('click', () => {
    changeForChange(btnEven, evenBtns)
    btnOdd.classList.add('d-none')
    btnOddPc.classList.remove('d-none')
    numberEvenText.innerHTML = 'Il tuo numero'
    numberOddText.innerHTML = 'Numero Computer'
    btnNumZero.addEventListener('click', () => {
        numberChoosedEven.innerHTML = 0
        printRandomNumber(numberChoosedOdd)
    })

    btnNumTwo.addEventListener('click', () => {
        numberChoosedEven.innerHTML = 2
        printRandomNumber(numberChoosedOdd)
    })

    btnNumFour.addEventListener('click', () => {
        numberChoosedEven.innerHTML = 4
        printRandomNumber(numberChoosedOdd)
    })
})

btnOdd.addEventListener('click', () => {
    changeForChange(btnOdd, oddBtns)
    btnEven.classList.add('d-none')
    btnEvenPc.classList.remove('d-none')
    numberOddText.innerHTML = 'Il tuo numero'
    numberEvenText.innerHTML = 'Numero Computer'
    btnNumOne.addEventListener('click', () => {
        numberChoosedOdd.innerHTML = 1
        printRandomNumber(numberChoosedEven)
    })

    btnNumThree.addEventListener('click', () => {
        numberChoosedOdd.innerHTML = 3
        printRandomNumber(numberChoosedEven)
    })

    btnNumFive.addEventListener('click', () => {
        numberChoosedOdd.innerHTML = 5
        printRandomNumber(numberChoosedEven)
    })
})

btnPlay.addEventListener('click', () => {
    totalNumber.innerHTML = sumNumbers()
    if (sumNumbers() % 2 === 0) {
        console.log('pari')
    } else console.log('dispari')
})

