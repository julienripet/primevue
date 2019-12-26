import Vue, {VNode} from 'vue';

export declare class Dialog extends Vue {
    header?: any;
    footer?: any;
    visible?: boolean;
    modal?: boolean;
    contentStyle?: string;
    rtl?: boolean;
    closable?: boolean;
    showHeader?: boolean;
    baseZIndex?: number;
    autoZIndex?: boolean;
    ariaCloseLabel?: string;
    $emit(eventName: 'show'): this;
    $emit(eventName: 'hide'): this;
    $slots: {
        '': VNode[];
        header: VNode[];
        footer: VNode[];
    }
}