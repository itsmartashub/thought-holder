<template>
	<article class="note mb-2">
		<form>
			<div class="note__click-open-note" @click="onOpenNote($event, note)">
				<div class="note__title-container mb-1">
					<div 
						class="note__title"
						contenteditable="true"
						data-placeholder="Title"
						v-text="note.title"
						@blur="onEditTitle"
						ref="note__title">
					</div>
					<i class="fas fa-thumbtack note__pin" :class="{ 'open-note-opacity': openNote }" title="Pin note"></i>
				</div>


				<div
					class="note__body"
					ref="note__body"
					contenteditable="true"
					data-placeholder="Take a note..."
					v-text="note.body"
					@blur="onEditBody">
				</div>
			</div>

			<h4 class="note__tag mt-3" v-if="note.tags">{{ note.tags }}</h4>

			<div class="note__options mt-1" :class="{ 'open-note-opacity': openNote }">
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
				<i class="fas fa-archive" title="Archive" @click="onArchiveNote(note)"></i>
				<i class="fas fa-trash" title="Delete" @click="onDeleteNote(note)"></i>

				<button class="btn" @click.prevent="onCloseNote" v-if="openNote">close</button>
			</div>
		</form>
	</article>
</template>

<script>
export default {
	
}
</script>

<style>

</style>