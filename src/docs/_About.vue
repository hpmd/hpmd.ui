<script>
import { version, dependencies } from '../../package.json';

export default {
    data() {
        return {
            version,
            dependencies
        };
    }
};
</script>


<template>
    <section>
        <h2>Последняя версия: {{version}}</h2>

        <hr>

        <div>
            <p>
                <strong>HPMD.ui</strong> - Набор интерфейсов на основе Bootstrap 4 (и нескольких более мелких библиотек),
                сделанный для быстрого создания дэшбордов и подобных интерфейсов. Библиотека включает:
            </p>

            <ul>
                <li>
                    Набор CSS - в виде подключаемого SCSS файла с возможностью кастомизации до сборки
                </li>
                <li>
                    Vue-компоненты (Vue 2): набор отдельных компонентов для использования в Vue-приложениях.
                </li>
                <li>
                    Поддержка TypeScript
                </li>
            </ul>
        </div>

        <hr>

        <h3>Зависимости</h3>
        <div
            class="d-flex"
            v-for="(version, packageName) in dependencies"
            :key="packageName">
            <div style="width: 200px">
                <a :href="`https://npmjs.com/package/${packageName}`">{{packageName}}</a>
            </div>
            <div>{{version}}</div>
        </div>
    </section>
</template>
