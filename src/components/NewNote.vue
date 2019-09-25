<template>
	<article class="note">

		<form>
			<div class="note__title">
				<input type="text" placeholder="Title" v-model="noteTitle">
				<i class="fas fa-thumbtack"></i>
			</div>

			<div class="note__body">
				<textarea name="" cols="60" rows="4" placeholder="Take a note..." v-model="noteBody"></textarea>
			</div>

			<div class="note__tag"></div>

			<div class="note__options">
				<i class="fas fa-tags"></i>
				<i class="fas fa-palette"></i>
				<i class="fas fa-archive"></i>
				<i class="fas fa-trash"></i>

				<button class="btn">close</button>
			</div>
		</form>

		<hr><br><br>

	</article>
</template>

<script>
export default {
	data() {
		return {
			noteTitle: '',
			noteBody: '',
			pinned: false,
			arrPinned: []
		}
	},

	methods: {
		// onPin() {
		// 	this.pinned = !pinned
		// 	console.log(this.pinned)
		// }
	}
}
</script>

<style>

</style>