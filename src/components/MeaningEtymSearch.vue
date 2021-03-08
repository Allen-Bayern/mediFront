<template>
    <ais-instant-search index-name="meanings_etym" :search-client="searchClient">
        <ais-search-box placeholder="请输入您要查找的意义" id="inbox" />
            <ais-state-results>
                <template slot-scope="{ state: { query }}">
                    <ais-hits v-show="query.length > 0">
                        <div slot="item" slot-scope="{ item }">
                            <g-link :to="item.path">
                                <h2>表示"{{ item.chinese_meaning}}"的词根词缀:</h2>
                            </g-link>
                            <p>{{ item.word }}</p>
                            <p v-if="isNotNull(item.variation)">{{ item.variation }}</p>
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