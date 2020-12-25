import HmNotification from './notification';

const places = {
    topleft: [],
    topright: [],
    topcenter: [],
    bottomleft: [],
    bottomcenter: [],
    bottom: []
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
        showTimerProgress = false,
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
         * @type {string?}
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
        this.showTimerProgress = showTimerProgress;

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
        const { placement } = options;

        if (!placement || !(placement in places)) {
            options.placement = this.defaultPosition;
        }

        const notification = new Notification(
            `toast-ntf-${_id++}`,
            options
        );

        places[placement].push(notification);
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
        removeNtf(placement, id) {
            const _msgs = places[placement];

            for (let i = 0; i < _msgs.length; i++) {
                if (_msgs[i].id === id) {
                    _msgs.splice(i, 1);
                    break;
                }
            }
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
                    // tbd
                    return (
                        <div
                            className={className}
                            id={`hm-toaster-place-${placeKey}`}>
                            {places[placeKey].map((ntf) => (
                                <HmNotification
                                    { ... { props: ntf } }
                                    onClose={this.removeNtf}
                                />
                            ))}
                        </div>
                    );
                })}
            </div>
        );
    }
};
