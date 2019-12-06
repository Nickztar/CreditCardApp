<script>
	import FrontCard from './FrontCard.svelte';
	import CreditForm from './CreditForm.svelte';
	import BackCard from './BackCard.svelte';
    const randomImage = Math.floor(Math.random()*24)+1; 
</script>
<div class="Positioner">
	<FrontCard randImage = {randomImage} />
	<BackCard randImage = {randomImage}/>
</div>

<CreditForm/>

<style>
.Positioner{
	perspective: 1000px;
	transform-style: preserve-3d;
	position: relative;
	margin: 0 auto;
	width: 350px;
	height: 160px;
}
</style>