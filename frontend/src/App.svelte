<script>
	import Navbar from './Navbar.svelte';
	import Content from './Content.svelte';
</script>

<main>
	<Navbar/>
	<Content/>
</main>

<style>

main {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center; 
}

</style>