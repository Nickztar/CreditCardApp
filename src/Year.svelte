<script>
    let expireYear;
    let years = [];
    let current = new Date().getFullYear();
    for (let i = 0; i < 15; i++){
        years.push(current + i);
    }
</script>
<select name="year" id="expireYear" bind:value = {expireYear}>
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