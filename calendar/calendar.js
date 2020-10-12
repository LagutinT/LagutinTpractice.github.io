'use strict';

let nowDate = new Date();
let today = new Date();
let currentMonth = nowDate.getMonth();
let currentYear = nowDate.getFullYear();
let firstDayOfCurrentMonth = new Date(currentYear, currentMonth, 1);
let arrayOfMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
let arrayOfDayNumbers = [];

createCalendar();

document.querySelector('.current_month_and_year').innerHTML = `${arrayOfMonth[currentMonth]} ${currentYear}`;
document.querySelector('#arrow_forward').onclick = nextMonth;
document.querySelector('#arrow_back').onclick = previousMonth;
document.querySelector('.button_clear').onclick = clearSelectedRange;

function createCalendar() {
    let dayOfMonth = firstDayOfCurrentMonth;
    let trCount = 0;

    while (dayOfMonth.getMonth() == currentMonth) {
        let dayOfWeek = dayOfMonth.getDay() - 1;

        if (dayOfWeek < 0) {
            dayOfWeek = 6;
        }

        let i = 0;
        let tr = document.createElement('tr');

        while (i < 7) {
            let div = document.createElement('div');
            let td = document.createElement('td');
            let checkYearOfDay = dayOfMonth.getFullYear();
            let checkMonthOfDay = dayOfMonth.getMonth();
            let checkCurrentDay = dayOfMonth.getDate();

            if (trCount == 0) {

                if (i < dayOfWeek) {
                    let dayOfPreviousMonth = new Date(currentYear, currentMonth, -(dayOfWeek - (i + 1)));
                    td.innerHTML = dayOfPreviousMonth.getDate();
                } else {
                    td.innerHTML = dayOfMonth.getDate();
                    dayOfMonth.setDate(dayOfMonth.getDate() + 1);
                }

            } else {
                td.innerHTML = dayOfMonth.getDate();
                dayOfMonth.setDate(dayOfMonth.getDate() + 1);
            }
            
            tr.appendChild(td);
            td.appendChild(div);
            td.classList.add('day');

            if (checkMonthOfDay < currentMonth || (trCount == 0 && i < dayOfWeek)) {
                td.classList.add('previous_month');
            } else if (checkMonthOfDay > currentMonth) {
                td.classList.add('next_month');
            } else {
                td.classList.add('current_month')
            }

            if (checkCurrentDay == today.getDate() && checkMonthOfDay == today.getMonth() && checkYearOfDay == today.getFullYear() && i >= dayOfWeek) {
                td.classList.add('today');
                td.setAttribute('id', 'today');
            }
            i++;
        }

        document.querySelector('#calendar').appendChild(tr);
        trCount++;
    }

    for (let i = 0; i < document.getElementsByClassName('day').length; i++) {

        document.getElementsByClassName('day')[i].onclick = function() {


            if (document.getElementsByClassName('chosen_day').length == 2) {
                
                for (let k = 0; k < document.getElementsByClassName('day').length; k++) {

                    if (document.getElementsByClassName('day')[k].lastChild.classList.contains('first_day_of_the_selected_range')) {
                        document.getElementsByClassName('day')[arrayOfDayNumbers[0]].lastChild.classList.remove('first_day_of_the_selected_range');
                    } else if (document.getElementsByClassName('day')[k].lastChild.classList.contains('last_day_of_the_selected_range')) {
                        document.getElementsByClassName('day')[k].lastChild.classList.remove('last_day_of_the_selected_range');
                    } else {
                        document.getElementsByClassName('day')[k].lastChild.classList.remove('day_of_the_selected_range');
                    }

                }

                document.getElementById('today').classList.add('today');

                if (i > arrayOfDayNumbers[0] && i != arrayOfDayNumbers[1]) {
                    document.getElementsByClassName('chosen_day')[1].classList.remove('chosen_day');
                    document.getElementsByClassName('day')[i].classList.add('chosen_day');
                    arrayOfDayNumbers.splice(1, 1, i);

                    for (let j = arrayOfDayNumbers[0] + 1; j < arrayOfDayNumbers[1]; j++) {
                    
                        if (document.getElementsByClassName('day')[j].classList.contains('today')) {
                            document.getElementsByClassName('day')[j].classList.remove('today');
                        }
    
                        document.getElementsByClassName('day')[j].lastChild.classList.add('day_of_the_selected_range');
                    }
    
                    document.getElementsByClassName('day')[arrayOfDayNumbers[0]].lastChild.classList.add('first_day_of_the_selected_range');
                    document.getElementsByClassName('day')[arrayOfDayNumbers[1]].lastChild.classList.add('last_day_of_the_selected_range');

                } else if(i < arrayOfDayNumbers[0]) {
                    document.getElementsByClassName('chosen_day')[0].classList.remove('chosen_day');
                    document.getElementsByClassName('day')[i].classList.add('chosen_day');
                    arrayOfDayNumbers.splice(0, 1, i);

                    for (let j = arrayOfDayNumbers[0] + 1; j < arrayOfDayNumbers[1]; j++) {
                    
                        if (document.getElementsByClassName('day')[j].classList.contains('today')) {
                            document.getElementsByClassName('day')[j].classList.remove('today');
                        }
    
                        document.getElementsByClassName('day')[j].lastChild.classList.add('day_of_the_selected_range');
                    }
    
                    document.getElementsByClassName('day')[arrayOfDayNumbers[0]].lastChild.classList.add('first_day_of_the_selected_range');
                    document.getElementsByClassName('day')[arrayOfDayNumbers[1]].lastChild.classList.add('last_day_of_the_selected_range');

                } else if(i == arrayOfDayNumbers[1]) {
                    document.getElementsByClassName('chosen_day')[1].lastChild.classList.remove('last_day_of_the_selected_range');
                    document.getElementsByClassName('chosen_day')[1].classList.remove('chosen_day');
                    arrayOfDayNumbers.pop();
                } else if(i == arrayOfDayNumbers[0]) {
                    document.getElementsByClassName('chosen_day')[0].lastChild.classList.remove('first_day_of_the_selected_range');
                    document.getElementsByClassName('chosen_day')[0].classList.remove('chosen_day');
                    arrayOfDayNumbers.splice(0, 1);
                }
            
            } else if (document.getElementsByClassName('chosen_day').length == 1) {

                for (let k = 0; k < document.getElementsByClassName('day').length; k++) {

                    if (document.getElementsByClassName('day')[k].lastChild.classList.contains('first_day_of_the_selected_range')) {
                        document.getElementsByClassName('day')[arrayOfDayNumbers[0]].lastChild.classList.remove('first_day_of_the_selected_range');
                    } else if (document.getElementsByClassName('day')[k].lastChild.classList.contains('last_day_of_the_selected_range')) {
                        document.getElementsByClassName('day')[k].lastChild.classList.remove('last_day_of_the_selected_range');
                    } else {
                        document.getElementsByClassName('day')[k].lastChild.classList.remove('day_of_the_selected_range');
                    }
                    
                }

                document.getElementById('today').classList.add('today');

                if (i > arrayOfDayNumbers[0]) {
                    document.getElementsByClassName('day')[i].classList.add('chosen_day');
                    arrayOfDayNumbers.push(i);

                    for (let j = arrayOfDayNumbers[0] + 1; j < arrayOfDayNumbers[1]; j++) {
                    
                        if (document.getElementsByClassName('day')[j].classList.contains('today')) {
                            document.getElementsByClassName('day')[j].classList.remove('today');
                        }
                    
                        document.getElementsByClassName('day')[j].lastChild.classList.add('day_of_the_selected_range');
                    }

                    document.getElementsByClassName('day')[arrayOfDayNumbers[0]].lastChild.classList.add('first_day_of_the_selected_range');
                    document.getElementsByClassName('day')[arrayOfDayNumbers[1]].lastChild.classList.add('last_day_of_the_selected_range');

                } else if (i < arrayOfDayNumbers[0]) {
                    document.getElementsByClassName('day')[i].classList.add('chosen_day');
                    arrayOfDayNumbers.unshift(i);

                    for (let j = arrayOfDayNumbers[0] + 1; j < arrayOfDayNumbers[1]; j++) {
                    
                        if (document.getElementsByClassName('day')[j].classList.contains('today')) {
                            document.getElementsByClassName('day')[j].classList.remove('today');
                        }
                    
                        document.getElementsByClassName('day')[j].lastChild.classList.add('day_of_the_selected_range');
                    }

                    document.getElementsByClassName('day')[arrayOfDayNumbers[0]].lastChild.classList.add('first_day_of_the_selected_range');
                    document.getElementsByClassName('day')[arrayOfDayNumbers[1]].lastChild.classList.add('last_day_of_the_selected_range');

                } else if(i == arrayOfDayNumbers[0]) {
                    document.getElementsByClassName('chosen_day')[0].classList.remove('chosen_day');
                    arrayOfDayNumbers.pop();
                }

            } else {

                for (let k = 0; k < document.getElementsByClassName('day').length; k++) {
                    
                    if (document.getElementsByClassName('day')[k].lastChild.classList.contains('first_day_of_the_selected_range')) {
                        document.getElementsByClassName('day')[arrayOfDayNumbers[0]].lastChild.classList.remove('first_day_of_the_selected_range');
                    } else if (document.getElementsByClassName('day')[k].lastChild.classList.contains('last_day_of_the_selected_range')) {
                        document.getElementsByClassName('day')[k].lastChild.classList.remove('last_day_of_the_selected_range');
                    } else {
                        document.getElementsByClassName('day')[k].lastChild.classList.remove('day_of_the_selected_range');
                    }

                }

                document.getElementById('today').classList.add('today');

                if (document.getElementsByClassName('day')[i].classList.contains('chosen_day')) {
                    document.getElementsByClassName('day')[i].classList.remove('chosen_day');
                    arrayOfDayNumbers.pop();
                } else {
                    document.getElementsByClassName('day')[i].classList.add('chosen_day');
                    arrayOfDayNumbers.push(i);
                }

            }
            
        }

    
    }

}

function nextMonth() {
    changeMonth();
    nowDate = new Date(currentYear, currentMonth + 1);
    currentMonth = nowDate.getMonth();
    currentYear = nowDate.getFullYear();
    firstDayOfCurrentMonth = new Date(currentYear, currentMonth, 1);
    document.querySelector('.current_month_and_year').innerHTML = `${arrayOfMonth[currentMonth]} ${currentYear}`;
    createCalendar();
}

function previousMonth() {
    changeMonth();
    nowDate = new Date(currentYear, currentMonth - 1);
    currentMonth = nowDate.getMonth();
    currentYear = nowDate.getFullYear();
    firstDayOfCurrentMonth = new Date(currentYear, currentMonth, 1);
    document.querySelector('.current_month_and_year').innerHTML = `${arrayOfMonth[currentMonth]} ${currentYear}`;
    createCalendar();
}

function changeMonth() {

    for (let i = 1; i < document.querySelector('#calendar').children.length; i++) {
        document.querySelector('#calendar').children[i].remove();
        i--;
    }

}

function clearSelectedRange() {

    for (let i = 0; i < document.getElementsByClassName('day').length; i++) {

        if (document.getElementsByClassName('day')[i].classList.contains('chosen_day')) {
           
           if (document.getElementsByClassName('day')[i].lastChild.classList.contains('first_day_of_the_selected_range')) {
            document.getElementsByClassName('day')[i].lastChild.classList.remove('first_day_of_the_selected_range');
           } else if (document.getElementsByClassName('day')[i].lastChild.classList.contains('last_day_of_the_selected_range')) {
            document.getElementsByClassName('day')[i].lastChild.classList.remove('last_day_of_the_selected_range');
           }

           document.getElementsByClassName('day')[i].classList.remove('chosen_day');
        } else if (document.getElementsByClassName('day')[i].lastChild.classList.contains('day_of_the_selected_range')) {
            document.getElementsByClassName('day')[i].lastChild.classList.remove('day_of_the_selected_range');
        }

        document.getElementById('today').classList.add('today');
        arrayOfDayNumbers.splice(0, 2);

    }

}