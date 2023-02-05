<script lang="ts">
	export let title: string = '';
	export let hasBackButton: boolean;
	import ARROW_LEFT from '$lib/images/arrow-left.svg';
</script>

<nav>
	{#if hasBackButton}
		<a href="/">
			<img src={ARROW_LEFT} alt="left arrow" />
		</a>
	{/if}
	{title}
</nav>

<style>
	nav {
		height: 50px;
		width: 100%;
		line-height: 50px;
		font-family: Pretendard;
		font-size: 18px;
		font-weight: 500;
		text-align: center;
		position: relative;
	}

	a {
		width: 24px;
		height: 24px;
		position: absolute;
		left: 13px;
		top: 13px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	img {
		height: 12px;
	}
</style>
