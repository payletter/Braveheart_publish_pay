/*
pin code
- target에 focus
- pin code 입력
- max length check
*/

(function(window, document){
    const pwGroup = document.querySelector('.password');

    pwGroup.addEventListener("click", focusTarget)
    pwGroup.addEventListener("keyup", writePincode);
    pwGroup.addEventListener("keydown", removePincode);

    function focusTarget(event){
        event.preventDefault();
        const currentTarget = event.target;

        if(!currentTarget.classList.contains('pw-img')){
            return
        }

        const parentDiv = currentTarget.parentNode;
        const currentInput = parentDiv.querySelector('input');

        currentInput.focus();
    }

    const KEY_CODE_BACKSPACE = 8
    const KEY_CODE_NUMBER = /^[0-9]$/;

    function writePincode(event){
        event.preventDefault();
        const currentTarget = event.target;
        const parentDiv = currentTarget.parentNode;

        const nextDiv = parentDiv.nextElementSibling;
        const currentInput = parentDiv.querySelector("input");

        if(KEY_CODE_NUMBER.test(currentInput.value)) {
            parentDiv.classList.add("on");
            if(nextDiv){
                nextDiv.querySelector('input').focus();
            }
        }
        return false
    }

    function removePincode(event) {
        const currentTarget = event.target;
        const parentDiv = currentTarget.parentNode;

        const prevDiv = parentDiv.previousElementSibling;
        const currentInput = parentDiv.querySelector("input");

        if(event.keyCode === KEY_CODE_BACKSPACE){
            if(currentInput.id === "PIN4" && currentInput.value){
                parentDiv.classList.remove("on");
                parentDiv.querySelector('input').value = '';
                parentDiv.querySelector('input').focus();
            }
            else if(prevDiv){
                prevDiv.classList.remove("on");
                prevDiv.querySelector('input').value = '';
                prevDiv.querySelector('input').focus();
            }
        }
    }

    function maxLengthCheck(element){
        if (element.value.length > element.maxLength){
            element.value = element.value.slice(0, element.maxLength);
        }
    }
    window.maxLengthCheck = maxLengthCheck;
})(window, document)
