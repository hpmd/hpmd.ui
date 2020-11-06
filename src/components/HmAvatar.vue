<script>
import { BAvatar } from 'bootstrap-vue';
import HmIcon from '@/components/HmIcon';
import { uniUser } from '@/assets/icons/unicons';
import { omit } from 'bootstrap-vue/src/utils/object';
import { pluckProps } from 'bootstrap-vue/src/utils/props';
import { isLink } from 'bootstrap-vue/src/utils/router';
import { BButton } from 'bootstrap-vue/src/components/button/button';
import { BLink, props as BLinkProps } from 'bootstrap-vue/src/components/link/link';
import { BIcon } from 'bootstrap-vue/src/icons/icon';

HmIcon.add(uniUser);

// --- Constants ---
const CLASS_NAME = 'b-avatar';

const SIZES = ['xs', 'sm', null, 'lg'];
const iconSizes = {
    xs: 8,
    sm: 12,
    md: 18,
    lg: 24
};

const FONT_SIZE_SCALE = 0.4;
const BADGE_FONT_SIZE_SCALE = FONT_SIZE_SCALE * 0.7;

// --- Props ---
const linkProps = omit(BLinkProps, ['active', 'event', 'routerTag']);

// --- Main component ---
// @vue/component
export default {
    extends: BAvatar,
    computed: {
        fontStyle() {
            const { computedSize: size } = this;
            const fontSize = SIZES.indexOf(size) === -1 ? `calc(${size} * ${FONT_SIZE_SCALE})` : null;

            return fontSize ? { fontSize } : {};
        },
        badgeStyle() {
            const {
                computedSize: size,
                badgeTop,
                badgeLeft,
                badgeOffset
            } = this;
            const offset = badgeOffset || '0px';

            return {
                fontSize: SIZES.indexOf(size) === -1 ? `calc(${size} * ${BADGE_FONT_SIZE_SCALE} )` : null,
                top: badgeTop ? offset : null,
                bottom: badgeTop ? null : offset,
                left: badgeLeft ? offset : null,
                right: badgeLeft ? null : offset
            };
        }
    },
    render(h) {
        const {
            computedVariant: variant,
            disabled,
            computedRounded: rounded,
            icon,
            localSrc: src,
            text,
            fontStyle,
            marginStyle,
            computedSize: size,
            button,
            buttonType: type,
            badge,
            badgeVariant,
            badgeStyle,
            alt,
            hasNormalizedSlot
        } = this;
        const link = !button && isLink(this);
        const tagLink = link ? BLink : 'span';
        const tag = button ? BButton : tagLink;
        const ariaLabel = this.ariaLabel || null;

        let $content = null;

        if (hasNormalizedSlot()) {
            // Default slot overrides props

            $content = (
                <span staticClass="b-avatar-custom">
                    {this.normalizeSlot()}
                </span>
            );
        } else if (src) {
            const $img = (
                <img
                    style={variant ? {} : { width: '100%', height: '100%' }}
                    src={src}
                    alt={alt}
                    onError={this.onImgError}/>
            );
            $content = (
                <span staticClass="b-avatar-img">
                    {$img}
                </span>
            );
        } else if (icon) {
            $content = (
                <BIcon
                    icon={icon}
                    aria-hidden="true"
                    alt={alt}/>
            );
        } else if (text) {
            $content = (
                <span
                    staticClass="b-avatar-text"
                    style={fontStyle}>
                    <span>{text}</span>
                </span>
            );
        } else {
            // Fallback default avatar content
            const fontSize = iconSizes[this.size];

            $content = (
                <HmIcon
                    class="d-flex"
                    style={`font-size: ${fontSize ? `${fontSize}px` : '1em'}`}
                    name="user"></HmIcon>
            );
        }

        let $badge = h();
        const hasBadgeSlot = hasNormalizedSlot('badge');

        if (badge || badge === '' || hasBadgeSlot) {
            const badgeText = badge === true ? '' : badge;
            $badge = (
                <span
                    staticClass="b-avatar-badge"
                    class={badgeVariant ? `badge-${badgeVariant}` : ''}
                    style={badgeStyle}>
                    {hasBadgeSlot ? this.normalizeSlot('badge') : badgeText}
                </span>
            );
        }

        const propsLink = link ? pluckProps(linkProps, this) : {};
        const componentData = {
            staticClass: CLASS_NAME,
            class: {
                // Apply size class
                [`${CLASS_NAME}-${size}`]: size && SIZES.indexOf(size) !== -1,
                // We use badge styles for theme variants when not rendering `BButton`
                [`badge-${variant}`]: !button && variant,
                // Rounding/Square
                rounded: rounded === true,
                [`rounded-${rounded}`]: rounded && rounded !== true,
                // Other classes
                disabled
            },
            style: { ...marginStyle, width: size, height: size },
            attrs: { 'aria-label': ariaLabel || null },
            props: button ? { variant, disabled, type } : propsLink,
            on: button || link ? { click: this.onClick } : {}
        };

        return h(tag, componentData, [$content, $badge]);
    }
};
</script>
