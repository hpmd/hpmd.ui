import Vue from 'vue';
import HmNotification from './notification';

/* const places = {
    topleft: [],
    topright: [],
    topcenter: [],
    bottomleft: [],
    bottomcenter: [],
    bottom: []
}; */

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
        delay = 5,
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
         * @type {number}
         */
        this.delay = delay;

        /**
         * @type {string?}
         */
        this.headingIconName = headingIconName;

        /**
         * @type {string}
         */
        this.placement = placement;

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
     * Method to add new notification
     * @param {Object} options
     * @see {@link ./notification.js} - props
     */
    add(options) {
        // debugger;
        const { placement } = options;

        if (!placement || !(placement in places)) {
            // kinda shitty
            options.placement = this.props.defaultPosition.default;
        }

        const notification = new Notification(
            `toast-ntf-${_id++}`,
            options
        );

        // places[options.placement].push(notification);
        Vue.set(places[notification.placement], notification.id, notification);
    },

    name: 'HmToaster',
    props: {
        defaultPosition: {
            type: String,
            default: 'topright'
        }
    },
    data() {
        return {
            places
        };
    },
    methods: {
        removeNtf({id, placement}) {
            const _msgs = places[placement];

            /* if (!Array.isArray(_msgs)) {
                console.error(`Invalid "placement" value: ${placement}`);
            }

            for (let i = 0; i < _msgs.length; i++) {
                if (_msgs[i].id === id) {
                    console.log('Found', _msgs[i]);
                    _msgs.splice(i, 1);
                    break;
                }
            } */
            if (_msgs[id]) {
                this.$delete(_msgs, id);
            }
        }
    },
    components: {
        HmNotification
    },
    render() {
        const placeKeys = Object.keys(places);

        /**
         * <div
                            class={className}
                            id={`hm-toaster-place-${placeKey}`}>
                            {places[placeKey].map((ntf) => (
                                <HmNotification
                                    { ... { props: ntf } }
                                    onClose={this.removeNtf.bind(this, ntf.id, ntf.placement)}
                                />
                            ))}
                        </div>
         */

        return (
            <div class="hm-toaster">
                {placeKeys.map((placeKey) => {
                    const className = `hm-toaster-place hm-toaster-place-${placeKey}`;

                    return (
                        <div
                            class={className}
                            id={`hm-toaster-place-${placeKey}`}>
                            {Object.keys(places[placeKey]).map((ntfId) => {
                                const ntf = places[placeKey][ntfId];

                                return (
                                    <HmNotification
                                        { ... { props: ntf } }
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
