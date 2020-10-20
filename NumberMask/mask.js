document.getElementsByClassName('number_field')[0].addEventListener('keyup', function(event) {
    if (document.getElementsByClassName('number_field')[0].value.length != 0) {
        let phoneNumberLength = document.getElementsByClassName('number_field')[0].value.length;
        let userNumber = document.getElementsByClassName('number_field')[0].value[phoneNumberLength - 1];
        console.log(userNumber);

        if (event.code == "Backspace") {
            return;
        }

        if (phoneNumberLength < 18) {
            document.getElementsByClassName('warning')[0].style.visibility = 'hidden';
        }

        if (phoneNumberLength == 1) {

            if (userNumber == '7' || userNumber == '8') {
                document.getElementsByClassName('number_field')[0].value = '+7';
                console.log(userNumber);
                console.log('yes');
            } else if (userNumber != '+' && userNumber != '7' && userNumber != '8') {
                console.log(userNumber);
                console.log('no');
                document.getElementsByClassName('number_field')[0].value = `+7 (${userNumber}`;
            }

        } else if (phoneNumberLength > 1) {
            let pervUserNumber = document.getElementsByClassName('number_field')[0].value[phoneNumberLength - 2];
            console.log(pervUserNumber);
            console.log(phoneNumberLength);

            if (phoneNumberLength == 2) {
                
                if (userNumber != '7' && pervUserNumber == '+') {
                    document.getElementsByClassName('number_field')[0].value = `+7 (${userNumber}`;
                } 

            } else if (phoneNumberLength == 3 && pervUserNumber == '7') {
                document.getElementsByClassName('number_field')[0].value = `+7 (${userNumber}`;
            } else if(phoneNumberLength == 4) {
                let correctNumber = '';

                for (let i = 0; i < phoneNumberLength - 1; i++) {
                    correctNumber += document.getElementsByClassName('number_field')[0].value[i];
                }

                correctNumber += `(${document.getElementsByClassName('number_field')[0].value[phoneNumberLength - 1]}` ;
                document.getElementsByClassName('number_field')[0].value = correctNumber;
            } else if (phoneNumberLength == 7) {
                document.getElementsByClassName('number_field')[0].value += ')';
            }else if(phoneNumberLength == 8) {
                let correctNumber = '';

                for (let i = 0; i < phoneNumberLength - 1; i++) {
                    correctNumber += document.getElementsByClassName('number_field')[0].value[i];
                }

                correctNumber += `) ${document.getElementsByClassName('number_field')[0].value[phoneNumberLength - 1]}` ;
                document.getElementsByClassName('number_field')[0].value = correctNumber;
            } else if (phoneNumberLength == 9 && userNumber != ' ') {
                let correctNumber = '';

                for (let i = 0; i < phoneNumberLength - 1; i++) {
                    correctNumber += document.getElementsByClassName('number_field')[0].value[i];
                }

                correctNumber += ` ${document.getElementsByClassName('number_field')[0].value[phoneNumberLength - 1]}`;
                console.log(correctNumber);

                document.getElementsByClassName('number_field')[0].value = correctNumber;
            } else if(phoneNumberLength == 13 && userNumber != '-') {
                let correctNumber = '';

                for (let i = 0; i < phoneNumberLength - 1; i++) {
                    correctNumber += document.getElementsByClassName('number_field')[0].value[i];
                }

                correctNumber += `-${document.getElementsByClassName('number_field')[0].value[phoneNumberLength - 1]}`;
                console.log(correctNumber);

                document.getElementsByClassName('number_field')[0].value = correctNumber;
            } else if (phoneNumberLength == 16 && userNumber != '-') {
                let correctNumber = '';

                for (let i = 0; i < phoneNumberLength - 1; i++) {
                    correctNumber += document.getElementsByClassName('number_field')[0].value[i];
                }

                correctNumber += `-${document.getElementsByClassName('number_field')[0].value[phoneNumberLength - 1]}`;
                console.log(correctNumber);

                document.getElementsByClassName('number_field')[0].value = correctNumber;
            } else if (phoneNumberLength == 18) {
                
            } else if (phoneNumberLength > 18) {
                let correctNumber = '';
                document.getElementsByClassName('warning')[0].style.visibility = 'visible';

                for (let i = 0; i < phoneNumberLength - 1; i++) {
                    correctNumber += document.getElementsByClassName('number_field')[0].value[i];
                }
                console.log(correctNumber);

                document.getElementsByClassName('number_field')[0].value = correctNumber;
            }
        }
           
    }
});