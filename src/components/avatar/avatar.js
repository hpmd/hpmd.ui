/**
 * @typedef {object} Avatar
 * @property {String}   size       Icon size(xs, sm, md, lg)
 * @property {String}   variant    Applies one of the Bootstrap theme color variants to the component
 * @property {String}   src        Image URL to use for the avatar
 */
import { uniUser } from '@/assets/icons/unicons';
import { HmIcon } from '../icon';

HmIcon.add(uniUser);

export default {
    name: 'HmAvatar',
    props: {
        size: {
            type: String,
            default: 'md'
        },
        variant: {
            type: String,
            default: 'secondary'
        },
        src: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            sizes: ['xs', 'sm', 'md', 'lg']
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
    render() {
        return (
            <div
                staticClass="hm-avatar rounded-circle"
                class={this.containerClasses}>
                <div class="hm-avatar-img">
                    {
                        (this.src && this.src.length) ?
                            (
                                <img
                                    src={this.src}
                                    alt="avatar"/>
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
