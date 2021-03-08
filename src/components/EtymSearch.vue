<template>
    <ais-instant-search index-name="medi_etyms" :search-client="searchClient">
        <ais-search-box placeholder="请输入您要查找的词根词缀" id="inbox" />
          <ais-state-results>
            <template slot-scope="{ state: { query }}">
              <ais-hits v-show="query.length > 0">
                <div slot="item" slot-scope="{ item }" class="resultshow">
                  <g-link :to="item.path">
                    <h2>{{ item.word }}</h2>
                  </g-link>
                  <p v-if="isNotNull(item.vari)">{{ item.vari }}</p>
                  <p>{{ item.meaning }}</p>
                  <p>{{ item.chinese_type }}</p>
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
  computed :{
    isNotNull(){ 
        return function (txt){
            if (txt != null){
                return txt;
            }   
        }
        }
    }
}
</script>

<style scoped>

</style>