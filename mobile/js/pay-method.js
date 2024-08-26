/*
- 빠른결제 & 다른 결제 수단 toggle
- 다른 결제 수단 selected
*/

(function (document) {
    const QUICK = 'quick-js';
    const OTHERS = 'others-js';

    document.body.classList.add(QUICK)

    const quickElement = document.getElementById('method-quick')
    const othersElement = document.getElementById('method-others')

    quickElement.addEventListener('click', () => changeMethod(true))
    othersElement.addEventListener('click', () => changeMethod(false))

    function changeMethod (isMethodQuick){
        document.body.classList.remove(QUICK)
        document.body.classList.remove(OTHERS)

        document.body.classList.add(isMethodQuick ? QUICK : OTHERS)
    }



    const methodOthersToggle = document.querySelector('.method-others-toggle');

    methodOthersToggle.addEventListener("click", selectMethodOthers)

    function selectMethodOthers(event) {
        event.preventDefault();
        const currentTarget = event.target;

        const methodOthersToggleItem = methodOthersToggle.querySelectorAll("a");
        const methodSelected = "method-selected";

        methodOthersToggleItem.forEach(item => {
            item.classList.remove(methodSelected);
            currentTarget.closest("a").classList.add(methodSelected);
        })
    }
})(document)