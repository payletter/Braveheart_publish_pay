// 결제 수단 선택(one option)

(function (document) {

    const methodAcademy = document.querySelector(".method-academy");
    const btnMethodAcademy = methodAcademy.querySelector("a");

    btnMethodAcademy.addEventListener("click", selectcard);


    function selectcard(event){
        event.preventDefault();

        const methodAcademy = document.querySelector(".method-academy");
        const btnMethodAcademy = methodAcademy.querySelector("a");
        const selectedClass = "method-selected";

        btnMethodAcademy.classList.add(selectedClass);
    }
})(document)