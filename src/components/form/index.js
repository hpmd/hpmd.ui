import {
    BForm as HmForm,
    BFormText as HmFormText,
    BFormInvalidFeedback as HmFormInvalidFeedback,
    BFormValidFeedback as HmFormValidFeedback,
    BFormDatalist as HmFormDatalist,
    BFormGroup as HmFormGroup
} from 'bootstrap-vue';
import { pluginFactory } from 'bootstrap-vue/src/utils/plugins';


const FormPlugin = pluginFactory({
    components: {
        HmForm,
        HmFormDatalist,
        HmFormGroup,
        HmFormInvalidFeedback,
        HmFormText,
        HmFormValidFeedback
    }
});

export {
    FormPlugin,
    HmForm,
    HmFormDatalist,
    HmFormGroup,
    HmFormInvalidFeedback,
    HmFormText,
    HmFormValidFeedback
};
