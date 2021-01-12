import { BCollapse } from 'bootstrap-vue';
import { uniArrowDown } from '@/assets/icons/unicons';
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
    render() {
        return (
            <div class="hm-collapse">
                <div
                    class={this.buttonClasses}
                    onClick={this.toggle}>
                    <span class="hm-collapse-button-icon">
                        <HmIcon name="arrow-down" />
                    </span>
                    <span class="hm-collapse-button-text">{this.buttonText}</span>
                </div>
                <BCollapse visible={this.value}>
                    {this.$slots.default}
                </BCollapse>
            </div>
        );
    },
    components: {
        BCollapse,
        HmIcon
    }
};
