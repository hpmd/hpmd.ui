<script>
const example = `<hm-form @submit.prevent>
    <hm-form-group>
        <hm-input
            aria-describedby="email-descr"
            type="email"
            label="E-mail" 
            v-model="model.email"
            required />
        <hm-form-text id="email-descr">Be sure to use valid email address</hm-form-text>
    </hm-form-group>
    
    <hm-form-group>
        <hm-input
            type="password"
            label="Password"
            :state="isPasswordValid"
            v-model="model.password"
            required />

        <hm-form-invalid-feedback :state="isPasswordValid">{{passwordInvalidMessage}}</hm-form-invalid-feedback>
        <hm-form-valid-feedback :state="isPasswordValid">OK!</hm-form-valid-feedback>
    </hm-form-group>

    <hm-btn variant="primary" size="md">Submit!</hm-btn>
</hm-form>`;

export default {
    data() {
        return {
            example,
            model: {
                email: '',
                password: '',
            }
        };
    },
    computed: {
        isPasswordValid() {
            const pwd = this.model.password.trim();

            return pwd.length >= 8;
        },
        passwordInvalidMessage() {
            const pwdL = this.model.password.trim().length;

            if (!pwdL) {
                return 'Password must be filled';
            } else if (pwdL < 8) {
                return 'Password too weak';
            }

            return null;
        }
    },
    methods: {
        onSubmit() {
            // eslint-disable-next-line
            alert('Submitted!');
        }
    }
};
</script>


<template>
    <section>
        <h2 class="mb-8 display-4">Form</h2>

        <p>Набор вспомогательных элементов для работы с формами</p>

        <h3 class="mt-8">Компоненты <span class="version">0.9.0</span></h3>
        <ul>
            <li><strong>HmForm </strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge></li>
            <li><strong>HmFormDatalist </strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge></li>
            <li><strong>HmFormGroup </strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge></li>
            <li><strong>HmFormInvalidFeedback </strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge></li>
            <li><strong>HmFormText </strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge></li>
            <li><strong>HmFormValidFeedback </strong> <hm-badge variant="primary">Bootstrap Vue</hm-badge> <hm-badge variant="success">No changes</hm-badge></li>
        </ul>

        <h3 class="mt-8">Использование</h3>
        <div>
            <hm-form @submit.prevent>
                <hm-form-group>
                    <hm-input
                        aria-describedby="email-descr"
                        type="email"
                        label="E-mail"
                        v-model="model.email"
                        required />
                    <hm-form-text id="email-descr">Be sure to use valid email address</hm-form-text>
                </hm-form-group>

                <hm-form-group>
                    <hm-input
                        type="password"
                        label="Password"
                        :state="isPasswordValid"
                        v-model="model.password"
                        required />

                    <hm-form-invalid-feedback :state="isPasswordValid">{{passwordInvalidMessage}}</hm-form-invalid-feedback>
                    <hm-form-valid-feedback :state="isPasswordValid">OK!</hm-form-valid-feedback>
                </hm-form-group>

                <hm-btn variant="primary" size="md">Submit!</hm-btn>
            </hm-form>
        </div>

        <hr>

        <div class="code-block">
            <pre v-highlightjs="example"><code class="html"></code></pre>
        </div>

        <h3 class="mt-8">Документация</h3>
        <h4>HmFormGroup:</h4>
        <p><a href="https://bootstrap-vue.org/docs/components/form-group">Bootstrap Vue</a></p>

        <h4>HmForm:</h4>
        <p><a href="https://bootstrap-vue.org/docs/components/form">Bootstrap Vue</a></p>
    </section>
</template>
