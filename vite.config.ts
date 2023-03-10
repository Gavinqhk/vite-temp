import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import AutoImport from "unplugin-auto-import/vite";
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import VueImages from 'vite-plugin-vue-images'
import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import'
import eslintPlugin from 'vite-plugin-eslint'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueSetupExtend(),
		VueImages({
			dirs: ['src/assets/images']
		}),
		createStyleImportPlugin({
			resolves: [ElementPlusResolve()],
			libs: [
				{
					libraryName: 'element-plus',
					esModule: true,
					resolveStyle: (name: string) => {
						return `element-plus/theme-chalk/${name}.css`
					}
				}
			]
		}),
		// AutoImport({
		//   resolvers: [ElementPlusResolver()],
		// }),
		Components({
			resolvers: [ElementPlusResolver()]
		}),
		eslintPlugin({
			include: ['src/**/*.js', 'src/**/*.ts', 'src/**/*.vue', 'src/*.js', 'src/*.ts', 'src/*.vue']
		})
	],
	resolve: {
		// https://vitejs.dev/config/#resolve-alias
		alias: {
			'@': '/src'
		}
	}
})
