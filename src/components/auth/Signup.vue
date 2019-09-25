<template>
	<div class="login">
		<h1>Want to hold your thoughts? Sign up for free!</h1>

		<form>
			<div class="field">
				<label for="username">username</label>
				<input type="text" v-model="username" placeholder="Enter your username..."/>
			</div>

			<div class="field">
				<label for="emal">email</label>
				<input type="email" v-model="email" placeholder="Enter your email..." name="email" />
			</div>

			<div class="field">
				<label for="password">password</label>
				<input type="password" v-model="password" placeholder="Enter your password..." name="password" />
			</div>

			<div class="field">
				<label for="passwordConfirm">repeat your password</label>
				<input type="password" v-model="passwordConfirm" placeholder="Repeat your password..." name="passwordConfirm" />
			</div>
		</form>

		<p>{{ username}}</p>
		<p>{{ email}}</p>
		<p>{{ password}}</p>
		<p>{{ passwordConfirm}}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			username: '',
			email: '',
			password: '',
			passwordConfirm: ''
		}
	},

	methods: {
		
	}
}
</script>

<style>

</style>