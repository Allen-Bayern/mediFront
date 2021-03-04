<template>
    <ais-instant-search index-name="medi_data" :search-client="searchClient">
        <ais-search-box />
        <ais-hits>
            <div slot="item" slot-scope="{ item }">
              <g-link :to="item.path"><
                <h2>{{ item.word }}</h2>
                <p>{{ item.chinese }}</p>
                <p>{{ item.subject }}</p>
              </g-link>
            </div>
        </ais-hits>
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

<style>
body {
  font-family: sans-serif;
  padding: 1em;
}
</style>