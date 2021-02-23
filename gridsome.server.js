// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const nodeExternals = require('webpack-node-externals')

module.exports = function (api) {
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          allowlist: [/^vuetify/]
        })
      ])
    }
  })

  /** 如果是用官方插件提取数据，那么这一部分也没必要再写
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })*/

  /** 如果在gridsome.config.js中已经定义了，那么底下这部分不用写了。
   * 如果要用axios进行ajax操作，那么写这一部分
   api.createPages( async ({ graphql ,createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    const {data} = await graphql(
      `{
        allStrapiMediData{
          edges{
            node{
              id 
              word
              which_type{
                a_type
              }
              which_subject{
                subject_name
              }
              attribute{
                quick_meaning
                meanings{
                  source
                  meaning
                }
                sentences{
                  eng
                  chn
                }
              }
                }
              }
            }
      }`
    );

   data.allStrapiMediData.edges.forEach(({ node }) =>{
      createPage({
        path : `/${node.word}`,
        component : `./src/templates/wordShow.vue`,
        context: {
          word : node.word,
          type : node.which_type.a_type,
          subject : node.which_subject.subject_name,
          quick_meaning : node.attribute.quick_meaning,
          meaning_source : node.attribute.meanings.source,
          meaning_meaning : node.attribute.meanings.meaning,
          sentence_eng : node.attribute.sentences.eng,
          sentence_chn : node.attribute.sentences.chn
        }
      })
    }
    )
  })*/
}
