const container = document.querySelector('.container');
const overlayText = document.querySelector('.overlay-text');
const btnEvenContain = document.querySelector('.btn-even');
const btnOddContain = document.querySelector('.btn-odd');
const btnEven = document.getElementById('even');
const btnOdd = document.getElementById('odd');
const numberChoosedEven = document.querySelector('.choosed-number-even');
const numberChoosedOdd = document.querySelector('.choosed-number-odd');
const evenBtns = document.querySelector('.even-btns');
const oddBtns = document.querySelector('.odd-btns');
const totalNumber = document.querySelector('.result');
const totalContain = document.getElementById('result-contain')
const btnPlay = document.getElementById('play');
const btnOddPc = document.getElementById('btn-odd-pc');
const btnEvenPc = document.getElementById('btn-even-pc');
const numberEvenText = document.getElementById('number-even-text');
const numberOddText = document.getElementById('number-odd-text');
const chooseGroup = document.getElementById('choose-group');
const arrowLeft = document.getElementById('arrow-down-left');
const arrowRight = document.getElementById('arrow-down-right')
// console.log(container)

// (#1) creo una funzione per ricavare i numeri pari, facendo scoparire il tasto di selezione
function evenChooseNum(e, btn) {
    for (let i = 0; i < 6; i++) {
        if (i % 2 === 0) {
            btn.classList.add('d-none');
            e.classList.remove('d-none');
            e.innerHTML += `<button type="button" id=${i}>${i}</button>`
        }
    }
}

// (#2) creo una funzione per ricavare i numeri dispari, facendo scoparire il tasto di selezione
function oddChooseNum(e, btn) {
    for (let i = 0; i < 6; i++) {
        if (i % 2 === 1) {
            btn.classList.add('d-none');
            e.classList.remove('d-none');
            e.innerHTML += `<button type="button" id=${i}>${i}</button>`
        }
    }
}

// (#3) creo una funzione per far scomparire l'elemento di selezione e la freccia dell'elemento non selezionato, facendo comparire un nuovo elemento alla sezione non scelta e delle scritte personalizzate
function changeSecondaryElements(btn, btnPc, numTextSelected, numTextNotSelected, arrow, group) {
    btn.classList.add('d-none');
    btnPc.innerHTML = `<button type="button" disable>Computer</button>`
    numTextSelected.innerHTML = `<p class="your-number-max">Il tuo numero</p><span class="your-number-min d-none">Numero</span>`
    numTextSelected.classList.add('casper');
    numTextNotSelected.innerHTML = `<p class="your-number-max">Numero Computer</p><span class="your-number-min d-none">Computer</span>`
    numTextNotSelected.classList.add('casper');
    group.classList.add('casper');
    arrow.classList.add('ghost')
}

// (#4) ottengo la somma dei numeri una volta selezionati
function getNumber(element) {
    return parseInt(element.innerHTML, 10)
}

// (#5) funzione per ottenere la somma di due fattori 
function sumNumbers() {
    const evenNumber = getNumber(numberChoosedEven) //(#4)
    const oddNumber = getNumber(numberChoosedOdd) //(#4)
    const total = evenNumber + oddNumber
    return total
}

// (#6) genero un numero random da inserire in bacheca aggiungendo una classe di stile al numero selezionato
function printRandomNumber(num, element) {
    num.classList.add('print-number')
    element.innerHTML = parseInt(Math.random() * 5 + 1)
}

// (#7) fa comparire il bottono per giocare
function casperPlay() {
    btnPlay.classList.remove('opacity')
    btnPlay.classList.add('casper')
}

const myArray = []
btnEven.addEventListener('click', () => {
    evenBtns.classList.remove('d-none');
    evenChooseNum(evenBtns, btnEven) //#1
    changeSecondaryElements(btnOdd, btnOddPc, numberEvenText, numberOddText, arrowRight, chooseGroup) //(#3)
    chooseGroup.innerHTML = 'Hai scelto pari'
    myArray.push('pari')

    const btnNumZero = document.getElementById('0');
    const btnNumTwo = document.getElementById('2');
    const btnNumFour = document.getElementById('4');
    btnNumZero.addEventListener('click', () => {
        numberChoosedEven.innerHTML = 0
        printRandomNumber(numberChoosedEven, numberChoosedOdd) //(#6)
        casperPlay()
    })

    btnNumTwo.addEventListener('click', () => {
        numberChoosedEven.innerHTML = 2
        printRandomNumber(numberChoosedEven, numberChoosedOdd) //(#6)
        casperPlay()
    })

    btnNumFour.addEventListener('click', () => {
        numberChoosedEven.innerHTML = 4
        printRandomNumber(numberChoosedEven, numberChoosedOdd) //(#6)
        casperPlay()
    })
})


btnOdd.addEventListener('click', () => {
    oddChooseNum(oddBtns, btnOdd) //(#2)
    changeSecondaryElements(btnEven, btnEvenPc, numberOddText, numberEvenText, arrowLeft, chooseGroup) //(#3)
    chooseGroup.innerHTML = 'Hai scelto dispari'
    myArray.push('dispari')

    const btnNumOne = document.getElementById('1');
    const btnNumThree = document.getElementById('3');
    const btnNumFive = document.getElementById('5');
    btnNumOne.addEventListener('click', () => {
        numberChoosedOdd.innerHTML = 1
        printRandomNumber(numberChoosedOdd, numberChoosedEven) //(#6)
        casperPlay()
    })

    btnNumThree.addEventListener('click', () => {
        numberChoosedOdd.innerHTML = 3
        printRandomNumber(numberChoosedOdd, numberChoosedEven) //(#6)
        casperPlay()
    })

    btnNumFive.addEventListener('click', () => {
        numberChoosedOdd.innerHTML = 5
        printRandomNumber(numberChoosedOdd, numberChoosedEven) //(#6)
        casperPlay()
    })
})

//TODO:fare controllo NaN  & implementare vitt o sconf
btnPlay.addEventListener('click', () => {
    totalNumber.innerHTML = sumNumbers()//(#5)
    totalNumber.classList.add('result-tranx');
    totalContain.classList.add('contain-tot');
    totalContain.classList.add('result-tranx');
    setTimeout(() => {
        container.classList.add('overlay-style');
        overlayText.classList.remove('d-none');
        overlayText.classList.add('casper')
    }, 2100);

    let message = `<p style="color: rgb(248, 101, 16)">Hai perso</p>`
    if (sumNumbers() % 2 !== 0 && myArray.at() === 'dispari') {
        message = `<p style="color: yellow">Hai vinto</p>`
    } else if (sumNumbers() % 2 === 0 && myArray.at() === 'pari') {
        message = `<p style="color: yellow">Hai vinto</p>`
    }


    if (isNaN(sumNumbers())) {
        overlayText.innerHTML = `<div style="text-align: center; color: red; font-size: 30px">Atenzione devi selezionare un numero per poter giocare!</div>`
    } else {
        overlayText.innerHTML =
            `<div style="text-align: center">${(sumNumbers() % 2 === 0 ? 'Pari' : 'Dispari')}</div>` +
            `<div style="text-align: center; font-size: 30px">${message}</div>`
    }

})
