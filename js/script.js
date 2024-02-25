const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

// カラーピッカーを操作した時の一連の動作
const colorBg = () => {
    document.body.style.backgroundColor = color.value;

    // カラーコードを表示
    if (color.value === '#ffffff') {
        text.textContent = `カラーコード：${color.value}（white）`;
    } else if (color.value === '#000000') {
        text.textContent = `カラーコード：${color.value}（black）`;
    } else {
        text.textContent = `カラーコード：${color.value}`;
    }
}

// カラーピッカーが変更されたらcolorBg関数を実行
color.addEventListener('input', colorBg);
