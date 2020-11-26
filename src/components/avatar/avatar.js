import { uniUser } from '@/assets/icons/unicons';
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
         * Sets icon size (xs, sm, md, lg)
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
            sizes: ['xs', 'sm', 'md', 'lg'],
            isImgAvailable: true
        };
    },
    computed: {
        /**
         * Сomputed property to generate a list of classes for the main container
         */
        containerClasses() {
            const isValidSize = this.sizes.indexOf(this.size) > -1;
            return {
                [`hm-avatar-${this.size}`]: isValidSize,
                [`badge-${this.variant}`]: !!this.variant
            };
        }
    },
    methods: {
        handleError() {
            this.isImgAvailable = false;
        }
    },
    render() {
        return (
            <div
                staticClass="hm-avatar rounded-circle"
                class={this.containerClasses}>
                <div class="hm-avatar-img">
                    {
                        (this.src && this.src.length && this.isImgAvailable) ?
                            (
                                <img
                                    src={this.src}
                                    alt="avatar"
                                    onError={this.handleError} />
                            ) :
                            (
                                <HmIcon
                                    class="d-flex"
                                    name="user"></HmIcon>
                            )
                    }
                </div>
            </div>
        );
    }
};
