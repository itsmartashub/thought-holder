<template>
	<section class="note newNote mb-5 m-auto">

		<form>
			<div class="note__title-container mb-3" v-if="showBody">
				<div class="note__title" contenteditable="true" data-placeholder="Title" v-text="noteTitle" @blur="onEditTitle">
				</div>
				<i class="fas fa-thumbtack" title="Pin note"></i>
			</div>


			<div class="note__body" ref="note__body" contenteditable="true" data-placeholder="Take a note..." @focus="onFocus" v-text="noteBody" @blur="onEditBody">
			</div>

			<h4 class="note__tag mt-3">neki tag</h4>

			<div class="note__options mt-1">
				<i class="fas fa-tags" title="Add tag"></i>
				<div class="note__pallete">
					<i class="fas fa-palette" title="Change color"></i>

					<div class="note__colors-container">
						<div class="color-1 red"></div>
						<div class="color-2 blue"></div>
						<div class="color-3 green"></div>
						<div class="color-4 purple"></div>
						<div class="color-5 orange"></div>
						<div class="color-6 grey"></div>
					</div>
				</div>
				<i class="fas fa-archive" title="Archive"></i>
				<i class="fas fa-trash" title="Delete"></i>

				<button class="btn" @click.prevent="onClose">close</button>
			</div>
		</form>

		<h1>{{ noteTitle }}</h1>		
		<h1>{{ noteBody }}</h1>		

	</section>
</template>

<script>
export default {
	data() {
		return {
			noteTitle: '',
			noteBody: '',
			pinned: false,
			arrPinned: [],
			showBody: false
		}
	},

	methods: {
		// onPin() {
		// 	this.pinned = !pinned
		// 	console.log(this.pinned)
		// }
		onFocus() {
			this.showBody = true
			this.$refs.note__body.focus()
			console.log(this.$refs.note__body);
		},

		onEditTitle(e) {
			this.noteTitle = e.target.innerText
			// this.noteTitle = value
			// console.log(this.noteTitle);
		},

		onEditBody(e) {
			this.noteBody = e.target.innerText
			// this.noteBody = value
		},

		onClose() {
			this.showBody = false
			this.noteTitle = ''
			this.noteBody = ''
		}
	}
}
</script>

<style>

</style>