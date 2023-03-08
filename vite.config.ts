import react from '@vitejs/plugin-react'
import * as path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	root: './',
	publicDir: './public',
	resolve: {
		alias: {
			assets: path.resolve(__dirname, './src/assets'),
			components: path.resolve(__dirname, './src/components'),
			config: path.resolve(__dirname, './src/config'),
			context: path.resolve(__dirname, './src/context'),
			hooks: path.resolve(__dirname, './src/hooks'),
			pages: path.resolve(__dirname, './src/pages'),
			styles: path.resolve(__dirname, './src/styles'),
			types: path.resolve(__dirname, './src/types'),
			utils: path.resolve(__dirname, './src/utils'),
		},
	},
	plugins: [react()],
})
