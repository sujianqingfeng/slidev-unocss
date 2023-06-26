import { defineConfig } from 'unocss/vite'
import config from '@slidev/client/uno.config'

export default defineConfig({
  ...config,
  shortcuts: {
    'my-button': 'text-4 rounded-2 px-2 py-1 font-bold',
    'flex-center': 'flex justify-center items-center'
  },
  rules:[
    [/^face-color-(.+)$/, ([_, color]) => ({ color })],
  ]
})
