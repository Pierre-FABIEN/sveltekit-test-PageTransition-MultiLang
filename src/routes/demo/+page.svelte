<script lang="ts">
	import { navigationStore } from '$lib/Store/navigationStore';	   
	import { enter, exit } from './transitionPage';

	console.log('hello from Demo');
</script>

<div class="demo"
in:enter={{ fromPath: $navigationStore.from?.routeId, toPath: $navigationStore.to?.routeId }}
out:exit={{ toPath: $navigationStore.to?.routeId, fromPath: $navigationStore.from?.routeId }}
>
	<a href="/demo/paraglide">paraglide</a>
</div>

<style>
    .demo {
       padding-top: 50px;
       position: absolute;
       top: 0;
       left: 0;
       min-width: 100vw;
       min-height: 100vh;
       background-color: blue;
    }
  </style>