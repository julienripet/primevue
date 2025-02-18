import Vue, { Plugin } from 'vue';
import { ConfirmationOptions } from '../confirmationoptions';

declare const plugin: Plugin;
export default plugin;

interface ConfirmationServiceMethods {
    require(options: ConfirmationOptions): any;
    close(): void;
}

declare module 'vue/types/vue' {
    interface Vue {
        $confirm: ConfirmationServiceMethods;
    }
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $confirm: ConfirmationServiceMethods;
    }
}
