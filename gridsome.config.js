// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Medical Dictionary',
  siteDescription : 'a unique dictionary',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 10000, // Defaults to 100
        contentTypes: [`medi-data`, `subjects`, `types`],
      },
    },
  ],
  
  templates : {
    StrapiMediData : [
      {
        path :(node) => { return  `/${node.word}`},
        component : `./src/templates/wordShow.vue`
      }
    ]
  }
}