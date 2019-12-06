<script>
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
    }
</script>

<label for="creditNumber">Card Number</label>
<input type="text" name="numbers" id="creditNumber" placeholder="#### #### #### ####" bind:value= {localNumber} pattern="[0-9]*" on:keyup={handleKeyup} maxlength="{maxNumberLength}" on:focus={focus} on:blur={blur}/>

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