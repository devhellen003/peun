import {
    d as i,
    e as n,
    g as t,
    h as o
} from "./chunk-QRCPN2TO.js";
import {
    l as s
} from "./chunk-PWCKSV3D.js";
var a = class {
    constructor(e) {
        this.openModal = t.open, this.closeModal = t.close, this.subscribeModal = t.subscribe, this.setTheme = o.setThemeConfig, o.setThemeConfig(e), n.setConfig(e), this.initUi()
    }
    initUi() {
        return s(this, null, function*() {
            if (typeof window < "u") {
                yield
                import ("./chunk-NO7XZD62.js");
                let e = document.createElement("wcm-modal");
                document.body.insertAdjacentElement("beforeend", e), i.setIsUiLoaded(!0)
            }
        })
    }
};
export {
    a as WalletConnectModal
};