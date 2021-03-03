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
import algoliasearch from 'algoliasearch/lite';
import 'instantsearch.css/themes/satellite-min.css';

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
