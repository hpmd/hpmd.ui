<template>
    <div>
        <h2 class="mb-9">Buttons</h2>
        <div class="mb-6">
            <h4>Styles</h4>
            <div class="mb-5">
                <p class="mb-0"><strong>Solid</strong></p>
                <div>
                    <hm-button variant="warning" class="mr-2">Yellow</hm-button>
                    <hm-button variant="light" class="mr-2">Light</hm-button>
                    <hm-button variant="primary" class="mr-2">Blue</hm-button>
                    <hm-button variant="danger" class="mr-2">Red</hm-button>
                    <hm-button variant="warning" class="mr-2" disabled="disabled">Disabled</hm-button>
                </div>
            </div>

            <div class="mb-5">
                <p class="mb-0"><strong>Outline</strong></p>
                <div>
                    <hm-button variant="outline-warning" class="mr-2">Yellow</hm-button>
                    <hm-button variant="outline-light" class="mr-2">Light</hm-button>
                    <hm-button variant="outline-primary" class="mr-2">Blue</hm-button>
                    <hm-button variant="outline-danger" class="mr-2">Red</hm-button>
                    <hm-button variant="warning" class="mr-2" disabled="disabled">Disabled</hm-button>
                </div>
            </div>

            <div>
                <p class="mb-0"><strong>Secondary actions</strong></p>
                <div>
                    <hm-button variant="link" class="mr-2 text-dark">Regular</hm-button>
                    <hm-button variant="link" class="mr-2 text-blue">Blue</hm-button>
                    <hm-button variant="link" class="mr-2 text-danger">Dangerous</hm-button>
                    <hm-button variant="link" class="mr-2" disabled="disabled">Disabled</hm-button>
                </div>
            </div>
        </div>

        <div class="mb-6">
            <h4>Sizes</h4>
            <div>
                <hm-button variant="warning" class="mr-2" size="xs">Condensed (xs)</hm-button>
                <hm-button variant="warning" size="sm" class="mr-2">small (sm)</hm-button>
                <hm-button variant="warning" size="md" class="mr-2">regular (md)</hm-button>
                <hm-button variant="warning" size="lg" class="mr-2">large (lg)</hm-button>
            </div>
        </div>

        <h3>Grouping</h3>
        <hm-button-group>
            <hm-button variant="warning" active>some action</hm-button>
            <hm-button variant="warning">second action</hm-button>
        </hm-button-group>
    </div>
</template>
