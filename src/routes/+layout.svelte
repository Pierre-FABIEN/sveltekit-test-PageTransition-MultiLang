<script lang="ts">	
	import { page } from '$app/stores';
	import { onNavigate } from '$app/navigation';
	
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	
	import { navigationStore } from '$lib/Store/navigationStore.ts';
	import Header from '$lib/Components/Header.svelte';
  
	let { children } = $props();
	
	$effect(() => {
		const currentData = {
			routeId: $page.route.id,
		};

		navigationStore.set({
			from: null,
			to: currentData,
		});
	});

  onNavigate((navigation) => {
    const fromId = navigation.from?.route.id ?? null;
    const toId = navigation.to?.route.id ?? null;

    if (fromId !== toId) {
		console.log('Layout script exécuté');
      const fromData = fromId ? { routeId: fromId } : null;
      const toData = toId ? { routeId: toId } : null;

      navigationStore.set({
        from: fromData,
        to: toData,
      });
    }
  });
</script>

<ParaglideJS {i18n}>
		<Header />
		<main>
		{@render children()}
		</main>
</ParaglideJS>
  

<style>
	main {
		overflow: hidden;
		width: 100vw;
		height: 100vh;
		position: relative;
	}
</style>