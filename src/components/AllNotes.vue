<template>
	<section class="all-notes">
		
		<NewNote/>

		<div class="all-notes__empty" v-if="!arrNotes">
			<i class="fab fa-think-peaks"></i><br>
			<h2>Here is thoughts placeholder.</h2>
			<h3>Notes that you add appear here.</h3>
		</div>

		<div v-if="arrNotes">
			<article class="note" v-for="note in arrNotes" :key="note.id">

				<form>
					<div class="note__title">
						<input type="text" placeholder="Title" v-model="note.title">
						<i class="fas fa-thumbtack"></i>
					</div>

					<div class="note__body">
						<textarea name="" cols="30" rows="10" placeholder="Take a note..." v-model="note.body"></textarea>
					</div>

					<div class="note__tag" v-if="note.tags">{{ note.tags }}</div>
					<div class="note__time">{{ note.date }}</div>

					<div class="note__options">
						<i class="fas fa-tags"></i>
						<i class="fas fa-palette"></i>
						<i class="fas fa-archive"></i>
						<i class="fas fa-trash"></i>

						<button class="btn">close</button>
					</div>
				</form>
				<br><br><br>
			</article>
		</div>

	</section>
</template>

<script>
import NewNote from '@/components/NewNote.vue'

export default {
	components: {
		NewNote
	},

	data() {
		return {
			noNotes: true,
			arrNotes: [
				{
					id: 1,
					title: 'Neki naslov',
					body: 'Quidem, eum. Sed veniam fugit sequi quisquam? Dignissimos quo nemo suscipit?',
					pinned: false,
					color: 'red',
					date: 'Sep 11 2019, 12:45AM',
					tags: 'it'
				},

				{
					id: 2,
					title: 'Patek',
					body: 'Quidem, eum. Sed veniam fugit sequi quisquam? Dignissimos quo nemo suscipit? Upiditate ullam numquam nemo aut',
					pinned: true,
					color: 'white',
					date: 'Sep 11 2019, 12:45AM',
					tags: 'mile'
				},

				{
					id: 3,
					title: 'Neki naslov',
					body: 'Quidem, eum. Sed veniam fugit sequi quisquam? Dignissimos quo nemo suscipit? Dignissimos quo nemo suscipit?Dignissimos quo nemo suscipit?',
					pinned: true,
					color: 'orange',
					date: 'Sep 11 2019, 12:45AM',
					tags: 'rodjendan'
				},

				{
					id: 4,
					title: 'Neki naslov',
					body: 'Quidem, eum. Sed veniam fugit sequi quisquam? Dignissimos quo nemo suscipit?Dignissimos quo nemo suscipit?Dignissimos quo nemo suscipit? Dignissimos quo nemo suscipit? Dignissimos quo nemo suscipit?',
					pinned: false,
					color: 'green',
					date: 'Sep 11 2019, 12:45AM',
					tags: 'party'
				}
			]
		}
	}
}
</script>

<style>

</style>