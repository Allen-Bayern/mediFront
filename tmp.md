page query:

<page-query>
query ($id : ID!){
  strapiMediData(id : $id){
    word
  }
}
</page-query>

<template>
    <Layout>
        <div v-text='$page.strapiMediData.word'></div>
        <div>{{ $page.strapiMediData.which_subject.subject_name }}</div>
    </Layout>
</template>


<page-query>
query ($id: ID!) {
  post(id: $id) {
    title
    content
  }
}
</page-query>


原Default.vue代码：
```vue
<template>
  <v-app id="inspire">
    <v-app-bar
        app
        color="white"
        flat
    >
      <v-container class="py-0 fill-height">
        <v-avatar
            class="mr-10"
            color="grey darken-1"
            size="32"
        ></v-avatar>

        <v-btn
            v-for="link in links"
            :key="link"
            text
            :to="index"
        >{{ link }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <!--- 用于建立搜索 --->
          <v-text-field
              dense
              flat
              hide-details
              rounded
              solo-inverted
          >
          <LazyHydrate on-interaction>
            <Search />
          </LazyHydrate>
          </v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
        <slot/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  data: () => ({
    links: [
      'subjects'
    ],
  })
}
</script>
```

<v-text-field
    filled
    label="请输入您要查询的单词"
    append-icon="mdi-map-marker"
></v-text-field>

```javascript
const collections = [
  {
    query: query{
      `allStrapiMediData{
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
    transformer: ({ data }) => data.allStrapiMediData.edges.map(({ node }) => node)
    indexName: process.env.ALGOLIA_INDEX_NAME || 'yb', // Algolia index name
    itemFormatter: (item) => {
      return {
        word: item.word,
        subject: item.subj.subject_name,
        meaning: String(item.meanings)
      }
    }, // optional
    matchFields: ['word', 'subject', 'meaning'], // Array<String> required with PartialUpdates
  },
];



    {
      use: `gridsome-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        collections,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: true, // default: false
      },
    }
```


```official search.vue
<template>
  <ClientOnly>
    <ais-instant-search
      :search-client="searchClient"
      index-name="yb"
    >
      <ais-configure
        :hits-per-page.camel="100"
        :distinct="true"
      />
      <ais-search-box placeholder="Search" :show-loading-indicator="true" ref="search" />
      <ais-hits>
        <div class="results" slot-scope="{ items }" @click="toggle(false)">
          <template v-for="item in items">
            <g-link :to="item.path" class="card">
              <p>{{item.word}}</p>
            </g-link>
          </template>
          <ais-pagination />
        </div>
      </ais-hits>
      <ais-powered-by />
    </ais-instant-search>
  </ClientOnly>
</template>

<script>
import algoliasearch from 'algoliasearch/lite'

function onCatch(err) {
  console.warn(err)
}

export default {
  components: {
    AisInstantSearch: () =>
      import ('vue-instantsearch')
      .then(a => a.AisInstantSearch)
      .catch(onCatch),
    AisConfigure: () =>
      import ('vue-instantsearch')
      .then(a => a.AisConfigure)
      .catch(onCatch),
    AisSearchBox: () =>
      import ('vue-instantsearch')
      .then(a => a.AisSearchBox)
      .catch(onCatch),
    AisHits: () =>
      import ('vue-instantsearch')
      .then(a => a.AisHits)
      .catch(onCatch),
    AisPagination: () =>
      import ('vue-instantsearch')
      .then(a => a.AisPagination)
      .catch(onCatch),
    AisPoweredBy: () =>
      import ('vue-instantsearch')
      .then(a => a.AisPoweredBy)
      .catch(onCatch)
  }
}
</script>

<style>
.results {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
}

.card {
  min-width: 200px;
  max-width: 300px;
  flex: 1;
  text-align: center;
  padding: 10px;
}

.card img {
  width: 100%;
}
</style>

```

https://www.youtube.com/watch?v=oA2Y2Be8hfE&list=PLylMDDjFIp1AeShGoqPqv2v1m6r99OdKC

https://www.youtube.com/watch?v=dTXzxSlhTDM&t=198s

<v-card>
            <v-list flat>
                <v-subheader :style="{fontFamily : Roboto, fontSize: 96}">所有科室一览表</v-subheader>
                <v-list-item-group color="primary"
                    v-for="(item, index) in $page.allStrapiSubjects.edges.node " :key=index
                    :to="'/subjects/' + item.subject_name"
                >
                    <v-list-item-content>
                        <v-list-item-title>{{ item.subject_cnh }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item-group>
            </v-list>
</v-card>



v-for="n in $page.strapiMediData.meanings.meanings"
                                :key="n"