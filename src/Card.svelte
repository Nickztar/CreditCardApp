<script>
    import { type, creditNumber, holderName, month, year } from './store.js';
    import { fly } from 'svelte/transition';

    const randomImage = Math.floor(Math.random()*24)+1; //Sets the cardbackground to a random image from 1-25
    
    let expireMonth, expireYear; //Stores the elementDivs
    let monthVisible, yearVisible = true;
    month.subscribe(() => monthChange()); //Everytime month updates we execute monthChange
    year.subscribe(() => yearChange()); //Everytime year updates we execute yearChange
    function monthChange(){ //Toggles the monthVisible variable with a small timeout
        monthVisible = false;
        setTimeout(()=>{monthVisible = true}, 100);
    }
    function yearChange(){ //Toggles the monthVisible variable with a small timeout
        yearVisible = false;
        setTimeout(()=>{yearVisible = true}, 100);
    }
</script>

<div class="wrapping">
    <img src="./images/{randomImage}.jpeg" alt="A random image as background" class="mainCard">
    <img src="./images/{$type}.png" alt="The type of card entered" class="typeLogo">
    <img src="./images/chip.png" alt="The chip of the card" class="cardChip">
    <input type="text" class="cardNumber" bind:value={$creditNumber} placeholder="#### #### #### ####" readonly>
    <div class="miniWrap">
        <div class="nameWrap">
            <label for="holder" class="miniLabel">Card Holder</label>
            <input type="text" name="holderName" id="holderName" placeholder="Nicholas Broström" bind:value={$holderName} readonly>
        </div>
        <div class="dateWrap">
            <label for="expires" class="miniLabel">Expires</label>
            <div class="expiresData">
                {#if monthVisible}
                    <div in:fly='{{y:15, duration:400}}' out:fly='{{y:-15, duration:300}}' bind:this={expireMonth} id="expireMonth" class="dates">{$month || 'MM'}</div>
                {/if}
                <!-- <input type="text" name="expireMonth" id="expireMonth" class="dates" placeholder="MM" bind:value={$month} readonly > -->
                <section id="separator"> / </section>
                {#if yearVisible}
                    <div in:fly='{{y:15, duration:400}}' out:fly='{{y:-15, duration:300}}' bind:this={expireYear} id="expireYear" class="dates">{$year || 'YY'}</div>
                {/if}
                <!-- <input type="text" name="expireYear" id="expireYear" class="dates" placeholder="YY" bind:value={$year} readonly> -->
            </div>
        </div>
    </div>
</div>

<style>
    .wrapping{
        max-width: 350px;
        max-height: 160px;
        position: relative;
        margin: 3vh auto;
    }
    
    .mainCard{
        max-width:100%;
        max-height:100%;
        border-radius: 16px;
        box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
        position: relative;
    }
    .typeLogo{
        position: absolute;
        top: 20px;
        width: 20%;
        right: 20px;
    }
    .cardChip{
        position: absolute;
        top: 20px;
        left: 20px;
        width: 15%;
    }
    .cardNumber{
        position: absolute;
        top: 54%;
        left: 7%;
        width: 87%;
        padding-left: 5px;
        background: none;
        border: none;
        color: #fff;
        font-size: 1.5rem;
        font-family: 'Source Code Pro', monospace;
        /* background: rgba(27, 27, 27, 0.226); */
        /* border-radius: 10px; */
    }
    *::placeholder{
        color: #fff;
    }
    .miniWrap{
        position: absolute;
        display: flex;
        width: 87%;
        height: 45px;
        bottom: -30%;
        left: 7%;
        font-family: 'Source Code Pro', monospace;
    }
    .expiresData{
        display: flex;
    }
    .dates{
        color: #fff;
        width: 27%;
        background: none;
        border: none;
        padding: 0;
        margin: 0;
    }
    #expireMonth{
        text-align: right;
    }
    #expireYear{
        text-align: left;
    }
    #separator{
        font-size: 1rem;
        padding: 0 0 0 5px;
        margin-top: -1px;
        color: #fff;
    }
    .nameWrap{
        margin-right: 13%;
    }
    #holderName{
        color: #fff;
        background: none;
        border: none;
        padding: 0;
        margin: 0;
    }
    .miniLabel{
        text-shadow: 2px 2px 7px rgba(27, 27, 27, 0.8);
        font-family: 'Ubuntu', sans-serif;
        font-size: 0.95rem;
        color: rgba(241, 236, 236, 0.925);
    }
</style>