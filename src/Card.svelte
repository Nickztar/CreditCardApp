<script>
    import { type } from './store.js';
    const randomImage = Math.floor(Math.random()*24)+1;
</script>

<div>
    <img src="./images/{randomImage}.jpeg" alt="A random image as background" class="mainCard">
    <img src="./images/{$type}.png" alt="The type of card entered" class="typeLogo">
</div>

<style>
    div{
        max-width: 350px;
        max-height: 160px;
        position: relative;
        margin: 3vh auto;
    }
    .mainCard{
        max-width:100%;
        max-height:100%;
        border-radius: 16px;
        box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
        position: relative;
    }
    .typeLogo{
        position: absolute;
        top: 20px;
        width: 20%;
        right: 20px;
    }
</style>