<template>
	<h1>Login</h1>
	<el-button type="primary" @click="handleLogin">login</el-button>
</template>
<script setup lang="ts" name="LoginView">
import { login } from '@/service/api'
const handleLogin = () => {
	login({
		username: 'admin',
		password: 'qwer'
	})
		.then((res: any) => {
			console.log(res)
		})
		.catch((err: any) => {
			console.error(err)
		})
}
</script>
