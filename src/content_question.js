// Sleep関数
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

async function myFunction() {
    while(1){
        await sleep(100);
        // alert('プログラムAを実行中…');

        var questionsItems = document.getElementById('questionsItems');
        var spans = questionsItems.querySelectorAll('span');
        var selectedSpan = Array.from(spans).find(span => span.classList.contains('selected'));

        if (selectedSpan) {
            document.getElementById('btn_answersAndGuidance').click();
            // while(1){
            //     await sleep(3000);
                
            //     var correctImg = document.querySelector('img[src="/images/frontend/pc/ja/question/img.stamp.passed.png"]');
            //     var incorrectImg = document.querySelector('img[src="/images/frontend/pc/ja/question/img.stamp.failed.png"]');
            
            //     alert('プログラムBを実行中…');
            
            //     if (correctImg) {
            //         // 正解画像が表示されている場合
            //         alert('正解画像が表示されています。');
            //         // 次の問題ボタンをクリック
            //         document.getElementById('btn_nextQuestion').click();
            //         break;
            //     } else if (incorrectImg) {
            //         // 不正解画像が表示されている場合
            //         alert('不正解画像が表示されています。');
            //         break;
            //     }
            // }
        }
    }
};

myFunction();