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
        queryLimit: 100000, // Defaults to 100
        contentTypes: [`medi-data`, `relations`,`subjects`, `kaobos`],
      },
    },
  ],
  
  templates : {
    StrapiMediData : [
      {
        path :(node) => { return  `/subjects/${node.subj.subject_name}/${node.word}`},
        component : `./src/templates/wordShow.vue`
      }
    ],
    StrapiSubjects :[
      {
        path :(node) => { return `/subjects/${node.subject_name}` },
        component : `./src/templates/listAsSubject.vue`
      }
    ]
  }
}