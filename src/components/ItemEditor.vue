<style>
.wrapper,
.preview {
    height: 100%;
    width: 100%;
}

.wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
}

.editor, .preview {
    flex: 1 1 50%;
}

.editor {
    text-align: center
}

.textarea {
    width: 100%;
    height: 85vh;
}

.preview {
    max-height: calc(100vh - 1rem);
    overflow: auto;
}
</style>

<template>
    <div class="wrapper">
        <div class="editor">
            <textarea class="textarea" v-model="content"></textarea>
            <button
                class="button is-primary"
                :class="{ 'is-loading': isWorking }"
                @click="save()">Save</button>
            <button
                class="button is-warning"
                @click="$router.push('/')"
            >Back</button>
            <button
                class="button is-danger"
                @click="deleteObject()"
                v-if="id"
                >Delete</button>
        </div>
        <div class="preview">
            <item :content="content"></item>
        </div>
    </div>
</template>

<script>
    import AlgoliaSearch from 'algoliasearch';
    import config from '../config';

    let client = {};
    let index = {};

    try {
        client = AlgoliaSearch(config.appId, config.adminKey);
        index = client.initIndex(config.index);
    } catch (error) {
        console.log(error);
    }

    export default {
        data() {
            return {
                content: '# ',
                id: '',
                isWorking: false,
            }
        },
        methods: {
            loadObject() {
                index.getObject(this.id, (err, content) => {

                    if(err) {
                        this.$router.push('/');
                    }

                    this.content = content.content;
                    this.id = content.objectID;
                });
            },
            updateObject() {
                console.log('updating');
                index.saveObjects([{content: this.content, objectID: this.id}], this.processResponse);
            },
            createObject() {
                console.log('creating');
                index.addObjects([{content: this.content}], this.processResponse);
            },
            deleteObject() {
                index.deleteObject(this.id, this.processResponse);
            },
            save() {
                this.isWorking = true;
                if(this.id) {
                    this.updateObject()
                } else {
                    this.createObject()
                }
            },
            processResponse(err, result) {
                this.isWorking = false;

                if(err) {
                    alert(err.message);
                    return ;
                }

                alert('Success');

                this.$router.push('/');
            }
        },
        mounted() {
            if(this.$route.params.id) {
                this.id = this.$route.params.id;
                this.loadObject();
            }
        }
    }
</script>
