<template>
    <div class="bg-white p-5 shadow rounded mb-8">
        <h2 class="mb-5">Dropdown</h2>

        <div class="row">
            <div class="col">
                <div class="mt-4">
                    <h5>Solid Dropdown</h5>
                    <hm-dropdown
                        variant="warning">
                        <template v-slot:button-content>small dropdown</template>
                        <hm-dropdown-item>Текстовый текст</hm-dropdown-item>
                        <hm-dropdown-divider />
                        <hm-dropdown-item>Информационный текст</hm-dropdown-item>
                        <hm-dropdown-divider />
                        <hm-dropdown-item>Карусельный текст</hm-dropdown-item>
                        <hm-dropdown-divider />
                        <hm-dropdown-item>Текстовый текст</hm-dropdown-item>
                    </hm-dropdown>
                </div>
            </div>
            <div class="col">
                <div class="mt-4">
                    <h5>Solid Split Dropdowns</h5>
                    <hm-dropdown
                        split
                        variant="warning">
                        <template v-slot:button-content>small dropdown</template>
                        <hm-dropdown-item>Текстовый текст</hm-dropdown-item>
                        <hm-dropdown-divider />
                        <hm-dropdown-item>Информационный текст</hm-dropdown-item>
                        <hm-dropdown-divider />
                        <hm-dropdown-item>Карусельный текст</hm-dropdown-item>
                        <hm-dropdown-divider />
                        <hm-dropdown-item>Текстовый текст</hm-dropdown-item>
                    </hm-dropdown>
                </div>
            </div>
        </div>

        <div class="mt-5">
            <h5>Sizing</h5>

            <hm-dropdown
                class="mr-3"
                v-for="sizekey in ['xs', 'sm', 'md', 'lg']"
                :size="sizekey"
                :key="`dropdown-size-${sizekey}`"
                :text="`Size ${sizekey}`">
                <hm-dropdown-item>123</hm-dropdown-item>
            </hm-dropdown>
        </div>
    </div>
</template>
