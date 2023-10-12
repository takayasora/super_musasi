// ページが読み込まれたときに実行
window.addEventListener('load', function () {
    // 定期的に確認するインターバルを設定 (例: 0.1秒ごと)
    var interval = setInterval(checkForSelectedSpan, 100);

    function checkForSelectedSpan() {
        // idがquestionsItemsの要素を取得
        var questionsItems = document.getElementById('questionsItems');

        // questionsItems内のすべてのspan要素を取得
        var spans = questionsItems.querySelectorAll('span');

        // 選択されたspanが存在するか確認
        var selectedSpan = Array.from(spans).find(span => span.classList.contains('selected'));

        // 選択されたspanが存在する場合、アラートを表示
        if (selectedSpan) {
            window.alert('選択されたスパンが見つかりました！');
            // 監視を停止
            clearInterval(interval);
        }
    }

    // 「正解と解説」ボタンの要素を取得
    var answersAndGuidanceButton = document.getElementById('btn_answersAndGuidance');
    
    // ボタンがクリックされたら監視を停止
    answersAndGuidanceButton.addEventListener('click', function() {
        clearInterval(interval);
    });
});
