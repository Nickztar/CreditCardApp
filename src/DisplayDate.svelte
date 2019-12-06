<script>
    import { month, year, expireFocused } from './store.js';
    import { fly } from 'svelte/transition';

    let monthVisible, yearVisible = true;
    month.subscribe(() => {
        monthVisible = false;
        setTimeout(()=>{monthVisible = true}, 100);
    });
    year.subscribe(() => {
        yearVisible = false;
        setTimeout(()=>{yearVisible = true}, 100);
    });
</script>

<div class={$expireFocused ? "dateWrap focused" : 'dateWrap'}>
    <label for="expires" class="miniLabel">Expires</label>
    <div class="expiresData">
        {#if monthVisible}
            <div in:fly='{{y:15, duration:400}}' out:fly='{{y:-15, duration:300}}' id="expireMonth" class="dates">{$month || 'MM'}</div>
        {/if}
        <section id="separator"> / </section>
        {#if yearVisible}
            <div in:fly='{{y:15, duration:400}}' out:fly='{{y:-15, duration:300}}' id="expireYear" class="dates">{$year || 'YY'}</div>
        {/if}
    </div>
</div>

<style>
    .dateWrap{
        padding: 5px;
    }
    .expiresData{
        display: flex;
    }
    .dates{
        color: #fff;
        width: 27%;
        background: none;
        border: none;
        padding: 0;
        margin: 0;
    }
    #expireMonth{
        text-align: right;
    }
    #expireYear{
        text-align: left;
    }
    #separator{
        font-size: 1rem;
        padding: 0 0 0 5px;
        margin-top: -1px;
        color: #fff;
    }
    .miniLabel{
        text-shadow: 2px 2px 7px rgba(27, 27, 27, 0.8);
        font-family: 'Ubuntu', sans-serif;
        font-size: 0.95rem;
        color: rgba(241, 236, 236, 0.925);
    }
</style>