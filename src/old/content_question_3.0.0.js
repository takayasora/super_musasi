window.addEventListener('load', function () {
    // ここに背景画像を表示するプログラムを記載する

    
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
            buttonA = document.getElementById('btn_answersAndGuidance')
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