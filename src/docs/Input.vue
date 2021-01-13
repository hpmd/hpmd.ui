<script>
    import debounce from 'lodash.debounce';

    export default {
        data() {
            return {
                inputs: {
                    text: '',
                    password: '',
                    number: null,
                    phone: '',
                    error: '',
                    inputGroup: '',
                    isInputGroupValid: null
                },
                masked: {
                    phone: '',
                    phoneMask: {
                        mask: '{+7} (000) 000-00-00',
                    },
                    phoneRaw: '',

                    number: '',
                    numberMask: {
                        mask: Number,
                        thousandsSeparator: ' '
                    },
                    numberRaw: '',
                }
            };
        },
        methods: {
            validateInputGroup: debounce(function validateInputGroup() {
                this.inputs.isInputGroupValid = this.inputs.inputGroup.length >= 4;
            }, 500)
        }
    };
</script>


<template>
    <div class="bg-white p-5 shadow rounded mb-8">
        <h2 class="mb-9">Form Inputs</h2>

        <div class="mb-4">
            <h4>Input</h4>

            <div class="mt-4">
                <hm-input v-model="inputs.text" type="email" label="E-mail" />
            </div>

            <div class="mt-4">
                <hm-input v-model="inputs.password" type="password" label="Пароль" show-password-btn />
            </div>

            <div class="mt-4">
                <hm-input
                    v-model="inputs.number"
                    type="number"
                    :min="0"
                    :max="10"
                    label="Число между 0 и 10">
                    <template v-slot:prepend>
                        <span class="lead">&#8381;</span>
                    </template>
                </hm-input>
            </div>

            <div class="mt-4">
                <hm-input
                    v-model="inputs.number"
                    type="number"
                    label="Число"
                    disabled>
                    <template v-slot:append>
                        <span class="lead">&#8381;</span>
                    </template>
                </hm-input>
            </div>

            <div class="mt-4">
                <hm-input
                    v-model="inputs.phone"
                    type="tel"
                    label="Номер телефона">
                    <template v-slot:append>
                        <span class="text-primary"><strong>123</strong></span>
                        <hm-icon class="text-primary" name="eye-slash"></hm-icon>
                    </template>
                </hm-input>
            </div>

            <div class="mt-4">
                <hm-input
                    v-model="inputs.error"
                    type="text"
                    :state="false"
                    label="Ошибка ввода">
                </hm-input>
            </div>

            <div class="mt-4">
                <hm-input
                    v-model="inputs.text"
                    :state="true"
                    label="Ввод без проблем">
                </hm-input>
            </div>

            <div class="mt-4">
                <hm-input
                    disabled
                    v-model="inputs.error"
                    type="text"
                    :state="false"
                    label="Номер телефона">
                </hm-input>
            </div>
        </div>

        <div class="mb-4">
            <h4>Masked input</h4>

            <div class="mt-4">
                <hm-input
                    label="Номер телефона"
                    v-model="masked.phone"
                    :mask="masked.phoneMask"
                    type="tel"
                    @inputRaw="masked.phoneRaw = $event">
                </hm-input>
                <pre class="bg-light p-4"><code>Model value: {{masked.phone}}<br>Raw value: {{masked.phoneRaw}}</code></pre>
            </div>

            <div class="mt-4">
                <hm-input
                    label="Любое число"
                    v-model="masked.number"
                    :mask="masked.numberMask"
                    type="text"
                    @inputRaw="masked.numberRaw = $event">
                </hm-input>
                <pre class="bg-light p-4"><code>Model value: {{masked.number}}<br>Raw value: {{masked.numberRaw}}</code></pre>
            </div>
        </div>

        <div class="mb-4">
            <h4>Input message</h4>

            <hm-form-group
                description="Введите пин-код"
                :state="inputs.isInputGroupValid"
                :invalid-feedback="inputs.inputGroup.length > 0 ? 'Введите не менее 4 символов' : 'Поле не должно быть пустым'">
                <hm-input
                    v-model="inputs.inputGroup"
                    :state="inputs.isInputGroupValid"
                    trim
                    @input="validateInputGroup">
                </hm-input>
            </hm-form-group>
        </div>

        <div>
            <h4>Input group</h4>

            <hm-input-group class="mb-5">
                <hm-input
                    v-model="inputs.text"
                    label="Append slot" />

                <template v-slot:append>
                    <hm-button variant="primary">test</hm-button>
                </template>
            </hm-input-group>

            <hm-input-group class="mb-5">
                <hm-input-group-prepend>
                    <hm-button variant="warning">Left action</hm-button>
                </hm-input-group-prepend>
                <hm-input v-model="inputs.text" label="Prepend component" />
            </hm-input-group>

            <hm-input-group class="mb-5">
                <hm-input-group-prepend is-text>
                    Just any text
                </hm-input-group-prepend>

                <hm-input v-model="inputs.text" label="Text prepend"></hm-input>
            </hm-input-group>

            <hm-input-group>
                <hm-input-group-prepend>
                    <hm-dropdown text="Choose" variant="warning">
                        <hm-dropdown-item>Option 1</hm-dropdown-item>
                        <hm-dropdown-item>Option 2</hm-dropdown-item>
                    </hm-dropdown>
                </hm-input-group-prepend>

                <hm-input v-model="inputs.text" label="Both sides" />

                <hm-input-group-append>
                    <hm-button variant="primary">Action!</hm-button>
                </hm-input-group-append>
            </hm-input-group>
        </div>
    </div>
</template>
