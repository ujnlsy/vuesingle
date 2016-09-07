<script>
	import Vue from 'vue'
	import HeaderCpt from './views/components/common/header.vue'
	import FooterCpt from './views/components/common/footer.vue'

	const App = Vue.extend({

	});

	export default App;
</script>
<template>
	<header-cpt></header-cpt>
	<router-view></router-view>
	<footer-cpt></footer-cpt>
</template>
<style></style>
<!-- 样式自行设置，或者直接看源码就好 -->
