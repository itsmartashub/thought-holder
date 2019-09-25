<template>
	<div id="app" class="grid-container">
	<!-- <div id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link>
	</div>
	<router-view/> -->
	
		<Header/>
		<Sidebar/>
		<router-view/>
	</div>
</template>

<script>
import Header from '@/views/Header.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
	components: {
		Header,
		Sidebar
	}
}
</script>

<style>

</style>
