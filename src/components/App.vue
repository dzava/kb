<style>

html,
body {
    padding: 0;
    margin: 1em;
    height: 100%;
}

.ais-input {
    width: 100%;
    font-size: 2em;
}

.ais-powered-by {
    text-align: right;
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
        :query="query"
        >

        <ais-search-box>
            <ais-input></ais-input>

            <ais-powered-by></ais-powered-by>
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
    props: {
        query: {
            type: String,
            default: '',
        },
    },
    data () {
        return {
            config
        }
    },
    mounted() {
        document.querySelector('input').focus()
        document.addEventListener('keypress', (evt) => {
            if(evt.which === 43 &&
                ['input', 'textarea'].indexOf(evt.target.tagName.toLowerCase()) === -1) {
                this.$router.push('new');
            }
        })
    }
}
</script>
