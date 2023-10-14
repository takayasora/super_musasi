async function myFunction() {
    var correctImg = document.querySelector('img[src="/images/frontend/pc/ja/question/img.stamp.passed.png"]');

    if (correctImg) {
        document.getElementById('btn_nextQuestion').click();
    }
};

myFunction();