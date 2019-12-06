<script>
<<<<<<< HEAD
    let creditName;
</script>

<label for="creditName">Card name</label>
<input type="text" name="name" id="creditName" bind:value={creditName}>
=======
    import { holderName, nameFocused } from './store.js';
    function focus(){
        nameFocused.set(true);
    }
    function blur(){
        nameFocused.set(false);
    }
</script>

<label for="creditName">Card name</label>
<input maxlength="20" type="text" name="name" id="creditName" bind:value={$holderName} placeholder="Placeholder Name" on:focus={focus} on:blur={blur}>
>>>>>>> pepega

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