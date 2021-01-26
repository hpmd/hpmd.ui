import { BCollapse } from 'bootstrap-vue';
import { uniArrowDown } from '../../icons/unicons';
import { HmIcon } from '../icon';

HmIcon.add(uniArrowDown);

/**
 * @extends BCollapse
 * @see {@link https://bootstrap-vue.org/docs/components/collapse}
 */
/**
 * Easily toggle visibility of almost any content on your pages in a vertically collapsing container
 * @class HmCollapse
 * @example
 *  <hm-collapse button-text="...">
 *    ...
 *  </hm-collapse>
 */
export default {
    name: 'HmCollapse',
    props: {
        /**
         * Button text
         */
        buttonText: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            value: false
        };
    },
    computed: {
        /**
         * Button classes
         */
        buttonClasses() {
            const classes = ['hm-collapse-button', 'mb-2'];

            if (this.value) {
                classes.push('active');
            }

            return classes;
        }
    },
    methods: {
        /**
         * toggle visibility
         * @param {void}
         * @returns {void}
         */
        toggle() {
            this.value = !this.value;
        }
    },
    render(h) {
        const button = h(
            'div',
            {
                class: this.buttonClasses,
                attrs: {
                    'aria-role': 'button',
                    tabindex: '-1',
                },
                on: {
                    click: this.toggle
                }
            },
            [
                h(
                    'span',
                    { staticClass: 'hm-collapse-button-icon' },
                    [
                        h(HmIcon, { props: { name: 'uni-arrow-down' } })
                    ]
                ),
                h(
                    'span',
                    { staticClass: 'hm-collapse-button-text' },
                    this.buttonText
                )
            ]
        );

        return h(
            'div',
            { staticClass: 'hm-collapse' },
            [
                button,
                h(
                    BCollapse,
                    { props: { visible: this.value } },
                    this.$slots.default
                )
            ]
        );
    },
    components: {
        BCollapse,
        HmIcon
    }
};
