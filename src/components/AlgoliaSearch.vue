<template>
    <ais-instant-search :search-client="SearchClient">
        <ais-search-box 
            placeholder="string"
            submit-title="string"
            reset-title="string"
            :autofocus="boolean"
            :show-loading-indicator="boolean"
            :class-names="object"
        />
        <ais-hits>
            <div>
                <h2></h2>
            </div>
        </ais-hits>
        <ais-powered-by />
    </ais-instant-search>
</template>

<script>
import algoliasearch from 'algoliasearch/lite';
import 'instantsearch.css/themes/satellite-min.css';

function onCatch(err) {
    console.warn(err)
};

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

</style>