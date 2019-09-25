<template>
	<div class="login">
		<h1>Login to Your <span>ThoughtsHolder</span></h1>

		<form>
			<div class="field">
				<label for="emal">email</label>
				<input type="email" v-model="email" placeholder="Enter your email..." name="email" />
			</div>

			<div class="field">
				<label for="password">password</label>
				<input type="password" v-model="password" placeholder="Enter your password..." name="password" />
			</div>
		</form>

		<p>{{email}}</p>
		<p>{{password}}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			email: '',
			password: ''
		}
	}
}
</script>

<style>

</style>