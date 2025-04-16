<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="flex flex-col min-h-screen bg-gray-50 text-slate-900">
	<Navbar />

	<main class="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
		<slot />
	</main>

	<Footer />
</div>
