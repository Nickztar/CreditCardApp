<script>
    import { CVV, CVVFocused, CVVLength } from './store.js'; 
    let placeHolder;
    if ($CVVLength == 4){
        placeHolder = '***';
    }
    else{
        placeHolder = '***';
    }
    function focus(){
        CVVFocused.set(true);
    }
    function blur(){
        CVVFocused.set(false);
    }
</script>

<div>
    <label for="CVV">CVV</label>
    <input type="text" name="CVV" id="CVV" maxlength="{$CVVLength}" bind:value={$CVV} on:focus={focus} on:blur={blur} placeholder="{placeHolder}">
</div>

<style>
    input{
        height: 35px;
        width: 100%;
        border-radius: 4px;
    }
    label{
        padding-left: 2px;
    }
    div{
        margin-left: 20%;
        font-family: 'Ubuntu', sans-serif;
    }
    @media screen and (max-width: 460px){
        div{
            margin-left: 10%;
        }
    }
    @media screen and (max-width: 420px){
        div{
            margin-left: 5%;
        }
    }
</style>