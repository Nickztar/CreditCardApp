<script>
    import { holderName, nameFocused } from './store.js';
    import { fly, fade } from 'svelte/transition';
    import { elasticOut } from 'svelte/easing';

    function spinFromRight(node, { duration }) {
		return {
			duration,
			css: t => {
				const eased = elasticOut(t);
                return `transform: translateX(10px) rotate(${eased * 45}deg);`
			}
		};
	}
</script>

<div class={$nameFocused ? "nameWrap focused" : 'nameWrap'}>
    <label for="holderName" class="miniLabel">Card Holder</label>
    <div id="holderName">
        {#if !$holderName}
            <div in:fly='{{duration:500, y:20}}'>Placeholder Name</div>
        {:else}
            {#each $holderName as letter}
                <div in:spinFromRight='{{duration:75}}' out:fade='{{duration:75}}'>{letter}</div>
            {/each}
        {/if}
    </div>
</div>

<style>
    .nameWrap{
        margin-right: 13%;
        width: 72%;
        padding: 3px;
    }
    div #holderName{
        display: flex;
        color: #fff;
        background: none;
        border: none;
        height: auto;
        width: 200px;
        padding: 0;
        margin: 0;
        white-space: pre;
    }
    .miniLabel{
        text-shadow: 2px 2px 7px rgba(27, 27, 27, 0.8);
        font-family: 'Ubuntu', sans-serif;
        font-size: 0.95rem;
        color: rgba(241, 236, 236, 0.925);
    }
</style>