<template>
	<el-container>
		<el-header>header</el-header>
		<el-main>
			<el-menu
				default-active="2"
				class="el-menu-vertical-demo"
				:collapse="isCollapse"
				@open="handleOpen"
				@close="handleClose"
			>
				<el-button
					type="primary"
					:icon="isCollapse ? Expand : Fold"
					circle
					@click="isCollapse = !isCollapse"
				/>
				<el-sub-menu index="1">
					<template #title>
						<el-icon><location /></el-icon>
						<span>Navigator One</span>
					</template>
					<el-menu-item-group>
						<template #title><span>Group One</span></template>
						<el-menu-item index="1-1">item one</el-menu-item>
						<el-menu-item index="1-2">item two</el-menu-item>
					</el-menu-item-group>
					<el-menu-item-group title="Group Two">
						<el-menu-item index="1-3">item three</el-menu-item>
					</el-menu-item-group>
					<el-sub-menu index="1-4">
						<template #title><span>item four</span></template>
						<el-menu-item index="1-4-1">item one</el-menu-item>
					</el-sub-menu>
				</el-sub-menu>
				<el-menu-item index="2">
					<el-icon><icon-menu /></el-icon>
					<template #title>
						<router-link :to="{ name: 'home' }">home</router-link>
					</template>
				</el-menu-item>
				<el-menu-item index="3">
					<el-icon><document /></el-icon>
					<template #title>
						<router-link :to="{ name: 'login' }">login</router-link>
					</template>
				</el-menu-item>
				<el-menu-item index="4">
					<el-icon><setting /></el-icon>
					<template #title>
						<router-link :to="{ name: 'about' }">about</router-link>
					</template>
				</el-menu-item>
			</el-menu>
			<section>
				<router-view />
			</section>
		</el-main>
	</el-container>
</template>
<script setup lang="ts" name="BasicLayout">
import { ref } from 'vue'
import {
	Document,
	Menu as IconMenu,
	Location,
	Setting,
	Expand,
	Fold
} from '@element-plus/icons-vue'

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
	console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
	console.log(key, keyPath)
}
</script>
<style scoped>
.el-main {
	display: flex;
	align-items: center;
}
</style>
