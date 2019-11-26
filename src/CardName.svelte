<script>
    import { holderName } from './store.js';
</script>

<label for="creditName">Card name</label>
<input type="text" name="name" id="creditName" bind:value={$holderName}>

<style>
    input{
        height: 35px;
        width: 100%;
        margin: 0 auto;
        border-radius: 4px;
        font-family: 'Ubuntu', sans-serif;
    }
    label{
        padding-top: 15px;
        padding-left: 2px; 
        font-family: 'Ubuntu', sans-serif;
    }
</style>