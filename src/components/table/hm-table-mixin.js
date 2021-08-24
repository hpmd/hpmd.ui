function requestInterval(callback, delay) {
    const { now } = Date;
    const { requestAnimationFrame } = window;
    let start = now();
    let stop;
    function intervalFunc() {
        if ((now() - start) < delay) {
            start += delay;
            callback();
        }

        if (!stop) {
            requestAnimationFrame(intervalFunc);
        }
    }

    requestAnimationFrame(intervalFunc);

    return {
        clear() {
            stop = 1;
        }
    };
}
/**
 * Strongly bounded to BTable and BTableLite
 * links to native props are marked with _bv prefix (_bv = bootstrap vue)
 */
export default {
    props: {
        showScrollGuides: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            scrollWatcher: null,
            hmTableScrollEl: null,
            hmScrollGuideLeft: false,
            hmScrollGuideRight: false
        };
    },
    computed: {
        hmWrapperClasses() {
            const wrapperClasses = ['table-responsive-wrap'];

            if (!this.showScrollGuides) return wrapperClasses;

            if (this.hmScrollGuideLeft) {
                wrapperClasses.push('table-responsive-guide-left');
            }

            if (this.hmScrollGuideRight) {
                wrapperClasses.push('table-responsive-guide-right');
            }

            return wrapperClasses;
        }
    },
    methods: {
        hmRemoveGuides() {
            this.hmScrollGuideLeft = false;
            this.hmScrollGuideRight = false;
        },
        hmSetScrollGuides() {
            const el = this.hmTableScrollEl;

            if (!el) return;

            const { scrollLeft, scrollWidth, clientWidth } = el;

            if (scrollWidth <= clientWidth) {
                this.hmRemoveGuides();
                return;
            }

            this.hmScrollGuideLeft = scrollLeft >= 5;
            this.hmScrollGuideRight = (scrollWidth - (clientWidth + scrollLeft)) >= 5;
        }
    },
    mounted() {
        this.$watch('responsive', function onRespChange(val, prevVal) {
            if (val && !prevVal) {
                this.hmTableScrollEl = this.$el.querySelector('.table-responsive');

                this.scrollWatcher = requestInterval(this.hmSetScrollGuides, 100);
            } else if (!val && prevVal) {
                try {
                    this.hmRemoveGuides();
                    this.scrollWatcher.clear();
                } catch (e) {
                    // silent
                }
            }
        }, { immediate: true });
    },
    beforeDestroy() {
        try {
            this.scrollWatcher.clear();
        } catch (e) {
            // probably already destroyed
            this.hmRemoveGuides();
        }
    },
    render(h, ctx) {
        const tableWrap = h('div', { class: this.hmWrapperClasses, ref: 'wrap' }, [
            this.constructor.superOptions.render.call(this, h, ctx)
        ]);

        return tableWrap;
    }
};
