<script>
    import { month, expireFocused } from './store.js';
    let months = ["01","02","03","04","05","06","07","08","09","10","11","12"];
    function focus(){
        expireFocused.set(true);
    }
    function blur(){
        expireFocused.set(false);
    }
</script>

<select name="month" id="expireMonth" bind:value={$month} on:focus={focus} on:blur={blur}>
    <option disabled=true selected>Month</option>
    {#each months as month}
        <option value="{month}">{month}</option>
    {/each}
</select>

<style>
    select{
        width: 100%;
        height: 35px;
        font-family: 'Ubuntu', sans-serif;
        border-radius: 5px;
    }
</style>