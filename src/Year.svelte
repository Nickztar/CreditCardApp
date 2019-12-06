<script>
<<<<<<< HEAD
    let expireYear;
=======
    import { year, expireFocused } from './store.js';
    let selectedYear = "";
>>>>>>> pepega
    let years = [];
    let current = new Date().getFullYear();
    for (let i = 0; i < 15; i++){
        years.push(current + i);
    }
<<<<<<< HEAD
</script>
<select name="year" id="expireYear" bind:value = {expireYear}>
=======
    function updateYear(){
        year.set(selectedYear.toString().slice(-2));
    }
    function focus(){
        expireFocused.set(true);
    }
    function blur(){
        expireFocused.set(false);
    }
</script>
<select name="year" id="expireYear" bind:value={selectedYear} on:change={updateYear} on:focus={focus} on:blur={blur}>
>>>>>>> pepega
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