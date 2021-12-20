import * as tsx from 'vue-tsx-support';
// import Vue from 'vue';
// import { VNode } from 'vue/types/umd';
import {
    HmToaster as HmToasterOriginal
} from '.';
// import HmNotificationOriginal from './notification';
// import { HmIconEl } from '../icon';


type ToasterProps = {
    defaultPlacement?: 'topleft' | 'topcenter' | 'topright' | 'bottomleft' | 'bottomcenter' | 'bottomright';
}

export const HmToaster = tsx.ofType<ToasterProps>().extendFrom(HmToasterOriginal);
