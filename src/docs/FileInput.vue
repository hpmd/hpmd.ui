<script>
export default {
    data() {
        return {
            dragAndDropModel: []
        };
    }
};
</script>


<template>
    <div class="bg-white p-5 shadow rounded mb-8">
        <h2 class="mb-9">File Input</h2>

        <div class="row">
            <div class="col">
                <h4>Drag n drop</h4>

                <div class="mt-4">
                    <hm-drag-file
                        show-input
                        v-model="dragAndDropModel">
                    </hm-drag-file>
                </div>
            </div>
            <div class="col">
                <h4>Drag n drop fill absolute</h4>

                <div class="mt-4">
                    <div style="position: relative; height: 300px;">
                        <hm-drag-file
                            view="fill-absolute"
                            v-model="dragAndDropModel">
                        </hm-drag-file>
                    </div>
                </div>
            </div>
            <div class="col">
                <h4>Upload/input</h4>

                <div class="mt-4">
                    <hm-file-input />
                </div>
            </div>
        </div>
    </div>
</template>
