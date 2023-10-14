function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

async function myFunction() {
    var correctImg = document.querySelector('img[src="/images/frontend/pc/ja/question/img.stamp.passed.png"]');

    if (correctImg) {
        // 正解画像が表示されている場合
        // alert('正解画像が表示されています。');
        // 次の問題ボタンをクリック
        document.getElementById('btn_nextQuestion').click();
    }
};

myFunction();