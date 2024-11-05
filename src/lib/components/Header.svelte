<script lang="ts">
    import { goto } from '$app/navigation';
    import type { AvailableLanguageTag } from '$lib/paraglide/runtime';
	import { i18n } from '$lib/i18n';
	import { page } from '$app/stores';


	function switchToLanguage(newLanguage: AvailableLanguageTag) {
		const canonicalPath = i18n.route($page.url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localisedPath);
	}

    let pages = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "demo",
            path: "/demo"
        },
    ]
</script>

<nav>
    <ul>
        {#each pages as page}
            <li>
                <a href={page.path} onclick={() => goto(page.path)}>
                    {page.name}
                </a>
                
            </li>
        {/each}
    </ul>
    <div>
        <button onclick={() => switchToLanguage('en')}>en</button>
        <button onclick={() => switchToLanguage('fr')}>fr</button>
    </div>
</nav>

<style>
    nav {
        position: absolute;
        top: 0;
        z-index: 100;
        display: flex;
        background-color: #333;
        color: #fff;
        width: 100%;
        height: 50px;
    }

    ul {
        display: flex;
    }

    li {
        margin: 15px;
    }
</style>