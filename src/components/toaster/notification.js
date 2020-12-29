import { uniMultiply } from '@/assets/icons/unicons';
import { HmIcon } from '../icon';

HmIcon.add(uniMultiply);

const MAX_POSSIBLE_DELAY = 60;

export default {
    name: 'HmNotification',
    props: {
        id: {
            type: String,
            required: true
        },
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
         * Accepted data:
         * 1. text string
         * 2. VNode object
         * 3. VNode array
         */
        content: {
            type: [String, Object, Array],
            default: ''
        },
        /**
         * How long should notification be shown before being auto-closed
         * in seconds
         * Max possible value is 60
         */
        delay: {
            type: Number,
            default: 5,
            validator(val) {
                return val > 0 && val <= MAX_POSSIBLE_DELAY;
            }
        },
        headingIconName: {
            type: String,
            default: ''
        },
        placement: {
            type: String
        },
        /**
         * Heading / title text
         */
        title: {
            type: String
        },
        /**
         * Show progress bar when auto-close is enabled?
         */
        showProgressTimer: {
            type: Boolean
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
            isHovered: false,
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
            console.log(`${this.id}: set timer`);
            const _delay = (
                parseFloat(this.delay < MAX_POSSIBLE_DELAY ? this.delay : MAX_POSSIBLE_DELAY)
            ) * 1000;

            this.timer = setTimeout(() => {
                console.log(`${this.id}: timer callback is executed`);
                this.close();
            }, _delay);

            console.log(`${this.id}: timer id is: ${this.timer}`);
        },
        /**
         * Emits "close event"
         * We don't pass any data, because toaster will handle it
         */
        close() {
            this.$emit('close', { id: this.id, placement: this.placement });
            console.log(`${this.id}: close method executed`);
        }
    },
    mounted() {
        if (this.autoClose) {
            this.runTimer();
        }
    },
    beforeDestroy() {
        clearTimeout(this.timer);
        this.timer = null;
    },
    components: {
        HmIcon
    },
    render() {
        const vm = this;
        const isVNode = typeof this.content === 'object';

        function renderProgressBar() {
            if (!vm.autoClose || !vm.showProgressTimer) return null;

            const style = {};

            if (!vm.isHovered) {
                style.animationDuration = `${vm.delay}s`;
            }

            const classes = ['hm-ntf-progress-bar'];

            if (!vm.isHovered && !!vm.timer) {
                classes.push('hm-ntf-progress-bar-active');
            }


            return (
                <div class="hm-ntf-progress-container">
                    <div class={classes} style={style}></div>
                </div>
            );
        }

        function renderContent() {
            if (isVNode) {
                return (
                    <div class="hm-ntf-body">
                        {vm.content}
                    </div>
                );
            }

            const innerHTML = {
                domProps: {
                    innerHTML: vm.content.toString()
                }
            };

            return (
                <div
                    class="hm-ntf-body"
                    {...innerHTML}>
                </div>
            );
        }

        return (
            <div
                class={this._classes}
                role="alertdialog">
                <div class="hm-ntf-heading d-flex align-items-center">
                    <div class="hm-ntf-heading-text">
                        {
                            (this.headingIconName && (
                                <HmIcon name={this.headingIconName} />
                            ))
                        }
                        <span>{this.title}</span>
                    </div>
                    <button onClick={this.close}><HmIcon name="multiply" /></button>
                </div>

                {renderContent()}
                {renderProgressBar()}
            </div>
        );
    }
};
