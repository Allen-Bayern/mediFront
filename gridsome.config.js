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
        contentTypes: [`medi-data`,`subjects`, `etyms`, `meaning-of-etyms`, `abbrs`],
      },
    }
  ],
  
  templates : {
    StrapiMediData : [
      {
        path :(node) => { 
          let ph = `/words/${node.id}`;
          return  ph.replace(` `, `-`)},
        component : `./src/templates/wordShow.vue`
      }
    ],
    StrapiSubjects :[
      {
        path :(node) => { return `/subjects/${node.subject_name}` },
        component : `./src/templates/listAsSubject.vue`
      }
    ],
    StrapiMeaningOfEtyms: [
      {
        path: (node) => { 
          let ph = `/etyms/meaning/${node.id}`;
          return  ph.replace(` `, `-`);
        },
        component : `./src/templates/listAsMeaning.vue`
      }
    ],
    StrapiEtyms : [
      {
        path: (node) => { return `/etyms/root/${node.id}`; },
        component : `./src/templates/listAsRoot.vue`
      }
    ],
    StrapiAbbrs : [
      {
        path: (node) => { return `/abbrs/${node.id}`; },
        component : `./src/templates/Abbr.vue`
      }
    ]
  }
}