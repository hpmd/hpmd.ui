import { uniMultiply } from '../../icons/unicons';
import { HmIcon } from '../icon';

HmIcon.add(uniMultiply);

const MAX_POSSIBLE_DURATION = 60;
const MIN_POSSIBLE_DURATION = 1;

export default {
    name: 'HmNotification',
    props: {
        id: {
            type: String,
            required: true
        },
        /**
         * Is timer paused
         */
        isPaused: {
            type: Boolean,
            default: false
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
        timeShow: {
            type: Number,
            default: 5,
            validator(val) {
                return val > 0 && val <= MAX_POSSIBLE_DURATION;
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
            timer: null,
            timerStartedTime: null,
            timerRemainTime: null
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
        },
        durationMs() {
            let d = parseFloat(this.timeShow);

            if (d < MIN_POSSIBLE_DURATION) {
                d = MIN_POSSIBLE_DURATION;
            } else if (d > MAX_POSSIBLE_DURATION) {
                d = MAX_POSSIBLE_DURATION;
            }

            return d * 1000;
        }
    },
    methods: {
        runTimer() {
            this.timerStartedTime = Date.now();

            // In case we're call this method 2 or more times in a row
            clearTimeout(this.timer);

            this.timer = setTimeout(this.close, this.timerRemainTime);
        },
        pauseTimer() {
            clearTimeout(this.timer);

            this.timerRemainTime -= Date.now() - this.timerStartedTime;
        },
        /**
         * Emits "close event"
         * We don't pass any data, because toaster will handle it
         */
        close() {
            const { id, placement } = this;
            this.$emit('close', { id, placement });
        }
    },
    mounted() {
        if (this.autoClose) {
            this.timerRemainTime = this.durationMs;
            this.runTimer();
        }
    },
    beforeDestroy() {
        clearTimeout(this.timer);
        this.timer = null;
    },
    watch: {
        isPaused: {
            handler(val, oldVal) {
                if (!this.autoClose || val === oldVal) return;

                if (val) {
                    this.pauseTimer();
                } else {
                    this.runTimer();
                }
            },
            immediate: true
        }
    },
    components: {
        HmIcon
    },
    render(h) {
        const vm = this;
        const isVNode = typeof this.content === 'object';


        function renderProgressBar() {
            if (!vm.autoClose || !vm.showProgressTimer) return null;

            const style = {};

            if (!vm.isHovered) {
                const delay = `${vm.durationMs / 1000}s`;
                style.webkitAnimationPlayState = delay;
                style.animationDuration = delay;
            }

            if (vm.isPaused) {
                style.webkitAnimationPlayState = 'paused';
                style.animationPlayState = 'paused';
            }

            const classes = ['hm-ntf-progress-bar'];

            if (!vm.isHovered && !!vm.timer) {
                classes.push('hm-ntf-progress-bar-active');
            }


            return h(
                'div',
                { staticClass: 'hm-ntf-progress-container' },
                [
                    h(
                        'div',
                        {
                            class: classes,
                            style
                        }
                    )
                ]
            );
        }

        function renderContent() {
            if (isVNode) {
                return h(
                    'div',
                    { staticClass: 'hm-ntf-body' },
                    vm.content
                );
            }

            return h(
                'div',
                {
                    staticClass: 'hm-ntf-body',
                    domProps: { innerHTML: vm.content.toString() }
                }
            );
        }

        const $headingTextEls = [];

        if (this.headingIconName) {
            $headingTextEls.push(h(HmIcon, { props: { name: this.headingIconName } }));
        }

        $headingTextEls.push(h('span', this.title));

        const $heading = h(
            'div',
            { staticClass: 'hm-ntf-heading d-flex align-items-center' },
            [
                h(
                    'div',
                    { staticClass: 'hm-ntf-heading-text' },
                    $headingTextEls
                ),
                h(
                    'button',
                    { on: { click: this.close } },
                    [
                        h(HmIcon, { props: { name: 'uni-multiply' } })
                    ]
                )
            ]
        );

        return h(
            'div',
            {
                class: this._classes,
                attrs: { role: 'alertdialog' }
            },
            [
                $heading,
                renderContent(),
                renderProgressBar()
            ]
        );
    }
};
