<script>
    import { year } from './store.js';
    let selectedYear = "";
    let years = [];
    let current = new Date().getFullYear();
    for (let i = 0; i < 15; i++){
        years.push(current + i);
    }
    function updateYear(){
        year.set(selectedYear.toString().slice(-2));
    }
</script>
<select name="year" id="expireYear" bind:value={selectedYear} on:change={updateYear}>
    <option disabled=true selected>Year</option>
    {#each years as year}
        <option value="{year}">{year}</option>
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