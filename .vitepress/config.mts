import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ja-JP',
  title: "Yama's Blog",
  description: "Yama's Technology Blog",
  srcDir: "src",
  lastUpdated: true,
  sitemap: {
    hostname: "https://blog.suyama.ne.jp"
  },
  rewrites: {
    'posts/(.*)/(.*)/:name/(.*)': 'posts/:name/index.md'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts' }
    ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/symysak/blog' }
    ]
  },
  head:[
    ["script", {
      "defer": "",
      "src": "https://static.cloudflareinsights.com/beacon.min.js",
      "data-cf-beacon": '{"token": "6a3873fb8b71458e999f85205dafd056"}'
        }]
  ]
})
