/**
 * Class representing a svg icon in HmIcon component
 * @class
 */
export default class HmfIconEl {
    /**
     * Creates icons, mostly needed to auto-generate typescript definitions
     * @constructor
     * @param {object}  props
     * @param {String}   props.name        Icon name to use in component: <HmIcon name="uni-my-icon" />. Must be unique
     * @param {String}   props.content     XML-string of svg inner content
     * @param {Number}   props.height      Height of icon in pixels as number (i.e. 420)
     * @param {Number}   props.width       Width of icon in pixels as number (i.e. 420)
     * @param {String=}  props.iconset=""   Keyword for icons set, reserved
     */
    constructor({ name, content, height, width, iconset }: {
        name: string;
        content: string;
        height: number;
        width: number;
        iconset?: string | undefined;
    });
    name: string;
    content: string;
    height: number;
    width: number;
    iconset: string;
}
