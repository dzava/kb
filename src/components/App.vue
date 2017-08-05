<style lang="scss">
@import "~bulma/sass/utilities/_all";
@import "~bulma/sass/elements/content";

html,
body {
    padding: 0;
    margin: 1em;
    height: 100%;
}

.ais-input {
    width: 100%;
    font-size: 2em;
    margin-bottom: 1em;
}

.ais-input:focus {
    outline: none;
}

</style>
<template>
    <ais-index
        :app-id="config.appId"
        :api-key="config.searchKey"
        :index-name="config.index"
        >

        <ais-search-box>
            <ais-input></ais-input>
        </ais-search-box>

        <ais-results>
            <template scope="{ result }">
                <item :id="result.objectID" :content="result.content" autofocus></item>
            </template>
        </ais-results>

    </ais-index>
</template>

<script>
import config from '../config';

export default {
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            config
        }
    },
    mounted() {
        document.querySelector('input').focus()
    }
}
</script>
