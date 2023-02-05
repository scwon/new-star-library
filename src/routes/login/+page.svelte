<script>
	import { title, hasTitle, hasTitleBackButton } from '$lib/store/pageStore';
	title.set('로그인');
	hasTitle.set(true);
	hasTitleBackButton.set(true);
</script>

<input placeholder="ID" />
<input placeholder="PW" />
