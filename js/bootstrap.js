/*!
  * Bootstrap v4.5.2 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap={},t.jQuery,t.Popper)}(this,(function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;function r(t){var n=this,i=!1;return e(this).one(a.TRANSITION_END,(function(){i=!0})),setTimeout((function(){i||a.triggerTransitionEnd(n)}),t),this}var a={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var n=e(t).css("transition-duration"),i=e(t).css("transition-delay"),o=parseFloat(n),s=parseFloat(i);return o||s?(n=n.split(",")[0],i=i.split(",")[0],1e3*(parseFloat(n)+parseFloat(i))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){e(t).trigger("transitionend")},supportsTransitionEnd:function(){return Boolean("transitionend")},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],s=e[i],r=s&&a.isElement(s)?"element":null===(l=s)||"undefined"==typeof l?""+l:{}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(o).test(r))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+r+'" but expected type "'+o+'".')}var l},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){var e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?a.findShadowRoot(t.parentNode):null},jQueryDetection:function(){if("undefined"==typeof e)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=e.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};a.jQueryDetection(),e.fn.emulateTransitionEnd=r,e.event.special[a.TRANSITION_END]={bindType:"transitionend",delegateType:"transitionend",handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var l="alert",c=e.fn[l],h=function(){function t(t){this._element=t}var n=t.prototype;return n.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},n.dispose=function(){e.removeData(this._element,"bs.alert"),this._element=null},n._getRootElement=function(t){var n=a.getSelectorFromElement(t),i=!1;return n&&(i=document.querySelector(n)),i||(i=e(t).closest(".alert")[0]),i},n._triggerCloseEvent=function(t){var n=e.Event("close.bs.alert");return e(t).trigger(n),n},n._removeElement=function(t){var n=this;if(e(t).removeClass("show"),e(t).hasClass("fade")){var i=a.getTransitionDurationFromElement(t);e(t).one(a.TRANSITION_END,(function(e){return n._destroyElement(t,e)})).emulateTransitionEnd(i)}else this._destroyElement(t)},n._destroyElement=function(t){e(t).detach().trigger("closed.bs.alert").remove()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.alert");o||(o=new t(this),i.data("bs.alert",o)),"close"===n&&o[n](this)}))},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},o(t,null,[{key:"VERSION",get:function(){return"4.5.2"}}]),t}();e(document).on("click.bs.alert.data-api",'[data-dismiss="alert"]',h._handleDismiss(new h)),e.fn[l]=h._jQueryInterface,e.fn[l].Constructor=h,e.fn[l].noConflict=function(){return e.fn[l]=c,h._jQueryInterface};var u=e.fn.button,d=function(){function t(t){this._element=t}var n=t.prototype;return n.toggle=function(){var t=!0,n=!0,i=e(this._element).closest('[data-toggle="buttons"]')[0];if(i){var o=this._element.querySelector('input:not([type="hidden"])');if(o){if("radio"===o.type)if(o.checked&&this._element.classList.contains("active"))t=!1;else{var s=i.querySelector(".active");s&&e(s).removeClass("active")}t&&("checkbox"!==o.type&&"radio"!==o.type||(o.checked=!this._element.classList.contains("active")),e(o).trigger("change")),o.focus(),n=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(n&&this._element.setAttribute("aria-pressed",!this._element.classList.contains("active")),t&&e(this._element).toggleClass("active"))},n.dispose=function(){e.removeData(this._element,"bs.button"),this._element=null},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.button");i||(i=new t(this),e(this).data("bs.button",i)),"toggle"===n&&i[n]()}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.2"}}]),t}();e(document).on("click.bs.button.data-api",'[data-toggle^="button"]',(function(t){var n=t.target,i=n;if(e(n).hasClass("btn")||(n=e(n).closest(".btn")[0]),!n||n.hasAttribute("disabled")||n.classList.contains("disabled"))t.preventDefault();else{var o=n.querySelector('input:not([type="hidden"])');if(o&&(o.hasAttribute("disabled")||o.classList.contains("disabled")))return void t.preventDefault();("LABEL"!==i.tagName||o&&"checkbox"!==o.type)&&d._jQueryInterface.call(e(n),"toggle")}})).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',(function(t){var n=e(t.target).closest(".btn")[0];e(n).toggleClass("focus",/^focus(in)?$/.test(t.type))})),e(window).on("load.bs.button.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')),e=0,n=t.length;e<n;e++){var i=t[e],o=i.querySelector('input:not([type="hidden"])');o.checked||o.hasAttribute("checked")?i.classList.add("active"):i.classList.remove("active")}for(var s=0,r=(t=[].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length;s<r;s++){var a=t[s];"true"===a.getAttribute("aria-pressed")?a.classList.add("active"):a.classList.remove("active")}})),e.fn.button=d._jQueryInterface,e.fn.button.Constructor=d,e.fn.button.noConflict=function(){return e.fn.button=u,d._jQueryInterface};var f="carousel",g=".bs.carousel",m=e.fn[f],p={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},_={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},v={TOUCH:"touch",PEN:"pen"},b=function(){function t(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(".carousel-indicators"),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var n=t.prototype;return n.next=function(){this._isSliding||this._slide("next")},n.nextWhenVisible=function(){!document.hidden&&e(this._element).is(":visible")&&"hidden"!==e(this._element).css("visibility")&&this.next()},n.prev=function(){this._isSliding||this._slide("prev")},n.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(".carousel-item-next, .carousel-item-prev")&&(a.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},n.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},n.to=function(t){var n=this;this._activeElement=this._element.querySelector(".active.carousel-item");var i=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)e(this._element).one("slid.bs.carousel",(function(){return n.to(t)}));else{if(i===t)return this.pause(),void this.cycle();var o=t>i?"next":"prev";this._slide(o,this._items[t])}},n.dispose=function(){e(this._element).off(g),e.removeData(this._element,"bs.carousel"),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},n._getConfig=function(t){return t=s({},p,t),a.typeCheckConfig(f,t,_),t},n._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;this.touchDeltaX=0,e>0&&this.prev(),e<0&&this.next()}},n._addEventListeners=function(){var t=this;this._config.keyboard&&e(this._element).on("keydown.bs.carousel",(function(e){return t._keydown(e)})),"hover"===this._config.pause&&e(this._element).on("mouseenter.bs.carousel",(function(e){return t.pause(e)})).on("mouseleave.bs.carousel",(function(e){return t.cycle(e)})),this._config.touch&&this._addTouchEventListeners()},n._addTouchEventListeners=function(){var t=this;if(this._touchSupported){var n=function(e){t._pointerEvent&&v[e.originalEvent.pointerType.toUpperCase()]?t.touchStartX=e.originalEvent.clientX:t._pointerEvent||(t.touchStartX=e.originalEvent.touches[0].clientX)},i=function(e){t._pointerEvent&&v[e.originalEvent.pointerType.toUpperCase()]&&(t.touchDeltaX=e.originalEvent.clientX-t.touchStartX),t._handleSwipe(),"hover"===t._config.pause&&(t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout((function(e){return t.cycle(e)}),500+t._config.interval))};e(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel",(function(t){return t.preventDefault()})),this._pointerEvent?(e(this._element).on("pointerdown.bs.carousel",(function(t){return n(t)})),e(this._element).on("pointerup.bs.carousel",(function(t){return i(t)})),this._element.classList.add("pointer-event")):(e(this._element).on("touchstart.bs.carousel",(function(t){return n(t)})),e(this._element).on("touchmove.bs.carousel",(function(e){return function(e){e.originalEvent.touches&&e.originalEvent.touches.length>1?t.touchDeltaX=0:t.touchDeltaX=e.originalEvent.touches[0].clientX-t.touchStartX}(e)})),e(this._element).on("touchend.bs.carousel",(function(t){return i(t)})))}},n._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},n._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(".carousel-item")):[],this._items.indexOf(t)},n._getItemByDirection=function(t,e){var n="next"===t,i="prev"===t,o=this._getItemIndex(e),s=this._items.length-1;if((i&&0===o||n&&o===s)&&!this._config.wrap)return e;var r=(o+("prev"===t?-1:1))%this._items.length;return-1===r?this._items[this._items.length-1]:this._items[r]},n._triggerSlideEvent=function(t,n){var i=this._getItemIndex(t),o=this._getItemIndex(this._element.querySelector(".active.carousel-item")),s=e.Event("slide.bs.carousel",{relatedTarget:t,direction:n,from:o,to:i});return e(this._element).trigger(s),s},n._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var n=[].slice.call(this._indicatorsElement.querySelectorAll(".active"));e(n).removeClass("active");var i=this._indicatorsElement.children[this._getItemIndex(t)];i&&e(i).addClass("active")}},n._slide=function(t,n){var i,o,s,r=this,l=this._element.querySelector(".active.carousel-item"),c=this._getItemIndex(l),h=n||l&&this._getItemByDirection(t,l),u=this._getItemIndex(h),d=Boolean(this._interval);if("next"===t?(i="carousel-item-left",o="carousel-item-next",s="left"):(i="carousel-item-right",o="carousel-item-prev",s="right"),h&&e(h).hasClass("active"))this._isSliding=!1;else if(!this._triggerSlideEvent(h,s).isDefaultPrevented()&&l&&h){this._isSliding=!0,d&&this.pause(),this._setActiveIndicatorElement(h);var f=e.Event("slid.bs.carousel",{relatedTarget:h,direction:s,from:c,to:u});if(e(this._element).hasClass("slide")){e(h).addClass(o),a.reflow(h),e(l).addClass(i),e(h).addClass(i);var g=parseInt(h.getAttribute("data-interval"),10);g?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=g):this._config.interval=this._config.defaultInterval||this._config.interval;var m=a.getTransitionDurationFromElement(l);e(l).one(a.TRANSITION_END,(function(){e(h).removeClass(i+" "+o).addClass("active"),e(l).removeClass("active "+o+" "+i),r._isSliding=!1,setTimeout((function(){return e(r._element).trigger(f)}),0)})).emulateTransitionEnd(m)}else e(l).removeClass("active"),e(h).addClass("active"),this._isSliding=!1,e(this._element).trigger(f);d&&this.cycle()}},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.carousel"),o=s({},p,e(this).data());"object"==typeof n&&(o=s({},o,n));var r="string"==typeof n?n:o.slide;if(i||(i=new t(this,o),e(this).data("bs.carousel",i)),"number"==typeof n)i.to(n);else if("string"==typeof r){if("undefined"==typeof i[r])throw new TypeError('No method named "'+r+'"');i[r]()}else o.interval&&o.ride&&(i.pause(),i.cycle())}))},t._dataApiClickHandler=function(n){var i=a.getSelectorFromElement(this);if(i){var o=e(i)[0];if(o&&e(o).hasClass("carousel")){var r=s({},e(o).data(),e(this).data()),l=this.getAttribute("data-slide-to");l&&(r.interval=!1),t._jQueryInterface.call(e(o),r),l&&e(o).data("bs.carousel").to(l),n.preventDefault()}}},o(t,null,[{key:"VERSION",get:function(){return"4.5.2"}},{key:"Default",get:function(){return p}}]),t}();e(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",b._dataApiClickHandler),e(window).on("load.bs.carousel.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-ride="carousel"]')),n=0,i=t.length;n<i;n++){var o=e(t[n]);b._jQueryInterface.call(o,o.data())}})),e.fn[f]=b._jQueryInterface,e.fn[f].Constructor=b,e.fn[f].noConflict=function(){return e.fn[f]=m,b._jQueryInterface};var y="collapse",E=e.fn[y],w={toggle:!0,parent:""},T={toggle:"boolean",parent:"(string|element)"},C=function(){function t(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=[].slice.call(document.querySelectorAll('[data-toggle="collapse"]')),i=0,o=n.length;i<o;i++){var s=n[i],r=a.getSelectorFromElement(s),l=[].slice.call(document.querySelectorAll(r)).filter((function(e){return e===t}));null!==r&&l.length>0&&(this._selector=r,this._triggerArray.push(s))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var n=t.prototype;return n.toggle=function(){e(this._element).hasClass("show")?this.hide():this.show()},n.show=function(){var n,i,o=this;if(!this._isTransitioning&&!e(this._element).hasClass("show")&&(this._parent&&0===(n=[].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(t){return"string"==typeof o._config.parent?t.getAttribute("data-parent")===o._config.parent:t.classList.contains("collapse")}))).length&&(n=null),!(n&&(i=e(n).not(this._selector).data("bs.collapse"))&&i._isTransitioning))){var s=e.Event("show.bs.collapse");if(e(this._element).trigger(s),!s.isDefaultPrevented()){n&&(t._jQueryInterface.call(e(n).not(this._selector),"hide"),i||e(n).data("bs.collapse",null));var r=this._getDimension();e(this._element).removeClass("collapse").addClass("collapsing"),this._element.style[r]=0,this._triggerArray.length&&e(this._triggerArray).removeClass("collapsed").attr("aria-expanded",!0),this.setTransitioning(!0);var l="scroll"+(r[0].toUpperCase()+r.slice(1)),c=a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END,(function(){e(o._element).removeClass("collapsing").addClass("collapse show"),o._element.style[r]="",o.setTransitioning(!1),e(o._element).trigger("shown.bs.collapse")})).emulateTransitionEnd(c),this._element.style[r]=this._element[l]+"px"}}},n.hide=function(){var t=this;if(!this._isTransitioning&&e(this._element).hasClass("show")){var n=e.Event("hide.bs.collapse");if(e(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",a.reflow(this._element),e(this._element).addClass("collapsing").removeClass("collapse show");var o=this._triggerArray.length;if(o>0)for(var s=0;s<o;s++){var r=this._triggerArray[s],l=a.getSelectorFromElement(r);if(null!==l)e([].slice.call(document.querySelectorAll(l))).hasClass("show")||e(r).addClass("collapsed").attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[i]="";var c=a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END,(function(){t.setTransitioning(!1),e(t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")})).emulateTransitionEnd(c)}}},n.setTransitioning=function(t){this._isTransitioning=t},n.dispose=function(){e.removeData(this._element,"bs.collapse"),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},n._getConfig=function(t){return(t=s({},w,t)).toggle=Boolean(t.toggle),a.typeCheckConfig(y,t,T),t},n._getDimension=function(){return e(this._element).hasClass("width")?"width":"height"},n._getParent=function(){var n,i=this;a.isElement(this._config.parent)?(n=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(n=this._config.parent[0])):n=document.querySelector(this._config.parent);var o='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',s=[].slice.call(n.querySelectorAll(o));return e(s).each((function(e,n){i._addAriaAndCollapsedClass(t._getTargetFromElement(n),[n])})),n},n._addAriaAndCollapsedClass=function(t,n){var i=e(t).hasClass("show");n.length&&e(n).toggleClass("collapsed",!i).attr("aria-expanded",i)},t._getTargetFromElement=function(t){var e=a.getSelectorFromElement(t);return e?document.querySelector(e):null},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.collapse"),r=s({},w,i.data(),"object"==typeof n&&n?n:{});if(!o&&r.toggle&&"string"==typeof n&&/show|hide/.test(n)&&(r.toggle=!1),o||(o=new t(this,r),i.data("bs.collapse",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.2"}},{key:"Default",get:function(){return w}}]),t}();e(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',(function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=e(this),i=a.getSelectorFromElement(this),o=[].slice.call(document.querySelectorAll(i));e(o).each((function(){var t=e(this),i=t.data("bs.collapse")?"toggle":n.data();C._jQueryInterface.call(t,i)}))})),e.fn[y]=C._jQueryInterface,e.fn[y].Constructor=C,e.fn[y].noConflict=function(){return e.fn[y]=E,C._jQueryInterface};var S="dropdown",k=e.fn[S],D=new RegExp("38|40|27"),N={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},A={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},I=function(){function t(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var i=t.prototype;return i.toggle=function(){if(!this._element.disabled&&!e(this._element).hasClass("disabled")){var n=e(this._menu).hasClass("show");t._clearMenus(),n||this.show(!0)}},i.show=function(i){if(void 0===i&&(i=!1),!(this._element.disabled||e(this._element).hasClass("disabled")||e(this._menu).hasClass("show"))){var o={relatedTarget:this._element},s=e.Event("show.bs.dropdown",o),r=t._getParentFromElement(this._element);if(e(r).trigger(s),!s.isDefaultPrevented()){if(!this._inNavbar&&i){if("undefined"==typeof n)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var l=this._element;"parent"===this._config.reference?l=r:a.isElement(this._config.reference)&&(l=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(l=this._config.reference[0])),"scrollParent"!==this._config.boundary&&e(r).addClass("position-static"),this._popper=new n(l,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===e(r).closest(".navbar-nav").length&&e(document.body).children().on("mouseover",null,e.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),e(this._menu).toggleClass("show"),e(r).toggleClass("show").trigger(e.Event("shown.bs.dropdown",o))}}},i.hide=function(){if(!this._element.disabled&&!e(this._element).hasClass("disabled")&&e(this._menu).hasClass("show")){var n={relatedTarget:this._element},i=e.Event("hide.bs.dropdown",n),o=t._getParentFromElement(this._element);e(o).trigger(i),i.isDefaultPrevented()||(this._popper&&this._popper.destroy(),e(this._menu).toggleClass("show"),e(o).toggleClass("show").trigger(e.Event("hidden.bs.dropdown",n)))}},i.dispose=function(){e.removeData(this._element,"bs.dropdown"),e(this._element).off(".bs.dropdown"),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},i.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},i._addEventListeners=function(){var t=this;e(this._element).on("click.bs.dropdown",(function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}))},i._getConfig=function(t){return t=s({},this.constructor.Default,e(this._element).data(),t),a.typeCheckConfig(S,t,this.constructor.DefaultType),t},i._getMenuElement=function(){if(!this._menu){var e=t._getParentFromElement(this._element);e&&(this._menu=e.querySelector(".dropdown-menu"))}return this._menu},i._getPlacement=function(){var t=e(this._element.parentNode),n="bottom-start";return t.hasClass("dropup")?n=e(this._menu).hasClass("dropdown-menu-right")?"top-end":"top-start":t.hasClass("dropright")?n="right-start":t.hasClass("dropleft")?n="left-start":e(this._menu).hasClass("dropdown-menu-right")&&(n="bottom-end"),n},i._detectNavbar=function(){return e(this._element).closest(".navbar").length>0},i._getOffset=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=s({},e.offsets,t._config.offset(e.offsets,t._element)||{}),e}:e.offset=this._config.offset,e},i._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),s({},t,this._config.popperConfig)},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.dropdown");if(i||(i=new t(this,"object"==typeof n?n:null),e(this).data("bs.dropdown",i)),"string"==typeof n){if("undefined"==typeof i[n])throw new TypeError('No method named "'+n+'"');i[n]()}}))},t._clearMenus=function(n){if(!n||3!==n.which&&("keyup"!==n.type||9===n.which))for(var i=[].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')),o=0,s=i.length;o<s;o++){var r=t._getParentFromElement(i[o]),a=e(i[o]).data("bs.dropdown"),l={relatedTarget:i[o]};if(n&&"click"===n.type&&(l.clickEvent=n),a){var c=a._menu;if(e(r).hasClass("show")&&!(n&&("click"===n.type&&/input|textarea/i.test(n.target.tagName)||"keyup"===n.type&&9===n.which)&&e.contains(r,n.target))){var h=e.Event("hide.bs.dropdown",l);e(r).trigger(h),h.isDefaultPrevented()||("ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),i[o].setAttribute("aria-expanded","false"),a._popper&&a._popper.destroy(),e(c).removeClass("show"),e(r).removeClass("show").trigger(e.Event("hidden.bs.dropdown",l)))}}}},t._getParentFromElement=function(t){var e,n=a.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},t._dataApiKeydownHandler=function(n){if(!(/input|textarea/i.test(n.target.tagName)?32===n.which||27!==n.which&&(40!==n.which&&38!==n.which||e(n.target).closest(".dropdown-menu").length):!D.test(n.which))&&!this.disabled&&!e(this).hasClass("disabled")){var i=t._getParentFromElement(this),o=e(i).hasClass("show");if(o||27!==n.which){if(n.preventDefault(),n.stopPropagation(),!o||o&&(27===n.which||32===n.which))return 27===n.which&&e(i.querySelector('[data-toggle="dropdown"]')).trigger("focus"),void e(this).trigger("click");var s=[].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(t){return e(t).is(":visible")}));if(0!==s.length){var r=s.indexOf(n.target);38===n.which&&r>0&&r--,40===n.which&&r<s.length-1&&r++,r<0&&(r=0),s[r].focus()}}}},o(t,null,[{key:"VERSION",get:function(){return"4.5.2"}},{key:"Default",get:function(){return N}},{key:"DefaultType",get:function(){return A}}]),t}();e(document).on("keydown.bs.dropdown.data-api",'[data-toggle="dropdown"]',I._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api",".dropdown-menu",I._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api",I._clearMenus).on("click.bs.dropdown.data-api",'[data-toggle="dropdown"]',(function(t){t.preventDefault(),t.stopPropagation(),I._jQueryInterface.call(e(this),"toggle")})).on("click.bs.dropdown.data-api",".dropdown form",(function(t){t.stopPropagation()})),e.fn[S]=I._jQueryInterface,e.fn[S].Constructor=I,e.fn[S].noConflict=function(){return e.fn[S]=k,I._jQueryInterface};var O=e.fn.modal,j={backdrop:!0,keyboard:!0,focus:!0,show:!0},x={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},P=function(){function t(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(".modal-dialog"),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var n=t.prototype;return n.toggle=function(t){return this._isShown?this.hide():this.show(t)},n.show=function(t){var n=this;if(!this._isShown&&!this._isTransitioning){e(this._element).hasClass("fade")&&(this._isTransitioning=!0);var i=e.Event("show.bs.modal",{relatedTarget:t});e(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on("click.dismiss.bs.modal",'[data-dismiss="modal"]',(function(t){return n.hide(t)})),e(this._dialog).on("mousedown.dismiss.bs.modal",(function(){e(n._element).one("mouseup.dismiss.bs.modal",(function(t){e(t.target).is(n._element)&&(n._ignoreBackdropClick=!0)}))})),this._showBackdrop((function(){return n._showElement(t)})))}},n.hide=function(t){var n=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var i=e.Event("hide.bs.modal");if(e(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var o=e(this._element).hasClass("fade");if(o&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off("focusin.bs.modal"),e(this._element).removeClass("show"),e(this._element).off("click.dismiss.bs.modal"),e(this._dialog).off("mousedown.dismiss.bs.modal"),o){var s=a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END,(function(t){return n._hideModal(t)})).emulateTransitionEnd(s)}else this._hideModal()}}},n.dispose=function(){[window,this._element,this._dialog].forEach((function(t){return e(t).off(".bs.modal")})),e(document).off("focusin.bs.modal"),e.removeData(this._element,"bs.modal"),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},n.handleUpdate=function(){this._adjustDialog()},n._getConfig=function(t){return t=s({},j,t),a.typeCheckConfig("modal",t,x),t},n._triggerBackdropTransition=function(){var t=this;if("static"===this._config.backdrop){var n=e.Event("hidePrevented.bs.modal");if(e(this._element).trigger(n),n.defaultPrevented)return;var i=this._element.scrollHeight>document.documentElement.clientHeight;i||(this._element.style.overflowY="hidden"),this._element.classList.add("modal-static");var o=a.getTransitionDurationFromElement(this._dialog);e(this._element).off(a.TRANSITION_END),e(this._element).one(a.TRANSITION_END,(function(){t._element.classList.remove("modal-static"),i||e(t._element).one(a.TRANSITION_END,(function(){t._element.style.overflowY=""})).emulateTransitionEnd(t._element,o)})).emulateTransitionEnd(o),this._element.focus()}else this.hide()},n._showElement=function(t){var n=this,i=e(this._element).hasClass("fade"),o=this._dialog?this._dialog.querySelector(".modal-body"):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),e(this._dialog).hasClass("modal-dialog-scrollable")&&o?o.scrollTop=0:this._element.scrollTop=0,i&&a.reflow(this._element),e(this._element).addClass("show"),this._config.focus&&this._enforceFocus();var s=e.Event("shown.bs.modal",{relatedTarget:t}),r=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,e(n._element).trigger(s)};if(i){var l=a.getTransitionDurationFromElement(this._dialog);e(this._dialog).one(a.TRANSITION_END,r).emulateTransitionEnd(l)}else r()},n._enforceFocus=function(){var t=this;e(document).off("focusin.bs.modal").on("focusin.bs.modal",(function(n){document!==n.target&&t._element!==n.target&&0===e(t._element).has(n.target).length&&t._element.focus()}))},n._setEscapeEvent=function(){var t=this;this._isShown?e(this._element).on("keydown.dismiss.bs.modal",(function(e){t._config.keyboard&&27===e.which?(e.preventDefault(),t.hide()):t._config.keyboard||27!==e.which||t._triggerBackdropTransition()})):this._isShown||e(this._element).off("keydown.dismiss.bs.modal")},n._setResizeEvent=function(){var t=this;this._isShown?e(window).on("resize.bs.modal",(function(e){return t.handleUpdate(e)})):e(window).off("resize.bs.modal")},n._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._showBackdrop((function(){e(document.body).removeClass("modal-open"),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger("hidden.bs.modal")}))},n._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},n._showBackdrop=function(t){var n=this,i=e(this._element).hasClass("fade")?"fade":"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",i&&this._backdrop.classList.add(i),e(this._backdrop).appendTo(document.body),e(this._element).on("click.dismiss.bs.modal",(function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&n._triggerBackdropTransition()})),i&&a.reflow(this._backdrop),e(this._backdrop).addClass("show"),!t)return;if(!i)return void t();var o=a.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(a.TRANSITION_END,t).emulateTransitionEnd(o)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass("show");var s=function(){n._removeBackdrop(),t&&t()};if(e(this._element).hasClass("fade")){var r=a.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(a.TRANSITION_END,s).emulateTransitionEnd(r)}else s()}else t&&t()},n._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},n._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},n._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(t.left+t.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},n._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){var n=[].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),i=[].slice.call(document.querySelectorAll(".sticky-top"));e(n).each((function(n,i){var o=i.style.paddingRight,s=e(i).css("padding-right");e(i).data("padding-right",o).css("padding-right",parseFloat(s)+t._scrollbarWidth+"px")})),e(i).each((function(n,i){var o=i.style.marginRight,s=e(i).css("margin-right");e(i).data("margin-right",o).css("margin-right",parseFloat(s)-t._scrollbarWidth+"px")}));var o=document.body.style.paddingRight,s=e(document.body).css("padding-right");e(document.body).data("padding-right",o).css("padding-right",parseFloat(s)+this._scrollbarWidth+"px")}e(document.body).addClass("modal-open")},n._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));e(t).each((function(t,n){var i=e(n).data("padding-right");e(n).removeData("padding-right"),n.style.paddingRight=i||""}));var n=[].slice.call(document.querySelectorAll(".sticky-top"));e(n).each((function(t,n){var i=e(n).data("margin-right");"undefined"!=typeof i&&e(n).css("margin-right",i).removeData("margin-right")}));var i=e(document.body).data("padding-right");e(document.body).removeData("padding-right"),document.body.style.paddingRight=i||""},n._getScrollbarWidth=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},t._jQueryInterface=function(n,i){return this.each((function(){var o=e(this).data("bs.modal"),r=s({},j,e(this).data(),"object"==typeof n&&n?n:{});if(o||(o=new t(this,r),e(this).data("bs.modal",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n](i)}else r.show&&o.show(i)}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.2"}},{key:"Default",get:function(){return j}}]),t}();e(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',(function(t){var n,i=this,o=a.getSelectorFromElement(this);o&&(n=document.querySelector(o));var r=e(n).data("bs.modal")?"toggle":s({},e(n).data(),e(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var l=e(n).one("show.bs.modal",(function(t){t.isDefaultPrevented()||l.one("hidden.bs.modal",(function(){e(i).is(":visible")&&i.focus()}))}));P._jQueryInterface.call(e(n),r,this)})),e.fn.modal=P._jQueryInterface,e.fn.modal.Constructor=P,e.fn.modal.noConflict=function(){return e.fn.modal=O,P._jQueryInterface};var R=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],L={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},q=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,F=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function Q(t,e,n){if(0===t.length)return t;if(n&&"function"==typeof n)return n(t);for(var i=(new window.DOMParser).parseFromString(t,"text/html"),o=Object.keys(e),s=[].slice.call(i.body.querySelectorAll("*")),r=function(t,n){var i=s[t],r=i.nodeName.toLowerCase();if(-1===o.indexOf(i.nodeName.toLowerCase()))return i.parentNode.removeChild(i),"continue";var a=[].slice.call(i.attributes),l=[].concat(e["*"]||[],e[r]||[]);a.forEach((function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===R.indexOf(n)||Boolean(t.nodeValue.match(q)||t.nodeValue.match(F));for(var i=e.filter((function(t){return t instanceof RegExp})),o=0,s=i.length;o<s;o++)if(n.match(i[o]))return!0;return!1})(t,l)||i.removeAttribute(t.nodeName)}))},a=0,l=s.length;a<l;a++)r(a);return i.body.innerHTML}var B="tooltip",H=e.fn[B],U=new RegExp("(^|\\s)bs-tooltip\\S+","g"),M=["sanitize","whiteList","sanitizeFn"],W={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},V={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},z={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:L,popperConfig:null},K={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},X=function(){function t(t,e){if("undefined"==typeof n)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var i=t.prototype;return i.enable=function(){this._isEnabled=!0},i.disable=function(){this._isEnabled=!1},i.toggleEnabled=function(){this._isEnabled=!this._isEnabled},i.toggle=function(t){if(this._isEnabled)if(t){var n=this.constructor.DATA_KEY,i=e(t.currentTarget).data(n);i||(i=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(e(this.getTipElement()).hasClass("show"))return void this._leave(null,this);this._enter(null,this)}},i.dispose=function(){clearTimeout(this._timeout),e.removeData(this.element,this.constructor.DATA_KEY),e(this.element).off(this.constructor.EVENT_KEY),e(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&e(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},i.show=function(){var t=this;if("none"===e(this.element).css("display"))throw new Error("Please use show on visible elements");var i=e.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){e(this.element).trigger(i);var o=a.findShadowRoot(this.element),s=e.contains(null!==o?o:this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!s)return;var r=this.getTipElement(),l=a.getUID(this.constructor.NAME);r.setAttribute("id",l),this.element.setAttribute("aria-describedby",l),this.setContent(),this.config.animation&&e(r).addClass("fade");var c="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,h=this._getAttachment(c);this.addAttachmentClass(h);var u=this._getContainer();e(r).data(this.constructor.DATA_KEY,this),e.contains(this.element.ownerDocument.documentElement,this.tip)||e(r).appendTo(u),e(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,r,this._getPopperConfig(h)),e(r).addClass("show"),"ontouchstart"in document.documentElement&&e(document.body).children().on("mouseover",null,e.noop);var d=function(){t.config.animation&&t._fixTransition();var n=t._hoverState;t._hoverState=null,e(t.element).trigger(t.constructor.Event.SHOWN),"out"===n&&t._leave(null,t)};if(e(this.tip).hasClass("fade")){var f=a.getTransitionDurationFromElement(this.tip);e(this.tip).one(a.TRANSITION_END,d).emulateTransitionEnd(f)}else d()}},i.hide=function(t){var n=this,i=this.getTipElement(),o=e.Event(this.constructor.Event.HIDE),s=function(){"show"!==n._hoverState&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),e(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()};if(e(this.element).trigger(o),!o.isDefaultPrevented()){if(e(i).removeClass("show"),"ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,e(this.tip).hasClass("fade")){var r=a.getTransitionDurationFromElement(i);e(i).one(a.TRANSITION_END,s).emulateTransitionEnd(r)}else s();this._hoverState=""}},i.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},i.isWithContent=function(){return Boolean(this.getTitle())},i.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-tooltip-"+t)},i.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},i.setContent=function(){var t=this.getTipElement();this.setElementContent(e(t.querySelectorAll(".tooltip-inner")),this.getTitle()),e(t).removeClass("fade show")},i.setElementContent=function(t,n){"object"!=typeof n||!n.nodeType&&!n.jquery?this.config.html?(this.config.sanitize&&(n=Q(n,this.config.whiteList,this.config.sanitizeFn)),t.html(n)):t.text(n):this.config.html?e(n).parent().is(t)||t.empty().append(n):t.text(e(n).text())},i.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},i._getPopperConfig=function(t){var e=this;return s({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}},this.config.popperConfig)},i._getOffset=function(){var t=this,e={};return"function"==typeof this.config.offset?e.fn=function(e){return e.offsets=s({},e.offsets,t.config.offset(e.offsets,t.element)||{}),e}:e.offset=this.config.offset,e},i._getContainer=function(){return!1===this.config.container?document.body:a.isElement(this.config.container)?e(this.config.container):e(document).find(this.config.container)},i._getAttachment=function(t){return V[t.toUpperCase()]},i._setListeners=function(){var t=this;this.config.trigger.split(" ").forEach((function(n){if("click"===n)e(t.element).on(t.constructor.Event.CLICK,t.config.selector,(function(e){return t.toggle(e)}));else if("manual"!==n){var i="hover"===n?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,o="hover"===n?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;e(t.element).on(i,t.config.selector,(function(e){return t._enter(e)})).on(o,t.config.selector,(function(e){return t._leave(e)}))}})),this._hideModalHandler=function(){t.element&&t.hide()},e(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=s({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},i._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},i._enter=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusin"===t.type?"focus":"hover"]=!0),e(n.getTipElement()).hasClass("show")||"show"===n._hoverState?n._hoverState="show":(clearTimeout(n._timeout),n._hoverState="show",n.config.delay&&n.config.delay.show?n._timeout=setTimeout((function(){"show"===n._hoverState&&n.show()}),n.config.delay.show):n.show())},i._leave=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusout"===t.type?"focus":"hover"]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState="out",n.config.delay&&n.config.delay.hide?n._timeout=setTimeout((function(){"out"===n._hoverState&&n.hide()}),n.config.delay.hide):n.hide())},i._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},i._getConfig=function(t){var n=e(this.element).data();return Object.keys(n).forEach((function(t){-1!==M.indexOf(t)&&delete n[t]})),"number"==typeof(t=s({},this.constructor.Default,n,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),a.typeCheckConfig(B,t,this.constructor.DefaultType),t.sanitize&&(t.template=Q(t.template,t.whiteList,t.sanitizeFn)),t},i._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},i._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(U);null!==n&&n.length&&t.removeClass(n.join(""))},i._handlePopperPlacementChange=function(t){this.tip=t.instance.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},i._fixTransition=function(){var t=this.getTipElement(),n=this.config.animation;null===t.getAttribute("x-placement")&&(e(t).removeClass("fade"),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.tooltip"),o="object"==typeof n&&n;if((i||!/dispose|hide/.test(n))&&(i||(i=new t(this,o),e(this).data("bs.tooltip",i)),"string"==typeof n)){if("undefined"==typeof i[n])throw new TypeError('No method named "'+n+'"');i[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.2"}},{key:"Default",get:function(){return z}},{key:"NAME",get:function(){return B}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return K}},{key:"EVENT_KEY",get:function(){return".bs.tooltip"}},{key:"DefaultType",get:function(){return W}}]),t}();e.fn[B]=X._jQueryInterface,e.fn[B].Constructor=X,e.fn[B].noConflict=function(){return e.fn[B]=H,X._jQueryInterface};var Y="popover",$=e.fn[Y],J=new RegExp("(^|\\s)bs-popover\\S+","g"),G=s({},X.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Z=s({},X.DefaultType,{content:"(string|element|function)"}),tt={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"},et=function(t){var n,i;function s(){return t.apply(this,arguments)||this}i=t,(n=s).prototype=Object.create(i.prototype),n.prototype.constructor=n,n.__proto__=i;var r=s.prototype;return r.isWithContent=function(){return this.getTitle()||this._getContent()},r.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-popover-"+t)},r.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},r.setContent=function(){var t=e(this.getTipElement());this.setElementContent(t.find(".popover-header"),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(t.find(".popover-body"),n),t.removeClass("fade show")},r._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},r._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(J);null!==n&&n.length>0&&t.removeClass(n.join(""))},s._jQueryInterface=function(t){return this.each((function(){var n=e(this).data("bs.popover"),i="object"==typeof t?t:null;if((n||!/dispose|hide/.test(t))&&(n||(n=new s(this,i),e(this).data("bs.popover",n)),"string"==typeof t)){if("undefined"==typeof n[t])throw new TypeError('No method named "'+t+'"');n[t]()}}))},o(s,null,[{key:"VERSION",get:function(){return"4.5.2"}},{key:"Default",get:function(){return G}},{key:"NAME",get:function(){return Y}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return tt}},{key:"EVENT_KEY",get:function(){return".bs.popover"}},{key:"DefaultType",get:function(){return Z}}]),s}(X);e.fn[Y]=et._jQueryInterface,e.fn[Y].Constructor=et,e.fn[Y].noConflict=function(){return e.fn[Y]=$,et._jQueryInterface};var nt="scrollspy",it=e.fn[nt],ot={offset:10,method:"auto",target:""},st={offset:"number",method:"string",target:"(string|element)"},rt=function(){function t(t,n){var i=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(n),this._selector=this._config.target+" .nav-link,"+this._config.target+" .list-group-item,"+this._config.target+" .dropdown-item",this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,e(this._scrollElement).on("scroll.bs.scrollspy",(function(t){return i._process(t)})),this.refresh(),this._process()}var n=t.prototype;return n.refresh=function(){var t=this,n=this._scrollElement===this._scrollElement.window?"offset":"position",i="auto"===this._config.method?n:this._config.method,o="position"===i?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map((function(t){var n,s=a.getSelectorFromElement(t);if(s&&(n=document.querySelector(s)),n){var r=n.getBoundingClientRect();if(r.width||r.height)return[e(n)[i]().top+o,s]}return null})).filter((function(t){return t})).sort((function(t,e){return t[0]-e[0]})).forEach((function(e){t._offsets.push(e[0]),t._targets.push(e[1])}))},n.dispose=function(){e.removeData(this._element,"bs.scrollspy"),e(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},n._getConfig=function(t){if("string"!=typeof(t=s({},ot,"object"==typeof t&&t?t:{})).target&&a.isElement(t.target)){var n=e(t.target).attr("id");n||(n=a.getUID(nt),e(t.target).attr("id",n)),t.target="#"+n}return a.typeCheckConfig(nt,t,st),t},n._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},n._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},n._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},n._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},n._activate=function(t){this._activeTarget=t,this._clear();var n=this._selector.split(",").map((function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'})),i=e([].slice.call(document.querySelectorAll(n.join(","))));i.hasClass("dropdown-item")?(i.closest(".dropdown").find(".dropdown-toggle").addClass("active"),i.addClass("active")):(i.addClass("active"),i.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"),i.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")),e(this._scrollElement).trigger("activate.bs.scrollspy",{relatedTarget:t})},n._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter((function(t){return t.classList.contains("active")})).forEach((function(t){return t.classList.remove("active")}))},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.scrollspy");if(i||(i=new t(this,"object"==typeof n&&n),e(this).data("bs.scrollspy",i)),"string"==typeof n){if("undefined"==typeof i[n])throw new TypeError('No method named "'+n+'"');i[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.2"}},{key:"Default",get:function(){return ot}}]),t}();e(window).on("load.bs.scrollspy.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-spy="scroll"]')),n=t.length;n--;){var i=e(t[n]);rt._jQueryInterface.call(i,i.data())}})),e.fn[nt]=rt._jQueryInterface,e.fn[nt].Constructor=rt,e.fn[nt].noConflict=function(){return e.fn[nt]=it,rt._jQueryInterface};var at=e.fn.tab,lt=function(){function t(t){this._element=t}var n=t.prototype;return n.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&e(this._element).hasClass("active")||e(this._element).hasClass("disabled"))){var n,i,o=e(this._element).closest(".nav, .list-group")[0],s=a.getSelectorFromElement(this._element);if(o){var r="UL"===o.nodeName||"OL"===o.nodeName?"> li > .active":".active";i=(i=e.makeArray(e(o).find(r)))[i.length-1]}var l=e.Event("hide.bs.tab",{relatedTarget:this._element}),c=e.Event("show.bs.tab",{relatedTarget:i});if(i&&e(i).trigger(l),e(this._element).trigger(c),!c.isDefaultPrevented()&&!l.isDefaultPrevented()){s&&(n=document.querySelector(s)),this._activate(this._element,o);var h=function(){var n=e.Event("hidden.bs.tab",{relatedTarget:t._element}),o=e.Event("shown.bs.tab",{relatedTarget:i});e(i).trigger(n),e(t._element).trigger(o)};n?this._activate(n,n.parentNode,h):h()}}},n.dispose=function(){e.removeData(this._element,"bs.tab"),this._element=null},n._activate=function(t,n,i){var o=this,s=(!n||"UL"!==n.nodeName&&"OL"!==n.nodeName?e(n).children(".active"):e(n).find("> li > .active"))[0],r=i&&s&&e(s).hasClass("fade"),l=function(){return o._transitionComplete(t,s,i)};if(s&&r){var c=a.getTransitionDurationFromElement(s);e(s).removeClass("show").one(a.TRANSITION_END,l).emulateTransitionEnd(c)}else l()},n._transitionComplete=function(t,n,i){if(n){e(n).removeClass("active");var o=e(n.parentNode).find("> .dropdown-menu .active")[0];o&&e(o).removeClass("active"),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(e(t).addClass("active"),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),a.reflow(t),t.classList.contains("fade")&&t.classList.add("show"),t.parentNode&&e(t.parentNode).hasClass("dropdown-menu")){var s=e(t).closest(".dropdown")[0];if(s){var r=[].slice.call(s.querySelectorAll(".dropdown-toggle"));e(r).addClass("active")}t.setAttribute("aria-expanded",!0)}i&&i()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.tab");if(o||(o=new t(this),i.data("bs.tab",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.2"}}]),t}();e(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',(function(t){t.preventDefault(),lt._jQueryInterface.call(e(this),"show")})),e.fn.tab=lt._jQueryInterface,e.fn.tab.Constructor=lt,e.fn.tab.noConflict=function(){return e.fn.tab=at,lt._jQueryInterface};var ct=e.fn.toast,ht={animation:"boolean",autohide:"boolean",delay:"number"},ut={animation:!0,autohide:!0,delay:500},dt=function(){function t(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var n=t.prototype;return n.show=function(){var t=this,n=e.Event("show.bs.toast");if(e(this._element).trigger(n),!n.isDefaultPrevented()){this._clearTimeout(),this._config.animation&&this._element.classList.add("fade");var i=function(){t._element.classList.remove("showing"),t._element.classList.add("show"),e(t._element).trigger("shown.bs.toast"),t._config.autohide&&(t._timeout=setTimeout((function(){t.hide()}),t._config.delay))};if(this._element.classList.remove("hide"),a.reflow(this._element),this._element.classList.add("showing"),this._config.animation){var o=a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END,i).emulateTransitionEnd(o)}else i()}},n.hide=function(){if(this._element.classList.contains("show")){var t=e.Event("hide.bs.toast");e(this._element).trigger(t),t.isDefaultPrevented()||this._close()}},n.dispose=function(){this._clearTimeout(),this._element.classList.contains("show")&&this._element.classList.remove("show"),e(this._element).off("click.dismiss.bs.toast"),e.removeData(this._element,"bs.toast"),this._element=null,this._config=null},n._getConfig=function(t){return t=s({},ut,e(this._element).data(),"object"==typeof t&&t?t:{}),a.typeCheckConfig("toast",t,this.constructor.DefaultType),t},n._setListeners=function(){var t=this;e(this._element).on("click.dismiss.bs.toast",'[data-dismiss="toast"]',(function(){return t.hide()}))},n._close=function(){var t=this,n=function(){t._element.classList.add("hide"),e(t._element).trigger("hidden.bs.toast")};if(this._element.classList.remove("show"),this._config.animation){var i=a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END,n).emulateTransitionEnd(i)}else n()},n._clearTimeout=function(){clearTimeout(this._timeout),this._timeout=null},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.toast");if(o||(o=new t(this,"object"==typeof n&&n),i.data("bs.toast",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n](this)}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.2"}},{key:"DefaultType",get:function(){return ht}},{key:"Default",get:function(){return ut}}]),t}();e.fn.toast=dt._jQueryInterface,e.fn.toast.Constructor=dt,e.fn.toast.noConflict=function(){return e.fn.toast=ct,dt._jQueryInterface},t.Alert=h,t.Button=d,t.Carousel=b,t.Collapse=C,t.Dropdown=I,t.Modal=P,t.Popover=et,t.Scrollspy=rt,t.Tab=lt,t.Toast=dt,t.Tooltip=X,t.Util=a,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=bootstrap.min.js.map

/* Modernizr 2.8.3 (Custom Build) | MIT & BSD Zoom
* Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-flexboxlegacy-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-cssclasses-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
*/
; window.Modernizr = function (a, b, c) { function C(a) { j.cssText = a } function D(a, b) { return C(n.join(a + ";") + (b || "")) } function E(a, b) { return typeof a === b } function F(a, b) { return !! ~("" + a).indexOf(b) } function G(a, b) { for (var d in a) { var e = a[d]; if (!F(e, "-") && j[e] !== c) return b == "pfx" ? e : !0 } return !1 } function H(a, b, d) { for (var e in a) { var f = b[a[e]]; if (f !== c) return d === !1 ? a[e] : E(f, "function") ? f.bind(d || b) : f } return !1 } function I(a, b, c) { var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + p.join(d + " ") + d).split(" "); return E(b, "string") || E(b, "undefined") ? G(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), H(e, b, c)) } function J() { e.input = function (c) { for (var d = 0, e = c.length; d < e; d++) u[c[d]] = c[d] in k; return u.list && (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), u } ("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), e.inputtypes = function (a) { for (var d = 0, e, f, h, i = a.length; d < i; d++) k.setAttribute("type", f = a[d]), e = k.type !== "text", e && (k.value = l, k.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k), h = b.defaultView, e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0, g.removeChild(k)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = k.checkValidity && k.checkValidity() === !1 : e = k.value != l)), t[a[d]] = !!e; return t } ("search tel url email datetime date month week time datetime-local number range color".split(" ")) } var d = "2.8.3", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k = b.createElement("input"), l = ":)", m = {}.toString, n = " -webkit- -moz- -o- -ms- ".split(" "), o = "Webkit Moz O ms", p = o.split(" "), q = o.toLowerCase().split(" "), r = { svg: "http://www.w3.org/2000/svg" }, s = {}, t = {}, u = {}, v = [], w = v.slice, x, y = function (a, c, d, e) { var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body"); if (parseInt(d, 10)) while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j); return f = ["­", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i }, z = function () { function d(d, e) { e = e || b.createElement(a[d] || "div"), d = "on" + d; var f = d in e; return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = E(e[d], "function"), E(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f } var a = { select: "input", change: "input", submit: "form", reset: "form", error: "img", load: "img", abort: "img" }; return d } (), A = {}.hasOwnProperty, B; !E(A, "undefined") && !E(A.call, "undefined") ? B = function (a, b) { return A.call(a, b) } : B = function (a, b) { return b in a && E(a.constructor.prototype[b], "undefined") }, Function.prototype.bind || (Function.prototype.bind = function (b) { var c = this; if (typeof c != "function") throw new TypeError; var d = w.call(arguments, 1), e = function () { if (this instanceof e) { var a = function () { }; a.prototype = c.prototype; var f = new a, g = c.apply(f, d.concat(w.call(arguments))); return Object(g) === g ? g : f } return c.apply(b, d.concat(w.call(arguments))) }; return e }), s.flexbox = function () { return I("flexWrap") }, s.flexboxlegacy = function () { return I("boxDirection") }, s.canvas = function () { var a = b.createElement("canvas"); return !!a.getContext && !!a.getContext("2d") }, s.canvastext = function () { return !!e.canvas && !!E(b.createElement("canvas").getContext("2d").fillText, "function") }, s.webgl = function () { return !!a.WebGLRenderingContext }, s.touch = function () { var c; return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : y(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (a) { c = a.offsetTop === 9 }), c }, s.geolocation = function () { return "geolocation" in navigator }, s.postmessage = function () { return !!a.postMessage }, s.websqldatabase = function () { return !!a.openDatabase }, s.indexedDB = function () { return !!I("indexedDB", a) }, s.hashchange = function () { return z("hashchange", a) && (b.documentMode === c || b.documentMode > 7) }, s.history = function () { return !!a.history && !!history.pushState }, s.draganddrop = function () { var a = b.createElement("div"); return "draggable" in a || "ondragstart" in a && "ondrop" in a }, s.websockets = function () { return "WebSocket" in a || "MozWebSocket" in a }, s.rgba = function () { return C("background-color:rgba(150,255,150,.5)"), F(j.backgroundColor, "rgba") }, s.hsla = function () { return C("background-color:hsla(120,40%,100%,.5)"), F(j.backgroundColor, "rgba") || F(j.backgroundColor, "hsla") }, s.multiplebgs = function () { return C("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(j.background) }, s.backgroundsize = function () { return I("backgroundSize") }, s.borderimage = function () { return I("borderImage") }, s.borderradius = function () { return I("borderRadius") }, s.boxshadow = function () { return I("boxShadow") }, s.textshadow = function () { return b.createElement("div").style.textShadow === "" }, s.opacity = function () { return D("opacity:.55"), /^0.55$/.test(j.opacity) }, s.cssanimations = function () { return I("animationName") }, s.csscolumns = function () { return I("columnCount") }, s.cssgradients = function () { var a = "background-image:", b = "gradient(linear,left top,right bottom,from(#9f9),to(white));", c = "linear-gradient(left top,#9f9, white);"; return C((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, -a.length)), F(j.backgroundImage, "gradient") }, s.cssreflections = function () { return I("boxReflect") }, s.csstransforms = function () { return !!I("transform") }, s.csstransforms3d = function () { var a = !!I("perspective"); return a && "webkitPerspective" in g.style && y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (b, c) { a = b.offsetLeft === 9 && b.offsetHeight === 3 }), a }, s.csstransitions = function () { return I("transition") }, s.fontface = function () { var a; return y('@font-face {font-family:"font";src:url("https://")}', function (c, d) { var e = b.getElementById("smodernizr"), f = e.sheet || e.styleSheet, g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : ""; a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0 }), a }, s.generatedcontent = function () { var a; return y(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function (b) { a = b.offsetHeight >= 3 }), a }, s.video = function () { var a = b.createElement("video"), c = !1; try { if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "") } catch (d) { } return c }, s.audio = function () { var a = b.createElement("audio"), c = !1; try { if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "") } catch (d) { } return c }, s.localstorage = function () { try { return localStorage.setItem(h, h), localStorage.removeItem(h), !0 } catch (a) { return !1 } }, s.sessionstorage = function () { try { return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0 } catch (a) { return !1 } }, s.webworkers = function () { return !!a.Worker }, s.applicationcache = function () { return !!a.applicationCache }, s.svg = function () { return !!b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect }, s.inlinesvg = function () { var a = b.createElement("div"); return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == r.svg }, s.smil = function () { return !!b.createElementNS && /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate"))) }, s.svgclippaths = function () { return !!b.createElementNS && /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath"))) }; for (var K in s) B(s, K) && (x = K.toLowerCase(), e[x] = s[K](), v.push((e[x] ? "" : "no-") + x)); return e.input || J(), e.addTest = function (a, b) { if (typeof a == "object") for (var d in a) B(a, d) && e.addTest(d, a[d]); else { a = a.toLowerCase(); if (e[a] !== c) return e; b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b } return e }, C(""), i = k = null, function (a, b) { function l(a, b) { var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement; return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild) } function m() { var a = s.elements; return typeof a == "string" ? a.split(" ") : a } function n(a) { var b = j[a[h]]; return b || (b = {}, i++, a[h] = i, j[i] = b), b } function o(a, c, d) { c || (c = b); if (k) return c.createElement(a); d || (d = n(c)); var g; return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g } function p(a, c) { a || (a = b); if (k) return a.createDocumentFragment(); c = c || n(a); var d = c.frag.cloneNode(), e = 0, f = m(), g = f.length; for (; e < g; e++) d.createElement(f[e]); return d } function q(a, b) { b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) { return s.shivMethods ? o(c, a, b) : b.createElem(c) }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function (a) { return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")' }) + ");return n}")(s, b.frag) } function r(a) { a || (a = b); var c = n(a); return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a } var c = "3.7.0", d = a.html5 || {}, e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, g, h = "_html5shiv", i = 0, j = {}, k; (function () { try { var a = b.createElement("a"); a.innerHTML = "<xyz></xyz>", g = "hidden" in a, k = a.childNodes.length == 1 || function () { b.createElement("a"); var a = b.createDocumentFragment(); return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined" } () } catch (c) { g = !0, k = !0 } })(); var s = { elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video", version: c, shivCSS: d.shivCSS !== !1, supportsUnknownElements: k, shivMethods: d.shivMethods !== !1, type: "default", shivDocument: r, createElement: o, createDocumentFragment: p }; a.html5 = s, r(b) } (this, b), e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, e.hasEvent = z, e.testProp = function (a) { return G([a]) }, e.testAllProps = I, e.testStyles = y, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + v.join(" ") : ""), e } (this, this.document), function (a, b, c) { function d(a) { return "[object Function]" == o.call(a) } function e(a) { return "string" == typeof a } function f() { } function g(a) { return !a || "loaded" == a || "complete" == a || "uninitialized" == a } function h() { var a = p.shift(); q = 1, a ? a.t ? m(function () { ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1) }, 0) : (a(), h()) : q = 0 } function i(a, c, d, e, f, i, j) { function k(b) { if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) { "img" != a && m(function () { t.removeChild(l) }, 50); for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload() } } var j = j || B.errorTimeout, l = b.createElement(a), o = 0, r = 0, u = { t: d, s: c, e: f, a: i, x: j }; 1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () { k.call(this, r) }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l)) } function j(a, b, c, d, f) { return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this } function k() { var a = B; return a.loader = { load: j, i: 0 }, a } var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance" in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function (a) { return "[object Array]" == o.call(a) }, x = [], y = {}, z = { timeout: function (a, b) { return b.length && (a.timeout = b[0]), a } }, A, B; B = function (a) { function b(a) { var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = { url: c, origUrl: c, prefixes: a }, e, f, g; for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g)); for (f = 0; f < b; f++) c = x[f](c); return c } function g(a, e, f, g, h) { var i = b(a), j = i.autoCallback; i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () { k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2 }))) } function h(a, b) { function c(a, c) { if (a) { if (e(a)) c || (j = function () { var a = [].slice.call(arguments); k.apply(this, a), l() }), g(a, j, b, 0, h); else if (Object(a) === a) for (n in m = function () { var b = 0, c; for (c in a) a.hasOwnProperty(c) && b++; return b } (), a) a.hasOwnProperty(n) && (!c && ! --m && (d(j) ? j = function () { var a = [].slice.call(arguments); k.apply(this, a), l() } : j[n] = function (a) { return function () { var b = [].slice.call(arguments); a && a.apply(this, b), l() } } (k[n])), g(a[n], j, b, n, h)) } else !c && l() } var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n; c(h ? a.yep : a.nope, !!i), i && c(i) } var i, j, l = this.yepnope.loader; if (e(a)) g(a, 0, l, 0); else if (w(a)) for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l); else Object(a) === a && h(a, l) }, B.addPrefix = function (a, b) { z[a] = b }, B.addFilter = function (a) { x.push(a) }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () { b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete" }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) { var k = b.createElement("script"), l, o, e = e || B.errorTimeout; k.src = a; for (o in d) k.setAttribute(o, d[o]); c = j ? h : c || f, k.onreadystatechange = k.onload = function () { !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null) }, m(function () { l || (l = 1, c(1)) }, e), i ? k.onload() : n.parentNode.insertBefore(k, n) }, a.yepnope.injectCss = function (a, c, d, e, g, i) { var e = b.createElement("link"), j, c = i ? h : c || f; e.href = a, e.rel = "stylesheet", e.type = "text/css"; for (j in d) e.setAttribute(j, d[j]); g || (n.parentNode.insertBefore(e, n), m(c, 0)) } } (this, document), Modernizr.load = function () { yepnope.apply(window, [].slice.call(arguments, 0)) };

 (function ($, window, document, undefined) {

    'use strict';

    var Modernizr = window.Modernizr;

    //1. Plugin constructor
    function GlassCase(element, options) {
        var gcBase = this;

        gcBase.element = element.wrap('<div class="glass-case"></div>').parent();
        gcBase.init(options);
    }

    //2. Object with the default options of the plugin
    GlassCase.defaults = {
        //DISPLAY AREA
        widthDisplay: 600,        // Default width of the display image
        heightDisplay: 534,        // Default height of the display image
        isAutoScaleDisplay: true,
        isAutoScaleHeight: true,
        isDownloadEnabled: true,
        downloadPosition: 3,
        isShowAlwaysIcons: false,
        speedHideIcons: 3000,
        mouseEnterDisplayCB: function () { },
        mouseLeaveDisplayCB: function () { },
        //THUMBS AREA        
        thumbsPosition: 'bottom',   // Default position of thumbs. Position is relative to the image display. Can take the values: top; bottom      
        nrThumbsPerRow: 5,          // Number of images per row        
        isThumbsOneRow: true,     // Show one row or all images: true -> will be shown only one row; false -> will be shown all images
        isOneThumbShown: false,
        firstThumbSelected: 0,          // Current element's index
        colorActiveThumb: -1,
        thumbsMargin: 4,          // in px
        isHoverShowThumbs: false,
        //ZOOM AREA
        zoomPosition: 'right',    // Default position for the zoom. It can take values: right; left; inner
        autoInnerZoom: true,       // true; false
        isZoomEnabled: true,
        isSlowZoom: false,
        speedSlowZoom: 1200,
        isZoomDiffWH: false,
        zoomWidth: 0,
        zoomHeight: 0,
        zoomAlignment: 'displayImage', //displayImage, displayArea
        zoomMargin: 4,          // in px    
        //LENS AREA
        isSlowLens: false,
        speedSlowLens: 600,
        //OVERLAY AREA
        isOverlayEnabled: true,
        isOverlayFullImage: false,
        //GENERAL
        speed: 400,        // Default speed
        easing: 'linear',   // Default easing
        isKeypressEnabled: true,
        colorIcons: -1,          // The color of the icons
        colorLoading: -1,
        textImageNotLoaded: 'NO IMAGE',
        //CAPTION
        isZCapEnabled: true,
        capZType: 'in', // in, out
        capZPos: 'bottom', // top, bottom
        capZAlign: 'center' // left, center, right
    };

    //3. Adding methods to the plugin object
    GlassCase.prototype = {
        init: function (options) {
            var gcBase = this;

            // Merging user's options with the default options
            gcBase.config = $.extend(true, {}, GlassCase.defaults, options);

            // Saving user's options to a private object
            gcBase._options = options;

            // GlassCase defaults
            gcBase._defaults = GlassCase.defaults;

            gcBase.iOS = false;
            var p = window.navigator.platform;

            if (p === 'iPad' || p === 'iPhone' || p === 'iPod') {
                gcBase.iOS = true;
            }

            gcBase.supportCanvas = Modernizr.canvas;

            var ctntDisplayArea = "<div class='gc-display-area'>" +
                                        "<div class='gc-icon gc-icon-download'></div>" +
                                        "<div class='gc-icon gc-icon-next'></div>" +
                                        "<div class='gc-icon gc-icon-prev'></div>" +
                                        "<div class='gc-display-container'>" +
                                            "<div class='gc-lens'></div>" +
                                            "<img class='gc-display-display' alt=' ' />" +
                                        "</div>" +
                                     "</div>";
            var ctntZoomArea = "<div class='gc-zoom'>" +
                                        "<div class='gc-zoom-container'><img alt=' ' /></div>" +
                                     "</div>";
            var ctntOverlayArea = "<div class='gc-overlay-area'>" +
                                    "<div class='gc-overlay-top-icons'>" +
                                     "<div class='gc-icon gc-icon-close'> </div>" +
                                        "<div class='gc-icon gc-icon-enlarge'> </div>" +
                                        "<div class='gc-icon gc-icon-compress'> </div>" +
                                    "</div>" +
                                    "<div class='gc-overlay-left-icons'>" +
                                        "<div class='gc-icon gc-icon-prev'> </div>" +
                                    "</div>" +
                                    "<div class='gc-overlay-right-icons'>" +
                                        "<div class='gc-icon gc-icon-next'> </div>" +
                                    "</div>" +
                                    "<div class='gc-overlay-gcontainer'>" +
                                        "<div class='gc-overlay-container'>" +
                                            "<div class='gc-overlay-container-display'>" +
                                                "<img class='gc-overlay-display' alt=' ' />" +
                                            "</div>" +
                                        "</div>" +
                                    "</div>" +
                                 "</div>";

            var sVT = (gcBase.config.thumbsPosition == 'right' || gcBase.config.thumbsPosition == 'left') ? '-vt' : '';

            var ctntThumbsPrevNext = "<div class='gc-thumbs-area-prev'><div class='gc-icon gc-icon-prev" + sVT + "'></div></div>" +
                                     "<div class='gc-thumbs-area-next'><div class='gc-icon gc-icon-next" + sVT + "'></div></div>";
            // Setting the position of the thumb images
            gcBase.widthDisplayPerc = 100;
            if (gcBase.config.thumbsPosition == 'top' || gcBase.config.thumbsPosition == 'left') {
                gcBase.element.append(ctntDisplayArea);
            }
            else {
                gcBase.element.prepend(ctntDisplayArea);
            }
            gcBase.element.prepend(ctntZoomArea).prepend(ctntOverlayArea);

            // Plugin variables
            // Loading
            gcBase.gcLoadingClass = (Modernizr.csstransforms == true) ? 'gc-loading3' : 'gc-loading';

            gcBase.gcLoader = $("<div class='" + gcBase.gcLoadingClass + "'></div>");
            gcBase.gcLoading = gcBase.element.find('.' + gcBase.gcLoadingClass);
            if (gcBase.config.colorLoading != -1 && Modernizr.csstransforms == true) {
                var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(gcBase.config.colorLoading);
                if (result) {
                    var sC = 'rgba(' + parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) + ', ';
                    gcBase.gcLoader.css({ 'border-top-color': sC + '0.2)', 'border-right-color': sC + '0.2)', 'border-bottom-color': sC + '0.2)', 'border-left-color': sC + '1)' });
                }
            }
            // gcImageData: Array that will hold the sizes of all the images
            gcBase.gcImageData = [];
            // Display: Area, Container, Display, Lens, Download Icon
            gcBase.gcDisplayArea = gcBase.element.find('.gc-display-area');
            gcBase.gcDisplayContainer = gcBase.gcDisplayArea.find('.gc-display-container');
            gcBase.gcDisplayDisplay = gcBase.gcDisplayContainer.find('.gc-display-display');
            gcBase.gcLens = gcBase.gcDisplayContainer.find('.gc-lens').hide();
            gcBase.gcDisplayDownload = gcBase.gcDisplayArea.find('.gc-icon-download');
            gcBase.gcDisplayPrevious = gcBase.gcDisplayArea.find('.gc-icon-prev');
            gcBase.gcDisplayNext = gcBase.gcDisplayArea.find('.gc-icon-next');
            // Zoom: Area, Display
            gcBase.gcZoom = gcBase.element.find('.gc-zoom').hide();
            gcBase.gcZoomContainer = gcBase.gcZoom.find('.gc-zoom-container');
            gcBase.gcZoomDisplay = gcBase.gcZoomContainer.find('img');
            // Overlay: Area, Display, Close Icon, Previous Icon, Next Icon
            gcBase.gcOverlayArea = gcBase.element.find('.gc-overlay-area').hide();
            gcBase.gcOverlayGContainer = gcBase.gcOverlayArea.find('.gc-overlay-gcontainer');
            gcBase.gcOverlayContainer = gcBase.gcOverlayArea.find('.gc-overlay-container');
            gcBase.gcOverlayContainerDisplay = gcBase.gcOverlayContainer.find('.gc-overlay-container-display');
            gcBase.gcOverlayDisplay = gcBase.gcOverlayContainer.find('.gc-overlay-display');
            gcBase.gcOverlayPrevious = gcBase.gcOverlayArea.find('.gc-icon-prev');
            gcBase.gcOverlayNext = gcBase.gcOverlayArea.find('.gc-icon-next');
            gcBase.gcOverlayClose = gcBase.gcOverlayArea.find('.gc-icon-close');
            gcBase.gcOverlayEnlarge = gcBase.gcOverlayArea.find('.gc-icon-enlarge').hide();
            gcBase.gcOverlayCompress = gcBase.gcOverlayArea.find('.gc-icon-compress').hide();
            // Thumbs: Area, Ul, Li, AreaPrevious, AreaNext, Previous, Next, Img, LiDiv
            gcBase.gcThumbsUl = gcBase.element.find('ul');
            gcBase.gcThumbsUl.wrap("<div class='gc-thumbs-area'></div>");
            gcBase.gcThumbsArea = gcBase.element.find('.gc-thumbs-area');
            gcBase.gcThumbsArea.append(ctntThumbsPrevNext);
            gcBase.gcThumbsAreaPrevious = gcBase.gcThumbsArea.find('.gc-thumbs-area-prev');
            gcBase.gcThumbsPrevious = gcBase.gcThumbsAreaPrevious.find('.gc-icon-prev' + sVT);
            gcBase.gcThumbsAreaNext = gcBase.gcThumbsArea.find('.gc-thumbs-area-next');
            gcBase.gcThumbsNext = gcBase.gcThumbsAreaNext.find('.gc-icon-next' + sVT);
            gcBase.gcThumbsLi = gcBase.gcThumbsUl.find('li');

            gcBase.gcThumbsLi.each(function (index) {
                var iSrc = $.trim($(this).find('img').attr('src'));
                var els = gcBase.gcThumbsLi.find('img[src="' + iSrc + '"]');

                while (els.length > 1) {
                    els.last().parent().remove();
                    gcBase.gcThumbsLi = gcBase.gcThumbsUl.find('li');
                    els = gcBase.gcThumbsLi.find('img[src="' + iSrc + '"]');
                }
            });
            gcBase.gcThumbsLi = gcBase.gcThumbsUl.find('li');
            gcBase.gcThumbsImg = gcBase.gcThumbsLi.find('img');
            gcBase.gcThumbsImg.wrap('<div class="gc-li-display-container"></div>');
            gcBase.gcThumbsLiDiv = gcBase.gcThumbsLi.find('.gc-li-display-container');
            gcBase.gcThumbsUl.removeClass('gc-start');

            gcBase.gcTotalThumbsImg = gcBase.gcThumbsImg.length;
            // Caption
            var cssClass;

            if (gcBase.config.isZCapEnabled === true) {
                gcBase.gcCaption = $('<div class="gc-caption-container"><div></div></div>');
                gcBase.gcCaptionDisplay = gcBase.gcCaption.find('div');

                if (gcBase.config.zoomPosition === 'inner') gcBase.config.capZType = 'in';

                cssClass = 'gc-caption-' + gcBase.config.capZType + gcBase.config.capZPos;
                if ($.inArray(cssClass, ['gc-caption-outtop', 'gc-caption-outbottom', 'gc-caption-intop', 'gc-caption-inbottom']) === -1) {
                    cssClass = 'gc-caption-' + gcBase._defaults.capZType + gcBase._defaults.capZPos;
                }

                $.inArray(gcBase.config.capZAlign, ['left', 'right', 'center']) === -1 ?
                    cssClass += ' gc-alignment-' + gcBase._defaults.capZAlign :
                    cssClass += ' gc-alignment-' + gcBase.config.capZAlign;

                gcBase.gcCaption.addClass(cssClass).appendTo(gcBase.gcZoom);
            }
            gcBase.isMouseEventsOn = false;
            gcBase.isTouchMove = false;
            gcBase.mouseTimer = 0;

            if (gcBase.config.isShowAlwaysIcons != true) {
                gcBase.gcDisplayDownload.hide();
                gcBase.gcDisplayPrevious.hide();
                gcBase.gcDisplayNext.hide();
            }
            gcBase.isAutoInnerZooming = false;

            if (gcBase.config.zoomPosition == 'inner') {
                gcBase.config.isZoomDiffWH = true; gcBase.config.zoomWidth = 0; gcBase.config.zoomHeight = 0;
            }
            if (gcBase.config.thumbsPosition == 'left' || gcBase.config.thumbsPosition == 'right') {
                gcBase.gcThumbsArea.addClass('gc-vt');
            } else {
                gcBase.gcThumbsArea.addClass('gc-hz');
            }

            if (gcBase.config.colorIcons != -1) {
                gcBase.element.find('.gc-icon').css('color', gcBase.config.colorIcons);
            }

            if (gcBase.config.isDownloadEnabled == false || gcBase.supportCanvas == false) {
                gcBase.gcDisplayDownload.addClass('gc-hide');
            }
            else {
                var cssDownloadPosition = { top: '', bottom: '', right: '', left: '' };
                var bW = '-' + gcBase.gcDisplayArea.css('border-left-width');
                switch (gcBase.config.downloadPosition) {
                    case 1:
                        cssDownloadPosition.top = bW;
                        cssDownloadPosition.left = bW;
                        break;
                    case 2:
                        cssDownloadPosition.top = bW;
                        cssDownloadPosition.right = bW;
                        break;
                    case 4:
                        cssDownloadPosition.bottom = bW;
                        cssDownloadPosition.right = bW;
                        break;
                    default:
                        cssDownloadPosition.bottom = bW;
                        cssDownloadPosition.left = bW;
                        break;
                }
                gcBase.gcDisplayDownload.css(cssDownloadPosition);
            }

            if (isNaN(gcBase.config.firstThumbSelected) == false &&
                parseFloat(gcBase.config.firstThumbSelected) > -1 &&
                parseFloat(gcBase.config.firstThumbSelected) <= (gcBase.gcThumbsLi.length - 1)) {
                gcBase.current = gcBase.config.firstThumbSelected;
            }
            else {
                gcBase.current = gcBase._defaults.firstThumbSelected;
            }

            gcBase.currentSlide = Math.floor(gcBase.current / gcBase.config.nrThumbsPerRow);
            gcBase.old = 0;
            gcBase.currentMousePos = { x: -1, y: -1 };
            gcBase.resizeTimer = 0;
            gcBase.zooming = false;
            gcBase.newZoom = { left: 0, top: 0 };
            gcBase.currentZoom = { left: 0, top: 0 };
            gcBase.slowZoomTimer = 0;
            gcBase.newLens = { left: 0, top: 0 };
            gcBase.currentLens = { left: 0, top: 0 };
            gcBase.slowLensTimer = 0;

            var altTxt = gcBase.gcThumbsLi.eq(gcBase.current).find('img').attr('alt');
            if (altTxt === undefined) altTxt = 'image';

            gcBase.gcDisplayDisplay.attr('src', gcBase.gcThumbsImg.eq(gcBase.current).attr('src'))
                                   .attr('alt', altTxt);
            gcBase.setup();

            $.when(gcBase.preloadImages()).done(function () {
                gcBase.update();
                gcBase.initEvents();
            });
        },
        preloadImages: function () {
            var gcBase = this;

            var countLoadedImages = 0,
                countTotalImages = gcBase.gcTotalThumbsImg;

            // Object that will hold the natural sizes of the image
            function GCImageData(width, height, isLoaded, src) {
                this.width = width;
                this.height = height;
                this.isLoaded = isLoaded;
            };

            return $.Deferred(
				function (dfd) {
				    gcBase.gcThumbsImg.each(function (index) {
				        $('<img/>')
                        .on('load', function () {
                            var lWidth = this.width,
                                lHeight = this.height,
                                lGCImageData = new GCImageData(lWidth, lHeight, true),
                                index = gcBase.gcThumbsLi.find("img[src*='" + $(this).attr('src') + "']").parents('li').index();
                            gcBase.gcImageData[index] = lGCImageData;
                            gcBase.processThumbImage(index);
                            if (++countLoadedImages === countTotalImages) { dfd.resolve(); }
                        })
                        .on('error', function () {
                            var index = gcBase.gcThumbsLi.find("img[src*='" + $(this).attr('src') + "']").parents('li').index(),
                                lWidth = gcBase.gcThumbsLi.width(),
                                lHeight = gcBase.gcThumbsLi.height(),
                                lGCImageData = new GCImageData(lWidth, lHeight, false);
                            gcBase.gcImageData[index] = lGCImageData;

                            this.onerror = "";

                            if (Modernizr.svg) {
                                var iEDB64 = window.btoa("<svg xmlns='http://www.w3.org/2000/svg' width='" + lWidth + "' height='" + lHeight + "'><rect width='" + lWidth + "' height='" + lHeight + "' fill='#eee'/><text text-anchor='middle' x='" + lWidth / 2 + "' y='" + lHeight / 2 + "' style='fill:#aaa;font-weight:bold;font-size:8px;font-family:Arial,Helvetica,sans-serif;dominant-baseline:central'>" + gcBase.config.textImageNotLoaded + "</text></svg>");
                                gcBase.gcThumbsImg.eq(index).attr('src', "data:image/svg+xml;base64," + iEDB64);
                            }
                            gcBase.processThumbImage(index);
                            if (++countLoadedImages === countTotalImages) { dfd.resolve(); }
                        }).attr('src', $(this).attr('src'));
				    });
				}
			).promise();
        },
        processThumbImage: function (index) {
            var gcBase = this;

            gcBase.setupThumbImg(gcBase.gcThumbsLi.eq(index), index);
            gcBase.removeLoader(gcBase.gcThumbsLi.eq(index));
            gcBase.gcThumbsLi.eq(index).find('.gc-li-display-container').removeClass('gc-hide');

            if (gcBase.current == index) {
                gcBase.removeLoader(gcBase.gcDisplayArea);
                gcBase.gcDisplayContainer.removeClass('gc-hide');
                gcBase.setupDisplayDisplay();
                gcBase.setupLens();
            }
        },
        setup: function () {
            var gcBase = this;

            var gcWidth;
            if ((gcBase.config.thumbsPosition == 'right' || gcBase.config.thumbsPosition == 'left') &&
                (gcBase.config.isOneThumbShown == false && (gcBase.gcThumbsLi.length > 1))) {
                var liMargin = parseFloat(gcBase.gcThumbsLi.css('margin-bottom')),
                    heightLi = (parseFloat(gcBase.config.heightDisplay) / gcBase.config.nrThumbsPerRow - (gcBase.config.nrThumbsPerRow - 1) * liMargin / gcBase.config.nrThumbsPerRow),
                    ratio = gcBase.config.widthDisplay / gcBase.config.heightDisplay,
                    widthLi = heightLi * ratio;
                var wE = widthLi + gcBase.config.thumbsMargin + parseFloat(gcBase.config.widthDisplay);

                gcBase.widthDisplayPerc = Math.round(gcBase.config.widthDisplay * 100 / wE);

                gcWidth = gcBase.element.parent().width() > wE ? wE : gcBase.element.parent().width();

            } else {
                gcWidth = gcBase.element.parent().width() > gcBase.config.widthDisplay ? (gcBase.config.widthDisplay) : gcBase.element.parent().width();
            }

            gcBase.element.css({ 'width': gcWidth });

            // DISPLAY
            gcBase.setupDisplayArea();
            // THUMBS
            if (gcBase.config.isOneThumbShown == false && gcBase.gcTotalThumbsImg == 1) {
                gcBase.gcThumbsArea.outerHeight(0);
                gcBase.gcThumbsArea.addClass('gc-hide');
                gcBase.config.isKeypressEnabled = false;
            }
            else {
                gcBase.config.isOneThumbShown = true;
                gcBase.setupThumbs();
            }
            // OVERLAY: Setting centered position for NAVIGATION BUTTONS: previous/next
            if (gcBase.gcTotalThumbsImg == 1) {
                gcBase.gcOverlayPrevious.addClass('gc-hide');
                gcBase.gcOverlayNext.addClass('gc-hide');
            }
            else {
                gcBase.gcOverlayPrevious.css('margin-top', -(gcBase.gcOverlayPrevious.outerHeight() / 2));
                gcBase.gcOverlayNext.css('margin-top', -(gcBase.gcOverlayNext.outerHeight() / 2));
            }
            // COMPONENT
            if (gcBase.config.thumbsPosition == 'top' || gcBase.config.thumbsPosition == 'bottom') {
                var hThumbs = gcBase.config.isOneThumbShown == false ? 0 : gcBase.gcThumbsArea.outerHeight();
                gcBase.element.css({ 'height': hThumbs + gcBase.gcDisplayArea.outerHeight() + parseFloat(gcBase.config.thumbsMargin) });
            }
            else {
                var wThumbs = gcBase.config.isOneThumbShown == false ? 0 : gcBase.gcThumbsArea.outerWidth();
                gcBase.element.css({ 'width': wThumbs + gcBase.gcDisplayArea.outerWidth() + parseFloat(gcBase.config.thumbsMargin) });
                gcBase.element.css({ 'height': gcBase.gcDisplayArea.outerHeight() });
            }
        },
        setupDisplayArea: function () {
            var gcBase = this;

            var currentDisplayAreaWidth, currentDisplayAreaHeight,
                nextDisplayAreaWidth, nextDisplayAreaHeight,
                asWidth = gcBase.config.widthDisplay, asHeight = gcBase.config.heightDisplay;

            gcBase.gcDisplayArea.css({ 'height': '0', 'width': '0' });

            nextDisplayAreaWidth = gcBase.widthDisplayPerc * gcBase.element.outerWidth() / 100;

            nextDisplayAreaHeight = nextDisplayAreaWidth * (asHeight / asWidth);

            gcBase.gcDisplayArea.css({ 'height': Math.ceil(nextDisplayAreaHeight), 'width': Math.ceil(nextDisplayAreaWidth) });

            // Display: Setting centered position for NAVIGATION BUTTONS: previous/next
            gcBase.gcDisplayPrevious.css('margin-top', -(gcBase.gcDisplayPrevious.outerHeight() / 2));
            gcBase.gcDisplayNext.css('margin-top', -(gcBase.gcDisplayNext.outerHeight() / 2));

            if (gcBase.gcTotalThumbsImg == 1) {
                gcBase.gcDisplayPrevious.addClass('gc-hide');
                gcBase.gcDisplayNext.addClass('gc-hide');
            }
            gcBase.gcDisplayContainer.addClass('gc-hide');
            gcBase.addLoader(gcBase.gcDisplayArea);
        },
        setupDisplayDisplay: function () {
            var gcBase = this;

            gcBase.gcDisplayContainer.css({ 'width': '0', 'height': '0' });

            gcBase.gcDisplayContainer.css({ 'width': gcBase.gcDisplayArea.outerWidth(), 'height': gcBase.gcDisplayArea.outerHeight() });

            var widthRatio = gcBase.gcDisplayContainer.outerWidth() / gcBase.gcImageData[gcBase.current].width,
                heightRatio = gcBase.gcDisplayContainer.outerHeight() / gcBase.gcImageData[gcBase.current].height,
                ratio, ddWidth, ddHeight;

            if ((widthRatio < 1 || heightRatio < 1)) {
                gcBase.config.isZoomEnabled === true ? gcBase.isMouseEventsOn = true : gcBase.isMouseEventsOn = false;

                widthRatio < heightRatio ? ratio = widthRatio : ratio = heightRatio;

                ddWidth = ratio * gcBase.gcImageData[gcBase.current].width;
                ddHeight = ratio * gcBase.gcImageData[gcBase.current].height;
            }
            else { // In case that the image's width and height are smaller than the container's windth and height
                gcBase.gcDisplayContainer.trigger('mouseleave.glasscase');
                gcBase.isMouseEventsOn = false;

                ddWidth = gcBase.gcImageData[gcBase.current].width;
                ddHeight = gcBase.gcImageData[gcBase.current].height;
            }
            gcBase.gcDisplayDisplay.css({ 'width': ddWidth, 'height': ddHeight });
            gcBase.gcDisplayContainer.css({ 'width': ddWidth, 'height': ddHeight });

            // Positioning the container in the center of DisplayArea
            var borderVal = parseFloat(gcBase.gcDisplayArea.css('border-left-width')) * 2,
                paddingVal = parseFloat(gcBase.gcDisplayArea.css('padding-top')) * 2;

            var percMarginLeft = ((gcBase.gcDisplayContainer.outerWidth() / 2) * 100) / (gcBase.gcDisplayArea.outerWidth() - borderVal - paddingVal),
                percMarginTop = ((gcBase.gcDisplayContainer.outerHeight() / 2) * 100) / (gcBase.gcDisplayArea.outerWidth() - borderVal - paddingVal);

            gcBase.gcDisplayContainer.css({
                'margin-left': "-" + percMarginLeft + "%",
                'margin-top': "-" + percMarginTop + "%"
            });
        },
        setupZoom: function () {
            var gcBase = this;

            gcBase.gcZoomDisplay.attr('src', gcBase.gcDisplayDisplay.attr('src'))
                                .attr('alt', gcBase.gcDisplayDisplay.attr('alt'));
            if (gcBase.config.zoomPosition != 'inner') {
                gcBase.isAutoInnerZooming = false;
                gcBase.config = $.extend(true, {}, gcBase._defaults, gcBase._options);
                gcBase.gcZoom.appendTo(gcBase.element).removeClass('gc-zoom-inner');
            }

            var borderVal = parseFloat(gcBase.gcZoom.css('border-left-width')) * 2,
                paddingVal = parseFloat(gcBase.gcDisplayArea.css('padding-top')) * 2,
                zoomWidth = (gcBase.config.zoomPosition == 'inner') ? paddingVal : (borderVal + paddingVal),
                zoomHeight = (gcBase.config.zoomPosition == 'inner') ? paddingVal : (borderVal + paddingVal);

            for (var i = 0; i < 2; i++) {
                if (gcBase.config.isZoomDiffWH && gcBase.config.zoomWidth > 0) {
                    zoomWidth += parseFloat(gcBase.config.zoomWidth) < gcBase.gcImageData[gcBase.current].width ?
                                 parseFloat(gcBase.config.zoomWidth) : gcBase.gcImageData[gcBase.current].width;
                } else { zoomWidth += gcBase.gcDisplayContainer.outerWidth(); }

                if (gcBase.config.isZoomDiffWH && gcBase.config.zoomHeight > 0) {
                    zoomHeight += parseFloat(gcBase.config.zoomHeight) < gcBase.gcImageData[gcBase.current].height ?
                                  parseFloat(gcBase.config.zoomHeight) : gcBase.gcImageData[gcBase.current].height;
                } else { zoomHeight += gcBase.gcDisplayContainer.outerHeight(); }

                if (gcBase.config.isZoomDiffWH == false) {
                    zoomWidth = zoomHeight;
                }

                if (gcBase.config.autoInnerZoom == true && gcBase.config.zoomPosition != 'inner') {
                    if (gcBase.element.outerWidth() + zoomWidth > $(window).width()) {
                        gcBase.isAutoInnerZooming = true;
                        gcBase.config.isZoomDiffWH = true; gcBase.config.zoomWidth = 0; gcBase.config.zoomHeight = 0;
                        if (i == 0) { zoomWidth = zoomHeight = paddingVal; }
                    } else { break; }
                } else { break; }
                if (gcBase.config.zoomPosition == 'inner') { break; }
            }

            gcBase.gcZoomContainer.css({ 'width': 0, 'height': 0 });
            gcBase.gcZoom.css({ 'width': zoomWidth, 'height': zoomHeight });
            gcBase.gcZoomContainer.css({ 'width': gcBase.gcZoom.outerWidth(), 'height': gcBase.gcZoom.outerHeight() });

            if (gcBase.config.isZCapEnabled === true) {
                var capTxt = $(gcBase.gcThumbsImg[gcBase.current]).data('gc-caption');
                capTxt === undefined ? gcBase.gcCaption.hide() : (gcBase.gcCaption.show(), gcBase.gcCaptionDisplay.empty().append(capTxt));
                var cssClass;

                if (gcBase.isAutoInnerZooming === true) {
                    if (gcBase.config.capZType === 'out') {
                        gcBase.gcCaption.removeClass('gc-caption-outtop gc-caption-outbottom');

                        cssClass = gcBase.config.capZPos === 'top' ? 'gc-caption-intop' : 'gc-caption-inbottom';
                        gcBase.gcCaption.addClass(cssClass);
                    }
                } else {
                    if ((gcBase.config.capZType === 'out') &&
                        (gcBase.gcCaption.hasClass('gc-caption-intop') || gcBase.gcCaption.hasClass('gc-caption-inbottom'))) {
                        gcBase.gcCaption.removeClass('gc-caption-intop gc-caption-inbottom');

                        cssClass = gcBase.config.capZPos === 'top' ? 'gc-caption-outtop' : 'gc-caption-outbottom';
                        gcBase.gcCaption.addClass(cssClass);
                    }
                }
            }
        },
        setupZoomPos: function () {
            var gcBase = this;

            if (gcBase.config.zoomPosition == 'inner' || gcBase.isAutoInnerZooming == true) {
                gcBase.gcZoom.appendTo(gcBase.gcDisplayContainer).addClass('gc-zoom-inner');
            }
            else {
                gcBase.gcZoom.appendTo(gcBase.element).removeClass('gc-zoom-inner');

                if (gcBase.config.zoomPosition == 'left') {
                    gcBase.gcZoom.css({ 'right': (gcBase.element.outerWidth(true)), 'margin-right': gcBase.config.zoomMargin + 'px' });
                }
                else {
                    gcBase.gcZoom.css({ 'left': (gcBase.element.outerWidth(true)), 'margin-left': gcBase.config.zoomMargin + 'px' });
                }

                var topZ = gcBase.config.zoomAlignment == 'displayArea' ? 0 : gcBase.gcDisplayContainer.position().top
                                                                             + parseFloat(gcBase.gcDisplayContainer.css('margin-top'))
                                                                             - parseFloat(gcBase.gcDisplayArea.css('padding-top'));

                if (gcBase.config.thumbsPosition == 'top') {
                    var topT = gcBase.gcThumbsArea.outerHeight() + parseFloat(gcBase.config.thumbsMargin);
                    gcBase.gcZoom.css({ 'top': topZ + topT });
                }
                else {
                    gcBase.gcZoom.css({ 'top': topZ });
                }
            }
        },
        setupLens: function () {
            var gcBase = this;

            var percZoomWidth = Math.round(gcBase.gcZoomContainer.outerWidth() / gcBase.gcImageData[gcBase.current].width * 100);
            var valueLensW = Math.round(gcBase.gcDisplayDisplay.outerWidth() * percZoomWidth / 100);

            var percZoomHeight = Math.round(gcBase.gcZoomContainer.outerHeight() / gcBase.gcImageData[gcBase.current].height * 100);
            var valueLensH = Math.round(gcBase.gcDisplayDisplay.outerHeight() * percZoomHeight / 100);

            gcBase.gcLens.css({ 'width': (valueLensW), 'height': (valueLensH) });
            gcBase.mousemoveHandler();
        },
        addLoader: function (obj) { //obj - the object that will contain the loader
            var gcBase = this;

            $(obj).prepend(gcBase.gcLoader.clone());
        },
        removeLoader: function (obj) {
            var gcBase = this;

            var loader = $(obj).find('.' + gcBase.gcLoadingClass);

            if (loader.length) {
                loader.remove();
            }
        },
        setupThumbImg: function (obj, index) { // obj - li element
            var gcBase = this;

            var widthImg = gcBase.gcThumbsLi.outerWidth(),
                heightImg = gcBase.gcThumbsLi.outerHeight(),
                ratioImg, listItem = $(obj),
                wRatio = widthImg / gcBase.gcImageData[index].width,
    		    hRatio = heightImg / gcBase.gcImageData[index].height;

            ratioImg = wRatio > hRatio ? wRatio : hRatio;

            gcBase.gcThumbsImg[index].width = Math.ceil(gcBase.gcImageData[index].width * ratioImg, 10);
            gcBase.gcThumbsImg[index].height = Math.ceil(gcBase.gcImageData[index].height * ratioImg, 10);

            var percMarginLeft = ((gcBase.gcThumbsImg.eq(index).outerWidth() / 2) * 100) / (gcBase.gcThumbsLiDiv.outerWidth()),
                percMarginTop = ((gcBase.gcThumbsImg.eq(index).outerHeight() / 2) * 100) / (gcBase.gcThumbsLiDiv.outerWidth());

            gcBase.gcThumbsImg.eq(index).css({
                'margin-top': "-" + percMarginTop + "%",
                'margin-left': "-" + percMarginLeft + "%"
            });
            gcBase.gcThumbsLiDiv.eq(index).removeClass('gc-hide');
            gcBase.removeLoader(gcBase.gcThumbsLi.eq(index));
            gcBase.gcThumbsLiDiv.eq(index).removeClass('gc-hide');
            gcBase.removeLoader(gcBase.gcThumbsLi.eq(index));
        },
        setupThumbs: function () {
            var gcBase = this;

            if (gcBase.config.thumbsPosition == 'right') {
                gcBase.setupThumbsLR();
                gcBase.gcDisplayArea.css({ 'top': '0', 'left': '0' });
                gcBase.gcThumbsArea.css({ 'top': '0', 'left': gcBase.gcDisplayArea.outerWidth() + parseFloat(gcBase.config.thumbsMargin) });
            }
            if (gcBase.config.thumbsPosition == 'left') {
                gcBase.setupThumbsLR();
                gcBase.gcThumbsArea.css({ 'top': '0', 'left': '0' });
                gcBase.gcDisplayArea.css({ 'top': '0', 'left': gcBase.gcThumbsArea.outerWidth() + parseFloat(gcBase.config.thumbsMargin) });
            }
            if (gcBase.config.thumbsPosition == 'bottom') {
                gcBase.setupThumbsTB();
                gcBase.gcDisplayArea.css({ 'top': '0', 'left': '0' });
                gcBase.gcThumbsArea.css({ 'top': gcBase.gcDisplayArea.outerHeight() + parseFloat(gcBase.config.thumbsMargin), 'left': '0' });
            }
            if (gcBase.config.thumbsPosition == 'top') {
                gcBase.setupThumbsTB();
                gcBase.gcThumbsArea.css({ 'top': '0', 'left': '0' });
                gcBase.gcDisplayArea.css({ 'top': gcBase.gcThumbsArea.outerHeight() + parseFloat(gcBase.config.thumbsMargin), 'left': '0' });
            }
        },
        setupThumbsTB: function () {
            var gcBase = this;
            gcBase.gcThumbsArea.css('width', gcBase.gcDisplayArea.outerWidth());

            var liMarginRight = parseFloat(gcBase.gcThumbsLi.css('margin-right')),
                ratio = gcBase.config.widthDisplay / gcBase.config.heightDisplay,
                widthLi = (gcBase.gcThumbsArea.outerWidth() / gcBase.config.nrThumbsPerRow - (gcBase.config.nrThumbsPerRow - 1) * liMarginRight / gcBase.config.nrThumbsPerRow),
                heightLi = widthLi / ratio, widthLiPerc;
            if (gcBase.config.isThumbsOneRow == true) {
                widthLiPerc = (widthLi * 100) / (((widthLi + liMarginRight) * gcBase.gcThumbsLi.length) - liMarginRight);
            }
            else {
                widthLiPerc = (widthLi * 100) / gcBase.gcThumbsArea.outerWidth();
            }
            gcBase.gcThumbsLi.css({ 'width': widthLiPerc + "%", 'height': heightLi });
            gcBase.gcThumbsLiDiv.addClass('gc-hide');
            for (var i = 0; i < gcBase.gcThumbsLi.length; i++) {
                gcBase.addLoader(gcBase.gcThumbsLi[i]);
            }
            if (gcBase.config.isThumbsOneRow == true) {
                gcBase.gcThumbsLi.last().css('margin-right', 0);
            }
            else {
                gcBase.gcThumbsUl.find(':nth-child(' + gcBase.config.nrThumbsPerRow + 'n)').css('margin-right', 0);
                gcBase.gcThumbsUl.find(':nth-child(n +' + (parseFloat(gcBase.config.nrThumbsPerRow) + 1) + ')').css('margin-top', liMarginRight + 'px');
            }
            if (gcBase.config.isThumbsOneRow == true) {
                gcBase.gcThumbsUl.css({
                    'width': Math.ceil((widthLi * gcBase.gcThumbsLi.length + (gcBase.gcThumbsLi.length - 1) * liMarginRight)),
                    'height': Math.ceil(heightLi)
                });
                gcBase.gcThumbsArea.css('height', Math.ceil(heightLi));
            }
            else {
                var totalRows = Math.ceil((gcBase.gcThumbsLi.length) / gcBase.config.nrThumbsPerRow);
                var lHeight = Math.ceil(heightLi * totalRows + liMarginRight * (totalRows - 1));

                gcBase.gcThumbsUl.css({ 'width': gcBase.gcThumbsArea.outerWidth(), 'height': lHeight });
                gcBase.gcThumbsArea.css('height', lHeight);
            }
            if (gcBase.config.isThumbsOneRow == true) {
                gcBase.gcThumbsAreaPrevious.removeClass('gc-hide');
                gcBase.gcThumbsPrevious.css('margin-top', (-gcBase.gcThumbsPrevious.outerHeight() / 2));
                gcBase.gcThumbsAreaNext.removeClass('gc-hide');
                gcBase.gcThumbsNext.css('margin-top', (-gcBase.gcThumbsNext.outerHeight() / 2));

                gcBase.setupSlider();
            }
            else {
                gcBase.gcThumbsAreaPrevious.addClass('gc-hide');
                gcBase.gcThumbsAreaNext.addClass('gc-hide');
            }
            if (gcBase.iOS) {
                var brwLiWidth = gcBase.gcThumbsLi.outerWidth(), brwDiff = gcBase.gcThumbsArea.outerWidth() - (brwLiWidth * gcBase.config.nrThumbsPerRow + (gcBase.config.nrThumbsPerRow - 1) * liMarginRight);
                gcBase.gcThumbsUl.find(':nth-child(' + gcBase.config.nrThumbsPerRow + 'n)').css('width', brwLiWidth + brwDiff);
            }
        },
        setupThumbsLR: function () {
            var gcBase = this;
            gcBase.gcThumbsArea.css('height', gcBase.gcDisplayArea.outerHeight());

            var liMargin = parseFloat(gcBase.gcThumbsLi.css('margin-bottom')),
                ratio = gcBase.config.widthDisplay / gcBase.config.heightDisplay,
                heightLi = (gcBase.gcThumbsArea.outerHeight() / gcBase.config.nrThumbsPerRow - (gcBase.config.nrThumbsPerRow - 1) * liMargin / gcBase.config.nrThumbsPerRow),
                widthLi = heightLi * ratio, heightLiPerc;
            heightLiPerc = (heightLi * 100) / (((heightLi + liMargin) * gcBase.gcThumbsLi.length) - liMargin);
            gcBase.gcThumbsLi.css({ 'width': widthLi, 'height': heightLiPerc + "%" });
            gcBase.gcThumbsLiDiv.addClass('gc-hide');
            for (var i = 0; i < gcBase.gcThumbsLi.length; i++) {
                gcBase.addLoader(gcBase.gcThumbsLi[i]);
            }
            gcBase.gcThumbsLi.last().css('margin-bottom', 0);
            gcBase.gcThumbsUl.css({
                'width': Math.ceil(widthLi),
                'height': Math.ceil((((heightLi + liMargin) * gcBase.gcThumbsLi.length) - liMargin))
            });
            gcBase.gcThumbsArea.css('width', Math.ceil(widthLi));
            gcBase.gcThumbsAreaPrevious.removeClass('gc-hide');
            gcBase.gcThumbsPrevious.css('margin-left', (-gcBase.gcThumbsPrevious.outerWidth() / 2));
            gcBase.gcThumbsAreaNext.removeClass('gc-hide');
            gcBase.gcThumbsNext.css('margin-left', (-gcBase.gcThumbsNext.outerWidth() / 2));

            gcBase.setupSlider();
            if (gcBase.iOS) {
                var brwLiHeight = gcBase.gcThumbsLi.outerHeight();
                var brwDiff = gcBase.gcThumbsArea.outerHeight() - (brwLiHeight * gcBase.config.nrThumbsPerRow + (gcBase.config.nrThumbsPerRow - 1) * liMargin);
                gcBase.gcThumbsUl.find(':nth-child(' + gcBase.config.nrThumbsPerRow + 'n)').css('height', brwLiHeight + brwDiff);
            }
        },
        setupSlider: function () {
            var gcBase = this;

            if (gcBase.gcTotalThumbsImg <= gcBase.config.nrThumbsPerRow) {
                gcBase.gcThumbsAreaPrevious.addClass('gc-hide');
                gcBase.gcThumbsAreaNext.addClass('gc-hide');
                return;
            }
            gcBase.gcThumbsAreaPrevious.removeClass('gc-disabled');
            gcBase.gcThumbsAreaNext.removeClass('gc-disabled');

            if (gcBase.currentSlide == 0) {
                gcBase.gcThumbsAreaPrevious.addClass('gc-disabled');
            }
            if (gcBase.currentSlide == Math.floor((gcBase.gcThumbsLi.length - 1) / gcBase.config.nrThumbsPerRow)) {
                gcBase.gcThumbsAreaNext.addClass('gc-disabled');
            }
        },
        update: function () {
            var gcBase = this;
            var altTxt;
            //1.
            if (gcBase.config.colorActiveThumb != -1) {
                gcBase.element.find('.gc-active').css('border-color', "");
            }

            gcBase.gcThumbsLi.removeClass('gc-active').eq(gcBase.current).addClass('gc-active');

            if (gcBase.config.colorActiveThumb != -1) {
                gcBase.element.find('.gc-active').css('border-color', gcBase.config.colorActiveThumb);
            }

            //2.
            altTxt = gcBase.gcThumbsLi.eq(gcBase.current).find('img').attr('alt');
            if (altTxt === undefined) altTxt = 'image';

            gcBase.gcDisplayDisplay.attr('src', gcBase.gcThumbsLi.eq(gcBase.current).find('img').attr('src'))
                                   .attr('alt', altTxt);

            //3.
            gcBase.setupDisplayDisplay();
            gcBase.setupZoom();
            gcBase.setupLens();
            gcBase.setupZoomPos();
        },
        animateImage: function () {
            var gcBase = this;

            gcBase.gcDisplayDisplay.stop(true).animate({ opacity: 0.5 }, 200, function () {
                if ($('body').hasClass('gc-noscroll')) { // If OverlayArea is shown
                    gcBase.gcOverlayDisplay.animate({ opacity: 0 }, 200, function () {
                        gcBase.update();
                        gcBase.setupOverlay();
                        gcBase.gcOverlayDisplay.animate({ opacity: 1 }, 500);
                    });
                }

                if (!$('body').hasClass('gc-noscroll')) {
                    gcBase.update();
                }
                gcBase.gcDisplayDisplay.animate({ opacity: 1 }, 500, function () {
                    gcBase.gcZoomDisplay.attr('src', gcBase.gcDisplayDisplay.attr('src'))
                                        .attr('alt', gcBase.gcDisplayDisplay.attr('alt'));
                });
            });
        },
        nextImage: function () {
            var gcBase = this;

            gcBase.old = gcBase.current;
            gcBase.current = (gcBase.current == (gcBase.gcThumbsLi.length - 1)) ? 0 : gcBase.current + 1;
            gcBase.slide('true', '');
            gcBase.animateImage();
        },
        previousImage: function () {
            var gcBase = this;

            gcBase.old = gcBase.current;
            gcBase.current = (gcBase.current == 0) ? (gcBase.gcThumbsLi.length - 1) : gcBase.current - 1;
            gcBase.slide('true', '');
            gcBase.animateImage();
        },
        slide: function (isImageChange, slideChange) {//isImageChange: true || false; slideChange:   previous || next
            var gcBase = this;

            if (gcBase.config.isThumbsOneRow == false && (gcBase.config.thumbsPosition == 'bottom' || gcBase.config.thumbsPosition == 'top')) {
                return;
            }

            var nextSlide = 0;

            if (isImageChange == 'true') {
                nextSlide = Math.floor(gcBase.current / gcBase.config.nrThumbsPerRow);
            }
            else {
                if (slideChange == 'previous') {
                    nextSlide = 0;

                    if (gcBase.currentSlide > 0) {
                        nextSlide = gcBase.currentSlide - 1;
                    }
                }
                else {
                    nextSlide = Math.floor((gcBase.gcThumbsLi.length - 1) / gcBase.config.nrThumbsPerRow);

                    if (gcBase.currentSlide < nextSlide) {
                        nextSlide = gcBase.currentSlide + 1;
                    }
                }
            }

            if (nextSlide == gcBase.currentSlide)
                return;

            gcBase.currentSlide = nextSlide;

            var vMargin;
            //Making the slide
            if (gcBase.config.thumbsPosition == 'bottom' || gcBase.config.thumbsPosition == 'top') {
                vMargin = gcBase.gcThumbsArea.outerWidth() + parseFloat(gcBase.gcThumbsLi.css('margin-right'));
                gcBase.gcThumbsUl.animate({ left: (-(nextSlide * vMargin)) + 'px' }, gcBase.config.speed);
            } else {
                vMargin = gcBase.gcThumbsArea.outerHeight() + parseFloat(gcBase.gcThumbsLi.css('margin-bottom'));
                gcBase.gcThumbsUl.animate({ top: (-(nextSlide * vMargin)) + 'px' }, gcBase.config.speed);
            }
            var transitionendfn = $.proxy(function () {
                this.isAnimating = false;

                this.setupSlider();
            }, gcBase);

            transitionendfn.call();
        },
        mousemoveHandler: function (event) {
            var gcBase = this;

            if (event !== undefined) {
                if (gcBase.isTouchMove == true) {
                    if (event.originalEvent.touches.length == 1) {
                        var touch = event.originalEvent.touches[0];
                        gcBase.currentMousePos.x = touch.pageX;
                        gcBase.currentMousePos.y = touch.pageY;
                    }
                }
                else {
                    gcBase.currentMousePos.x = event.pageX;
                    gcBase.currentMousePos.y = event.pageY;
                }
            }

            if (gcBase.currentMousePos.x == -1 && gcBase.currentMousePos.y == -1) {
                return;
            }

            gcBase.calcMousePos(gcBase.currentMousePos);

            if ((gcBase.config.isSlowZoom == false) || (gcBase.config.isSlowZoom == true && event == undefined)) {
                gcBase.gcZoomDisplay.css({ 'top': gcBase.newZoom.top, 'left': gcBase.newZoom.left });
            }

            if ((gcBase.config.isSlowLens == false) || (gcBase.config.isSlowLens == true && event == undefined)) {
                gcBase.gcLens.css({ 'top': gcBase.newLens.top, 'left': gcBase.newLens.left });
            }
        },
        mouseenterHandler: function (event, oEventTrigger) {
            var gcBase = this;

            if (gcBase.isMouseEventsOn === false) return;

            if (oEventTrigger !== undefined) event = oEventTrigger;

            if (event !== undefined) {
                if (gcBase.isTouchMove === true) {
                    if (event.originalEvent.touches.length == 1) {
                        var touch = event.originalEvent.touches[0];
                        gcBase.currentMousePos.x = touch.pageX;
                        gcBase.currentMousePos.y = touch.pageY;
                    }
                }
                else {
                    gcBase.currentMousePos.x = event.pageX;
                    gcBase.currentMousePos.y = event.pageY;
                }
            }

            gcBase.calcMousePos(gcBase.currentMousePos);

            gcBase.currentZoom.top = gcBase.newZoom.top; gcBase.currentZoom.left = gcBase.newZoom.left;
            gcBase.currentLens.top = gcBase.newLens.top; gcBase.currentLens.left = gcBase.newLens.left;

            gcBase.gcZoomDisplay.css({ 'top': gcBase.newZoom.top, 'left': gcBase.newZoom.left });
            gcBase.gcLens.css({ 'top': gcBase.newLens.top, 'left': gcBase.newLens.left });

            if (gcBase.zooming == false) {
                if (gcBase.config.zoomPosition == 'inner' || gcBase.isAutoInnerZooming == true) {
                    gcBase.gcZoom.fadeIn(gcBase.config.speed);
                } else {
                    gcBase.gcLens.fadeIn(gcBase.config.speed);
                    gcBase.gcZoom.fadeIn(gcBase.config.speed);
                }
            }

            if (gcBase.config.isSlowZoom == true) {
                clearTimeout(gcBase.slowZoomTimer);
                gcBase.zoomSlowDown();
            }

            if (gcBase.config.isSlowLens == true) {
                clearTimeout(gcBase.slowLensTimer);
                gcBase.lensSlowDown();
            }

            gcBase.zooming = true;
        },
        mouseleaveHandler: function (event) {
            var gcBase = this;

            gcBase.gcLens.stop()
                         .hide();
            gcBase.gcZoom.stop()
                         .fadeOut(gcBase.config.speed);

            if (event !== undefined) {
                if (gcBase.isTouchMove == true) {
                    if (event.originalEvent.touches.length == 1) {
                        var touch = event.originalEvent.touches[0];
                        gcBase.currentMousePos.x = touch.pageX;
                        gcBase.currentMousePos.y = touch.pageY;
                    }
                }
                else {
                    gcBase.currentMousePos.x = event.pageX;
                    gcBase.currentMousePos.y = event.pageY;
                }
            }

            if (gcBase.config.isSlowZoom == true) {
                clearTimeout(gcBase.slowZoomTimer);
            }

            if (gcBase.config.isSlowLens == true) {
                clearTimeout(gcBase.slowLensTimer);
            }
            gcBase.zooming = false;
        },
        touchstartDC: function (event) {
            event.preventDefault();
        },
        touchmoveDC: function (event) {
            var gcBase = this;

            if (gcBase.isTouchMove == false) {
                gcBase.isTouchMove = true;
                gcBase.gcDisplayContainer.trigger('mouseenter.glasscase', event);
            }
            gcBase.mousemoveHandler(event);
            event.preventDefault();
        },
        touchendDC: function (event) {
            var gcBase = this;

            if (gcBase.isTouchMove == true) {
                gcBase.mouseleaveHandler(event);
                gcBase.isTouchMove = false;
            }
            else { gcBase.toggleOverlay(); }
            event.preventDefault();
        },
        calcMousePos: function (currentMousePos) {
            var gcBase = this;

            var imageContainerOffset = gcBase.gcDisplayContainer.offset();
            var mouseXRelative = gcBase.currentMousePos.x - imageContainerOffset.left,
                mouseYRelative = gcBase.currentMousePos.y - imageContainerOffset.top;

            var imageDisplayWidth = gcBase.gcDisplayDisplay.outerWidth(),
                imageDisplayHeight = gcBase.gcDisplayDisplay.outerHeight();

            var lensWidth = gcBase.gcLens.outerWidth(),
                lensHeight = gcBase.gcLens.outerHeight(),
                lensTop = mouseYRelative - Math.round(lensHeight / 2),
                lensLeft = mouseXRelative - Math.round(lensWidth / 2); // 2 -> the middle

            var ratio = gcBase.gcImageData[gcBase.current].width / imageDisplayWidth,
                zoomTop = -lensTop * ratio, zoomLeft = -lensLeft * ratio;

            if (mouseYRelative - lensHeight / 2 < 0) {
                lensTop = 0; zoomTop = 0;
            }

            if (mouseYRelative + lensHeight / 2 > 0 + imageDisplayHeight) {
                lensTop = imageDisplayHeight - lensHeight;

                zoomTop = -(gcBase.gcImageData[gcBase.current].height - gcBase.gcZoom.outerHeight());
            }

            if (mouseXRelative - lensWidth / 2 < 0) {
                lensLeft = 0;
                zoomLeft = 0;
            }

            if (mouseXRelative + lensWidth / 2 > 0 + imageDisplayWidth) {
                lensLeft = imageDisplayWidth - lensWidth;

                zoomLeft = -(gcBase.gcImageData[gcBase.current].width - gcBase.gcZoom.outerWidth());
            }

            gcBase.newZoom.left = zoomLeft;
            gcBase.newZoom.top = zoomTop;

            gcBase.newLens.left = lensLeft;
            gcBase.newLens.top = lensTop;
        },
        zoomSlowDown: function () {
            var gcBase = this;

            var diffZoomPos = { left: 0, top: 0 },
                moveZoomPos = { left: 0, top: 0 };

            //1. 
            diffZoomPos.left = gcBase.newZoom.left - gcBase.currentZoom.left;
            diffZoomPos.top = gcBase.newZoom.top - gcBase.currentZoom.top;

            //2.
            moveZoomPos.left = -diffZoomPos.left / (gcBase.config.speedSlowZoom / 100);
            moveZoomPos.top = -diffZoomPos.top / (gcBase.config.speedSlowZoom / 100);

            //3.
            gcBase.currentZoom.left = gcBase.currentZoom.left - moveZoomPos.left;
            gcBase.currentZoom.top = gcBase.currentZoom.top - moveZoomPos.top;

            //4.
            if (diffZoomPos.left < 1 && diffZoomPos.left > -1) {
                gcBase.currentZoom.left = gcBase.newZoom.left;
            }
            if (diffZoomPos.top < 1 && diffZoomPos.top > -1) {
                gcBase.currentZoom.top = gcBase.newZoom.top;
            }

            //5.
            gcBase.gcZoomDisplay.css({ 'top': gcBase.currentZoom.top, 'left': gcBase.currentZoom.left });

            gcBase.slowZoomTimer = setTimeout(function () { gcBase.zoomSlowDown(); }, 25);
        },
        lensSlowDown: function () {
            var gcBase = this;

            var diffLensPos = { left: 0, top: 0 },
                moveLensPos = { left: 0, top: 0 };

            //1.
            diffLensPos.left = gcBase.newLens.left - gcBase.currentLens.left;
            diffLensPos.top = gcBase.newLens.top - gcBase.currentLens.top;

            //2.
            moveLensPos.left = -diffLensPos.left / (gcBase.config.speedSlowLens / 100);
            moveLensPos.top = -diffLensPos.top / (gcBase.config.speedSlowLens / 100);

            //3.
            gcBase.currentLens.left = gcBase.currentLens.left - moveLensPos.left;
            gcBase.currentLens.top = gcBase.currentLens.top - moveLensPos.top;

            //4.
            if (diffLensPos.left < 1 && diffLensPos.left > -1) {
                gcBase.currentLens.left = gcBase.newLens.left;
            }
            if (diffLensPos.top < 1 && diffLensPos.top > -1) {
                gcBase.currentLens.top = gcBase.newLens.top;
            }

            //5.
            gcBase.gcLens.css('top', gcBase.currentLens.top);
            gcBase.gcLens.css('left', gcBase.currentLens.left);

            gcBase.slowLensTimer = setTimeout(function () { gcBase.lensSlowDown(); }, 25);
        },
        setupOverlay: function () {
            var gcBase = this;

            var isNatSizeSMScr = ((gcBase.gcImageData[gcBase.current].width <= gcBase.gcOverlayArea.outerWidth()) &&
                                  (gcBase.gcImageData[gcBase.current].height <= gcBase.gcOverlayArea.outerHeight()));

            gcBase.gcOverlayDisplay.attr('src', gcBase.gcDisplayDisplay.attr('src'))
                                   .attr('alt', gcBase.gcDisplayDisplay.attr('alt'));

            if (isNatSizeSMScr || (gcBase.config.isOverlayFullImage == true)) {

                gcBase.gcOverlayCompress.hide();
                gcBase.gcOverlayEnlarge.hide();
                gcBase.overlayNatSizes();
            }
            else {
                gcBase.gcOverlayCompress.hide();
                gcBase.gcOverlayEnlarge.show();
                gcBase.gcOverlayArea.removeClass('gc-natsize');
                gcBase.overlayFitSizes();
            }
        },
        overlayNatSizes: function () {
            var gcBase = this;
            var hOC = gcBase.gcOverlayContainer.outerHeight();
            var wOC = gcBase.gcOverlayContainer.outerWidth();

            gcBase.gcOverlayGContainer.removeClass('gc-overlay-fit');
            gcBase.gcOverlayDisplay.removeClass('gc-overlay-display-center gc-overlay-display-hcenter gc-overlay-display-vcenter');

            if (gcBase.gcImageData[gcBase.current].height <= hOC &&
                gcBase.gcImageData[gcBase.current].width <= wOC) {
                gcBase.gcOverlayDisplay.addClass('gc-overlay-display-center');
            } else {
                if (gcBase.gcImageData[gcBase.current].height <= hOC) {
                    gcBase.gcOverlayDisplay.addClass('gc-overlay-display-vcenter');
                }
                if (gcBase.gcImageData[gcBase.current].width <= wOC) {
                    gcBase.gcOverlayDisplay.addClass('gc-overlay-display-hcenter');
                }
            }
        },
        overlayFitSizes: function () {
            var gcBase = this;

            gcBase.gcOverlayGContainer.addClass('gc-overlay-fit');
            gcBase.gcOverlayDisplay.removeClass('gc-overlay-display-hcenter gc-overlay-display-vcenter')
                                   .addClass('gc-overlay-display-center');
        },
        toggleOverlayImgSize: function () {
            var gcBase = this;

            if (!gcBase.gcOverlayArea.hasClass('gc-natsize')) {
                gcBase.gcOverlayArea.addClass('gc-natsize');
                gcBase.gcOverlayEnlarge.hide();
                gcBase.gcOverlayCompress.show();
                gcBase.overlayNatSizes();
            }
            else {
                gcBase.gcOverlayEnlarge.show();
                gcBase.gcOverlayCompress.hide();
                gcBase.gcOverlayArea.removeClass('gc-natsize');
                gcBase.overlayFitSizes();
            }
        },
        toggleOverlay: function () {
            var gcBase = this;

            if ($('body').hasClass('gc-noscroll')) { //overlay on
                gcBase.fadeOutOverlay();
            }
            else {
                if (gcBase.config.isOverlayEnabled == false)
                    return;
                gcBase.gcOverlayArea.fadeIn(gcBase.config.speed);
                $('body').addClass('gc-noscroll');
                gcBase.setupOverlay();
            }
        },
        fadeOutOverlay: function () {
            var gcBase = this;

            $('body').removeClass('gc-noscroll');
            gcBase.gcOverlayArea.fadeOut(gcBase.config.speed);
        },
        resizeGC: function () {
            var gcBase = this;

            gcBase.element.css({ 'height': '0', 'width': '0' });
            gcBase.setup();
            gcBase.gcThumbsImg.each(function (index) {
                //2.
                gcBase.setupThumbImg(gcBase.gcThumbsLi.eq(index), index);

                //3.                            
                gcBase.removeLoader(gcBase.gcThumbsLi.eq(index));
                gcBase.gcThumbsLi.eq(index).find('.gc-li-display-container').removeClass('gc-hide');

                //4.
                if (gcBase.current == index) {
                    gcBase.removeLoader(gcBase.gcDisplayArea);
                    gcBase.gcDisplayContainer.removeClass('gc-hide');
                    gcBase.setupDisplayDisplay();
                    gcBase.setupLens();
                }
            });
            gcBase.update();

            if (!gcBase.config.isOverlayFullImage) {
                gcBase.setupOverlay();
            }
        },
        showDAIcons: function () {
            var gcBase = this;

            if (gcBase.gcTotalThumbsImg > 1) {
                gcBase.gcDisplayPrevious.show();
                gcBase.gcDisplayNext.show();
            }
            if (gcBase.config.isDownloadEnabled == true) { gcBase.gcDisplayDownload.show(); }
        },
        hideDAIcons: function () {
            var gcBase = this;

            if (gcBase.gcTotalThumbsImg > 1) {
                gcBase.gcDisplayPrevious.hide();
                gcBase.gcDisplayNext.hide();
            }
            if (gcBase.config.isDownloadEnabled == true) { gcBase.gcDisplayDownload.hide(); }
        },
        changeThumbs: function (index) {
            var gcBase = this;

            if (gcBase.current != index) {
                gcBase.old = gcBase.current;
                gcBase.current = index;
                gcBase.animateImage();
            }
        },
        initEvents: function () {
            var gcBase = this;
            //Display   
            if (gcBase.config.isZoomEnabled === true) {
                gcBase.isMouseEventsOn = true;
                gcBase.gcDisplayContainer.on('touchstart.glasscase', $.proxy(gcBase.touchstartDC, gcBase))
                                         .on('touchmove.glasscase', $.proxy(gcBase.touchmoveDC, gcBase))
                                         .on('touchend.glasscase', $.proxy(gcBase.touchendDC, gcBase));
                gcBase.gcDisplayContainer.on('mousemove.glasscase', $.proxy(gcBase.mousemoveHandler, gcBase))
                                         .on('mouseenter.glasscase', $.proxy(gcBase.mouseenterHandler, gcBase))
                                         .on('mouseenter.glasscase', $.proxy(gcBase.config.mouseEnterDisplayCB, gcBase))
                                         .on('mouseleave.glasscase', $.proxy(gcBase.mouseleaveHandler, gcBase))
                                         .on('mouseleave.glasscase', $.proxy(gcBase.config.mouseLeaveDisplayCB, gcBase));
            }

            if (gcBase.config.isShowAlwaysIcons != true) {
                gcBase.gcDisplayArea
                    .on('mouseenter.glasscaseDA', $.proxy(gcBase.showDAIcons, gcBase))
                    .on('mouseleave.glasscaseDA', $.proxy(gcBase.hideDAIcons, gcBase))
                    .on('mousemove.glasscaseDA', function (event) {
                        gcBase.showDAIcons();
                        clearTimeout(gcBase.mouseTimer);
                        gcBase.mouseTimer = setTimeout(function () { gcBase.hideDAIcons(); }, gcBase.config.speedHideIcons);
                    })
                    .on('touchmove.glasscaseDA', function (event) {
                        gcBase.showDAIcons();
                        clearTimeout(gcBase.mouseTimer);
                        gcBase.mouseTimer = setTimeout(function () { gcBase.hideDAIcons(); }, gcBase.config.speedHideIcons);
                        event.preventDefault();
                    });
            }

            gcBase.gcDisplayContainer.on('click.glasscase', function (event) {
                gcBase.toggleOverlay();
            });

            gcBase.gcDisplayDownload.on('click.glasscase', function (event) {
                var canvas = document.createElement('canvas');
                canvas.width = gcBase.gcImageData[gcBase.current].width;
                canvas.height = gcBase.gcImageData[gcBase.current].height;
                var context = canvas.getContext('2d');
                context.drawImage(gcBase.gcDisplayDisplay[0], 0, 0);
                var blob = new Blob();
                canvas.toBlob(function (blob) {
                    saveAs(
			                blob
			            , gcBase.gcDisplayDisplay.attr('src').replace(/^.*[\\\/]/, '')
		            );
                }, 'image/png');
            });
            gcBase.gcDisplayPrevious.on('click.glasscase', function (event) {
                gcBase.previousImage();
            });
            gcBase.gcDisplayNext.on('click.glasscase', function (event) {
                gcBase.nextImage();
            });
            //Overlay
            gcBase.gcOverlayPrevious.on('click.glasscase', function (event) {
                gcBase.previousImage();
            });
            gcBase.gcOverlayNext.on('click.glasscase', function (event) {
                gcBase.nextImage();
            });
            gcBase.gcOverlayClose.on('click.glasscase', function (event) {
                gcBase.toggleOverlay();
            });
            gcBase.gcOverlayContainer.on('click.glasscase', function (event) {
                gcBase.toggleOverlay();
            });
            gcBase.gcOverlayDisplay.on('mouseenter.glasscase', function (event) {
                gcBase.gcOverlayContainer.off('click.glasscase');
            });
            gcBase.gcOverlayDisplay.on('mouseleave.glasscase', function (event) {
                gcBase.gcOverlayContainer.on('click.glasscase', function (event) {
                    gcBase.toggleOverlay();
                });
            });
            if (!gcBase.config.isOverlayFullImage) {
                gcBase.gcOverlayDisplay.on('dblclick.glasscase', function (event) {
                    gcBase.toggleOverlayImgSize();
                });
                gcBase.gcOverlayEnlarge.on('click.glasscase', function (event) {
                    gcBase.toggleOverlayImgSize();
                });
                gcBase.gcOverlayCompress.on('click.glasscase', function (event) {
                    gcBase.toggleOverlayImgSize();
                });
            }
            //General
            $(document).on('keydown', function (event) {
                if (gcBase.config.isKeypressEnabled == true) {
                    if (event.keyCode == 37) { //<-
                        gcBase.previousImage();
                    }

                    if (event.keyCode == 39) {//->
                        gcBase.nextImage();
                    }
                }
                if (event.keyCode == 27) { //esc
                    gcBase.fadeOutOverlay();
                }
            });
            $(window).resize(function () {
                clearTimeout(gcBase.resizeTimer);
                gcBase.resizeTimer = setTimeout(function () { gcBase.resizeGC(); }, 100);
            });
            //Thumbs
            gcBase.gcThumbsLi.on('click.glasscase', function (event) {
                var idx = $(this).index(); gcBase.changeThumbs(idx);
            });
            if (gcBase.config.isHoverShowThumbs == true) {
                gcBase.gcThumbsLi.on('mouseenter', function (event) {
                    var idx = $(this).index(); gcBase.changeThumbs(idx);
                });
            }
            gcBase.gcThumbsAreaPrevious.on('click.glasscase', function (event) {
                gcBase.slide('false', 'previous');
            });
            gcBase.gcThumbsAreaNext.on('click.glasscase', function (event) {
                gcBase.slide('false', 'next');
            });
        }
    };

    //4. Attaching the plugin to the $ object
    $.fn.glassCase = function (options) {
        this.each(function () {
            var instance = $.data(this, 'gcglasscase');
            if (!instance) {
                $.data(this, 'gcglasscase', new GlassCase($(this), options));
            }
        });
    };

})(jQuery, window, document);