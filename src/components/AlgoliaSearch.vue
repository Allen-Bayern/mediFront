<template>
    <ais-instant-search index-name="medi_words" :search-client="searchClient">
        <ais-search-box placeholder="请输入您要查找的单词" id="inbox" />
          <ais-state-results>
            <template slot-scope="{ state: { query }}">
              <ais-hits v-show="query.length > 0">
                <div slot="item" slot-scope="{ item }" class="hits">
                  <div id="word">
                    <g-link :to="item.path"><h2>{{ item.word }}</h2></g-link>
                  </div>
                  <div id="meaning"><p>{{ item.meaning }}</p></div>
                  <div id="subj"><p>所属科室：{{ item._subject }}</p></div>
                </div>
              </ais-hits>
            </template>
          </ais-state-results>
        <ais-powered-by />
    </ais-instant-search>
</template>

<script>
import algoliasearch from 'algoliasearch/lite';
import 'instantsearch.css/themes/satellite-min.css';

export default {
  data() {
    return {
      searchClient: algoliasearch(
        'YG3I853V2S', // 应用密码
        '6c60d235175fd13392f2c09be017efcf' //search-only key
      ),
    };
  },
};
</script>

<style scoped>
.hits{
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 50% 50%;
  grid-template-areas : 'a b'
                        'c d';
  justify-items : start;
  align-items : center;
}
#word{
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
  grid-column : 1 / 2;
  grid-row: 1 / 3;
  font-size: 0.6em;
}
#meaning{
  grid-area: b;
  font-size: 1em;
}
#subj{
  grid-area: d;
  font-size: 1em;
}
</style>