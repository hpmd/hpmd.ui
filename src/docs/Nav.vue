<script>
const example = `<hm-nav
    :tabs="!isPills"
    :pills="isPills"
    :vertical="isVertical">
    <hm-nav-item active>Выбранная</hm-nav-item>
    <hm-nav-item-dropdown
        variant="primary"
        text="Доступная">
        <hm-dropdown-item>One</hm-dropdown-item>
        <hm-dropdown-item>Two</hm-dropdown-item>
        <hm-dropdown-item>Three</hm-dropdown-item>
    </hm-nav-item-dropdown>
    <hm-nav-item>Доступная</hm-nav-item>
    <hm-nav-item disabled>Недоступная</hm-nav-item>
</hm-nav>`;

export default {
    example,

    data() {
        return {
            isPills: false,
            isVertical: false,
            menuHeight: '50'
        };
    }
};
</script>

<template>
    <section>
        <h2 class="mb-8 display-4">Nav</h2>

        <hm-alert variant="warning" show>
            <strong>WARN</strong> Необходимо доработать стили
        </hm-alert>

        <h3 class="mt-8">Компоненты</h3>
        <ul>
            <li><strong>HmNav </strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge></li>
            <li><strong>HmNavItem </strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge></li>
            <li><strong>HmNavItemDropdown </strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge></li>
            <li><strong>HmNavText </strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge></li>
        </ul>


        <h3 class="mt-8">Использование</h3>

        <div class="p-5 bg-light mb-5 rounded">
            <hm-checkbox v-model="isPills">Style: pills</hm-checkbox>

            <hm-checkbox v-model="isVertical">Mode: vertical</hm-checkbox>

            <hm-input
                placeholder="Высота меню (mode: horizontal)"
                type="number"
                v-model="menuHeight"
            />
        </div>


        <div
            class="menu-te"
            :style="isVertical ? '' : { height: `${menuHeight}px` }">
            <hm-nav
                :tabs="!isPills"
                :pills="isPills"
                :vertical="isVertical">
                <hm-nav-item active-class="active" exact-active-class="active" to="/components/nav">Выбранная</hm-nav-item>
                <hm-nav-item-dropdown
                    variant="primary"
                    text="Доступная">
                    <hm-dropdown-item>One</hm-dropdown-item>
                    <hm-dropdown-item>Two</hm-dropdown-item>
                    <hm-dropdown-item>Three</hm-dropdown-item>
                </hm-nav-item-dropdown>
                <hm-nav-item active-class="active" exact-active-class="active" to="/components/popover">Доступная</hm-nav-item>
                <hm-nav-item active-class="active" exact-active-class="active" to="/components/table" disabled>Недоступная</hm-nav-item>
                <hm-nav-text class="text-danger">Some random text</hm-nav-text>
            </hm-nav>
        </div>

        <hr>

        <div class="code-block">
            <pre v-highlightjs="$options.example"><code class="html"></code></pre>
        </div>

        <h3 class="mt-8">Документация</h3>
        <p><a href="https://bootstrap-vue.org/docs/components/nav">Bootstrap Vue</a></p>
    </section>
</template>

<style lang="scss">
    .menu-te {
        border: 1px dotted #eee;
    }
</style>
