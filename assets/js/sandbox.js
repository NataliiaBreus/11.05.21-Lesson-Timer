const regex = /\b[a-z]+\b/g;
const regex2 = new RegExp('[a-z]+','g');

// task 1 Написать регулярку, которая выбирает строку, если в ней есть только цифры

const regex3 = new RegExp('^[0-9]+$','g');

// task 2 Написать функцию, которая проверяет правильность введенного имени пользователя

const USERNAME_PATTERN = new RegExp('^{5,15}$');

function checkUserName(username){
    if(USERNAME_PATTERN.test(username)){
        console.log("Success")
    }else{
        throw new Error("Invalid username");
    }
}





         

        