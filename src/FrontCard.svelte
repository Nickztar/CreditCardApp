<script>
    export let randImage;
	import { CVVFocused } from './store.js';
    import DisplayNumber from './DisplayNumber.svelte';
    import DisplayName from './DisplayName.svelte';
    import DisplayDate from './DisplayDate.svelte';
    import DisplayType from './DisplayType.svelte';
    let transformIn = true;
    CVVFocused.subscribe(() => {
        setTimeout(() => transformIn = !transformIn, 100)
    });
</script>

<div class={transformIn ? 'wrapping transformIn' : 'wrapping'} >
    <img src="./images/{randImage}.jpeg" alt="A random image as background" class="mainCard">
    <DisplayType />
    <img src="./images/chip.png" alt="The chip of the card" class="cardChip">
    <DisplayNumber />
    <div class="miniWrap">
        <DisplayName />
        <DisplayDate />
    </div>
</div>

<style>
    .wrapping{
        backface-visibility: hidden;
        position: absolute;
        max-width: 350px;
        max-height: 160px;
        margin: 3vh auto;
        transition: transform .7s;
    }
    .mainCard{
        max-width:100%;
        max-height:100%;
        border-radius: 16px;
        box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
        position: relative;
    }

    .cardChip{
        position: absolute;
        top: 20px;
        left: 20px;
        width: 15%;
    }
    *::placeholder{
        color: #fff;
    }
    .miniWrap{
        position: absolute;
        display: flex;
        width: 87%;
        height: 45px;
        bottom: -30%;
        left: 7%;
        font-family: 'Source Code Pro', monospace;
    }
</style>