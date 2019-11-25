<script>
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
    }
</script>

<label for="creditNumber">Card Number</label>
<input type="text" name="numbers" id="creditNumber" placeholder="#### #### #### ####" bind:value={creditNumber} pattern="[0-9]*" on:keyup={handleKeyup}>

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