const GUIDES_WRAP = 'table-responsive-wrap';
const LEFT_GUIDE_CLASS = 'table-responsive-guide-left';
const RIGHT_GUIDE_CLASS = 'table-responsive-guide-right';
const MIN_SCROLL_GAP = 5;
const SCROLL_CHECK_TIME_MS = 100;

function scrollGuidesDirectiveFn(ctx, el) {
    const ref = el.querySelector('.table-responsive');

    if (ref) {
        const { clientWidth, scrollLeft, scrollWidth } = ref;

        if (scrollWidth <= clientWidth) {
            el.classList.remove(LEFT_GUIDE_CLASS, RIGHT_GUIDE_CLASS);
        } else {
            el.classList.add(GUIDES_WRAP);

            if (scrollLeft >= MIN_SCROLL_GAP) {
                el.classList.add(LEFT_GUIDE_CLASS);
            }

            el.classList[(scrollLeft >= MIN_SCROLL_GAP) ? 'add' : 'remove'](LEFT_GUIDE_CLASS);

            el.classList[((scrollWidth - (clientWidth + scrollLeft)) >= MIN_SCROLL_GAP) ? 'add' : 'remove'](RIGHT_GUIDE_CLASS);
        }
    } else {
        el.classList.remove(GUIDES_WRAP, LEFT_GUIDE_CLASS, RIGHT_GUIDE_CLASS);
    }

    clearTimeout(ctx.scrollWatcher);

    ctx.scrollWatcher = setTimeout(() => {
        scrollGuidesDirectiveFn(ctx, el);
    }, SCROLL_CHECK_TIME_MS);
}

/**
 * Strongly bounded to BTable, BTableLite and BTableSimple
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
    directives: {
        scrollGuides: {
            bind(el, binding, vnode) {
                const ctx = vnode.context;

                ctx.scrollWatcher = setTimeout(() => {
                    scrollGuidesDirectiveFn(ctx, el);
                }, SCROLL_CHECK_TIME_MS);
            },
            unbind(el, binding, vnode) {
                clearTimeout(vnode.context.scrollWatcher);
            }
        }
    },
    beforeDestroy() {
        try {
            clearTimeout(this.scrollWatcher);
        } catch (e) {
            // probably already destroyed by directive
        }
    },
    render(h, ctx) {
        const tableWrapOpts = {
            ref: 'wrap'
        };

        if (this.responsive && this.showScrollGuides) {
            tableWrapOpts.directives = [
                { name: 'scrollGuides' }
            ];
        }

        const tableWrap = h('div', tableWrapOpts, [
            this.constructor.superOptions.render.call(this, h, ctx)
        ]);

        return tableWrap;
    }
};
