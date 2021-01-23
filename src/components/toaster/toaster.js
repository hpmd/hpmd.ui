import Vue from 'vue';
import HmNotification from './notification';

const places = {
    topleft: {},
    topcenter: {},
    topright: {},
    bottomleft: {},
    bottomcenter: {},
    bottomright: {}
};

let _id = 1;

/**
 * @class Notification
 * @public
 */
class Notification {
    /**
     * @constructor
     * @param {string} id id based on prefix and _id variable
     * @param {Object} options Notification options
     */
    constructor(id, {
        autoClose = true,
        showTime = 5,
        content = '',
        headingIconName = null,
        placement = 'topleft',
        showProgressTimer = false,
        title = null,
        variant = 'default'
    }) {
        /**
         * @type {string}
         */
        this.id = id;

        /**
         * @type {boolean}
         */
        this.autoClose = autoClose;

        /**
         * @type {string|VNode|VNode[]}
         */
        this.content = content;

        /**
         * @type {string?}
         */
        this.headingIconName = headingIconName;

        /**
         * @type {string}
         */
        this.placement = placement;

        /**
         * @type {number}
         */
        this.showTime = showTime;
        /**
         * @type {boolean}
         */
        this.showProgressTimer = showProgressTimer;

        /**
         * @type {string}
         */
        this.title = title;

        /**
         * @type {string}
         */
        this.variant = variant;
    }
}


export default {
    /**
     * Global Method to add new notification
     * @param {Object} options
     * @see {@link ./notification.js}: available props are listed in Notification.props
     * @example
     * // import { HmToaster } from 'hpmd.ui/src/components/toaster'
     * // ...
     * // HmToaster.add(options);
     * //
     * // or if you use this library as a plugin (Vue.use(HpmdUI))
     * // you can do it without import like (inside component/instance)
     * // this.$hmToaster.add(options)
     */
    add(options) {
        // debugger;
        const { placement } = options;

        if (!placement || !(placement in places)) {
            // kinda shitty, but in we want to use it globally
            options.placement = this.props.defaultPlacement.default;
        }

        const notification = new Notification(
            `toast-ntf-${_id++}`,
            options
        );

        Vue.set(places[notification.placement], notification.id, notification);
    },

    name: 'HmToaster',
    props: {
        defaultPlacement: {
            type: String,
            default: 'topright'
        }
    },
    data() {
        return {
            places,
            isPaused: false
        };
    },
    methods: {
        removeNtf({ id, placement }) {
            try {
                this.$delete(places[placement], id);
            } catch (e) {
                console.error(`Can't remove message id:${id} with placement ${placement}`);
            }

            if (this.isPaused && Object.keys(places).some((placeKey) => !Object.keys(places[placeKey]).length)) {
                this.isPaused = false;
            }
        },
        pauseTimers() {
            this.isPaused = true;
        },
        unpauseTimers() {
            this.isPaused = false;
        }
    },
    components: {
        HmNotification
    },
    render() {
        const placeKeys = Object.keys(places);

        return (
            <div class="hm-toaster">
                {placeKeys.map((placeKey) => {
                    const className = `hm-toaster-place hm-toaster-place-${placeKey}`;

                    return (
                        <div
                            class={className}
                            id={`hm-toaster-place-${placeKey}`}
                            onMouseover={this.pauseTimers}
                            onMouseleave={this.unpauseTimers}>
                            {Object.keys(places[placeKey]).map((ntfId) => {
                                const ntf = places[placeKey][ntfId];

                                return (
                                    <HmNotification
                                        isPaused={this.isPaused}
                                        { ... { props: ntf } }
                                        key={ntfId}
                                        onClose={this.removeNtf}
                                    />
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }
};
