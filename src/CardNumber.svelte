<script>
    import { type } from './store.js';
    let creditNumber = "";
    function handleKeyup(){
        type.set(detectCardType(creditNumber.replace(/\s/g, '')));
        format();
    }
    
    function format(){
        let cleanString = creditNumber.replace(/\s/g, ''); //Remove spaces
        let strArr = cleanString.match(/.{1,4}/g) || [""]; //Split string into array of 4 chars
        let newStr = strArr.join(" "); //Join the array into a string separated by space
        creditNumber = newStr; //Update the creditcard value.
    }

    function detectCardType(number) {
        let re = {
            electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
            maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
            dankort: /^(5019)\d+$/,
            interpayment: /^(636)\d+$/,
            unionpay: /^(62|88)\d+$/,
            visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
            mastercard: /^5[1-5][0-9]{14}$/,
            amex: /^3[47][0-9]{13}$/,
            diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
            discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
            jcb: /^(?:2131|1800|35\d{3})\d{11}$/
        }
        for(let key in re) {
            if(re[key].test(number)) {
                return key
            }
        }
        return "Visa";
    }
</script>

<label for="creditNumber">Card Number</label>
<input type="text" name="numbers" id="creditNumber" placeholder="#### #### #### ####" bind:value={creditNumber} pattern="[0-9]*" on:keyup={handleKeyup} />

<style>
    input{
        height: 35px;
        width: 100%;
        margin: 0 auto;
        border-radius: 4px;
        font-family: 'Ubuntu', sans-serif;
    }
    label{
        padding-left: 2px; 
        font-family: 'Ubuntu', sans-serif;
    }
</style>