<script>
    export let randImage;
	import { CVVFocused } from './store.js';
    import BackType from './BackType.svelte';
    import BackInput from './BackInput.svelte';
    let wrapper;
    let transformOut = false;
    CVVFocused.subscribe(() => {
        setTimeout(() => transformOut = !transformOut, 100)
    });
</script>

<div class={transformOut ? 'wrapping transformOut' : 'wrapping'}>
    <img src="./images/{randImage}.jpeg" alt="A random image as background" class="mainCard">
    <div class="magnetic"></div>
    <BackInput/>
    <BackType/>
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
        width:100%;
        height:100%;
        border-radius: 16px;
        box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
        position: relative;
    }
    .magnetic{
        width: 100%;
        height: 25%;
        position: absolute;
        top: 30px;
        background: rgba(17, 17, 17, 0.9);
    }
</style>