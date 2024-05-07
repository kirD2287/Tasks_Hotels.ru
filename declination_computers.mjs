
function declination (numb) {
    const declStr1 = 'Компьютер'
    const declStr2 = 'Компьютера'
    const declStr3 = 'Компьютеров'
    const divideNumb = numb % 10
    const divideNumb1 = numb % 100
    if (divideNumb === 1 && numb !== 11) {
        return `${numb} ${declStr1}`
    }
    if (divideNumb === 5 || divideNumb === 6 || divideNumb === 7 || divideNumb === 8 || divideNumb === 9) {
        return `${numb} ${declStr3}`
    }

    if ((divideNumb === 2 && divideNumb1 !== 12) || (divideNumb === 3  && divideNumb1 !== 13) || (divideNumb === 4  && divideNumb1 !== 14)) {
        return `${numb} ${declStr2}`
    } else {
        return `${numb} ${declStr3}`
    }
    
    
    }


