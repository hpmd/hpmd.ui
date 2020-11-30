import { uniMultiply } from '@/assets/icons/unicons';
import { HmIcon } from '../icon';

HmIcon.add(uniMultiply);

export default {
    props: {
        /**
         * Should notification be auto-closed after "delay" time
         * if "false" delay will make no effect and
         * user could only close it manually
         */
        autoClose: {
            type: Boolean,
            default: true
        },
        /**
         * Notification body as string
         * Accept both regular text and html template in string
         */
        content: {
            type: String,
            default: ''
        },
        /**
         * How long should notification be shown before being auto-closed
         * in seconds
         */
        delay: {
            type: Number,
            default: 5
        },
        headingIconName: {
            type: String,
            default: ''
        },
        /**
         * Heading / title text
         */
        title: {
            type: String
        },
        /**
         * Notification color style
         */
        variant: {
            type: String,
            default: 'light'
        }
    },
    data() {
        return {
            timer: null
        };
    },
    computed: {
        _classes() {
            /**
             * Wrapper main class and prefix for child elements
             */
            const prefix = 'hm-ntf';

            const classes = [
                prefix,
                `${prefix}-${this.variant}`
            ];

            return classes;
        }
    },
    methods: {
        runTimer() {

        },
        close() {
            this.$emit('close')
        }
    },
    mounted() {

    },
    components: {
        HmIcon
    },
    render(h) {
        const contentAttrs = {};

        // If content is string we will render it as html content
        // otherwise content block will be empty
        if (typeof this.content === 'string') {
            contentAttrs.innerHTML = this.content;
        }

        return (
            <div
                className={this._classes}
                role="alertdialog">
                <div className="hm-ntf-heading d-flex align-items-center">
                    <div className="hm-ntf-heading-text">
                        {
                            (this.headingIconName && (
                                <HmIcon name={this.headingIconName} />
                            ))
                        }
                        <span>{this.title}</span>
                    </div>
                    <button onClick={this.close}><HmIcon name="multiply" /></button>
                </div>
                <div
                    class="hm-ntf-body"
                    {...contentAttrs}>
                </div>
            </div>
        );
    }
};
