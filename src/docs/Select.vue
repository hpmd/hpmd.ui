<script>
    export default {
        data() {
            return {
                selectBar: {
                    value: 'Развлекательный контент',
                    options: [
                        'Развлекательный контент',
                        'Авто',
                        'Здоровое питание',
                        'Стриминговые сервисы'
                    ]
                },
            };
        },
        methods: {
            addTag(newTag) {
                const tag = {
                    name: newTag,
                    code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
                };
                this.searchBar.options.push(tag);
                this.searchBar.value.push(tag);
            }
        }
    };
</script>

<template>
    <div class="bg-white p-5 shadow rounded mb-8">
        <h2 class="mb-5">Select Input</h2>

        <div class="mt-4">
            <div class="row">
                <div class="col">
                    <h5>Select bar</h5>
                    <hm-select
                        v-model="selectBar.value"
                        :options='selectBar.options'/>
                </div>
                <div class="col">
                    <h5>Search bar multiple selection</h5>
                    <hm-select
                        track-by="name"
                        label="name"
                        taggable
                        multiple
                        v-model="searchBar.value"
                        :options='searchBar.options'
                        v-on:tag="addTag"/>
                </div>
            </div>
        </div>
    </div>
</template>
