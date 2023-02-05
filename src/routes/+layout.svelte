<script lagn="ts">
	import './styles.css';
	import TitleBar from '$lib/components/TitleBar.svelte';
	import { title, hasTitle, hasTitleBackButton } from '$lib/store/pageStore';
	import { navigating } from '$app/stores';

	$: if ($navigating) {
		title.set('');
		hasTitle.set(false);
		hasTitleBackButton.set(false);
	}
</script>

<div id="PageWrapper">
	{#if hasTitle}
		<TitleBar title={$title} hasBackButton={$hasTitleBackButton} />
	{/if}
	<div id="ContentWrapper">
		<slot />
	</div>
</div>

<style>
	#PageWrapper {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	#ContentWrapper {
		flex: 1;
	}
</style>
