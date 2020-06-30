(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{182:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[s("em",[s("a",{attrs:{href:"https://www.lipsurf.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("LipSurf"),s("OutboundLink")],1),t._v(" plugins are like "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Userscript",target:"_blank",rel:"noopener noreferrer"}},[t._v("UserScripts"),s("OutboundLink")],1),t._v(" (eg. GreaseMonkey et al.) for voice.")])]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("If you were looking for the user manual, "),s("a",{attrs:{href:"https://help.lipsurf.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("see here"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(2),t._v(" "),s("p",[s("a",{attrs:{href:"https://chrome.google.com/webstore/detail/lipsurf/lnnmjmalakahagblkkcnjkoaihlfglon",target:"_blank",rel:"noopener noreferrer"}},[t._v("LipSurf"),s("OutboundLink")],1),t._v(" is a Google Chrome extension that enables users to browse with their voice — augmenting the mouse/keyboard paradigm, enabling hands-free productivity. This serves many purposes:")]),t._v(" "),s("ul",[s("li",[t._v("Using the computer while your hands are dirty or busy (eating, cleaning etc.)")]),t._v(" "),s("li",[t._v("Enabling those with physical impairments or those wishing to prevent repetitive strain injury ("),s("a",{attrs:{href:"https://www.nhs.uk/conditions/repetitive-strain-injury-rsi/",target:"_blank",rel:"noopener noreferrer"}},[t._v("RSI"),s("OutboundLink")],1),t._v(") of the hands")]),t._v(" "),t._m(3),t._v(" "),s("li",[t._v("Enabling one to be far from the computer keyboard/mouse (eg. media center PCs)")])]),t._v(" "),t._m(4),t._v(" "),s("ul",[s("li",[t._v("Extensible architecture")]),t._v(" "),s("li",[t._v("Simple, declarative plugins")]),t._v(" "),s("li",[t._v("Command chaining")]),t._v(" "),s("li",[t._v("Supports "),s("router-link",{attrs:{to:"/langs.html"}},[t._v("100+ languages")])],1),t._v(" "),s("li",[t._v("Testing is built-in")])]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[this._v("#")]),this._v(" Overview")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Firstly, "),e("em",[e("strong",[this._v("prohst")])]),this._v(" to you! By nature of being on this page, I can tell you have exquisite taste for software!")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"what-are-you-talking-about"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-are-you-talking-about"}},[this._v("#")]),this._v(" What are you talking about?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Creating quick shortcuts for complex motions (eg. "),e("span",{staticClass:"voice-cmd"},[this._v("compose mail to John")]),this._v(" can open up a prefilled email message on Gmail faster than traditional browser navigation)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"features"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[this._v("#")]),this._v(" Features")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"quick-complete-example-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quick-complete-example-plugin"}},[this._v("#")]),this._v(" Quick Complete Example Plugin")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Writing your own plugins for LipSurf is "),e("em",[this._v("pleasurably")]),this._v(" straightforward.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// <reference types="lipsurf-types/extension"/>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" PluginBase"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" IPluginBase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IPluginBase "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" IPlugin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("PluginBase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    niceName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Gmail'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    match"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^https:\\/\\/mail\\.google\\.com/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    commands"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Compose Mail'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        description"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Open the new email composition form in Gmail.'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        global"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        match"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'compose mail'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'write new mail'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("pageFn")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://mail.google.com/mail/?view=cm&fs=1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);e.default=n.exports}}]);