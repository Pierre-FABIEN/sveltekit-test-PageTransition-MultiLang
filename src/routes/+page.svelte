<script lang="ts">
    import { navigationStore } from '$lib/Store/navigationStore';	   
    import { enter, exit } from './transitionPage';

    console.log('hello from Home');
</script>

<div class="home"
in:enter={{ fromPath: $navigationStore.from?.routeId, toPath: $navigationStore.to?.routeId }}
out:exit={{ toPath: $navigationStore.to?.routeId, fromPath: $navigationStore.from?.routeId }}
>
    <h1>Welcome to SvelteKit</h1>
    <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
</div>



<style>
    .home {
       padding-top: 50px;
       position: absolute;
       top: 0;
       left: 0;
       min-width: 100vw;
       min-height: 100vh;
       background-color: red;
    }
  </style>