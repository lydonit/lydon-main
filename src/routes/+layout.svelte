<script>
	import Navbar from '@components/Navbar.svelte';
	import '../app.css';
</script>

<head>
  <link rel="icon" type="image/x-icon" href="lydon_logo.png">
</head>

<div class="w-screen min-h-screen">
	<Navbar />

	<slot />
</div>
