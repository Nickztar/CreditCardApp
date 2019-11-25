<script>
    import Year from './Year.svelte';
    import Month from './Month.svelte';
</script>
<div class="expires">
    <label for="expireYear">Expiration Date</label>
    <div class = "dateInputs">
        <Month/>
        <Year/>
    </div>
</div>
<style>
    .expires{
        width: 70%;
        font-family: 'Ubuntu', sans-serif;
    }
    label{
        padding-left: 2px;
    }
    .dateInputs{
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>