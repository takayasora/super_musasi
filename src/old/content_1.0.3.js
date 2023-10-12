window.addEventListener('load', function () {
    var interval = setInterval(checkForSelectedSpan, 100);
    var buttonClicked = false; // ボタンがすでにクリックされたかどうかを示すフラグ

    function checkForSelectedSpan() {
        var questionsItems = document.getElementById('questionsItems');
        var spans = questionsItems.querySelectorAll('span');
        var selectedSpan = Array.from(spans).find(span => span.classList.contains('selected'));

        if (selectedSpan) {
            // 監視を停止
            clearInterval(interval);
            document.getElementById('btn_answersAndGuidance').click();
            // ボタンがまだクリックされていない場合、ボタンをクリック
            // if (!buttonClicked) {
            //     var answersAndGuidanceButton = document.getElementById('btn_answersAndGuidance');
            //     if (answersAndGuidanceButton) {
            //         answersAndGuidanceButton.click();
            //         buttonClicked = true;
            //     }
            // }
        }
    }
});
