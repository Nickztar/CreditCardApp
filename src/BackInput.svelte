<script>
    import { CVV } from './store.js';
</script>

<label for="CVVInput" id="CVVLabel">CVV</label>
<input type=password id="CVVInput" disabled bind:value={$CVV}/>

<style>
    #CVVInput{
        direction: rtl;
        width: 90%;
        position: absolute;
        left: 5%;
        bottom: 20px;
        border: none;
        color: black;
        font-family: 'Ubuntu', sans-serif;
    }
    #CVVLabel{
        font-family: 'Ubuntu', sans-serif;
        font-size: 1.1rem;
        font-weight: bold;
        color: #fff;
        position: absolute;
        right: 5.8%;
        bottom: 58px;
    }
</style>