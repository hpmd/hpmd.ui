
<script>

import Vue from 'vue';
import {
    uniFilePlusAlt,
    uniTrashAlt,
    uniEllipsisV
} from '@/assets/icons/unicons';

import { HmIcon } from '@/components/icon';
import HmDragFile from '@/components/HmDragFile';


HmIcon.add(
    uniFilePlusAlt,
    uniTrashAlt,
    uniEllipsisV
);

/* eslint-disable no-param-reassign */
function getRandomIntInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}
/* eslint-enable */



export default Vue.extend({
    name: 'App',
    data() {
        return {
            switchModel: false,
            selectBar: {
                value: 'Развлекательный контент',
                options: [
                    'Развлекательный контент',
                    'Авто',
                    'Здоровое питание',
                    'Стриминговые сервисы'
                ]
            },
            searchBar: {
                value: [
                    { name: 'Развлекательный контент', code: 'a' }
                ],
                options: [
                    { name: 'Развлекательный контент', code: 'a' },
                    { name: 'Авто', code: 'b' },
                    { name: 'Другое', code: 'c' },
                    { name: 'Здоровое питание', code: 'd' },
                    { name: 'Стриминговые сервисы', code: 'e' }
                ]
            },
            dropdownModel: true,
            spinButtonModel: 0,
            calendar: {
                inputSingle: null,
                inputRange: []
            }
        };
    },
    created() {
        console.log(this)
    },
    components: {
        HmDragFile,
        HmIcon
    }
});
</script>

<template>
    <div id="app" class="d-flex flex-row align-items-stretch position-relative">
        <nav>
            <div class="container position-sticky sticky-top" style="width: 300px">
                <h1>HPMD UI</h1>

                <hm-nav vertical>
                    <div
                        v-for="section in $router.options.routes"
                        :key="section.path">
                        <hm-nav-item
                            link-classes="p-0 mb-0"
                            :to="section.path"
                            v-if="!section.meta.text">
                            {{section.meta.name}}
                        </hm-nav-item>

                        <hm-nav-text v-else>{{section.meta.name}}</hm-nav-text>
                        <!-- <hm-nav-item
                            link-classes="p-0" :to="section.path">{{section.meta.name}}</hm-nav-item>

                        <template v-if="section.children">
                            <hm-nav vertical class="pl-4">
                                <hm-nav-item
                                    class="mb-0"
                                    link-classes="p-0"
                                    v-for="subpage in section.children"
                                    :to="`${section.path}${subpage.path}`"
                                    :key="`${section.path}${subpage.path}`">
                                    {{subpage.meta.name}}
                                </hm-nav-item>
                            </hm-nav>
                        </template> -->
                    </div>
                </hm-nav>
            </div>
        </nav>

        <main class="flex-grow-1">
            <div class="container">
                <div class="panel shadow p-5 bg-white">
                    <router-view />
                </div>
            </div>
        </main>
    </div>
</template>

<style lang="scss">
@import '@/scss/bootstrap-custom';

#app {
    // font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 60px;
}

nav .nav-link.router-link-exact-active {
    color: $primary;
}
</style>
