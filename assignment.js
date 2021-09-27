function kilometerToMeter(value) { 
    if(value < 0) { 
        console.log("Sorry Bro ! distance can't be a negative number");
    }
    else { 
        return value*1000; // 1 kilometer = 10000 meter ; 
    }
  
}
function budgetCalculator(watch,phone,laptop) {
    if(watch < 0 || phone<0 || laptop <0 ) { 
        console.log("Sorry Bro ! the number of watch or phone or laptop can't be a negative number");
    }
    else { 
        var sum = 0 ;
        var  watchMoney=watch*50; //total watch money 
        var  phoneMoney=phone*100;//total money for phone 
        var laptopMoney=laptop*500; //total money for laptop 
        sum=watchMoney+phoneMoney+laptopMoney; // total money for three elements 
        return sum;
    }
   
}
function hotelCost(numberOfDays) {
    var totalMoney = 0 ;
    if(numberOfDays<0) {
        console.log("No No Bro days can't be negative");
    }
   else  if(numberOfDays<=10) {
        totalMoney = totalMoney+numberOfDays*100;
    }
    else if(numberOfDays<=20) {
        var money10days = 10*100;
        var remainingDays = numberOfDays-10;
        var moneyremainingdays = remainingDays*80;
        totalMoney = totalMoney+moneyremainingdays+money10days;
    }
    else {
        var money10days =10*100;
        var money20days =20*80;
        var remainingDays = numberOfDays-20;
        var moneyremainingdays=remainingDays*50;
        totalMoney = totalMoney+money10days+money20days+moneyremainingdays;
    }
    return totalMoney;
}
function megaFriend(names) {
     var maxlength=0;
     var megaFriendName ; 
    for(var i = 0 ;i<names.length;i++) {
       var friend = names[i]; //taking each fiends from the array 
       var length = friend.length; 
       if(length > maxlength) {
           maxlength = length;
           megaFriendName = friend;
       }
   }
   return megaFriendName;
   
}
