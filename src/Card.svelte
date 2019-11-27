<script>
    import { type, creditNumber, holderName, month, year } from './store.js';
    import { fly, fade } from 'svelte/transition';
    import { elasticOut } from 'svelte/easing';
    let placeholderNumber = strToArray('#### #### #### ####');

    const randomImage = Math.floor(Math.random()*24)+1; 
    let monthVisible, yearVisible = true;
    month.subscribe(() => {
        monthVisible = false;
        setTimeout(()=>{monthVisible = true}, 100);
    });
    year.subscribe(() => {
        yearVisible = false;
        setTimeout(()=>{yearVisible = true}, 100);
    });
    type.subscribe((value) => {
        switch (value){
            case 'amex':
                placeholderNumber = strToArray('#### ###### #####');
                break;
            case 'dinersclub':
                placeholderNumber = strToArray('#### ###### ####');
                break;
            default:
                placeholderNumber = strToArray('#### #### #### ####');
        }
    });
    creditNumber.subscribe((value) => {
        let valueArray = strToArray(value);
        placeholderNumber = placeholderNumber.map((base, index)=>{
            if (valueArray[index] != null){
                return valueArray[index];
            }
            else if (base == ' '){
                return ' ';
            }
            else{
                return '#';
            }
        })
    });

    function refreshDiv(number){
        let el = document.getElementById(`${number}`);
        if (el != null){
            console.log(el, number);
            el.style.display = 'none';
            setTimeout(()=>{el.style.display = 'block'}, 100);
        }
    }
    function strToArray(str) {
        return str.split('');
    }
    function spinFromRight(node, { duration }) {
		return {
			duration,
			css: t => {
				const eased = elasticOut(t);
                return `transform: translateX(10px) rotate(${eased * 45}deg);`
			}
		};
	}
</script>

<div class="wrapping">
    <img src="./images/{randomImage}.jpeg" alt="A random image as background" class="mainCard">
    <img src="./images/{$type}.png" alt="The type of card entered" class="typeLogo">
    <img src="./images/chip.png" alt="The chip of the card" class="cardChip">
    <div class="cardNumber">
        {#each placeholderNumber as number}
            <span class="spanFix" in:fly='{{y:15, duration:400}}' out:fly='{{y:-15, duration:300}}'>{number}</span>
        {/each}
    </div>
    <div class="miniWrap">
        <div class="nameWrap">
            <label for="holderName" class="miniLabel">Card Holder</label>
            <div id="holderName">
                {#if !$holderName}
                    <div in:fly='{{duration:500, y:20}}'>Placeholder Name</div>
                {:else}
                    {#each $holderName as letter}
                        <div in:spinFromRight='{{duration:75}}' out:fade='{{duration:75}}'>{letter}</div>
                    {/each}
                {/if}
            </div>
        </div>
        <div class="dateWrap">
            <label for="expires" class="miniLabel">Expires</label>
            <div class="expiresData">
                {#if monthVisible}
                    <div in:fly='{{y:15, duration:400}}' out:fly='{{y:-15, duration:300}}' id="expireMonth" class="dates">{$month || 'MM'}</div>
                {/if}
                <section id="separator"> / </section>
                {#if yearVisible}
                    <div in:fly='{{y:15, duration:400}}' out:fly='{{y:-15, duration:300}}' id="expireYear" class="dates">{$year || 'YY'}</div>
                {/if}
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
        display: flex;
        white-space: pre;
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
    .spanFix{
        display: inline-block;
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
        width: 75%;
    }
    #holderName{
        display: flex;
        color: #fff;
        background: none;
        border: none;
        height: auto;
        padding: 0;
        margin: 0;
        white-space: pre;
    }
    .miniLabel{
        text-shadow: 2px 2px 7px rgba(27, 27, 27, 0.8);
        font-family: 'Ubuntu', sans-serif;
        font-size: 0.95rem;
        color: rgba(241, 236, 236, 0.925);
    }
</style>