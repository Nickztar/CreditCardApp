<script>
<<<<<<< HEAD
    let creditNumber = "";
    function handleKeyup(){
        let type = GetCardType(creditNumber);
        format();
    }
    
    function format(){
        let cleanString = creditNumber.replace(/\s/g, ''); //Remove spaces
        let strArr = cleanString.match(/.{1,4}/g) || [""]; //Split string into array of 4 chars
        let newStr = strArr.join(" "); //Join the array into a string separated by space
        creditNumber = newStr; //Update the creditcard value.
    }

    function GetCardType(number)
    {
        // Visa
        let reg = new RegExp("^4");
        if (number.match(reg) != null)
            return "Visa";

        // Mastercard 
        // Updated for Mastercard 2017 BINs expansion
        if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(number)) 
            return "Mastercard";

        // AMEX
        reg = new RegExp("^3[47]");
        if (number.match(reg) != null)
            return "AMEX";

        // Discover
        reg = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
        if (number.match(reg) != null)
            return "Discover";

        // Diners
        reg = new RegExp("^36");
        if (number.match(reg) != null)
            return "Diners";

        // Diners - Carte Blanche
        reg = new RegExp("^30[0-5]");
        if (number.match(reg) != null)
            return "Diners - Carte Blanche";

        // JCB
        reg = new RegExp("^35(2[89]|[3-8][0-9])");
        if (number.match(reg) != null)
            return "JCB";

        // Visa Electron
        reg = new RegExp("^(4026|417500|4508|4844|491(3|7))");
        if (number.match(reg) != null)
            return "Visa Electron";

        return "";
=======
    import { type, creditNumber, numberFocused } from './store.js';
    let localNumber = $creditNumber; 
    let maxNumberLength = 19;
    function handleKeyup(){
        const localType = detectType(localNumber.replace(/\s/g, ''))
        type.set(localType);
        if (event.keyCode !== 8){
            switch (localType){
                case 'amex':
                    formatAmex();
                    break;
                case 'dinersclub':
                    formatDiners();
                    break;
                default:
                    formatStandard();
            }
        }
        creditNumber.set(localNumber);
    }
    function formatStandard(){
        const cleanString = localNumber.replace(/\s/g, ''); //Remove spaces
        const formatedString = cleanString.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{4})/, '$1 $2 ').replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ')
        maxNumberLength = 19;
        localNumber = formatedString; //Update the creditcard value.
    }
    function formatAmex(){
        const cleanString = localNumber.replace(/\s/g, ''); //Remove spaces
        const formatedString = cleanString.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{6})/, '$1 $2 ')
        maxNumberLength = 17;
        localNumber = formatedString; //Update the creditcard value.
    }
    function formatDiners(){
        const cleanString = localNumber.replace(/\s/g, ''); //Remove spaces
        const formatedString = cleanString.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{6})/, '$1 $2 ');
        maxNumberLength = 16;
        localNumber = formatedString; //Update the creditcard value.
    }
    function detectType(number){
        let re = new RegExp('^4')
        if (number.match(re) != null) return 'visa'

        re = new RegExp('^(34|37)')
        if (number.match(re) != null) return 'amex'

        re = new RegExp(/^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/)
        if (number.match(re) != null) return 'maestro'

        re = new RegExp('^5[1-5]')
        if (number.match(re) != null) return 'mastercard'
        
        re = new RegExp('^6011')
        if (number.match(re) != null) return 'discover'

        re = new RegExp('^62')
        if (number.match(re) != null) return 'unionpay'

        re = new RegExp('^9792')
        if (number.match(re) != null) return 'troy'

        re = new RegExp('^3(?:0([0-5]|9)|[689]\\d?)\\d{0,11}')
        if (number.match(re) != null) return 'dinersclub'

        re = new RegExp('^35(2[89]|[3-8])')
        if (number.match(re) != null) return 'jcb'

        return 'visa' // default type
    }
    function focus(){
        numberFocused.set(true);
    }
    function blur(){
        numberFocused.set(false);
>>>>>>> pepega
    }
</script>

<label for="creditNumber">Card Number</label>
<<<<<<< HEAD
<input type="text" name="numbers" id="creditNumber" placeholder="#### #### #### ####" bind:value={creditNumber} pattern="[0-9]*" on:keyup={handleKeyup}>
=======
<input type="text" name="numbers" id="creditNumber" placeholder="#### #### #### ####" bind:value= {localNumber} pattern="[0-9]*" on:keyup={handleKeyup} maxlength="{maxNumberLength}" on:focus={focus} on:blur={blur}/>
>>>>>>> pepega

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