<template>
	<div class="sidebar">
		<ul>
			<router-link tag="li" :to="{ name: 'all-notes' }" activeClass="current"><i class="fas fa-sticky-note"></i> All Notes</router-link>

			<hr>

			<h5 class="sidebar__labels-title">LABELS</h5>
		
			<router-link tag="li" :to="{ name: 'tags' }">
				<i class="fas fa-edit"></i>Edit Labels
			</router-link>


			<hr>
			
			<router-link tag="li" :to="{ name: 'archive' }"><i class="fas fa-archive"></i> Archive</router-link>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Sidebar'
}
</script>