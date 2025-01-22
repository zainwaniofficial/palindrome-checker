const userData = document.querySelector('.js-input-box');
function reverseString(Str){

    return Str.split("").reverse().join("")
}


function check(){
    const value = userData.value;
    const reverseValue = reverseString(value)
    if(value === reverseValue){
        document.querySelector('.js-output-box').innerHTML = `<p class = "paraOutput ParaOutputColor">Its Palindrome </p>`;
    }else{
        
        document.querySelector('.js-output-box').innerHTML = `<p class = "paraOutput">Its not Palindrome </p>`;
    }

    userData.value = '';
}