window.addEventListener('load', function () {
    // GIF画像のURL
    var gifImageUrl = 'https://raw.githubusercontent.com/takayasora/super_musasi/main/src/resource/sky.gif';

    // GIF画像を背景として表示
    document.body.style.backgroundImage = 'url(' + gifImageUrl + ')';
    document.body.style.backgroundSize = 'cover'; // 画面いっぱいに拡大表示

    // PNGファイルを表示
    var imageUrl = 'https://github.com/takayasora/super_musasi/raw/main/src/resource/speedup.png';
    var imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    imgElement.style.position = 'fixed'; // 画像の位置を固定
    imgElement.style.top = '515px'; // 画像の上からの位置を調整
    imgElement.style.left = '270px'; // 画像の左からの位置を調整
    imgElement.style.width = '360px'; // 画像の幅を調整
    imgElement.style.height = '70px'; // 画像の高さを調整
    imgElement.style.zIndex = '9999'; // Zインデックスを設定
    document.body.appendChild(imgElement);

    var interval = setInterval(checkForSelectedSpan, 100);
    var buttonClicked = false; // ボタンがすでにクリックされたかどうかを示すフラグ

    function checkForSelectedSpan() {
        var questionsItems = document.getElementById('questionsItems');
        var spans = questionsItems.querySelectorAll('span');
        var selectedSpan = Array.from(spans).find(span => span.classList.contains('selected'));

        if (selectedSpan) {
            // 監視を停止
            var buttonA = document.getElementById('btn_answersAndGuidance');
            var buttonB = document.getElementById('btn_nextQuestion');
            
            if (buttonA) {
                buttonA.click();
            } else if (buttonB) {
                buttonB.click();
            }

            clearInterval(interval);
        }
    }
});
