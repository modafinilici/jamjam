// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/globals.scss')
      ],
    })
}

module.exports = {
  siteName: 'Modafinilici',
  siteUrl: process.env.SITE_URL || 'https://modafinilici.com',
  plugins: ['gridsome-plugin-robots'],
  templates: {
    Doc: '/:slug',
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'docs/**/*.md',
        typeName: 'Doc',
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: (process.env.GA_ID ? process.env.GA_ID : 'UA-144741960-1')
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
		config: {
          "/*": {
            changefreq: "weekly",
            priority: 0.5,
          },
        },
      },
    },
	{
      use: 'gridsome-plugin-robots',
      options: {
        host: 'https://modafinilici.com',
        sitemap: 'https://modafinilici.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
	{
      use: 'klaro-gridsome',
      options: {
        privacyPolicy: '/confidentialitate/',
        cookieName: 'acord',
        translations: {
          ro: {
            consentModal: {
              description: 'Aici puteți vedea și personaliza informațiile pe care le colectăm despre dvs.',
            },
            googleAnalytics: {
              description: 'Analiza site-urilor alimentată de Google Analytics, permițându-ne să vedem cum utilizatorii vizitează site-ul nostru web.'
            },
            purposes: {
              analytics: 'Analytics'
            },
          },
        },
        apps: [
          {
            name: 'googleAnalytics',
            default: true,
            title: 'Google Analytics',
            purposes: ['analytics'],
            cookies: [
              '_ga',
              '_gcl_au',
              '_gid',
              '_gat'
            ],
            required: false,
            optOut: true,
            onlyOnce: false
          }
        ]
      }
    },
  ],
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  }
}

