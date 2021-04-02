function Original(glazing, amount) {
    this.glazing = glazing;
    this.amount = amount;
    this.name = "Original Cinnamon Roll";
    this.paragraph = "Classic original cinnamon buns will satisfy your cravings for delicious and freshly produced dessert.";
    this.image_alt = 'original cinnamon roll';
    this.image = 'img/left-card.jpg';
  }

function Vanilla(glazing, amount) {
    this.glazing = glazing;
    this.amount = amount;
    this.name = "Vanilla Cinnamon Roll";
    this.paragraph = "Sweet Vanilla cinnamon buns will satisfy your cravings for delicious and freshly produced dessert.";
    this.image_alt = 'vanilla flavored cinnamon roll';
    this.image = 'img/middle-card.jpg';
}

function PumpkinSpice(glazing, amount) {
    this.glazing = glazing;
    this.amount = amount;
    this.name = "Pumpkin Spice Cinnanmon";
    this.paragraph = "Seasonal Pumpkin Spice buns will satisfy your cravings for delicious and freshly produced dessert.";
    this.image_alt = 'pumpkin spice cinnamon roll';
    this.image = 'img/right-card.jpg';
}
function display_cart(creature) {
    let header = document.getElementById("header");
    header.innerHTML = creature.name;
    let img = document.getElementById("image");
    img.setAttribute("src", creature.image);
}

var cinnamon_list = [];

function onLoad() {
    if(localStorage.getItem("productImage") === "img/left-card.jpg"){
        cinnamon_list.push(new Original("None", "1"));
    }else if(localStorage.getItem("productImage") === "img/middle-card.jpg"){
        cinnamon_list.push(new Vanilla("None", "1"));
    }else{
        cinnamon_list.push(new PumpkinSpice("None", "1"));
    }
    let img = document.getElementById("image");
    let food = cinnamon_list[cinnamon_list.length-1];
    img.setAttribute("src", food.image);
    img.setAttribute("alt", food.image_alt);
    let product_name = document.getElementById("card-product-name");
    product_name.innerText = food.name;
    let product_desc = document.getElementById("card-product-desc");
    product_desc.innerText = food.paragraph;

}

function changeImage(description)
{
    localStorage.setItem("productImage", description);
}

function change(description)
{
    document.getElementById("dropbtn1").innerHTML=description;
    let food = cinnamon_list[cinnamon_list.length-1];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    food.glazing = description;
}

function changeAmt(description)
{
    document.getElementById("dropbtn2").innerHTML=description;
    food.amount = description;
}

function addToCart(){
    var cinnamon_num = 0;
    if(sessionStorage.getItem('cinnamon_num')){
        cinnamon_num = parseInt(sessionStorage.getItem('cinnamon_num'));
    }
    cinnamon_num += 1;
    sessionStorage.setItem('cinnamon_num', cinnamon_num);
    // // localStorage.setItem("cinnamon_array", cinnamon_list);
    // localStorage.setItem("cinnamon_num", cinnamon_list.length);
}

function loadCart() {
    // if (cinnamon)
    var food = sessionStorage.getItem("cinnamon_num");
    if (food === null){
        document.getElementById("cart-nav").innerHTML= "Cart(0 new item)";
    }else if(food === '1'){
        document.getElementById("cart-nav").innerHTML= "Cart (" + food + " new item)";
    }
    else{
        document.getElementById("cart-nav").innerHTML= "Cart (" + food + " new items)";
    }

}