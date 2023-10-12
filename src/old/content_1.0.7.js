window.addEventListener('load', function () {
    var intervalA = setInterval(checkForSelectedSpan, 100);

    alert('プログラムAを開始します。');

    function checkForSelectedSpan() {
        alert('プログラムBを開始します。');

        var questionsItems = document.getElementById('questionsItems');
        var spans = questionsItems.querySelectorAll('span');
        var selectedSpan = Array.from(spans).find(span => span.classList.contains('selected'));

        if (selectedSpan) {
            // 監視を停止
            clearInterval(intervalA);
            document.getElementById('btn_answersAndGuidance').click();
        }
    }

    alert('プログラムBを開始します。');
    var intervalB = setInterval(checkForOk, 100);
    alert('プログラムBを終了します。');

    function checkForOk() {
        var correctImg = document.querySelector('img[src="/images/frontend/pc/ja/question/img.stamp.passed.png"]');
        var incorrectImg = document.querySelector('img[src="/images/frontend/pc/ja/question/img.stamp.failed.png"]');

        alert('プログラムBを実行中…');

        if (correctImg) {
            // 正解画像が表示されている場合
            alert('正解画像が表示されています。');
            // 次の問題ボタンをクリック
            document.getElementById('btn_nextQuestion').click();
            clearInterval(intervalB);
        } else if (incorrectImg) {
            // 不正解画像が表示されている場合
            alert('不正解画像が表示されています。');
            clearInterval(intervalB);
        }
    }
});
