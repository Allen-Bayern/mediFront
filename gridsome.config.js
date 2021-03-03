// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const collections = [
  {
    query: `query{
      allStrapiMediData{
        edges{
          node{
            word
            subj{
              subject_name
              subject_chn
            }
            meanings{
              chinese
            }
          }
        }
      }
    }`,
    transformer: ({ data }) => data.allStrapiMediData.edges.map(({ node }) => node),
    indexName: process.env.ALGOLIA_INDEX_NAME || 'yb', // Algolia index name
    itemFormatter: (item) => {
      return {
        word: item.word,
        subject: item.subj.subject_name,
        meaning: String(item.meanings)
      }
    }, // optional
    //matchFields: ['word', 'subject', 'meaning'], // Array<String> required with PartialUpdates
  },
];

module.exports = {
  siteName: 'Medical Dictionary',
  siteDescription : 'a unique dictionary',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 100000, // Defaults to 100
        contentTypes: [`medi-data`,`subjects`],
      },
    },
    {
      use: `gridsome-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        collections,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: true, // default: false
      }
    }
  ],
  
  templates : {
    StrapiMediData : [
      {
        path :(node) => { 
          let ph = `/subjects/${node.subj.subject_name}/${node.word}`;
          return  ph.replace(` `, `-`)},
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