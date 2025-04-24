import {
  MAT_SELECT_CONFIG,
  MAT_SELECT_SCROLL_STRATEGY,
  MAT_SELECT_SCROLL_STRATEGY_PROVIDER,
  MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY,
  MAT_SELECT_TRIGGER,
  MatSelect,
  MatSelectChange,
  MatSelectModule,
  MatSelectTrigger
} from "./chunk-VMKKB7HW.js";
import "./chunk-S7C4PZ5H.js";
import "./chunk-Z2326YKR.js";
import "./chunk-OIZAD6NR.js";
import {
  MatError,
  MatFormField,
  MatHint,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-332UPKVJ.js";
import "./chunk-S62YZQZD.js";
import "./chunk-RL7AAFIV.js";
import "./chunk-Z6EGXW24.js";
import {
  MatOptgroup,
  MatOption
} from "./chunk-HSB2B75R.js";
import "./chunk-EZR44OPX.js";
import "./chunk-JXBYLQRD.js";
import "./chunk-2ZBKODAN.js";
import "./chunk-SN27O7IL.js";
import "./chunk-WMORSEY2.js";
import "./chunk-OVWAZMGZ.js";
import "./chunk-Q7P257OE.js";
import "./chunk-TRES2BGH.js";
import "./chunk-SZS4RJEH.js";
import "./chunk-F5YF3NDX.js";
import "./chunk-2AA2HD2T.js";
import "./chunk-7C2PA3FV.js";
import "./chunk-M3HR6BUY.js";
import "./chunk-6SEQ3SXE.js";
import "./chunk-UDU42JBG.js";
import "./chunk-V3GSGKWE.js";
import "./chunk-QJXA7L2V.js";
import "./chunk-CIGKH54X.js";
import "./chunk-3QK5PMD7.js";
import "./chunk-BB6JFOEG.js";
import "./chunk-KUQEDZOS.js";
import "./chunk-FFWAZHNC.js";
import "./chunk-XMRYT3VQ.js";
import "./chunk-P52WORV2.js";
import "./chunk-ABKFZ3BG.js";
import "./chunk-HJS2BXAE.js";
import "./chunk-FFZIAYYX.js";
import "./chunk-6Q4RANH6.js";
import "./chunk-CXCX2JKZ.js";

// node_modules/@angular/material/fesm2022/select.mjs
var matSelectAnimations = {
  // Represents
  // trigger('transformPanelWrap', [
  //   transition('* => void', query('@transformPanel', [animateChild()], {optional: true})),
  // ])
  /**
   * This animation ensures the select's overlay panel animation (transformPanel) is called when
   * closing the select.
   * This is needed due to https://github.com/angular/angular/issues/23302
   */
  transformPanelWrap: {
    type: 7,
    name: "transformPanelWrap",
    definitions: [{
      type: 1,
      expr: "* => void",
      animation: {
        type: 11,
        selector: "@transformPanel",
        animation: [{
          type: 9,
          options: null
        }],
        options: {
          optional: true
        }
      },
      options: null
    }],
    options: {}
  },
  // Represents
  // trigger('transformPanel', [
  //   state(
  //     'void',
  //     style({
  //       opacity: 0,
  //       transform: 'scale(1, 0.8)',
  //     }),
  //   ),
  //   transition(
  //     'void => showing',
  //     animate(
  //       '120ms cubic-bezier(0, 0, 0.2, 1)',
  //       style({
  //         opacity: 1,
  //         transform: 'scale(1, 1)',
  //       }),
  //     ),
  //   ),
  //   transition('* => void', animate('100ms linear', style({opacity: 0}))),
  // ])
  /** This animation transforms the select's overlay panel on and off the page. */
  transformPanel: {
    type: 7,
    name: "transformPanel",
    definitions: [{
      type: 0,
      name: "void",
      styles: {
        type: 6,
        styles: {
          opacity: 0,
          transform: "scale(1, 0.8)"
        },
        offset: null
      }
    }, {
      type: 1,
      expr: "void => showing",
      animation: {
        type: 4,
        styles: {
          type: 6,
          styles: {
            opacity: 1,
            transform: "scale(1, 1)"
          },
          offset: null
        },
        timings: "120ms cubic-bezier(0, 0, 0.2, 1)"
      },
      options: null
    }, {
      type: 1,
      expr: "* => void",
      animation: {
        type: 4,
        styles: {
          type: 6,
          styles: {
            opacity: 0
          },
          offset: null
        },
        timings: "100ms linear"
      },
      options: null
    }],
    options: {}
  }
};
export {
  MAT_SELECT_CONFIG,
  MAT_SELECT_SCROLL_STRATEGY,
  MAT_SELECT_SCROLL_STRATEGY_PROVIDER,
  MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY,
  MAT_SELECT_TRIGGER,
  MatError,
  MatFormField,
  MatHint,
  MatLabel,
  MatOptgroup,
  MatOption,
  MatPrefix,
  MatSelect,
  MatSelectChange,
  MatSelectModule,
  MatSelectTrigger,
  MatSuffix,
  matSelectAnimations
};
//# sourceMappingURL=@angular_material_select.js.map
