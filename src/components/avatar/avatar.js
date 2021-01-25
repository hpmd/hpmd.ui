import { uniUser } from '@/icons/unicons';
import { HmIcon } from '../icon';

HmIcon.add(uniUser);

/**
 * Component to work with user avatars
 * @class HmAvatar
 * @example
 * <hm-avatar
 *    variant="light"
 *    size="lg"
 *    src="..." />
 */
export default {
    name: 'HmAvatar',
    props: {
        /**
         * Sets icon size (xs, sm, md, lg or your custom class)
         */
        size: {
            type: String,
            default: 'md'
        },
        /**
         * Applies one of the Bootstrap theme color variants to the component
         */
        variant: {
            type: String,
            default: 'secondary'
        },
        /**
         * Image URL to use for the avatar
         */
        src: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            isLoaded: false,
            isImgAvailable: true
        };
    },
    computed: {
        placeholderClasses() {
            return `hm-avatar-placeholder badge-${this.variant}`;
        },
        wrapperClasses() {
            return `hm-avatar rounded-circle hm-avatar-${this.size}`;
        }
    },
    methods: {
        handleError(e) {
            this.isImgAvailable = false;

            this.$emit('imageLoadError', e);
        }
    },
    render(h) {
        const imageChild = [];

        const vm = this;

        if (vm.src && vm.isImgAvailable) {
            imageChild.push(
                h(
                    'img',
                    {
                        attrs: {
                            alt: 'avatar',
                            src: vm.src
                        },
                        on: {
                            error: vm.handleError
                        }
                    }
                )
            );
        } else {
            imageChild.push(
                h('div', { class: vm.placeholderClasses }, [
                    h(
                        HmIcon,
                        {
                            class: 'd-flex',
                            props: { name: 'uni-user' }
                        }
                    )
                ])
            );
        }

        return h(
            'div',
            { class: vm.wrapperClasses },
            imageChild
        );
    }
};
