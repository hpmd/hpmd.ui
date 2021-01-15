<script>
export default {
    data() {
        return {
            dragAndDropModel: [],
            fileModel: null,
            isCapture: false
        };
    }
};
</script>


<template>
    <section>
        <h2 class="mb-8 display-4">File Input</h2>

        <hm-alert
            show
            variant="warning">
            <strong>WARN:</strong> компонент может быть объединен в будущем с HmDragFile
        </hm-alert>

        <h3 class="mt-8">Компоненты</h3>
        <ul>
            <li><strong>HmFileInput </strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="danger">No changes</hm-badge></li>
        </ul>

        <h3 class="mt-8">Использование</h3>
        <div class="p-5 bg-light rounded mb-5">
            <hm-checkbox v-model="isCapture">Использовать камеру устройства</hm-checkbox>
        </div>

        <hm-file-input v-model="fileModel" :is-capture="isCapture"></hm-file-input>

        <!-- <div class="row">
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
        </div> -->
    </section>
</template>
