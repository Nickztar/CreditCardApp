<script>
    import { creditNumber, type, numberFocused } from './store.js';
    import { fly } from 'svelte/transition';

    let placeholderNumber = strToArray('#### #### #### ####');
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
                if (4 < index && index < 14 && valueArray[index] != ' '){
                    return '*';
                }
                return valueArray[index];
            }
            else if (base == ' '){
                return ' ';
            }
            else{
                return '#';
            }
        });
    });
    function strToArray(str) {
        return str.split('');
    }

</script>

<div class={$numberFocused ? "cardNumber focused" : 'cardNumber'}>
    {#each placeholderNumber as number}
        <span class="spanFix" in:fly='{{y:15, duration:300}}' out:fly='{{y:-15, duration:200}}'>{number}</span>
    {/each}
</div>

<style>
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
    }
    .spanFix{
        display: inline-block;
    }
</style>