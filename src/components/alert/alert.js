import {
    BAlert
} from 'bootstrap-vue';
import BVTransition from 'bootstrap-vue/src/utils/bv-transition';
import { uniExclamationTriangle } from '@/assets/icons/unicons';
import { HmIcon } from '../icon';
import { HmButtonClose } from '../button';

HmIcon.add(uniExclamationTriangle);

export default {
    extends: BAlert,
    render() {
        return (
            <BVTransition noFade={!this.fade}>
                {this.localShow && (
                    <div
                        role="alert"
                        aria-live="polite"
                        aria-atomic="true"
                        class={`alert alert-${this.variant}`}>
                        <b-row class="align-items-center">
                            <b-col cols="auto">
                                <div class="alert-round rounded-circle d-flex align-items-center justify-content-center">
                                    <HmIcon
                                        class="d-flex"
                                        name="exclamation-triangle"></HmIcon>
                                </div>
                            </b-col>
                            <b-col>
                                {this.$slots.default}
                            </b-col>
                            {this.dismissible && (
                                <b-col cols="auto">
                                    <HmButtonClose
                                        aria-label={this.dismissLabel}
                                        onClick={this.dismiss}>
                                        {this.normalizeSlot('dismiss')}
                                    </HmButtonClose>
                                </b-col>
                            )}
                        </b-row>
                    </div>
                )}
            </BVTransition>
        );
    },
    components: {
        HmIcon,
        HmButtonClose,
        BVTransition,

    }
};
