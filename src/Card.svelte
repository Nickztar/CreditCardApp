<script>
    import { type, creditnumber } from './store.js';
    const randomImage = Math.floor(Math.random()*24)+1;
</script>

<div class="wrapping">
    <img src="./images/{randomImage}.jpeg" alt="A random image as background" class="mainCard">
    <img src="./images/{$type}.png" alt="The type of card entered" class="typeLogo">
    <img src="./images/chip.png" alt="The chip of the card" class="cardChip">
    <input type="text" class="cardNumber" bind:value={$creditnumber} placeholder="#### #### #### ####" readonly>
    <div class="miniWrap">
        <div class="nameWrap">
            <label for="holder" id="holder">Card Holder</label>
            <input type="text" name="holderName" id="holderName" readonly>
        </div>
        <div class="dateWrap">
            <label for="expires" id="expires">Expires</label>
            <div class="expiresData">
                <input type="text" name="expireMonth" id="expireMonth" class="dates" readonly>
                <section id="separator">/</section>
                <input type="text" name="expireYear" id="expireYear" class="dates" readonly>
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
        top: 50%;
        left: 7%;
        width: 87%;
        padding-left: 5px;
        background: none;
        /* background: rgba(27, 27, 27, 0.226); */
        /* border-radius: 10px; */
        text-shadow: 2px 2px 10px rgba(27, 27, 27, 0.8);
        overflow: auto;
        border: none;
        color: #fff;
        font-size: 1.5rem;
        font-family: 'Source Code Pro', monospace;
    }
    .cardNumber::placeholder{
        color: #fff;
    }
    .miniWrap{
        position: absolute;
        display: flex;
        width: 87%;
        top: 87%;
        left: 7%;
    }
    .expiresData{
        display: flex;
    }
    .dates{
        width: 30%;
        background: none;
    }
</style>