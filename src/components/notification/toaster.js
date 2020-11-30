const places = {
    topleft: [],
    topright: [],
    topcenter: [],
    bottomleft: [],
    bottomcenter: [],
    bottom: []
};

let _id = 1;

class Notification {
    constructor(id, opts) {
        this.id = id;
        this.title = opts.title || null;
        this.variant = opts.variant || 
    }
}


export default {
    add(options) {
        let placement = toastObject.place;

        if (!placement || !(placement in places)) {
            placement = this.defaultPosition;
        }

        const notification = new Notification(`toast-ntf-${_id++}`, options);

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
    render() {
        const placeKeys = Object.keys(places);

        return (
            <div class="hm-toaster">
                {
                    placeKeys.map(key => {
                        // tbd
                        return (

                        )
                    })
                }
            </div>
        );
    }
};
