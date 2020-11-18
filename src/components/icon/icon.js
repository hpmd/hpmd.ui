/**
 * @typedef {object} Icon
 * @property {String}   name    Icon name to use in component: <HmIcon name="my-icon" />. Must be unique
 * @property {String}   iconset Decoration style
 * @property {Number}   height  Height of icon in pixels as number (i.e. 420)
 * @property {Number}   width   Width of icon in pixels as number (i.e. 420)
 * @property {string}   content XML-string of svg inner content

 /**
  * Place to hold icons as [name]: Icon
  * @type {Icon{}}
  */
const _iconsMap = {};

export default {
    /**
     * Class method to register new icons (for global usage)
     * duplicate registration will silently fail with no errors and reason to worry about
     * @param {...Icon} Icons separated with a comma
     * @example
     * // registers 3 icons to use
     * HmIcon.add(icon1, icon2, icon3);
     */
    add(...icons) {
        icons.forEach((icon) => {
            try {
                if (icon.name && !_iconsMap[icon.name]) {
                    _iconsMap[icon.name] = icon;
                }
            } catch (e) {
                console.error('Each icon must be an object', e);
            }
        });
    },

    name: 'HmIcon',
    props: {
        fill: {
            type: String,
            default: 'inherit'
        },
        height: {
            type: [String, Number],
            default: '1em'
        },
        iconStyle: {
            type: String,
            default: 'line',
            validator(val) {
                return ['line', 'monochrome'].indexOf(val) !== -1;
            }
        },
        name: {
            type: String,
            default: ''
        },
        width: {
            type: [String, Number],
            default: '1em'
        }
    },
    computed: {
        icon() {
            const _icon = _iconsMap[this.name];

            if (_icon) {
                return _icon;
            }

            console.error(`Icon by name "${this.name}" was not found in registered set`);
            return null;
        }
    },
    render() {
        if (!this.icon) return null;

        const viewBox = `0 0 ${this.icon.width} ${this.icon.height}`;

        return (
            <div
                class="hm-icon"
                aria-role="img">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox={viewBox}
                    width="1"
                    height="1"
                    domPropsInnerHTML={this.icon.content}>
                </svg>
            </div>
        );
    }
};
