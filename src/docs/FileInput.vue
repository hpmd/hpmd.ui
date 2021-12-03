<script>

export default {
    data() {
        return {
            dragAndDropModel: [],
            fileModel: null,

            acceptValue: '',
            isCapture: false,
            isDisabled: false,
            isDndGlobal: false,
            isMultiple: false,
            isNoDrop: false,
            isPlain: false,
            offset: {
                bottom: '',
                left: '',
                right: '',
                top: ''
            }
        };
    }
};
</script>


<template>
    <section id="test-dnd">
        <h2 class="mb-8 display-4">File Input</h2>

        <h3>Изменения</h3>
        <p><span class="version">0.15.0</span> Компонент был полностью переписан: в <strong>HmFileInput</strong> был добавлен функционал drag-n-drop, до этого наполовину реализованный в <strong>HmDragFile</strong> (который был удален, но и до этого полноценно в набор не входил). Полный список новых возможностей смотри в документации ниже.</p>

        <h3 class="mt-8">Компоненты</h3>
        <ul>
            <li><strong>HmFileInput </strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="danger">Modified</hm-badge></li>
        </ul>

        <h3 class="mt-8">Использование</h3>
        <div class="p-5 bg-light rounded mb-5">
            <div class="row">
                <div class="col-12 col-lg-6">
                    <hm-checkbox v-model="isDisabled">Disabled</hm-checkbox>
                    <hm-checkbox v-model="isCapture">Использовать камеру устройства</hm-checkbox>
                    <hm-checkbox v-model="isPlain">Стандартное поле</hm-checkbox>
                    <hm-checkbox v-model="isMultiple">Multiple</hm-checkbox>
                    <hm-checkbox v-model="isDndGlobal">Отдельное окно drag'n'drop</hm-checkbox>
                    <hm-checkbox v-model="isNoDrop">Выключить Drag'n'drop</hm-checkbox>
                </div>

                <div class="col-12 col-lg-6">
                    <hm-input class="mt-3" v-model="acceptValue" label="accept" />

                    <p class="mb-0 mt-5">Отступы от края окна при dndGlobal = true</p>

                    <div class="row">
                        <div class="col-6 mt-5">
                            <hm-input v-model="offset.top" label="top" />
                        </div>
                        <div class="col-6 mt-5">
                            <hm-input v-model="offset.right" label="right" />
                        </div>
                        <div class="col-6 mt-5">
                            <hm-input v-model="offset.bottom" label="bottom" />
                        </div>
                        <div class="col-6 mt-5">
                            <hm-input v-model="offset.left" label="left" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hm-file-input
            :disabled="isDisabled"
            :accept="acceptValue"
            dnd-accept-format-text="JPEG или PNG, не более 20mb"
            :dnd-global="isDndGlobal"
            :dnd-global-styles="offset"
            dnd-global-trigger-selector="#test-dnd"
            :multiple="isMultiple"
            :no-drop="isNoDrop"
            no-drop-placeholder="asshole"
            :plain="isPlain">
        </hm-file-input>

        <h3 class="mt-8">Документация</h3>

        <p><a href="https://bootstrap-vue.org/docs/components/form-file">Bootstrap Vue</a></p>

        <h4>Основные изменения</h4>
        <ol>
            <li>Добавлен нормальный drag-n-drop интерфейс и его вспомогательные настройки</li>
        </ol>

        <h4>Добавленные свойства</h4>
        <div class="table-responsive">
            <table class="table table-sm table-code table-striped">
                <thead>
                    <tr>
                        <th>Свойство</th>
                        <th>Тип</th>
                        <th>По-умолчанию</th>
                        <th>Допустимые значения</th>
                        <th>Описание</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span class="version">0.15.0</span> <code>disableInvalidDropNotification</code></td>
                        <td><code>Boolean</code></td>
                        <td><code>false</code></td>
                        <td></td>
                        <td>Отключает уведомление для drop-блока о несоответствии типа/расширения файла (или файлов) указанным в свойстве <code>accept</code></td>
                    </tr>
                    <tr>
                        <td><span class="version">0.15.0</span> <code>dndAcceptFormatText</code></td>
                        <td><code>String</code></td>
                        <td><code>''</code></td>
                        <td></td>
                        <td>Текст для комментария в drop-блоке (например, для указания допустимого формата файла)</td>
                    </tr>
                    <tr>
                        <td><span class="version">0.15.0</span> <code>dndBrowseText</code></td>
                        <td><code>String</code></td>
                        <td><code>'Выберите файл или перетащите его сюда'</code></td>
                        <td></td>
                        <td>Аналогично оригинальному свойству <code>browseText</code>, но для блока с drag'n'drop</td>
                    </tr>
                    <tr>
                        <td><span class="version">0.15.0</span> <code>dndGlobal</code></td>
                        <td><code>Boolean</code></td>
                        <td><code>false</code></td>
                        <td></td>
                        <td>Включает режим drag'n'drop при котором блок, куда перетаскиваются файлы становится модальным окном и перекрывает остальной контент</td>
                    </tr>
                    <tr>
                        <td><span class="version">0.15.0</span> <code>dndGlobalStyles</code></td>
                        <td><code>CSSStyleDeclaration</code></td>
                        <td><code>undefined</code></td>
                        <td></td>
                        <td>Объект с CSS-значениями для drop-окна в режиме модального окна</td>
                    </tr>
                    <tr>
                        <td><span class="version">0.15.0</span> <code>dndGlobalTriggerSelector</code></td>
                        <td><code>String</code></td>
                        <td><code>'body'</code></td>
                        <td>Валидный CSS selector</td>
                        <td>CSS Selector элемента, на который будут повешены события <code>dragenter</code> / <code>dragleave</code>, в случае если <code>dndGlobal === true</code></td>
                    </tr>
                    <tr>
                        <td><span class="version">0.15.0</span> <code>invalidAcceptFormatText</code></td>
                        <td><code>String</code></td>
                        <td><code>'Один или несколько файлов не соответствуют условию'</code></td>
                        <td></td>
                        <td>Текст для уведомления о несоответствии файлов полю <code>accept</code>, если оно заполнено и <code>disableInvalidDropNotification != true</code></td>
                    </tr>
                    <tr>
                        <td><span class="version">0.15.0</span> <code>invalidDropTimerMs</code></td>
                        <td><code>Number</code></td>
                        <td><code>2500</code></td>
                        <td></td>
                        <td>Через сколько милисекунд скрыть уведомление о несоответствии формата файлов свойству <code>accept</code>, при перетаскивании в drop-блок</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h4 class="mt-5">Добавленные события</h4>
        <div class="table-responsive">
            <table class="table table-sm table-striped table-code">
                <thead>
                    <tr>
                        <th>Событие</th>
                        <th>Передаваемые данные</th>
                        <th>Описание</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span class="version">0.15.0</span> <code>filesNotMatchAccept</code></td>
                        <td><code>File[]</code></td>
                        <td>Отправляется после drop-события; передает массив файлов, несоответствующих указанным в <code>accept</code> типам</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h4 class="mt-5">Добавленные слоты</h4>
        <div class="table-responsive">
            <table class="table table-sm table-code table-striped">
                <thead>
                    <tr>
                        <th>Слот</th>
                        <th>Описание</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span class="version">0.15.0</span> <code>dndFileInputContent</code></td>
                        <td>Слот для содержимого блока загрузки файлов, при noDrop === false</td>
                    </tr>
                    <tr>
                        <td><span class="version">0.15.0</span> <code>dndGlobalContent</code></td>
                        <td>Слот для содержимого модального окна загрузки файлов</td>
                    </tr>
                </tbody>
            </table>
        </div>

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
