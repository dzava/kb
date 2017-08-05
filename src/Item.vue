<style lang="scss">
@import "~bulma/sass/utilities/_all";
@import "~bulma/sass/elements/content";

.content {
    box-shadow: 0 2px 3px rgba($black, 0.1), 0 0 0 1px rgba($black, 0.1);
    padding: 1.5rem;
}

h1 {
    text-align: center;
}

pre {
    white-space: pre-wrap;
    word-wrap: break-word;
    padding: 5px;
}

pre,
code {
    font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
    border-radius: 3px;
    background-color: #F8F8F8;
    border: 1px solid #CCC;
}

pre code {
    border: none;
}
</style>
<template>
    <div class="content">
        <div style="text-align: right">
            <router-link :to="`/edit/${id}`">Edit</router-link>
        </div>
        <div v-html="marked(content)"></div>
    </div>
</template>

<script>
    import marked from 'marked';
    export default {
        props: ['id', 'content'],
        methods: {
            marked
        }
    }
</script>
