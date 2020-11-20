import { HmIcon } from '../icon';

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
