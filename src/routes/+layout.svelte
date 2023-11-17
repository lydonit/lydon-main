<script>
	import Navbar from '@components/Navbar.svelte';
	import '../app.css';
</script>

<div class="w-screen min-h-screen">
	<Navbar />

	<slot />
</div>
