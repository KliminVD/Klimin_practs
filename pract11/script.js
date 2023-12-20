var cart = [];  // массив для хранения товаров в корзине
var filteredCart = [];
var check1, check2 = false;
function compare(a, b){
    if (a.name > b.name) return 1;
    if (a.name == b.name) return 0;
    if (a.name < b.name) return -1;
}
function addToCart(name, price) {
    // Создаем объект товара
    var item = {
        name: name,
        price: price, 
        amount: 1
    };
    let check = false;
    // Добавляем товар в массив корзины
    for (let it of cart){
        if (it.name == name){
            it.price += price;
            it.amount += 1;
            check = true;
            break;
        }
    }
    if (!check)
        cart.push(item);
    
    // Обновляем отображение корзины
    displayCart(cart);
}
function removeFromCart(name, price){
    for (let item of cart){
        if (item.name == name){
            if (item.amount == 1)
                cart.splice(cart.indexOf(item), 1);
            else {
                cart[cart.indexOf(item)].amount -= 1;
                cart[cart.indexOf(item)].price -= price;
            }
            break;
        }
    }
    displayCart(cart);
}
function absoluteRemove(name){
    for (let item of cart){
        if (item?.name == name){
            let k = cart.indexOf(item);
            cart.splice(cart.indexOf(item), 1);
            cart[k]?.name;
            break;
        }
    }
    displayCart(cart);
}
function displayCart(array) {
    var itemList = document.getElementById("item-list");
    var totalPrice = document.getElementById("total-price");
    
    // Очищаем список товаров в корзине перед обновлением
    itemList.innerHTML = "";
    
    // Обходим все товары в корзине
    var total = 0;
    if (check1){
        array = array.sort(compare);
    }
    if (check2){
        array.sort(compare);
        array.reverse();
    }
    let tmp = array.slice();
    for (var i = 0; i < tmp.length; i++) {
        var item = tmp[i];
        // Создаем элемент списка для каждого товара
        var listItem = document.createElement("li");
        listItem.innerText = item.name + " - " + item.amount + " штук " + " - " + item.price + " рублей";
        // Добавляем элемент списка в список товаров в корзине
        itemList.appendChild(listItem);
        
        // Обновляем общую стоимость
        total += item.price;
    }
    
    // Обновляем отображение общей стоимости
    totalPrice.innerText = "Общая стоимость: " + total + " рублей";
    
}

function clearCart() {
    // Очищаем массив корзины
    cart = [];
    filteredCart = [];
    // Обновляем отображение корзины
    displayCart(cart);
}
function filterArray() {
    filteredCart = [];
    for (let item of cart){
        if (item?.price >= parseInt(document.getElementById("min").value) && item?.price <= parseInt(document.getElementById("max").value)){
            
            filteredCart.push(item);
        }
    }
    displayCart(filteredCart);
}
function sortArray(order) {
    if (order == 1)
    {
        check1 = true;
        check2 = false;
    }
    if (order == 2)
    {
        check1 = false;
        check2 = true;
    }
    displayCart(cart);
}