// kilometerToMeter
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}
var toMeter = kilometerToMeter(20);
 console.log(toMeter);


//   budgetCalculator
function budgetCalculator(smartWatch, mobile, laptop){
    var watch = smartWatch * 50;
    var phone = mobile * 100;
    var pc = laptop * 500;
    var tutalPrice = watch + phone + pc;
    return tutalPrice;
}
var calculator = budgetCalculator(10,15,20)
console.log(calculator);



//  hotelCost
function hotelCost (days){
    var price = 0;
    if (days <= 10) {
        price = days * 100;
    }
    else if (days <= 20){
        var tenDay = 10 * 100;
        var remaining = days - 10;
        var secondTenDay = remaining * 80;
        price = tenDay + secondTenDay;
    }
    else {
        var tenDay = 10 * 100;
        var secondTenDay  = 10 * 80;
        var remaining = days - 20;
        var thirdTenDay = remaining * 50;
        price = tenDay + secondTenDay + thirdTenDay;
    }
     return price;
    }
    var count = hotelCost(21);
    console.log(count);