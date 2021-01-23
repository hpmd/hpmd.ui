import { BAlert } from 'bootstrap-vue';
import BVTransition from 'bootstrap-vue/src/utils/bv-transition';
import { uniExclamationTriangle } from '@/icons/unicons';
import { HmIcon } from '../icon';
import { HmButtonClose } from '../button';

HmIcon.add(uniExclamationTriangle);

/**
 * @extends BAlert
 * @see {@link https://bootstrap-vue.org/docs/components/alert}
 */
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
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <div class="alert-round rounded-circle d-flex align-items-center justify-content-center">
                                    <HmIcon
                                        class="d-flex"
                                        name="uni-exclamation-triangle"
                                    />
                                </div>
                            </div>
                            <div class="col">
                                {this.$slots.default}
                            </div>
                            {this.dismissible && (
                                <div class="col-auto">
                                    <HmButtonClose
                                        aria-label={this.dismissLabel}
                                        onClick={this.dismiss}>
                                        {this.normalizeSlot('dismiss')}
                                    </HmButtonClose>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </BVTransition>
        );
    },
    components: {
        HmIcon,
        HmButtonClose,
        BVTransition
    }
};
