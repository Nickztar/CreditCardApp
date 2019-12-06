<script>
    import CardNumber from './CardNumber.svelte';
    import CardName from './CardName.svelte';
    import CardExpiration from './CardExpiration.svelte';
    import CardCVV from './CardCVV.svelte';
<<<<<<< HEAD
=======
    function bamboz(){
        alert("You've been hacked kid!")
    }
>>>>>>> pepega
</script>

<div class="wrapper">
    <CardNumber/>
    <CardName/>
    <div class="expCVV">
        <CardExpiration/> 
        <CardCVV />
    </div>
<<<<<<< HEAD
    <button>Submit</button>
=======
    <button on:click={bamboz}>Submit</button>
>>>>>>> pepega
</div>

<style>
    .wrapper{
        max-width: 420px;
        height: 30vh;
        padding: 100px 18px; 
        margin: 0 auto;
        background: #eee;
        border-radius: 10px;
<<<<<<< HEAD
=======
        box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
>>>>>>> pepega
    }
    .expCVV{
        padding-top: 15px;
        display: flex
    }
    button{
        width: 100%;
        height: 10vh;
        border-radius: 5px;
        background: blue;
        color: #eee;
        font-family: 'Ubuntu', sans-serif;
        font-size: 1.3rem;
    }
<<<<<<< HEAD
=======
    @media screen and (max-width: 395px){
        .wrapper{
            height: 36vh;
        }
    }
>>>>>>> pepega
</style>