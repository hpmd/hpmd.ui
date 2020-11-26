import Vue, { Component, PluginFunction, PluginObject } from 'vue'

// Plugin definition
export interface BvPlugin extends PluginObject<BvConfigOptions> {
    install: PluginFunction<BvConfigOptions>
}

// Component base definition
export class BvComponent extends Vue {
    // Simple catch-all to allow any prop/type
    [key: string]: any
}

// Generic BvEvent Object
export interface BvEvent {
    readonly type: string
    readonly cancelable: boolean
    readonly nativeEvent: any
    readonly target: any
    readonly relatedTarget: any
    readonly defaultPrevented: boolean
    readonly vueTarget: Vue | Component | null
    readonly componentId: string | null
    preventDefault: () => void
    // Catch all
    [key: string]: any
}

// Components & Plugins
export * from './components'

// Main plugin
export interface HpmdUIPlugin extends BvPlugin {
    setConfig: (config: BvConfigOptions) => void
}

export declare const HpmdUI: HpmdUIPlugin
export default HpmdUI