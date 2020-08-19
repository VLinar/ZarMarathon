// Задача 1.
const firstRow = prompt('Задача 1. Введите первую строку');
const secondRow = prompt('Введите вторую строку');

function getRow(firstRow, secondRow) {
    let firstCount = 0
    let secondCount = 0
    for(let i = 0; i < firstRow.length; i++){
        if(firstRow.charAt(i) === 'а'){
            firstCount += 1
        } 
    }
    for(let i = 0; i < secondRow.length; i++){
        if(secondRow.charAt(i) === 'а'){
            secondCount += 1
        } 
    }
    return firstCount > secondCount ?  firstRow : secondRow
}

console.log(getRow(firstRow, secondRow));
alert('Строка с наибольшим "а" в консоли')
// Задача 2.

const phonenumber = prompt('Задача 2. Введите номер телефона')

function formattedPhone(phone) {
    let phnumber = ''
    
    for(let i = 0; i < phone.length; i++){
        switch (i) {
            case 1:
                phnumber += phone.charAt(i) + ' ('
                break
            case 4:
                phnumber += phone.charAt(i) + ') '
                break
            case 7:
                phnumber += phone.charAt(i) + '-'
                break
            case 9:
                phnumber += phone.charAt(i) + '-'
                break
            default:
                phnumber += phone.charAt(i)
                break;
        }
    }
    return phnumber
}

console.log(formattedPhone(phonenumber));
alert('Отформатированный номер телефона в консоли')