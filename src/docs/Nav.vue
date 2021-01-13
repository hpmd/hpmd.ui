<template>
    <div class="bg-white p-5 shadow rounded mb-8">
        <h2 class="mb-5">Navigation and Tabs</h2>

        <div class="mt-4">
            <div class="row">
                <div class="col-6 mb-5">
                    <h5>Tabs</h5>
                    <hm-nav tabs>
                        <hm-nav-item active>Выбранная</hm-nav-item>
                        <hm-nav-item>Доступная</hm-nav-item>
                        <hm-nav-item class="hover">Ховер</hm-nav-item>
                        <hm-nav-item disabled>Недоступная</hm-nav-item>
                    </hm-nav>
                </div>
                <div class="col-6 mb-5">
                    <h5>Tabs with dropdowns</h5>
                    <hm-nav tabs>
                        <hm-nav-item active>Выбранная</hm-nav-item>
                        <hm-nav-item-dropdown
                            variant="light"
                            text="Доступная">
                            <hm-dropdown-item>One</hm-dropdown-item>
                            <hm-dropdown-divider></hm-dropdown-divider>
                            <hm-dropdown-item>Two</hm-dropdown-item>
                            <hm-dropdown-divider></hm-dropdown-divider>
                            <hm-dropdown-item>Three</hm-dropdown-item>
                        </hm-nav-item-dropdown>
                        <hm-nav-item>Доступная</hm-nav-item>
                        <hm-nav-item disabled>Недоступная</hm-nav-item>
                    </hm-nav>
                </div>
                <div class="col-6 mb-5">
                    <h5>Pills</h5>
                    <hm-nav pills>
                        <hm-nav-item active>Выбранная</hm-nav-item>
                        <hm-nav-item>Доступная</hm-nav-item>
                    </hm-nav>
                </div>
                <div class="col-6 mb-5">
                    <h5>Pills with dropdowns</h5>
                    <hm-nav pills>
                        <hm-nav-item active>Выбранная</hm-nav-item>
                        <hm-nav-item-dropdown
                            variant="light"
                            text="Доступная">
                            <hm-dropdown-item>One</hm-dropdown-item>
                            <hm-dropdown-divider></hm-dropdown-divider>
                            <hm-dropdown-item>Two</hm-dropdown-item>
                            <hm-dropdown-divider></hm-dropdown-divider>
                            <hm-dropdown-item>Three</hm-dropdown-item>
                        </hm-nav-item-dropdown>
                        <hm-nav-item title-link-class="hover">Доступная</hm-nav-item>
                        <hm-nav-item disabled>Недоступная</hm-nav-item>
                    </hm-nav>
                </div>
            </div>
        </div>
    </div>
</template>
