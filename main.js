// #news-btn1 クリックで #news へスクロールする
document.getElementById('news-btn1').addEventListener('click', (e) => {
    
    // a タグの元の動作を無効化
    e.preventDefault();
    
    // #news 要素のビューポートからの相対位置を取得して定数へ代入 ※ビューポートとは画面の現在地
    const news = document.getElementById('news').getBoundingClientRect().top;
    
    // 現在のスクロール位置を取得して定数へ代入
    const newsOffset = window.pageYOffset;
    
    // ページ内(Window)の要素の位置を算出して、-5で要素より少し上にずらして見やすくする
    const newsTarget = news + newsOffset - 5;
    
    // 横と縦(x,y)位置を指定してスクロールする
    window.scrollTo({
        left: 0,
        top: newsTarget,
        behavior: 'smooth'
    });
});

// #news-btn2 クリックで #news へスクロールする
document.getElementById('news-btn2').addEventListener('click', (e) => {
    e.preventDefault();
    const news = document.getElementById('news').getBoundingClientRect().top;
    const newsOffset = window.pageYOffset;
    const newsTarget = news + newsOffset - 5;
    window.scrollTo({
        left: 0,
        top: newsTarget,
        behavior: 'smooth'
    });
});

// #products-btn1 クリックで #products1 へスクロールする
document.getElementById('products-btn1').addEventListener('click', (e) => {
    e.preventDefault();
    const products = document.getElementById('products1').getBoundingClientRect().top;
    const productsOffset = window.pageYOffset;
    const productsTarget = products + productsOffset - 5;
    window.scrollTo({
        left: 0,
        top: productsTarget,
        behavior: 'smooth'
    });
});

// #products-btn2 クリックで #products1 へスクロールする
document.getElementById('products-btn2').addEventListener('click', (e) => {
    e.preventDefault();
    const products = document.getElementById('products1').getBoundingClientRect().top;
    const productsOffset = window.pageYOffset;
    const productsTarget = products + productsOffset - 5;
    window.scrollTo({
        left: 0,
        top: productsTarget,
        behavior: 'smooth'
    });
});

// shop-btn1 クリックで #shop へスクロールする
document.getElementById('shop-btn1').addEventListener('click', (e) => {
    e.preventDefault();
    const shop = document.getElementById('shop').getBoundingClientRect().top;
    const shopOffset = window.pageYOffset;
    const shopTarget = shop + shopOffset - 5;
    window.scrollTo({
        left: 0,
        top: shopTarget,
        behavior: 'smooth'
    });
});

// shop-btn2 クリックで #shop へスクロールする
document.getElementById('shop-btn2').addEventListener('click', (e) => {
    e.preventDefault();
    const shop = document.getElementById('shop').getBoundingClientRect().top;
    const shopOffset = window.pageYOffset;
    const shopTarget = shop + shopOffset - 5;
    window.scrollTo({
        left: 0,
        top: shopTarget,
        behavior: 'smooth'
    });
});