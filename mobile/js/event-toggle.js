// 이벤트 토글

(function (document){
    const btnBanner = document.querySelector(".banner-event");
    btnBanner.addEventListener("click", eventToggle);

    function eventToggle(event){
        event.preventDefault();
        const currentTarget = event.target;
        const eventOpen = "event-open";

        if(currentTarget.classList.contains(eventOpen)){
            currentTarget.classList.remove(eventOpen);
        } else {
            currentTarget.classList.add(eventOpen)
        }
    }
})(document)
