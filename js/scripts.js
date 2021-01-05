var OrderNew = [];

function Pizza(pizzaFlavour,pizzaSize,pizzaCrust,pizzaTopping) {
    this.pizzaFlavour=pizzaFlavour;
    this.pizzaSize= pizzaSize;
    this.pizzaCrust=pizzaCrust;
    this.pizzaTopping=pizzaTopping;
}

var pizzaPrice= [900,600,400,]



Pizza.prototype.totalPrice = function(){
    return (this.pizzaCrust + this.pizzaTopping + this.pizzaSize)* this.pizzaNumber
};


$("#checkout").click(function (event) {
    
    var PizzaFlavour = $("#Flavour").val();
    console.log(PizzaFlavour)
    alert(PizzaFlavour)

    var PizzaSize = parseInt( $("#Size").val());
    alert(PizzaSize)

    var PizzaCrust = parseInt( $("#Crust").val());
    alert(PizzaCrust)

    var PizzaTopping =parseInt( $("#Topping").val());
    alert(PizzaTopping)
    // console.log(PizzaTopping)
    
    var newPizzae = new Pizza(PizzaFlavour, PizzaSize, PizzaCrust, PizzaTopping); 
    
    alert(newPizzae)
    
    OrderNew.push(newPizzae);
    console.log(OrderNew)
    alert(OrderNew)
    // $("#Flavour").val("");
    // $("#Size").val("");
    // $("#Crust").val("");
    // $("#Toppings").val("");
     
    totalAmount = 0
    for (let i = 0; i < OrderNew.length; i++ ){
        totalAmount += OrderNew[i].totalPrice();
    }
    
    $("#ordersTaken").append(
        "<tr>" +
        '<td scope="orderCalculation">' +
        newPizzae.PizzaFlavour +
        // " - " +
        
        "</td>" +
        "<td>" +
        newPizzae.PizzaSize +
        "</td>" +
        "<td>" +
        newPizzae.PizzaCrust +
        // " @ " +
        
        "</td>" +
        "<td>" +
        newPizzae.PizzaTopping +
        // " @ " +
        
        "</td>" +
        "<td>" +
        newPizzae.totalPrice() +
        "</td>" +
        "</tr>"
    );

    $("#ordersTaken").append("");
    if (OrderNew.length > 0) {
        $("#form-heading").empty();
        $("#form-heading").append("Make A New Order");
    }
    $("#totalAmount").fadeIn();
    $("#Checkout").fadeIn();
    $("#orderClass").fadeIn();
    $("#totalAmount").empty();
    $("#totalAmount").append(totalAmount);
    $("#totalAmount").show();

});

$("#Checkout").click(function () {
$(".checkout-info").show();
});

$("#checkoutForm").submit(function (event) {
event.preventDefault();
var name = $("#name").val();
var deliveryOption = $("#OptionDelivery").val();
NameOfCustomer = name;
$("#name").val("");
$("#OptionDelivery").val("");
$(".checkout-info").hide();
$("#Checkout").hide();
$("#totalAmount").empty();
if (deliveryOption === "deliver") {
    $(".deliveryLocation").show();
    $(".deliveryCost").show();
    $("#totalAmount").empty();
    $("#delivery-cost").append(150);
    totalAmount += 150;
    $("#totalAmount").empty();
    $("#totalAmount").empty();
$("#totalAmount").append(totalAmount);
$(".TotalAmount").show();
} else {
    alert(NameOfCustomer + ": Your total bill is Ksh. " + totalAmount + ". Your order will be ready for collection in the next one hour." + " Make sure you have the total amount for the order during the delivery to avoid delays." + " Incase there is any comment of complaint, Please reach out to us as soon as possible.");
}
});

$("#locationForm").submit(function (event) {
event.preventDefault();
var estateEntered = $("#estate").val();
var houseNumberEntered = $("#houseNumber").val();
estate = estateEntered;
houseNumber = houseNumberEntered;
$("#Checkout").hide();
$(".deliveryLocation").hide();
$("#totalAmount").empty();
$("#totalAmount").append(totalAmount);
$(".TotalAmount").show();
alert(NameOfCustomer + ": Your new total bill is Ksh. " + totalAmount + ". Your order will be delivered to " + estate + ", " + houseNumber + " in the next one hour." + " Make sure you have the total amount for the order during the delivery to avoid delays." + " Incase there is any comment of complaint, Please reach out to us as soon as possible");
});
    