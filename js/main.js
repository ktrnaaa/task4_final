let elBTN1 = document.querySelector('.btn1');

let elCount = document.querySelector('.item-counter');

let elItemPrice = document.querySelector('.money');

let elBTN2 = document.querySelector('.btn2')
let elMidPrice_1 = document.querySelector('.fullprice');
let elAddBtn = document.querySelector('.addBTN');






//////// add item

elBTN1.addEventListener ( 'click', () => {

    console.log ('тик');

   function num1(){   

         elCount.innerText = ++elCount.innerText ;
   }
   num1();
    function num11() {
            
             const b = elCount.innerText;
             const d = elItemPrice.innerText;
            
            
             elMidPrice_1.innerText =  b*d;
            
        }
    num11();

});


//////// add item


/////// delete item

elBTN2.addEventListener ( 'click', () => {

    console.log ('тик');
    function num2(){

        const b = elCount.innerText;

        if (parseInt(elCount.innerText) > 0 ){
        elCount.innerText = --elCount.innerText ;
    }}
    num2();

    function num22(){

         const b = elCount.innerText;
         const d = elItemPrice.innerText;

    elMidPrice_1.innerText =  b*d;




}
num22();}
);

function num7(){

}
num7();

/////// delete item


