function Pizza(pizzaFlavour,pizzaSize,pizzaCrust,pizzaTopping) {
this.pizzaFlavour=pizzaFlavour;
this.pizzaSize= pizzaSize;
this.pizzaCrust=pizzaCrust;
this.pizzaTopping=pizzaTopping;
}
var pizzaPrice= [900,600,400,]
function Total(pizzaNumber,pizzaCrust,pizzaTopping,pizzaSize){
    this.pizzaNumber = pizzaNumber;
    this.pizzaTopping= pizzaTopping;
    this.pizzaCrust = pizzaCrust;
    this.pizzaSize =pizzaSize;

}
Total.prototype.totalPrice = function(){
    return (this.pizzaCrust + this.pizzaTopping + this.pizzaSize)* this.pizzaNumber
};
function myPizza(){
    var pizzaFlavour= document.getElementById("Flavour").value;
    
    
    var pizzaSize=parseInt( document.getElementById("Size").value);
    
    var pizzaCrust = parseInt(document.getElementById("Crust").value);
    
    var pizzaTopping = parseInt( document.getElementById("Topping").value);
    
    var pizzaNumber = parseInt( document.getElementById("number").value);
    
   
    var order = new Pizza(pizzaFlavour,pizzaSize,pizzaCrust,pizzaTopping)
    
    var newTotal= new Total(pizzaNumber,pizzaCrust,pizzaTopping,pizzaSize)
    var newTotalPrice = newTotal.totalPrice()
    alert(newTotalPrice);

    
}
function onDelivery(){
    var delivery= document.getElementById("delivery").value;
    if (delivery.value==one)
prompt("Enter your location");
prompt("enter your phone number");
    }