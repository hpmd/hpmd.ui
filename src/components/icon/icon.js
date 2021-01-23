/**
 * @typedef {object} HmfIconEl
 * @property {String}   name    Icon name to use in component: <HmIcon name="uni-my-icon" />. Must be unique
 * @property {String}   iconset Decoration style, reserved
 * @property {Number}   height  Height of icon in pixels as number (i.e. 420)
 * @property {Number}   width   Width of icon in pixels as number (i.e. 420)
 * @property {string}   content XML-string of svg inner content

 /**
  * Place to hold icons as [name]: HmfIconEl instance
  * @type {HmfIconEl{}}
  */
const _iconsMap = {};

/**
 * Component to ease work with SVG icons
 * @class HmIcon
 */
export default {
    /**
     * Class method to register new icons (for global usage)
     * duplicate registration will silently fail with no errors and reason to worry about
     * @param {...HmfIconEl} icons separated with a comma
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
        /**
         * Color to fill icon with
         * Accepts color value or any keyword
         * @default 'currentColor': icon will inherit text color
         */
        fill: {
            type: String,
            default: 'currentColor'
        },
        /**
         * Icon name to target icon in map
         * @see {@link /src/icons/unicons.js} for examples
         */
        name: {
            type: String,
            default: ''
        }
    },
    computed: {
        /**
         * Getter for possible icon in map by passed "name" property
         * @returns {HmfIconEl?} Icon added to map
         */
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
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="hm-icon"
                viewBox={viewBox}
                width="1"
                height="1"
                fill={this.fill}
                domPropsInnerHTML={this.icon.content}>
            </svg>
        );
    }
};
