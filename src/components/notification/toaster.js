
export default {
    add(toastObject) {

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
            ntfs: {
                topleft: [],
                topright: [],
                topcenter: [],
                bottomleft: [],
                bottomcenter: [],
                bottom: []
            }
        };
    },
    render() {
        const toasterKeys = Object.keys(this.ntfs);

        return (
            <div class="hm-toaster">
                {
                    toasterKeys.map(key => {
                        // tbd
                    })
                }
            </div>
        );
    }
};
