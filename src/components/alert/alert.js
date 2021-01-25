import { BAlert } from 'bootstrap-vue';
import { BVTransition } from 'bootstrap-vue/src/components/transition/bv-transition';
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
    render(h) {
        if (!this.localShow) return null;


        const icon = h('div', { class: 'col-auto' }, [
            h('div', { class: 'alert-round rounded-circle d-flex align-items-center justify-content-center' }, [
                h(HmIcon, {
                    class: 'd-flex',
                    props: {
                        name: 'uni-exclamation-triangle'
                    }
                })
            ])
        ]);

        const content = h('div', { class: 'col' }, this.$slots.default);

        const alertChildren = [
            icon,
            content
        ];

        if (this.dismissible) {
            alertChildren.push(
                h('div', { class: 'col-auto' }, [
                    h(HmButtonClose, {
                        attrs: {
                            'aria-label': this.dismissLabel
                        },
                        on: {
                            click: this.dismiss
                        }
                    }, this.normalizeSlot('dismiss'))
                ])
            );
        }

        const alertContainer = h('div', {
            attrs: {
                role: 'alert',
                'aria-live': 'polite',
                'aria-atomic': 'true'
            },
            class: `alert alert-${this.variant}`
        }, [h('div', { class: 'row align-items-center' }, alertChildren)]);


        return h(
            BVTransition,
            {
                props: {
                    noFade: !this.fade
                }
            },
            [
                alertContainer
            ]
        );
    },
    components: {
        HmIcon,
        HmButtonClose,
        BVTransition
    }
};
