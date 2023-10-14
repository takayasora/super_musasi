window.addEventListener('load', function () {
    var interval = setInterval(checkForSelectedSpan, 100);
    var buttonClicked = false; // ボタンがすでにクリックされたかどうかを示すフラグ

    function checkForSelectedSpan() {
        var questionsItems = document.getElementById('questionsItems');
        var spans = questionsItems.querySelectorAll('span');
        var selectedSpan = Array.from(spans).find(span => span.classList.contains('selected'));

        
        if (selectedSpan) {
            // 監視を停止
            buttonA = document.getElementById('btn_answersAndGuidance')
            buttonB = document.getElementById('btn_nextQuestion')
            if (selectedSpan) {
                if (buttonA){
                    document.getElementById('btn_answersAndGuidance').click();
                }else if (buttonB){
                    document.getElementById('btn_nextQuestion').click();
                }
            }
            clearInterval(interval);
        }
    }
});