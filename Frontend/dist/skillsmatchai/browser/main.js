import {
  MatToolbar,
  MatToolbarModule
} from "./chunk-EYAAGD6F.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-BYBXKYVJ.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-3JPVUUIX.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-3DCVMGSB.js";
import "./chunk-VAADXG4L.js";
import {
  MatFormFieldModule
} from "./chunk-GPGOCT2X.js";
import {
  MatListItem,
  MatListModule,
  MatListSubheaderCssMatStyler,
  MatNavList
} from "./chunk-UJ4FTC47.js";
import "./chunk-56ZLA7LI.js";
import "./chunk-YKUVITQE.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  provideRouter
} from "./chunk-GQ322XUA.js";
import {
  AUTO_STYLE,
  AnimationGroupPlayer,
  AnimationMetadataType,
  NoopAnimationPlayer,
  animate,
  query,
  sequence,
  stagger,
  state,
  style,
  transition,
  trigger,
  ɵPRE_STYLE
} from "./chunk-DCF6DFJ3.js";
import {
  MatBadge,
  MatBadgeModule
} from "./chunk-6X7YSIAV.js";
import {
  Overlay,
  OverlayConfig,
  OverlayModule
} from "./chunk-F5FUW2P7.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-PPMKGYHC.js";
import {
  BasePortalOutlet,
  CdkPortalOutlet,
  ComponentPortal,
  PortalModule,
  TemplatePortal
} from "./chunk-BZ6GK7LR.js";
import {
  CdkScrollable,
  CdkScrollableModule,
  ScrollDispatcher,
  ViewportRuler
} from "./chunk-JCHFAW36.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-TQP5GNH5.js";
import "./chunk-OIZAD6NR.js";
import "./chunk-M6GHQMYD.js";
import {
  BrowserModule,
  DomRendererFactory2,
  HttpClient,
  MatIcon,
  MatIconModule,
  bootstrapApplication,
  provideHttpClient
} from "./chunk-MI43YKTU.js";
import {
  MatError,
  MatFormField,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-2LWENGE2.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-LSJFNPXS.js";
import "./chunk-SZS4RJEH.js";
import {
  ANIMATION_MODULE_TYPE,
  AsyncPipe,
  BehaviorSubject,
  BreakpointObserver,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directionality,
  Directive,
  ESCAPE,
  ElementRef,
  EventEmitter,
  FocusMonitor,
  FocusTrapFactory,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  InteractivityChecker,
  LiveAnnouncer,
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle,
  MatCommonModule,
  MatIconButton,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  NgZone,
  Output,
  Platform,
  QueryList,
  Renderer2,
  RendererFactory2,
  RuntimeError,
  Subject,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  _IdGenerator,
  __objRest,
  __spreadValues,
  afterNextRender,
  afterRender,
  coerceBooleanProperty,
  coerceNumberProperty,
  debounceTime,
  delay,
  filter,
  fromEvent,
  hasModifierKey,
  inject,
  map,
  mapTo,
  merge,
  numberAttribute,
  of,
  performanceMarkFeature,
  provideZoneChangeDetection,
  setClassMetadata,
  startWith,
  take,
  takeUntil,
  tap,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-UOKCMW7L.js";

// node_modules/@angular/animations/fesm2022/util-DIamNgWY.mjs
var LINE_START = "\n - ";
function invalidTimingValue(exp) {
  return new RuntimeError(3e3, ngDevMode && `The provided timing value "${exp}" is invalid.`);
}
function negativeStepValue() {
  return new RuntimeError(3100, ngDevMode && "Duration values below 0 are not allowed for this animation step.");
}
function negativeDelayValue() {
  return new RuntimeError(3101, ngDevMode && "Delay values below 0 are not allowed for this animation step.");
}
function invalidStyleParams(varName) {
  return new RuntimeError(3001, ngDevMode && `Unable to resolve the local animation param ${varName} in the given list of values`);
}
function invalidParamValue(varName) {
  return new RuntimeError(3003, ngDevMode && `Please provide a value for the animation param ${varName}`);
}
function invalidNodeType(nodeType) {
  return new RuntimeError(3004, ngDevMode && `Unable to resolve animation metadata node #${nodeType}`);
}
function invalidCssUnitValue(userProvidedProperty, value) {
  return new RuntimeError(3005, ngDevMode && `Please provide a CSS unit value for ${userProvidedProperty}:${value}`);
}
function invalidTrigger() {
  return new RuntimeError(3006, ngDevMode && "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))");
}
function invalidDefinition() {
  return new RuntimeError(3007, ngDevMode && "only state() and transition() definitions can sit inside of a trigger()");
}
function invalidState(metadataName, missingSubs) {
  return new RuntimeError(3008, ngDevMode && `state("${metadataName}", ...) must define default values for all the following style substitutions: ${missingSubs.join(", ")}`);
}
function invalidStyleValue(value) {
  return new RuntimeError(3002, ngDevMode && `The provided style string value ${value} is not allowed.`);
}
function invalidParallelAnimation(prop, firstStart, firstEnd, secondStart, secondEnd) {
  return new RuntimeError(3010, ngDevMode && `The CSS property "${prop}" that exists between the times of "${firstStart}ms" and "${firstEnd}ms" is also being animated in a parallel animation between the times of "${secondStart}ms" and "${secondEnd}ms"`);
}
function invalidKeyframes() {
  return new RuntimeError(3011, ngDevMode && `keyframes() must be placed inside of a call to animate()`);
}
function invalidOffset() {
  return new RuntimeError(3012, ngDevMode && `Please ensure that all keyframe offsets are between 0 and 1`);
}
function keyframeOffsetsOutOfOrder() {
  return new RuntimeError(3200, ngDevMode && `Please ensure that all keyframe offsets are in order`);
}
function keyframesMissingOffsets() {
  return new RuntimeError(3202, ngDevMode && `Not all style() steps within the declared keyframes() contain offsets`);
}
function invalidStagger() {
  return new RuntimeError(3013, ngDevMode && `stagger() can only be used inside of query()`);
}
function invalidQuery(selector) {
  return new RuntimeError(3014, ngDevMode && `\`query("${selector}")\` returned zero elements. (Use \`query("${selector}", { optional: true })\` if you wish to allow this.)`);
}
function invalidExpression(expr) {
  return new RuntimeError(3015, ngDevMode && `The provided transition expression "${expr}" is not supported`);
}
function invalidTransitionAlias(alias) {
  return new RuntimeError(3016, ngDevMode && `The transition alias value "${alias}" is not supported`);
}
function triggerBuildFailed(name, errors) {
  return new RuntimeError(3404, ngDevMode && `The animation trigger "${name}" has failed to build due to the following errors:
 - ${errors.map((err) => err.message).join("\n - ")}`);
}
function animationFailed(errors) {
  return new RuntimeError(3502, ngDevMode && `Unable to animate due to the following errors:${LINE_START}${errors.map((err) => err.message).join(LINE_START)}`);
}
function registerFailed(errors) {
  return new RuntimeError(3503, ngDevMode && `Unable to build the animation due to the following errors: ${errors.map((err) => err.message).join("\n")}`);
}
function missingOrDestroyedAnimation() {
  return new RuntimeError(3300, ngDevMode && "The requested animation doesn't exist or has already been destroyed");
}
function createAnimationFailed(errors) {
  return new RuntimeError(3504, ngDevMode && `Unable to create the animation due to the following errors:${errors.map((err) => err.message).join("\n")}`);
}
function missingPlayer(id) {
  return new RuntimeError(3301, ngDevMode && `Unable to find the timeline player referenced by ${id}`);
}
function missingTrigger(phase, name) {
  return new RuntimeError(3302, ngDevMode && `Unable to listen on the animation trigger event "${phase}" because the animation trigger "${name}" doesn't exist!`);
}
function missingEvent(name) {
  return new RuntimeError(3303, ngDevMode && `Unable to listen on the animation trigger "${name}" because the provided event is undefined!`);
}
function unsupportedTriggerEvent(phase, name) {
  return new RuntimeError(3400, ngDevMode && `The provided animation trigger event "${phase}" for the animation trigger "${name}" is not supported!`);
}
function unregisteredTrigger(name) {
  return new RuntimeError(3401, ngDevMode && `The provided animation trigger "${name}" has not been registered!`);
}
function triggerTransitionsFailed(errors) {
  return new RuntimeError(3402, ngDevMode && `Unable to process animations due to the following failed trigger transitions
 ${errors.map((err) => err.message).join("\n")}`);
}
function transitionFailed(name, errors) {
  return new RuntimeError(3505, ngDevMode && `@${name} has failed due to:
 ${errors.map((err) => err.message).join("\n- ")}`);
}
var ANIMATABLE_PROP_SET = /* @__PURE__ */ new Set(["-moz-outline-radius", "-moz-outline-radius-bottomleft", "-moz-outline-radius-bottomright", "-moz-outline-radius-topleft", "-moz-outline-radius-topright", "-ms-grid-columns", "-ms-grid-rows", "-webkit-line-clamp", "-webkit-text-fill-color", "-webkit-text-stroke", "-webkit-text-stroke-color", "accent-color", "all", "backdrop-filter", "background", "background-color", "background-position", "background-size", "block-size", "border", "border-block-end", "border-block-end-color", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-width", "border-color", "border-end-end-radius", "border-end-start-radius", "border-image-outset", "border-image-slice", "border-image-width", "border-inline-end", "border-inline-end-color", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-width", "border-left", "border-left-color", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-width", "border-start-end-radius", "border-start-start-radius", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-width", "border-width", "bottom", "box-shadow", "caret-color", "clip", "clip-path", "color", "column-count", "column-gap", "column-rule", "column-rule-color", "column-rule-width", "column-width", "columns", "filter", "flex", "flex-basis", "flex-grow", "flex-shrink", "font", "font-size", "font-size-adjust", "font-stretch", "font-variation-settings", "font-weight", "gap", "grid-column-gap", "grid-gap", "grid-row-gap", "grid-template-columns", "grid-template-rows", "height", "inline-size", "input-security", "inset", "inset-block", "inset-block-end", "inset-block-start", "inset-inline", "inset-inline-end", "inset-inline-start", "left", "letter-spacing", "line-clamp", "line-height", "margin", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "mask", "mask-border", "mask-position", "mask-size", "max-block-size", "max-height", "max-inline-size", "max-lines", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "object-position", "offset", "offset-anchor", "offset-distance", "offset-path", "offset-position", "offset-rotate", "opacity", "order", "outline", "outline-color", "outline-offset", "outline-width", "padding", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "perspective", "perspective-origin", "right", "rotate", "row-gap", "scale", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-coordinate", "scroll-snap-destination", "scrollbar-color", "shape-image-threshold", "shape-margin", "shape-outside", "tab-size", "text-decoration", "text-decoration-color", "text-decoration-thickness", "text-emphasis", "text-emphasis-color", "text-indent", "text-shadow", "text-underline-offset", "top", "transform", "transform-origin", "translate", "vertical-align", "visibility", "width", "word-spacing", "z-index", "zoom"]);
function optimizeGroupPlayer(players) {
  switch (players.length) {
    case 0:
      return new NoopAnimationPlayer();
    case 1:
      return players[0];
    default:
      return new AnimationGroupPlayer(players);
  }
}
function normalizeKeyframes$1(normalizer, keyframes, preStyles = /* @__PURE__ */ new Map(), postStyles = /* @__PURE__ */ new Map()) {
  const errors = [];
  const normalizedKeyframes = [];
  let previousOffset = -1;
  let previousKeyframe = null;
  keyframes.forEach((kf) => {
    const offset = kf.get("offset");
    const isSameOffset = offset == previousOffset;
    const normalizedKeyframe = isSameOffset && previousKeyframe || /* @__PURE__ */ new Map();
    kf.forEach((val, prop) => {
      let normalizedProp = prop;
      let normalizedValue = val;
      if (prop !== "offset") {
        normalizedProp = normalizer.normalizePropertyName(normalizedProp, errors);
        switch (normalizedValue) {
          case \u0275PRE_STYLE:
            normalizedValue = preStyles.get(prop);
            break;
          case AUTO_STYLE:
            normalizedValue = postStyles.get(prop);
            break;
          default:
            normalizedValue = normalizer.normalizeStyleValue(prop, normalizedProp, normalizedValue, errors);
            break;
        }
      }
      normalizedKeyframe.set(normalizedProp, normalizedValue);
    });
    if (!isSameOffset) {
      normalizedKeyframes.push(normalizedKeyframe);
    }
    previousKeyframe = normalizedKeyframe;
    previousOffset = offset;
  });
  if (errors.length) {
    throw animationFailed(errors);
  }
  return normalizedKeyframes;
}
function listenOnPlayer(player, eventName, event, callback) {
  switch (eventName) {
    case "start":
      player.onStart(() => callback(event && copyAnimationEvent(event, "start", player)));
      break;
    case "done":
      player.onDone(() => callback(event && copyAnimationEvent(event, "done", player)));
      break;
    case "destroy":
      player.onDestroy(() => callback(event && copyAnimationEvent(event, "destroy", player)));
      break;
  }
}
function copyAnimationEvent(e, phaseName, player) {
  const totalTime = player.totalTime;
  const disabled = player.disabled ? true : false;
  const event = makeAnimationEvent(e.element, e.triggerName, e.fromState, e.toState, phaseName || e.phaseName, totalTime == void 0 ? e.totalTime : totalTime, disabled);
  const data = e["_data"];
  if (data != null) {
    event["_data"] = data;
  }
  return event;
}
function makeAnimationEvent(element, triggerName, fromState, toState, phaseName = "", totalTime = 0, disabled) {
  return {
    element,
    triggerName,
    fromState,
    toState,
    phaseName,
    totalTime,
    disabled: !!disabled
  };
}
function getOrSetDefaultValue(map2, key, defaultValue) {
  let value = map2.get(key);
  if (!value) {
    map2.set(key, value = defaultValue);
  }
  return value;
}
function parseTimelineCommand(command) {
  const separatorPos = command.indexOf(":");
  const id = command.substring(1, separatorPos);
  const action = command.slice(separatorPos + 1);
  return [id, action];
}
var documentElement = /* @__PURE__ */ (() => typeof document === "undefined" ? null : document.documentElement)();
function getParentElement(element) {
  const parent = element.parentNode || element.host || null;
  if (parent === documentElement) {
    return null;
  }
  return parent;
}
function containsVendorPrefix(prop) {
  return prop.substring(1, 6) == "ebkit";
}
var _CACHED_BODY = null;
var _IS_WEBKIT = false;
function validateStyleProperty(prop) {
  if (!_CACHED_BODY) {
    _CACHED_BODY = getBodyNode() || {};
    _IS_WEBKIT = _CACHED_BODY.style ? "WebkitAppearance" in _CACHED_BODY.style : false;
  }
  let result = true;
  if (_CACHED_BODY.style && !containsVendorPrefix(prop)) {
    result = prop in _CACHED_BODY.style;
    if (!result && _IS_WEBKIT) {
      const camelProp = "Webkit" + prop.charAt(0).toUpperCase() + prop.slice(1);
      result = camelProp in _CACHED_BODY.style;
    }
  }
  return result;
}
function validateWebAnimatableStyleProperty(prop) {
  return ANIMATABLE_PROP_SET.has(prop);
}
function getBodyNode() {
  if (typeof document != "undefined") {
    return document.body;
  }
  return null;
}
function containsElement(elm1, elm2) {
  while (elm2) {
    if (elm2 === elm1) {
      return true;
    }
    elm2 = getParentElement(elm2);
  }
  return false;
}
function invokeQuery(element, selector, multi) {
  if (multi) {
    return Array.from(element.querySelectorAll(selector));
  }
  const elem = element.querySelector(selector);
  return elem ? [elem] : [];
}
var ONE_SECOND = 1e3;
var SUBSTITUTION_EXPR_START = "{{";
var SUBSTITUTION_EXPR_END = "}}";
var ENTER_CLASSNAME = "ng-enter";
var LEAVE_CLASSNAME = "ng-leave";
var NG_TRIGGER_CLASSNAME = "ng-trigger";
var NG_TRIGGER_SELECTOR = ".ng-trigger";
var NG_ANIMATING_CLASSNAME = "ng-animating";
var NG_ANIMATING_SELECTOR = ".ng-animating";
function resolveTimingValue(value) {
  if (typeof value == "number") return value;
  const matches = value.match(/^(-?[\.\d]+)(m?s)/);
  if (!matches || matches.length < 2) return 0;
  return _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
}
function _convertTimeValueToMS(value, unit) {
  switch (unit) {
    case "s":
      return value * ONE_SECOND;
    default:
      return value;
  }
}
function resolveTiming(timings, errors, allowNegativeValues) {
  return timings.hasOwnProperty("duration") ? timings : parseTimeExpression(timings, errors, allowNegativeValues);
}
function parseTimeExpression(exp, errors, allowNegativeValues) {
  const regex = /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;
  let duration;
  let delay2 = 0;
  let easing = "";
  if (typeof exp === "string") {
    const matches = exp.match(regex);
    if (matches === null) {
      errors.push(invalidTimingValue(exp));
      return {
        duration: 0,
        delay: 0,
        easing: ""
      };
    }
    duration = _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
    const delayMatch = matches[3];
    if (delayMatch != null) {
      delay2 = _convertTimeValueToMS(parseFloat(delayMatch), matches[4]);
    }
    const easingVal = matches[5];
    if (easingVal) {
      easing = easingVal;
    }
  } else {
    duration = exp;
  }
  if (!allowNegativeValues) {
    let containsErrors = false;
    let startIndex = errors.length;
    if (duration < 0) {
      errors.push(negativeStepValue());
      containsErrors = true;
    }
    if (delay2 < 0) {
      errors.push(negativeDelayValue());
      containsErrors = true;
    }
    if (containsErrors) {
      errors.splice(startIndex, 0, invalidTimingValue(exp));
    }
  }
  return {
    duration,
    delay: delay2,
    easing
  };
}
function normalizeKeyframes(keyframes) {
  if (!keyframes.length) {
    return [];
  }
  if (keyframes[0] instanceof Map) {
    return keyframes;
  }
  return keyframes.map((kf) => new Map(Object.entries(kf)));
}
function setStyles(element, styles, formerStyles) {
  styles.forEach((val, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    if (formerStyles && !formerStyles.has(prop)) {
      formerStyles.set(prop, element.style[camelProp]);
    }
    element.style[camelProp] = val;
  });
}
function eraseStyles(element, styles) {
  styles.forEach((_, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    element.style[camelProp] = "";
  });
}
function normalizeAnimationEntry(steps) {
  if (Array.isArray(steps)) {
    if (steps.length == 1) return steps[0];
    return sequence(steps);
  }
  return steps;
}
function validateStyleParams(value, options, errors) {
  const params = options.params || {};
  const matches = extractStyleParams(value);
  if (matches.length) {
    matches.forEach((varName) => {
      if (!params.hasOwnProperty(varName)) {
        errors.push(invalidStyleParams(varName));
      }
    });
  }
}
var PARAM_REGEX = /* @__PURE__ */ new RegExp(`${SUBSTITUTION_EXPR_START}\\s*(.+?)\\s*${SUBSTITUTION_EXPR_END}`, "g");
function extractStyleParams(value) {
  let params = [];
  if (typeof value === "string") {
    let match;
    while (match = PARAM_REGEX.exec(value)) {
      params.push(match[1]);
    }
    PARAM_REGEX.lastIndex = 0;
  }
  return params;
}
function interpolateParams(value, params, errors) {
  const original = `${value}`;
  const str = original.replace(PARAM_REGEX, (_, varName) => {
    let localVal = params[varName];
    if (localVal == null) {
      errors.push(invalidParamValue(varName));
      localVal = "";
    }
    return localVal.toString();
  });
  return str == original ? value : str;
}
var DASH_CASE_REGEXP = /-+([a-z0-9])/g;
function dashCaseToCamelCase(input) {
  return input.replace(DASH_CASE_REGEXP, (...m) => m[1].toUpperCase());
}
function camelCaseToDashCase(input) {
  return input.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function allowPreviousPlayerStylesMerge(duration, delay2) {
  return duration === 0 || delay2 === 0;
}
function balancePreviousStylesIntoKeyframes(element, keyframes, previousStyles) {
  if (previousStyles.size && keyframes.length) {
    let startingKeyframe = keyframes[0];
    let missingStyleProps = [];
    previousStyles.forEach((val, prop) => {
      if (!startingKeyframe.has(prop)) {
        missingStyleProps.push(prop);
      }
      startingKeyframe.set(prop, val);
    });
    if (missingStyleProps.length) {
      for (let i = 1; i < keyframes.length; i++) {
        let kf = keyframes[i];
        missingStyleProps.forEach((prop) => kf.set(prop, computeStyle(element, prop)));
      }
    }
  }
  return keyframes;
}
function visitDslNode(visitor, node, context) {
  switch (node.type) {
    case AnimationMetadataType.Trigger:
      return visitor.visitTrigger(node, context);
    case AnimationMetadataType.State:
      return visitor.visitState(node, context);
    case AnimationMetadataType.Transition:
      return visitor.visitTransition(node, context);
    case AnimationMetadataType.Sequence:
      return visitor.visitSequence(node, context);
    case AnimationMetadataType.Group:
      return visitor.visitGroup(node, context);
    case AnimationMetadataType.Animate:
      return visitor.visitAnimate(node, context);
    case AnimationMetadataType.Keyframes:
      return visitor.visitKeyframes(node, context);
    case AnimationMetadataType.Style:
      return visitor.visitStyle(node, context);
    case AnimationMetadataType.Reference:
      return visitor.visitReference(node, context);
    case AnimationMetadataType.AnimateChild:
      return visitor.visitAnimateChild(node, context);
    case AnimationMetadataType.AnimateRef:
      return visitor.visitAnimateRef(node, context);
    case AnimationMetadataType.Query:
      return visitor.visitQuery(node, context);
    case AnimationMetadataType.Stagger:
      return visitor.visitStagger(node, context);
    default:
      throw invalidNodeType(node.type);
  }
}
function computeStyle(element, prop) {
  return window.getComputedStyle(element)[prop];
}

// node_modules/@angular/animations/fesm2022/browser.mjs
var NoopAnimationDriver = class _NoopAnimationDriver {
  /**
   * @returns Whether `prop` is a valid CSS property
   */
  validateStyleProperty(prop) {
    return validateStyleProperty(prop);
  }
  /**
   *
   * @returns Whether elm1 contains elm2.
   */
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  /**
   * @returns Rhe parent of the given element or `null` if the element is the `document`
   */
  getParentElement(element) {
    return getParentElement(element);
  }
  /**
   * @returns The result of the query selector on the element. The array will contain up to 1 item
   *     if `multi` is  `false`.
   */
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  /**
   * @returns The `defaultValue` or empty string
   */
  computeStyle(element, prop, defaultValue) {
    return defaultValue || "";
  }
  /**
   * @returns An `NoopAnimationPlayer`
   */
  animate(element, keyframes, duration, delay2, easing, previousPlayers = [], scrubberAccessRequested) {
    return new NoopAnimationPlayer(duration, delay2);
  }
  static \u0275fac = function NoopAnimationDriver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoopAnimationDriver)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NoopAnimationDriver,
    factory: _NoopAnimationDriver.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationDriver, [{
    type: Injectable
  }], null, null);
})();
var AnimationDriver = class {
  /**
   * @deprecated Use the NoopAnimationDriver class.
   */
  static NOOP = new NoopAnimationDriver();
};
var AnimationStyleNormalizer = class {
};
var DIMENSIONAL_PROP_SET = /* @__PURE__ */ new Set(["width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight", "left", "top", "bottom", "right", "fontSize", "outlineWidth", "outlineOffset", "paddingTop", "paddingLeft", "paddingBottom", "paddingRight", "marginTop", "marginLeft", "marginBottom", "marginRight", "borderRadius", "borderWidth", "borderTopWidth", "borderLeftWidth", "borderRightWidth", "borderBottomWidth", "textIndent", "perspective"]);
var WebAnimationsStyleNormalizer = class extends AnimationStyleNormalizer {
  normalizePropertyName(propertyName, errors) {
    return dashCaseToCamelCase(propertyName);
  }
  normalizeStyleValue(userProvidedProperty, normalizedProperty, value, errors) {
    let unit = "";
    const strVal = value.toString().trim();
    if (DIMENSIONAL_PROP_SET.has(normalizedProperty) && value !== 0 && value !== "0") {
      if (typeof value === "number") {
        unit = "px";
      } else {
        const valAndSuffixMatch = value.match(/^[+-]?[\d\.]+([a-z]*)$/);
        if (valAndSuffixMatch && valAndSuffixMatch[1].length == 0) {
          errors.push(invalidCssUnitValue(userProvidedProperty, value));
        }
      }
    }
    return strVal + unit;
  }
};
function createListOfWarnings(warnings) {
  const LINE_START2 = "\n - ";
  return `${LINE_START2}${warnings.filter(Boolean).map((warning) => warning).join(LINE_START2)}`;
}
function warnTriggerBuild(name, warnings) {
  console.warn(`The animation trigger "${name}" has built with the following warnings:${createListOfWarnings(warnings)}`);
}
function warnRegister(warnings) {
  console.warn(`Animation built with the following warnings:${createListOfWarnings(warnings)}`);
}
function pushUnrecognizedPropertiesWarning(warnings, props) {
  if (props.length) {
    warnings.push(`The following provided properties are not recognized: ${props.join(", ")}`);
  }
}
var ANY_STATE = "*";
function parseTransitionExpr(transitionValue, errors) {
  const expressions = [];
  if (typeof transitionValue == "string") {
    transitionValue.split(/\s*,\s*/).forEach((str) => parseInnerTransitionStr(str, expressions, errors));
  } else {
    expressions.push(transitionValue);
  }
  return expressions;
}
function parseInnerTransitionStr(eventStr, expressions, errors) {
  if (eventStr[0] == ":") {
    const result = parseAnimationAlias(eventStr, errors);
    if (typeof result == "function") {
      expressions.push(result);
      return;
    }
    eventStr = result;
  }
  const match = eventStr.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
  if (match == null || match.length < 4) {
    errors.push(invalidExpression(eventStr));
    return expressions;
  }
  const fromState = match[1];
  const separator = match[2];
  const toState = match[3];
  expressions.push(makeLambdaFromStates(fromState, toState));
  const isFullAnyStateExpr = fromState == ANY_STATE && toState == ANY_STATE;
  if (separator[0] == "<" && !isFullAnyStateExpr) {
    expressions.push(makeLambdaFromStates(toState, fromState));
  }
  return;
}
function parseAnimationAlias(alias, errors) {
  switch (alias) {
    case ":enter":
      return "void => *";
    case ":leave":
      return "* => void";
    case ":increment":
      return (fromState, toState) => parseFloat(toState) > parseFloat(fromState);
    case ":decrement":
      return (fromState, toState) => parseFloat(toState) < parseFloat(fromState);
    default:
      errors.push(invalidTransitionAlias(alias));
      return "* => *";
  }
}
var TRUE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["true", "1"]);
var FALSE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["false", "0"]);
function makeLambdaFromStates(lhs, rhs) {
  const LHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(lhs) || FALSE_BOOLEAN_VALUES.has(lhs);
  const RHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(rhs) || FALSE_BOOLEAN_VALUES.has(rhs);
  return (fromState, toState) => {
    let lhsMatch = lhs == ANY_STATE || lhs == fromState;
    let rhsMatch = rhs == ANY_STATE || rhs == toState;
    if (!lhsMatch && LHS_MATCH_BOOLEAN && typeof fromState === "boolean") {
      lhsMatch = fromState ? TRUE_BOOLEAN_VALUES.has(lhs) : FALSE_BOOLEAN_VALUES.has(lhs);
    }
    if (!rhsMatch && RHS_MATCH_BOOLEAN && typeof toState === "boolean") {
      rhsMatch = toState ? TRUE_BOOLEAN_VALUES.has(rhs) : FALSE_BOOLEAN_VALUES.has(rhs);
    }
    return lhsMatch && rhsMatch;
  };
}
var SELF_TOKEN = ":self";
var SELF_TOKEN_REGEX = /* @__PURE__ */ new RegExp(`s*${SELF_TOKEN}s*,?`, "g");
function buildAnimationAst(driver, metadata, errors, warnings) {
  return new AnimationAstBuilderVisitor(driver).build(metadata, errors, warnings);
}
var ROOT_SELECTOR = "";
var AnimationAstBuilderVisitor = class {
  _driver;
  constructor(_driver) {
    this._driver = _driver;
  }
  build(metadata, errors, warnings) {
    const context = new AnimationAstBuilderContext(errors);
    this._resetContextStyleTimingState(context);
    const ast = visitDslNode(this, normalizeAnimationEntry(metadata), context);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (context.unsupportedCSSPropertiesFound.size) {
        pushUnrecognizedPropertiesWarning(warnings, [...context.unsupportedCSSPropertiesFound.keys()]);
      }
    }
    return ast;
  }
  _resetContextStyleTimingState(context) {
    context.currentQuerySelector = ROOT_SELECTOR;
    context.collectedStyles = /* @__PURE__ */ new Map();
    context.collectedStyles.set(ROOT_SELECTOR, /* @__PURE__ */ new Map());
    context.currentTime = 0;
  }
  visitTrigger(metadata, context) {
    let queryCount = context.queryCount = 0;
    let depCount = context.depCount = 0;
    const states = [];
    const transitions = [];
    if (metadata.name.charAt(0) == "@") {
      context.errors.push(invalidTrigger());
    }
    metadata.definitions.forEach((def) => {
      this._resetContextStyleTimingState(context);
      if (def.type == AnimationMetadataType.State) {
        const stateDef = def;
        const name = stateDef.name;
        name.toString().split(/\s*,\s*/).forEach((n) => {
          stateDef.name = n;
          states.push(this.visitState(stateDef, context));
        });
        stateDef.name = name;
      } else if (def.type == AnimationMetadataType.Transition) {
        const transition2 = this.visitTransition(def, context);
        queryCount += transition2.queryCount;
        depCount += transition2.depCount;
        transitions.push(transition2);
      } else {
        context.errors.push(invalidDefinition());
      }
    });
    return {
      type: AnimationMetadataType.Trigger,
      name: metadata.name,
      states,
      transitions,
      queryCount,
      depCount,
      options: null
    };
  }
  visitState(metadata, context) {
    const styleAst = this.visitStyle(metadata.styles, context);
    const astParams = metadata.options && metadata.options.params || null;
    if (styleAst.containsDynamicStyles) {
      const missingSubs = /* @__PURE__ */ new Set();
      const params = astParams || {};
      styleAst.styles.forEach((style2) => {
        if (style2 instanceof Map) {
          style2.forEach((value) => {
            extractStyleParams(value).forEach((sub) => {
              if (!params.hasOwnProperty(sub)) {
                missingSubs.add(sub);
              }
            });
          });
        }
      });
      if (missingSubs.size) {
        context.errors.push(invalidState(metadata.name, [...missingSubs.values()]));
      }
    }
    return {
      type: AnimationMetadataType.State,
      name: metadata.name,
      style: styleAst,
      options: astParams ? {
        params: astParams
      } : null
    };
  }
  visitTransition(metadata, context) {
    context.queryCount = 0;
    context.depCount = 0;
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    const matchers = parseTransitionExpr(metadata.expr, context.errors);
    return {
      type: AnimationMetadataType.Transition,
      matchers,
      animation,
      queryCount: context.queryCount,
      depCount: context.depCount,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitSequence(metadata, context) {
    return {
      type: AnimationMetadataType.Sequence,
      steps: metadata.steps.map((s) => visitDslNode(this, s, context)),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitGroup(metadata, context) {
    const currentTime = context.currentTime;
    let furthestTime = 0;
    const steps = metadata.steps.map((step) => {
      context.currentTime = currentTime;
      const innerAst = visitDslNode(this, step, context);
      furthestTime = Math.max(furthestTime, context.currentTime);
      return innerAst;
    });
    context.currentTime = furthestTime;
    return {
      type: AnimationMetadataType.Group,
      steps,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimate(metadata, context) {
    const timingAst = constructTimingAst(metadata.timings, context.errors);
    context.currentAnimateTimings = timingAst;
    let styleAst;
    let styleMetadata = metadata.styles ? metadata.styles : style({});
    if (styleMetadata.type == AnimationMetadataType.Keyframes) {
      styleAst = this.visitKeyframes(styleMetadata, context);
    } else {
      let styleMetadata2 = metadata.styles;
      let isEmpty = false;
      if (!styleMetadata2) {
        isEmpty = true;
        const newStyleData = {};
        if (timingAst.easing) {
          newStyleData["easing"] = timingAst.easing;
        }
        styleMetadata2 = style(newStyleData);
      }
      context.currentTime += timingAst.duration + timingAst.delay;
      const _styleAst = this.visitStyle(styleMetadata2, context);
      _styleAst.isEmptyStep = isEmpty;
      styleAst = _styleAst;
    }
    context.currentAnimateTimings = null;
    return {
      type: AnimationMetadataType.Animate,
      timings: timingAst,
      style: styleAst,
      options: null
    };
  }
  visitStyle(metadata, context) {
    const ast = this._makeStyleAst(metadata, context);
    this._validateStyleAst(ast, context);
    return ast;
  }
  _makeStyleAst(metadata, context) {
    const styles = [];
    const metadataStyles = Array.isArray(metadata.styles) ? metadata.styles : [metadata.styles];
    for (let styleTuple of metadataStyles) {
      if (typeof styleTuple === "string") {
        if (styleTuple === AUTO_STYLE) {
          styles.push(styleTuple);
        } else {
          context.errors.push(invalidStyleValue(styleTuple));
        }
      } else {
        styles.push(new Map(Object.entries(styleTuple)));
      }
    }
    let containsDynamicStyles = false;
    let collectedEasing = null;
    styles.forEach((styleData) => {
      if (styleData instanceof Map) {
        if (styleData.has("easing")) {
          collectedEasing = styleData.get("easing");
          styleData.delete("easing");
        }
        if (!containsDynamicStyles) {
          for (let value of styleData.values()) {
            if (value.toString().indexOf(SUBSTITUTION_EXPR_START) >= 0) {
              containsDynamicStyles = true;
              break;
            }
          }
        }
      }
    });
    return {
      type: AnimationMetadataType.Style,
      styles,
      easing: collectedEasing,
      offset: metadata.offset,
      containsDynamicStyles,
      options: null
    };
  }
  _validateStyleAst(ast, context) {
    const timings = context.currentAnimateTimings;
    let endTime = context.currentTime;
    let startTime = context.currentTime;
    if (timings && startTime > 0) {
      startTime -= timings.duration + timings.delay;
    }
    ast.styles.forEach((tuple) => {
      if (typeof tuple === "string") return;
      tuple.forEach((value, prop) => {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (!this._driver.validateStyleProperty(prop)) {
            tuple.delete(prop);
            context.unsupportedCSSPropertiesFound.add(prop);
            return;
          }
        }
        const collectedStyles = context.collectedStyles.get(context.currentQuerySelector);
        const collectedEntry = collectedStyles.get(prop);
        let updateCollectedStyle = true;
        if (collectedEntry) {
          if (startTime != endTime && startTime >= collectedEntry.startTime && endTime <= collectedEntry.endTime) {
            context.errors.push(invalidParallelAnimation(prop, collectedEntry.startTime, collectedEntry.endTime, startTime, endTime));
            updateCollectedStyle = false;
          }
          startTime = collectedEntry.startTime;
        }
        if (updateCollectedStyle) {
          collectedStyles.set(prop, {
            startTime,
            endTime
          });
        }
        if (context.options) {
          validateStyleParams(value, context.options, context.errors);
        }
      });
    });
  }
  visitKeyframes(metadata, context) {
    const ast = {
      type: AnimationMetadataType.Keyframes,
      styles: [],
      options: null
    };
    if (!context.currentAnimateTimings) {
      context.errors.push(invalidKeyframes());
      return ast;
    }
    const MAX_KEYFRAME_OFFSET = 1;
    let totalKeyframesWithOffsets = 0;
    const offsets = [];
    let offsetsOutOfOrder = false;
    let keyframesOutOfRange = false;
    let previousOffset = 0;
    const keyframes = metadata.steps.map((styles) => {
      const style2 = this._makeStyleAst(styles, context);
      let offsetVal = style2.offset != null ? style2.offset : consumeOffset(style2.styles);
      let offset = 0;
      if (offsetVal != null) {
        totalKeyframesWithOffsets++;
        offset = style2.offset = offsetVal;
      }
      keyframesOutOfRange = keyframesOutOfRange || offset < 0 || offset > 1;
      offsetsOutOfOrder = offsetsOutOfOrder || offset < previousOffset;
      previousOffset = offset;
      offsets.push(offset);
      return style2;
    });
    if (keyframesOutOfRange) {
      context.errors.push(invalidOffset());
    }
    if (offsetsOutOfOrder) {
      context.errors.push(keyframeOffsetsOutOfOrder());
    }
    const length = metadata.steps.length;
    let generatedOffset = 0;
    if (totalKeyframesWithOffsets > 0 && totalKeyframesWithOffsets < length) {
      context.errors.push(keyframesMissingOffsets());
    } else if (totalKeyframesWithOffsets == 0) {
      generatedOffset = MAX_KEYFRAME_OFFSET / (length - 1);
    }
    const limit = length - 1;
    const currentTime = context.currentTime;
    const currentAnimateTimings = context.currentAnimateTimings;
    const animateDuration = currentAnimateTimings.duration;
    keyframes.forEach((kf, i) => {
      const offset = generatedOffset > 0 ? i == limit ? 1 : generatedOffset * i : offsets[i];
      const durationUpToThisFrame = offset * animateDuration;
      context.currentTime = currentTime + currentAnimateTimings.delay + durationUpToThisFrame;
      currentAnimateTimings.duration = durationUpToThisFrame;
      this._validateStyleAst(kf, context);
      kf.offset = offset;
      ast.styles.push(kf);
    });
    return ast;
  }
  visitReference(metadata, context) {
    return {
      type: AnimationMetadataType.Reference,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateChild(metadata, context) {
    context.depCount++;
    return {
      type: AnimationMetadataType.AnimateChild,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateRef(metadata, context) {
    return {
      type: AnimationMetadataType.AnimateRef,
      animation: this.visitReference(metadata.animation, context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitQuery(metadata, context) {
    const parentSelector = context.currentQuerySelector;
    const options = metadata.options || {};
    context.queryCount++;
    context.currentQuery = metadata;
    const [selector, includeSelf] = normalizeSelector(metadata.selector);
    context.currentQuerySelector = parentSelector.length ? parentSelector + " " + selector : selector;
    getOrSetDefaultValue(context.collectedStyles, context.currentQuerySelector, /* @__PURE__ */ new Map());
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    context.currentQuery = null;
    context.currentQuerySelector = parentSelector;
    return {
      type: AnimationMetadataType.Query,
      selector,
      limit: options.limit || 0,
      optional: !!options.optional,
      includeSelf,
      animation,
      originalSelector: metadata.selector,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitStagger(metadata, context) {
    if (!context.currentQuery) {
      context.errors.push(invalidStagger());
    }
    const timings = metadata.timings === "full" ? {
      duration: 0,
      delay: 0,
      easing: "full"
    } : resolveTiming(metadata.timings, context.errors, true);
    return {
      type: AnimationMetadataType.Stagger,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      timings,
      options: null
    };
  }
};
function normalizeSelector(selector) {
  const hasAmpersand = selector.split(/\s*,\s*/).find((token) => token == SELF_TOKEN) ? true : false;
  if (hasAmpersand) {
    selector = selector.replace(SELF_TOKEN_REGEX, "");
  }
  selector = selector.replace(/@\*/g, NG_TRIGGER_SELECTOR).replace(/@\w+/g, (match) => NG_TRIGGER_SELECTOR + "-" + match.slice(1)).replace(/:animating/g, NG_ANIMATING_SELECTOR);
  return [selector, hasAmpersand];
}
function normalizeParams(obj) {
  return obj ? __spreadValues({}, obj) : null;
}
var AnimationAstBuilderContext = class {
  errors;
  queryCount = 0;
  depCount = 0;
  currentTransition = null;
  currentQuery = null;
  currentQuerySelector = null;
  currentAnimateTimings = null;
  currentTime = 0;
  collectedStyles = /* @__PURE__ */ new Map();
  options = null;
  unsupportedCSSPropertiesFound = /* @__PURE__ */ new Set();
  constructor(errors) {
    this.errors = errors;
  }
};
function consumeOffset(styles) {
  if (typeof styles == "string") return null;
  let offset = null;
  if (Array.isArray(styles)) {
    styles.forEach((styleTuple) => {
      if (styleTuple instanceof Map && styleTuple.has("offset")) {
        const obj = styleTuple;
        offset = parseFloat(obj.get("offset"));
        obj.delete("offset");
      }
    });
  } else if (styles instanceof Map && styles.has("offset")) {
    const obj = styles;
    offset = parseFloat(obj.get("offset"));
    obj.delete("offset");
  }
  return offset;
}
function constructTimingAst(value, errors) {
  if (value.hasOwnProperty("duration")) {
    return value;
  }
  if (typeof value == "number") {
    const duration = resolveTiming(value, errors).duration;
    return makeTimingAst(duration, 0, "");
  }
  const strValue = value;
  const isDynamic = strValue.split(/\s+/).some((v) => v.charAt(0) == "{" && v.charAt(1) == "{");
  if (isDynamic) {
    const ast = makeTimingAst(0, 0, "");
    ast.dynamic = true;
    ast.strValue = strValue;
    return ast;
  }
  const timings = resolveTiming(strValue, errors);
  return makeTimingAst(timings.duration, timings.delay, timings.easing);
}
function normalizeAnimationOptions(options) {
  if (options) {
    options = __spreadValues({}, options);
    if (options["params"]) {
      options["params"] = normalizeParams(options["params"]);
    }
  } else {
    options = {};
  }
  return options;
}
function makeTimingAst(duration, delay2, easing) {
  return {
    duration,
    delay: delay2,
    easing
  };
}
function createTimelineInstruction(element, keyframes, preStyleProps, postStyleProps, duration, delay2, easing = null, subTimeline = false) {
  return {
    type: 1,
    element,
    keyframes,
    preStyleProps,
    postStyleProps,
    duration,
    delay: delay2,
    totalTime: duration + delay2,
    easing,
    subTimeline
  };
}
var ElementInstructionMap = class {
  _map = /* @__PURE__ */ new Map();
  get(element) {
    return this._map.get(element) || [];
  }
  append(element, instructions) {
    let existingInstructions = this._map.get(element);
    if (!existingInstructions) {
      this._map.set(element, existingInstructions = []);
    }
    existingInstructions.push(...instructions);
  }
  has(element) {
    return this._map.has(element);
  }
  clear() {
    this._map.clear();
  }
};
var ONE_FRAME_IN_MILLISECONDS = 1;
var ENTER_TOKEN = ":enter";
var ENTER_TOKEN_REGEX = /* @__PURE__ */ new RegExp(ENTER_TOKEN, "g");
var LEAVE_TOKEN = ":leave";
var LEAVE_TOKEN_REGEX = /* @__PURE__ */ new RegExp(LEAVE_TOKEN, "g");
function buildAnimationTimelines(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles = /* @__PURE__ */ new Map(), finalStyles = /* @__PURE__ */ new Map(), options, subInstructions, errors = []) {
  return new AnimationTimelineBuilderVisitor().buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors);
}
var AnimationTimelineBuilderVisitor = class {
  buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors = []) {
    subInstructions = subInstructions || new ElementInstructionMap();
    const context = new AnimationTimelineContext(driver, rootElement, subInstructions, enterClassName, leaveClassName, errors, []);
    context.options = options;
    const delay2 = options.delay ? resolveTimingValue(options.delay) : 0;
    context.currentTimeline.delayNextStep(delay2);
    context.currentTimeline.setStyles([startingStyles], null, context.errors, options);
    visitDslNode(this, ast, context);
    const timelines = context.timelines.filter((timeline) => timeline.containsAnimation());
    if (timelines.length && finalStyles.size) {
      let lastRootTimeline;
      for (let i = timelines.length - 1; i >= 0; i--) {
        const timeline = timelines[i];
        if (timeline.element === rootElement) {
          lastRootTimeline = timeline;
          break;
        }
      }
      if (lastRootTimeline && !lastRootTimeline.allowOnlyTimelineStyles()) {
        lastRootTimeline.setStyles([finalStyles], null, context.errors, options);
      }
    }
    return timelines.length ? timelines.map((timeline) => timeline.buildKeyframes()) : [createTimelineInstruction(rootElement, [], [], [], 0, delay2, "", false)];
  }
  visitTrigger(ast, context) {
  }
  visitState(ast, context) {
  }
  visitTransition(ast, context) {
  }
  visitAnimateChild(ast, context) {
    const elementInstructions = context.subInstructions.get(context.element);
    if (elementInstructions) {
      const innerContext = context.createSubContext(ast.options);
      const startTime = context.currentTimeline.currentTime;
      const endTime = this._visitSubInstructions(elementInstructions, innerContext, innerContext.options);
      if (startTime != endTime) {
        context.transformIntoNewTimeline(endTime);
      }
    }
    context.previousNode = ast;
  }
  visitAnimateRef(ast, context) {
    const innerContext = context.createSubContext(ast.options);
    innerContext.transformIntoNewTimeline();
    this._applyAnimationRefDelays([ast.options, ast.animation.options], context, innerContext);
    this.visitReference(ast.animation, innerContext);
    context.transformIntoNewTimeline(innerContext.currentTimeline.currentTime);
    context.previousNode = ast;
  }
  _applyAnimationRefDelays(animationsRefsOptions, context, innerContext) {
    for (const animationRefOptions of animationsRefsOptions) {
      const animationDelay = animationRefOptions?.delay;
      if (animationDelay) {
        const animationDelayValue = typeof animationDelay === "number" ? animationDelay : resolveTimingValue(interpolateParams(animationDelay, animationRefOptions?.params ?? {}, context.errors));
        innerContext.delayNextStep(animationDelayValue);
      }
    }
  }
  _visitSubInstructions(instructions, context, options) {
    const startTime = context.currentTimeline.currentTime;
    let furthestTime = startTime;
    const duration = options.duration != null ? resolveTimingValue(options.duration) : null;
    const delay2 = options.delay != null ? resolveTimingValue(options.delay) : null;
    if (duration !== 0) {
      instructions.forEach((instruction) => {
        const instructionTimings = context.appendInstructionToTimeline(instruction, duration, delay2);
        furthestTime = Math.max(furthestTime, instructionTimings.duration + instructionTimings.delay);
      });
    }
    return furthestTime;
  }
  visitReference(ast, context) {
    context.updateOptions(ast.options, true);
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
  }
  visitSequence(ast, context) {
    const subContextCount = context.subContextCount;
    let ctx = context;
    const options = ast.options;
    if (options && (options.params || options.delay)) {
      ctx = context.createSubContext(options);
      ctx.transformIntoNewTimeline();
      if (options.delay != null) {
        if (ctx.previousNode.type == AnimationMetadataType.Style) {
          ctx.currentTimeline.snapshotCurrentStyles();
          ctx.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        }
        const delay2 = resolveTimingValue(options.delay);
        ctx.delayNextStep(delay2);
      }
    }
    if (ast.steps.length) {
      ast.steps.forEach((s) => visitDslNode(this, s, ctx));
      ctx.currentTimeline.applyStylesToKeyframe();
      if (ctx.subContextCount > subContextCount) {
        ctx.transformIntoNewTimeline();
      }
    }
    context.previousNode = ast;
  }
  visitGroup(ast, context) {
    const innerTimelines = [];
    let furthestTime = context.currentTimeline.currentTime;
    const delay2 = ast.options && ast.options.delay ? resolveTimingValue(ast.options.delay) : 0;
    ast.steps.forEach((s) => {
      const innerContext = context.createSubContext(ast.options);
      if (delay2) {
        innerContext.delayNextStep(delay2);
      }
      visitDslNode(this, s, innerContext);
      furthestTime = Math.max(furthestTime, innerContext.currentTimeline.currentTime);
      innerTimelines.push(innerContext.currentTimeline);
    });
    innerTimelines.forEach((timeline) => context.currentTimeline.mergeTimelineCollectedStyles(timeline));
    context.transformIntoNewTimeline(furthestTime);
    context.previousNode = ast;
  }
  _visitTiming(ast, context) {
    if (ast.dynamic) {
      const strValue = ast.strValue;
      const timingValue = context.params ? interpolateParams(strValue, context.params, context.errors) : strValue;
      return resolveTiming(timingValue, context.errors);
    } else {
      return {
        duration: ast.duration,
        delay: ast.delay,
        easing: ast.easing
      };
    }
  }
  visitAnimate(ast, context) {
    const timings = context.currentAnimateTimings = this._visitTiming(ast.timings, context);
    const timeline = context.currentTimeline;
    if (timings.delay) {
      context.incrementTime(timings.delay);
      timeline.snapshotCurrentStyles();
    }
    const style2 = ast.style;
    if (style2.type == AnimationMetadataType.Keyframes) {
      this.visitKeyframes(style2, context);
    } else {
      context.incrementTime(timings.duration);
      this.visitStyle(style2, context);
      timeline.applyStylesToKeyframe();
    }
    context.currentAnimateTimings = null;
    context.previousNode = ast;
  }
  visitStyle(ast, context) {
    const timeline = context.currentTimeline;
    const timings = context.currentAnimateTimings;
    if (!timings && timeline.hasCurrentStyleProperties()) {
      timeline.forwardFrame();
    }
    const easing = timings && timings.easing || ast.easing;
    if (ast.isEmptyStep) {
      timeline.applyEmptyStep(easing);
    } else {
      timeline.setStyles(ast.styles, easing, context.errors, context.options);
    }
    context.previousNode = ast;
  }
  visitKeyframes(ast, context) {
    const currentAnimateTimings = context.currentAnimateTimings;
    const startTime = context.currentTimeline.duration;
    const duration = currentAnimateTimings.duration;
    const innerContext = context.createSubContext();
    const innerTimeline = innerContext.currentTimeline;
    innerTimeline.easing = currentAnimateTimings.easing;
    ast.styles.forEach((step) => {
      const offset = step.offset || 0;
      innerTimeline.forwardTime(offset * duration);
      innerTimeline.setStyles(step.styles, step.easing, context.errors, context.options);
      innerTimeline.applyStylesToKeyframe();
    });
    context.currentTimeline.mergeTimelineCollectedStyles(innerTimeline);
    context.transformIntoNewTimeline(startTime + duration);
    context.previousNode = ast;
  }
  visitQuery(ast, context) {
    const startTime = context.currentTimeline.currentTime;
    const options = ast.options || {};
    const delay2 = options.delay ? resolveTimingValue(options.delay) : 0;
    if (delay2 && (context.previousNode.type === AnimationMetadataType.Style || startTime == 0 && context.currentTimeline.hasCurrentStyleProperties())) {
      context.currentTimeline.snapshotCurrentStyles();
      context.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    }
    let furthestTime = startTime;
    const elms = context.invokeQuery(ast.selector, ast.originalSelector, ast.limit, ast.includeSelf, options.optional ? true : false, context.errors);
    context.currentQueryTotal = elms.length;
    let sameElementTimeline = null;
    elms.forEach((element, i) => {
      context.currentQueryIndex = i;
      const innerContext = context.createSubContext(ast.options, element);
      if (delay2) {
        innerContext.delayNextStep(delay2);
      }
      if (element === context.element) {
        sameElementTimeline = innerContext.currentTimeline;
      }
      visitDslNode(this, ast.animation, innerContext);
      innerContext.currentTimeline.applyStylesToKeyframe();
      const endTime = innerContext.currentTimeline.currentTime;
      furthestTime = Math.max(furthestTime, endTime);
    });
    context.currentQueryIndex = 0;
    context.currentQueryTotal = 0;
    context.transformIntoNewTimeline(furthestTime);
    if (sameElementTimeline) {
      context.currentTimeline.mergeTimelineCollectedStyles(sameElementTimeline);
      context.currentTimeline.snapshotCurrentStyles();
    }
    context.previousNode = ast;
  }
  visitStagger(ast, context) {
    const parentContext = context.parentContext;
    const tl = context.currentTimeline;
    const timings = ast.timings;
    const duration = Math.abs(timings.duration);
    const maxTime = duration * (context.currentQueryTotal - 1);
    let delay2 = duration * context.currentQueryIndex;
    let staggerTransformer = timings.duration < 0 ? "reverse" : timings.easing;
    switch (staggerTransformer) {
      case "reverse":
        delay2 = maxTime - delay2;
        break;
      case "full":
        delay2 = parentContext.currentStaggerTime;
        break;
    }
    const timeline = context.currentTimeline;
    if (delay2) {
      timeline.delayNextStep(delay2);
    }
    const startingTime = timeline.currentTime;
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
    parentContext.currentStaggerTime = tl.currentTime - startingTime + (tl.startTime - parentContext.currentTimeline.startTime);
  }
};
var DEFAULT_NOOP_PREVIOUS_NODE = {};
var AnimationTimelineContext = class _AnimationTimelineContext {
  _driver;
  element;
  subInstructions;
  _enterClassName;
  _leaveClassName;
  errors;
  timelines;
  parentContext = null;
  currentTimeline;
  currentAnimateTimings = null;
  previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
  subContextCount = 0;
  options = {};
  currentQueryIndex = 0;
  currentQueryTotal = 0;
  currentStaggerTime = 0;
  constructor(_driver, element, subInstructions, _enterClassName, _leaveClassName, errors, timelines, initialTimeline) {
    this._driver = _driver;
    this.element = element;
    this.subInstructions = subInstructions;
    this._enterClassName = _enterClassName;
    this._leaveClassName = _leaveClassName;
    this.errors = errors;
    this.timelines = timelines;
    this.currentTimeline = initialTimeline || new TimelineBuilder(this._driver, element, 0);
    timelines.push(this.currentTimeline);
  }
  get params() {
    return this.options.params;
  }
  updateOptions(options, skipIfExists) {
    if (!options) return;
    const newOptions = options;
    let optionsToUpdate = this.options;
    if (newOptions.duration != null) {
      optionsToUpdate.duration = resolveTimingValue(newOptions.duration);
    }
    if (newOptions.delay != null) {
      optionsToUpdate.delay = resolveTimingValue(newOptions.delay);
    }
    const newParams = newOptions.params;
    if (newParams) {
      let paramsToUpdate = optionsToUpdate.params;
      if (!paramsToUpdate) {
        paramsToUpdate = this.options.params = {};
      }
      Object.keys(newParams).forEach((name) => {
        if (!skipIfExists || !paramsToUpdate.hasOwnProperty(name)) {
          paramsToUpdate[name] = interpolateParams(newParams[name], paramsToUpdate, this.errors);
        }
      });
    }
  }
  _copyOptions() {
    const options = {};
    if (this.options) {
      const oldParams = this.options.params;
      if (oldParams) {
        const params = options["params"] = {};
        Object.keys(oldParams).forEach((name) => {
          params[name] = oldParams[name];
        });
      }
    }
    return options;
  }
  createSubContext(options = null, element, newTime) {
    const target = element || this.element;
    const context = new _AnimationTimelineContext(this._driver, target, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(target, newTime || 0));
    context.previousNode = this.previousNode;
    context.currentAnimateTimings = this.currentAnimateTimings;
    context.options = this._copyOptions();
    context.updateOptions(options);
    context.currentQueryIndex = this.currentQueryIndex;
    context.currentQueryTotal = this.currentQueryTotal;
    context.parentContext = this;
    this.subContextCount++;
    return context;
  }
  transformIntoNewTimeline(newTime) {
    this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    this.currentTimeline = this.currentTimeline.fork(this.element, newTime);
    this.timelines.push(this.currentTimeline);
    return this.currentTimeline;
  }
  appendInstructionToTimeline(instruction, duration, delay2) {
    const updatedTimings = {
      duration: duration != null ? duration : instruction.duration,
      delay: this.currentTimeline.currentTime + (delay2 != null ? delay2 : 0) + instruction.delay,
      easing: ""
    };
    const builder = new SubTimelineBuilder(this._driver, instruction.element, instruction.keyframes, instruction.preStyleProps, instruction.postStyleProps, updatedTimings, instruction.stretchStartingKeyframe);
    this.timelines.push(builder);
    return updatedTimings;
  }
  incrementTime(time) {
    this.currentTimeline.forwardTime(this.currentTimeline.duration + time);
  }
  delayNextStep(delay2) {
    if (delay2 > 0) {
      this.currentTimeline.delayNextStep(delay2);
    }
  }
  invokeQuery(selector, originalSelector, limit, includeSelf, optional, errors) {
    let results = [];
    if (includeSelf) {
      results.push(this.element);
    }
    if (selector.length > 0) {
      selector = selector.replace(ENTER_TOKEN_REGEX, "." + this._enterClassName);
      selector = selector.replace(LEAVE_TOKEN_REGEX, "." + this._leaveClassName);
      const multi = limit != 1;
      let elements = this._driver.query(this.element, selector, multi);
      if (limit !== 0) {
        elements = limit < 0 ? elements.slice(elements.length + limit, elements.length) : elements.slice(0, limit);
      }
      results.push(...elements);
    }
    if (!optional && results.length == 0) {
      errors.push(invalidQuery(originalSelector));
    }
    return results;
  }
};
var TimelineBuilder = class _TimelineBuilder {
  _driver;
  element;
  startTime;
  _elementTimelineStylesLookup;
  duration = 0;
  easing = null;
  _previousKeyframe = /* @__PURE__ */ new Map();
  _currentKeyframe = /* @__PURE__ */ new Map();
  _keyframes = /* @__PURE__ */ new Map();
  _styleSummary = /* @__PURE__ */ new Map();
  _localTimelineStyles = /* @__PURE__ */ new Map();
  _globalTimelineStyles;
  _pendingStyles = /* @__PURE__ */ new Map();
  _backFill = /* @__PURE__ */ new Map();
  _currentEmptyStepKeyframe = null;
  constructor(_driver, element, startTime, _elementTimelineStylesLookup) {
    this._driver = _driver;
    this.element = element;
    this.startTime = startTime;
    this._elementTimelineStylesLookup = _elementTimelineStylesLookup;
    if (!this._elementTimelineStylesLookup) {
      this._elementTimelineStylesLookup = /* @__PURE__ */ new Map();
    }
    this._globalTimelineStyles = this._elementTimelineStylesLookup.get(element);
    if (!this._globalTimelineStyles) {
      this._globalTimelineStyles = this._localTimelineStyles;
      this._elementTimelineStylesLookup.set(element, this._localTimelineStyles);
    }
    this._loadKeyframe();
  }
  containsAnimation() {
    switch (this._keyframes.size) {
      case 0:
        return false;
      case 1:
        return this.hasCurrentStyleProperties();
      default:
        return true;
    }
  }
  hasCurrentStyleProperties() {
    return this._currentKeyframe.size > 0;
  }
  get currentTime() {
    return this.startTime + this.duration;
  }
  delayNextStep(delay2) {
    const hasPreStyleStep = this._keyframes.size === 1 && this._pendingStyles.size;
    if (this.duration || hasPreStyleStep) {
      this.forwardTime(this.currentTime + delay2);
      if (hasPreStyleStep) {
        this.snapshotCurrentStyles();
      }
    } else {
      this.startTime += delay2;
    }
  }
  fork(element, currentTime) {
    this.applyStylesToKeyframe();
    return new _TimelineBuilder(this._driver, element, currentTime || this.currentTime, this._elementTimelineStylesLookup);
  }
  _loadKeyframe() {
    if (this._currentKeyframe) {
      this._previousKeyframe = this._currentKeyframe;
    }
    this._currentKeyframe = this._keyframes.get(this.duration);
    if (!this._currentKeyframe) {
      this._currentKeyframe = /* @__PURE__ */ new Map();
      this._keyframes.set(this.duration, this._currentKeyframe);
    }
  }
  forwardFrame() {
    this.duration += ONE_FRAME_IN_MILLISECONDS;
    this._loadKeyframe();
  }
  forwardTime(time) {
    this.applyStylesToKeyframe();
    this.duration = time;
    this._loadKeyframe();
  }
  _updateStyle(prop, value) {
    this._localTimelineStyles.set(prop, value);
    this._globalTimelineStyles.set(prop, value);
    this._styleSummary.set(prop, {
      time: this.currentTime,
      value
    });
  }
  allowOnlyTimelineStyles() {
    return this._currentEmptyStepKeyframe !== this._currentKeyframe;
  }
  applyEmptyStep(easing) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    for (let [prop, value] of this._globalTimelineStyles) {
      this._backFill.set(prop, value || AUTO_STYLE);
      this._currentKeyframe.set(prop, AUTO_STYLE);
    }
    this._currentEmptyStepKeyframe = this._currentKeyframe;
  }
  setStyles(input, easing, errors, options) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    const params = options && options.params || {};
    const styles = flattenStyles(input, this._globalTimelineStyles);
    for (let [prop, value] of styles) {
      const val = interpolateParams(value, params, errors);
      this._pendingStyles.set(prop, val);
      if (!this._localTimelineStyles.has(prop)) {
        this._backFill.set(prop, this._globalTimelineStyles.get(prop) ?? AUTO_STYLE);
      }
      this._updateStyle(prop, val);
    }
  }
  applyStylesToKeyframe() {
    if (this._pendingStyles.size == 0) return;
    this._pendingStyles.forEach((val, prop) => {
      this._currentKeyframe.set(prop, val);
    });
    this._pendingStyles.clear();
    this._localTimelineStyles.forEach((val, prop) => {
      if (!this._currentKeyframe.has(prop)) {
        this._currentKeyframe.set(prop, val);
      }
    });
  }
  snapshotCurrentStyles() {
    for (let [prop, val] of this._localTimelineStyles) {
      this._pendingStyles.set(prop, val);
      this._updateStyle(prop, val);
    }
  }
  getFinalKeyframe() {
    return this._keyframes.get(this.duration);
  }
  get properties() {
    const properties = [];
    for (let prop in this._currentKeyframe) {
      properties.push(prop);
    }
    return properties;
  }
  mergeTimelineCollectedStyles(timeline) {
    timeline._styleSummary.forEach((details1, prop) => {
      const details0 = this._styleSummary.get(prop);
      if (!details0 || details1.time > details0.time) {
        this._updateStyle(prop, details1.value);
      }
    });
  }
  buildKeyframes() {
    this.applyStylesToKeyframe();
    const preStyleProps = /* @__PURE__ */ new Set();
    const postStyleProps = /* @__PURE__ */ new Set();
    const isEmpty = this._keyframes.size === 1 && this.duration === 0;
    let finalKeyframes = [];
    this._keyframes.forEach((keyframe, time) => {
      const finalKeyframe = new Map([...this._backFill, ...keyframe]);
      finalKeyframe.forEach((value, prop) => {
        if (value === \u0275PRE_STYLE) {
          preStyleProps.add(prop);
        } else if (value === AUTO_STYLE) {
          postStyleProps.add(prop);
        }
      });
      if (!isEmpty) {
        finalKeyframe.set("offset", time / this.duration);
      }
      finalKeyframes.push(finalKeyframe);
    });
    const preProps = [...preStyleProps.values()];
    const postProps = [...postStyleProps.values()];
    if (isEmpty) {
      const kf0 = finalKeyframes[0];
      const kf1 = new Map(kf0);
      kf0.set("offset", 0);
      kf1.set("offset", 1);
      finalKeyframes = [kf0, kf1];
    }
    return createTimelineInstruction(this.element, finalKeyframes, preProps, postProps, this.duration, this.startTime, this.easing, false);
  }
};
var SubTimelineBuilder = class extends TimelineBuilder {
  keyframes;
  preStyleProps;
  postStyleProps;
  _stretchStartingKeyframe;
  timings;
  constructor(driver, element, keyframes, preStyleProps, postStyleProps, timings, _stretchStartingKeyframe = false) {
    super(driver, element, timings.delay);
    this.keyframes = keyframes;
    this.preStyleProps = preStyleProps;
    this.postStyleProps = postStyleProps;
    this._stretchStartingKeyframe = _stretchStartingKeyframe;
    this.timings = {
      duration: timings.duration,
      delay: timings.delay,
      easing: timings.easing
    };
  }
  containsAnimation() {
    return this.keyframes.length > 1;
  }
  buildKeyframes() {
    let keyframes = this.keyframes;
    let {
      delay: delay2,
      duration,
      easing
    } = this.timings;
    if (this._stretchStartingKeyframe && delay2) {
      const newKeyframes = [];
      const totalTime = duration + delay2;
      const startingGap = delay2 / totalTime;
      const newFirstKeyframe = new Map(keyframes[0]);
      newFirstKeyframe.set("offset", 0);
      newKeyframes.push(newFirstKeyframe);
      const oldFirstKeyframe = new Map(keyframes[0]);
      oldFirstKeyframe.set("offset", roundOffset(startingGap));
      newKeyframes.push(oldFirstKeyframe);
      const limit = keyframes.length - 1;
      for (let i = 1; i <= limit; i++) {
        let kf = new Map(keyframes[i]);
        const oldOffset = kf.get("offset");
        const timeAtKeyframe = delay2 + oldOffset * duration;
        kf.set("offset", roundOffset(timeAtKeyframe / totalTime));
        newKeyframes.push(kf);
      }
      duration = totalTime;
      delay2 = 0;
      easing = "";
      keyframes = newKeyframes;
    }
    return createTimelineInstruction(this.element, keyframes, this.preStyleProps, this.postStyleProps, duration, delay2, easing, true);
  }
};
function roundOffset(offset, decimalPoints = 3) {
  const mult = Math.pow(10, decimalPoints - 1);
  return Math.round(offset * mult) / mult;
}
function flattenStyles(input, allStyles) {
  const styles = /* @__PURE__ */ new Map();
  let allProperties;
  input.forEach((token) => {
    if (token === "*") {
      allProperties ??= allStyles.keys();
      for (let prop of allProperties) {
        styles.set(prop, AUTO_STYLE);
      }
    } else {
      for (let [prop, val] of token) {
        styles.set(prop, val);
      }
    }
  });
  return styles;
}
function createTransitionInstruction(element, triggerName, fromState, toState, isRemovalTransition, fromStyles, toStyles, timelines, queriedElements, preStyleProps, postStyleProps, totalTime, errors) {
  return {
    type: 0,
    element,
    triggerName,
    isRemovalTransition,
    fromState,
    fromStyles,
    toState,
    toStyles,
    timelines,
    queriedElements,
    preStyleProps,
    postStyleProps,
    totalTime,
    errors
  };
}
var EMPTY_OBJECT = {};
var AnimationTransitionFactory = class {
  _triggerName;
  ast;
  _stateStyles;
  constructor(_triggerName, ast, _stateStyles) {
    this._triggerName = _triggerName;
    this.ast = ast;
    this._stateStyles = _stateStyles;
  }
  match(currentState, nextState, element, params) {
    return oneOrMoreTransitionsMatch(this.ast.matchers, currentState, nextState, element, params);
  }
  buildStyles(stateName, params, errors) {
    let styler = this._stateStyles.get("*");
    if (stateName !== void 0) {
      styler = this._stateStyles.get(stateName?.toString()) || styler;
    }
    return styler ? styler.buildStyles(params, errors) : /* @__PURE__ */ new Map();
  }
  build(driver, element, currentState, nextState, enterClassName, leaveClassName, currentOptions, nextOptions, subInstructions, skipAstBuild) {
    const errors = [];
    const transitionAnimationParams = this.ast.options && this.ast.options.params || EMPTY_OBJECT;
    const currentAnimationParams = currentOptions && currentOptions.params || EMPTY_OBJECT;
    const currentStateStyles = this.buildStyles(currentState, currentAnimationParams, errors);
    const nextAnimationParams = nextOptions && nextOptions.params || EMPTY_OBJECT;
    const nextStateStyles = this.buildStyles(nextState, nextAnimationParams, errors);
    const queriedElements = /* @__PURE__ */ new Set();
    const preStyleMap = /* @__PURE__ */ new Map();
    const postStyleMap = /* @__PURE__ */ new Map();
    const isRemoval = nextState === "void";
    const animationOptions = {
      params: applyParamDefaults(nextAnimationParams, transitionAnimationParams),
      delay: this.ast.options?.delay
    };
    const timelines = skipAstBuild ? [] : buildAnimationTimelines(driver, element, this.ast.animation, enterClassName, leaveClassName, currentStateStyles, nextStateStyles, animationOptions, subInstructions, errors);
    let totalTime = 0;
    timelines.forEach((tl) => {
      totalTime = Math.max(tl.duration + tl.delay, totalTime);
    });
    if (errors.length) {
      return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, [], [], preStyleMap, postStyleMap, totalTime, errors);
    }
    timelines.forEach((tl) => {
      const elm = tl.element;
      const preProps = getOrSetDefaultValue(preStyleMap, elm, /* @__PURE__ */ new Set());
      tl.preStyleProps.forEach((prop) => preProps.add(prop));
      const postProps = getOrSetDefaultValue(postStyleMap, elm, /* @__PURE__ */ new Set());
      tl.postStyleProps.forEach((prop) => postProps.add(prop));
      if (elm !== element) {
        queriedElements.add(elm);
      }
    });
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      checkNonAnimatableInTimelines(timelines, this._triggerName, driver);
    }
    return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, timelines, [...queriedElements.values()], preStyleMap, postStyleMap, totalTime);
  }
};
function checkNonAnimatableInTimelines(timelines, triggerName, driver) {
  if (!driver.validateAnimatableStyleProperty) {
    return;
  }
  const allowedNonAnimatableProps = /* @__PURE__ */ new Set([
    // 'easing' is a utility/synthetic prop we use to represent
    // easing functions, it represents a property of the animation
    // which is not animatable but different values can be used
    // in different steps
    "easing"
  ]);
  const invalidNonAnimatableProps = /* @__PURE__ */ new Set();
  timelines.forEach(({
    keyframes
  }) => {
    const nonAnimatablePropsInitialValues = /* @__PURE__ */ new Map();
    keyframes.forEach((keyframe) => {
      const entriesToCheck = Array.from(keyframe.entries()).filter(([prop]) => !allowedNonAnimatableProps.has(prop));
      for (const [prop, value] of entriesToCheck) {
        if (!driver.validateAnimatableStyleProperty(prop)) {
          if (nonAnimatablePropsInitialValues.has(prop) && !invalidNonAnimatableProps.has(prop)) {
            const propInitialValue = nonAnimatablePropsInitialValues.get(prop);
            if (propInitialValue !== value) {
              invalidNonAnimatableProps.add(prop);
            }
          } else {
            nonAnimatablePropsInitialValues.set(prop, value);
          }
        }
      }
    });
  });
  if (invalidNonAnimatableProps.size > 0) {
    console.warn(`Warning: The animation trigger "${triggerName}" is attempting to animate the following not animatable properties: ` + Array.from(invalidNonAnimatableProps).join(", ") + "\n(to check the list of all animatable properties visit https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)");
  }
}
function oneOrMoreTransitionsMatch(matchFns, currentState, nextState, element, params) {
  return matchFns.some((fn) => fn(currentState, nextState, element, params));
}
function applyParamDefaults(userParams, defaults) {
  const result = __spreadValues({}, defaults);
  Object.entries(userParams).forEach(([key, value]) => {
    if (value != null) {
      result[key] = value;
    }
  });
  return result;
}
var AnimationStateStyles = class {
  styles;
  defaultParams;
  normalizer;
  constructor(styles, defaultParams, normalizer) {
    this.styles = styles;
    this.defaultParams = defaultParams;
    this.normalizer = normalizer;
  }
  buildStyles(params, errors) {
    const finalStyles = /* @__PURE__ */ new Map();
    const combinedParams = applyParamDefaults(params, this.defaultParams);
    this.styles.styles.forEach((value) => {
      if (typeof value !== "string") {
        value.forEach((val, prop) => {
          if (val) {
            val = interpolateParams(val, combinedParams, errors);
          }
          const normalizedProp = this.normalizer.normalizePropertyName(prop, errors);
          val = this.normalizer.normalizeStyleValue(prop, normalizedProp, val, errors);
          finalStyles.set(prop, val);
        });
      }
    });
    return finalStyles;
  }
};
function buildTrigger(name, ast, normalizer) {
  return new AnimationTrigger(name, ast, normalizer);
}
var AnimationTrigger = class {
  name;
  ast;
  _normalizer;
  transitionFactories = [];
  fallbackTransition;
  states = /* @__PURE__ */ new Map();
  constructor(name, ast, _normalizer) {
    this.name = name;
    this.ast = ast;
    this._normalizer = _normalizer;
    ast.states.forEach((ast2) => {
      const defaultParams = ast2.options && ast2.options.params || {};
      this.states.set(ast2.name, new AnimationStateStyles(ast2.style, defaultParams, _normalizer));
    });
    balanceProperties(this.states, "true", "1");
    balanceProperties(this.states, "false", "0");
    ast.transitions.forEach((ast2) => {
      this.transitionFactories.push(new AnimationTransitionFactory(name, ast2, this.states));
    });
    this.fallbackTransition = createFallbackTransition(name, this.states);
  }
  get containsQueries() {
    return this.ast.queryCount > 0;
  }
  matchTransition(currentState, nextState, element, params) {
    const entry = this.transitionFactories.find((f) => f.match(currentState, nextState, element, params));
    return entry || null;
  }
  matchStyles(currentState, params, errors) {
    return this.fallbackTransition.buildStyles(currentState, params, errors);
  }
};
function createFallbackTransition(triggerName, states, normalizer) {
  const matchers = [(fromState, toState) => true];
  const animation = {
    type: AnimationMetadataType.Sequence,
    steps: [],
    options: null
  };
  const transition2 = {
    type: AnimationMetadataType.Transition,
    animation,
    matchers,
    options: null,
    queryCount: 0,
    depCount: 0
  };
  return new AnimationTransitionFactory(triggerName, transition2, states);
}
function balanceProperties(stateMap, key1, key2) {
  if (stateMap.has(key1)) {
    if (!stateMap.has(key2)) {
      stateMap.set(key2, stateMap.get(key1));
    }
  } else if (stateMap.has(key2)) {
    stateMap.set(key1, stateMap.get(key2));
  }
}
var EMPTY_INSTRUCTION_MAP = new ElementInstructionMap();
var TimelineAnimationEngine = class {
  bodyNode;
  _driver;
  _normalizer;
  _animations = /* @__PURE__ */ new Map();
  _playersById = /* @__PURE__ */ new Map();
  players = [];
  constructor(bodyNode, _driver, _normalizer) {
    this.bodyNode = bodyNode;
    this._driver = _driver;
    this._normalizer = _normalizer;
  }
  register(id, metadata) {
    const errors = [];
    const warnings = [];
    const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
    if (errors.length) {
      throw registerFailed(errors);
    } else {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        if (warnings.length) {
          warnRegister(warnings);
        }
      }
      this._animations.set(id, ast);
    }
  }
  _buildPlayer(i, preStyles, postStyles) {
    const element = i.element;
    const keyframes = normalizeKeyframes$1(this._normalizer, i.keyframes, preStyles, postStyles);
    return this._driver.animate(element, keyframes, i.duration, i.delay, i.easing, [], true);
  }
  create(id, element, options = {}) {
    const errors = [];
    const ast = this._animations.get(id);
    let instructions;
    const autoStylesMap = /* @__PURE__ */ new Map();
    if (ast) {
      instructions = buildAnimationTimelines(this._driver, element, ast, ENTER_CLASSNAME, LEAVE_CLASSNAME, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), options, EMPTY_INSTRUCTION_MAP, errors);
      instructions.forEach((inst) => {
        const styles = getOrSetDefaultValue(autoStylesMap, inst.element, /* @__PURE__ */ new Map());
        inst.postStyleProps.forEach((prop) => styles.set(prop, null));
      });
    } else {
      errors.push(missingOrDestroyedAnimation());
      instructions = [];
    }
    if (errors.length) {
      throw createAnimationFailed(errors);
    }
    autoStylesMap.forEach((styles, element2) => {
      styles.forEach((_, prop) => {
        styles.set(prop, this._driver.computeStyle(element2, prop, AUTO_STYLE));
      });
    });
    const players = instructions.map((i) => {
      const styles = autoStylesMap.get(i.element);
      return this._buildPlayer(i, /* @__PURE__ */ new Map(), styles);
    });
    const player = optimizeGroupPlayer(players);
    this._playersById.set(id, player);
    player.onDestroy(() => this.destroy(id));
    this.players.push(player);
    return player;
  }
  destroy(id) {
    const player = this._getPlayer(id);
    player.destroy();
    this._playersById.delete(id);
    const index = this.players.indexOf(player);
    if (index >= 0) {
      this.players.splice(index, 1);
    }
  }
  _getPlayer(id) {
    const player = this._playersById.get(id);
    if (!player) {
      throw missingPlayer(id);
    }
    return player;
  }
  listen(id, element, eventName, callback) {
    const baseEvent = makeAnimationEvent(element, "", "", "");
    listenOnPlayer(this._getPlayer(id), eventName, baseEvent, callback);
    return () => {
    };
  }
  command(id, element, command, args) {
    if (command == "register") {
      this.register(id, args[0]);
      return;
    }
    if (command == "create") {
      const options = args[0] || {};
      this.create(id, element, options);
      return;
    }
    const player = this._getPlayer(id);
    switch (command) {
      case "play":
        player.play();
        break;
      case "pause":
        player.pause();
        break;
      case "reset":
        player.reset();
        break;
      case "restart":
        player.restart();
        break;
      case "finish":
        player.finish();
        break;
      case "init":
        player.init();
        break;
      case "setPosition":
        player.setPosition(parseFloat(args[0]));
        break;
      case "destroy":
        this.destroy(id);
        break;
    }
  }
};
var QUEUED_CLASSNAME = "ng-animate-queued";
var QUEUED_SELECTOR = ".ng-animate-queued";
var DISABLED_CLASSNAME = "ng-animate-disabled";
var DISABLED_SELECTOR = ".ng-animate-disabled";
var STAR_CLASSNAME = "ng-star-inserted";
var STAR_SELECTOR = ".ng-star-inserted";
var EMPTY_PLAYER_ARRAY = [];
var NULL_REMOVAL_STATE = {
  namespaceId: "",
  setForRemoval: false,
  setForMove: false,
  hasAnimation: false,
  removedBeforeQueried: false
};
var NULL_REMOVED_QUERIED_STATE = {
  namespaceId: "",
  setForMove: false,
  setForRemoval: false,
  hasAnimation: false,
  removedBeforeQueried: true
};
var REMOVAL_FLAG = "__ng_removed";
var StateValue = class {
  namespaceId;
  value;
  options;
  get params() {
    return this.options.params;
  }
  constructor(input, namespaceId = "") {
    this.namespaceId = namespaceId;
    const isObj = input && input.hasOwnProperty("value");
    const value = isObj ? input["value"] : input;
    this.value = normalizeTriggerValue(value);
    if (isObj) {
      const _a = input, {
        value: value2
      } = _a, options = __objRest(_a, [
        "value"
      ]);
      this.options = options;
    } else {
      this.options = {};
    }
    if (!this.options.params) {
      this.options.params = {};
    }
  }
  absorbOptions(options) {
    const newParams = options.params;
    if (newParams) {
      const oldParams = this.options.params;
      Object.keys(newParams).forEach((prop) => {
        if (oldParams[prop] == null) {
          oldParams[prop] = newParams[prop];
        }
      });
    }
  }
};
var VOID_VALUE = "void";
var DEFAULT_STATE_VALUE = new StateValue(VOID_VALUE);
var AnimationTransitionNamespace = class {
  id;
  hostElement;
  _engine;
  players = [];
  _triggers = /* @__PURE__ */ new Map();
  _queue = [];
  _elementListeners = /* @__PURE__ */ new Map();
  _hostClassName;
  constructor(id, hostElement, _engine) {
    this.id = id;
    this.hostElement = hostElement;
    this._engine = _engine;
    this._hostClassName = "ng-tns-" + id;
    addClass(hostElement, this._hostClassName);
  }
  listen(element, name, phase, callback) {
    if (!this._triggers.has(name)) {
      throw missingTrigger(phase, name);
    }
    if (phase == null || phase.length == 0) {
      throw missingEvent(name);
    }
    if (!isTriggerEventValid(phase)) {
      throw unsupportedTriggerEvent(phase, name);
    }
    const listeners = getOrSetDefaultValue(this._elementListeners, element, []);
    const data = {
      name,
      phase,
      callback
    };
    listeners.push(data);
    const triggersWithStates = getOrSetDefaultValue(this._engine.statesByElement, element, /* @__PURE__ */ new Map());
    if (!triggersWithStates.has(name)) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + name);
      triggersWithStates.set(name, DEFAULT_STATE_VALUE);
    }
    return () => {
      this._engine.afterFlush(() => {
        const index = listeners.indexOf(data);
        if (index >= 0) {
          listeners.splice(index, 1);
        }
        if (!this._triggers.has(name)) {
          triggersWithStates.delete(name);
        }
      });
    };
  }
  register(name, ast) {
    if (this._triggers.has(name)) {
      return false;
    } else {
      this._triggers.set(name, ast);
      return true;
    }
  }
  _getTrigger(name) {
    const trigger2 = this._triggers.get(name);
    if (!trigger2) {
      throw unregisteredTrigger(name);
    }
    return trigger2;
  }
  trigger(element, triggerName, value, defaultToFallback = true) {
    const trigger2 = this._getTrigger(triggerName);
    const player = new TransitionAnimationPlayer(this.id, triggerName, element);
    let triggersWithStates = this._engine.statesByElement.get(element);
    if (!triggersWithStates) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + triggerName);
      this._engine.statesByElement.set(element, triggersWithStates = /* @__PURE__ */ new Map());
    }
    let fromState = triggersWithStates.get(triggerName);
    const toState = new StateValue(value, this.id);
    const isObj = value && value.hasOwnProperty("value");
    if (!isObj && fromState) {
      toState.absorbOptions(fromState.options);
    }
    triggersWithStates.set(triggerName, toState);
    if (!fromState) {
      fromState = DEFAULT_STATE_VALUE;
    }
    const isRemoval = toState.value === VOID_VALUE;
    if (!isRemoval && fromState.value === toState.value) {
      if (!objEquals(fromState.params, toState.params)) {
        const errors = [];
        const fromStyles = trigger2.matchStyles(fromState.value, fromState.params, errors);
        const toStyles = trigger2.matchStyles(toState.value, toState.params, errors);
        if (errors.length) {
          this._engine.reportError(errors);
        } else {
          this._engine.afterFlush(() => {
            eraseStyles(element, fromStyles);
            setStyles(element, toStyles);
          });
        }
      }
      return;
    }
    const playersOnElement = getOrSetDefaultValue(this._engine.playersByElement, element, []);
    playersOnElement.forEach((player2) => {
      if (player2.namespaceId == this.id && player2.triggerName == triggerName && player2.queued) {
        player2.destroy();
      }
    });
    let transition2 = trigger2.matchTransition(fromState.value, toState.value, element, toState.params);
    let isFallbackTransition = false;
    if (!transition2) {
      if (!defaultToFallback) return;
      transition2 = trigger2.fallbackTransition;
      isFallbackTransition = true;
    }
    this._engine.totalQueuedPlayers++;
    this._queue.push({
      element,
      triggerName,
      transition: transition2,
      fromState,
      toState,
      player,
      isFallbackTransition
    });
    if (!isFallbackTransition) {
      addClass(element, QUEUED_CLASSNAME);
      player.onStart(() => {
        removeClass(element, QUEUED_CLASSNAME);
      });
    }
    player.onDone(() => {
      let index = this.players.indexOf(player);
      if (index >= 0) {
        this.players.splice(index, 1);
      }
      const players = this._engine.playersByElement.get(element);
      if (players) {
        let index2 = players.indexOf(player);
        if (index2 >= 0) {
          players.splice(index2, 1);
        }
      }
    });
    this.players.push(player);
    playersOnElement.push(player);
    return player;
  }
  deregister(name) {
    this._triggers.delete(name);
    this._engine.statesByElement.forEach((stateMap) => stateMap.delete(name));
    this._elementListeners.forEach((listeners, element) => {
      this._elementListeners.set(element, listeners.filter((entry) => {
        return entry.name != name;
      }));
    });
  }
  clearElementCache(element) {
    this._engine.statesByElement.delete(element);
    this._elementListeners.delete(element);
    const elementPlayers = this._engine.playersByElement.get(element);
    if (elementPlayers) {
      elementPlayers.forEach((player) => player.destroy());
      this._engine.playersByElement.delete(element);
    }
  }
  _signalRemovalForInnerTriggers(rootElement, context) {
    const elements = this._engine.driver.query(rootElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((elm) => {
      if (elm[REMOVAL_FLAG]) return;
      const namespaces = this._engine.fetchNamespacesByElement(elm);
      if (namespaces.size) {
        namespaces.forEach((ns) => ns.triggerLeaveAnimation(elm, context, false, true));
      } else {
        this.clearElementCache(elm);
      }
    });
    this._engine.afterFlushAnimationsDone(() => elements.forEach((elm) => this.clearElementCache(elm)));
  }
  triggerLeaveAnimation(element, context, destroyAfterComplete, defaultToFallback) {
    const triggerStates = this._engine.statesByElement.get(element);
    const previousTriggersValues = /* @__PURE__ */ new Map();
    if (triggerStates) {
      const players = [];
      triggerStates.forEach((state2, triggerName) => {
        previousTriggersValues.set(triggerName, state2.value);
        if (this._triggers.has(triggerName)) {
          const player = this.trigger(element, triggerName, VOID_VALUE, defaultToFallback);
          if (player) {
            players.push(player);
          }
        }
      });
      if (players.length) {
        this._engine.markElementAsRemoved(this.id, element, true, context, previousTriggersValues);
        if (destroyAfterComplete) {
          optimizeGroupPlayer(players).onDone(() => this._engine.processLeaveNode(element));
        }
        return true;
      }
    }
    return false;
  }
  prepareLeaveAnimationListeners(element) {
    const listeners = this._elementListeners.get(element);
    const elementStates = this._engine.statesByElement.get(element);
    if (listeners && elementStates) {
      const visitedTriggers = /* @__PURE__ */ new Set();
      listeners.forEach((listener) => {
        const triggerName = listener.name;
        if (visitedTriggers.has(triggerName)) return;
        visitedTriggers.add(triggerName);
        const trigger2 = this._triggers.get(triggerName);
        const transition2 = trigger2.fallbackTransition;
        const fromState = elementStates.get(triggerName) || DEFAULT_STATE_VALUE;
        const toState = new StateValue(VOID_VALUE);
        const player = new TransitionAnimationPlayer(this.id, triggerName, element);
        this._engine.totalQueuedPlayers++;
        this._queue.push({
          element,
          triggerName,
          transition: transition2,
          fromState,
          toState,
          player,
          isFallbackTransition: true
        });
      });
    }
  }
  removeNode(element, context) {
    const engine = this._engine;
    if (element.childElementCount) {
      this._signalRemovalForInnerTriggers(element, context);
    }
    if (this.triggerLeaveAnimation(element, context, true)) return;
    let containsPotentialParentTransition = false;
    if (engine.totalAnimations) {
      const currentPlayers = engine.players.length ? engine.playersByQueriedElement.get(element) : [];
      if (currentPlayers && currentPlayers.length) {
        containsPotentialParentTransition = true;
      } else {
        let parent = element;
        while (parent = parent.parentNode) {
          const triggers = engine.statesByElement.get(parent);
          if (triggers) {
            containsPotentialParentTransition = true;
            break;
          }
        }
      }
    }
    this.prepareLeaveAnimationListeners(element);
    if (containsPotentialParentTransition) {
      engine.markElementAsRemoved(this.id, element, false, context);
    } else {
      const removalFlag = element[REMOVAL_FLAG];
      if (!removalFlag || removalFlag === NULL_REMOVAL_STATE) {
        engine.afterFlush(() => this.clearElementCache(element));
        engine.destroyInnerAnimations(element);
        engine._onRemovalComplete(element, context);
      }
    }
  }
  insertNode(element, parent) {
    addClass(element, this._hostClassName);
  }
  drainQueuedTransitions(microtaskId) {
    const instructions = [];
    this._queue.forEach((entry) => {
      const player = entry.player;
      if (player.destroyed) return;
      const element = entry.element;
      const listeners = this._elementListeners.get(element);
      if (listeners) {
        listeners.forEach((listener) => {
          if (listener.name == entry.triggerName) {
            const baseEvent = makeAnimationEvent(element, entry.triggerName, entry.fromState.value, entry.toState.value);
            baseEvent["_data"] = microtaskId;
            listenOnPlayer(entry.player, listener.phase, baseEvent, listener.callback);
          }
        });
      }
      if (player.markedForDestroy) {
        this._engine.afterFlush(() => {
          player.destroy();
        });
      } else {
        instructions.push(entry);
      }
    });
    this._queue = [];
    return instructions.sort((a, b) => {
      const d0 = a.transition.ast.depCount;
      const d1 = b.transition.ast.depCount;
      if (d0 == 0 || d1 == 0) {
        return d0 - d1;
      }
      return this._engine.driver.containsElement(a.element, b.element) ? 1 : -1;
    });
  }
  destroy(context) {
    this.players.forEach((p) => p.destroy());
    this._signalRemovalForInnerTriggers(this.hostElement, context);
  }
};
var TransitionAnimationEngine = class {
  bodyNode;
  driver;
  _normalizer;
  players = [];
  newHostElements = /* @__PURE__ */ new Map();
  playersByElement = /* @__PURE__ */ new Map();
  playersByQueriedElement = /* @__PURE__ */ new Map();
  statesByElement = /* @__PURE__ */ new Map();
  disabledNodes = /* @__PURE__ */ new Set();
  totalAnimations = 0;
  totalQueuedPlayers = 0;
  _namespaceLookup = {};
  _namespaceList = [];
  _flushFns = [];
  _whenQuietFns = [];
  namespacesByHostElement = /* @__PURE__ */ new Map();
  collectedEnterElements = [];
  collectedLeaveElements = [];
  // this method is designed to be overridden by the code that uses this engine
  onRemovalComplete = (element, context) => {
  };
  /** @internal */
  _onRemovalComplete(element, context) {
    this.onRemovalComplete(element, context);
  }
  constructor(bodyNode, driver, _normalizer) {
    this.bodyNode = bodyNode;
    this.driver = driver;
    this._normalizer = _normalizer;
  }
  get queuedPlayers() {
    const players = [];
    this._namespaceList.forEach((ns) => {
      ns.players.forEach((player) => {
        if (player.queued) {
          players.push(player);
        }
      });
    });
    return players;
  }
  createNamespace(namespaceId, hostElement) {
    const ns = new AnimationTransitionNamespace(namespaceId, hostElement, this);
    if (this.bodyNode && this.driver.containsElement(this.bodyNode, hostElement)) {
      this._balanceNamespaceList(ns, hostElement);
    } else {
      this.newHostElements.set(hostElement, ns);
      this.collectEnterElement(hostElement);
    }
    return this._namespaceLookup[namespaceId] = ns;
  }
  _balanceNamespaceList(ns, hostElement) {
    const namespaceList = this._namespaceList;
    const namespacesByHostElement = this.namespacesByHostElement;
    const limit = namespaceList.length - 1;
    if (limit >= 0) {
      let found = false;
      let ancestor = this.driver.getParentElement(hostElement);
      while (ancestor) {
        const ancestorNs = namespacesByHostElement.get(ancestor);
        if (ancestorNs) {
          const index = namespaceList.indexOf(ancestorNs);
          namespaceList.splice(index + 1, 0, ns);
          found = true;
          break;
        }
        ancestor = this.driver.getParentElement(ancestor);
      }
      if (!found) {
        namespaceList.unshift(ns);
      }
    } else {
      namespaceList.push(ns);
    }
    namespacesByHostElement.set(hostElement, ns);
    return ns;
  }
  register(namespaceId, hostElement) {
    let ns = this._namespaceLookup[namespaceId];
    if (!ns) {
      ns = this.createNamespace(namespaceId, hostElement);
    }
    return ns;
  }
  registerTrigger(namespaceId, name, trigger2) {
    let ns = this._namespaceLookup[namespaceId];
    if (ns && ns.register(name, trigger2)) {
      this.totalAnimations++;
    }
  }
  destroy(namespaceId, context) {
    if (!namespaceId) return;
    this.afterFlush(() => {
    });
    this.afterFlushAnimationsDone(() => {
      const ns = this._fetchNamespace(namespaceId);
      this.namespacesByHostElement.delete(ns.hostElement);
      const index = this._namespaceList.indexOf(ns);
      if (index >= 0) {
        this._namespaceList.splice(index, 1);
      }
      ns.destroy(context);
      delete this._namespaceLookup[namespaceId];
    });
  }
  _fetchNamespace(id) {
    return this._namespaceLookup[id];
  }
  fetchNamespacesByElement(element) {
    const namespaces = /* @__PURE__ */ new Set();
    const elementStates = this.statesByElement.get(element);
    if (elementStates) {
      for (let stateValue of elementStates.values()) {
        if (stateValue.namespaceId) {
          const ns = this._fetchNamespace(stateValue.namespaceId);
          if (ns) {
            namespaces.add(ns);
          }
        }
      }
    }
    return namespaces;
  }
  trigger(namespaceId, element, name, value) {
    if (isElementNode(element)) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.trigger(element, name, value);
        return true;
      }
    }
    return false;
  }
  insertNode(namespaceId, element, parent, insertBefore) {
    if (!isElementNode(element)) return;
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      details.setForRemoval = false;
      details.setForMove = true;
      const index = this.collectedLeaveElements.indexOf(element);
      if (index >= 0) {
        this.collectedLeaveElements.splice(index, 1);
      }
    }
    if (namespaceId) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.insertNode(element, parent);
      }
    }
    if (insertBefore) {
      this.collectEnterElement(element);
    }
  }
  collectEnterElement(element) {
    this.collectedEnterElements.push(element);
  }
  markElementAsDisabled(element, value) {
    if (value) {
      if (!this.disabledNodes.has(element)) {
        this.disabledNodes.add(element);
        addClass(element, DISABLED_CLASSNAME);
      }
    } else if (this.disabledNodes.has(element)) {
      this.disabledNodes.delete(element);
      removeClass(element, DISABLED_CLASSNAME);
    }
  }
  removeNode(namespaceId, element, context) {
    if (isElementNode(element)) {
      const ns = namespaceId ? this._fetchNamespace(namespaceId) : null;
      if (ns) {
        ns.removeNode(element, context);
      } else {
        this.markElementAsRemoved(namespaceId, element, false, context);
      }
      const hostNS = this.namespacesByHostElement.get(element);
      if (hostNS && hostNS.id !== namespaceId) {
        hostNS.removeNode(element, context);
      }
    } else {
      this._onRemovalComplete(element, context);
    }
  }
  markElementAsRemoved(namespaceId, element, hasAnimation, context, previousTriggersValues) {
    this.collectedLeaveElements.push(element);
    element[REMOVAL_FLAG] = {
      namespaceId,
      setForRemoval: context,
      hasAnimation,
      removedBeforeQueried: false,
      previousTriggersValues
    };
  }
  listen(namespaceId, element, name, phase, callback) {
    if (isElementNode(element)) {
      return this._fetchNamespace(namespaceId).listen(element, name, phase, callback);
    }
    return () => {
    };
  }
  _buildInstruction(entry, subTimelines, enterClassName, leaveClassName, skipBuildAst) {
    return entry.transition.build(this.driver, entry.element, entry.fromState.value, entry.toState.value, enterClassName, leaveClassName, entry.fromState.options, entry.toState.options, subTimelines, skipBuildAst);
  }
  destroyInnerAnimations(containerElement) {
    let elements = this.driver.query(containerElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((element) => this.destroyActiveAnimationsForElement(element));
    if (this.playersByQueriedElement.size == 0) return;
    elements = this.driver.query(containerElement, NG_ANIMATING_SELECTOR, true);
    elements.forEach((element) => this.finishActiveQueriedAnimationOnElement(element));
  }
  destroyActiveAnimationsForElement(element) {
    const players = this.playersByElement.get(element);
    if (players) {
      players.forEach((player) => {
        if (player.queued) {
          player.markedForDestroy = true;
        } else {
          player.destroy();
        }
      });
    }
  }
  finishActiveQueriedAnimationOnElement(element) {
    const players = this.playersByQueriedElement.get(element);
    if (players) {
      players.forEach((player) => player.finish());
    }
  }
  whenRenderingDone() {
    return new Promise((resolve) => {
      if (this.players.length) {
        return optimizeGroupPlayer(this.players).onDone(() => resolve());
      } else {
        resolve();
      }
    });
  }
  processLeaveNode(element) {
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      element[REMOVAL_FLAG] = NULL_REMOVAL_STATE;
      if (details.namespaceId) {
        this.destroyInnerAnimations(element);
        const ns = this._fetchNamespace(details.namespaceId);
        if (ns) {
          ns.clearElementCache(element);
        }
      }
      this._onRemovalComplete(element, details.setForRemoval);
    }
    if (element.classList?.contains(DISABLED_CLASSNAME)) {
      this.markElementAsDisabled(element, false);
    }
    this.driver.query(element, DISABLED_SELECTOR, true).forEach((node) => {
      this.markElementAsDisabled(node, false);
    });
  }
  flush(microtaskId = -1) {
    let players = [];
    if (this.newHostElements.size) {
      this.newHostElements.forEach((ns, element) => this._balanceNamespaceList(ns, element));
      this.newHostElements.clear();
    }
    if (this.totalAnimations && this.collectedEnterElements.length) {
      for (let i = 0; i < this.collectedEnterElements.length; i++) {
        const elm = this.collectedEnterElements[i];
        addClass(elm, STAR_CLASSNAME);
      }
    }
    if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
      const cleanupFns = [];
      try {
        players = this._flushAnimations(cleanupFns, microtaskId);
      } finally {
        for (let i = 0; i < cleanupFns.length; i++) {
          cleanupFns[i]();
        }
      }
    } else {
      for (let i = 0; i < this.collectedLeaveElements.length; i++) {
        const element = this.collectedLeaveElements[i];
        this.processLeaveNode(element);
      }
    }
    this.totalQueuedPlayers = 0;
    this.collectedEnterElements.length = 0;
    this.collectedLeaveElements.length = 0;
    this._flushFns.forEach((fn) => fn());
    this._flushFns = [];
    if (this._whenQuietFns.length) {
      const quietFns = this._whenQuietFns;
      this._whenQuietFns = [];
      if (players.length) {
        optimizeGroupPlayer(players).onDone(() => {
          quietFns.forEach((fn) => fn());
        });
      } else {
        quietFns.forEach((fn) => fn());
      }
    }
  }
  reportError(errors) {
    throw triggerTransitionsFailed(errors);
  }
  _flushAnimations(cleanupFns, microtaskId) {
    const subTimelines = new ElementInstructionMap();
    const skippedPlayers = [];
    const skippedPlayersMap = /* @__PURE__ */ new Map();
    const queuedInstructions = [];
    const queriedElements = /* @__PURE__ */ new Map();
    const allPreStyleElements = /* @__PURE__ */ new Map();
    const allPostStyleElements = /* @__PURE__ */ new Map();
    const disabledElementsSet = /* @__PURE__ */ new Set();
    this.disabledNodes.forEach((node) => {
      disabledElementsSet.add(node);
      const nodesThatAreDisabled = this.driver.query(node, QUEUED_SELECTOR, true);
      for (let i2 = 0; i2 < nodesThatAreDisabled.length; i2++) {
        disabledElementsSet.add(nodesThatAreDisabled[i2]);
      }
    });
    const bodyNode = this.bodyNode;
    const allTriggerElements = Array.from(this.statesByElement.keys());
    const enterNodeMap = buildRootMap(allTriggerElements, this.collectedEnterElements);
    const enterNodeMapIds = /* @__PURE__ */ new Map();
    let i = 0;
    enterNodeMap.forEach((nodes, root) => {
      const className = ENTER_CLASSNAME + i++;
      enterNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    const allLeaveNodes = [];
    const mergedLeaveNodes = /* @__PURE__ */ new Set();
    const leaveNodesWithoutAnimations = /* @__PURE__ */ new Set();
    for (let i2 = 0; i2 < this.collectedLeaveElements.length; i2++) {
      const element = this.collectedLeaveElements[i2];
      const details = element[REMOVAL_FLAG];
      if (details && details.setForRemoval) {
        allLeaveNodes.push(element);
        mergedLeaveNodes.add(element);
        if (details.hasAnimation) {
          this.driver.query(element, STAR_SELECTOR, true).forEach((elm) => mergedLeaveNodes.add(elm));
        } else {
          leaveNodesWithoutAnimations.add(element);
        }
      }
    }
    const leaveNodeMapIds = /* @__PURE__ */ new Map();
    const leaveNodeMap = buildRootMap(allTriggerElements, Array.from(mergedLeaveNodes));
    leaveNodeMap.forEach((nodes, root) => {
      const className = LEAVE_CLASSNAME + i++;
      leaveNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    cleanupFns.push(() => {
      enterNodeMap.forEach((nodes, root) => {
        const className = enterNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      leaveNodeMap.forEach((nodes, root) => {
        const className = leaveNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      allLeaveNodes.forEach((element) => {
        this.processLeaveNode(element);
      });
    });
    const allPlayers = [];
    const erroneousTransitions = [];
    for (let i2 = this._namespaceList.length - 1; i2 >= 0; i2--) {
      const ns = this._namespaceList[i2];
      ns.drainQueuedTransitions(microtaskId).forEach((entry) => {
        const player = entry.player;
        const element = entry.element;
        allPlayers.push(player);
        if (this.collectedEnterElements.length) {
          const details = element[REMOVAL_FLAG];
          if (details && details.setForMove) {
            if (details.previousTriggersValues && details.previousTriggersValues.has(entry.triggerName)) {
              const previousValue = details.previousTriggersValues.get(entry.triggerName);
              const triggersWithStates = this.statesByElement.get(entry.element);
              if (triggersWithStates && triggersWithStates.has(entry.triggerName)) {
                const state2 = triggersWithStates.get(entry.triggerName);
                state2.value = previousValue;
                triggersWithStates.set(entry.triggerName, state2);
              }
            }
            player.destroy();
            return;
          }
        }
        const nodeIsOrphaned = !bodyNode || !this.driver.containsElement(bodyNode, element);
        const leaveClassName = leaveNodeMapIds.get(element);
        const enterClassName = enterNodeMapIds.get(element);
        const instruction = this._buildInstruction(entry, subTimelines, enterClassName, leaveClassName, nodeIsOrphaned);
        if (instruction.errors && instruction.errors.length) {
          erroneousTransitions.push(instruction);
          return;
        }
        if (nodeIsOrphaned) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        if (entry.isFallbackTransition) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        const timelines = [];
        instruction.timelines.forEach((tl) => {
          tl.stretchStartingKeyframe = true;
          if (!this.disabledNodes.has(tl.element)) {
            timelines.push(tl);
          }
        });
        instruction.timelines = timelines;
        subTimelines.append(element, instruction.timelines);
        const tuple = {
          instruction,
          player,
          element
        };
        queuedInstructions.push(tuple);
        instruction.queriedElements.forEach((element2) => getOrSetDefaultValue(queriedElements, element2, []).push(player));
        instruction.preStyleProps.forEach((stringMap, element2) => {
          if (stringMap.size) {
            let setVal = allPreStyleElements.get(element2);
            if (!setVal) {
              allPreStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
            }
            stringMap.forEach((_, prop) => setVal.add(prop));
          }
        });
        instruction.postStyleProps.forEach((stringMap, element2) => {
          let setVal = allPostStyleElements.get(element2);
          if (!setVal) {
            allPostStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
          }
          stringMap.forEach((_, prop) => setVal.add(prop));
        });
      });
    }
    if (erroneousTransitions.length) {
      const errors = [];
      erroneousTransitions.forEach((instruction) => {
        errors.push(transitionFailed(instruction.triggerName, instruction.errors));
      });
      allPlayers.forEach((player) => player.destroy());
      this.reportError(errors);
    }
    const allPreviousPlayersMap = /* @__PURE__ */ new Map();
    const animationElementMap = /* @__PURE__ */ new Map();
    queuedInstructions.forEach((entry) => {
      const element = entry.element;
      if (subTimelines.has(element)) {
        animationElementMap.set(element, element);
        this._beforeAnimationBuild(entry.player.namespaceId, entry.instruction, allPreviousPlayersMap);
      }
    });
    skippedPlayers.forEach((player) => {
      const element = player.element;
      const previousPlayers = this._getPreviousPlayers(element, false, player.namespaceId, player.triggerName, null);
      previousPlayers.forEach((prevPlayer) => {
        getOrSetDefaultValue(allPreviousPlayersMap, element, []).push(prevPlayer);
        prevPlayer.destroy();
      });
    });
    const replaceNodes = allLeaveNodes.filter((node) => {
      return replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements);
    });
    const postStylesMap = /* @__PURE__ */ new Map();
    const allLeaveQueriedNodes = cloakAndComputeStyles(postStylesMap, this.driver, leaveNodesWithoutAnimations, allPostStyleElements, AUTO_STYLE);
    allLeaveQueriedNodes.forEach((node) => {
      if (replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements)) {
        replaceNodes.push(node);
      }
    });
    const preStylesMap = /* @__PURE__ */ new Map();
    enterNodeMap.forEach((nodes, root) => {
      cloakAndComputeStyles(preStylesMap, this.driver, new Set(nodes), allPreStyleElements, \u0275PRE_STYLE);
    });
    replaceNodes.forEach((node) => {
      const post = postStylesMap.get(node);
      const pre = preStylesMap.get(node);
      postStylesMap.set(node, new Map([...post?.entries() ?? [], ...pre?.entries() ?? []]));
    });
    const rootPlayers = [];
    const subPlayers = [];
    const NO_PARENT_ANIMATION_ELEMENT_DETECTED = {};
    queuedInstructions.forEach((entry) => {
      const {
        element,
        player,
        instruction
      } = entry;
      if (subTimelines.has(element)) {
        if (disabledElementsSet.has(element)) {
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          player.disabled = true;
          player.overrideTotalTime(instruction.totalTime);
          skippedPlayers.push(player);
          return;
        }
        let parentWithAnimation = NO_PARENT_ANIMATION_ELEMENT_DETECTED;
        if (animationElementMap.size > 1) {
          let elm = element;
          const parentsToAdd = [];
          while (elm = elm.parentNode) {
            const detectedParent = animationElementMap.get(elm);
            if (detectedParent) {
              parentWithAnimation = detectedParent;
              break;
            }
            parentsToAdd.push(elm);
          }
          parentsToAdd.forEach((parent) => animationElementMap.set(parent, parentWithAnimation));
        }
        const innerPlayer = this._buildAnimation(player.namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap);
        player.setRealPlayer(innerPlayer);
        if (parentWithAnimation === NO_PARENT_ANIMATION_ELEMENT_DETECTED) {
          rootPlayers.push(player);
        } else {
          const parentPlayers = this.playersByElement.get(parentWithAnimation);
          if (parentPlayers && parentPlayers.length) {
            player.parentPlayer = optimizeGroupPlayer(parentPlayers);
          }
          skippedPlayers.push(player);
        }
      } else {
        eraseStyles(element, instruction.fromStyles);
        player.onDestroy(() => setStyles(element, instruction.toStyles));
        subPlayers.push(player);
        if (disabledElementsSet.has(element)) {
          skippedPlayers.push(player);
        }
      }
    });
    subPlayers.forEach((player) => {
      const playersForElement = skippedPlayersMap.get(player.element);
      if (playersForElement && playersForElement.length) {
        const innerPlayer = optimizeGroupPlayer(playersForElement);
        player.setRealPlayer(innerPlayer);
      }
    });
    skippedPlayers.forEach((player) => {
      if (player.parentPlayer) {
        player.syncPlayerEvents(player.parentPlayer);
      } else {
        player.destroy();
      }
    });
    for (let i2 = 0; i2 < allLeaveNodes.length; i2++) {
      const element = allLeaveNodes[i2];
      const details = element[REMOVAL_FLAG];
      removeClass(element, LEAVE_CLASSNAME);
      if (details && details.hasAnimation) continue;
      let players = [];
      if (queriedElements.size) {
        let queriedPlayerResults = queriedElements.get(element);
        if (queriedPlayerResults && queriedPlayerResults.length) {
          players.push(...queriedPlayerResults);
        }
        let queriedInnerElements = this.driver.query(element, NG_ANIMATING_SELECTOR, true);
        for (let j = 0; j < queriedInnerElements.length; j++) {
          let queriedPlayers = queriedElements.get(queriedInnerElements[j]);
          if (queriedPlayers && queriedPlayers.length) {
            players.push(...queriedPlayers);
          }
        }
      }
      const activePlayers = players.filter((p) => !p.destroyed);
      if (activePlayers.length) {
        removeNodesAfterAnimationDone(this, element, activePlayers);
      } else {
        this.processLeaveNode(element);
      }
    }
    allLeaveNodes.length = 0;
    rootPlayers.forEach((player) => {
      this.players.push(player);
      player.onDone(() => {
        player.destroy();
        const index = this.players.indexOf(player);
        this.players.splice(index, 1);
      });
      player.play();
    });
    return rootPlayers;
  }
  afterFlush(callback) {
    this._flushFns.push(callback);
  }
  afterFlushAnimationsDone(callback) {
    this._whenQuietFns.push(callback);
  }
  _getPreviousPlayers(element, isQueriedElement, namespaceId, triggerName, toStateValue) {
    let players = [];
    if (isQueriedElement) {
      const queriedElementPlayers = this.playersByQueriedElement.get(element);
      if (queriedElementPlayers) {
        players = queriedElementPlayers;
      }
    } else {
      const elementPlayers = this.playersByElement.get(element);
      if (elementPlayers) {
        const isRemovalAnimation = !toStateValue || toStateValue == VOID_VALUE;
        elementPlayers.forEach((player) => {
          if (player.queued) return;
          if (!isRemovalAnimation && player.triggerName != triggerName) return;
          players.push(player);
        });
      }
    }
    if (namespaceId || triggerName) {
      players = players.filter((player) => {
        if (namespaceId && namespaceId != player.namespaceId) return false;
        if (triggerName && triggerName != player.triggerName) return false;
        return true;
      });
    }
    return players;
  }
  _beforeAnimationBuild(namespaceId, instruction, allPreviousPlayersMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const targetNameSpaceId = instruction.isRemovalTransition ? void 0 : namespaceId;
    const targetTriggerName = instruction.isRemovalTransition ? void 0 : triggerName;
    for (const timelineInstruction of instruction.timelines) {
      const element = timelineInstruction.element;
      const isQueriedElement = element !== rootElement;
      const players = getOrSetDefaultValue(allPreviousPlayersMap, element, []);
      const previousPlayers = this._getPreviousPlayers(element, isQueriedElement, targetNameSpaceId, targetTriggerName, instruction.toState);
      previousPlayers.forEach((player) => {
        const realPlayer = player.getRealPlayer();
        if (realPlayer.beforeDestroy) {
          realPlayer.beforeDestroy();
        }
        player.destroy();
        players.push(player);
      });
    }
    eraseStyles(rootElement, instruction.fromStyles);
  }
  _buildAnimation(namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const allQueriedPlayers = [];
    const allConsumedElements = /* @__PURE__ */ new Set();
    const allSubElements = /* @__PURE__ */ new Set();
    const allNewPlayers = instruction.timelines.map((timelineInstruction) => {
      const element = timelineInstruction.element;
      allConsumedElements.add(element);
      const details = element[REMOVAL_FLAG];
      if (details && details.removedBeforeQueried) return new NoopAnimationPlayer(timelineInstruction.duration, timelineInstruction.delay);
      const isQueriedElement = element !== rootElement;
      const previousPlayers = flattenGroupPlayers((allPreviousPlayersMap.get(element) || EMPTY_PLAYER_ARRAY).map((p) => p.getRealPlayer())).filter((p) => {
        const pp = p;
        return pp.element ? pp.element === element : false;
      });
      const preStyles = preStylesMap.get(element);
      const postStyles = postStylesMap.get(element);
      const keyframes = normalizeKeyframes$1(this._normalizer, timelineInstruction.keyframes, preStyles, postStyles);
      const player2 = this._buildPlayer(timelineInstruction, keyframes, previousPlayers);
      if (timelineInstruction.subTimeline && skippedPlayersMap) {
        allSubElements.add(element);
      }
      if (isQueriedElement) {
        const wrappedPlayer = new TransitionAnimationPlayer(namespaceId, triggerName, element);
        wrappedPlayer.setRealPlayer(player2);
        allQueriedPlayers.push(wrappedPlayer);
      }
      return player2;
    });
    allQueriedPlayers.forEach((player2) => {
      getOrSetDefaultValue(this.playersByQueriedElement, player2.element, []).push(player2);
      player2.onDone(() => deleteOrUnsetInMap(this.playersByQueriedElement, player2.element, player2));
    });
    allConsumedElements.forEach((element) => addClass(element, NG_ANIMATING_CLASSNAME));
    const player = optimizeGroupPlayer(allNewPlayers);
    player.onDestroy(() => {
      allConsumedElements.forEach((element) => removeClass(element, NG_ANIMATING_CLASSNAME));
      setStyles(rootElement, instruction.toStyles);
    });
    allSubElements.forEach((element) => {
      getOrSetDefaultValue(skippedPlayersMap, element, []).push(player);
    });
    return player;
  }
  _buildPlayer(instruction, keyframes, previousPlayers) {
    if (keyframes.length > 0) {
      return this.driver.animate(instruction.element, keyframes, instruction.duration, instruction.delay, instruction.easing, previousPlayers);
    }
    return new NoopAnimationPlayer(instruction.duration, instruction.delay);
  }
};
var TransitionAnimationPlayer = class {
  namespaceId;
  triggerName;
  element;
  _player = new NoopAnimationPlayer();
  _containsRealPlayer = false;
  _queuedCallbacks = /* @__PURE__ */ new Map();
  destroyed = false;
  parentPlayer = null;
  markedForDestroy = false;
  disabled = false;
  queued = true;
  totalTime = 0;
  constructor(namespaceId, triggerName, element) {
    this.namespaceId = namespaceId;
    this.triggerName = triggerName;
    this.element = element;
  }
  setRealPlayer(player) {
    if (this._containsRealPlayer) return;
    this._player = player;
    this._queuedCallbacks.forEach((callbacks, phase) => {
      callbacks.forEach((callback) => listenOnPlayer(player, phase, void 0, callback));
    });
    this._queuedCallbacks.clear();
    this._containsRealPlayer = true;
    this.overrideTotalTime(player.totalTime);
    this.queued = false;
  }
  getRealPlayer() {
    return this._player;
  }
  overrideTotalTime(totalTime) {
    this.totalTime = totalTime;
  }
  syncPlayerEvents(player) {
    const p = this._player;
    if (p.triggerCallback) {
      player.onStart(() => p.triggerCallback("start"));
    }
    player.onDone(() => this.finish());
    player.onDestroy(() => this.destroy());
  }
  _queueEvent(name, callback) {
    getOrSetDefaultValue(this._queuedCallbacks, name, []).push(callback);
  }
  onDone(fn) {
    if (this.queued) {
      this._queueEvent("done", fn);
    }
    this._player.onDone(fn);
  }
  onStart(fn) {
    if (this.queued) {
      this._queueEvent("start", fn);
    }
    this._player.onStart(fn);
  }
  onDestroy(fn) {
    if (this.queued) {
      this._queueEvent("destroy", fn);
    }
    this._player.onDestroy(fn);
  }
  init() {
    this._player.init();
  }
  hasStarted() {
    return this.queued ? false : this._player.hasStarted();
  }
  play() {
    !this.queued && this._player.play();
  }
  pause() {
    !this.queued && this._player.pause();
  }
  restart() {
    !this.queued && this._player.restart();
  }
  finish() {
    this._player.finish();
  }
  destroy() {
    this.destroyed = true;
    this._player.destroy();
  }
  reset() {
    !this.queued && this._player.reset();
  }
  setPosition(p) {
    if (!this.queued) {
      this._player.setPosition(p);
    }
  }
  getPosition() {
    return this.queued ? 0 : this._player.getPosition();
  }
  /** @internal */
  triggerCallback(phaseName) {
    const p = this._player;
    if (p.triggerCallback) {
      p.triggerCallback(phaseName);
    }
  }
};
function deleteOrUnsetInMap(map2, key, value) {
  let currentValues = map2.get(key);
  if (currentValues) {
    if (currentValues.length) {
      const index = currentValues.indexOf(value);
      currentValues.splice(index, 1);
    }
    if (currentValues.length == 0) {
      map2.delete(key);
    }
  }
  return currentValues;
}
function normalizeTriggerValue(value) {
  return value != null ? value : null;
}
function isElementNode(node) {
  return node && node["nodeType"] === 1;
}
function isTriggerEventValid(eventName) {
  return eventName == "start" || eventName == "done";
}
function cloakElement(element, value) {
  const oldValue = element.style.display;
  element.style.display = value != null ? value : "none";
  return oldValue;
}
function cloakAndComputeStyles(valuesMap, driver, elements, elementPropsMap, defaultStyle) {
  const cloakVals = [];
  elements.forEach((element) => cloakVals.push(cloakElement(element)));
  const failedElements = [];
  elementPropsMap.forEach((props, element) => {
    const styles = /* @__PURE__ */ new Map();
    props.forEach((prop) => {
      const value = driver.computeStyle(element, prop, defaultStyle);
      styles.set(prop, value);
      if (!value || value.length == 0) {
        element[REMOVAL_FLAG] = NULL_REMOVED_QUERIED_STATE;
        failedElements.push(element);
      }
    });
    valuesMap.set(element, styles);
  });
  let i = 0;
  elements.forEach((element) => cloakElement(element, cloakVals[i++]));
  return failedElements;
}
function buildRootMap(roots, nodes) {
  const rootMap = /* @__PURE__ */ new Map();
  roots.forEach((root) => rootMap.set(root, []));
  if (nodes.length == 0) return rootMap;
  const NULL_NODE = 1;
  const nodeSet = new Set(nodes);
  const localRootMap = /* @__PURE__ */ new Map();
  function getRoot(node) {
    if (!node) return NULL_NODE;
    let root = localRootMap.get(node);
    if (root) return root;
    const parent = node.parentNode;
    if (rootMap.has(parent)) {
      root = parent;
    } else if (nodeSet.has(parent)) {
      root = NULL_NODE;
    } else {
      root = getRoot(parent);
    }
    localRootMap.set(node, root);
    return root;
  }
  nodes.forEach((node) => {
    const root = getRoot(node);
    if (root !== NULL_NODE) {
      rootMap.get(root).push(node);
    }
  });
  return rootMap;
}
function addClass(element, className) {
  element.classList?.add(className);
}
function removeClass(element, className) {
  element.classList?.remove(className);
}
function removeNodesAfterAnimationDone(engine, element, players) {
  optimizeGroupPlayer(players).onDone(() => engine.processLeaveNode(element));
}
function flattenGroupPlayers(players) {
  const finalPlayers = [];
  _flattenGroupPlayersRecur(players, finalPlayers);
  return finalPlayers;
}
function _flattenGroupPlayersRecur(players, finalPlayers) {
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player instanceof AnimationGroupPlayer) {
      _flattenGroupPlayersRecur(player.players, finalPlayers);
    } else {
      finalPlayers.push(player);
    }
  }
}
function objEquals(a, b) {
  const k1 = Object.keys(a);
  const k2 = Object.keys(b);
  if (k1.length != k2.length) return false;
  for (let i = 0; i < k1.length; i++) {
    const prop = k1[i];
    if (!b.hasOwnProperty(prop) || a[prop] !== b[prop]) return false;
  }
  return true;
}
function replacePostStylesAsPre(element, allPreStyleElements, allPostStyleElements) {
  const postEntry = allPostStyleElements.get(element);
  if (!postEntry) return false;
  let preEntry = allPreStyleElements.get(element);
  if (preEntry) {
    postEntry.forEach((data) => preEntry.add(data));
  } else {
    allPreStyleElements.set(element, postEntry);
  }
  allPostStyleElements.delete(element);
  return true;
}
var AnimationEngine = class {
  _driver;
  _normalizer;
  _transitionEngine;
  _timelineEngine;
  _triggerCache = {};
  // this method is designed to be overridden by the code that uses this engine
  onRemovalComplete = (element, context) => {
  };
  constructor(doc, _driver, _normalizer) {
    this._driver = _driver;
    this._normalizer = _normalizer;
    this._transitionEngine = new TransitionAnimationEngine(doc.body, _driver, _normalizer);
    this._timelineEngine = new TimelineAnimationEngine(doc.body, _driver, _normalizer);
    this._transitionEngine.onRemovalComplete = (element, context) => this.onRemovalComplete(element, context);
  }
  registerTrigger(componentId, namespaceId, hostElement, name, metadata) {
    const cacheKey = componentId + "-" + name;
    let trigger2 = this._triggerCache[cacheKey];
    if (!trigger2) {
      const errors = [];
      const warnings = [];
      const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
      if (errors.length) {
        throw triggerBuildFailed(name, errors);
      }
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        if (warnings.length) {
          warnTriggerBuild(name, warnings);
        }
      }
      trigger2 = buildTrigger(name, ast, this._normalizer);
      this._triggerCache[cacheKey] = trigger2;
    }
    this._transitionEngine.registerTrigger(namespaceId, name, trigger2);
  }
  register(namespaceId, hostElement) {
    this._transitionEngine.register(namespaceId, hostElement);
  }
  destroy(namespaceId, context) {
    this._transitionEngine.destroy(namespaceId, context);
  }
  onInsert(namespaceId, element, parent, insertBefore) {
    this._transitionEngine.insertNode(namespaceId, element, parent, insertBefore);
  }
  onRemove(namespaceId, element, context) {
    this._transitionEngine.removeNode(namespaceId, element, context);
  }
  disableAnimations(element, disable) {
    this._transitionEngine.markElementAsDisabled(element, disable);
  }
  process(namespaceId, element, property, value) {
    if (property.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(property);
      const args = value;
      this._timelineEngine.command(id, element, action, args);
    } else {
      this._transitionEngine.trigger(namespaceId, element, property, value);
    }
  }
  listen(namespaceId, element, eventName, eventPhase, callback) {
    if (eventName.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(eventName);
      return this._timelineEngine.listen(id, element, action, callback);
    }
    return this._transitionEngine.listen(namespaceId, element, eventName, eventPhase, callback);
  }
  flush(microtaskId = -1) {
    this._transitionEngine.flush(microtaskId);
  }
  get players() {
    return [...this._transitionEngine.players, ...this._timelineEngine.players];
  }
  whenRenderingDone() {
    return this._transitionEngine.whenRenderingDone();
  }
  afterFlushAnimationsDone(cb) {
    this._transitionEngine.afterFlushAnimationsDone(cb);
  }
};
function packageNonAnimatableStyles(element, styles) {
  let startStyles = null;
  let endStyles = null;
  if (Array.isArray(styles) && styles.length) {
    startStyles = filterNonAnimatableStyles(styles[0]);
    if (styles.length > 1) {
      endStyles = filterNonAnimatableStyles(styles[styles.length - 1]);
    }
  } else if (styles instanceof Map) {
    startStyles = filterNonAnimatableStyles(styles);
  }
  return startStyles || endStyles ? new SpecialCasedStyles(element, startStyles, endStyles) : null;
}
var SpecialCasedStyles = class _SpecialCasedStyles {
  _element;
  _startStyles;
  _endStyles;
  static initialStylesByElement = /* @__PURE__ */ new WeakMap();
  _state = 0;
  _initialStyles;
  constructor(_element, _startStyles, _endStyles) {
    this._element = _element;
    this._startStyles = _startStyles;
    this._endStyles = _endStyles;
    let initialStyles = _SpecialCasedStyles.initialStylesByElement.get(_element);
    if (!initialStyles) {
      _SpecialCasedStyles.initialStylesByElement.set(_element, initialStyles = /* @__PURE__ */ new Map());
    }
    this._initialStyles = initialStyles;
  }
  start() {
    if (this._state < 1) {
      if (this._startStyles) {
        setStyles(this._element, this._startStyles, this._initialStyles);
      }
      this._state = 1;
    }
  }
  finish() {
    this.start();
    if (this._state < 2) {
      setStyles(this._element, this._initialStyles);
      if (this._endStyles) {
        setStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      this._state = 1;
    }
  }
  destroy() {
    this.finish();
    if (this._state < 3) {
      _SpecialCasedStyles.initialStylesByElement.delete(this._element);
      if (this._startStyles) {
        eraseStyles(this._element, this._startStyles);
        this._endStyles = null;
      }
      if (this._endStyles) {
        eraseStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      setStyles(this._element, this._initialStyles);
      this._state = 3;
    }
  }
};
function filterNonAnimatableStyles(styles) {
  let result = null;
  styles.forEach((val, prop) => {
    if (isNonAnimatableStyle(prop)) {
      result = result || /* @__PURE__ */ new Map();
      result.set(prop, val);
    }
  });
  return result;
}
function isNonAnimatableStyle(prop) {
  return prop === "display" || prop === "position";
}
var WebAnimationsPlayer = class {
  element;
  keyframes;
  options;
  _specialStyles;
  _onDoneFns = [];
  _onStartFns = [];
  _onDestroyFns = [];
  _duration;
  _delay;
  _initialized = false;
  _finished = false;
  _started = false;
  _destroyed = false;
  _finalKeyframe;
  // the following original fns are persistent copies of the _onStartFns and _onDoneFns
  // and are used to reset the fns to their original values upon reset()
  // (since the _onStartFns and _onDoneFns get deleted after they are called)
  _originalOnDoneFns = [];
  _originalOnStartFns = [];
  // using non-null assertion because it's re(set) by init();
  domPlayer;
  time = 0;
  parentPlayer = null;
  currentSnapshot = /* @__PURE__ */ new Map();
  constructor(element, keyframes, options, _specialStyles) {
    this.element = element;
    this.keyframes = keyframes;
    this.options = options;
    this._specialStyles = _specialStyles;
    this._duration = options["duration"];
    this._delay = options["delay"] || 0;
    this.time = this._duration + this._delay;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  init() {
    this._buildPlayer();
    this._preparePlayerBeforeStart();
  }
  _buildPlayer() {
    if (this._initialized) return;
    this._initialized = true;
    const keyframes = this.keyframes;
    this.domPlayer = this._triggerWebAnimation(this.element, keyframes, this.options);
    this._finalKeyframe = keyframes.length ? keyframes[keyframes.length - 1] : /* @__PURE__ */ new Map();
    const onFinish = () => this._onFinish();
    this.domPlayer.addEventListener("finish", onFinish);
    this.onDestroy(() => {
      this.domPlayer.removeEventListener("finish", onFinish);
    });
  }
  _preparePlayerBeforeStart() {
    if (this._delay) {
      this._resetDomPlayerState();
    } else {
      this.domPlayer.pause();
    }
  }
  _convertKeyframesToObject(keyframes) {
    const kfs = [];
    keyframes.forEach((frame) => {
      kfs.push(Object.fromEntries(frame));
    });
    return kfs;
  }
  /** @internal */
  _triggerWebAnimation(element, keyframes, options) {
    return element.animate(this._convertKeyframesToObject(keyframes), options);
  }
  onStart(fn) {
    this._originalOnStartFns.push(fn);
    this._onStartFns.push(fn);
  }
  onDone(fn) {
    this._originalOnDoneFns.push(fn);
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  play() {
    this._buildPlayer();
    if (!this.hasStarted()) {
      this._onStartFns.forEach((fn) => fn());
      this._onStartFns = [];
      this._started = true;
      if (this._specialStyles) {
        this._specialStyles.start();
      }
    }
    this.domPlayer.play();
  }
  pause() {
    this.init();
    this.domPlayer.pause();
  }
  finish() {
    this.init();
    if (this._specialStyles) {
      this._specialStyles.finish();
    }
    this._onFinish();
    this.domPlayer.finish();
  }
  reset() {
    this._resetDomPlayerState();
    this._destroyed = false;
    this._finished = false;
    this._started = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  _resetDomPlayerState() {
    if (this.domPlayer) {
      this.domPlayer.cancel();
    }
  }
  restart() {
    this.reset();
    this.play();
  }
  hasStarted() {
    return this._started;
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._resetDomPlayerState();
      this._onFinish();
      if (this._specialStyles) {
        this._specialStyles.destroy();
      }
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  setPosition(p) {
    if (this.domPlayer === void 0) {
      this.init();
    }
    this.domPlayer.currentTime = p * this.time;
  }
  getPosition() {
    return +(this.domPlayer.currentTime ?? 0) / this.time;
  }
  get totalTime() {
    return this._delay + this._duration;
  }
  beforeDestroy() {
    const styles = /* @__PURE__ */ new Map();
    if (this.hasStarted()) {
      const finalKeyframe = this._finalKeyframe;
      finalKeyframe.forEach((val, prop) => {
        if (prop !== "offset") {
          styles.set(prop, this._finished ? val : computeStyle(this.element, prop));
        }
      });
    }
    this.currentSnapshot = styles;
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName === "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var WebAnimationsDriver = class {
  validateStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      return validateStyleProperty(prop);
    }
    return true;
  }
  validateAnimatableStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const cssProp = camelCaseToDashCase(prop);
      return validateWebAnimatableStyleProperty(cssProp);
    }
    return true;
  }
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  getParentElement(element) {
    return getParentElement(element);
  }
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  computeStyle(element, prop, defaultValue) {
    return computeStyle(element, prop);
  }
  animate(element, keyframes, duration, delay2, easing, previousPlayers = []) {
    const fill = delay2 == 0 ? "both" : "forwards";
    const playerOptions = {
      duration,
      delay: delay2,
      fill
    };
    if (easing) {
      playerOptions["easing"] = easing;
    }
    const previousStyles = /* @__PURE__ */ new Map();
    const previousWebAnimationPlayers = previousPlayers.filter((player) => player instanceof WebAnimationsPlayer);
    if (allowPreviousPlayerStylesMerge(duration, delay2)) {
      previousWebAnimationPlayers.forEach((player) => {
        player.currentSnapshot.forEach((val, prop) => previousStyles.set(prop, val));
      });
    }
    let _keyframes = normalizeKeyframes(keyframes).map((styles) => new Map(styles));
    _keyframes = balancePreviousStylesIntoKeyframes(element, _keyframes, previousStyles);
    const specialStyles = packageNonAnimatableStyles(element, _keyframes);
    return new WebAnimationsPlayer(element, _keyframes, playerOptions, specialStyles);
  }
};
var ANIMATION_PREFIX = "@";
var DISABLE_ANIMATIONS_FLAG = "@.disabled";
var BaseAnimationRenderer = class {
  namespaceId;
  delegate;
  engine;
  _onDestroy;
  // We need to explicitly type this property because of an api-extractor bug
  // See https://github.com/microsoft/rushstack/issues/4390
  \u0275type = 0;
  constructor(namespaceId, delegate, engine, _onDestroy) {
    this.namespaceId = namespaceId;
    this.delegate = delegate;
    this.engine = engine;
    this._onDestroy = _onDestroy;
  }
  get data() {
    return this.delegate.data;
  }
  destroyNode(node) {
    this.delegate.destroyNode?.(node);
  }
  destroy() {
    this.engine.destroy(this.namespaceId, this.delegate);
    this.engine.afterFlushAnimationsDone(() => {
      queueMicrotask(() => {
        this.delegate.destroy();
      });
    });
    this._onDestroy?.();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, false);
  }
  insertBefore(parent, newChild, refChild, isMove = true) {
    this.delegate.insertBefore(parent, newChild, refChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    if (this.parentNode(oldChild)) {
      this.engine.onRemove(this.namespaceId, oldChild, this.delegate);
    }
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style2, value, flags) {
    this.delegate.setStyle(el, style2, value, flags);
  }
  removeStyle(el, style2, flags) {
    this.delegate.removeStyle(el, style2, flags);
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX && name == DISABLE_ANIMATIONS_FLAG) {
      this.disableAnimations(el, !!value);
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback, options) {
    return this.delegate.listen(target, eventName, callback, options);
  }
  disableAnimations(element, value) {
    this.engine.disableAnimations(element, value);
  }
};
var AnimationRenderer = class extends BaseAnimationRenderer {
  factory;
  constructor(factory, namespaceId, delegate, engine, onDestroy) {
    super(namespaceId, delegate, engine, onDestroy);
    this.factory = factory;
    this.namespaceId = namespaceId;
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX) {
      if (name.charAt(1) == "." && name == DISABLE_ANIMATIONS_FLAG) {
        value = value === void 0 ? true : !!value;
        this.disableAnimations(el, value);
      } else {
        this.engine.process(this.namespaceId, el, name.slice(1), value);
      }
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  listen(target, eventName, callback, options) {
    if (eventName.charAt(0) == ANIMATION_PREFIX) {
      const element = resolveElementFromTarget(target);
      let name = eventName.slice(1);
      let phase = "";
      if (name.charAt(0) != ANIMATION_PREFIX) {
        [name, phase] = parseTriggerCallbackName(name);
      }
      return this.engine.listen(this.namespaceId, element, name, phase, (event) => {
        const countId = event["_data"] || -1;
        this.factory.scheduleListenerCallback(countId, callback, event);
      });
    }
    return this.delegate.listen(target, eventName, callback, options);
  }
};
function resolveElementFromTarget(target) {
  switch (target) {
    case "body":
      return document.body;
    case "document":
      return document;
    case "window":
      return window;
    default:
      return target;
  }
}
function parseTriggerCallbackName(triggerName) {
  const dotIndex = triggerName.indexOf(".");
  const trigger2 = triggerName.substring(0, dotIndex);
  const phase = triggerName.slice(dotIndex + 1);
  return [trigger2, phase];
}
var AnimationRendererFactory = class {
  delegate;
  engine;
  _zone;
  _currentId = 0;
  _microtaskId = 1;
  _animationCallbacksBuffer = [];
  _rendererCache = /* @__PURE__ */ new Map();
  _cdRecurDepth = 0;
  constructor(delegate, engine, _zone) {
    this.delegate = delegate;
    this.engine = engine;
    this._zone = _zone;
    engine.onRemovalComplete = (element, delegate2) => {
      delegate2?.removeChild(null, element);
    };
  }
  createRenderer(hostElement, type) {
    const EMPTY_NAMESPACE_ID = "";
    const delegate = this.delegate.createRenderer(hostElement, type);
    if (!hostElement || !type?.data?.["animation"]) {
      const cache = this._rendererCache;
      let renderer = cache.get(delegate);
      if (!renderer) {
        const onRendererDestroy = () => cache.delete(delegate);
        renderer = new BaseAnimationRenderer(EMPTY_NAMESPACE_ID, delegate, this.engine, onRendererDestroy);
        cache.set(delegate, renderer);
      }
      return renderer;
    }
    const componentId = type.id;
    const namespaceId = type.id + "-" + this._currentId;
    this._currentId++;
    this.engine.register(namespaceId, hostElement);
    const registerTrigger = (trigger2) => {
      if (Array.isArray(trigger2)) {
        trigger2.forEach(registerTrigger);
      } else {
        this.engine.registerTrigger(componentId, namespaceId, hostElement, trigger2.name, trigger2);
      }
    };
    const animationTriggers = type.data["animation"];
    animationTriggers.forEach(registerTrigger);
    return new AnimationRenderer(this, namespaceId, delegate, this.engine);
  }
  begin() {
    this._cdRecurDepth++;
    if (this.delegate.begin) {
      this.delegate.begin();
    }
  }
  _scheduleCountTask() {
    queueMicrotask(() => {
      this._microtaskId++;
    });
  }
  /** @internal */
  scheduleListenerCallback(count, fn, data) {
    if (count >= 0 && count < this._microtaskId) {
      this._zone.run(() => fn(data));
      return;
    }
    const animationCallbacksBuffer = this._animationCallbacksBuffer;
    if (animationCallbacksBuffer.length == 0) {
      queueMicrotask(() => {
        this._zone.run(() => {
          animationCallbacksBuffer.forEach((tuple) => {
            const [fn2, data2] = tuple;
            fn2(data2);
          });
          this._animationCallbacksBuffer = [];
        });
      });
    }
    animationCallbacksBuffer.push([fn, data]);
  }
  end() {
    this._cdRecurDepth--;
    if (this._cdRecurDepth == 0) {
      this._zone.runOutsideAngular(() => {
        this._scheduleCountTask();
        this.engine.flush(this._microtaskId);
      });
    }
    if (this.delegate.end) {
      this.delegate.end();
    }
  }
  whenRenderingDone() {
    return this.engine.whenRenderingDone();
  }
  /**
   * Used during HMR to clear any cached data about a component.
   * @param componentId ID of the component that is being replaced.
   */
  componentReplaced(componentId) {
    this.engine.flush();
    this.delegate.componentReplaced?.(componentId);
  }
};

// node_modules/@angular/platform-browser/fesm2022/animations.mjs
var InjectableAnimationEngine = class _InjectableAnimationEngine extends AnimationEngine {
  // The `ApplicationRef` is injected here explicitly to force the dependency ordering.
  // Since the `ApplicationRef` should be created earlier before the `AnimationEngine`, they
  // both have `ngOnDestroy` hooks and `flush()` must be called after all views are destroyed.
  constructor(doc, driver, normalizer) {
    super(doc, driver, normalizer);
  }
  ngOnDestroy() {
    this.flush();
  }
  static \u0275fac = function InjectableAnimationEngine_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InjectableAnimationEngine)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(AnimationDriver), \u0275\u0275inject(AnimationStyleNormalizer));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InjectableAnimationEngine,
    factory: _InjectableAnimationEngine.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InjectableAnimationEngine, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: AnimationDriver
  }, {
    type: AnimationStyleNormalizer
  }], null);
})();
function instantiateDefaultStyleNormalizer() {
  return new WebAnimationsStyleNormalizer();
}
function instantiateRendererFactory(renderer, engine, zone) {
  return new AnimationRendererFactory(renderer, engine, zone);
}
var SHARED_ANIMATION_PROVIDERS = [{
  provide: AnimationStyleNormalizer,
  useFactory: instantiateDefaultStyleNormalizer
}, {
  provide: AnimationEngine,
  useClass: InjectableAnimationEngine
}, {
  provide: RendererFactory2,
  useFactory: instantiateRendererFactory,
  deps: [DomRendererFactory2, AnimationEngine, NgZone]
}];
var BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useClass: NoopAnimationDriver
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "NoopAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BROWSER_ANIMATIONS_PROVIDERS = [
  // Note: the `ngServerMode` happen inside factories to give the variable time to initialize.
  {
    provide: AnimationDriver,
    useFactory: () => false ? new NoopAnimationDriver() : new WebAnimationsDriver()
  },
  {
    provide: ANIMATION_MODULE_TYPE,
    useFactory: () => false ? "NoopAnimations" : "BrowserAnimations"
  },
  ...SHARED_ANIMATION_PROVIDERS
];
var BrowserAnimationsModule = class _BrowserAnimationsModule {
  /**
   * Configures the module based on the specified object.
   *
   * @param config Object used to configure the behavior of the `BrowserAnimationsModule`.
   * @see {@link BrowserAnimationsModuleConfig}
   *
   * @usageNotes
   * When registering the `BrowserAnimationsModule`, you can use the `withConfig`
   * function as follows:
   * ```ts
   * @NgModule({
   *   imports: [BrowserAnimationsModule.withConfig(config)]
   * })
   * class MyNgModule {}
   * ```
   */
  static withConfig(config) {
    return {
      ngModule: _BrowserAnimationsModule,
      providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
    };
  }
  static \u0275fac = function BrowserAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserAnimationsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BrowserAnimationsModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: BROWSER_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
function provideAnimations() {
  performanceMarkFeature("NgEagerAnimations");
  return [...BROWSER_ANIMATIONS_PROVIDERS];
}
var NoopAnimationsModule = class _NoopAnimationsModule {
  static \u0275fac = function NoopAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoopAnimationsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NoopAnimationsModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();

// src/app/core/models/user-role.enum.ts
var UserRole;
(function(UserRole2) {
  UserRole2["JOB_SEEKER"] = "JOB_SEEKER";
  UserRole2["EMPLOYER"] = "EMPLOYER";
  UserRole2["ADMIN"] = "ADMIN";
})(UserRole || (UserRole = {}));

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  http;
  currentUserSubject = new BehaviorSubject(null);
  currentUser$ = this.currentUserSubject.asObservable();
  // Mock users for testing
  mockUsers = [
    {
      id: "1",
      email: "jobseeker@example.com",
      role: UserRole.JOB_SEEKER,
      token: "mock-token-1"
    },
    {
      id: "2",
      email: "employer@example.com",
      role: UserRole.EMPLOYER,
      token: "mock-token-2"
    },
    {
      id: "3",
      email: "admin@example.com",
      role: UserRole.ADMIN,
      token: "mock-token-3"
    }
  ];
  constructor(http) {
    this.http = http;
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      this.currentUserSubject.next(JSON.parse(storedUser));
    }
  }
  login(email, password) {
    const user = this.mockUsers.find((u) => u.email === email);
    if (user) {
      return of(user).pipe(
        delay(1e3),
        // Simulate network delay
        tap((user2) => {
          localStorage.setItem("currentUser", JSON.stringify(user2));
          this.currentUserSubject.next(user2);
        })
      );
    }
    throw new Error("Invalid email or password");
  }
  logout() {
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }
  isAuthenticated() {
    return !!this.currentUserSubject.value;
  }
  getCurrentUser() {
    return this.currentUserSubject.value;
  }
  getToken() {
    return this.currentUserSubject.value?.token || null;
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};

// src/app/core/guards/auth.guard.ts
var AuthGuard = class _AuthGuard {
  authService;
  router;
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    this.router.navigate(["/auth/login"]);
    return false;
  }
  static \u0275fac = function AuthGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthGuard)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
};

// src/app/core/guards/role.guard.ts
var RoleGuard = class _RoleGuard {
  authService;
  router;
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state2) {
    const requiredRole = route.data["role"];
    const currentUser = this.authService.getCurrentUser();
    if (!currentUser || currentUser.role !== requiredRole) {
      this.router.navigate(["/auth/login"]);
      return false;
    }
    return true;
  }
  static \u0275fac = function RoleGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoleGuard)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RoleGuard, factory: _RoleGuard.\u0275fac, providedIn: "root" });
};

// src/app/shared/components/form-validation/form-validation.component.ts
function FormValidationComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.fieldName, " is required");
  }
}
function FormValidationComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span");
    \u0275\u0275text(2, "Please enter a valid email address");
    \u0275\u0275elementEnd()();
  }
}
function FormValidationComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.fieldName, " must be at least ", ctx_r0.control.getError("minlength").requiredLength, " characters");
  }
}
function FormValidationComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.fieldName, " cannot exceed ", ctx_r0.control.getError("maxlength").requiredLength, " characters");
  }
}
function FormValidationComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getPatternErrorMessage());
  }
}
function FormValidationComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.fieldName, " must be at least ", ctx_r0.control.getError("min").min, "");
  }
}
function FormValidationComponent_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.fieldName, " cannot exceed ", ctx_r0.control.getError("max").max, "");
  }
}
function FormValidationComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.control.getError("custom"));
  }
}
function FormValidationComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, FormValidationComponent_div_0_div_1_Template, 3, 1, "div", 2)(2, FormValidationComponent_div_0_div_2_Template, 3, 0, "div", 2)(3, FormValidationComponent_div_0_div_3_Template, 3, 2, "div", 2)(4, FormValidationComponent_div_0_div_4_Template, 3, 2, "div", 2)(5, FormValidationComponent_div_0_div_5_Template, 3, 1, "div", 2)(6, FormValidationComponent_div_0_div_6_Template, 3, 2, "div", 2)(7, FormValidationComponent_div_0_div_7_Template, 3, 2, "div", 2)(8, FormValidationComponent_div_0_div_8_Template, 3, 1, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.control.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.control.hasError("email"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.control.hasError("minlength"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.control.hasError("maxlength"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.control.hasError("pattern"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.control.hasError("min"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.control.hasError("max"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.control.hasError("custom"));
  }
}
var FormValidationComponent = class _FormValidationComponent {
  control = null;
  fieldName = "This field";
  getPatternErrorMessage() {
    const pattern = this.control?.getError("pattern")?.requiredPattern;
    if (!pattern)
      return "Invalid format";
    const patternMessages = {
      "^[a-zA-Z]*$": "Only letters are allowed",
      "^[0-9]*$": "Only numbers are allowed",
      "^[a-zA-Z0-9]*$": "Only letters and numbers are allowed",
      "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$": "Please enter a valid email address",
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$": "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number"
    };
    return patternMessages[pattern] || "Invalid format";
  }
  static \u0275fac = function FormValidationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormValidationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormValidationComponent, selectors: [["app-form-validation"]], inputs: { control: "control", fieldName: "fieldName" }, decls: 1, vars: 1, consts: [["class", "validation-messages", 4, "ngIf"], [1, "validation-messages"], ["class", "error-message", 4, "ngIf"], [1, "error-message"]], template: function FormValidationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, FormValidationComponent_div_0_Template, 9, 8, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.control && ctx.control.invalid && (ctx.control.dirty || ctx.control.touched));
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ], styles: ["\n\n.validation-messages[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.error-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #f44336;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.error-message[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  margin-right: 4px;\n}\n/*# sourceMappingURL=form-validation.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormValidationComponent, { className: "FormValidationComponent", filePath: "src/app/shared/components/form-validation/form-validation.component.ts", lineNumber: 88 });
})();

// node_modules/@angular/material/fesm2022/progress-spinner.mjs
var _c0 = ["determinateSpinner"];
function MatProgressSpinner_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 11);
    \u0275\u0275element(1, "circle", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("viewBox", ctx_r0._viewBox());
    \u0275\u0275advance();
    \u0275\u0275styleProp("stroke-dasharray", ctx_r0._strokeCircumference(), "px")("stroke-dashoffset", ctx_r0._strokeCircumference() / 2, "px")("stroke-width", ctx_r0._circleStrokeWidth(), "%");
    \u0275\u0275attribute("r", ctx_r0._circleRadius());
  }
}
var MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS = new InjectionToken("mat-progress-spinner-default-options", {
  providedIn: "root",
  factory: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY
});
function MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY() {
  return {
    diameter: BASE_SIZE
  };
}
var BASE_SIZE = 100;
var BASE_STROKE_WIDTH = 10;
var MatProgressSpinner = class _MatProgressSpinner {
  _elementRef = inject(ElementRef);
  /** Whether the _mat-animation-noopable class should be applied, disabling animations.  */
  _noopAnimations;
  // TODO: should be typed as `ThemePalette` but internal apps pass in arbitrary strings.
  /**
   * Theme color of the progress spinner. This API is supported in M2 themes only, it
   * has no effect in M3 themes. For color customization in M3, see https://material.angular.io/components/progress-spinner/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.io/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  get color() {
    return this._color || this._defaultColor;
  }
  set color(value) {
    this._color = value;
  }
  _color;
  _defaultColor = "primary";
  /** The element of the determinate spinner. */
  _determinateCircle;
  constructor() {
    const animationMode = inject(ANIMATION_MODULE_TYPE, {
      optional: true
    });
    const defaults = inject(MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS);
    this._noopAnimations = animationMode === "NoopAnimations" && !!defaults && !defaults._forceAnimations;
    this.mode = this._elementRef.nativeElement.nodeName.toLowerCase() === "mat-spinner" ? "indeterminate" : "determinate";
    if (defaults) {
      if (defaults.color) {
        this.color = this._defaultColor = defaults.color;
      }
      if (defaults.diameter) {
        this.diameter = defaults.diameter;
      }
      if (defaults.strokeWidth) {
        this.strokeWidth = defaults.strokeWidth;
      }
    }
  }
  /**
   * Mode of the progress bar.
   *
   * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
   * 'determinate'.
   * Mirrored to mode attribute.
   */
  mode;
  /** Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow. */
  get value() {
    return this.mode === "determinate" ? this._value : 0;
  }
  set value(v) {
    this._value = Math.max(0, Math.min(100, v || 0));
  }
  _value = 0;
  /** The diameter of the progress spinner (will set width and height of svg). */
  get diameter() {
    return this._diameter;
  }
  set diameter(size) {
    this._diameter = size || 0;
  }
  _diameter = BASE_SIZE;
  /** Stroke width of the progress spinner. */
  get strokeWidth() {
    return this._strokeWidth ?? this.diameter / 10;
  }
  set strokeWidth(value) {
    this._strokeWidth = value || 0;
  }
  _strokeWidth;
  /** The radius of the spinner, adjusted for stroke width. */
  _circleRadius() {
    return (this.diameter - BASE_STROKE_WIDTH) / 2;
  }
  /** The view box of the spinner's svg element. */
  _viewBox() {
    const viewBox = this._circleRadius() * 2 + this.strokeWidth;
    return `0 0 ${viewBox} ${viewBox}`;
  }
  /** The stroke circumference of the svg circle. */
  _strokeCircumference() {
    return 2 * Math.PI * this._circleRadius();
  }
  /** The dash offset of the svg circle. */
  _strokeDashOffset() {
    if (this.mode === "determinate") {
      return this._strokeCircumference() * (100 - this._value) / 100;
    }
    return null;
  }
  /** Stroke width of the circle in percent. */
  _circleStrokeWidth() {
    return this.strokeWidth / this.diameter * 100;
  }
  static \u0275fac = function MatProgressSpinner_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressSpinner)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatProgressSpinner,
    selectors: [["mat-progress-spinner"], ["mat-spinner"]],
    viewQuery: function MatProgressSpinner_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._determinateCircle = _t.first);
      }
    },
    hostAttrs: ["role", "progressbar", "tabindex", "-1", 1, "mat-mdc-progress-spinner", "mdc-circular-progress"],
    hostVars: 18,
    hostBindings: function MatProgressSpinner_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-valuemin", 0)("aria-valuemax", 100)("aria-valuenow", ctx.mode === "determinate" ? ctx.value : null)("mode", ctx.mode);
        \u0275\u0275classMap("mat-" + ctx.color);
        \u0275\u0275styleProp("width", ctx.diameter, "px")("height", ctx.diameter, "px")("--mdc-circular-progress-size", ctx.diameter + "px")("--mdc-circular-progress-active-indicator-width", ctx.diameter + "px");
        \u0275\u0275classProp("_mat-animation-noopable", ctx._noopAnimations)("mdc-circular-progress--indeterminate", ctx.mode === "indeterminate");
      }
    },
    inputs: {
      color: "color",
      mode: "mode",
      value: [2, "value", "value", numberAttribute],
      diameter: [2, "diameter", "diameter", numberAttribute],
      strokeWidth: [2, "strokeWidth", "strokeWidth", numberAttribute]
    },
    exportAs: ["matProgressSpinner"],
    decls: 14,
    vars: 11,
    consts: [["circle", ""], ["determinateSpinner", ""], ["aria-hidden", "true", 1, "mdc-circular-progress__determinate-container"], ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", 1, "mdc-circular-progress__determinate-circle-graphic"], ["cx", "50%", "cy", "50%", 1, "mdc-circular-progress__determinate-circle"], ["aria-hidden", "true", 1, "mdc-circular-progress__indeterminate-container"], [1, "mdc-circular-progress__spinner-layer"], [1, "mdc-circular-progress__circle-clipper", "mdc-circular-progress__circle-left"], [3, "ngTemplateOutlet"], [1, "mdc-circular-progress__gap-patch"], [1, "mdc-circular-progress__circle-clipper", "mdc-circular-progress__circle-right"], ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", 1, "mdc-circular-progress__indeterminate-circle-graphic"], ["cx", "50%", "cy", "50%"]],
    template: function MatProgressSpinner_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MatProgressSpinner_ng_template_0_Template, 2, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(2, "div", 2, 1);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(4, "svg", 3);
        \u0275\u0275element(5, "circle", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "div", 7);
        \u0275\u0275elementContainer(9, 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 9);
        \u0275\u0275elementContainer(11, 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 10);
        \u0275\u0275elementContainer(13, 8);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const circle_r2 = \u0275\u0275reference(1);
        \u0275\u0275advance(4);
        \u0275\u0275attribute("viewBox", ctx._viewBox());
        \u0275\u0275advance();
        \u0275\u0275styleProp("stroke-dasharray", ctx._strokeCircumference(), "px")("stroke-dashoffset", ctx._strokeDashOffset(), "px")("stroke-width", ctx._circleStrokeWidth(), "%");
        \u0275\u0275attribute("r", ctx._circleRadius());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngTemplateOutlet", circle_r2);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", circle_r2);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", circle_r2);
      }
    },
    dependencies: [NgTemplateOutlet],
    styles: [".mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0;position:relative;direction:ltr;transition:opacity 250ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width, 4px)}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1;animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color, var(--mat-sys-primary))}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressSpinner, [{
    type: Component,
    args: [{
      selector: "mat-progress-spinner, mat-spinner",
      exportAs: "matProgressSpinner",
      host: {
        "role": "progressbar",
        "class": "mat-mdc-progress-spinner mdc-circular-progress",
        // set tab index to -1 so screen readers will read the aria-label
        // Note: there is a known issue with JAWS that does not read progressbar aria labels on FireFox
        "tabindex": "-1",
        "[class]": '"mat-" + color',
        "[class._mat-animation-noopable]": `_noopAnimations`,
        "[class.mdc-circular-progress--indeterminate]": 'mode === "indeterminate"',
        "[style.width.px]": "diameter",
        "[style.height.px]": "diameter",
        "[style.--mdc-circular-progress-size]": 'diameter + "px"',
        "[style.--mdc-circular-progress-active-indicator-width]": 'diameter + "px"',
        "[attr.aria-valuemin]": "0",
        "[attr.aria-valuemax]": "100",
        "[attr.aria-valuenow]": 'mode === "determinate" ? value : null',
        "[attr.mode]": "mode"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      imports: [NgTemplateOutlet],
      template: '<ng-template #circle>\n  <svg [attr.viewBox]="_viewBox()" class="mdc-circular-progress__indeterminate-circle-graphic"\n       xmlns="http://www.w3.org/2000/svg" focusable="false">\n    <circle [attr.r]="_circleRadius()"\n            [style.stroke-dasharray.px]="_strokeCircumference()"\n            [style.stroke-dashoffset.px]="_strokeCircumference() / 2"\n            [style.stroke-width.%]="_circleStrokeWidth()"\n            cx="50%" cy="50%"/>\n  </svg>\n</ng-template>\n\n<!--\n  All children need to be hidden for screen readers in order to support ChromeVox.\n  More context in the issue: https://github.com/angular/components/issues/22165.\n-->\n<div class="mdc-circular-progress__determinate-container" aria-hidden="true" #determinateSpinner>\n  <svg [attr.viewBox]="_viewBox()" class="mdc-circular-progress__determinate-circle-graphic"\n       xmlns="http://www.w3.org/2000/svg" focusable="false">\n    <circle [attr.r]="_circleRadius()"\n            [style.stroke-dasharray.px]="_strokeCircumference()"\n            [style.stroke-dashoffset.px]="_strokeDashOffset()"\n            [style.stroke-width.%]="_circleStrokeWidth()"\n            class="mdc-circular-progress__determinate-circle"\n            cx="50%" cy="50%"/>\n  </svg>\n</div>\n<!--TODO: figure out why there are 3 separate svgs-->\n<div class="mdc-circular-progress__indeterminate-container" aria-hidden="true">\n  <div class="mdc-circular-progress__spinner-layer">\n    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n    <div class="mdc-circular-progress__gap-patch">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n  </div>\n</div>\n',
      styles: [".mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0;position:relative;direction:ltr;transition:opacity 250ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width, 4px)}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1;animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color, var(--mat-sys-primary))}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}"]
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    _determinateCircle: [{
      type: ViewChild,
      args: ["determinateSpinner"]
    }],
    mode: [{
      type: Input
    }],
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    diameter: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    strokeWidth: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }]
  });
})();
var MatSpinner = MatProgressSpinner;
var MatProgressSpinnerModule = class _MatProgressSpinnerModule {
  static \u0275fac = function MatProgressSpinnerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressSpinnerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatProgressSpinnerModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressSpinnerModule, [{
    type: NgModule,
    args: [{
      imports: [MatProgressSpinner, MatSpinner],
      exports: [MatProgressSpinner, MatSpinner, MatCommonModule]
    }]
  }], null, null);
})();

// src/app/shared/components/loading-spinner/loading-spinner.component.ts
var _c02 = (a0) => ({ "full-screen": a0 });
function LoadingSpinnerComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.message);
  }
}
var LoadingSpinnerComponent = class _LoadingSpinnerComponent {
  size = 50;
  mode = "indeterminate";
  color = "primary";
  value = 0;
  message = "";
  fullScreen = false;
  static \u0275fac = function LoadingSpinnerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoadingSpinnerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoadingSpinnerComponent, selectors: [["app-loading-spinner"]], inputs: { size: "size", mode: "mode", color: "color", value: "value", message: "message", fullScreen: "fullScreen" }, decls: 3, vars: 8, consts: [[1, "loading-container", 3, "ngClass"], [3, "diameter", "mode", "color", "value"], ["class", "loading-message", 4, "ngIf"], [1, "loading-message"]], template: function LoadingSpinnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "mat-spinner", 1);
      \u0275\u0275template(2, LoadingSpinnerComponent_div_2_Template, 2, 1, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c02, ctx.fullScreen));
      \u0275\u0275advance();
      \u0275\u0275property("diameter", ctx.size)("mode", ctx.mode)("color", ctx.color)("value", ctx.value);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.message);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.full-screen[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.8);\n  z-index: 1000;\n}\n.loading-message[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: 14px;\n  color: #666;\n}\n/*# sourceMappingURL=loading-spinner.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoadingSpinnerComponent, { className: "LoadingSpinnerComponent", filePath: "src/app/shared/components/loading-spinner/loading-spinner.component.ts", lineNumber: 48 });
})();

// node_modules/@angular/cdk/fesm2022/layout.mjs
var LayoutModule = class _LayoutModule {
  static \u0275fac = function LayoutModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _LayoutModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var Breakpoints = {
  XSmall: "(max-width: 599.98px)",
  Small: "(min-width: 600px) and (max-width: 959.98px)",
  Medium: "(min-width: 960px) and (max-width: 1279.98px)",
  Large: "(min-width: 1280px) and (max-width: 1919.98px)",
  XLarge: "(min-width: 1920px)",
  Handset: "(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",
  Tablet: "(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",
  Web: "(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",
  HandsetPortrait: "(max-width: 599.98px) and (orientation: portrait)",
  TabletPortrait: "(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",
  WebPortrait: "(min-width: 840px) and (orientation: portrait)",
  HandsetLandscape: "(max-width: 959.98px) and (orientation: landscape)",
  TabletLandscape: "(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",
  WebLandscape: "(min-width: 1280px) and (orientation: landscape)"
};

// node_modules/@angular/material/fesm2022/snack-bar.mjs
function SimpleSnackBar_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "button", 2);
    \u0275\u0275listener("click", function SimpleSnackBar_Conditional_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.action());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.data.action, " ");
  }
}
var _c03 = ["label"];
function MatSnackBarContainer_ng_template_4_Template(rf, ctx) {
}
var MAX_TIMEOUT = Math.pow(2, 31) - 1;
var MatSnackBarRef = class {
  _overlayRef;
  /** The instance of the component making up the content of the snack bar. */
  instance;
  /**
   * The instance of the component making up the content of the snack bar.
   * @docs-private
   */
  containerInstance;
  /** Subject for notifying the user that the snack bar has been dismissed. */
  _afterDismissed = new Subject();
  /** Subject for notifying the user that the snack bar has opened and appeared. */
  _afterOpened = new Subject();
  /** Subject for notifying the user that the snack bar action was called. */
  _onAction = new Subject();
  /**
   * Timeout ID for the duration setTimeout call. Used to clear the timeout if the snackbar is
   * dismissed before the duration passes.
   */
  _durationTimeoutId;
  /** Whether the snack bar was dismissed using the action button. */
  _dismissedByAction = false;
  constructor(containerInstance, _overlayRef) {
    this._overlayRef = _overlayRef;
    this.containerInstance = containerInstance;
    containerInstance._onExit.subscribe(() => this._finishDismiss());
  }
  /** Dismisses the snack bar. */
  dismiss() {
    if (!this._afterDismissed.closed) {
      this.containerInstance.exit();
    }
    clearTimeout(this._durationTimeoutId);
  }
  /** Marks the snackbar action clicked. */
  dismissWithAction() {
    if (!this._onAction.closed) {
      this._dismissedByAction = true;
      this._onAction.next();
      this._onAction.complete();
      this.dismiss();
    }
    clearTimeout(this._durationTimeoutId);
  }
  /**
   * Marks the snackbar action clicked.
   * @deprecated Use `dismissWithAction` instead.
   * @breaking-change 8.0.0
   */
  closeWithAction() {
    this.dismissWithAction();
  }
  /** Dismisses the snack bar after some duration */
  _dismissAfter(duration) {
    this._durationTimeoutId = setTimeout(() => this.dismiss(), Math.min(duration, MAX_TIMEOUT));
  }
  /** Marks the snackbar as opened */
  _open() {
    if (!this._afterOpened.closed) {
      this._afterOpened.next();
      this._afterOpened.complete();
    }
  }
  /** Cleans up the DOM after closing. */
  _finishDismiss() {
    this._overlayRef.dispose();
    if (!this._onAction.closed) {
      this._onAction.complete();
    }
    this._afterDismissed.next({
      dismissedByAction: this._dismissedByAction
    });
    this._afterDismissed.complete();
    this._dismissedByAction = false;
  }
  /** Gets an observable that is notified when the snack bar is finished closing. */
  afterDismissed() {
    return this._afterDismissed;
  }
  /** Gets an observable that is notified when the snack bar has opened and appeared. */
  afterOpened() {
    return this.containerInstance._onEnter;
  }
  /** Gets an observable that is notified when the snack bar action is called. */
  onAction() {
    return this._onAction;
  }
};
var MAT_SNACK_BAR_DATA = new InjectionToken("MatSnackBarData");
var MatSnackBarConfig = class {
  /** The politeness level for the MatAriaLiveAnnouncer announcement. */
  politeness = "assertive";
  /**
   * Message to be announced by the LiveAnnouncer. When opening a snackbar without a custom
   * component or template, the announcement message will default to the specified message.
   */
  announcementMessage = "";
  /**
   * The view container that serves as the parent for the snackbar for the purposes of dependency
   * injection. Note: this does not affect where the snackbar is inserted in the DOM.
   */
  viewContainerRef;
  /** The length of time in milliseconds to wait before automatically dismissing the snack bar. */
  duration = 0;
  /** Extra CSS classes to be added to the snack bar container. */
  panelClass;
  /** Text layout direction for the snack bar. */
  direction;
  /** Data being injected into the child component. */
  data = null;
  /** The horizontal position to place the snack bar. */
  horizontalPosition = "center";
  /** The vertical position to place the snack bar. */
  verticalPosition = "bottom";
};
var MatSnackBarLabel = class _MatSnackBarLabel {
  static \u0275fac = function MatSnackBarLabel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSnackBarLabel)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSnackBarLabel,
    selectors: [["", "matSnackBarLabel", ""]],
    hostAttrs: [1, "mat-mdc-snack-bar-label", "mdc-snackbar__label"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSnackBarLabel, [{
    type: Directive,
    args: [{
      selector: `[matSnackBarLabel]`,
      host: {
        "class": "mat-mdc-snack-bar-label mdc-snackbar__label"
      }
    }]
  }], null, null);
})();
var MatSnackBarActions = class _MatSnackBarActions {
  static \u0275fac = function MatSnackBarActions_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSnackBarActions)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSnackBarActions,
    selectors: [["", "matSnackBarActions", ""]],
    hostAttrs: [1, "mat-mdc-snack-bar-actions", "mdc-snackbar__actions"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSnackBarActions, [{
    type: Directive,
    args: [{
      selector: `[matSnackBarActions]`,
      host: {
        "class": "mat-mdc-snack-bar-actions mdc-snackbar__actions"
      }
    }]
  }], null, null);
})();
var MatSnackBarAction = class _MatSnackBarAction {
  static \u0275fac = function MatSnackBarAction_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSnackBarAction)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSnackBarAction,
    selectors: [["", "matSnackBarAction", ""]],
    hostAttrs: [1, "mat-mdc-snack-bar-action", "mdc-snackbar__action"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSnackBarAction, [{
    type: Directive,
    args: [{
      selector: `[matSnackBarAction]`,
      host: {
        "class": "mat-mdc-snack-bar-action mdc-snackbar__action"
      }
    }]
  }], null, null);
})();
var SimpleSnackBar = class _SimpleSnackBar {
  snackBarRef = inject(MatSnackBarRef);
  data = inject(MAT_SNACK_BAR_DATA);
  constructor() {
  }
  /** Performs the action on the snack bar. */
  action() {
    this.snackBarRef.dismissWithAction();
  }
  /** If the action button should be shown. */
  get hasAction() {
    return !!this.data.action;
  }
  static \u0275fac = function SimpleSnackBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SimpleSnackBar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SimpleSnackBar,
    selectors: [["simple-snack-bar"]],
    hostAttrs: [1, "mat-mdc-simple-snack-bar"],
    exportAs: ["matSnackBar"],
    decls: 3,
    vars: 2,
    consts: [["matSnackBarLabel", ""], ["matSnackBarActions", ""], ["mat-button", "", "matSnackBarAction", "", 3, "click"]],
    template: function SimpleSnackBar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275text(1);
        \u0275\u0275elementEnd();
        \u0275\u0275template(2, SimpleSnackBar_Conditional_2_Template, 3, 1, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.data.message, "\n");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.hasAction ? 2 : -1);
      }
    },
    dependencies: [MatButton, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction],
    styles: [".mat-mdc-simple-snack-bar{display:flex}"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SimpleSnackBar, [{
    type: Component,
    args: [{
      selector: "simple-snack-bar",
      exportAs: "matSnackBar",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MatButton, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction],
      host: {
        "class": "mat-mdc-simple-snack-bar"
      },
      template: '<div matSnackBarLabel>\n  {{data.message}}\n</div>\n\n@if (hasAction) {\n  <div matSnackBarActions>\n    <button mat-button matSnackBarAction (click)="action()">\n      {{data.action}}\n    </button>\n  </div>\n}\n',
      styles: [".mat-mdc-simple-snack-bar{display:flex}"]
    }]
  }], () => [], null);
})();
var ENTER_ANIMATION = "_mat-snack-bar-enter";
var EXIT_ANIMATION = "_mat-snack-bar-exit";
var MatSnackBarContainer = class _MatSnackBarContainer extends BasePortalOutlet {
  _ngZone = inject(NgZone);
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _platform = inject(Platform);
  _rendersRef;
  _animationsDisabled = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  }) === "NoopAnimations";
  snackBarConfig = inject(MatSnackBarConfig);
  _document = inject(DOCUMENT);
  _trackedModals = /* @__PURE__ */ new Set();
  _enterFallback;
  _exitFallback;
  _renders = new Subject();
  /** The number of milliseconds to wait before announcing the snack bar's content. */
  _announceDelay = 150;
  /** The timeout for announcing the snack bar's content. */
  _announceTimeoutId;
  /** Whether the component has been destroyed. */
  _destroyed = false;
  /** The portal outlet inside of this container into which the snack bar content will be loaded. */
  _portalOutlet;
  /** Subject for notifying that the snack bar has announced to screen readers. */
  _onAnnounce = new Subject();
  /** Subject for notifying that the snack bar has exited from view. */
  _onExit = new Subject();
  /** Subject for notifying that the snack bar has finished entering the view. */
  _onEnter = new Subject();
  /** The state of the snack bar animations. */
  _animationState = "void";
  /** aria-live value for the live region. */
  _live;
  /**
   * Element that will have the `mdc-snackbar__label` class applied if the attached component
   * or template does not have it. This ensures that the appropriate structure, typography, and
   * color is applied to the attached view.
   */
  _label;
  /**
   * Role of the live region. This is only for Firefox as there is a known issue where Firefox +
   * JAWS does not read out aria-live message.
   */
  _role;
  /** Unique ID of the aria-live element. */
  _liveElementId = inject(_IdGenerator).getId("mat-snack-bar-container-live-");
  constructor() {
    super();
    const config = this.snackBarConfig;
    if (config.politeness === "assertive" && !config.announcementMessage) {
      this._live = "assertive";
    } else if (config.politeness === "off") {
      this._live = "off";
    } else {
      this._live = "polite";
    }
    if (this._platform.FIREFOX) {
      if (this._live === "polite") {
        this._role = "status";
      }
      if (this._live === "assertive") {
        this._role = "alert";
      }
    }
    this._rendersRef = afterRender(() => this._renders.next(), {
      manualCleanup: true
    });
  }
  /** Attach a component portal as content to this snack bar container. */
  attachComponentPortal(portal) {
    this._assertNotAttached();
    const result = this._portalOutlet.attachComponentPortal(portal);
    this._afterPortalAttached();
    return result;
  }
  /** Attach a template portal as content to this snack bar container. */
  attachTemplatePortal(portal) {
    this._assertNotAttached();
    const result = this._portalOutlet.attachTemplatePortal(portal);
    this._afterPortalAttached();
    return result;
  }
  /**
   * Attaches a DOM portal to the snack bar container.
   * @deprecated To be turned into a method.
   * @breaking-change 10.0.0
   */
  attachDomPortal = (portal) => {
    this._assertNotAttached();
    const result = this._portalOutlet.attachDomPortal(portal);
    this._afterPortalAttached();
    return result;
  };
  /** Handle end of animations, updating the state of the snackbar. */
  onAnimationEnd(animationName) {
    if (animationName === EXIT_ANIMATION) {
      this._completeExit();
    } else if (animationName === ENTER_ANIMATION) {
      clearTimeout(this._enterFallback);
      this._ngZone.run(() => {
        this._onEnter.next();
        this._onEnter.complete();
      });
    }
  }
  /** Begin animation of snack bar entrance into view. */
  enter() {
    if (!this._destroyed) {
      this._animationState = "visible";
      this._changeDetectorRef.markForCheck();
      this._changeDetectorRef.detectChanges();
      this._screenReaderAnnounce();
      if (this._animationsDisabled) {
        this._renders.pipe(take(1)).subscribe(() => {
          this._ngZone.run(() => queueMicrotask(() => this.onAnimationEnd(ENTER_ANIMATION)));
        });
      } else {
        clearTimeout(this._enterFallback);
        this._enterFallback = setTimeout(() => {
          this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible");
          this.onAnimationEnd(ENTER_ANIMATION);
        }, 200);
      }
    }
  }
  /** Begin animation of the snack bar exiting from view. */
  exit() {
    if (this._destroyed) {
      return of(void 0);
    }
    this._ngZone.run(() => {
      this._animationState = "hidden";
      this._changeDetectorRef.markForCheck();
      this._elementRef.nativeElement.setAttribute("mat-exit", "");
      clearTimeout(this._announceTimeoutId);
      if (this._animationsDisabled) {
        this._renders.pipe(take(1)).subscribe(() => {
          this._ngZone.run(() => queueMicrotask(() => this.onAnimationEnd(EXIT_ANIMATION)));
        });
      } else {
        clearTimeout(this._exitFallback);
        this._exitFallback = setTimeout(() => this.onAnimationEnd(EXIT_ANIMATION), 200);
      }
    });
    return this._onExit;
  }
  /** Makes sure the exit callbacks have been invoked when the element is destroyed. */
  ngOnDestroy() {
    this._destroyed = true;
    this._clearFromModals();
    this._completeExit();
    this._renders.complete();
    this._rendersRef.destroy();
  }
  _completeExit() {
    clearTimeout(this._exitFallback);
    queueMicrotask(() => {
      this._onExit.next();
      this._onExit.complete();
    });
  }
  /**
   * Called after the portal contents have been attached. Can be
   * used to modify the DOM once it's guaranteed to be in place.
   */
  _afterPortalAttached() {
    const element = this._elementRef.nativeElement;
    const panelClasses = this.snackBarConfig.panelClass;
    if (panelClasses) {
      if (Array.isArray(panelClasses)) {
        panelClasses.forEach((cssClass) => element.classList.add(cssClass));
      } else {
        element.classList.add(panelClasses);
      }
    }
    this._exposeToModals();
    const label = this._label.nativeElement;
    const labelClass = "mdc-snackbar__label";
    label.classList.toggle(labelClass, !label.querySelector(`.${labelClass}`));
  }
  /**
   * Some browsers won't expose the accessibility node of the live element if there is an
   * `aria-modal` and the live element is outside of it. This method works around the issue by
   * pointing the `aria-owns` of all modals to the live element.
   */
  _exposeToModals() {
    const id = this._liveElementId;
    const modals = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');
    for (let i = 0; i < modals.length; i++) {
      const modal = modals[i];
      const ariaOwns = modal.getAttribute("aria-owns");
      this._trackedModals.add(modal);
      if (!ariaOwns) {
        modal.setAttribute("aria-owns", id);
      } else if (ariaOwns.indexOf(id) === -1) {
        modal.setAttribute("aria-owns", ariaOwns + " " + id);
      }
    }
  }
  /** Clears the references to the live element from any modals it was added to. */
  _clearFromModals() {
    this._trackedModals.forEach((modal) => {
      const ariaOwns = modal.getAttribute("aria-owns");
      if (ariaOwns) {
        const newValue = ariaOwns.replace(this._liveElementId, "").trim();
        if (newValue.length > 0) {
          modal.setAttribute("aria-owns", newValue);
        } else {
          modal.removeAttribute("aria-owns");
        }
      }
    });
    this._trackedModals.clear();
  }
  /** Asserts that no content is already attached to the container. */
  _assertNotAttached() {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("Attempting to attach snack bar content after content is already attached");
    }
  }
  /**
   * Starts a timeout to move the snack bar content to the live region so screen readers will
   * announce it.
   */
  _screenReaderAnnounce() {
    if (this._announceTimeoutId) {
      return;
    }
    this._ngZone.runOutsideAngular(() => {
      this._announceTimeoutId = setTimeout(() => {
        if (this._destroyed) {
          return;
        }
        const element = this._elementRef.nativeElement;
        const inertElement = element.querySelector("[aria-hidden]");
        const liveElement = element.querySelector("[aria-live]");
        if (inertElement && liveElement) {
          let focusedElement = null;
          if (this._platform.isBrowser && document.activeElement instanceof HTMLElement && inertElement.contains(document.activeElement)) {
            focusedElement = document.activeElement;
          }
          inertElement.removeAttribute("aria-hidden");
          liveElement.appendChild(inertElement);
          focusedElement?.focus();
          this._onAnnounce.next();
          this._onAnnounce.complete();
        }
      }, this._announceDelay);
    });
  }
  static \u0275fac = function MatSnackBarContainer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSnackBarContainer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSnackBarContainer,
    selectors: [["mat-snack-bar-container"]],
    viewQuery: function MatSnackBarContainer_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(CdkPortalOutlet, 7);
        \u0275\u0275viewQuery(_c03, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._portalOutlet = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._label = _t.first);
      }
    },
    hostAttrs: [1, "mdc-snackbar", "mat-mdc-snack-bar-container"],
    hostVars: 6,
    hostBindings: function MatSnackBarContainer_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("animationend", function MatSnackBarContainer_animationend_HostBindingHandler($event) {
          return ctx.onAnimationEnd($event.animationName);
        })("animationcancel", function MatSnackBarContainer_animationcancel_HostBindingHandler($event) {
          return ctx.onAnimationEnd($event.animationName);
        });
      }
      if (rf & 2) {
        \u0275\u0275classProp("mat-snack-bar-container-enter", ctx._animationState === "visible")("mat-snack-bar-container-exit", ctx._animationState === "hidden")("mat-snack-bar-container-animations-enabled", !ctx._animationsDisabled);
      }
    },
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 3,
    consts: [["label", ""], [1, "mdc-snackbar__surface", "mat-mdc-snackbar-surface"], [1, "mat-mdc-snack-bar-label"], ["aria-hidden", "true"], ["cdkPortalOutlet", ""]],
    template: function MatSnackBarContainer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2, 0)(3, "div", 3);
        \u0275\u0275template(4, MatSnackBarContainer_ng_template_4_Template, 0, 0, "ng-template", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "div");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275attribute("aria-live", ctx._live)("role", ctx._role)("id", ctx._liveElementId);
      }
    },
    dependencies: [CdkPortalOutlet],
    styles: ["@keyframes _mat-snack-bar-enter{from{transform:scale(0.8);opacity:0}to{transform:scale(1);opacity:1}}@keyframes _mat-snack-bar-exit{from{opacity:1}to{opacity:0}}.mat-mdc-snack-bar-container{display:flex;align-items:center;justify-content:center;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);margin:8px}.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container{width:100vw}.mat-snack-bar-container-animations-enabled{opacity:0}.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible{opacity:1}.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter{animation:_mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit{animation:_mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards}.mat-mdc-snackbar-surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;padding-left:0;padding-right:8px}[dir=rtl] .mat-mdc-snackbar-surface{padding-right:0;padding-left:8px}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{min-width:344px;max-width:672px}.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface{width:100%;min-width:0}@media(forced-colors: active){.mat-mdc-snackbar-surface{outline:solid 1px}}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{color:var(--mdc-snackbar-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mdc-snackbar-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mdc-snackbar-container-color, var(--mat-sys-inverse-surface))}.mdc-snackbar__label{width:100%;flex-grow:1;box-sizing:border-box;margin:0;padding:14px 8px 14px 16px}[dir=rtl] .mdc-snackbar__label{padding-left:8px;padding-right:16px}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-family:var(--mdc-snackbar-supporting-text-font, var(--mat-sys-body-medium-font));font-size:var(--mdc-snackbar-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mdc-snackbar-supporting-text-weight, var(--mat-sys-body-medium-weight));line-height:var(--mdc-snackbar-supporting-text-line-height, var(--mat-sys-body-medium-line-height))}.mat-mdc-snack-bar-actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed{color:var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary))}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){--mat-text-button-state-layer-color:currentColor;--mat-text-button-ripple-color:currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSnackBarContainer, [{
    type: Component,
    args: [{
      selector: "mat-snack-bar-container",
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      imports: [CdkPortalOutlet],
      host: {
        "class": "mdc-snackbar mat-mdc-snack-bar-container",
        "[class.mat-snack-bar-container-enter]": '_animationState === "visible"',
        "[class.mat-snack-bar-container-exit]": '_animationState === "hidden"',
        "[class.mat-snack-bar-container-animations-enabled]": "!_animationsDisabled",
        "(animationend)": "onAnimationEnd($event.animationName)",
        "(animationcancel)": "onAnimationEnd($event.animationName)"
      },
      template: '<div class="mdc-snackbar__surface mat-mdc-snackbar-surface">\n  <!--\n    This outer label wrapper will have the class `mdc-snackbar__label` applied if\n    the attached template/component does not contain it.\n  -->\n  <div class="mat-mdc-snack-bar-label" #label>\n    <!-- Initialy holds the snack bar content, will be empty after announcing to screen readers. -->\n    <div aria-hidden="true">\n      <ng-template cdkPortalOutlet />\n    </div>\n\n    <!-- Will receive the snack bar content from the non-live div, move will happen a short delay after opening -->\n    <div [attr.aria-live]="_live" [attr.role]="_role" [attr.id]="_liveElementId"></div>\n  </div>\n</div>\n',
      styles: ["@keyframes _mat-snack-bar-enter{from{transform:scale(0.8);opacity:0}to{transform:scale(1);opacity:1}}@keyframes _mat-snack-bar-exit{from{opacity:1}to{opacity:0}}.mat-mdc-snack-bar-container{display:flex;align-items:center;justify-content:center;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);margin:8px}.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container{width:100vw}.mat-snack-bar-container-animations-enabled{opacity:0}.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible{opacity:1}.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter{animation:_mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit{animation:_mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards}.mat-mdc-snackbar-surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;padding-left:0;padding-right:8px}[dir=rtl] .mat-mdc-snackbar-surface{padding-right:0;padding-left:8px}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{min-width:344px;max-width:672px}.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface{width:100%;min-width:0}@media(forced-colors: active){.mat-mdc-snackbar-surface{outline:solid 1px}}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{color:var(--mdc-snackbar-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mdc-snackbar-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mdc-snackbar-container-color, var(--mat-sys-inverse-surface))}.mdc-snackbar__label{width:100%;flex-grow:1;box-sizing:border-box;margin:0;padding:14px 8px 14px 16px}[dir=rtl] .mdc-snackbar__label{padding-left:8px;padding-right:16px}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-family:var(--mdc-snackbar-supporting-text-font, var(--mat-sys-body-medium-font));font-size:var(--mdc-snackbar-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mdc-snackbar-supporting-text-weight, var(--mat-sys-body-medium-weight));line-height:var(--mdc-snackbar-supporting-text-line-height, var(--mat-sys-body-medium-line-height))}.mat-mdc-snack-bar-actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed{color:var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary))}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){--mat-text-button-state-layer-color:currentColor;--mat-text-button-ripple-color:currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}"]
    }]
  }], () => [], {
    _portalOutlet: [{
      type: ViewChild,
      args: [CdkPortalOutlet, {
        static: true
      }]
    }],
    _label: [{
      type: ViewChild,
      args: ["label", {
        static: true
      }]
    }]
  });
})();
function MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY() {
  return new MatSnackBarConfig();
}
var MAT_SNACK_BAR_DEFAULT_OPTIONS = new InjectionToken("mat-snack-bar-default-options", {
  providedIn: "root",
  factory: MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY
});
var MatSnackBar = class _MatSnackBar {
  _overlay = inject(Overlay);
  _live = inject(LiveAnnouncer);
  _injector = inject(Injector);
  _breakpointObserver = inject(BreakpointObserver);
  _parentSnackBar = inject(_MatSnackBar, {
    optional: true,
    skipSelf: true
  });
  _defaultConfig = inject(MAT_SNACK_BAR_DEFAULT_OPTIONS);
  /**
   * Reference to the current snack bar in the view *at this level* (in the Angular injector tree).
   * If there is a parent snack-bar service, all operations should delegate to that parent
   * via `_openedSnackBarRef`.
   */
  _snackBarRefAtThisLevel = null;
  /** The component that should be rendered as the snack bar's simple component. */
  simpleSnackBarComponent = SimpleSnackBar;
  /** The container component that attaches the provided template or component. */
  snackBarContainerComponent = MatSnackBarContainer;
  /** The CSS class to apply for handset mode. */
  handsetCssClass = "mat-mdc-snack-bar-handset";
  /** Reference to the currently opened snackbar at *any* level. */
  get _openedSnackBarRef() {
    const parent = this._parentSnackBar;
    return parent ? parent._openedSnackBarRef : this._snackBarRefAtThisLevel;
  }
  set _openedSnackBarRef(value) {
    if (this._parentSnackBar) {
      this._parentSnackBar._openedSnackBarRef = value;
    } else {
      this._snackBarRefAtThisLevel = value;
    }
  }
  constructor() {
  }
  /**
   * Creates and dispatches a snack bar with a custom component for the content, removing any
   * currently opened snack bars.
   *
   * @param component Component to be instantiated.
   * @param config Extra configuration for the snack bar.
   */
  openFromComponent(component, config) {
    return this._attach(component, config);
  }
  /**
   * Creates and dispatches a snack bar with a custom template for the content, removing any
   * currently opened snack bars.
   *
   * @param template Template to be instantiated.
   * @param config Extra configuration for the snack bar.
   */
  openFromTemplate(template, config) {
    return this._attach(template, config);
  }
  /**
   * Opens a snackbar with a message and an optional action.
   * @param message The message to show in the snackbar.
   * @param action The label for the snackbar action.
   * @param config Additional configuration options for the snackbar.
   */
  open(message, action = "", config) {
    const _config = __spreadValues(__spreadValues({}, this._defaultConfig), config);
    _config.data = {
      message,
      action
    };
    if (_config.announcementMessage === message) {
      _config.announcementMessage = void 0;
    }
    return this.openFromComponent(this.simpleSnackBarComponent, _config);
  }
  /**
   * Dismisses the currently-visible snack bar.
   */
  dismiss() {
    if (this._openedSnackBarRef) {
      this._openedSnackBarRef.dismiss();
    }
  }
  ngOnDestroy() {
    if (this._snackBarRefAtThisLevel) {
      this._snackBarRefAtThisLevel.dismiss();
    }
  }
  /**
   * Attaches the snack bar container component to the overlay.
   */
  _attachSnackBarContainer(overlayRef, config) {
    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
    const injector = Injector.create({
      parent: userInjector || this._injector,
      providers: [{
        provide: MatSnackBarConfig,
        useValue: config
      }]
    });
    const containerPortal = new ComponentPortal(this.snackBarContainerComponent, config.viewContainerRef, injector);
    const containerRef = overlayRef.attach(containerPortal);
    containerRef.instance.snackBarConfig = config;
    return containerRef.instance;
  }
  /**
   * Places a new component or a template as the content of the snack bar container.
   */
  _attach(content, userConfig) {
    const config = __spreadValues(__spreadValues(__spreadValues({}, new MatSnackBarConfig()), this._defaultConfig), userConfig);
    const overlayRef = this._createOverlay(config);
    const container = this._attachSnackBarContainer(overlayRef, config);
    const snackBarRef = new MatSnackBarRef(container, overlayRef);
    if (content instanceof TemplateRef) {
      const portal = new TemplatePortal(content, null, {
        $implicit: config.data,
        snackBarRef
      });
      snackBarRef.instance = container.attachTemplatePortal(portal);
    } else {
      const injector = this._createInjector(config, snackBarRef);
      const portal = new ComponentPortal(content, void 0, injector);
      const contentRef = container.attachComponentPortal(portal);
      snackBarRef.instance = contentRef.instance;
    }
    this._breakpointObserver.observe(Breakpoints.HandsetPortrait).pipe(takeUntil(overlayRef.detachments())).subscribe((state2) => {
      overlayRef.overlayElement.classList.toggle(this.handsetCssClass, state2.matches);
    });
    if (config.announcementMessage) {
      container._onAnnounce.subscribe(() => {
        this._live.announce(config.announcementMessage, config.politeness);
      });
    }
    this._animateSnackBar(snackBarRef, config);
    this._openedSnackBarRef = snackBarRef;
    return this._openedSnackBarRef;
  }
  /** Animates the old snack bar out and the new one in. */
  _animateSnackBar(snackBarRef, config) {
    snackBarRef.afterDismissed().subscribe(() => {
      if (this._openedSnackBarRef == snackBarRef) {
        this._openedSnackBarRef = null;
      }
      if (config.announcementMessage) {
        this._live.clear();
      }
    });
    if (config.duration && config.duration > 0) {
      snackBarRef.afterOpened().subscribe(() => snackBarRef._dismissAfter(config.duration));
    }
    if (this._openedSnackBarRef) {
      this._openedSnackBarRef.afterDismissed().subscribe(() => {
        snackBarRef.containerInstance.enter();
      });
      this._openedSnackBarRef.dismiss();
    } else {
      snackBarRef.containerInstance.enter();
    }
  }
  /**
   * Creates a new overlay and places it in the correct location.
   * @param config The user-specified snack bar config.
   */
  _createOverlay(config) {
    const overlayConfig = new OverlayConfig();
    overlayConfig.direction = config.direction;
    let positionStrategy = this._overlay.position().global();
    const isRtl = config.direction === "rtl";
    const isLeft = config.horizontalPosition === "left" || config.horizontalPosition === "start" && !isRtl || config.horizontalPosition === "end" && isRtl;
    const isRight = !isLeft && config.horizontalPosition !== "center";
    if (isLeft) {
      positionStrategy.left("0");
    } else if (isRight) {
      positionStrategy.right("0");
    } else {
      positionStrategy.centerHorizontally();
    }
    if (config.verticalPosition === "top") {
      positionStrategy.top("0");
    } else {
      positionStrategy.bottom("0");
    }
    overlayConfig.positionStrategy = positionStrategy;
    return this._overlay.create(overlayConfig);
  }
  /**
   * Creates an injector to be used inside of a snack bar component.
   * @param config Config that was used to create the snack bar.
   * @param snackBarRef Reference to the snack bar.
   */
  _createInjector(config, snackBarRef) {
    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
    return Injector.create({
      parent: userInjector || this._injector,
      providers: [{
        provide: MatSnackBarRef,
        useValue: snackBarRef
      }, {
        provide: MAT_SNACK_BAR_DATA,
        useValue: config.data
      }]
    });
  }
  static \u0275fac = function MatSnackBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSnackBar)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MatSnackBar,
    factory: _MatSnackBar.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSnackBar, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var DIRECTIVES = [MatSnackBarContainer, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction];
var MatSnackBarModule = class _MatSnackBarModule {
  static \u0275fac = function MatSnackBarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSnackBarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatSnackBarModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [MatSnackBar],
    imports: [OverlayModule, PortalModule, MatButtonModule, MatCommonModule, SimpleSnackBar, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSnackBarModule, [{
    type: NgModule,
    args: [{
      imports: [OverlayModule, PortalModule, MatButtonModule, MatCommonModule, SimpleSnackBar, ...DIRECTIVES],
      exports: [MatCommonModule, ...DIRECTIVES],
      providers: [MatSnackBar]
    }]
  }], null, null);
})();

// src/app/shared/components/toast-notification/toast-notification.component.ts
function ToastNotificationComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function ToastNotificationComponent_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.snackBarRef.dismissWithAction());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.data.action, " ");
  }
}
var ToastNotificationComponent = class _ToastNotificationComponent {
  data;
  snackBarRef;
  constructor(data, snackBarRef) {
    this.data = data;
    this.snackBarRef = snackBarRef;
  }
  getIcon() {
    switch (this.data.type) {
      case "success":
        return "fa-check-circle";
      case "error":
        return "fa-exclamation-circle";
      case "warning":
        return "fa-exclamation-triangle";
      case "info":
        return "fa-info-circle";
      default:
        return "fa-info-circle";
    }
  }
  static \u0275fac = function ToastNotificationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastNotificationComponent)(\u0275\u0275directiveInject(MAT_SNACK_BAR_DATA), \u0275\u0275directiveInject(MatSnackBarRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastNotificationComponent, selectors: [["app-toast-notification"]], decls: 7, vars: 4, consts: [[1, "toast-container", 3, "ngClass"], [1, "fas", "toast-icon", 3, "ngClass"], [1, "toast-message"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-icon-button", "", 3, "click"], [1, "fas", "fa-times"], ["mat-button", "", 3, "click"]], template: function ToastNotificationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "i", 1);
      \u0275\u0275elementStart(2, "span", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, ToastNotificationComponent_button_4_Template, 2, 1, "button", 3);
      \u0275\u0275elementStart(5, "button", 4);
      \u0275\u0275listener("click", function ToastNotificationComponent_Template_button_click_5_listener() {
        return ctx.snackBarRef.dismiss();
      });
      \u0275\u0275element(6, "i", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.data.type);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.getIcon());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.data.message);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.data.action);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, MatSnackBarModule, MatButtonModule, MatButton, MatIconButton], styles: ["\n\n.toast-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 14px 16px;\n  border-radius: 4px;\n  color: white;\n  min-width: 288px;\n  max-width: 568px;\n}\n.toast-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  font-size: 20px;\n}\n.toast-message[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-right: 8px;\n}\n.success[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n}\n.error[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n.warning[_ngcontent-%COMP%] {\n  background-color: #ff9800;\n}\n.info[_ngcontent-%COMP%] {\n  background-color: #2196f3;\n}\nbutton[_ngcontent-%COMP%] {\n  color: white;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n/*# sourceMappingURL=toast-notification.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastNotificationComponent, { className: "ToastNotificationComponent", filePath: "src/app/shared/components/toast-notification/toast-notification.component.ts", lineNumber: 85 });
})();

// src/app/auth/components/login/login.component.ts
var _c04 = () => ({ "color": "brown" });
var _c1 = () => ({ "color": "green" });
function LoginComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "app-loading-spinner", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 48);
  }
}
function LoginComponent_mat_error_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Please select a user type ");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  fb;
  authService;
  router;
  snackBar;
  loginForm;
  hidePassword = true;
  isLoading = false;
  loginState = "normal";
  signupState = "normal";
  loginButtonHover = false;
  constructor(fb, authService, router, snackBar) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.snackBar = snackBar;
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      userType: ["", Validators.required]
    });
  }
  onSubmit() {
    Object.keys(this.loginForm.controls).forEach((key) => {
      this.loginForm.get(key)?.markAsTouched();
    });
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.isLoading = true;
      this.authService.login(email, password).subscribe({
        next: (user) => {
          this.isLoading = false;
          if (this.loginForm.get("userType")?.value === "employer" && user.role !== UserRole.EMPLOYER || this.loginForm.get("userType")?.value === "job-seeker" && user.role !== UserRole.JOB_SEEKER) {
            this.snackBar.openFromComponent(ToastNotificationComponent, {
              data: {
                message: "Selected user type does not match account type.",
                type: "error",
                duration: 5e3
              }
            });
            return;
          }
          switch (user.role) {
            case "JOB_SEEKER":
              this.router.navigate(["/job-seeker"]);
              break;
            case "EMPLOYER":
              this.router.navigate(["/employer"]);
              break;
            case "ADMIN":
              this.router.navigate(["/admin"]);
              break;
          }
        },
        error: (error) => {
          this.isLoading = false;
          this.snackBar.openFromComponent(ToastNotificationComponent, {
            data: {
              message: error.message || "Login failed. Please check your credentials and try again.",
              type: "error",
              duration: 5e3
            }
          });
        }
      });
    } else {
      this.snackBar.openFromComponent(ToastNotificationComponent, {
        data: {
          message: "Please fill in all required fields correctly.",
          type: "error",
          duration: 5e3
        }
      });
    }
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatSnackBar));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 59, vars: 17, consts: [[1, "auth-container"], ["class", "loading-overlay", 4, "ngIf"], [1, "auth-background"], [1, "shape", "shape1"], [1, "shape", "shape2"], [1, "shape", "shape3"], [1, "auth-card"], [1, "card-content-wrapper"], [1, "header-content"], [1, "app-title-container", "animate-item"], [1, "logo-icon"], ["width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 17L12 11", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["cx", "12", "cy", "8", "r", "1", "fill", "currentColor"], [1, "app-title"], [1, "animate-item"], [3, "ngSubmit", "keyup.enter", "formGroup"], ["appearance", "outline", 1, "full-width", "animate-item"], ["matInput", "", "formControlName", "email", "type", "email", "required", "", "placeholder", "Enter your email"], ["matPrefix", "", 1, "fas", "fa-envelope", "form-icon"], ["fieldName", "Email", 3, "control"], ["matInput", "", "formControlName", "password", "required", "", "placeholder", "Enter your password", 3, "type"], ["matPrefix", "", 1, "fas", "fa-lock", "form-icon"], ["matSuffix", "", 1, "fas", "fa-eye", "form-icon", "clickable", 3, "click"], ["fieldName", "Password", 3, "control"], [1, "form-links", "animate-item"], ["routerLink", "/auth/forgot-password", 1, "forgot-password"], ["formControlName", "userType", "required", ""], ["value", "job-seeker", 3, "ngStyle"], ["value", "employer", 3, "ngStyle"], [4, "ngIf"], [1, "form-actions", "animate-item"], [1, "signup-text"], ["routerLink", "../signup", 1, "signup-link"], [1, "login-text", 3, "mouseenter", "mouseleave", "click"], [1, "button-content"], [1, "clickable-text"], [1, "fas", "fa-arrow-right", "login-icon"], [1, "loading-overlay"], [3, "size"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, LoginComponent_div_1_Template, 2, 1, "div", 1);
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275element(3, "div", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "mat-card", 6)(7, "div", 7)(8, "mat-card-header")(9, "div", 8)(10, "div", 9)(11, "div", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 11);
      \u0275\u0275element(13, "path", 12)(14, "path", 13)(15, "circle", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(16, "h1", 15);
      \u0275\u0275text(17, "Employbridge AI");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "mat-card-title", 16);
      \u0275\u0275text(19, "Welcome Back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "mat-card-subtitle", 16);
      \u0275\u0275text(21, "Sign in to your account");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "mat-card-content")(23, "form", 17);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_23_listener() {
        return ctx.onSubmit();
      })("keyup.enter", function LoginComponent_Template_form_keyup_enter_23_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(24, "mat-form-field", 18)(25, "mat-label");
      \u0275\u0275text(26, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "input", 19)(28, "i", 20)(29, "app-form-validation", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "mat-form-field", 18)(31, "mat-label");
      \u0275\u0275text(32, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "input", 22)(34, "i", 23);
      \u0275\u0275elementStart(35, "i", 24);
      \u0275\u0275listener("click", function LoginComponent_Template_i_click_35_listener() {
        return ctx.hidePassword = !ctx.hidePassword;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(36, "app-form-validation", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 26)(38, "a", 27);
      \u0275\u0275text(39, "Forgot password?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "mat-form-field", 18)(41, "mat-label");
      \u0275\u0275text(42, "User Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "mat-select", 28)(44, "mat-option", 29);
      \u0275\u0275text(45, "Job Seeker");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "mat-option", 30);
      \u0275\u0275text(47, "Employer");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(48, LoginComponent_mat_error_48_Template, 2, 0, "mat-error", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 32)(50, "div", 33);
      \u0275\u0275text(51, " Don't have an account? ");
      \u0275\u0275elementStart(52, "a", 34);
      \u0275\u0275text(53, "Sign Up");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 35);
      \u0275\u0275listener("mouseenter", function LoginComponent_Template_div_mouseenter_54_listener() {
        ctx.loginState = "hovered";
        return ctx.loginButtonHover = true;
      })("mouseleave", function LoginComponent_Template_div_mouseleave_54_listener() {
        ctx.loginState = "normal";
        return ctx.loginButtonHover = false;
      })("click", function LoginComponent_Template_div_click_54_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(55, "div", 36)(56, "span", 37);
      \u0275\u0275text(57, "Login");
      \u0275\u0275elementEnd();
      \u0275\u0275element(58, "i", 38);
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      let tmp_10_0;
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("blurred", ctx.isLoading);
      \u0275\u0275property("@cardAnimation", void 0);
      \u0275\u0275advance(16);
      \u0275\u0275property("@formElements", void 0);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(6);
      \u0275\u0275property("control", ctx.loginForm.get("email"));
      \u0275\u0275advance(4);
      \u0275\u0275property("type", ctx.hidePassword ? "password" : "text");
      \u0275\u0275advance(3);
      \u0275\u0275property("control", ctx.loginForm.get("password"));
      \u0275\u0275advance(8);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction0(15, _c04));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction0(16, _c1));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", (tmp_10_0 = ctx.loginForm.get("userType")) == null ? null : tmp_10_0.hasError("required"));
      \u0275\u0275advance(6);
      \u0275\u0275property("@buttonHover", ctx.loginState);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("animate", ctx.loginButtonHover);
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    NgStyle,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    MatCardModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatError,
    MatPrefix,
    MatSuffix,
    MatInputModule,
    MatInput,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatSelect,
    MatOption,
    RouterModule,
    RouterLink,
    FormValidationComponent,
    LoadingSpinnerComponent
  ], styles: ['\n\n[_nghost-%COMP%] {\n  --primary: #4e54c8;\n  --primary-light: #8f94fb;\n  --primary-dark: #363795;\n  --accent: #fc466b;\n  --accent-light: #ff9a9e;\n  --text-primary: #333;\n  --text-secondary: #666;\n  --background-light: #f5f7fa;\n  --card-bg: #ffffff;\n  --success: #00c853;\n  --warning: #ffd600;\n}\n.auth-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 50%,\n      #ff6b6b 100%);\n  overflow: hidden;\n}\n.login-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 450px;\n  padding: 1rem;\n}\n.auth-background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n}\n.shape[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.05);\n  animation: _ngcontent-%COMP%_float 15s infinite;\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n}\n.shape1[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 500px;\n  top: -250px;\n  right: -100px;\n  animation-delay: 0s;\n  background:\n    linear-gradient(\n      45deg,\n      rgba(255, 255, 255, 0.03),\n      rgba(142, 148, 251, 0.08));\n}\n.shape2[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 400px;\n  bottom: -150px;\n  left: -100px;\n  animation-delay: 3s;\n  animation-duration: 18s;\n  background:\n    linear-gradient(\n      45deg,\n      rgba(142, 148, 251, 0.06),\n      rgba(255, 255, 255, 0.04));\n}\n.shape3[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  bottom: 30%;\n  right: 20%;\n  animation-delay: 5s;\n  animation-duration: 20s;\n  background:\n    linear-gradient(\n      45deg,\n      rgba(252, 70, 107, 0.04),\n      rgba(255, 255, 255, 0.03));\n}\n@keyframes _ngcontent-%COMP%_float {\n  0% {\n    transform: translate(0%, 0%) rotate(0deg);\n  }\n  25% {\n    transform: translate(5%, 5%) rotate(5deg);\n  }\n  50% {\n    transform: translate(0%, 8%) rotate(0deg);\n  }\n  75% {\n    transform: translate(-5%, 3%) rotate(-5deg);\n  }\n  100% {\n    transform: translate(0%, 0%) rotate(0deg);\n  }\n}\n.login-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  padding: 2rem;\n  width: 100%;\n  max-height: 90vh;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow-y: auto;\n}\n.auth-card.blurred[_ngcontent-%COMP%] {\n  filter: blur(2px);\n  pointer-events: none;\n}\n.card-content-wrapper[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.auth-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 5px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary-light),\n      var(--accent));\n  z-index: 5;\n}\n.header-content[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.app-title-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.logo-icon[_ngcontent-%COMP%] {\n  color: #3498db;\n}\n.app-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      135deg,\n      #4e54c8 0%,\n      #8f94fb 50%,\n      #fc466b 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  margin: 0;\n  letter-spacing: -0.5px;\n  position: relative;\n}\n.app-title[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -4px;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      #4e54c8,\n      transparent);\n}\nmat-card-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  background:\n    linear-gradient(\n      135deg,\n      #4e54c8 0%,\n      #8f94fb 50%,\n      #fc466b 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  margin-bottom: 8px;\n  position: relative;\n}\nmat-card-title[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -4px;\n  left: 25%;\n  width: 50%;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      #4e54c8,\n      transparent);\n}\nmat-card-subtitle[_ngcontent-%COMP%] {\n  color: #4e54c8;\n  font-size: 1rem;\n  margin-top: 8px;\n}\n.form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 0.5rem;\n}\n.form-field[_ngcontent-%COMP%]     .mat-form-field-wrapper {\n  padding-bottom: 0;\n  margin-bottom: 0.25rem;\n}\n.form-field[_ngcontent-%COMP%]     .mat-form-field-flex {\n  padding: 0.5em 0 0 0;\n  min-height: 48px;\n  align-items: center;\n}\n.form-field[_ngcontent-%COMP%]     .mat-form-field-infix {\n  padding: 0.5em 0;\n  border-top: 0.84375em solid transparent;\n}\n.form-field[_ngcontent-%COMP%]     .mat-form-field-label {\n  margin-left: 0.75em;\n}\n.form-field[_ngcontent-%COMP%]     .mat-form-field-prefix {\n  margin-right: 0.5em;\n  top: 0.25em;\n  padding-left: 1em;\n}\n.form-field[_ngcontent-%COMP%]     .mat-form-field-suffix {\n  margin-left: 0.5em;\n  top: 0.25em;\n  padding-right: 1em;\n}\n.form-field[_ngcontent-%COMP%]     .mat-input-element {\n  padding: 0 0.5em;\n}\n.form-field[_ngcontent-%COMP%]     .form-icon {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n  line-height: 1;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 16px;\n}\n.full-width[_ngcontent-%COMP%]     .mat-form-field-outline {\n  top: 0;\n}\n.full-width[_ngcontent-%COMP%]     .mat-select-value {\n  color: rgba(0, 0, 0, 0.87);\n}\n.full-width[_ngcontent-%COMP%]     .mat-select-arrow {\n  color: rgba(0, 0, 0, 0.54);\n}\n.full-width[_ngcontent-%COMP%]     .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.6);\n}\n.full-width[_ngcontent-%COMP%]     .mat-form-field-required-marker {\n  color: rgba(0, 0, 0, 0.6);\n}\n.full-width[_ngcontent-%COMP%]     .mat-form-field-invalid .mat-form-field-label {\n  color: #f44336;\n}\n.full-width[_ngcontent-%COMP%]     .mat-form-field-invalid .mat-form-field-required-marker {\n  color: #f44336;\n}\n.full-width[_ngcontent-%COMP%]     .mat-form-field-invalid .mat-form-field-outline {\n  color: #f44336;\n}\n.full-width[_ngcontent-%COMP%]     .mat-form-field-outline-start, \n.full-width[_ngcontent-%COMP%]     .mat-form-field-outline-end {\n  border-radius: 4px;\n}\n.full-width[_ngcontent-%COMP%]     .form-icon {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 1.2em;\n  margin-top: 0.2em;\n  transition: color 0.3s ease;\n}\n.full-width[_ngcontent-%COMP%]     .form-icon.clickable {\n  cursor: pointer;\n}\n.full-width[_ngcontent-%COMP%]     .form-icon.clickable:hover {\n  color: #3498db;\n}\n.form-links[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-top: 1rem;\n}\n.forgot-password[_ngcontent-%COMP%] {\n  color: #3498db;\n  text-decoration: none;\n  font-size: 0.9rem;\n  transition: color 0.3s ease;\n}\n.forgot-password[_ngcontent-%COMP%]:hover {\n  color: #2980b9;\n  text-decoration: underline;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 1.5rem;\n}\n.signup-text[_ngcontent-%COMP%] {\n  color: #7f8c8d;\n  font-size: 0.9rem;\n  text-align: center;\n}\n.signup-link[_ngcontent-%COMP%] {\n  color: #3498db;\n  text-decoration: none;\n  font-weight: 500;\n  transition: color 0.3s ease;\n}\n.signup-link[_ngcontent-%COMP%]:hover {\n  color: #2980b9;\n  text-decoration: underline;\n}\n.login-text[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 300px;\n  height: 48px;\n  background: #3498db;\n  color: white;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.login-text[_ngcontent-%COMP%]:hover {\n  background: #2980b9;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n.button-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.clickable-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n}\n.login-icon[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n}\n.login-icon.animate[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n:is()   .mat-form-field-outline[_ngcontent-%COMP%] {\n  color: #e0e0e0 !important;\n}\n:is()   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  color: var(--primary) !important;\n}\n:is()   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: var(--text-secondary) !important;\n  opacity: 1 !important;\n}\n:is()   .mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: var(--primary) !important;\n}\n:is()   .mat-form-field-suffix[_ngcontent-%COMP%] {\n  top: 0 !important;\n}\n:is()   .mat-form-field-prefix[_ngcontent-%COMP%] {\n  top: 0.25em !important;\n  margin-right: 8px !important;\n}\n:is()   .form-icon[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n:is()   .mat-form-field[_ngcontent-%COMP%]:hover   .mat-form-field-outline[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n:is()   .mat-form-field[_ngcontent-%COMP%]:hover   .form-icon[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.6);\n}\n:is()   .mat-form-field.mat-focused[_ngcontent-%COMP%]   .form-icon[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n@media (max-width: 600px) {\n  .login-container[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n    max-width: 400px;\n  }\n  .login-card[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n    max-height: 95vh;\n  }\n  .card-content-wrapper[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .form-field[_ngcontent-%COMP%]     .mat-form-field-flex {\n    min-height: 42px;\n  }\n  .app-title[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'], data: { animation: [
    trigger("cardAnimation", [
      transition(":enter", [
        style({ transform: "translateY(50px)", opacity: 0 }),
        animate("0.8s cubic-bezier(0.35, 0, 0.25, 1)", style({ transform: "translateY(0)", opacity: 1 }))
      ])
    ]),
    trigger("fadeInUp", [
      transition(":enter", [
        style({ transform: "translateY(20px)", opacity: 0 }),
        animate("0.5s ease-out", style({ transform: "translateY(0)", opacity: 1 }))
      ])
    ]),
    trigger("formElements", [
      transition(":enter", [
        query(".animate-item", [
          style({ opacity: 0, transform: "translateY(20px)" }),
          stagger(100, [
            animate("0.5s ease", style({ opacity: 1, transform: "translateY(0)" }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger("buttonHover", [
      state("normal", style({
        transform: "scale(1)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
      })),
      state("hovered", style({
        transform: "scale(1.05)",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)"
      })),
      transition("normal <=> hovered", animate("0.2s ease-in-out"))
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/auth/components/login/login.component.ts", lineNumber: 81 });
})();

// src/app/auth/components/signup/signup.component.ts
function SignupComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "app-loading-spinner", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 48);
  }
}
function SignupComponent_mat_error_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " First name is required ");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_mat_error_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Last name is required ");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_mat_error_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Email is required ");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_mat_error_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Please enter a valid email ");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_mat_error_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Password is required ");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_mat_error_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Password must be at least 8 characters ");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_mat_error_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Passwords do not match ");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_mat_error_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Please select an account type ");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "mat-icon", 38);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("@fadeIn", void 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
var SignupComponent = class _SignupComponent {
  fb;
  router;
  snackBar;
  signupForm;
  hidePassword = true;
  hideConfirmPassword = true;
  isLoading = false;
  loginState = "normal";
  signupState = "normal";
  signupButtonHover = false;
  showError = false;
  errorMessage = "";
  constructor(fb, router, snackBar) {
    this.fb = fb;
    this.router = router;
    this.snackBar = snackBar;
    this.signupForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", Validators.required],
      accountType: ["", Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
  }
  ngOnInit() {
  }
  passwordMatchValidator(form) {
    const password = form.get("password")?.value;
    const confirmPassword = form.get("confirmPassword")?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }
  onSubmit() {
    Object.keys(this.signupForm.controls).forEach((key) => {
      this.signupForm.get(key)?.markAsTouched();
    });
    if (this.signupForm.valid) {
      this.isLoading = true;
      this.showError = false;
      setTimeout(() => {
        this.isLoading = false;
        this.showError = true;
        this.errorMessage = "Invalid credentials. Please check your details and try again.";
        this.snackBar.openFromComponent(ToastNotificationComponent, {
          data: {
            message: this.errorMessage,
            type: "error",
            duration: 5e3
          }
        });
        setTimeout(() => {
          this.showError = false;
        }, 5e3);
      }, 2e3);
    } else {
      this.isLoading = false;
      this.showError = true;
      this.errorMessage = "Please fill in all required fields correctly.";
      setTimeout(() => {
        this.showError = false;
      }, 5e3);
    }
  }
  static \u0275fac = function SignupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SignupComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatSnackBar));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignupComponent, selectors: [["app-signup"]], decls: 72, vars: 20, consts: [[1, "signup-container"], [1, "auth-background"], [1, "shape", "shape1"], [1, "shape", "shape2"], [1, "shape", "shape3"], ["class", "loading-overlay", 4, "ngIf"], [1, "signup-card"], [1, "card-content-wrapper"], [1, "header-content"], [1, "app-title-container", "animate-item"], [1, "logo-icon"], ["width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 17L12 11", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["cx", "12", "cy", "8", "r", "1", "fill", "currentColor"], [1, "app-title"], [1, "animate-item"], [1, "signup-form", 3, "ngSubmit", "formGroup"], [1, "form-row"], ["appearance", "outline", 1, "form-field"], ["matInput", "", "formControlName", "firstName", "required", ""], [4, "ngIf"], ["matInput", "", "formControlName", "lastName", "required", ""], ["matInput", "", "formControlName", "email", "type", "email", "required", ""], ["matInput", "", "formControlName", "password", "required", "", 3, "type"], ["matPrefix", "", 1, "fas", "fa-lock", "form-icon"], ["matSuffix", "", 1, "fas", "fa-eye", "form-icon", "clickable", 3, "click"], ["matInput", "", "formControlName", "confirmPassword", "required", "", 3, "type"], ["formControlName", "accountType", "required", ""], ["value", "job-seeker"], ["value", "employer"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "submit-button", 3, "mouseenter", "mouseleave", "disabled"], [1, "login-link"], ["routerLink", "/auth/login", 1, "link"], ["class", "error-message", 4, "ngIf"], [1, "loading-overlay"], [3, "size"], [1, "error-message"], [1, "error-icon"]], template: function SignupComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, SignupComponent_div_5_Template, 2, 1, "div", 5);
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "mat-card-header")(9, "div", 8)(10, "div", 9)(11, "div", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 11);
      \u0275\u0275element(13, "path", 12)(14, "path", 13)(15, "circle", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(16, "h1", 15);
      \u0275\u0275text(17, "Employbridge AI");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "mat-card-title", 16);
      \u0275\u0275text(19, "Create Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "mat-card-subtitle", 16);
      \u0275\u0275text(21, "Join our community and start your journey");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "mat-card-content")(23, "form", 17);
      \u0275\u0275listener("ngSubmit", function SignupComponent_Template_form_ngSubmit_23_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(24, "div", 18)(25, "mat-form-field", 19)(26, "mat-label");
      \u0275\u0275text(27, "First Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "input", 20);
      \u0275\u0275template(29, SignupComponent_mat_error_29_Template, 2, 0, "mat-error", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "mat-form-field", 19)(31, "mat-label");
      \u0275\u0275text(32, "Last Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "input", 22);
      \u0275\u0275template(34, SignupComponent_mat_error_34_Template, 2, 0, "mat-error", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "mat-form-field", 19)(36, "mat-label");
      \u0275\u0275text(37, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "input", 23);
      \u0275\u0275template(39, SignupComponent_mat_error_39_Template, 2, 0, "mat-error", 21)(40, SignupComponent_mat_error_40_Template, 2, 0, "mat-error", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "mat-form-field", 19)(42, "mat-label");
      \u0275\u0275text(43, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(44, "input", 24)(45, "i", 25);
      \u0275\u0275elementStart(46, "i", 26);
      \u0275\u0275listener("click", function SignupComponent_Template_i_click_46_listener() {
        return ctx.hidePassword = !ctx.hidePassword;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(47, SignupComponent_mat_error_47_Template, 2, 0, "mat-error", 21)(48, SignupComponent_mat_error_48_Template, 2, 0, "mat-error", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "mat-form-field", 19)(50, "mat-label");
      \u0275\u0275text(51, "Confirm Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(52, "input", 27)(53, "i", 25);
      \u0275\u0275elementStart(54, "i", 26);
      \u0275\u0275listener("click", function SignupComponent_Template_i_click_54_listener() {
        return ctx.hidePassword = !ctx.hidePassword;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(55, SignupComponent_mat_error_55_Template, 2, 0, "mat-error", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "mat-form-field", 19)(57, "mat-label");
      \u0275\u0275text(58, "Account Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "mat-select", 28)(60, "mat-option", 29);
      \u0275\u0275text(61, "Job Seeker");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "mat-option", 30);
      \u0275\u0275text(63, "Employer");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(64, SignupComponent_mat_error_64_Template, 2, 0, "mat-error", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "button", 31);
      \u0275\u0275listener("mouseenter", function SignupComponent_Template_button_mouseenter_65_listener() {
        return ctx.signupButtonHover = true;
      })("mouseleave", function SignupComponent_Template_button_mouseleave_65_listener() {
        return ctx.signupButtonHover = false;
      });
      \u0275\u0275text(66, " Sign Up ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "div", 32);
      \u0275\u0275text(68, " Already have an account? ");
      \u0275\u0275elementStart(69, "a", 33);
      \u0275\u0275text(70, "Log in");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(71, SignupComponent_div_71_Template, 5, 2, "div", 34);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_5_0;
      let tmp_6_0;
      let tmp_7_0;
      let tmp_8_0;
      let tmp_10_0;
      let tmp_11_0;
      let tmp_14_0;
      \u0275\u0275property("@cardAnimation", void 0);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275classProp("blurred", ctx.isLoading);
      \u0275\u0275advance(16);
      \u0275\u0275property("@formElements", void 0);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.signupForm);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", (tmp_5_0 = ctx.signupForm.get("firstName")) == null ? null : tmp_5_0.hasError("required"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_6_0 = ctx.signupForm.get("lastName")) == null ? null : tmp_6_0.hasError("required"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_7_0 = ctx.signupForm.get("email")) == null ? null : tmp_7_0.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_8_0 = ctx.signupForm.get("email")) == null ? null : tmp_8_0.hasError("email"));
      \u0275\u0275advance(4);
      \u0275\u0275property("type", ctx.hidePassword ? "password" : "text");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", (tmp_10_0 = ctx.signupForm.get("password")) == null ? null : tmp_10_0.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_11_0 = ctx.signupForm.get("password")) == null ? null : tmp_11_0.hasError("minlength"));
      \u0275\u0275advance(4);
      \u0275\u0275property("type", ctx.hidePassword ? "password" : "text");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.signupForm.hasError("mismatch"));
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", (tmp_14_0 = ctx.signupForm.get("accountType")) == null ? null : tmp_14_0.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.signupForm.invalid || ctx.isLoading)("@buttonHover", ctx.signupButtonHover ? "hovered" : "normal");
      \u0275\u0275advance(2);
      \u0275\u0275property("@formElements", void 0);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.showError);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, ReactiveFormsModule, FormGroupDirective, FormControlName, MatCardModule, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle, MatFormFieldModule, MatFormField, MatLabel, MatError, MatPrefix, MatSuffix, MatInputModule, MatInput, MatButtonModule, MatButton, MatIconModule, MatIcon, MatSelectModule, MatSelect, MatOption, RouterModule, RouterLink, LoadingSpinnerComponent], styles: ['\n\n[_nghost-%COMP%] {\n  --primary: #4e54c8;\n  --primary-light: #8f94fb;\n  --primary-dark: #363795;\n  --accent: #fc466b;\n  --accent-light: #ff9a9e;\n  --text-primary: #333;\n  --text-secondary: #666;\n  --background-light: #f5f7fa;\n  --card-bg: #ffffff;\n  --success: #00c853;\n  --warning: #ffd600;\n}\n.signup-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 50%,\n      #ff6b6b 100%);\n  overflow: hidden;\n}\n.auth-background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n}\n.shape[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.05);\n  animation: _ngcontent-%COMP%_float 15s infinite;\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n}\n.shape1[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 500px;\n  top: -250px;\n  right: -100px;\n  animation-delay: 0s;\n  background:\n    linear-gradient(\n      45deg,\n      rgba(255, 255, 255, 0.03),\n      rgba(142, 148, 251, 0.08));\n}\n.shape2[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 400px;\n  bottom: -150px;\n  left: -100px;\n  animation-delay: 3s;\n  animation-duration: 18s;\n  background:\n    linear-gradient(\n      45deg,\n      rgba(142, 148, 251, 0.06),\n      rgba(255, 255, 255, 0.04));\n}\n.shape3[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  bottom: 30%;\n  right: 20%;\n  animation-delay: 5s;\n  animation-duration: 20s;\n  background:\n    linear-gradient(\n      45deg,\n      rgba(252, 70, 107, 0.04),\n      rgba(255, 255, 255, 0.03));\n}\n@keyframes _ngcontent-%COMP%_float {\n  0% {\n    transform: translate(0%, 0%) rotate(0deg);\n  }\n  25% {\n    transform: translate(5%, 5%) rotate(5deg);\n  }\n  50% {\n    transform: translate(0%, 8%) rotate(0deg);\n  }\n  75% {\n    transform: translate(-5%, 3%) rotate(-5deg);\n  }\n  100% {\n    transform: translate(0%, 0%) rotate(0deg);\n  }\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.signup-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  padding: 2rem;\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow-y: auto;\n}\n.signup-card.blurred[_ngcontent-%COMP%] {\n  filter: blur(2px);\n  pointer-events: none;\n}\n.signup-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 5px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary-light),\n      var(--accent));\n  z-index: 5;\n}\n.signup-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.signup-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.signup-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin-bottom: 0.5rem;\n}\n.signup-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #7f8c8d;\n  font-size: 1rem;\n}\n.signup-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 0.5rem;\n}\n.form-field[_ngcontent-%COMP%]     .mat-form-field-wrapper {\n  padding-bottom: 0;\n  margin-bottom: 0.5rem;\n}\n.form-field[_ngcontent-%COMP%]     .mat-form-field-flex {\n  padding: 0.5em 0.75em 0 0.75em;\n  min-height: 48px;\n}\n.form-field[_ngcontent-%COMP%]     .mat-form-field-infix {\n  padding: 0.5em 0;\n  border-top: 0.84375em solid transparent;\n}\n.form-field[_ngcontent-%COMP%]     .mat-form-field-label {\n  margin-left: 0.5em;\n}\n.form-field[_ngcontent-%COMP%]     .mat-form-field-prefix {\n  margin-right: 0.5em;\n}\n.form-field[_ngcontent-%COMP%]     .mat-form-field-suffix {\n  margin-left: 0.5em;\n}\n.form-field[_ngcontent-%COMP%]     .mat-form-field-outline {\n  top: 0;\n}\n.form-field[_ngcontent-%COMP%]     .mat-form-field-outline-start, \n.form-field[_ngcontent-%COMP%]     .mat-form-field-outline-end {\n  border-radius: 4px;\n}\n.form-field[_ngcontent-%COMP%]     .form-icon {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 1.2em;\n  margin-top: 0.2em;\n  transition: color 0.3s ease;\n}\n.form-field[_ngcontent-%COMP%]     .form-icon.clickable {\n  cursor: pointer;\n}\n.form-field[_ngcontent-%COMP%]     .form-icon.clickable:hover {\n  color: #3498db;\n}\n.submit-button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  font-size: 1rem;\n  font-weight: 500;\n  margin-top: 1rem;\n  transition: all 0.3s ease;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.submit-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.submit-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  transform: none;\n  box-shadow: none;\n}\n.login-link[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.5rem;\n  color: #7f8c8d;\n  font-size: 0.9rem;\n}\n.login-link[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  color: #3498db;\n  text-decoration: none;\n  font-weight: 500;\n  transition: color 0.3s ease;\n}\n.login-link[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  color: #2980b9;\n  text-decoration: underline;\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n@media (max-width: 600px) {\n  .signup-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .signup-card[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n    max-height: 95vh;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-field[_ngcontent-%COMP%]     .mat-form-field-flex {\n    min-height: 42px;\n  }\n}\n.card-content-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.app-title-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.logo-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  color: var(--primary);\n}\n.app-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  background:\n    linear-gradient(\n      135deg,\n      #4e54c8 0%,\n      #8f94fb 50%,\n      #fc466b 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  margin: 0;\n  position: relative;\n}\n.app-title[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -4px;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      #4e54c8,\n      transparent);\n}\nmat-card-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 600;\n  background:\n    linear-gradient(\n      135deg,\n      #4e54c8 0%,\n      #8f94fb 50%,\n      #fc466b 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  margin: 0;\n  text-align: center;\n  position: relative;\n}\nmat-card-title[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -4px;\n  left: 25%;\n  width: 50%;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      #4e54c8,\n      transparent);\n}\nmat-card-subtitle[_ngcontent-%COMP%] {\n  color: #4e54c8;\n  font-size: 1rem;\n  margin: 8px 0 0;\n  text-align: center;\n}\n.animate-item[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(20px);\n  animation: _ngcontent-%COMP%_fadeInUp 0.5s ease forwards;\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.error-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 1rem;\n  padding: 1rem;\n  background-color: #ffebee;\n  border-radius: 8px;\n  color: #d32f2f;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-in-out;\n}\n.error-icon[_ngcontent-%COMP%] {\n  color: #d32f2f;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=signup.component.css.map */'], data: { animation: [
    trigger("cardAnimation", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateY(20px)" }),
        animate("0.5s ease-out", style({ opacity: 1, transform: "translateY(0)" }))
      ])
    ]),
    trigger("formElements", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("0.3s 0.2s ease-out", style({ opacity: 1 }))
      ])
    ]),
    trigger("buttonHover", [
      state("normal", style({
        transform: "scale(1)"
      })),
      state("hovered", style({
        transform: "scale(1.05)"
      })),
      transition("normal <=> hovered", animate("0.2s ease-in-out"))
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignupComponent, { className: "SignupComponent", filePath: "src/app/auth/components/signup/signup.component.ts", lineNumber: 66 });
})();

// node_modules/@angular/material/fesm2022/sidenav.mjs
var _c05 = ["*"];
var _c12 = ["content"];
var _c2 = [[["mat-drawer"]], [["mat-drawer-content"]], "*"];
var _c3 = ["mat-drawer", "mat-drawer-content", "*"];
function MatDrawerContainer_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function MatDrawerContainer_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._onBackdropClicked());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("mat-drawer-shown", ctx_r1._isShowingBackdrop());
  }
}
function MatDrawerContainer_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-drawer-content");
    \u0275\u0275projection(1, 2);
    \u0275\u0275elementEnd();
  }
}
var _c4 = [[["mat-sidenav"]], [["mat-sidenav-content"]], "*"];
var _c5 = ["mat-sidenav", "mat-sidenav-content", "*"];
function MatSidenavContainer_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function MatSidenavContainer_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._onBackdropClicked());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("mat-drawer-shown", ctx_r1._isShowingBackdrop());
  }
}
function MatSidenavContainer_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-sidenav-content");
    \u0275\u0275projection(1, 2);
    \u0275\u0275elementEnd();
  }
}
var _c6 = ".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}";
function throwMatDuplicatedDrawerError(position) {
  throw Error(`A drawer was already declared for 'position="${position}"'`);
}
var MAT_DRAWER_DEFAULT_AUTOSIZE = new InjectionToken("MAT_DRAWER_DEFAULT_AUTOSIZE", {
  providedIn: "root",
  factory: MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY
});
var MAT_DRAWER_CONTAINER = new InjectionToken("MAT_DRAWER_CONTAINER");
function MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY() {
  return false;
}
var MatDrawerContent = class _MatDrawerContent extends CdkScrollable {
  _platform = inject(Platform);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _container = inject(MatDrawerContainer);
  constructor() {
    const elementRef = inject(ElementRef);
    const scrollDispatcher = inject(ScrollDispatcher);
    const ngZone = inject(NgZone);
    super(elementRef, scrollDispatcher, ngZone);
  }
  ngAfterContentInit() {
    this._container._contentMarginChanges.subscribe(() => {
      this._changeDetectorRef.markForCheck();
    });
  }
  /** Determines whether the content element should be hidden from the user. */
  _shouldBeHidden() {
    if (this._platform.isBrowser) {
      return false;
    }
    const {
      start,
      end
    } = this._container;
    return start != null && start.mode !== "over" && start.opened || end != null && end.mode !== "over" && end.opened;
  }
  static \u0275fac = function MatDrawerContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDrawerContent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDrawerContent,
    selectors: [["mat-drawer-content"]],
    hostAttrs: [1, "mat-drawer-content"],
    hostVars: 6,
    hostBindings: function MatDrawerContent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleProp("margin-left", ctx._container._contentMargins.left, "px")("margin-right", ctx._container._contentMargins.right, "px");
        \u0275\u0275classProp("mat-drawer-content-hidden", ctx._shouldBeHidden());
      }
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkScrollable,
      useExisting: _MatDrawerContent
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c05,
    decls: 1,
    vars: 0,
    template: function MatDrawerContent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDrawerContent, [{
    type: Component,
    args: [{
      selector: "mat-drawer-content",
      template: "<ng-content></ng-content>",
      host: {
        "class": "mat-drawer-content",
        "[style.margin-left.px]": "_container._contentMargins.left",
        "[style.margin-right.px]": "_container._contentMargins.right",
        "[class.mat-drawer-content-hidden]": "_shouldBeHidden()"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: CdkScrollable,
        useExisting: MatDrawerContent
      }]
    }]
  }], () => [], null);
})();
var MatDrawer = class _MatDrawer {
  _elementRef = inject(ElementRef);
  _focusTrapFactory = inject(FocusTrapFactory);
  _focusMonitor = inject(FocusMonitor);
  _platform = inject(Platform);
  _ngZone = inject(NgZone);
  _renderer = inject(Renderer2);
  _interactivityChecker = inject(InteractivityChecker);
  _doc = inject(DOCUMENT, {
    optional: true
  });
  _container = inject(MAT_DRAWER_CONTAINER, {
    optional: true
  });
  _focusTrap = null;
  _elementFocusedBeforeDrawerWasOpened = null;
  _eventCleanups;
  /** Whether the view of the component has been attached. */
  _isAttached;
  /** Anchor node used to restore the drawer to its initial position. */
  _anchor;
  /** The side that the drawer is attached to. */
  get position() {
    return this._position;
  }
  set position(value) {
    value = value === "end" ? "end" : "start";
    if (value !== this._position) {
      if (this._isAttached) {
        this._updatePositionInParent(value);
      }
      this._position = value;
      this.onPositionChanged.emit();
    }
  }
  _position = "start";
  /** Mode of the drawer; one of 'over', 'push' or 'side'. */
  get mode() {
    return this._mode;
  }
  set mode(value) {
    this._mode = value;
    this._updateFocusTrapState();
    this._modeChanged.next();
  }
  _mode = "over";
  /** Whether the drawer can be closed with the escape key or by clicking on the backdrop. */
  get disableClose() {
    return this._disableClose;
  }
  set disableClose(value) {
    this._disableClose = coerceBooleanProperty(value);
  }
  _disableClose = false;
  /**
   * Whether the drawer should focus the first focusable element automatically when opened.
   * Defaults to false in when `mode` is set to `side`, otherwise defaults to `true`. If explicitly
   * enabled, focus will be moved into the sidenav in `side` mode as well.
   * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or AutoFocusTarget
   * instead.
   */
  get autoFocus() {
    const value = this._autoFocus;
    if (value == null) {
      if (this.mode === "side") {
        return "dialog";
      } else {
        return "first-tabbable";
      }
    }
    return value;
  }
  set autoFocus(value) {
    if (value === "true" || value === "false" || value == null) {
      value = coerceBooleanProperty(value);
    }
    this._autoFocus = value;
  }
  _autoFocus;
  /**
   * Whether the drawer is opened. We overload this because we trigger an event when it
   * starts or end.
   */
  get opened() {
    return this._opened;
  }
  set opened(value) {
    this.toggle(coerceBooleanProperty(value));
  }
  _opened = false;
  /** How the sidenav was opened (keypress, mouse click etc.) */
  _openedVia;
  /** Emits whenever the drawer has started animating. */
  _animationStarted = new Subject();
  /** Emits whenever the drawer is done animating. */
  _animationEnd = new Subject();
  /** Event emitted when the drawer open state is changed. */
  openedChange = (
    // Note this has to be async in order to avoid some issues with two-bindings (see #8872).
    new EventEmitter(
      /* isAsync */
      true
    )
  );
  /** Event emitted when the drawer has been opened. */
  _openedStream = this.openedChange.pipe(filter((o) => o), map(() => {
  }));
  /** Event emitted when the drawer has started opening. */
  openedStart = this._animationStarted.pipe(filter(() => this.opened), mapTo(void 0));
  /** Event emitted when the drawer has been closed. */
  _closedStream = this.openedChange.pipe(filter((o) => !o), map(() => {
  }));
  /** Event emitted when the drawer has started closing. */
  closedStart = this._animationStarted.pipe(filter(() => !this.opened), mapTo(void 0));
  /** Emits when the component is destroyed. */
  _destroyed = new Subject();
  /** Event emitted when the drawer's position changes. */
  // tslint:disable-next-line:no-output-on-prefix
  onPositionChanged = new EventEmitter();
  /** Reference to the inner element that contains all the content. */
  _content;
  /**
   * An observable that emits when the drawer mode changes. This is used by the drawer container to
   * to know when to when the mode changes so it can adapt the margins on the content.
   */
  _modeChanged = new Subject();
  _injector = inject(Injector);
  _changeDetectorRef = inject(ChangeDetectorRef);
  constructor() {
    this.openedChange.pipe(takeUntil(this._destroyed)).subscribe((opened) => {
      if (opened) {
        if (this._doc) {
          this._elementFocusedBeforeDrawerWasOpened = this._doc.activeElement;
        }
        this._takeFocus();
      } else if (this._isFocusWithinDrawer()) {
        this._restoreFocus(this._openedVia || "program");
      }
    });
    this._ngZone.runOutsideAngular(() => {
      const element = this._elementRef.nativeElement;
      fromEvent(element, "keydown").pipe(filter((event) => {
        return event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event);
      }), takeUntil(this._destroyed)).subscribe((event) => this._ngZone.run(() => {
        this.close();
        event.stopPropagation();
        event.preventDefault();
      }));
      this._eventCleanups = [this._renderer.listen(element, "transitionrun", this._handleTransitionEvent), this._renderer.listen(element, "transitionend", this._handleTransitionEvent), this._renderer.listen(element, "transitioncancel", this._handleTransitionEvent)];
    });
    this._animationEnd.subscribe(() => {
      this.openedChange.emit(this._opened);
    });
  }
  /**
   * Focuses the provided element. If the element is not focusable, it will add a tabIndex
   * attribute to forcefully focus it. The attribute is removed after focus is moved.
   * @param element The element to focus.
   */
  _forceFocus(element, options) {
    if (!this._interactivityChecker.isFocusable(element)) {
      element.tabIndex = -1;
      this._ngZone.runOutsideAngular(() => {
        const callback = () => {
          cleanupBlur();
          cleanupMousedown();
          element.removeAttribute("tabindex");
        };
        const cleanupBlur = this._renderer.listen(element, "blur", callback);
        const cleanupMousedown = this._renderer.listen(element, "mousedown", callback);
      });
    }
    element.focus(options);
  }
  /**
   * Focuses the first element that matches the given selector within the focus trap.
   * @param selector The CSS selector for the element to set focus to.
   */
  _focusByCssSelector(selector, options) {
    let elementToFocus = this._elementRef.nativeElement.querySelector(selector);
    if (elementToFocus) {
      this._forceFocus(elementToFocus, options);
    }
  }
  /**
   * Moves focus into the drawer. Note that this works even if
   * the focus trap is disabled in `side` mode.
   */
  _takeFocus() {
    if (!this._focusTrap) {
      return;
    }
    const element = this._elementRef.nativeElement;
    switch (this.autoFocus) {
      case false:
      case "dialog":
        return;
      case true:
      case "first-tabbable":
        afterNextRender(() => {
          const hasMovedFocus = this._focusTrap.focusInitialElement();
          if (!hasMovedFocus && typeof element.focus === "function") {
            element.focus();
          }
        }, {
          injector: this._injector
        });
        break;
      case "first-heading":
        this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');
        break;
      default:
        this._focusByCssSelector(this.autoFocus);
        break;
    }
  }
  /**
   * Restores focus to the element that was originally focused when the drawer opened.
   * If no element was focused at that time, the focus will be restored to the drawer.
   */
  _restoreFocus(focusOrigin) {
    if (this.autoFocus === "dialog") {
      return;
    }
    if (this._elementFocusedBeforeDrawerWasOpened) {
      this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened, focusOrigin);
    } else {
      this._elementRef.nativeElement.blur();
    }
    this._elementFocusedBeforeDrawerWasOpened = null;
  }
  /** Whether focus is currently within the drawer. */
  _isFocusWithinDrawer() {
    const activeEl = this._doc.activeElement;
    return !!activeEl && this._elementRef.nativeElement.contains(activeEl);
  }
  ngAfterViewInit() {
    this._isAttached = true;
    if (this._position === "end") {
      this._updatePositionInParent("end");
    }
    if (this._platform.isBrowser) {
      this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
      this._updateFocusTrapState();
    }
  }
  ngOnDestroy() {
    this._eventCleanups.forEach((cleanup) => cleanup());
    this._focusTrap?.destroy();
    this._anchor?.remove();
    this._anchor = null;
    this._animationStarted.complete();
    this._animationEnd.complete();
    this._modeChanged.complete();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /**
   * Open the drawer.
   * @param openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
   * Used for focus management after the sidenav is closed.
   */
  open(openedVia) {
    return this.toggle(true, openedVia);
  }
  /** Close the drawer. */
  close() {
    return this.toggle(false);
  }
  /** Closes the drawer with context that the backdrop was clicked. */
  _closeViaBackdropClick() {
    return this._setOpen(
      /* isOpen */
      false,
      /* restoreFocus */
      true,
      "mouse"
    );
  }
  /**
   * Toggle this drawer.
   * @param isOpen Whether the drawer should be open.
   * @param openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
   * Used for focus management after the sidenav is closed.
   */
  toggle(isOpen = !this.opened, openedVia) {
    if (isOpen && openedVia) {
      this._openedVia = openedVia;
    }
    const result = this._setOpen(
      isOpen,
      /* restoreFocus */
      !isOpen && this._isFocusWithinDrawer(),
      this._openedVia || "program"
    );
    if (!isOpen) {
      this._openedVia = null;
    }
    return result;
  }
  /**
   * Toggles the opened state of the drawer.
   * @param isOpen Whether the drawer should open or close.
   * @param restoreFocus Whether focus should be restored on close.
   * @param focusOrigin Origin to use when restoring focus.
   */
  _setOpen(isOpen, restoreFocus, focusOrigin) {
    if (isOpen === this._opened) {
      return Promise.resolve(isOpen ? "open" : "close");
    }
    this._opened = isOpen;
    if (this._container?._transitionsEnabled) {
      this._setIsAnimating(true);
    } else {
      setTimeout(() => {
        this._animationStarted.next();
        this._animationEnd.next();
      });
    }
    this._elementRef.nativeElement.classList.toggle("mat-drawer-opened", isOpen);
    if (!isOpen && restoreFocus) {
      this._restoreFocus(focusOrigin);
    }
    this._changeDetectorRef.markForCheck();
    this._updateFocusTrapState();
    return new Promise((resolve) => {
      this.openedChange.pipe(take(1)).subscribe((open) => resolve(open ? "open" : "close"));
    });
  }
  /** Toggles whether the drawer is currently animating. */
  _setIsAnimating(isAnimating) {
    this._elementRef.nativeElement.classList.toggle("mat-drawer-animating", isAnimating);
  }
  _getWidth() {
    return this._elementRef.nativeElement.offsetWidth || 0;
  }
  /** Updates the enabled state of the focus trap. */
  _updateFocusTrapState() {
    if (this._focusTrap) {
      this._focusTrap.enabled = !!this._container?.hasBackdrop && this.opened;
    }
  }
  /**
   * Updates the position of the drawer in the DOM. We need to move the element around ourselves
   * when it's in the `end` position so that it comes after the content and the visual order
   * matches the tab order. We also need to be able to move it back to `start` if the sidenav
   * started off as `end` and was changed to `start`.
   */
  _updatePositionInParent(newPosition) {
    if (!this._platform.isBrowser) {
      return;
    }
    const element = this._elementRef.nativeElement;
    const parent = element.parentNode;
    if (newPosition === "end") {
      if (!this._anchor) {
        this._anchor = this._doc.createComment("mat-drawer-anchor");
        parent.insertBefore(this._anchor, element);
      }
      parent.appendChild(element);
    } else if (this._anchor) {
      this._anchor.parentNode.insertBefore(element, this._anchor);
    }
  }
  /** Event handler for animation events. */
  _handleTransitionEvent = (event) => {
    const element = this._elementRef.nativeElement;
    if (event.target === element) {
      this._ngZone.run(() => {
        if (event.type === "transitionrun") {
          this._animationStarted.next(event);
        } else {
          if (event.type === "transitionend") {
            this._setIsAnimating(false);
          }
          this._animationEnd.next(event);
        }
      });
    }
  };
  static \u0275fac = function MatDrawer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDrawer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDrawer,
    selectors: [["mat-drawer"]],
    viewQuery: function MatDrawer_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c12, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._content = _t.first);
      }
    },
    hostAttrs: ["tabIndex", "-1", 1, "mat-drawer"],
    hostVars: 11,
    hostBindings: function MatDrawer_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("align", null);
        \u0275\u0275styleProp("visibility", !ctx._container && !ctx.opened ? "hidden" : null);
        \u0275\u0275classProp("mat-drawer-end", ctx.position === "end")("mat-drawer-over", ctx.mode === "over")("mat-drawer-push", ctx.mode === "push")("mat-drawer-side", ctx.mode === "side");
      }
    },
    inputs: {
      position: "position",
      mode: "mode",
      disableClose: "disableClose",
      autoFocus: "autoFocus",
      opened: "opened"
    },
    outputs: {
      openedChange: "openedChange",
      _openedStream: "opened",
      openedStart: "openedStart",
      _closedStream: "closed",
      closedStart: "closedStart",
      onPositionChanged: "positionChanged"
    },
    exportAs: ["matDrawer"],
    ngContentSelectors: _c05,
    decls: 3,
    vars: 0,
    consts: [["content", ""], ["cdkScrollable", "", 1, "mat-drawer-inner-container"]],
    template: function MatDrawer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275projection(2);
        \u0275\u0275elementEnd();
      }
    },
    dependencies: [CdkScrollable],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDrawer, [{
    type: Component,
    args: [{
      selector: "mat-drawer",
      exportAs: "matDrawer",
      host: {
        "class": "mat-drawer",
        // must prevent the browser from aligning text based on value
        "[attr.align]": "null",
        "[class.mat-drawer-end]": 'position === "end"',
        "[class.mat-drawer-over]": 'mode === "over"',
        "[class.mat-drawer-push]": 'mode === "push"',
        "[class.mat-drawer-side]": 'mode === "side"',
        // The styles that render the sidenav off-screen come from the drawer container. Prior to #30235
        // this was also done by the animations module which some internal tests seem to depend on.
        // Simulate it by toggling the `hidden` attribute instead.
        "[style.visibility]": '(!_container && !opened) ? "hidden" : null',
        "tabIndex": "-1"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      imports: [CdkScrollable],
      template: '<div class="mat-drawer-inner-container" cdkScrollable #content>\r\n  <ng-content></ng-content>\r\n</div>\r\n'
    }]
  }], () => [], {
    position: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    disableClose: [{
      type: Input
    }],
    autoFocus: [{
      type: Input
    }],
    opened: [{
      type: Input
    }],
    openedChange: [{
      type: Output
    }],
    _openedStream: [{
      type: Output,
      args: ["opened"]
    }],
    openedStart: [{
      type: Output
    }],
    _closedStream: [{
      type: Output,
      args: ["closed"]
    }],
    closedStart: [{
      type: Output
    }],
    onPositionChanged: [{
      type: Output,
      args: ["positionChanged"]
    }],
    _content: [{
      type: ViewChild,
      args: ["content"]
    }]
  });
})();
var MatDrawerContainer = class _MatDrawerContainer {
  _dir = inject(Directionality, {
    optional: true
  });
  _element = inject(ElementRef);
  _ngZone = inject(NgZone);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _animationMode = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  });
  _transitionsEnabled = false;
  /** All drawers in the container. Includes drawers from inside nested containers. */
  _allDrawers;
  /** Drawers that belong to this container. */
  _drawers = new QueryList();
  _content;
  _userContent;
  /** The drawer child with the `start` position. */
  get start() {
    return this._start;
  }
  /** The drawer child with the `end` position. */
  get end() {
    return this._end;
  }
  /**
   * Whether to automatically resize the container whenever
   * the size of any of its drawers changes.
   *
   * **Use at your own risk!** Enabling this option can cause layout thrashing by measuring
   * the drawers on every change detection cycle. Can be configured globally via the
   * `MAT_DRAWER_DEFAULT_AUTOSIZE` token.
   */
  get autosize() {
    return this._autosize;
  }
  set autosize(value) {
    this._autosize = coerceBooleanProperty(value);
  }
  _autosize = inject(MAT_DRAWER_DEFAULT_AUTOSIZE);
  /**
   * Whether the drawer container should have a backdrop while one of the sidenavs is open.
   * If explicitly set to `true`, the backdrop will be enabled for drawers in the `side`
   * mode as well.
   */
  get hasBackdrop() {
    return this._drawerHasBackdrop(this._start) || this._drawerHasBackdrop(this._end);
  }
  set hasBackdrop(value) {
    this._backdropOverride = value == null ? null : coerceBooleanProperty(value);
  }
  _backdropOverride;
  /** Event emitted when the drawer backdrop is clicked. */
  backdropClick = new EventEmitter();
  /** The drawer at the start/end position, independent of direction. */
  _start;
  _end;
  /**
   * The drawer at the left/right. When direction changes, these will change as well.
   * They're used as aliases for the above to set the left/right style properly.
   * In LTR, _left == _start and _right == _end.
   * In RTL, _left == _end and _right == _start.
   */
  _left;
  _right;
  /** Emits when the component is destroyed. */
  _destroyed = new Subject();
  /** Emits on every ngDoCheck. Used for debouncing reflows. */
  _doCheckSubject = new Subject();
  /**
   * Margins to be applied to the content. These are used to push / shrink the drawer content when a
   * drawer is open. We use margin rather than transform even for push mode because transform breaks
   * fixed position elements inside of the transformed element.
   */
  _contentMargins = {
    left: null,
    right: null
  };
  _contentMarginChanges = new Subject();
  /** Reference to the CdkScrollable instance that wraps the scrollable content. */
  get scrollable() {
    return this._userContent || this._content;
  }
  _injector = inject(Injector);
  constructor() {
    const platform = inject(Platform);
    const viewportRuler = inject(ViewportRuler);
    this._dir?.change.pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._validateDrawers();
      this.updateContentMargins();
    });
    viewportRuler.change().pipe(takeUntil(this._destroyed)).subscribe(() => this.updateContentMargins());
    if (this._animationMode !== "NoopAnimations" && platform.isBrowser) {
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          this._element.nativeElement.classList.add("mat-drawer-transition");
          this._transitionsEnabled = true;
        }, 200);
      });
    }
  }
  ngAfterContentInit() {
    this._allDrawers.changes.pipe(startWith(this._allDrawers), takeUntil(this._destroyed)).subscribe((drawer) => {
      this._drawers.reset(drawer.filter((item) => !item._container || item._container === this));
      this._drawers.notifyOnChanges();
    });
    this._drawers.changes.pipe(startWith(null)).subscribe(() => {
      this._validateDrawers();
      this._drawers.forEach((drawer) => {
        this._watchDrawerToggle(drawer);
        this._watchDrawerPosition(drawer);
        this._watchDrawerMode(drawer);
      });
      if (!this._drawers.length || this._isDrawerOpen(this._start) || this._isDrawerOpen(this._end)) {
        this.updateContentMargins();
      }
      this._changeDetectorRef.markForCheck();
    });
    this._ngZone.runOutsideAngular(() => {
      this._doCheckSubject.pipe(
        debounceTime(10),
        // Arbitrary debounce time, less than a frame at 60fps
        takeUntil(this._destroyed)
      ).subscribe(() => this.updateContentMargins());
    });
  }
  ngOnDestroy() {
    this._contentMarginChanges.complete();
    this._doCheckSubject.complete();
    this._drawers.destroy();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Calls `open` of both start and end drawers */
  open() {
    this._drawers.forEach((drawer) => drawer.open());
  }
  /** Calls `close` of both start and end drawers */
  close() {
    this._drawers.forEach((drawer) => drawer.close());
  }
  /**
   * Recalculates and updates the inline styles for the content. Note that this should be used
   * sparingly, because it causes a reflow.
   */
  updateContentMargins() {
    let left = 0;
    let right = 0;
    if (this._left && this._left.opened) {
      if (this._left.mode == "side") {
        left += this._left._getWidth();
      } else if (this._left.mode == "push") {
        const width = this._left._getWidth();
        left += width;
        right -= width;
      }
    }
    if (this._right && this._right.opened) {
      if (this._right.mode == "side") {
        right += this._right._getWidth();
      } else if (this._right.mode == "push") {
        const width = this._right._getWidth();
        right += width;
        left -= width;
      }
    }
    left = left || null;
    right = right || null;
    if (left !== this._contentMargins.left || right !== this._contentMargins.right) {
      this._contentMargins = {
        left,
        right
      };
      this._ngZone.run(() => this._contentMarginChanges.next(this._contentMargins));
    }
  }
  ngDoCheck() {
    if (this._autosize && this._isPushed()) {
      this._ngZone.runOutsideAngular(() => this._doCheckSubject.next());
    }
  }
  /**
   * Subscribes to drawer events in order to set a class on the main container element when the
   * drawer is open and the backdrop is visible. This ensures any overflow on the container element
   * is properly hidden.
   */
  _watchDrawerToggle(drawer) {
    drawer._animationStarted.pipe(takeUntil(this._drawers.changes)).subscribe(() => {
      this.updateContentMargins();
      this._changeDetectorRef.markForCheck();
    });
    if (drawer.mode !== "side") {
      drawer.openedChange.pipe(takeUntil(this._drawers.changes)).subscribe(() => this._setContainerClass(drawer.opened));
    }
  }
  /**
   * Subscribes to drawer onPositionChanged event in order to
   * re-validate drawers when the position changes.
   */
  _watchDrawerPosition(drawer) {
    drawer.onPositionChanged.pipe(takeUntil(this._drawers.changes)).subscribe(() => {
      afterNextRender({
        read: () => this._validateDrawers()
      }, {
        injector: this._injector
      });
    });
  }
  /** Subscribes to changes in drawer mode so we can run change detection. */
  _watchDrawerMode(drawer) {
    drawer._modeChanged.pipe(takeUntil(merge(this._drawers.changes, this._destroyed))).subscribe(() => {
      this.updateContentMargins();
      this._changeDetectorRef.markForCheck();
    });
  }
  /** Toggles the 'mat-drawer-opened' class on the main 'mat-drawer-container' element. */
  _setContainerClass(isAdd) {
    const classList = this._element.nativeElement.classList;
    const className = "mat-drawer-container-has-open";
    if (isAdd) {
      classList.add(className);
    } else {
      classList.remove(className);
    }
  }
  /** Validate the state of the drawer children components. */
  _validateDrawers() {
    this._start = this._end = null;
    this._drawers.forEach((drawer) => {
      if (drawer.position == "end") {
        if (this._end != null && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throwMatDuplicatedDrawerError("end");
        }
        this._end = drawer;
      } else {
        if (this._start != null && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throwMatDuplicatedDrawerError("start");
        }
        this._start = drawer;
      }
    });
    this._right = this._left = null;
    if (this._dir && this._dir.value === "rtl") {
      this._left = this._end;
      this._right = this._start;
    } else {
      this._left = this._start;
      this._right = this._end;
    }
  }
  /** Whether the container is being pushed to the side by one of the drawers. */
  _isPushed() {
    return this._isDrawerOpen(this._start) && this._start.mode != "over" || this._isDrawerOpen(this._end) && this._end.mode != "over";
  }
  _onBackdropClicked() {
    this.backdropClick.emit();
    this._closeModalDrawersViaBackdrop();
  }
  _closeModalDrawersViaBackdrop() {
    [this._start, this._end].filter((drawer) => drawer && !drawer.disableClose && this._drawerHasBackdrop(drawer)).forEach((drawer) => drawer._closeViaBackdropClick());
  }
  _isShowingBackdrop() {
    return this._isDrawerOpen(this._start) && this._drawerHasBackdrop(this._start) || this._isDrawerOpen(this._end) && this._drawerHasBackdrop(this._end);
  }
  _isDrawerOpen(drawer) {
    return drawer != null && drawer.opened;
  }
  // Whether argument drawer should have a backdrop when it opens
  _drawerHasBackdrop(drawer) {
    if (this._backdropOverride == null) {
      return !!drawer && drawer.mode !== "side";
    }
    return this._backdropOverride;
  }
  static \u0275fac = function MatDrawerContainer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDrawerContainer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDrawerContainer,
    selectors: [["mat-drawer-container"]],
    contentQueries: function MatDrawerContainer_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatDrawerContent, 5);
        \u0275\u0275contentQuery(dirIndex, MatDrawer, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._content = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allDrawers = _t);
      }
    },
    viewQuery: function MatDrawerContainer_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatDrawerContent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._userContent = _t.first);
      }
    },
    hostAttrs: [1, "mat-drawer-container"],
    hostVars: 2,
    hostBindings: function MatDrawerContainer_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-drawer-container-explicit-backdrop", ctx._backdropOverride);
      }
    },
    inputs: {
      autosize: "autosize",
      hasBackdrop: "hasBackdrop"
    },
    outputs: {
      backdropClick: "backdropClick"
    },
    exportAs: ["matDrawerContainer"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_DRAWER_CONTAINER,
      useExisting: _MatDrawerContainer
    }])],
    ngContentSelectors: _c3,
    decls: 4,
    vars: 2,
    consts: [[1, "mat-drawer-backdrop", 3, "mat-drawer-shown"], [1, "mat-drawer-backdrop", 3, "click"]],
    template: function MatDrawerContainer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c2);
        \u0275\u0275template(0, MatDrawerContainer_Conditional_0_Template, 1, 2, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275projection(2, 1);
        \u0275\u0275template(3, MatDrawerContainer_Conditional_3_Template, 2, 0, "mat-drawer-content");
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.hasBackdrop ? 0 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx._content ? 3 : -1);
      }
    },
    dependencies: [MatDrawerContent],
    styles: [".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDrawerContainer, [{
    type: Component,
    args: [{
      selector: "mat-drawer-container",
      exportAs: "matDrawerContainer",
      host: {
        "class": "mat-drawer-container",
        "[class.mat-drawer-container-explicit-backdrop]": "_backdropOverride"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MAT_DRAWER_CONTAINER,
        useExisting: MatDrawerContainer
      }],
      imports: [MatDrawerContent],
      template: '@if (hasBackdrop) {\n  <div class="mat-drawer-backdrop" (click)="_onBackdropClicked()"\n       [class.mat-drawer-shown]="_isShowingBackdrop()"></div>\n}\n\n<ng-content select="mat-drawer"></ng-content>\n\n<ng-content select="mat-drawer-content">\n</ng-content>\n\n@if (!_content) {\n  <mat-drawer-content>\n    <ng-content></ng-content>\n  </mat-drawer-content>\n}\n',
      styles: [".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}"]
    }]
  }], () => [], {
    _allDrawers: [{
      type: ContentChildren,
      args: [MatDrawer, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }],
    _content: [{
      type: ContentChild,
      args: [MatDrawerContent]
    }],
    _userContent: [{
      type: ViewChild,
      args: [MatDrawerContent]
    }],
    autosize: [{
      type: Input
    }],
    hasBackdrop: [{
      type: Input
    }],
    backdropClick: [{
      type: Output
    }]
  });
})();
var MatSidenavContent = class _MatSidenavContent extends MatDrawerContent {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatSidenavContent_BaseFactory;
    return function MatSidenavContent_Factory(__ngFactoryType__) {
      return (\u0275MatSidenavContent_BaseFactory || (\u0275MatSidenavContent_BaseFactory = \u0275\u0275getInheritedFactory(_MatSidenavContent)))(__ngFactoryType__ || _MatSidenavContent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSidenavContent,
    selectors: [["mat-sidenav-content"]],
    hostAttrs: [1, "mat-drawer-content", "mat-sidenav-content"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkScrollable,
      useExisting: _MatSidenavContent
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c05,
    decls: 1,
    vars: 0,
    template: function MatSidenavContent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSidenavContent, [{
    type: Component,
    args: [{
      selector: "mat-sidenav-content",
      template: "<ng-content></ng-content>",
      host: {
        "class": "mat-drawer-content mat-sidenav-content"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: CdkScrollable,
        useExisting: MatSidenavContent
      }]
    }]
  }], null, null);
})();
var MatSidenav = class _MatSidenav extends MatDrawer {
  /** Whether the sidenav is fixed in the viewport. */
  get fixedInViewport() {
    return this._fixedInViewport;
  }
  set fixedInViewport(value) {
    this._fixedInViewport = coerceBooleanProperty(value);
  }
  _fixedInViewport = false;
  /**
   * The gap between the top of the sidenav and the top of the viewport when the sidenav is in fixed
   * mode.
   */
  get fixedTopGap() {
    return this._fixedTopGap;
  }
  set fixedTopGap(value) {
    this._fixedTopGap = coerceNumberProperty(value);
  }
  _fixedTopGap = 0;
  /**
   * The gap between the bottom of the sidenav and the bottom of the viewport when the sidenav is in
   * fixed mode.
   */
  get fixedBottomGap() {
    return this._fixedBottomGap;
  }
  set fixedBottomGap(value) {
    this._fixedBottomGap = coerceNumberProperty(value);
  }
  _fixedBottomGap = 0;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatSidenav_BaseFactory;
    return function MatSidenav_Factory(__ngFactoryType__) {
      return (\u0275MatSidenav_BaseFactory || (\u0275MatSidenav_BaseFactory = \u0275\u0275getInheritedFactory(_MatSidenav)))(__ngFactoryType__ || _MatSidenav);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSidenav,
    selectors: [["mat-sidenav"]],
    hostAttrs: ["tabIndex", "-1", 1, "mat-drawer", "mat-sidenav"],
    hostVars: 15,
    hostBindings: function MatSidenav_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("align", null);
        \u0275\u0275styleProp("top", ctx.fixedInViewport ? ctx.fixedTopGap : null, "px")("bottom", ctx.fixedInViewport ? ctx.fixedBottomGap : null, "px");
        \u0275\u0275classProp("mat-drawer-end", ctx.position === "end")("mat-drawer-over", ctx.mode === "over")("mat-drawer-push", ctx.mode === "push")("mat-drawer-side", ctx.mode === "side")("mat-sidenav-fixed", ctx.fixedInViewport);
      }
    },
    inputs: {
      fixedInViewport: "fixedInViewport",
      fixedTopGap: "fixedTopGap",
      fixedBottomGap: "fixedBottomGap"
    },
    exportAs: ["matSidenav"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MatDrawer,
      useExisting: _MatSidenav
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c05,
    decls: 3,
    vars: 0,
    consts: [["content", ""], ["cdkScrollable", "", 1, "mat-drawer-inner-container"]],
    template: function MatSidenav_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275projection(2);
        \u0275\u0275elementEnd();
      }
    },
    dependencies: [CdkScrollable],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSidenav, [{
    type: Component,
    args: [{
      selector: "mat-sidenav",
      exportAs: "matSidenav",
      host: {
        "class": "mat-drawer mat-sidenav",
        "tabIndex": "-1",
        // must prevent the browser from aligning text based on value
        "[attr.align]": "null",
        "[class.mat-drawer-end]": 'position === "end"',
        "[class.mat-drawer-over]": 'mode === "over"',
        "[class.mat-drawer-push]": 'mode === "push"',
        "[class.mat-drawer-side]": 'mode === "side"',
        "[class.mat-sidenav-fixed]": "fixedInViewport",
        "[style.top.px]": "fixedInViewport ? fixedTopGap : null",
        "[style.bottom.px]": "fixedInViewport ? fixedBottomGap : null"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      imports: [CdkScrollable],
      providers: [{
        provide: MatDrawer,
        useExisting: MatSidenav
      }],
      template: '<div class="mat-drawer-inner-container" cdkScrollable #content>\r\n  <ng-content></ng-content>\r\n</div>\r\n'
    }]
  }], null, {
    fixedInViewport: [{
      type: Input
    }],
    fixedTopGap: [{
      type: Input
    }],
    fixedBottomGap: [{
      type: Input
    }]
  });
})();
var MatSidenavContainer = class _MatSidenavContainer extends MatDrawerContainer {
  _allDrawers = void 0;
  // We need an initializer here to avoid a TS error.
  _content = void 0;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatSidenavContainer_BaseFactory;
    return function MatSidenavContainer_Factory(__ngFactoryType__) {
      return (\u0275MatSidenavContainer_BaseFactory || (\u0275MatSidenavContainer_BaseFactory = \u0275\u0275getInheritedFactory(_MatSidenavContainer)))(__ngFactoryType__ || _MatSidenavContainer);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSidenavContainer,
    selectors: [["mat-sidenav-container"]],
    contentQueries: function MatSidenavContainer_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatSidenavContent, 5);
        \u0275\u0275contentQuery(dirIndex, MatSidenav, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._content = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allDrawers = _t);
      }
    },
    hostAttrs: [1, "mat-drawer-container", "mat-sidenav-container"],
    hostVars: 2,
    hostBindings: function MatSidenavContainer_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-drawer-container-explicit-backdrop", ctx._backdropOverride);
      }
    },
    exportAs: ["matSidenavContainer"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_DRAWER_CONTAINER,
      useExisting: _MatSidenavContainer
    }, {
      provide: MatDrawerContainer,
      useExisting: _MatSidenavContainer
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c5,
    decls: 4,
    vars: 2,
    consts: [[1, "mat-drawer-backdrop", 3, "mat-drawer-shown"], [1, "mat-drawer-backdrop", 3, "click"]],
    template: function MatSidenavContainer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c4);
        \u0275\u0275template(0, MatSidenavContainer_Conditional_0_Template, 1, 2, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275projection(2, 1);
        \u0275\u0275template(3, MatSidenavContainer_Conditional_3_Template, 2, 0, "mat-sidenav-content");
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.hasBackdrop ? 0 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx._content ? 3 : -1);
      }
    },
    dependencies: [MatSidenavContent],
    styles: [_c6],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSidenavContainer, [{
    type: Component,
    args: [{
      selector: "mat-sidenav-container",
      exportAs: "matSidenavContainer",
      host: {
        "class": "mat-drawer-container mat-sidenav-container",
        "[class.mat-drawer-container-explicit-backdrop]": "_backdropOverride"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MAT_DRAWER_CONTAINER,
        useExisting: MatSidenavContainer
      }, {
        provide: MatDrawerContainer,
        useExisting: MatSidenavContainer
      }],
      imports: [MatSidenavContent],
      template: '@if (hasBackdrop) {\n  <div class="mat-drawer-backdrop" (click)="_onBackdropClicked()"\n       [class.mat-drawer-shown]="_isShowingBackdrop()"></div>\n}\n\n<ng-content select="mat-sidenav"></ng-content>\n\n<ng-content select="mat-sidenav-content">\n</ng-content>\n\n@if (!_content) {\n  <mat-sidenav-content>\n    <ng-content></ng-content>\n  </mat-sidenav-content>\n}\n',
      styles: [".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}"]
    }]
  }], null, {
    _allDrawers: [{
      type: ContentChildren,
      args: [MatSidenav, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }],
    _content: [{
      type: ContentChild,
      args: [MatSidenavContent]
    }]
  });
})();
var MatSidenavModule = class _MatSidenavModule {
  static \u0275fac = function MatSidenavModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSidenavModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatSidenavModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, CdkScrollableModule, CdkScrollableModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSidenavModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, CdkScrollableModule, MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent],
      exports: [CdkScrollableModule, MatCommonModule, MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent]
    }]
  }], null, null);
})();

// src/app/job-seeker/components/job-seeker-dashboard/job-seeker-dashboard.component.ts
var _c06 = ["sidenav"];
var JobSeekerDashboardComponent = class _JobSeekerDashboardComponent {
  authService;
  breakpointObserver;
  cdr;
  router;
  sidenav;
  mobileView = false;
  sidenavMode = "side";
  sidenavOpened = true;
  sidenavState = "in";
  notificationCount = 3;
  constructor(authService, breakpointObserver, cdr, router) {
    this.authService = authService;
    this.breakpointObserver = breakpointObserver;
    this.cdr = cdr;
    this.router = router;
  }
  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small]).subscribe((result) => {
      this.mobileView = result.matches;
      this.sidenavMode = result.matches ? "over" : "side";
      this.sidenavOpened = !result.matches;
      this.sidenavState = this.sidenavOpened ? "in" : "out";
      this.cdr.detectChanges();
    });
    setTimeout(() => {
      this.sidenavState = "in";
    }, 100);
  }
  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
    this.sidenavState = this.sidenavOpened ? "in" : "out";
    if (this.sidenavMode === "side") {
    } else {
      this.sidenav.toggle();
    }
  }
  onNavItemClick() {
    if (this.mobileView) {
      this.sidenav.close();
      this.sidenavState = "out";
      this.sidenavOpened = false;
    }
  }
  logout() {
    this.authService.logout();
    this.router.navigate(["/auth/login"]);
  }
  static \u0275fac = function JobSeekerDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JobSeekerDashboardComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(BreakpointObserver), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JobSeekerDashboardComponent, selectors: [["app-job-seeker-dashboard"]], viewQuery: function JobSeekerDashboardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c06, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sidenav = _t.first);
    }
  }, decls: 93, vars: 12, consts: [["userMenu", "matMenu"], ["sidenav", ""], [1, "dashboard-container"], [1, "toolbar"], [1, "toolbar-left"], ["mat-icon-button", "", 1, "menu-button", 3, "click"], [1, "fas", "fa-bars"], [1, "app-title", "typewriter"], [1, "toolbar-right"], ["mat-icon-button", "", "matBadgeColor", "accent", "aria-label", "Show notifications", 1, "notification-button", 3, "matBadge"], [1, "fas", "fa-bell"], ["mat-icon-button", "", "aria-label", "User menu", 3, "matMenuTriggerFor"], [1, "fas", "fa-user-circle"], [1, "custom-menu"], ["mat-menu-item", "", "routerLink", "profile"], [1, "fas", "fa-user"], ["mat-menu-item", "", "routerLink", "settings"], [1, "fas", "fa-cog"], ["mat-menu-item", "", 3, "click"], [1, "fas", "fa-sign-out-alt"], [1, "sidenav-container"], [1, "sidenav", 3, "mode", "opened", "fixedInViewport"], [1, "nav-section"], ["matSubheader", ""], ["mat-list-item", "", "routerLink", "profile", "routerLinkActive", "active", 1, "nav-item", 3, "click"], [1, "fas", "fa-id-card"], ["mat-list-item", "", "routerLink", "skills", "routerLinkActive", "active", 1, "nav-item", 3, "click"], [1, "fas", "fa-brain"], ["mat-list-item", "", "routerLink", "portfolio", "routerLinkActive", "active", 1, "nav-item", 3, "click"], [1, "fas", "fa-folder-open"], ["mat-list-item", "", "routerLink", "cv", "routerLinkActive", "active", 1, "nav-item", 3, "click"], [1, "fas", "fa-file-alt"], ["mat-list-item", "", "routerLink", "job-search", "routerLinkActive", "active", 1, "nav-item", 3, "click"], [1, "fas", "fa-search"], ["mat-list-item", "", "routerLink", "matches", "routerLinkActive", "active", 1, "nav-item", 3, "click"], [1, "fas", "fa-handshake"], ["mat-list-item", "", "routerLink", "applications", "routerLinkActive", "active", 1, "nav-item", 3, "click"], [1, "fas", "fa-paper-plane"], ["mat-list-item", "", "routerLink", "interviews", "routerLinkActive", "active", 1, "nav-item", 3, "click"], [1, "fas", "fa-comments"], ["mat-list-item", "", "routerLink", "career-paths", "routerLinkActive", "active", 1, "nav-item", 3, "click"], [1, "fas", "fa-road"], ["mat-list-item", "", "routerLink", "learning", "routerLinkActive", "active", 1, "nav-item", 3, "click"], [1, "fas", "fa-graduation-cap"], ["mat-list-item", "", "routerLink", "chatbot", "routerLinkActive", "active", 1, "nav-item", 3, "click"], [1, "fas", "fa-robot"], [1, "content"], [1, "content-wrapper"]], template: function JobSeekerDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "mat-toolbar", 3)(2, "div", 4)(3, "button", 5);
      \u0275\u0275listener("click", function JobSeekerDashboardComponent_Template_button_click_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleSidenav());
      });
      \u0275\u0275element(4, "i", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 7);
      \u0275\u0275text(6, "Employbridge AI");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 8)(8, "button", 9);
      \u0275\u0275element(9, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 11);
      \u0275\u0275element(11, "i", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "mat-menu", 13, 0)(14, "button", 14);
      \u0275\u0275element(15, "i", 15);
      \u0275\u0275elementStart(16, "span");
      \u0275\u0275text(17, "My Profile");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "button", 16);
      \u0275\u0275element(19, "i", 17);
      \u0275\u0275elementStart(20, "span");
      \u0275\u0275text(21, "Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(22, "mat-divider");
      \u0275\u0275elementStart(23, "button", 18);
      \u0275\u0275listener("click", function JobSeekerDashboardComponent_Template_button_click_23_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.logout());
      });
      \u0275\u0275element(24, "i", 19);
      \u0275\u0275elementStart(25, "span");
      \u0275\u0275text(26, "Logout");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(27, "mat-sidenav-container", 20)(28, "mat-sidenav", 21, 1)(30, "mat-nav-list")(31, "div", 22)(32, "h3", 23);
      \u0275\u0275text(33, "Profile & Portfolio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "a", 24);
      \u0275\u0275listener("click", function JobSeekerDashboardComponent_Template_a_click_34_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onNavItemClick());
      });
      \u0275\u0275element(35, "i", 25);
      \u0275\u0275elementStart(36, "span");
      \u0275\u0275text(37, "Profile Overview");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "a", 26);
      \u0275\u0275listener("click", function JobSeekerDashboardComponent_Template_a_click_38_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onNavItemClick());
      });
      \u0275\u0275element(39, "i", 27);
      \u0275\u0275elementStart(40, "span");
      \u0275\u0275text(41, "Skill Management");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "a", 28);
      \u0275\u0275listener("click", function JobSeekerDashboardComponent_Template_a_click_42_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onNavItemClick());
      });
      \u0275\u0275element(43, "i", 29);
      \u0275\u0275elementStart(44, "span");
      \u0275\u0275text(45, "Portfolio");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "a", 30);
      \u0275\u0275listener("click", function JobSeekerDashboardComponent_Template_a_click_46_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onNavItemClick());
      });
      \u0275\u0275element(47, "i", 31);
      \u0275\u0275elementStart(48, "span");
      \u0275\u0275text(49, "CV Manager");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(50, "mat-divider");
      \u0275\u0275elementStart(51, "div", 22)(52, "h3", 23);
      \u0275\u0275text(53, "Job Search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "a", 32);
      \u0275\u0275listener("click", function JobSeekerDashboardComponent_Template_a_click_54_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onNavItemClick());
      });
      \u0275\u0275element(55, "i", 33);
      \u0275\u0275elementStart(56, "span");
      \u0275\u0275text(57, "Job Search");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "a", 34);
      \u0275\u0275listener("click", function JobSeekerDashboardComponent_Template_a_click_58_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onNavItemClick());
      });
      \u0275\u0275element(59, "i", 35);
      \u0275\u0275elementStart(60, "span");
      \u0275\u0275text(61, "Job Matches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "a", 36);
      \u0275\u0275listener("click", function JobSeekerDashboardComponent_Template_a_click_62_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onNavItemClick());
      });
      \u0275\u0275element(63, "i", 37);
      \u0275\u0275elementStart(64, "span");
      \u0275\u0275text(65, "Applications");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "a", 38);
      \u0275\u0275listener("click", function JobSeekerDashboardComponent_Template_a_click_66_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onNavItemClick());
      });
      \u0275\u0275element(67, "i", 39);
      \u0275\u0275elementStart(68, "span");
      \u0275\u0275text(69, "Interviews");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(70, "mat-divider");
      \u0275\u0275elementStart(71, "div", 22)(72, "h3", 23);
      \u0275\u0275text(73, "Career Development");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "a", 40);
      \u0275\u0275listener("click", function JobSeekerDashboardComponent_Template_a_click_74_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onNavItemClick());
      });
      \u0275\u0275element(75, "i", 41);
      \u0275\u0275elementStart(76, "span");
      \u0275\u0275text(77, "Career Paths");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "a", 42);
      \u0275\u0275listener("click", function JobSeekerDashboardComponent_Template_a_click_78_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onNavItemClick());
      });
      \u0275\u0275element(79, "i", 43);
      \u0275\u0275elementStart(80, "span");
      \u0275\u0275text(81, "Learning Resources");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(82, "mat-divider");
      \u0275\u0275elementStart(83, "div", 22)(84, "h3", 23);
      \u0275\u0275text(85, "AI Tools");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "a", 44);
      \u0275\u0275listener("click", function JobSeekerDashboardComponent_Template_a_click_86_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onNavItemClick());
      });
      \u0275\u0275element(87, "i", 45);
      \u0275\u0275elementStart(88, "span");
      \u0275\u0275text(89, "Career Assistant");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(90, "mat-sidenav-content", 46)(91, "div", 47);
      \u0275\u0275element(92, "router-outlet");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const userMenu_r2 = \u0275\u0275reference(13);
      \u0275\u0275advance();
      \u0275\u0275property("@fadeIn", void 0);
      \u0275\u0275advance(7);
      \u0275\u0275property("matBadge", ctx.notificationCount);
      \u0275\u0275advance(2);
      \u0275\u0275property("matMenuTriggerFor", userMenu_r2);
      \u0275\u0275advance(18);
      \u0275\u0275property("mode", ctx.sidenavMode)("opened", ctx.sidenavOpened)("fixedInViewport", ctx.mobileView)("@slideInOut", ctx.sidenavState);
      \u0275\u0275advance(3);
      \u0275\u0275property("@fadeIn", void 0);
      \u0275\u0275advance(20);
      \u0275\u0275property("@fadeIn", void 0);
      \u0275\u0275advance(20);
      \u0275\u0275property("@fadeIn", void 0);
      \u0275\u0275advance(12);
      \u0275\u0275property("@fadeIn", void 0);
      \u0275\u0275advance(8);
      \u0275\u0275property("@slideInFromRight", void 0);
    }
  }, dependencies: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    MatToolbarModule,
    MatToolbar,
    MatListModule,
    MatNavList,
    MatListItem,
    MatListSubheaderCssMatStyler,
    MatDivider,
    MatIconModule,
    MatButtonModule,
    MatIconButton,
    MatMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatBadgeModule,
    MatBadge,
    MatDividerModule
  ], styles: ['\n\n[_nghost-%COMP%] {\n  --primary: #8B5A2B;\n  --primary-light: #A67C52;\n  --primary-dark: #6B4423;\n  --accent: #D2B48C;\n  --accent-light: #E6D2B8;\n  --accent-dark: #9F8A6E;\n  --text-primary: #3E2723;\n  --text-secondary: #5D4037;\n  --background-light: #F5F0E6;\n  --card-bg: #FFFFFF;\n  --success: #4CAF50;\n  --warning: #FFC107;\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 16px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--primary-dark) 100%);\n  color: white;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n}\n.toolbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.app-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.typewriter[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-right: 3px solid rgba(255, 255, 255, 0.75);\n  white-space: nowrap;\n  margin: 0;\n  animation: _ngcontent-%COMP%_typing 3.5s steps(30, end), _ngcontent-%COMP%_blink-caret 0.75s step-end infinite;\n}\n@keyframes _ngcontent-%COMP%_typing {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n@keyframes _ngcontent-%COMP%_blink-caret {\n  from, to {\n    border-color: transparent;\n  }\n  50% {\n    border-color: rgba(255, 255, 255, 0.75);\n  }\n}\n.sidenav-container[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: var(--background-light);\n  margin-top: 64px;\n}\n.sidenav[_ngcontent-%COMP%] {\n  width: 260px;\n  background-color: var(--card-bg);\n  border-right: 1px solid var(--accent-light);\n  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);\n}\n.sidenav-header[_ngcontent-%COMP%] {\n  padding: 24px 16px;\n  background-color: var(--primary-dark);\n  color: white;\n}\n.logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.logo-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  height: 28px;\n  width: 28px;\n}\n.logo-text[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.content[_ngcontent-%COMP%] {\n  background-color: var(--background-light);\n  transition: margin-left 0.3s ease;\n}\n.content-wrapper[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n  transition: max-width 0.3s ease;\n}\n.sidenav-container[_ngcontent-%COMP%]:not(.mat-drawer-opened)   .content[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.sidenav-container[_ngcontent-%COMP%]:not(.mat-drawer-opened)   .content-wrapper[_ngcontent-%COMP%] {\n  max-width: 1400px;\n}\n.sidenav-container.mat-drawer-opened[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-left: 260px;\n}\n.sidenav-container.mat-drawer-opened[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%] {\n  max-width: 1200px;\n}\nmat-nav-list[_ngcontent-%COMP%] {\n  padding-top: 16px;\n}\nmat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 48px;\n  margin: 8px 12px;\n  border-radius: 8px;\n  color: var(--text-secondary);\n  font-weight: 500;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  padding: 0 16px;\n}\nmat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 16px;\n  font-size: 20px;\n  width: 20px;\n  text-align: center;\n  color: var(--text-secondary);\n  transition: transform 0.3s ease, color 0.3s ease;\n}\nmat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 8px;\n}\nmat-nav-list[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: var(--accent-light);\n  color: var(--primary);\n  transform: translateX(5px);\n  position: relative;\n}\nmat-nav-list[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\nmat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: var(--background-light);\n  transform: translateX(5px);\n}\nmat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  color: var(--primary-light);\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  color: var(--text-secondary);\n  transition: transform 0.3s ease, color 0.3s ease;\n  font-size: 20px;\n  width: 20px;\n  text-align: center;\n}\n.nav-item.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.nav-item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  color: var(--primary-light);\n}\n.nav-section[_ngcontent-%COMP%] {\n  padding: 8px 0;\n  transition: opacity 0.5s ease;\n}\nh3[matSubheader][_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 16px 24px 8px;\n  margin: 0;\n}\nmat-divider[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  background-color: var(--accent-light);\n}\n.toolbar-right[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: white;\n}\n.mat-badge-content[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-weight: 500;\n  background-color: var(--accent-dark) !important;\n}\n  .custom-menu {\n  background-color: white;\n}\n  .custom-menu .mat-menu-item:hover {\n  background-color: var(--background-light);\n}\n  .custom-menu .mat-menu-item i {\n  color: var(--primary);\n  margin-right: 8px;\n}\n.nav-item.active[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--primary);\n  box-shadow: 0 0 8px var(--primary-light);\n  animation: _ngcontent-%COMP%_pulse 1.5s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(139, 90, 43, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 10px rgba(139, 90, 43, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(139, 90, 43, 0);\n  }\n}\n@media (max-width: 768px) {\n  .toolbar[_ngcontent-%COMP%] {\n    padding: 0 8px;\n  }\n  .app-title[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .sidenav[_ngcontent-%COMP%] {\n    width: 85%;\n    max-width: 300px;\n  }\n  .content-wrapper[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .sidenav-container[_ngcontent-%COMP%] {\n    margin-top: 56px;\n  }\n  mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin: 4px 8px;\n    height: 44px;\n  }\n  h3[matSubheader][_ngcontent-%COMP%] {\n    padding: 12px 16px 6px;\n  }\n}\n.sidenav[_ngcontent-%COMP%] {\n  transition: width 0.3s ease-in-out, transform 0.3s ease-in-out;\n}\n@media (min-width: 1025px) {\n  .menu-button[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.menu-button[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.menu-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n  .mdc-list-item__content {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n/*# sourceMappingURL=job-seeker-dashboard.component.css.map */'], data: { animation: [
    trigger("slideInOut", [
      state("in", style({
        transform: "translateX(0)",
        opacity: 1
      })),
      state("out", style({
        transform: "translateX(-100%)",
        opacity: 0
      })),
      transition("in => out", animate("300ms ease-out")),
      transition("out => in", animate("300ms ease-in"))
    ]),
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("400ms ease-in", style({ opacity: 1 }))
      ])
    ]),
    trigger("slideInFromRight", [
      transition(":enter", [
        style({ transform: "translateX(50px)", opacity: 0 }),
        animate("400ms ease-out", style({ transform: "translateX(0)", opacity: 1 }))
      ])
    ]),
    trigger("slideInFromBottom", [
      transition(":enter", [
        style({ transform: "translateY(30px)", opacity: 0 }),
        animate("500ms ease-out", style({ transform: "translateY(0)", opacity: 1 }))
      ])
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JobSeekerDashboardComponent, { className: "JobSeekerDashboardComponent", filePath: "src/app/job-seeker/components/job-seeker-dashboard/job-seeker-dashboard.component.ts", lineNumber: 611 });
})();

// src/app/employer/components/employer-dashboard/employer-dashboard.component.ts
var EmployerDashboardComponent = class _EmployerDashboardComponent {
  authService;
  breakpointObserver;
  isHandset$;
  sidenavOpened = true;
  sidenavState = "in";
  constructor(authService, breakpointObserver) {
    this.authService = authService;
    this.breakpointObserver = breakpointObserver;
    this.isHandset$ = this.breakpointObserver.observe("(max-width: 768px)").pipe(map((result) => result.matches));
  }
  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
    this.sidenavState = this.sidenavOpened ? "in" : "out";
  }
  logout() {
    this.authService.logout();
  }
  static \u0275fac = function EmployerDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmployerDashboardComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(BreakpointObserver));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmployerDashboardComponent, selectors: [["app-employer-dashboard"]], decls: 91, vars: 17, consts: [["userMenu", "matMenu"], ["sidenav", ""], [1, "dashboard-container"], [1, "toolbar"], [1, "toolbar-left"], ["mat-icon-button", "", 1, "menu-button", 3, "click"], [1, "fas", "fa-bars"], [1, "app-title"], [1, "fas", "fa-briefcase", "logo-icon"], [1, "app-name"], [1, "toolbar-right"], ["mat-button", "", 1, "profile-button", 3, "matMenuTriggerFor"], [1, "fas", "fa-user-circle", "profile-icon"], [1, "custom-menu"], ["mat-menu-item", "", "routerLink", "/company/profile"], [1, "fas", "fa-building"], ["mat-menu-item", "", "routerLink", "/company/settings"], [1, "fas", "fa-cog"], ["mat-menu-item", "", 3, "click"], [1, "fas", "fa-sign-out-alt"], [1, "sidenav-container"], ["fixedInViewport", "", 1, "sidenav", 3, "mode", "opened"], [1, "sidenav-header"], [1, "logo-container"], [1, "logo-text"], [1, "nav-section"], ["matSubheader", ""], ["mat-list-item", "", "routerLink", "listings", "routerLinkActive", "active"], [1, "fas", "fa-list-alt"], ["mat-list-item", "", "routerLink", "post-job", "routerLinkActive", "active"], [1, "fas", "fa-plus-square"], ["mat-list-item", "", "routerLink", "templates", "routerLinkActive", "active"], [1, "fas", "fa-file-alt"], ["mat-list-item", "", "routerLink", "candidates", "routerLinkActive", "active"], [1, "fas", "fa-users"], ["mat-list-item", "", "routerLink", "search", "routerLinkActive", "active"], [1, "fas", "fa-search"], ["mat-list-item", "", "routerLink", "interviews", "routerLinkActive", "active"], [1, "fas", "fa-calendar-alt"], ["mat-list-item", "", "routerLink", "analytics", "routerLinkActive", "active"], [1, "fas", "fa-chart-line"], ["mat-list-item", "", "routerLink", "profile", "routerLinkActive", "active"], [1, "content"]], template: function EmployerDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "mat-toolbar", 3)(2, "div", 4)(3, "button", 5);
      \u0275\u0275listener("click", function EmployerDashboardComponent_Template_button_click_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleSidenav());
      });
      \u0275\u0275element(4, "i", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 7);
      \u0275\u0275element(6, "i", 8);
      \u0275\u0275elementStart(7, "span", 9);
      \u0275\u0275text(8, "Employbridge AI");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 10)(10, "button", 11);
      \u0275\u0275element(11, "i", 12);
      \u0275\u0275elementStart(12, "span");
      \u0275\u0275text(13, "Company Profile");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "mat-menu", 13, 0)(16, "button", 14);
      \u0275\u0275element(17, "i", 15);
      \u0275\u0275elementStart(18, "span");
      \u0275\u0275text(19, "Company Profile");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "button", 16);
      \u0275\u0275element(21, "i", 17);
      \u0275\u0275elementStart(22, "span");
      \u0275\u0275text(23, "Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(24, "mat-divider");
      \u0275\u0275elementStart(25, "button", 18);
      \u0275\u0275listener("click", function EmployerDashboardComponent_Template_button_click_25_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.logout());
      });
      \u0275\u0275element(26, "i", 19);
      \u0275\u0275elementStart(27, "span");
      \u0275\u0275text(28, "Logout");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(29, "mat-sidenav-container", 20)(30, "mat-sidenav", 21, 1);
      \u0275\u0275pipe(32, "async");
      \u0275\u0275pipe(33, "async");
      \u0275\u0275pipe(34, "async");
      \u0275\u0275elementStart(35, "div", 22)(36, "div", 23);
      \u0275\u0275element(37, "i", 8);
      \u0275\u0275elementStart(38, "span", 24);
      \u0275\u0275text(39, "Employer Portal");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "mat-nav-list")(41, "div", 25)(42, "h3", 26);
      \u0275\u0275text(43, "JOB MANAGEMENT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "a", 27);
      \u0275\u0275element(45, "i", 28);
      \u0275\u0275elementStart(46, "span");
      \u0275\u0275text(47, "Active Listings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "a", 29);
      \u0275\u0275element(49, "i", 30);
      \u0275\u0275elementStart(50, "span");
      \u0275\u0275text(51, "Post New Job");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "a", 31);
      \u0275\u0275element(53, "i", 32);
      \u0275\u0275elementStart(54, "span");
      \u0275\u0275text(55, "Job Templates");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(56, "mat-divider");
      \u0275\u0275elementStart(57, "div", 25)(58, "h3", 26);
      \u0275\u0275text(59, "TALENT ACQUISITION");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "a", 33);
      \u0275\u0275element(61, "i", 34);
      \u0275\u0275elementStart(62, "span");
      \u0275\u0275text(63, "Candidate Pool");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "a", 35);
      \u0275\u0275element(65, "i", 36);
      \u0275\u0275elementStart(66, "span");
      \u0275\u0275text(67, "AI Search");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "a", 37);
      \u0275\u0275element(69, "i", 38);
      \u0275\u0275elementStart(70, "span");
      \u0275\u0275text(71, "Interview Schedule");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(72, "mat-divider");
      \u0275\u0275elementStart(73, "div", 25)(74, "h3", 26);
      \u0275\u0275text(75, "INSIGHTS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "a", 39);
      \u0275\u0275element(77, "i", 40);
      \u0275\u0275elementStart(78, "span");
      \u0275\u0275text(79, "Hiring Analytics");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(80, "mat-divider");
      \u0275\u0275elementStart(81, "div", 25)(82, "h3", 26);
      \u0275\u0275text(83, "COMPANY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "a", 41);
      \u0275\u0275element(85, "i", 15);
      \u0275\u0275elementStart(86, "span");
      \u0275\u0275text(87, "Company Profile");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(88, "mat-sidenav-content")(89, "div", 42);
      \u0275\u0275element(90, "router-outlet");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const userMenu_r2 = \u0275\u0275reference(15);
      \u0275\u0275advance();
      \u0275\u0275property("@fadeIn", void 0);
      \u0275\u0275advance(9);
      \u0275\u0275property("matMenuTriggerFor", userMenu_r2);
      \u0275\u0275advance(20);
      \u0275\u0275property("@slideInOut", ctx.sidenavState)("mode", \u0275\u0275pipeBind1(32, 11, ctx.isHandset$) ? "over" : "side")("opened", !\u0275\u0275pipeBind1(33, 13, ctx.isHandset$) || ctx.sidenavOpened);
      \u0275\u0275attribute("role", \u0275\u0275pipeBind1(34, 15, ctx.isHandset$) ? "dialog" : "navigation");
      \u0275\u0275advance(11);
      \u0275\u0275property("@fadeIn", void 0);
      \u0275\u0275advance(16);
      \u0275\u0275property("@fadeIn", void 0);
      \u0275\u0275advance(16);
      \u0275\u0275property("@fadeIn", void 0);
      \u0275\u0275advance(8);
      \u0275\u0275property("@fadeIn", void 0);
      \u0275\u0275advance(8);
      \u0275\u0275property("@fadeIn", void 0);
    }
  }, dependencies: [
    CommonModule,
    AsyncPipe,
    RouterModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    MatToolbarModule,
    MatToolbar,
    MatListModule,
    MatNavList,
    MatListItem,
    MatListSubheaderCssMatStyler,
    MatDivider,
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatBadgeModule,
    MatDividerModule
  ], styles: ["\n\n[_nghost-%COMP%] {\n  --primary-color: rgba(102, 187, 106, 0.95);\n  --primary-dark: rgba(56, 142, 60, 0.95);\n  --primary-light: rgba(200, 230, 201, 0.7);\n  --accent-color: #4caf50;\n  --text-primary: #2e7d32;\n  --text-secondary: #455a64;\n  --background-light: rgba(245, 245, 245, 0.95);\n  --card-bg: rgba(255, 255, 255, 0.98);\n  --active-bg: rgba(200, 230, 201, 0.5);\n  --hover-opacity: 0.08;\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--background-light);\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 16px;\n  background: var(--primary-color);\n  color: white;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n  z-index: 2;\n}\n.toolbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.app-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.25rem;\n  font-weight: 500;\n}\n.logo-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.app-name[_ngcontent-%COMP%] {\n  letter-spacing: 0.5px;\n}\n.menu-button[_ngcontent-%COMP%] {\n  color: white;\n  transition: transform 0.3s ease;\n}\n.menu-button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.profile-button[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 12px;\n  transition: background-color 0.3s ease;\n  border-radius: 20px;\n}\n.profile-button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.profile-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.sidenav-container[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: transparent;\n}\n.sidenav[_ngcontent-%COMP%] {\n  width: 280px;\n  background-color: var(--card-bg);\n  border-right: none;\n  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n}\n.sidenav-header[_ngcontent-%COMP%] {\n  padding: 24px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color) 0%,\n      var(--primary-dark) 100%);\n  color: white;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.logo-text[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n}\n.nav-section[_ngcontent-%COMP%] {\n  padding: 8px 0;\n}\nmat-nav-list[_ngcontent-%COMP%] {\n  padding-top: 8px;\n}\nmat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 48px;\n  margin: 4px 12px;\n  border-radius: 8px;\n  color: var(--text-secondary);\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 0 16px;\n  transition: all 0.3s ease;\n}\nmat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\nmat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  flex: 1;\n  font-size: 0.95rem;\n}\nmat-nav-list[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: var(--active-bg);\n  color: var(--text-primary);\n  font-weight: 500;\n  box-shadow: 0 2px 8px rgba(76, 175, 80, 0.2);\n}\nmat-nav-list[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  transform: scale(1.1);\n}\nmat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active) {\n  background-color: rgba(0, 0, 0, var(--hover-opacity));\n}\nmat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: translateX(2px);\n}\nh3[matSubheader][_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  padding: 16px 24px 8px;\n  margin: 0;\n  opacity: 0.8;\n}\nmat-divider[_ngcontent-%COMP%] {\n  margin: 8px 16px;\n  border-color: rgba(0, 0, 0, 0.05);\n}\n.content[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n  min-height: calc(100vh - 64px);\n}\n  .custom-menu {\n  background-color: var(--card-bg);\n  border-radius: 8px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n  .custom-menu .mat-menu-item {\n  height: 48px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 0 16px;\n  transition: all 0.2s ease;\n}\n  .custom-menu .mat-menu-item i {\n  color: var(--text-primary);\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n  .custom-menu .mat-menu-item:hover {\n  background-color: rgba(0, 0, 0, var(--hover-opacity));\n}\n@media (max-width: 768px) {\n  .sidenav[_ngcontent-%COMP%] {\n    width: 260px;\n  }\n  .content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .app-name[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.active-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--accent-color);\n  box-shadow: 0 0 8px var(--accent-color);\n}\n/*# sourceMappingURL=employer-dashboard.component.css.map */"], data: { animation: [
    trigger("slideInOut", [
      state("in", style({
        transform: "translateX(0)",
        opacity: 1
      })),
      state("out", style({
        transform: "translateX(-100%)",
        opacity: 0
      })),
      transition("in => out", animate("300ms ease-out")),
      transition("out => in", animate("300ms ease-in"))
    ]),
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("400ms ease-in", style({ opacity: 1 }))
      ])
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmployerDashboardComponent, { className: "EmployerDashboardComponent", filePath: "src/app/employer/components/employer-dashboard/employer-dashboard.component.ts", lineNumber: 55 });
})();

// src/app/admin/components/admin-dashboard/admin-dashboard.component.ts
var _c07 = ["sidenav"];
var AdminDashboardComponent = class _AdminDashboardComponent {
  authService;
  sidenav;
  sidenavOpened = true;
  sidenavState = "in";
  constructor(authService) {
    this.authService = authService;
  }
  ngOnInit() {
    setTimeout(() => {
      this.sidenavState = "in";
    }, 100);
  }
  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
    this.sidenavState = this.sidenavOpened ? "in" : "out";
  }
  logout() {
    this.authService.logout();
  }
  static \u0275fac = function AdminDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminDashboardComponent)(\u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], viewQuery: function AdminDashboardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c07, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sidenav = _t.first);
    }
  }, decls: 90, vars: 11, consts: [["userMenu", "matMenu"], ["sidenav", ""], [1, "dashboard-container"], [1, "toolbar"], [1, "toolbar-left"], ["mat-icon-button", "", 3, "click"], [1, "fas", "fa-bars"], [1, "app-title", "typewriter"], [1, "toolbar-right"], ["mat-icon-button", "", "matBadgeColor", "accent", 3, "matBadge"], [1, "fas", "fa-bell"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [1, "fas", "fa-cog"], [1, "custom-menu"], ["mat-menu-item", "", "routerLink", "profile"], [1, "fas", "fa-user"], ["mat-menu-item", "", "routerLink", "settings"], ["mat-menu-item", "", 3, "click"], [1, "fas", "fa-sign-out-alt"], [1, "sidenav-container"], ["mode", "side", 1, "sidenav", 3, "opened"], [1, "sidenav-header"], [1, "logo-container"], [1, "fas", "fa-robot", "logo-icon"], [1, "logo-text"], [1, "nav-section"], ["matSubheader", ""], ["mat-list-item", "", "routerLink", "users", "routerLinkActive", "active", 1, "nav-item"], [1, "fas", "fa-users"], ["mat-list-item", "", "routerLink", "permissions", "routerLinkActive", "active", 1, "nav-item"], [1, "fas", "fa-shield-alt"], ["mat-list-item", "", "routerLink", "jobs", "routerLinkActive", "active", 1, "nav-item"], [1, "fas", "fa-briefcase"], ["mat-list-item", "", "routerLink", "skills", "routerLinkActive", "active", 1, "nav-item"], [1, "fas", "fa-tags"], ["mat-list-item", "", "routerLink", "ai-models", "routerLinkActive", "active", 1, "nav-item"], [1, "fas", "fa-robot"], ["mat-list-item", "", "routerLink", "accuracy-metrics", "routerLinkActive", "active", 1, "nav-item"], [1, "fas", "fa-chart-line"], ["mat-list-item", "", "routerLink", "monitoring", "routerLinkActive", "active", 1, "nav-item"], [1, "fas", "fa-heartbeat"], ["mat-list-item", "", "routerLink", "analytics", "routerLinkActive", "active", 1, "nav-item"], [1, "fas", "fa-chart-bar"], [1, "content"], [1, "content-wrapper"]], template: function AdminDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "mat-toolbar", 3)(2, "div", 4)(3, "button", 5);
      \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleSidenav());
      });
      \u0275\u0275element(4, "i", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 7);
      \u0275\u0275text(6, "Employbridge AI");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 8)(8, "button", 9);
      \u0275\u0275element(9, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 11);
      \u0275\u0275element(11, "i", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "mat-menu", 13, 0)(14, "button", 14);
      \u0275\u0275element(15, "i", 15);
      \u0275\u0275elementStart(16, "span");
      \u0275\u0275text(17, "Admin Profile");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "button", 16);
      \u0275\u0275element(19, "i", 12);
      \u0275\u0275elementStart(20, "span");
      \u0275\u0275text(21, "Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(22, "mat-divider");
      \u0275\u0275elementStart(23, "button", 17);
      \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_23_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.logout());
      });
      \u0275\u0275element(24, "i", 18);
      \u0275\u0275elementStart(25, "span");
      \u0275\u0275text(26, "Logout");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(27, "mat-sidenav-container", 19)(28, "mat-sidenav", 20, 1)(30, "div", 21)(31, "div", 22);
      \u0275\u0275element(32, "i", 23);
      \u0275\u0275elementStart(33, "span", 24);
      \u0275\u0275text(34, "Employbridge");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "mat-nav-list")(36, "div", 25)(37, "h3", 26);
      \u0275\u0275text(38, "User Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "a", 27);
      \u0275\u0275element(40, "i", 28);
      \u0275\u0275elementStart(41, "span");
      \u0275\u0275text(42, "User Accounts");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "a", 29);
      \u0275\u0275element(44, "i", 30);
      \u0275\u0275elementStart(45, "span");
      \u0275\u0275text(46, "Permissions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(47, "mat-divider");
      \u0275\u0275elementStart(48, "div", 25)(49, "h3", 26);
      \u0275\u0275text(50, "Job Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "a", 31);
      \u0275\u0275element(52, "i", 32);
      \u0275\u0275elementStart(53, "span");
      \u0275\u0275text(54, "Job Listings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "a", 33);
      \u0275\u0275element(56, "i", 34);
      \u0275\u0275elementStart(57, "span");
      \u0275\u0275text(58, "Skills Management");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(59, "mat-divider");
      \u0275\u0275elementStart(60, "div", 25)(61, "h3", 26);
      \u0275\u0275text(62, "AI Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "a", 35);
      \u0275\u0275element(64, "i", 36);
      \u0275\u0275elementStart(65, "span");
      \u0275\u0275text(66, "AI Models");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "a", 37);
      \u0275\u0275element(68, "i", 38);
      \u0275\u0275elementStart(69, "span");
      \u0275\u0275text(70, "Accuracy Metrics");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(71, "mat-divider");
      \u0275\u0275elementStart(72, "div", 25)(73, "h3", 26);
      \u0275\u0275text(74, "System");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "a", 39);
      \u0275\u0275element(76, "i", 40);
      \u0275\u0275elementStart(77, "span");
      \u0275\u0275text(78, "System Health");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(79, "mat-divider");
      \u0275\u0275elementStart(80, "div", 25)(81, "h3", 26);
      \u0275\u0275text(82, "Analytics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "a", 41);
      \u0275\u0275element(84, "i", 42);
      \u0275\u0275elementStart(85, "span");
      \u0275\u0275text(86, "Platform Analytics");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(87, "mat-sidenav-content", 43)(88, "div", 44);
      \u0275\u0275element(89, "router-outlet");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const userMenu_r2 = \u0275\u0275reference(13);
      \u0275\u0275advance();
      \u0275\u0275property("@fadeIn", void 0);
      \u0275\u0275advance(7);
      \u0275\u0275property("matBadge", "5");
      \u0275\u0275advance(2);
      \u0275\u0275property("matMenuTriggerFor", userMenu_r2);
      \u0275\u0275advance(18);
      \u0275\u0275property("opened", ctx.sidenavOpened)("@slideInOut", ctx.sidenavState);
      \u0275\u0275advance(8);
      \u0275\u0275property("@fadeIn", void 0);
      \u0275\u0275advance(12);
      \u0275\u0275property("@fadeIn", void 0);
      \u0275\u0275advance(12);
      \u0275\u0275property("@fadeIn", void 0);
      \u0275\u0275advance(12);
      \u0275\u0275property("@fadeIn", void 0);
      \u0275\u0275advance(8);
      \u0275\u0275property("@fadeIn", void 0);
      \u0275\u0275advance(8);
      \u0275\u0275property("@slideInFromRight", void 0);
    }
  }, dependencies: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    MatToolbarModule,
    MatToolbar,
    MatListModule,
    MatNavList,
    MatListItem,
    MatListSubheaderCssMatStyler,
    MatDivider,
    MatIconModule,
    MatButtonModule,
    MatIconButton,
    MatMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatBadgeModule,
    MatBadge,
    MatDividerModule
  ], styles: ['\n\n[_nghost-%COMP%] {\n  --primary: #4e54c8;\n  --primary-light: #8f94fb;\n  --primary-dark: #363795;\n  --accent: #4caf50;\n  --accent-light: #81c784;\n  --text-primary: #333;\n  --text-secondary: #666;\n  --background-light: #f5f7fa;\n  --card-bg: #ffffff;\n  --success: #00c853;\n  --warning: #ffd600;\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 16px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--primary-dark) 100%);\n  color: white;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n}\n.toolbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.app-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.typewriter[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-right: 3px solid rgba(255, 255, 255, 0.75);\n  white-space: nowrap;\n  margin: 0;\n  animation: _ngcontent-%COMP%_typing 3.5s steps(30, end), _ngcontent-%COMP%_blink-caret 0.75s step-end infinite;\n}\n@keyframes _ngcontent-%COMP%_typing {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n@keyframes _ngcontent-%COMP%_blink-caret {\n  from, to {\n    border-color: transparent;\n  }\n  50% {\n    border-color: rgba(255, 255, 255, 0.75);\n  }\n}\n.sidenav-container[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: var(--background-light);\n}\n.sidenav[_ngcontent-%COMP%] {\n  width: 260px;\n  background-color: var(--card-bg);\n  border-right: 1px solid var(--background-light);\n}\n.sidenav-header[_ngcontent-%COMP%] {\n  padding: 24px 16px;\n  background-color: var(--primary-dark);\n  color: white;\n}\n.logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.logo-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  height: 28px;\n  width: 28px;\n}\n.logo-text[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.content[_ngcontent-%COMP%] {\n  background-color: var(--background-light);\n}\n.content-wrapper[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nmat-nav-list[_ngcontent-%COMP%] {\n  padding-top: 16px;\n}\nmat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 48px;\n  margin: 8px 12px;\n  border-radius: 8px;\n  color: var(--text-secondary);\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\nmat-nav-list[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: var(--primary-light);\n  color: var(--primary);\n  transform: translateX(5px);\n  position: relative;\n}\nmat-nav-list[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 4px;\n  background: var(--accent);\n  border-radius: 0 4px 4px 0;\n}\nmat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: var(--background-light);\n  transform: translateX(5px);\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  color: var(--text-secondary);\n  transition: transform 0.3s ease, color 0.3s ease;\n  font-size: 20px;\n  width: 20px;\n  text-align: center;\n}\n.nav-item.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.nav-item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  color: var(--primary-light);\n}\n.toolbar-right[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: white;\n}\n@media (max-width: 768px) {\n  .sidenav[_ngcontent-%COMP%] {\n    width: 240px;\n  }\n  .content-wrapper[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n.nav-section[_ngcontent-%COMP%] {\n  padding: 8px 0;\n  transition: opacity 0.5s ease;\n}\nh3[matSubheader][_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 16px 24px 8px;\n  margin: 0;\n}\nmat-divider[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  background-color: var(--background-light);\n}\n.mat-badge-content[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-weight: 500;\n  background-color: var(--accent) !important;\n}\n  .custom-menu {\n  background-color: white;\n}\n  .custom-menu .mat-menu-item:hover {\n  background-color: var(--background-light);\n}\n  .custom-menu .mat-menu-item i {\n  color: var(--primary);\n  margin-right: 8px;\n}\n.nav-item.active[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--accent);\n  box-shadow: 0 0 8px var(--accent);\n  animation: _ngcontent-%COMP%_pulse 1.5s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 10px rgba(76, 175, 80, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);\n  }\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */'], data: { animation: [
    trigger("slideInOut", [
      state("in", style({
        transform: "translateX(0)",
        opacity: 1
      })),
      state("out", style({
        transform: "translateX(-100%)",
        opacity: 0
      })),
      transition("in => out", animate("300ms ease-out")),
      transition("out => in", animate("300ms ease-in"))
    ]),
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("400ms ease-in", style({ opacity: 1 }))
      ])
    ]),
    trigger("slideInFromRight", [
      transition(":enter", [
        style({ transform: "translateX(50px)", opacity: 0 }),
        animate("400ms ease-out", style({ transform: "translateX(0)", opacity: 1 }))
      ])
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src/app/admin/components/admin-dashboard/admin-dashboard.component.ts", lineNumber: 59 });
})();

// src/app/shared/components/header/header.component.ts
var _c08 = (a0) => ({ "pulse": a0 });
var _c13 = (a0) => ({ "open": a0 });
function HeaderComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 22);
  }
  if (rf & 2) {
    \u0275\u0275property("@underline", void 0);
  }
}
function HeaderComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 22);
  }
  if (rf & 2) {
    \u0275\u0275property("@underline", void 0);
  }
}
function HeaderComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 22);
  }
  if (rf & 2) {
    \u0275\u0275property("@underline", void 0);
  }
}
function HeaderComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 22);
  }
  if (rf & 2) {
    \u0275\u0275property("@underline", void 0);
  }
}
function HeaderComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "a", 25);
    \u0275\u0275listener("click", function HeaderComponent_div_40_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMobileMenu());
    });
    \u0275\u0275text(3, "Features");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 26);
    \u0275\u0275listener("click", function HeaderComponent_div_40_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMobileMenu());
    });
    \u0275\u0275text(5, "Pricing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 27);
    \u0275\u0275listener("click", function HeaderComponent_div_40_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMobileMenu());
    });
    \u0275\u0275text(7, "About Us");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 28);
    \u0275\u0275listener("click", function HeaderComponent_div_40_Template_a_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMobileMenu());
    });
    \u0275\u0275text(9, "Blog");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 29)(11, "button", 30);
    \u0275\u0275listener("click", function HeaderComponent_div_40_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMobileMenu());
    });
    \u0275\u0275text(12, "Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 31);
    \u0275\u0275listener("click", function HeaderComponent_div_40_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMobileMenu());
    });
    \u0275\u0275text(14, "Get Started");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c13, ctx_r1.mobileMenuOpen))("@fadeInDown", void 0);
  }
}
var HeaderComponent = class _HeaderComponent {
  loginState = "normal";
  signupState = "normal";
  logoPulsing = false;
  mobileMenuOpen = false;
  activeLink = "";
  constructor() {
    setTimeout(() => {
      this.logoPulsing = true;
      setTimeout(() => {
        this.logoPulsing = false;
      }, 4500);
    }, 3e3);
  }
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (this.mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], decls: 41, vars: 14, consts: [[1, "header"], [1, "logo-container"], ["routerLink", "/", 1, "logo", 3, "ngClass"], [1, "logo-icon"], ["width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M12 16V12", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], ["d", "M12 8H12.01", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], [1, "logo-text"], [1, "logo-subtitle"], [1, "nav-links"], ["routerLink", "/features", 1, "nav-link", 3, "mouseenter", "mouseleave"], ["class", "underline", 4, "ngIf"], ["routerLink", "/pricing", 1, "nav-link", 3, "mouseenter", "mouseleave"], ["routerLink", "/about", 1, "nav-link", 3, "mouseenter", "mouseleave"], ["routerLink", "/blog", 1, "nav-link", 3, "mouseenter", "mouseleave"], [1, "nav-buttons"], ["mat-button", "", "routerLink", "/auth/login", 1, "login-btn", 3, "mouseenter", "mouseleave"], ["mat-raised-button", "", "routerLink", "/auth/signup", 1, "signup-btn", 3, "mouseenter", "mouseleave"], ["aria-label", "Menu", 1, "mobile-menu-btn", 3, "click"], [1, "menu-icon", 3, "ngClass"], ["class", "mobile-menu", 3, "ngClass", 4, "ngIf"], [1, "underline"], [1, "mobile-menu", 3, "ngClass"], [1, "mobile-menu-content"], ["routerLink", "/features", 1, "mobile-nav-link", 3, "click"], ["routerLink", "/pricing", 1, "mobile-nav-link", 3, "click"], ["routerLink", "/about", 1, "mobile-nav-link", 3, "click"], ["routerLink", "/blog", 1, "mobile-nav-link", 3, "click"], [1, "mobile-menu-buttons"], ["mat-button", "", "routerLink", "/auth/login", 1, "mobile-login-btn", 3, "click"], ["mat-raised-button", "", "routerLink", "/auth/signup", 1, "mobile-signup-btn", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "mat-toolbar", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5)(6, "path", 6)(7, "path", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "div", 8)(9, "h1");
      \u0275\u0275text(10, "Employbridge AI");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 9);
      \u0275\u0275text(12, "by TechSolutions");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "div", 10)(14, "a", 11);
      \u0275\u0275listener("mouseenter", function HeaderComponent_Template_a_mouseenter_14_listener() {
        return ctx.activeLink = "features";
      })("mouseleave", function HeaderComponent_Template_a_mouseleave_14_listener() {
        return ctx.activeLink = "";
      });
      \u0275\u0275elementStart(15, "span");
      \u0275\u0275text(16, "Features");
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, HeaderComponent_div_17_Template, 1, 1, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "a", 13);
      \u0275\u0275listener("mouseenter", function HeaderComponent_Template_a_mouseenter_18_listener() {
        return ctx.activeLink = "pricing";
      })("mouseleave", function HeaderComponent_Template_a_mouseleave_18_listener() {
        return ctx.activeLink = "";
      });
      \u0275\u0275elementStart(19, "span");
      \u0275\u0275text(20, "Pricing");
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, HeaderComponent_div_21_Template, 1, 1, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "a", 14);
      \u0275\u0275listener("mouseenter", function HeaderComponent_Template_a_mouseenter_22_listener() {
        return ctx.activeLink = "about";
      })("mouseleave", function HeaderComponent_Template_a_mouseleave_22_listener() {
        return ctx.activeLink = "";
      });
      \u0275\u0275elementStart(23, "span");
      \u0275\u0275text(24, "About Us");
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, HeaderComponent_div_25_Template, 1, 1, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "a", 15);
      \u0275\u0275listener("mouseenter", function HeaderComponent_Template_a_mouseenter_26_listener() {
        return ctx.activeLink = "blog";
      })("mouseleave", function HeaderComponent_Template_a_mouseleave_26_listener() {
        return ctx.activeLink = "";
      });
      \u0275\u0275elementStart(27, "span");
      \u0275\u0275text(28, "Blog");
      \u0275\u0275elementEnd();
      \u0275\u0275template(29, HeaderComponent_div_29_Template, 1, 1, "div", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 16)(31, "button", 17);
      \u0275\u0275listener("mouseenter", function HeaderComponent_Template_button_mouseenter_31_listener() {
        ctx.loginState = "hovered";
        return ctx.activeLink = "";
      })("mouseleave", function HeaderComponent_Template_button_mouseleave_31_listener() {
        return ctx.loginState = "normal";
      });
      \u0275\u0275text(32, " Login ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "button", 18);
      \u0275\u0275listener("mouseenter", function HeaderComponent_Template_button_mouseenter_33_listener() {
        ctx.signupState = "hovered";
        return ctx.activeLink = "";
      })("mouseleave", function HeaderComponent_Template_button_mouseleave_33_listener() {
        return ctx.signupState = "normal";
      });
      \u0275\u0275text(34, " Get Started ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "button", 19);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_35_listener() {
        return ctx.toggleMobileMenu();
      });
      \u0275\u0275elementStart(36, "div", 20);
      \u0275\u0275element(37, "span")(38, "span")(39, "span");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(40, HeaderComponent_div_40_Template, 15, 4, "div", 21);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("@fadeInDown", void 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c08, ctx.logoPulsing));
      \u0275\u0275advance(15);
      \u0275\u0275property("ngIf", ctx.activeLink === "features");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.activeLink === "pricing");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.activeLink === "about");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.activeLink === "blog");
      \u0275\u0275advance(2);
      \u0275\u0275property("@buttonHover", ctx.loginState);
      \u0275\u0275advance(2);
      \u0275\u0275property("@buttonHover", ctx.signupState);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c13, ctx.mobileMenuOpen));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.mobileMenuOpen);
    }
  }, dependencies: [RouterModule, RouterLink, MatButtonModule, MatButton, MatToolbarModule, MatToolbar, NgClass, NgIf], styles: ["\n\n[_nghost-%COMP%] {\n  --primary: #2563eb;\n  --primary-light: #3b82f6;\n  --primary-dark: #1d4ed8;\n  --accent: #ec4899;\n  --accent-light: #f472b6;\n  --text-light: #ffffff;\n  --text-dark: #1f2937;\n  --gray-light: #f3f4f6;\n  --gray-dark: #6b7280;\n  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n  --shadow-accent: 0 0 0 3px rgba(236, 72, 153, 0.3);\n  --transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 5%;\n  height: 80px;\n  background-color: rgba(255, 255, 255, 0.95);\n  color: var(--text-dark);\n  box-shadow: var(--shadow-sm);\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  transition: var(--transition);\n  height: 100%;\n  padding: 0 8px;\n  border-radius: 8px;\n}\n.logo[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.02);\n}\n.logo.pulse[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulse-animation 1.5s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse-animation {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.logo-icon[_ngcontent-%COMP%] {\n  color: var(--primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  background-color: rgba(37, 99, 235, 0.1);\n  border-radius: 50%;\n  padding: 8px;\n  transition: var(--transition);\n}\n.logo-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n.logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: var(--text-dark);\n  letter-spacing: -0.5px;\n}\n.logo-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--gray-dark);\n  font-weight: 500;\n  letter-spacing: 0.2px;\n}\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n  margin-left: 2rem;\n}\n@media (max-width: 1024px) {\n  .nav-links[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.nav-link[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n  text-decoration: none;\n  font-weight: 500;\n  position: relative;\n  padding: 8px 0;\n  opacity: 0.9;\n  transition: var(--transition);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n  opacity: 1;\n}\n.nav-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.underline[_ngcontent-%COMP%] {\n  height: 2px;\n  background-color: var(--accent);\n  margin-top: 2px;\n  border-radius: 2px;\n}\n.nav-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n@media (max-width: 1024px) {\n  .nav-buttons[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.login-btn[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n  border-radius: 8px;\n  padding: 0 1.25rem;\n  height: 40px;\n  font-weight: 500;\n  transition: var(--transition);\n}\n.login-btn[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n  background-color: rgba(0, 0, 0, 0.02);\n}\n.signup-btn[_ngcontent-%COMP%] {\n  background-color: var(--primary);\n  color: white;\n  border-radius: 8px;\n  padding: 0 1.5rem;\n  height: 40px;\n  font-weight: 500;\n  transition: var(--transition);\n  letter-spacing: 0.2px;\n}\n.signup-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-dark);\n  color: white;\n}\n.mobile-menu-btn[_ngcontent-%COMP%] {\n  display: none;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 8px;\n  z-index: 60;\n  color: var(--text-dark);\n}\n@media (max-width: 1024px) {\n  .mobile-menu-btn[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n}\n.menu-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 18px;\n  position: relative;\n  transform: rotate(0deg);\n  transition: 0.3s ease-in-out;\n}\n.menu-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  height: 2px;\n  width: 100%;\n  background: currentColor;\n  border-radius: 2px;\n  opacity: 1;\n  left: 0;\n  transform: rotate(0deg);\n  transition: 0.2s ease-in-out;\n}\n.menu-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  top: 0px;\n  width: 100%;\n}\n.menu-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  top: 8px;\n  width: 80%;\n}\n.menu-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  top: 16px;\n  width: 60%;\n}\n.menu-icon.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  top: 8px;\n  transform: rotate(45deg);\n  width: 100%;\n}\n.menu-icon.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 0;\n}\n.menu-icon.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  top: 8px;\n  transform: rotate(-45deg);\n  width: 100%;\n}\n.mobile-menu[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 80px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.98);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  z-index: 40;\n  overflow-y: auto;\n  transform: translateX(100%);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  flex-direction: column;\n  padding: 1rem 5% 2rem;\n  border-top: 1px solid rgba(0, 0, 0, 0.05);\n}\n.mobile-menu.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.mobile-menu-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding-top: 1rem;\n}\n.mobile-nav-link[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n  text-decoration: none;\n  font-size: 1.1rem;\n  padding: 1rem 0.75rem;\n  border-radius: 8px;\n  transition: var(--transition);\n  font-weight: 500;\n}\n.mobile-nav-link[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.03);\n  color: var(--primary);\n}\n.mobile-menu-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid rgba(0, 0, 0, 0.05);\n}\n.mobile-login-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  color: var(--text-dark);\n  font-weight: 500;\n  height: 48px;\n}\n.mobile-signup-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: var(--primary);\n  color: white;\n  font-weight: 500;\n  height: 48px;\n}\n.mobile-signup-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-dark);\n}\n/*# sourceMappingURL=header.component.css.map */"], data: { animation: [
    trigger("fadeInDown", [
      transition(":enter", [
        style({ transform: "translateY(-20px)", opacity: 0 }),
        animate("0.4s cubic-bezier(0.16, 1, 0.3, 1)", style({ transform: "translateY(0)", opacity: 1 }))
      ])
    ]),
    trigger("buttonHover", [
      state("normal", style({
        transform: "scale(1)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
      })),
      state("hovered", style({
        transform: "scale(1.05)",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)"
      })),
      transition("normal <=> hovered", animate("0.2s cubic-bezier(0.4, 0, 0.2, 1)"))
    ]),
    trigger("underline", [
      state("void", style({ width: 0 })),
      state("*", style({ width: "100%" })),
      transition("* <=> *", animate("0.3s ease"))
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/shared/components/header/header.component.ts", lineNumber: 442 });
})();

// src/app/shared/components/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 70, vars: 1, consts: [[1, "footer"], [1, "footer-content"], [1, "footer-main"], [1, "footer-brand"], [1, "footer-logo"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 17L12 11", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["cx", "12", "cy", "8", "r", "1", "fill", "currentColor"], [1, "footer-tagline"], [1, "footer-nav-groups"], [1, "footer-nav-group"], ["routerLink", "/about"], ["routerLink", "/careers"], ["routerLink", "/blog"], ["routerLink", "/features"], ["routerLink", "/pricing"], ["routerLink", "/testimonials"], ["routerLink", "/help"], ["routerLink", "/api"], ["routerLink", "/community"], ["routerLink", "/privacy"], ["routerLink", "/terms"], ["routerLink", "/cookies"], [1, "footer-bottom"], [1, "social-links"], ["href", "https://twitter.com", "target", "_blank", "aria-label", "Twitter"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"], ["href", "https://linkedin.com", "target", "_blank", "aria-label", "LinkedIn"], ["d", "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"], ["x", "2", "y", "9", "width", "4", "height", "12"], ["cx", "4", "cy", "4", "r", "2"], ["href", "https://facebook.com", "target", "_blank", "aria-label", "Facebook"], ["d", "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"], ["href", "https://instagram.com", "target", "_blank", "aria-label", "Instagram"], ["x", "2", "y", "2", "width", "20", "height", "20", "rx", "5", "ry", "5"], ["d", "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"], ["x1", "17.5", "y1", "6.5", "x2", "17.51", "y2", "6.5"], [1, "copyright"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "path", 6)(7, "path", 7)(8, "circle", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "span");
      \u0275\u0275text(10, "Employbridge AI");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "p", 9);
      \u0275\u0275text(12, "Connecting talent with opportunity through AI");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 10)(14, "div", 11)(15, "h4");
      \u0275\u0275text(16, "Company");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "a", 12);
      \u0275\u0275text(18, "About Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "a", 13);
      \u0275\u0275text(20, "Careers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "a", 14);
      \u0275\u0275text(22, "Blog");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 11)(24, "h4");
      \u0275\u0275text(25, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "a", 15);
      \u0275\u0275text(27, "Features");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "a", 16);
      \u0275\u0275text(29, "Pricing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "a", 17);
      \u0275\u0275text(31, "Testimonials");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 11)(33, "h4");
      \u0275\u0275text(34, "Resources");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "a", 18);
      \u0275\u0275text(36, "Help Center");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "a", 19);
      \u0275\u0275text(38, "API Docs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "a", 20);
      \u0275\u0275text(40, "Community");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 11)(42, "h4");
      \u0275\u0275text(43, "Legal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "a", 21);
      \u0275\u0275text(45, "Privacy Policy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "a", 22);
      \u0275\u0275text(47, "Terms of Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "a", 23);
      \u0275\u0275text(49, "Cookie Policy");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(50, "div", 24)(51, "div", 25)(52, "a", 26);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(53, "svg", 27);
      \u0275\u0275element(54, "path", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(55, "a", 29);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(56, "svg", 27);
      \u0275\u0275element(57, "path", 30)(58, "rect", 31)(59, "circle", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(60, "a", 33);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(61, "svg", 27);
      \u0275\u0275element(62, "path", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(63, "a", 35);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(64, "svg", 27);
      \u0275\u0275element(65, "rect", 36)(66, "path", 37)(67, "line", 38);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(68, "div", 39);
      \u0275\u0275text(69, " \xA9 2024 Employbridge AI. All rights reserved. ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("@fadeInUp", void 0);
    }
  }, dependencies: [RouterModule, RouterLink, MatToolbarModule], styles: ['\n\n[_nghost-%COMP%] {\n  --primary: #4e54c8;\n  --primary-light: #8f94fb;\n  --primary-dark: #363795;\n  --accent: #fc466b;\n  --text-dark: #333;\n  --text-medium: #666;\n  --text-light: #999;\n  --footer-bg: #f8f9fa;\n  --footer-border: #eaeaea;\n  --footer-link: #666;\n  --footer-link-hover: #4e54c8;\n}\n.footer[_ngcontent-%COMP%] {\n  background-color: var(--footer-bg);\n  color: var(--text-medium);\n  border-top: 1px solid var(--footer-border);\n  padding: 3rem 2rem 1.5rem;\n  width: 100%;\n  position: relative;\n  z-index: 10;\n}\n.footer-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.footer-main[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 3rem;\n  margin-bottom: 3rem;\n}\n@media (max-width: 768px) {\n  .footer-main[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n}\n.footer-brand[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.footer-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: var(--primary);\n}\n.footer-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.footer-tagline[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--text-light);\n  max-width: 250px;\n  line-height: 1.5;\n  margin: 0;\n}\n.footer-nav-groups[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 2rem;\n}\n@media (max-width: 992px) {\n  .footer-nav-groups[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 576px) {\n  .footer-nav-groups[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n}\n.footer-nav-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.footer-nav-group[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem;\n}\n.footer-nav-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--footer-link);\n  text-decoration: none;\n  font-size: 0.9rem;\n  transition: all 0.2s ease;\n  position: relative;\n  padding-left: 0;\n}\n.footer-nav-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--footer-link-hover);\n  padding-left: 5px;\n}\n.footer-nav-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: -10px;\n  top: 50%;\n  transform: translateY(-50%) scale(0);\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background-color: var(--accent);\n  opacity: 0;\n  transition: all 0.2s ease;\n}\n.footer-nav-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::before {\n  transform: translateY(-50%) scale(1);\n  opacity: 1;\n  left: -5px;\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 1.5rem;\n  border-top: 1px solid var(--footer-border);\n}\n@media (max-width: 576px) {\n  .footer-bottom[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: flex-start;\n  }\n}\n.social-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background-color: rgba(78, 84, 200, 0.1);\n  color: var(--primary);\n  transition: all 0.3s ease;\n}\n.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary);\n  color: white;\n  transform: translateY(-3px);\n  box-shadow: 0 5px 10px rgba(78, 84, 200, 0.2);\n}\n.copyright[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-light);\n}\n/*# sourceMappingURL=footer.component.css.map */'], data: { animation: [
    trigger("fadeInUp", [
      transition(":enter", [
        style({ transform: "translateY(20px)", opacity: 0 }),
        animate("0.5s ease-out", style({ transform: "translateY(0)", opacity: 1 }))
      ])
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/shared/components/footer/footer.component.ts", lineNumber: 276 });
})();

// src/app/landing/landing.component.ts
var _c09 = (a0) => ({ "blink": a0 });
function LandingComponent_mat_card_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 12);
    \u0275\u0275listener("mouseenter", function LandingComponent_mat_card_16_Template_mat_card_mouseenter_0_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.startSpinFeature(i_r2));
    })("@spin.done", function LandingComponent_mat_card_16_Template_mat_card_animation_spin_done_0_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.spinComplete(i_r2));
    });
    \u0275\u0275elementStart(1, "div", 13)(2, "div", 14)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "h2", 3);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 3);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r4 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("@spin", ctx_r2.featureSpinStates[i_r2]);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(i_r2 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r4.description);
  }
}
var LandingComponent = class _LandingComponent {
  typewriterText = "";
  cursorBlinking = true;
  fullText = "Revolutionizing the way job seekers and employers connect";
  typewriterInterval;
  typewriterCount = 0;
  features = [
    {
      title: "Smart Matching",
      description: "Our AI-powered platform analyzes skills, experience, and job requirements to create perfect matches between job seekers and employers."
    },
    {
      title: "Skill Development",
      description: "Get personalized recommendations for skill development based on your career goals and market demands."
    },
    {
      title: "Career Growth",
      description: "Access valuable insights and resources to help you advance in your career and achieve your professional goals."
    }
  ];
  featureSpinStates = ["initial", "initial", "initial"];
  getStartedState = "normal";
  loginState = "normal";
  ngOnInit() {
    this.startTypewriter();
  }
  startTypewriter() {
    let i = 0;
    this.typewriterCount = 0;
    const typeNextCharacter = () => {
      if (i < this.fullText.length) {
        this.typewriterText += this.fullText.charAt(i);
        i++;
        setTimeout(typeNextCharacter, 50);
      } else {
        setTimeout(() => {
          if (this.typewriterCount < 1) {
            this.typewriterText = "";
            i = 0;
            this.typewriterCount++;
            typeNextCharacter();
          } else {
            this.cursorBlinking = false;
            setTimeout(() => {
              this.cursorBlinking = true;
            }, 500);
          }
        }, 2e3);
      }
    };
    typeNextCharacter();
  }
  startSpinFeature(index) {
    this.featureSpinStates[index] = "spin";
  }
  spinComplete(index) {
    if (this.featureSpinStates[index] === "spin") {
      this.featureSpinStates[index] = "initial";
    }
  }
  static \u0275fac = function LandingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LandingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingComponent, selectors: [["app-landing"]], decls: 18, vars: 10, consts: [[1, "landing-content", 2, "background-color", "black", "color", "gold"], [1, "hero-section"], [1, "hero-content"], [2, "color", "gold"], [1, "subtitle", "typewriter", 2, "color", "gold"], [3, "innerHTML"], [1, "cursor", 2, "color", "gold", 3, "ngClass"], [1, "cta-buttons"], ["mat-raised-button", "", "routerLink", "/auth/signup", 1, "get-started-btn", 2, "background-color", "gold", "color", "black", 3, "mouseenter", "mouseleave"], ["mat-button", "", "routerLink", "/auth/login", 1, "login-btn", 2, "color", "gold", 3, "mouseenter", "mouseleave"], [1, "features-section"], ["class", "feature-card", "style", "background-color: black; color: gold; border: 1px solid gold;", 3, "mouseenter", 4, "ngFor", "ngForOf"], [1, "feature-card", 2, "background-color", "black", "color", "gold", "border", "1px solid gold", 3, "mouseenter"], [1, "feature-number-wrapper"], [1, "feature-number", 2, "background-color", "gold", "color", "black"]], template: function LandingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-header");
      \u0275\u0275elementStart(1, "main", 0)(2, "section", 1)(3, "div", 2)(4, "h1", 3);
      \u0275\u0275text(5, "Welcome to EmployBridge AI");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275element(7, "span", 5);
      \u0275\u0275elementStart(8, "span", 6);
      \u0275\u0275text(9, "|");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 7)(11, "button", 8);
      \u0275\u0275listener("mouseenter", function LandingComponent_Template_button_mouseenter_11_listener() {
        return ctx.getStartedState = "hovered";
      })("mouseleave", function LandingComponent_Template_button_mouseleave_11_listener() {
        return ctx.getStartedState = "normal";
      });
      \u0275\u0275text(12, " Get Started ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 9);
      \u0275\u0275listener("mouseenter", function LandingComponent_Template_button_mouseenter_13_listener() {
        return ctx.loginState = "hovered";
      })("mouseleave", function LandingComponent_Template_button_mouseleave_13_listener() {
        return ctx.loginState = "normal";
      });
      \u0275\u0275text(14, " Already have an account? ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "section", 10);
      \u0275\u0275template(16, LandingComponent_mat_card_16_Template, 9, 4, "mat-card", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(17, "app-footer");
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("@slideIn", void 0);
      \u0275\u0275advance(5);
      \u0275\u0275property("innerHTML", ctx.typewriterText, \u0275\u0275sanitizeHtml);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(8, _c09, ctx.cursorBlinking));
      \u0275\u0275advance(2);
      \u0275\u0275property("@fadeIn", void 0);
      \u0275\u0275advance();
      \u0275\u0275property("@buttonHover", ctx.getStartedState);
      \u0275\u0275advance(2);
      \u0275\u0275property("@buttonHover", ctx.loginState);
      \u0275\u0275advance(2);
      \u0275\u0275property("@fadeInSequentially", void 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.features);
    }
  }, dependencies: [
    RouterModule,
    RouterLink,
    MatButtonModule,
    MatButton,
    MatCardModule,
    MatCard,
    HeaderComponent,
    FooterComponent,
    NgForOf,
    NgClass
  ], styles: ['\n\n[_nghost-%COMP%] {\n  --primary: #4e54c8;\n  --primary-light: #8f94fb;\n  --primary-dark: #363795;\n  --accent: #fc466b;\n  --accent-transparent: rgba(252, 70, 107, 0.2);\n  --text-primary: #333;\n  --text-secondary: #666;\n  --background-light: #f5f7fa;\n  --card-bg: #ffffff;\n  --success: #00c853;\n  --warning: #ffd600;\n}\n.landing-content[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 128px);\n  padding: 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-light) 0%,\n      var(--primary-dark) 100%);\n  overflow-x: hidden;\n}\n.hero-section[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 6rem 2rem 4rem;\n  max-width: 800px;\n  margin: 0 auto;\n  position: relative;\n}\n.hero-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  margin-bottom: 1.5rem;\n  color: #fff;\n  font-weight: 700;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n}\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: #fff;\n  margin-bottom: 2.5rem;\n  min-height: 2em;\n  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);\n}\n.cursor[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 2px;\n  margin-left: 2px;\n  color: #fff;\n}\n.cursor.blink[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_blink 1s infinite;\n}\n@keyframes _ngcontent-%COMP%_blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n}\n.cta-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  justify-content: center;\n  margin-top: 3rem;\n}\n.get-started-btn[_ngcontent-%COMP%] {\n  background-color: var(--background-light);\n  color: black;\n  padding: 0.75rem 2rem;\n  font-size: 1.1rem;\n  font-weight: 600;\n  border-radius: 30px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  box-shadow: 0 4px 12px rgba(252, 70, 107, 0.4);\n  transition: all 0.3s ease;\n}\n.get-started-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--accent);\n  color: white;\n}\n.login-btn[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 500;\n  border: 2px solid rgba(255, 255, 255, 0.6);\n  border-radius: 30px;\n  padding: 0.75rem 1.5rem;\n  transition: all 0.3s ease;\n}\n.features-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: 2.5rem;\n  max-width: 1200px;\n  margin: 6rem auto 4rem;\n  padding: 0 2rem;\n}\n.feature-card[_ngcontent-%COMP%] {\n  padding: 3rem 2rem 2rem;\n  text-align: center;\n  border-radius: 16px;\n  background-color: var(--card-bg);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n  position: relative;\n  transition: transform 0.4s ease, box-shadow 0.4s ease;\n}\n.feature-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);\n}\n.feature-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 5px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary-light),\n      var(--accent));\n}\n.feature-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--primary-dark);\n  margin: 2.5rem 0 1.5rem;\n  font-weight: 600;\n  font-size: 1.5rem;\n}\n.feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  line-height: 1.7;\n  font-size: 1.05rem;\n}\n.feature-number-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -20px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 20;\n}\n.feature-number[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--accent) 100%);\n  color: white;\n  font-size: 1.5rem;\n  font-weight: 700;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  position: relative;\n  z-index: 10;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.feature-number[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);\n}\n.feature-number[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  background: transparent;\n  border: 2px solid var(--primary);\n  z-index: 9;\n  opacity: 0.3;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n.feature-card[_ngcontent-%COMP%]:nth-child(1)   .feature-number[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4e54c8 0%,\n      #8f94fb 100%);\n}\n.feature-card[_ngcontent-%COMP%]:nth-child(2)   .feature-number[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fc466b 0%,\n      #ff9a9e 100%);\n}\n.feature-card[_ngcontent-%COMP%]:nth-child(3)   .feature-number[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4caf50 0%,\n      #81c784 100%);\n}\n.feature-card[_ngcontent-%COMP%]:nth-child(1)   .feature-number[_ngcontent-%COMP%]::after {\n  border-color: #4e54c8;\n}\n.feature-card[_ngcontent-%COMP%]:nth-child(2)   .feature-number[_ngcontent-%COMP%]::after {\n  border-color: #fc466b;\n}\n.feature-card[_ngcontent-%COMP%]:nth-child(3)   .feature-number[_ngcontent-%COMP%]::after {\n  border-color: #4caf50;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    transform: scale(0.95);\n    opacity: 0.3;\n  }\n  50% {\n    transform: scale(1.05);\n    opacity: 0.1;\n  }\n  100% {\n    transform: scale(0.95);\n    opacity: 0.3;\n  }\n}\n@media (max-width: 768px) {\n  .hero-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .subtitle[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .features-section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .cta-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    width: 100%;\n    max-width: 300px;\n    margin: 2rem auto 0;\n  }\n  .get-started-btn[_ngcontent-%COMP%], \n   .login-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=landing.component.css.map */'], data: { animation: [
    trigger("slideIn", [
      transition("void => *", [
        style({ transform: "translateY(50px)", opacity: 0 }),
        animate("0.6s ease-out", style({ transform: "translateY(0)", opacity: 1 }))
      ])
    ]),
    trigger("fadeIn", [
      transition("void => *", [
        style({ opacity: 0 }),
        animate("0.8s ease-out", style({ opacity: 1 }))
      ])
    ]),
    trigger("fadeInSequentially", [
      transition("void => *", [
        query(".feature-card", [
          style({ opacity: 0, transform: "translateY(50px)" }),
          stagger(200, [
            animate("0.6s ease-out", style({ opacity: 1, transform: "translateY(0)" }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger("spin", [
      transition("* => spin", [
        animate("0.7s ease-in-out", style({ transform: "rotate(360deg)" }))
      ]),
      transition("spin => *", [
        animate("0s", style({ transform: "rotate(0deg)" }))
      ])
    ]),
    trigger("buttonHover", [
      state("normal", style({
        transform: "scale(1)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
      })),
      state("hovered", style({
        transform: "scale(1.05)",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)"
      })),
      transition("normal <=> hovered", animate("0.2s ease-in-out"))
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingComponent, { className: "LandingComponent", filePath: "src/app/landing/landing.component.ts", lineNumber: 68 });
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    component: LandingComponent
  },
  {
    path: "auth",
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "signup",
        component: SignupComponent
      },
      {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "job-seeker",
    component: JobSeekerDashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: UserRole.JOB_SEEKER },
    children: [
      {
        path: "",
        redirectTo: "skills",
        pathMatch: "full"
      },
      {
        path: "skills",
        loadComponent: () => import("./chunk-3IEUSDZ3.js").then((m) => m.SkillManagementComponent)
      },
      {
        path: "job-search",
        loadComponent: () => import("./chunk-NGKN5OKA.js").then((m) => m.JobSearchComponent)
      },
      {
        path: "interviews",
        loadComponent: () => import("./chunk-7A4EWZCM.js").then((m) => m.InterviewsComponent)
      },
      {
        path: "career-paths",
        loadComponent: () => import("./chunk-3X5I3HSC.js").then((m) => m.CareerPathsComponent)
      },
      {
        path: "learning",
        loadComponent: () => import("./chunk-ZGOIR7EW.js").then((m) => m.LearningResourcesComponent)
      },
      {
        path: "profile",
        loadComponent: () => import("./chunk-B2FRIHII.js").then((m) => m.ProfileComponent)
      },
      {
        path: "matches",
        loadComponent: () => import("./chunk-67LLSM2I.js").then((m) => m.JobMatchesComponent)
      },
      {
        path: "applications",
        loadComponent: () => import("./chunk-5I4NYFYT.js").then((m) => m.ApplicationsComponent)
      },
      {
        path: "portfolio",
        loadComponent: () => import("./chunk-MEWND6RG.js").then((m) => m.PortfolioComponent)
      },
      {
        path: "cv",
        loadComponent: () => import("./chunk-MEW25ZD7.js").then((m) => m.ProfileManagerComponent)
      },
      {
        path: "chatbot",
        loadComponent: () => import("./chunk-LEM7XPYR.js").then((m) => m.ChatbotComponent)
      }
    ]
  },
  {
    path: "employer",
    component: EmployerDashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: UserRole.EMPLOYER },
    children: [
      {
        path: "",
        redirectTo: "listings",
        pathMatch: "full"
      },
      {
        path: "listings",
        loadComponent: () => import("./chunk-5CYJEQWK.js").then((m) => m.ActiveListingsComponent)
      },
      {
        path: "post-job",
        loadComponent: () => import("./chunk-DMCDNNQC.js").then((m) => m.PostJobComponent)
      },
      {
        path: "templates",
        loadComponent: () => import("./chunk-DCMDZL34.js").then((m) => m.JobTemplatesComponent)
      },
      {
        path: "candidates",
        loadComponent: () => import("./chunk-HHEGC3MS.js").then((m) => m.ViewCandidatesComponent)
      },
      {
        path: "search",
        loadComponent: () => import("./chunk-D2I2VJED.js").then((m) => m.AiSearchComponent)
      },
      {
        path: "interviews",
        loadComponent: () => import("./chunk-3PAMRFEV.js").then((m) => m.ManageInterviewsComponent)
      },
      {
        path: "analytics",
        loadComponent: () => import("./chunk-JH3IAZXF.js").then((m) => m.HiringAnalyticsComponent)
      },
      {
        path: "profile",
        loadComponent: () => import("./chunk-2ELVHHVC.js").then((m) => m.CompanyProfileComponent)
      }
    ]
  },
  {
    path: "admin",
    component: AdminDashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: UserRole.ADMIN },
    children: [
      {
        path: "",
        redirectTo: "users",
        pathMatch: "full"
      },
      {
        path: "users",
        loadComponent: () => import("./chunk-ISBPKSUE.js").then((m) => m.UserManagementComponent)
      },
      {
        path: "monitoring",
        loadComponent: () => import("./chunk-ACJ6SAJN.js").then((m) => m.SystemMonitoringComponent)
      },
      {
        path: "ai-models",
        loadComponent: () => import("./chunk-3TOOGFVY.js").then((m) => m.AIModelManagementComponent)
      },
      {
        path: "analytics",
        loadComponent: () => import("./chunk-WAQUISGR.js").then((m) => m.PlatformAnalyticsComponent)
      },
      {
        path: "accuracy-metrics",
        loadComponent: () => import("./chunk-FJ27ZMJ5.js").then((m) => m.AccuracyMetricsComponent)
      }
    ]
  },
  {
    path: "***",
    redirectTo: "",
    pathMatch: "full"
  }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient()
  ]
};

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  title = "employbridgeai";
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "app-container"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "router-outlet");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [CommonModule, RouterOutlet], styles: ["\n\n.app-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 24 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/animations/fesm2022/util-DIamNgWY.mjs:
  (**
   * @license Angular v19.2.5
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/animations/fesm2022/browser.mjs:
  (**
   * @license Angular v19.2.5
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/platform-browser/fesm2022/animations.mjs:
  (**
   * @license Angular v19.2.5
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
