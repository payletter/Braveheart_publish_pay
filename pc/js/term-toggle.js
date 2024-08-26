// 약관 toggle

(function(window){
    function termToggle(e){
        var target = e.closest('section');
        var className = 'join-agree-open';

        target.classList.contains(className)
            ? target.classList.remove(className)
            : target.classList.add(className);
    }
window.termToggle = termToggle;
})(window)
