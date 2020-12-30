function Pizza(pizzaFlavour,pizzaSize,pizzaCrust,pizzaTopping) {
this.pizzaFlavour=pizzaFlavour;
this.pizzaSize= pizzaSize;
this.pizzaCrust=pizzaCrust;
this.pizzaTopping=pizzaTopping;
}
var pizzaPrice= [900,600,400]
function Total(pizzaNumber,pizzaCrust,pizzaTopping,pizzaSize){
    this.pizzaNumber = pizzaNumber;
    this.pizzaTopping= pizzaTopping;
    this.pizzaCrust = pizzaCrust;
    this.pizzaSize =pizzaSize;

}
Total.prototype.totalPrice = function(){
    return this.pizzaPrice* this.pizzaNumber
};
function myPizza(){
    var pizzaFlavour= document.getElementById("Flavour").value;
    alert(pizzaFlavour);
    
    var pizzaSize=parseInt( document.getElementById("Size").value);
    alert(pizzaSize);
    var pizzaCrust = parseInt(document.getElementById("Crust").value);
    alert(pizzaCrust);
    var pizzaTopping = parseInt( document.getElementById("Topping").value);
    alert(pizzaTopping);
    var number = parseInt( document.getElementById("number").value);
    alert(number);
    var order = new Pizza(pizzaFlavour,pizzaSize,pizzaCrust,pizzaTopping)
    alert(order);
}