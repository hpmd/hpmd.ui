<script>
    export default {
        data() {
            return {
                autoClose: true,
                showTime: 5,
                placement: 'topright',
                showProgressTimer: false,
                variant: 'default'
            };
        },
        methods: {
            showToast(isVnode) {
                const content = isVnode ?
                    [
                        this.$createElement('div', { class: 'text-danger' }, 'Кастомный контент'),
                        this.$createElement('div', [
                            this.$createElement('a', { className: 'link', attrs: { href: '#' } }, 'ссылочка')
                        ])
                    ] :
                    'Просто текст сообщения';

                const {
                    autoClose,
                    showTime,
                    placement,
                    showProgressTimer,
                    variant
                } = this;

                this.$hmToaster.add({
                    autoClose,
                    content,
                    title: 'Новое_сообщение_asdasdakjsasываырлыроаллолываывалывролаылолывавллолоыавывало',
                    placement,
                    showTime,
                    showProgressTimer,
                    variant
                });
            }
        }
    };
</script>


<template>
    <div class="bg-white p-5 shadow rounded mb-8">
        <h2 class="mb-5">Toast (Notification)</h2>

        <div class="bg-light p-5 rounded mb-6">
            <div class="row">
                <div class="col-4">
                    <hm-form-group
                        stacked
                        label="Placement">
                        <hm-radio
                            v-model="placement"
                            name="toast-placement"
                            value="topleft">
                            Top Left
                        </hm-radio>
                        <hm-radio
                            v-model="placement"
                            name="toast-placement"
                            value="topcenter">
                            Top Center
                        </hm-radio>
                        <hm-radio
                            v-model="placement"
                            name="toast-placement"
                            value="topright">
                            Top Right
                        </hm-radio>
                        <hm-radio
                            v-model="placement"
                            name="toast-placement"
                            value="bottomleft">
                            Bottom Left
                        </hm-radio>
                        <hm-radio
                            v-model="placement"
                            name="toast-placement"
                            value="bottomcenter">
                            Bottom Center
                        </hm-radio>
                        <hm-radio
                            v-model="placement"
                            name="toast-placement"
                            value="bottomright">
                            Bottom Right
                        </hm-radio>
                    </hm-form-group>
                </div>
                <div class="col-4">
                    <hm-form-group label="Variant">
                        <hm-radio
                            v-model="variant"
                            name="toast-variant"
                            value="black">
                            Default
                        </hm-radio>
                        <hm-radio
                            v-model="variant"
                            name="toast-variant"
                            value="primary">
                            Primary
                        </hm-radio>
                        <hm-radio
                            v-model="variant"
                            name="toast-variant"
                            value="warning">
                            Warning
                        </hm-radio>
                        <hm-radio
                            v-model="variant"
                            name="toast-variant"
                            value="danger">
                            Danger
                        </hm-radio>
                        <hm-radio
                            v-model="variant"
                            name="toast-variant"
                            value="light">
                            Light
                        </hm-radio>
                    </hm-form-group>
                </div>
                <div class="col-4">
                    <hm-form-group label="Delay / Auto-close">
                        <hm-checkbox
                            class="mb-4"
                            v-model="autoClose">
                            Автозакрытие
                        </hm-checkbox>

                        <hm-input
                            number
                            class="mb-4"
                            type="number"
                            v-model="showTime"
                            label="Время отображения (в секундах)" />

                        <hm-checkbox v-model="showProgressTimer">
                            Показывать прогресс-бар до закрытия
                        </hm-checkbox>
                    </hm-form-group>
                </div>
            </div>
        </div>

        <div>
            <hm-button
                variant="warning"
                @click="showToast(false)">
                Обычное сообщение
            </hm-button>

            <hm-button
                variant="primary"
                @click="showToast(true)">
                HTML-шаблон
            </hm-button>
        </div>

        <hm-toaster />
    </div>
</template>