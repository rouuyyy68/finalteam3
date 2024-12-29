let reduce = document.querySelector('.reduce');
let add = document.querySelector('.add');
let number = document.querySelector('.number');

add.onclick = function() {
    event.preventDefault();
    number.value++;
}


reduce.onclick = function() {
    event.preventDefault();
    if (number.value > 0) { 
        number.value--;
    } else {
        window.confirm('商品數量不能小於0');
    }
};