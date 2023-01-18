let elFullPrice = document.querySelector('.fullprice-basket');
let AddBtn = document.querySelector('.addBTN')


AddBtn.addEventListener('click', function()
{
    

        console.log('тиць у кошик')
            let a = parseInt(elMidPrice_1.innerText);
            console.log(a);

            let b = parseInt(elMidPrice_2.innerText);
            console.log(b);

            let c = parseInt(elMidPrice_3.innerText);
            console.log(c);

             elFullPrice.innerText = (a + b + c); 
    }
);