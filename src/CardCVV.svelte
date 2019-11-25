<script>
    let CVVLength = 3;
</script>

<div>
    <label for="CVV">CVV</label>
    <input type="text" name="CVV" id="CVV" maxlength="{CVVLength}">
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
</style>