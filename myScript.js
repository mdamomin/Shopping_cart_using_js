

document.getElementById("phone_plus").addEventListener("click", function(){
    plusePriceCal("phoneCountNumber", "phonePriceNumber",120);
    TotalSubCal("subtotalPriceNumber");
    tax();
    TotalCal("totalPriceNumber");
})

document.getElementById("phone_minus").addEventListener("click", function(){
    minusPriceCal("phoneCountNumber", "phonePriceNumber",120);
    TotalSubCal("subtotalPriceNumber");
    tax();
    TotalCal("totalPriceNumber");
})

document.getElementById("case_plus").addEventListener("click", function(){
    plusePriceCal("caseCountNumber", "casePriceNumber",12);
    TotalSubCal("subtotalPriceNumber");
    tax();
    TotalCal("totalPriceNumber");
})

document.getElementById("case_minus").addEventListener("click", function(){
    minusPriceCal("caseCountNumber", "casePriceNumber",12);
    TotalSubCal("subtotalPriceNumber");
    tax();
    TotalCal("totalPriceNumber");
   })
document.getElementById("crossPhone").addEventListener("click", function(){
    cross("phoneCountNumber", "phonePriceNumber");
    TotalSubCal("subtotalPriceNumber");
    tax();
    TotalCal("totalPriceNumber");
})

document.getElementById("crossCase").addEventListener("click", function(){
    cross("caseCountNumber", "casePriceNumber");
    TotalSubCal("subtotalPriceNumber");
    tax();
    TotalCal("totalPriceNumber");
})
   
   function plusePriceCal(CountNumber, PriceNumber,value){
    var Number = parseInt(document.getElementById(CountNumber).innerText);
    document.getElementById(CountNumber).innerHTML = Number + 1;
    var Price = parseInt(document.getElementById(PriceNumber).innerText);
    document.getElementById(PriceNumber).innerHTML = Price + value;
   }

   function minusPriceCal(CountNumber,PriceNumber,value){
    var Number = parseInt(document.getElementById(CountNumber).innerText);
    var Price = parseInt(document.getElementById(PriceNumber).innerText);
    if(Price>0){
        document.getElementById(CountNumber).innerHTML = Number - 1;
        document.getElementById(PriceNumber).innerHTML = Price - value;
    }
    else{
        cross(CountNumber, PriceNumber);
    }
   }

   function cross(CountNumber,PriceNumber){
    document.getElementById(CountNumber).innerHTML = 0;
    document.getElementById(PriceNumber).innerHTML = 0;
   }

   function TotalSubCal(price){
    document.getElementById(price).innerHTML = parseFloat(document.getElementById("phonePriceNumber").innerText) + parseFloat(document.getElementById("casePriceNumber").innerText);
   }
   function tax(){
       document.getElementById("tax").innerHTML = ((0.1)* parseFloat(document.getElementById("subtotalPriceNumber").innerText)).toFixed(2);
   }
   function TotalCal(price){
    document.getElementById(price).innerHTML = parseFloat(document.getElementById("tax").innerText) + parseFloat(document.getElementById("subtotalPriceNumber").innerText);;
   }

