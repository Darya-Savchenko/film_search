!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("request-dispatcher",[],e)}(function(e,t){"use strict";var r=void 0;t.get=function(e,t){return r.getAsync(e,t)},t.post=function(e,t){return r.postAsync(e,t)},t.put=function(e,t){return r.putAsync(e,t)},t.remove=function(e,t){return r.removeAsync(e,t)},t.REQUEST_DONE_READY_STATE=4,t.setProvider=function(e){r=e}}),function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define("transient-fault-policy",["require","exports"],e)}(function(e,t){"use strict";function r(e){return 0===e.status}function n(e){return e instanceof XMLHttpRequest}function o(e,t){return t.test(e.status)}var u={success:/^(2)\d{2}/,redirection:/^(3)\d{2}/,serverError:/^(5)\d{2}/};t.isWebApiSuccess=function(e){return!!n(e)&&(o(e,u.success)||o(e,u.redirection))},t.isTransientFailure=function(e){return!!n(e)&&(r(e)||o(e,u.serverError))}});
//# sourceMappingURL=[[staticsPath]]/hashed/requestDispatcher-8584451.js.map