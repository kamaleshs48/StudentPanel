﻿! function (e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    r.m = e, r.c = t, r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var o in e) r.d(n, o, function (t) {
                return e[t]
            }.bind(null, o));
        return n
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 0)
}([function (e, t, r) {
    window.SpeechSDK = r(1)
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(2);
    r(4).Events.instance.attachListener(new n.ConsoleLoggingListener),
        function (e) {
            for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r])
        }(r(30))
}, function (e, t, r) {
    "use strict";

    function n(e) {
        for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n(r(3)), n(r(23)), n(r(139)), n(r(140)), n(r(141)), n(r(142)), n(r(152)), n(r(153))
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(4),
        o = function (e) {
            var t = this;
            void 0 === e && (e = n.EventType.Warning), this.onEvent = function (e) {
                if (e.eventType >= t.privLogLevelFilter) {
                    var r = t.toString(e);
                    switch (e.eventType) {
                        case n.EventType.Debug:
                            console.debug(r);
                            break;
                        case n.EventType.Info:
                            console.info(r);
                            break;
                        case n.EventType.Warning:
                            console.warn(r);
                            break;
                        case n.EventType.Error:
                            console.error(r);
                            break;
                        default:
                            console.log(r)
                    }
                }
            }, this.toString = function (e) {
                var t = ["" + e.EventTime, "" + e.Name];
                for (var r in e)
                    if (r && e.hasOwnProperty(r) && "eventTime" !== r && "eventType" !== r && "eventId" !== r && "name" !== r && "constructor" !== r) {
                        var n = e[r],
                            o = "<NULL>";
                        null != n && (o = "number" == typeof n || "string" == typeof n ? n.toString() : JSON.stringify(n)), t.push(r + ": " + o)
                    } return t.join(" | ")
            }, this.privLogLevelFilter = e
        };
    t.ConsoleLoggingListener = o
}, function (e, t, r) {
    "use strict";

    function n(e) {
        for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n(r(5)), n(r(8)), n(r(9)), n(r(11)), n(r(10)), n(r(12)), n(r(13)), n(r(7)), n(r(14)), n(r(15)), n(r(6)), n(r(16)), n(r(17)), n(r(18)), n(r(19)), n(r(20));
    var o = r(21);
    t.TranslationStatus = o.TranslationStatus, n(r(22))
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(6),
        s = function (e) {
            function t(t, r, n) {
                void 0 === n && (n = i.EventType.Info);
                var o = e.call(this, t, n) || this;
                return o.privAudioSourceId = r, o
            }
            return o(t, e), Object.defineProperty(t.prototype, "audioSourceId", {
                get: function () {
                    return this.privAudioSourceId
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(i.PlatformEvent);
    t.AudioSourceEvent = s;
    var a = function (e) {
        function t(t) {
            return e.call(this, "AudioSourceInitializingEvent", t) || this
        }
        return o(t, e), t
    }(s);
    t.AudioSourceInitializingEvent = a;
    var c = function (e) {
        function t(t) {
            return e.call(this, "AudioSourceReadyEvent", t) || this
        }
        return o(t, e), t
    }(s);
    t.AudioSourceReadyEvent = c;
    var p = function (e) {
        function t(t) {
            return e.call(this, "AudioSourceOffEvent", t) || this
        }
        return o(t, e), t
    }(s);
    t.AudioSourceOffEvent = p;
    var u = function (e) {
        function t(t, r) {
            var n = e.call(this, "AudioSourceErrorEvent", t, i.EventType.Error) || this;
            return n.privError = r, n
        }
        return o(t, e), Object.defineProperty(t.prototype, "error", {
            get: function () {
                return this.privError
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(s);
    t.AudioSourceErrorEvent = u;
    var v = function (e) {
        function t(t, r, n) {
            var o = e.call(this, t, r) || this;
            return o.privAudioNodeId = n, o
        }
        return o(t, e), Object.defineProperty(t.prototype, "audioNodeId", {
            get: function () {
                return this.privAudioNodeId
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(s);
    t.AudioStreamNodeEvent = v;
    var l = function (e) {
        function t(t, r) {
            return e.call(this, "AudioStreamNodeAttachingEvent", t, r) || this
        }
        return o(t, e), t
    }(v);
    t.AudioStreamNodeAttachingEvent = l;
    var f = function (e) {
        function t(t, r) {
            return e.call(this, "AudioStreamNodeAttachedEvent", t, r) || this
        }
        return o(t, e), t
    }(v);
    t.AudioStreamNodeAttachedEvent = f;
    var h = function (e) {
        function t(t, r) {
            return e.call(this, "AudioStreamNodeDetachedEvent", t, r) || this
        }
        return o(t, e), t
    }(v);
    t.AudioStreamNodeDetachedEvent = h;
    var d = function (e) {
        function t(t, r, n) {
            var o = e.call(this, "AudioStreamNodeErrorEvent", t, r) || this;
            return o.privError = n, o
        }
        return o(t, e), Object.defineProperty(t.prototype, "error", {
            get: function () {
                return this.privError
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(v);
    t.AudioStreamNodeErrorEvent = d
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(7);
    ! function (e) {
        e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warning = 2] = "Warning", e[e.Error = 3] = "Error"
    }(t.EventType || (t.EventType = {}));
    var o = function () {
        function e(e, t) {
            this.privName = e, this.privEventId = n.createNoDashGuid(), this.privEventTime = (new Date).toISOString(), this.privEventType = t, this.privMetadata = {}
        }
        return Object.defineProperty(e.prototype, "name", {
            get: function () {
                return this.privName
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "eventId", {
            get: function () {
                return this.privEventId
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "eventTime", {
            get: function () {
                return this.privEventTime
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "eventType", {
            get: function () {
                return this.privEventType
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "metadata", {
            get: function () {
                return this.privMetadata
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.PlatformEvent = o
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function () {
        var e = (new Date).getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function (t) {
            var r = (e + 16 * Math.random()) % 16 | 0;
            return e = Math.floor(e / 16), ("x" === t ? r : 3 & r | 8).toString(16)
        }))
    };
    t.createGuid = n;
    t.createNoDashGuid = function () {
        return n().replace(new RegExp("-", "g"), "").toUpperCase()
    }
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(6),
        s = function (e) {
            function t(t, r, n) {
                void 0 === n && (n = i.EventType.Info);
                var o = e.call(this, t, n) || this;
                return o.privJsonResult = r, o
            }
            return o(t, e), Object.defineProperty(t.prototype, "jsonString", {
                get: function () {
                    return this.privJsonResult
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(i.PlatformEvent);
    t.ServiceEvent = s;
    var a = function (e) {
        function t(t, r, n) {
            void 0 === n && (n = i.EventType.Info);
            var o = e.call(this, t, n) || this;
            return o.privConnectionId = r, o
        }
        return o(t, e), Object.defineProperty(t.prototype, "connectionId", {
            get: function () {
                return this.privConnectionId
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(i.PlatformEvent);
    t.ConnectionEvent = a;
    var c = function (e) {
        function t(t, r, n) {
            var o = e.call(this, "ConnectionStartEvent", t) || this;
            return o.privUri = r, o.privHeaders = n, o
        }
        return o(t, e), Object.defineProperty(t.prototype, "uri", {
            get: function () {
                return this.privUri
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "headers", {
            get: function () {
                return this.privHeaders
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(a);
    t.ConnectionStartEvent = c;
    var p = function (e) {
        function t(t, r) {
            return e.call(this, "ConnectionEstablishedEvent", t) || this
        }
        return o(t, e), t
    }(a);
    t.ConnectionEstablishedEvent = p;
    var u = function (e) {
        function t(t, r, n) {
            var o = e.call(this, "ConnectionClosedEvent", t, i.EventType.Debug) || this;
            return o.privRreason = n, o.privStatusCode = r, o
        }
        return o(t, e), Object.defineProperty(t.prototype, "reason", {
            get: function () {
                return this.privRreason
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "statusCode", {
            get: function () {
                return this.privStatusCode
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(a);
    t.ConnectionClosedEvent = u;
    var v = function (e) {
        function t(t, r, n) {
            var o = e.call(this, "ConnectionEstablishErrorEvent", t, i.EventType.Error) || this;
            return o.privStatusCode = r, o.privReason = n, o
        }
        return o(t, e), Object.defineProperty(t.prototype, "reason", {
            get: function () {
                return this.privReason
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "statusCode", {
            get: function () {
                return this.privStatusCode
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(a);
    t.ConnectionEstablishErrorEvent = v;
    var l = function (e) {
        function t(t, r, n) {
            var o = e.call(this, "ConnectionMessageReceivedEvent", t) || this;
            return o.privNetworkReceivedTime = r, o.privMessage = n, o
        }
        return o(t, e), Object.defineProperty(t.prototype, "networkReceivedTime", {
            get: function () {
                return this.privNetworkReceivedTime
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "message", {
            get: function () {
                return this.privMessage
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(a);
    t.ConnectionMessageReceivedEvent = l;
    var f = function (e) {
        function t(t, r, n) {
            var o = e.call(this, "ConnectionMessageSentEvent", t) || this;
            return o.privNetworkSentTime = r, o.privMessage = n, o
        }
        return o(t, e), Object.defineProperty(t.prototype, "networkSentTime", {
            get: function () {
                return this.privNetworkSentTime
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "message", {
            get: function () {
                return this.privMessage
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(a);
    t.ConnectionMessageSentEvent = f
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n, o = r(10),
        i = r(7);
    ! function (e) {
        e[e.Text = 0] = "Text", e[e.Binary = 1] = "Binary"
    }(n = t.MessageType || (t.MessageType = {}));
    var s = function () {
        function e(e, t, r, s) {
            if (this.privBody = null, e === n.Text && t && "string" != typeof t) throw new o.InvalidOperationError("Payload must be a string");
            if (e === n.Binary && t && !(t instanceof ArrayBuffer)) throw new o.InvalidOperationError("Payload must be ArrayBuffer");
            switch (this.privMessageType = e, this.privBody = t, this.privHeaders = r || {}, this.privId = s || i.createNoDashGuid(), this.messageType) {
                case n.Binary:
                    this.privSize = null !== this.binaryBody ? this.binaryBody.byteLength : 0;
                    break;
                case n.Text:
                    this.privSize = this.textBody.length
            }
        }
        return Object.defineProperty(e.prototype, "messageType", {
            get: function () {
                return this.privMessageType
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "headers", {
            get: function () {
                return this.privHeaders
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "body", {
            get: function () {
                return this.privBody
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "textBody", {
            get: function () {
                if (this.privMessageType === n.Binary) throw new o.InvalidOperationError("Not supported for binary message");
                return this.privBody
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "binaryBody", {
            get: function () {
                if (this.privMessageType === n.Text) throw new o.InvalidOperationError("Not supported for text message");
                return this.privBody
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "id", {
            get: function () {
                return this.privId
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.ConnectionMessage = s
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function (e) {
        function t(t) {
            var r = e.call(this, t) || this;
            return r.name = "ArgumentNull", r.message = t, r
        }
        return o(t, e), t
    }(Error);
    t.ArgumentNullError = i;
    var s = function (e) {
        function t(t) {
            var r = e.call(this, t) || this;
            return r.name = "InvalidOperation", r.message = t, r
        }
        return o(t, e), t
    }(Error);
    t.InvalidOperationError = s;
    var a = function (e) {
        function t(t, r) {
            var n = e.call(this, r) || this;
            return n.name = t + "ObjectDisposed", n.message = r, n
        }
        return o(t, e), t
    }(Error);
    t.ObjectDisposedError = a
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function () {
        function e(e, t) {
            this.privStatusCode = e, this.privReason = t
        }
        return Object.defineProperty(e.prototype, "statusCode", {
            get: function () {
                return this.privStatusCode
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "reason", {
            get: function () {
                return this.privReason
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.ConnectionOpenResponse = n
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(10),
        o = r(13),
        i = function () {
            function e() { }
            return Object.defineProperty(e, "instance", {
                get: function () {
                    return e.privInstance
                },
                enumerable: !0,
                configurable: !0
            }), e.privInstance = new o.EventSource, e.setEventSource = function (t) {
                if (!t) throw new n.ArgumentNullError("eventSource");
                e.privInstance = t
            }, e
        }();
    t.Events = i
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(10),
        o = r(7),
        i = function () {
            function e(e) {
                var t = this;
                this.privEventListeners = {}, this.privIsDisposed = !1, this.onEvent = function (e) {
                    if (t.isDisposed()) throw new n.ObjectDisposedError("EventSource");
                    if (t.metadata)
                        for (var r in t.metadata) r && e.metadata && (e.metadata[r] || (e.metadata[r] = t.metadata[r]));
                    for (var o in t.privEventListeners) o && t.privEventListeners[o] && t.privEventListeners[o](e)
                }, this.attach = function (e) {
                    var r = o.createNoDashGuid();
                    return t.privEventListeners[r] = e, {
                        detach: function () {
                            delete t.privEventListeners[r]
                        }
                    }
                }, this.attachListener = function (e) {
                    return t.attach(e.onEvent)
                }, this.isDisposed = function () {
                    return t.privIsDisposed
                }, this.dispose = function () {
                    t.privEventListeners = null, t.privIsDisposed = !0
                }, this.privMetadata = e
            }
            return Object.defineProperty(e.prototype, "metadata", {
                get: function () {
                    return this.privMetadata
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
    t.EventSource = i
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
        function (e) {
            e[e.None = 0] = "None", e[e.Connected = 1] = "Connected", e[e.Connecting = 2] = "Connecting", e[e.Disconnected = 3] = "Disconnected"
        }(t.ConnectionState || (t.ConnectionState = {}))
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(10),
        o = function e(t) {
            var r = this;
            if (this.privSubscriptionIdCounter = 0, this.privAddSubscriptions = {}, this.privRemoveSubscriptions = {}, this.privDisposedSubscriptions = {}, this.privDisposeReason = null, this.get = function (e) {
                return r.throwIfDisposed(), r.privList[e]
            }, this.first = function () {
                return r.get(0)
            }, this.last = function () {
                return r.get(r.length() - 1)
            }, this.add = function (e) {
                r.throwIfDisposed(), r.insertAt(r.privList.length, e)
            }, this.insertAt = function (e, t) {
                r.throwIfDisposed(), 0 === e ? r.privList.unshift(t) : e === r.privList.length ? r.privList.push(t) : r.privList.splice(e, 0, t), r.triggerSubscriptions(r.privAddSubscriptions)
            }, this.removeFirst = function () {
                return r.throwIfDisposed(), r.removeAt(0)
            }, this.removeLast = function () {
                return r.throwIfDisposed(), r.removeAt(r.length() - 1)
            }, this.removeAt = function (e) {
                return r.throwIfDisposed(), r.remove(e, 1)[0]
            }, this.remove = function (e, t) {
                r.throwIfDisposed();
                var n = r.privList.splice(e, t);
                return r.triggerSubscriptions(r.privRemoveSubscriptions), n
            }, this.clear = function () {
                r.throwIfDisposed(), r.remove(0, r.length())
            }, this.length = function () {
                return r.throwIfDisposed(), r.privList.length
            }, this.onAdded = function (e) {
                r.throwIfDisposed();
                var t = r.privSubscriptionIdCounter++;
                return r.privAddSubscriptions[t] = e, {
                    detach: function () {
                        delete r.privAddSubscriptions[t]
                    }
                }
            }, this.onRemoved = function (e) {
                r.throwIfDisposed();
                var t = r.privSubscriptionIdCounter++;
                return r.privRemoveSubscriptions[t] = e, {
                    detach: function () {
                        delete r.privRemoveSubscriptions[t]
                    }
                }
            }, this.onDisposed = function (e) {
                r.throwIfDisposed();
                var t = r.privSubscriptionIdCounter++;
                return r.privDisposedSubscriptions[t] = e, {
                    detach: function () {
                        delete r.privDisposedSubscriptions[t]
                    }
                }
            }, this.join = function (e) {
                return r.throwIfDisposed(), r.privList.join(e)
            }, this.toArray = function () {
                var e = Array();
                return r.privList.forEach((function (t) {
                    e.push(t)
                })), e
            }, this.any = function (e) {
                return r.throwIfDisposed(), e ? r.where(e).length() > 0 : r.length() > 0
            }, this.all = function (e) {
                return r.throwIfDisposed(), r.where(e).length() === r.length()
            }, this.forEach = function (e) {
                r.throwIfDisposed();
                for (var t = 0; t < r.length(); t++) e(r.privList[t], t)
            }, this.select = function (t) {
                r.throwIfDisposed();
                for (var n = [], o = 0; o < r.privList.length; o++) n.push(t(r.privList[o], o));
                return new e(n)
            }, this.where = function (t) {
                r.throwIfDisposed();
                for (var n = new e, o = 0; o < r.privList.length; o++) t(r.privList[o], o) && n.add(r.privList[o]);
                return n
            }, this.orderBy = function (t) {
                return r.throwIfDisposed(), new e(r.toArray().sort(t))
            }, this.orderByDesc = function (e) {
                return r.throwIfDisposed(), r.orderBy((function (t, r) {
                    return e(r, t)
                }))
            }, this.clone = function () {
                return r.throwIfDisposed(), new e(r.toArray())
            }, this.concat = function (t) {
                return r.throwIfDisposed(), new e(r.privList.concat(t.toArray()))
            }, this.concatArray = function (t) {
                return r.throwIfDisposed(), new e(r.privList.concat(t))
            }, this.isDisposed = function () {
                return null == r.privList
            }, this.dispose = function (e) {
                r.isDisposed() || (r.privDisposeReason = e, r.privList = null, r.privAddSubscriptions = null, r.privRemoveSubscriptions = null, r.triggerSubscriptions(r.privDisposedSubscriptions))
            }, this.throwIfDisposed = function () {
                if (r.isDisposed()) throw new n.ObjectDisposedError("List", r.privDisposeReason)
            }, this.triggerSubscriptions = function (e) {
                if (e)
                    for (var t in e) t && e[t]()
            }, this.privList = [], t)
                for (var o = 0, i = t; o < i.length; o++) {
                    var s = i[o];
                    this.privList.push(s)
                }
        };
    t.List = o
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n, o = r(10);
    ! function (e) {
        e[e.None = 0] = "None", e[e.Resolved = 1] = "Resolved", e[e.Rejected = 2] = "Rejected"
    }(n = t.PromiseState || (t.PromiseState = {}));
    var i = function () {
        function e(e) {
            var t = this;
            this.throwIfError = function () {
                if (t.isError) throw t.error
            }, e.on((function (e) {
                t.privIsCompleted || (t.privIsCompleted = !0, t.privIsError = !1, t.privResult = e)
            }), (function (e) {
                t.privIsCompleted || (t.privIsCompleted = !0, t.privIsError = !0, t.privError = e)
            }))
        }
        return Object.defineProperty(e.prototype, "isCompleted", {
            get: function () {
                return this.privIsCompleted
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "isError", {
            get: function () {
                return this.privIsError
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "error", {
            get: function () {
                return this.privError
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "result", {
            get: function () {
                return this.privResult
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.PromiseResult = i;
    var s = function () {
        var e = this;
        this.setResult = function (t) {
            e.privOnSetResult(t)
        }, this.setError = function (t) {
            e.privOnSetError(t)
        }, this.on = function (t, r) {
            e.privOnSetResult = t, e.privOnSetError = r
        }
    };
    t.PromiseResultEventSource = s;
    var a = function () {
        function e() { }
        return e.whenAll = function (e) {
            if (!e || 0 === e.length) throw new o.ArgumentNullError("promises");
            for (var t = new p, r = [], n = 0, i = function () {
                ++n === e.length && (0 === r.length ? t.resolve(!0) : t.reject(r.join(", ")))
            }, s = 0, a = e; s < a.length; s++) {
                a[s].on((function (e) {
                    i()
                }), (function (e) {
                    r.push(e), i()
                }))
            }
            return t.promise()
        }, e.fromResult = function (e) {
            var t = new p;
            return t.resolve(e), t.promise()
        }, e.fromError = function (e) {
            var t = new p;
            return t.reject(e), t.promise()
        }, e
    }();
    t.PromiseHelper = a;
    var c = function (e) {
        var t = this;
        this.result = function () {
            return t.privSink.result
        }, this.continueWith = function (e) {
            if (!e) throw new o.ArgumentNullError("continuationCallback");
            var r = new p;
            return t.privSink.on((function (n) {
                try {
                    var o = e(t.privSink.result);
                    r.resolve(o)
                } catch (e) {
                    r.reject(e)
                }
            }), (function (n) {
                try {
                    var o = e(t.privSink.result);
                    r.resolve(o)
                } catch (e) {
                    r.reject("'Error handler for error " + n + " threw error " + e + "'")
                }
            })), r.promise()
        }, this.onSuccessContinueWith = function (e) {
            if (!e) throw new o.ArgumentNullError("continuationCallback");
            var r = new p;
            return t.privSink.on((function (t) {
                try {
                    var n = e(t);
                    r.resolve(n)
                } catch (e) {
                    r.reject(e)
                }
            }), (function (e) {
                r.reject(e)
            })), r.promise()
        }, this.continueWithPromise = function (e) {
            if (!e) throw new o.ArgumentNullError("continuationCallback");
            var r = new p;
            return t.privSink.on((function (n) {
                try {
                    var o = e(t.privSink.result);
                    if (!o) throw new Error("'Continuation callback did not return promise'");
                    o.on((function (e) {
                        r.resolve(e)
                    }), (function (e) {
                        r.reject(e)
                    }))
                } catch (e) {
                    r.reject(e)
                }
            }), (function (n) {
                try {
                    var o = e(t.privSink.result);
                    if (!o) throw new Error("Continuation callback did not return promise");
                    o.on((function (e) {
                        r.resolve(e)
                    }), (function (e) {
                        r.reject(e)
                    }))
                } catch (e) {
                    r.reject("'Error handler for error " + n + " threw error " + e + "'")
                }
            })), r.promise()
        }, this.onSuccessContinueWithPromise = function (e) {
            if (!e) throw new o.ArgumentNullError("continuationCallback");
            var r = new p;
            return t.privSink.on((function (t) {
                try {
                    var n = e(t);
                    if (!n) throw new Error("Continuation callback did not return promise");
                    n.on((function (e) {
                        r.resolve(e)
                    }), (function (e) {
                        r.reject(e)
                    }))
                } catch (e) {
                    r.reject(e)
                }
            }), (function (e) {
                r.reject(e)
            })), r.promise()
        }, this.on = function (e, r) {
            if (!e) throw new o.ArgumentNullError("successCallback");
            if (!r) throw new o.ArgumentNullError("errorCallback");
            return t.privSink.on(e, r), t
        }, this.finally = function (e) {
            if (!e) throw new o.ArgumentNullError("callback");
            var r = function (t) {
                e()
            };
            return t.on(r, r)
        }, this.privSink = e
    };
    t.Promise = c;
    var p = function () {
        var e = this;
        this.state = function () {
            return e.privSink.state
        }, this.promise = function () {
            return e.privPromise
        }, this.resolve = function (t) {
            return e.privSink.resolve(t), e
        }, this.reject = function (t) {
            return e.privSink.reject(t), e
        }, this.privSink = new u, this.privPromise = new c(this.privSink)
    };
    t.Deferred = p;
    var u = function () {
        function e() {
            var e = this;
            this.privState = n.None, this.privPromiseResult = null, this.privPromiseResultEvents = null, this.privSuccessHandlers = [], this.privErrorHandlers = [], this.resolve = function (t) {
                if (e.privState !== n.None) throw new Error("'Cannot resolve a completed promise'");
                e.privState = n.Resolved, e.privPromiseResultEvents.setResult(t);
                for (var r = 0; r < e.privSuccessHandlers.length; r++) e.executeSuccessCallback(t, e.privSuccessHandlers[r], e.privErrorHandlers[r]);
                e.detachHandlers()
            }, this.reject = function (t) {
                if (e.privState !== n.None) throw new Error("'Cannot reject a completed promise'");
                e.privState = n.Rejected, e.privPromiseResultEvents.setError(t);
                for (var r = 0, o = e.privErrorHandlers; r < o.length; r++) {
                    var i = o[r];
                    e.executeErrorCallback(t, i)
                }
                e.detachHandlers()
            }, this.on = function (t, r) {
                null == t && (t = function (e) { }), e.privState === n.None ? (e.privSuccessHandlers.push(t), e.privErrorHandlers.push(r)) : (e.privState === n.Resolved ? e.executeSuccessCallback(e.privPromiseResult.result, t, r) : e.privState === n.Rejected && e.executeErrorCallback(e.privPromiseResult.error, r), e.detachHandlers())
            }, this.executeSuccessCallback = function (t, r, n) {
                try {
                    r(t)
                } catch (t) {
                    e.executeErrorCallback("'Unhandled callback error: " + t + "'", n)
                }
            }, this.executeErrorCallback = function (e, t) {
                if (!t) throw new Error("'Unhandled error: " + e + "'");
                try {
                    t(e)
                } catch (t) {
                    throw new Error("'Unhandled callback error: " + t + ". InnerError: " + e + "'")
                }
            }, this.detachHandlers = function () {
                e.privErrorHandlers = [], e.privSuccessHandlers = []
            }, this.privPromiseResultEvents = new s, this.privPromiseResult = new i(this.privPromiseResultEvents)
        }
        return Object.defineProperty(e.prototype, "state", {
            get: function () {
                return this.privState
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "result", {
            get: function () {
                return this.privPromiseResult
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.Sink = u
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n, o = r(10),
        i = r(15),
        s = r(16);
    ! function (e) {
        e[e.Dequeue = 0] = "Dequeue", e[e.Peek = 1] = "Peek"
    }(n || (n = {}));
    var a = function (e) {
        var t = this;
        this.privPromiseStore = new i.List, this.privIsDrainInProgress = !1, this.privIsDisposing = !1, this.privDisposeReason = null, this.enqueue = function (e) {
            t.throwIfDispose(), t.enqueueFromPromise(s.PromiseHelper.fromResult(e))
        }, this.enqueueFromPromise = function (e) {
            t.throwIfDispose(), t.privPromiseStore.add(e), e.finally((function () {
                for (; t.privPromiseStore.length() > 0 && t.privPromiseStore.first().result().isCompleted;) {
                    var e = t.privPromiseStore.removeFirst();
                    e.result().isError || t.privList.add(e.result().result)
                }
            }))
        }, this.dequeue = function () {
            t.throwIfDispose();
            var e = new s.Deferred;
            return t.privSubscribers && (t.privSubscribers.add({
                deferral: e,
                type: n.Dequeue
            }), t.drain()), e.promise()
        }, this.peek = function () {
            t.throwIfDispose();
            var e = new s.Deferred;
            return t.privSubscribers && (t.privSubscribers.add({
                deferral: e,
                type: n.Peek
            }), t.drain()), e.promise()
        }, this.length = function () {
            return t.throwIfDispose(), t.privList.length()
        }, this.isDisposed = function () {
            return null == t.privSubscribers
        }, this.drainAndDispose = function (e, r) {
            if (!t.isDisposed() && !t.privIsDisposing) {
                t.privDisposeReason = r, t.privIsDisposing = !0;
                var n = t.privSubscribers;
                if (n) {
                    for (; n.length() > 0;) n.removeFirst().deferral.resolve(void 0);
                    t.privSubscribers === n && (t.privSubscribers = n)
                }
                for (var o = 0, i = t.privDetachables; o < i.length; o++) i[o].detach();
                if (t.privPromiseStore.length() > 0 && e) return s.PromiseHelper.whenAll(t.privPromiseStore.toArray()).continueWith((function () {
                    return t.privSubscribers = null, t.privList.forEach((function (t, r) {
                        e(t)
                    })), t.privList = null, !0
                }));
                t.privSubscribers = null, t.privList = null
            }
            return s.PromiseHelper.fromResult(!0)
        }, this.dispose = function (e) {
            t.drainAndDispose(null, e)
        }, this.drain = function () {
            if (!t.privIsDrainInProgress && !t.privIsDisposing) {
                t.privIsDrainInProgress = !0;
                var e = t.privSubscribers,
                    r = t.privList;
                if (e && r) {
                    for (; r.length() > 0 && e.length() > 0 && !t.privIsDisposing;) {
                        var o = e.removeFirst();
                        if (o.type === n.Peek) o.deferral.resolve(r.first());
                        else {
                            var i = r.removeFirst();
                            o.deferral.resolve(i)
                        }
                    }
                    t.privSubscribers === e && (t.privSubscribers = e), t.privList === r && (t.privList = r)
                }
                t.privIsDrainInProgress = !1
            }
        }, this.throwIfDispose = function () {
            if (t.isDisposed()) {
                if (t.privDisposeReason) throw new o.InvalidOperationError(t.privDisposeReason);
                throw new o.ObjectDisposedError("Queue")
            }
            if (t.privIsDisposing) throw new o.InvalidOperationError("Queue disposing")
        }, this.privList = e || new i.List, this.privDetachables = [], this.privSubscribers = new i.List, this.privDetachables.push(this.privList.onAdded(this.drain))
    };
    t.Queue = a
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(9),
        o = r(10),
        i = r(7),
        s = function () {
            function e(e, t, r) {
                if (this.privPayload = null, !t) throw new o.ArgumentNullError("payload");
                if (e === n.MessageType.Binary && !(t instanceof ArrayBuffer)) throw new o.InvalidOperationError("Payload must be ArrayBuffer");
                if (e === n.MessageType.Text && "string" != typeof t) throw new o.InvalidOperationError("Payload must be a string");
                this.privMessageType = e, this.privPayload = t, this.privId = r || i.createNoDashGuid()
            }
            return Object.defineProperty(e.prototype, "messageType", {
                get: function () {
                    return this.privMessageType
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "payload", {
                get: function () {
                    return this.privPayload
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "textContent", {
                get: function () {
                    if (this.privMessageType === n.MessageType.Binary) throw new o.InvalidOperationError("Not supported for binary message");
                    return this.privPayload
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "binaryContent", {
                get: function () {
                    if (this.privMessageType === n.MessageType.Text) throw new o.InvalidOperationError("Not supported for text message");
                    return this.privPayload
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "id", {
                get: function () {
                    return this.privId
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
    t.RawWebsocketMessage = s
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function (e, t) {
        var r = this;
        this.encode = function (e) {
            var t = r.downSampleAudioFrame(e, r.privActualSampleRate, r.privDesiredSampleRate);
            if (!t) return null;
            var n = 2 * t.length,
                o = new ArrayBuffer(n),
                i = new DataView(o);
            return r.floatTo16BitPCM(i, 0, t), o
        }, this.setString = function (e, t, r) {
            for (var n = 0; n < r.length; n++) e.setUint8(t + n, r.charCodeAt(n))
        }, this.floatTo16BitPCM = function (e, t, r) {
            for (var n = 0; n < r.length; n++ , t += 2) {
                var o = Math.max(-1, Math.min(1, r[n]));
                e.setInt16(t, o < 0 ? 32768 * o : 32767 * o, !0)
            }
        }, this.downSampleAudioFrame = function (e, t, r) {
            if (r === t || r > t) return e;
            for (var n = t / r, o = Math.round(e.length / n), i = new Float32Array(o), s = 0, a = 0; a < o;) {
                for (var c = Math.round((a + 1) * n), p = 0, u = 0; s < c && s < e.length;) p += e[s++], u++;
                i[a++] = p / u
            }
            return i
        }, this.privActualSampleRate = e, this.privDesiredSampleRate = t
    };
    t.RiffPcmEncoder = n
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(10),
        o = r(7),
        i = r(17),
        s = function () {
            function e(e) {
                var t = this;
                this.privReaderIdCounter = 1, this.privIsEnded = !1, this.getReader = function () {
                    var e = t.privReaderIdCounter;
                    t.privReaderIdCounter++;
                    var r = new i.Queue,
                        n = t.privStreambuffer.length;
                    t.privReaderQueues[e] = r;
                    for (var o = 0; o < n; o++) r.enqueue(t.privStreambuffer[o]);
                    return new a(t.privId, r, (function () {
                        delete t.privReaderQueues[e]
                    }))
                }, this.throwIfClosed = function () {
                    if (t.privIsEnded) throw new n.InvalidOperationError("Stream closed")
                }, this.privId = e || o.createNoDashGuid(), this.privStreambuffer = [], this.privReaderQueues = {}
            }
            return Object.defineProperty(e.prototype, "isClosed", {
                get: function () {
                    return this.privIsEnded
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "id", {
                get: function () {
                    return this.privId
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.close = function () {
                this.privIsEnded || (this.writeStreamChunk({
                    buffer: null,
                    isEnd: !0,
                    timeReceived: Date.now()
                }), this.privIsEnded = !0)
            }, e.prototype.writeStreamChunk = function (e) {
                for (var t in this.throwIfClosed(), this.privStreambuffer.push(e), this.privReaderQueues)
                    if (!this.privReaderQueues[t].isDisposed()) try {
                        this.privReaderQueues[t].enqueue(e)
                    } catch (e) { }
            }, e
        }();
    t.Stream = s;
    var a = function () {
        function e(e, t, r) {
            var o = this;
            this.privIsClosed = !1, this.read = function () {
                if (o.isClosed) throw new n.InvalidOperationError("StreamReader closed");
                return o.privReaderQueue.dequeue().onSuccessContinueWith((function (e) {
                    return (void 0 === e || e.isEnd) && o.privReaderQueue.dispose("End of stream reached"), e
                }))
            }, this.close = function () {
                o.privIsClosed || (o.privIsClosed = !0, o.privReaderQueue.dispose("StreamReader closed"), o.privOnClose())
            }, this.privReaderQueue = t, this.privOnClose = r, this.privStreamId = e
        }
        return Object.defineProperty(e.prototype, "isClosed", {
            get: function () {
                return this.privIsClosed
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "streamId", {
            get: function () {
                return this.privStreamId
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.StreamReader = a
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
        function (e) {
            e[e.Success = 0] = "Success", e[e.Error = 1] = "Error"
        }(t.TranslationStatus || (t.TranslationStatus = {}))
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function (e) {
        function t(t, r) {
            var n = e.call(this, r) || this;
            return n.privTargetChunkSize = t, n.privNextBufferReadyBytes = 0, n
        }
        return o(t, e), t.prototype.writeStreamChunk = function (t) {
            if (t.isEnd || 0 === this.privNextBufferReadyBytes && t.buffer.byteLength === this.privTargetChunkSize) e.prototype.writeStreamChunk.call(this, t);
            else
                for (var r = 0; r < t.buffer.byteLength;) {
                    void 0 === this.privNextBufferToWrite && (this.privNextBufferToWrite = new ArrayBuffer(this.privTargetChunkSize), this.privNextBufferStartTime = t.timeReceived);
                    var n = Math.min(t.buffer.byteLength - r, this.privTargetChunkSize - this.privNextBufferReadyBytes),
                        o = new Uint8Array(this.privNextBufferToWrite),
                        i = new Uint8Array(t.buffer.slice(r, n + r));
                    o.set(i, this.privNextBufferReadyBytes), this.privNextBufferReadyBytes += n, r += n, this.privNextBufferReadyBytes === this.privTargetChunkSize && (e.prototype.writeStreamChunk.call(this, {
                        buffer: this.privNextBufferToWrite,
                        isEnd: !1,
                        timeReceived: this.privNextBufferStartTime
                    }), this.privNextBufferReadyBytes = 0, this.privNextBufferToWrite = void 0)
                }
        }, t.prototype.close = function () {
            0 === this.privNextBufferReadyBytes || this.isClosed || e.prototype.writeStreamChunk.call(this, {
                buffer: this.privNextBufferToWrite.slice(0, this.privNextBufferReadyBytes),
                isEnd: !1,
                timeReceived: this.privNextBufferStartTime
            }), e.prototype.close.call(this)
        }, t
    }(r(4).Stream);
    t.ChunkedArrayBufferStream = i
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(24),
        o = r(25),
        i = r(4);
    t.AudioWorkletSourceURLPropertyName = "MICROPHONE-WorkletSourceUrl";
    var s = function () {
        function e(t, r, n) {
            var o = this;
            this.privRecorder = t, this.deviceId = r, this.privStreams = {}, this.turnOn = function () {
                if (o.privInitializeDeferral) return o.privInitializeDeferral.promise();
                o.privInitializeDeferral = new i.Deferred;
                try {
                    o.createAudioContext()
                } catch (t) {
                    if (t instanceof Error) {
                        var e = t;
                        o.privInitializeDeferral.reject(e.name + ": " + e.message)
                    } else o.privInitializeDeferral.reject(t);
                    return o.privInitializeDeferral.promise()
                }
                var t = window.navigator,
                    r = t.getUserMedia || t.webkitGetUserMedia || t.mozGetUserMedia || t.msGetUserMedia;
                if (t.mediaDevices && (r = function (e, r, n) {
                    t.mediaDevices.getUserMedia(e).then(r).catch(n)
                }), r) {
                    var n = function () {
                        o.onEvent(new i.AudioSourceInitializingEvent(o.privId)), r({
                            audio: !o.deviceId || {
                                deviceId: o.deviceId
                            },
                            video: !1
                        }, (function (e) {
                            o.privMediaStream = e, o.onEvent(new i.AudioSourceReadyEvent(o.privId)), o.privInitializeDeferral.resolve(!0)
                        }), (function (e) {
                            var t = "Error occurred during microphone initialization: " + e,
                                r = o.privInitializeDeferral;
                            o.privInitializeDeferral = null, r.reject(t), o.onEvent(new i.AudioSourceErrorEvent(o.privId, t))
                        }))
                    };
                    "suspended" === o.privContext.state ? o.privContext.resume().then(n, (function (e) {
                        o.privInitializeDeferral.reject("Failed to initialize audio context: " + e)
                    })) : n()
                } else {
                    var s = "Browser does not support getUserMedia.";
                    o.privInitializeDeferral.reject(s), o.onEvent(new i.AudioSourceErrorEvent(s, ""))
                }
                return o.privInitializeDeferral.promise()
            }, this.id = function () {
                return o.privId
            }, this.attach = function (e) {
                return o.onEvent(new i.AudioStreamNodeAttachingEvent(o.privId, e)), o.listen(e).onSuccessContinueWith((function (t) {
                    return o.onEvent(new i.AudioStreamNodeAttachedEvent(o.privId, e)), {
                        detach: function () {
                            t.close(), o.turnOff(), delete o.privStreams[e], o.onEvent(new i.AudioStreamNodeDetachedEvent(o.privId, e))
                        },
                        id: function () {
                            return e
                        },
                        read: function () {
                            return t.read()
                        }
                    }
                }))
            }, this.detach = function (e) {
                e && o.privStreams[e] && (o.privStreams[e].close(), delete o.privStreams[e], o.onEvent(new i.AudioStreamNodeDetachedEvent(o.privId, e)))
            }, this.turnOff = function () {
                for (var e in o.privStreams)
                    if (e) {
                        var t = o.privStreams[e];
                        t && t.close()
                    } return o.onEvent(new i.AudioSourceOffEvent(o.privId)), o.privInitializeDeferral = null, o.destroyAudioContext(), i.PromiseHelper.fromResult(!0)
            }, this.listen = function (e) {
                return o.turnOn().onSuccessContinueWith((function (t) {
                    var r = new i.ChunkedArrayBufferStream(o.privOutputChunkSize, e);
                    o.privStreams[e] = r;
                    try {
                        o.privRecorder.record(o.privContext, o.privMediaStream, r)
                    } catch (t) {
                        throw o.onEvent(new i.AudioStreamNodeErrorEvent(o.privId, e, t)), t
                    }
                    return r.getReader()
                }))
            }, this.onEvent = function (e) {
                o.privEvents.onEvent(e), i.Events.instance.onEvent(e)
            }, this.createAudioContext = function () {
                if (!o.privContext) {
                    var e = window.AudioContext || window.webkitAudioContext || !1;
                    if (!e) throw new Error("Browser does not support Web Audio API (AudioContext is not available).");
                    o.privContext = new e
                }
            }, this.destroyAudioContext = function () {
                if (o.privContext) {
                    o.privRecorder.releaseMediaResources(o.privContext);
                    var e = !1;
                    "close" in o.privContext && (e = !0), e ? (o.privContext.close(), o.privContext = null) : null !== o.privContext && "running" === o.privContext.state && o.privContext.suspend()
                }
            }, this.privOutputChunkSize = e.AUDIOFORMAT.avgBytesPerSec / 10, this.privId = n || i.createNoDashGuid(), this.privEvents = new i.EventSource
        }
        return Object.defineProperty(e.prototype, "format", {
            get: function () {
                return i.PromiseHelper.fromResult(e.AUDIOFORMAT)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "events", {
            get: function () {
                return this.privEvents
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "deviceInfo", {
            get: function () {
                return this.getMicrophoneLabel().onSuccessContinueWith((function (t) {
                    return {
                        bitspersample: e.AUDIOFORMAT.bitsPerSample,
                        channelcount: e.AUDIOFORMAT.channels,
                        connectivity: o.connectivity.Unknown,
                        manufacturer: "Speech SDK",
                        model: t,
                        samplerate: e.AUDIOFORMAT.samplesPerSec,
                        type: o.type.Microphones
                    }
                }))
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.setProperty = function (e, r) {
            if (e !== t.AudioWorkletSourceURLPropertyName) throw new Error("Property '" + e + "' is not supported on Microphone.");
            this.privRecorder.setWorkletUrl(r)
        }, e.prototype.getMicrophoneLabel = function () {
            var e = this;
            if (void 0 !== this.privMicrophoneLabel) return i.PromiseHelper.fromResult(this.privMicrophoneLabel);
            if (void 0 === this.privMediaStream || !this.privMediaStream.active) return i.PromiseHelper.fromResult("microphone");
            this.privMicrophoneLabel = "microphone";
            var t = this.privMediaStream.getTracks()[0].getSettings().deviceId;
            if (void 0 === t) return i.PromiseHelper.fromResult(this.privMicrophoneLabel);
            var r = new i.Deferred;
            return navigator.mediaDevices.enumerateDevices().then((function (n) {
                for (var o = 0, i = n; o < i.length; o++) {
                    var s = i[o];
                    if (s.deviceId === t) {
                        e.privMicrophoneLabel = s.label;
                        break
                    }
                }
                r.resolve(e.privMicrophoneLabel)
            }), (function () {
                return r.resolve(e.privMicrophoneLabel)
            })), r.promise()
        }, e.AUDIOFORMAT = n.AudioStreamFormat.getDefaultInputFormat(), e
    }();
    t.MicAudioSource = s
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function () {
        function e() { }
        return e.getDefaultInputFormat = function () {
            return s.getDefaultInputFormat()
        }, e.getWaveFormatPCM = function (e, t, r) {
            return new s(e, t, r)
        }, e
    }();
    t.AudioStreamFormat = i;
    var s = function (e) {
        function t(t, r, n) {
            void 0 === t && (t = 16e3), void 0 === r && (r = 16), void 0 === n && (n = 1);
            var o = e.call(this) || this;
            o.setString = function (e, t, r) {
                for (var n = 0; n < r.length; n++) e.setUint8(t + n, r.charCodeAt(n))
            }, o.formatTag = 1, o.bitsPerSample = r, o.samplesPerSec = t, o.channels = n, o.avgBytesPerSec = o.samplesPerSec * o.channels * (o.bitsPerSample / 8), o.blockAlign = o.channels * Math.max(o.bitsPerSample, 8), o.privHeader = new ArrayBuffer(44);
            var i = new DataView(o.privHeader);
            return o.setString(i, 0, "RIFF"), i.setUint32(4, 0, !0), o.setString(i, 8, "WAVEfmt "), i.setUint32(16, 16, !0), i.setUint16(20, 1, !0), i.setUint16(22, o.channels, !0), i.setUint32(24, o.samplesPerSec, !0), i.setUint32(28, o.avgBytesPerSec, !0), i.setUint16(32, o.channels * (o.bitsPerSample / 8), !0), i.setUint16(34, o.bitsPerSample, !0), o.setString(i, 36, "data"), i.setUint32(40, 0, !0), o
        }
        return o(t, e), t.getDefaultInputFormat = function () {
            return new t
        }, t.prototype.close = function () { }, Object.defineProperty(t.prototype, "header", {
            get: function () {
                return this.privHeader
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(i);
    t.AudioStreamFormatImpl = s
}, function (e, t, r) {
    "use strict";

    function n(e) {
        for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n(r(26)), n(r(28)), n(r(27)), n(r(29)), n(r(94)), n(r(95)), n(r(97)), n(r(98)), n(r(59)), n(r(99)), n(r(100)), n(r(101)), n(r(102)), n(r(103)), n(r(104)), n(r(105)), n(r(106)), n(r(107)), n(r(108)), n(r(109)), n(r(110)), n(r(111)), n(r(112)), n(r(113)), n(r(114)), n(r(116)), n(r(117)), n(r(118)), n(r(122)), n(r(123)), t.OutputFormatPropertyName = "OutputFormat", t.CancellationErrorCodePropertyName = "CancellationErrorCode", t.ServicePropertiesPropertyName = "ServiceProperties", t.ForceDictationPropertyName = "ForceDication"
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(4),
        o = r(27),
        i = "Ocp-Apim-Subscription-Key",
        s = function (e) {
            var t = this;
            if (this.fetch = function (e) {
                return n.PromiseHelper.fromResult(t.privAuthInfo)
            }, this.fetchOnExpiry = function (e) {
                return n.PromiseHelper.fromResult(t.privAuthInfo)
            }, !e) throw new n.ArgumentNullError("subscriptionKey");
            this.privAuthInfo = new o.AuthInfo(i, e)
        };
    t.CognitiveSubscriptionKeyAuthentication = s
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function () {
        function e(e, t) {
            this.privHeaderName = e, this.privToken = t
        }
        return Object.defineProperty(e.prototype, "headerName", {
            get: function () {
                return this.privHeaderName
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "token", {
            get: function () {
                return this.privToken
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.AuthInfo = n
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(4),
        o = r(27),
        i = "Authorization",
        s = function (e, t) {
            var r = this;
            if (this.fetch = function (e) {
                return r.privFetchCallback(e).onSuccessContinueWith((function (e) {
                    return new o.AuthInfo(i, e)
                }))
            }, this.fetchOnExpiry = function (e) {
                return r.privFetchOnExpiryCallback(e).onSuccessContinueWith((function (e) {
                    return new o.AuthInfo(i, e)
                }))
            }, !e) throw new n.ArgumentNullError("fetchCallback");
            if (!t) throw new n.ArgumentNullError("fetchOnExpiryCallback");
            this.privFetchCallback = e, this.privFetchOnExpiryCallback = t
        };
    t.CognitiveTokenAuthentication = s
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(2),
        s = r(30),
        a = r(60),
        c = r(25),
        p = "X-ConnectionId",
        u = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.create = function (e, r, n) {
                    var o = e.parameters.getProperty(s.PropertyId.SpeechServiceConnection_Endpoint);
                    if (!o) {
                        var a = e.parameters.getProperty(s.PropertyId.SpeechServiceConnection_IntentRegion);
                        o = e.parameters.getProperty(s.PropertyId.SpeechServiceConnection_Host, "wss://speech.platform.bing.com") + "/speech/" + t.getSpeechRegionFromIntentRegion(a) + "/recognition/interactive/cognitiveservices/v1"
                    }
                    var u = {
                        format: "simple",
                        language: e.parameters.getProperty(s.PropertyId.SpeechServiceConnection_RecoLanguage)
                    };
                    t.setCommonUrlParams(e, u, o);
                    var v = {};
                    return void 0 !== r.token && "" !== r.token && (v[r.headerName] = r.token), v[p] = n, e.parameters.setProperty(s.PropertyId.SpeechServiceConnection_Url, o), new i.WebsocketConnection(o, u, v, new c.WebsocketMessageFormatter, i.ProxyInfo.fromRecognizerConfig(e), n)
                }, t
            }
            return o(t, e), t.prototype.getSpeechRegionFromIntentRegion = function (e) {
                switch (e) {
                    case "West US":
                    case "US West":
                    case "westus":
                        return "uswest";
                    case "West US 2":
                    case "US West 2":
                    case "westus2":
                        return "uswest2";
                    case "South Central US":
                    case "US South Central":
                    case "southcentralus":
                        return "ussouthcentral";
                    case "West Central US":
                    case "US West Central":
                    case "westcentralus":
                        return "uswestcentral";
                    case "East US":
                    case "US East":
                    case "eastus":
                        return "useast";
                    case "East US 2":
                    case "US East 2":
                    case "eastus2":
                        return "useast2";
                    case "West Europe":
                    case "Europe West":
                    case "westeurope":
                        return "europewest";
                    case "North Europe":
                    case "Europe North":
                    case "northeurope":
                        return "europenorth";
                    case "Brazil South":
                    case "South Brazil":
                    case "southbrazil":
                        return "brazilsouth";
                    case "Australia East":
                    case "East Australia":
                    case "eastaustralia":
                        return "australiaeast";
                    case "Southeast Asia":
                    case "Asia Southeast":
                    case "southeastasia":
                        return "asiasoutheast";
                    case "East Asia":
                    case "Asia East":
                    case "eastasia":
                        return "asiaeast";
                    default:
                        return e
                }
            }, t
        }(a.ConnectionFactoryBase);
    t.IntentConnectionFactory = u
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(31);
    t.AudioConfig = n.AudioConfig;
    var o = r(24);
    t.AudioStreamFormat = o.AudioStreamFormat;
    var i = r(33);
    t.AudioInputStream = i.AudioInputStream, t.PullAudioInputStream = i.PullAudioInputStream, t.PushAudioInputStream = i.PushAudioInputStream;
    var s = r(34);
    t.AudioOutputStream = s.AudioOutputStream, t.PullAudioOutputStream = s.PullAudioOutputStream;
    var a = r(35);
    t.CancellationReason = a.CancellationReason;
    var c = r(36);
    t.PullAudioInputStreamCallback = c.PullAudioInputStreamCallback;
    var p = r(37);
    t.KeywordRecognitionModel = p.KeywordRecognitionModel;
    var u = r(38);
    t.SessionEventArgs = u.SessionEventArgs;
    var v = r(39);
    t.RecognitionEventArgs = v.RecognitionEventArgs;
    var l = r(40);
    t.OutputFormat = l.OutputFormat;
    var f = r(41);
    t.IntentRecognitionEventArgs = f.IntentRecognitionEventArgs;
    var h = r(42);
    t.RecognitionResult = h.RecognitionResult;
    var d = r(43);
    t.SpeechRecognitionResult = d.SpeechRecognitionResult;
    var g = r(44);
    t.IntentRecognitionResult = g.IntentRecognitionResult;
    var y = r(45);
    t.LanguageUnderstandingModel = y.LanguageUnderstandingModel;
    var m = r(46);
    t.SpeechRecognitionEventArgs = m.SpeechRecognitionEventArgs;
    var C = r(47);
    t.SpeechRecognitionCanceledEventArgs = C.SpeechRecognitionCanceledEventArgs;
    var S = r(48);
    t.TranslationRecognitionEventArgs = S.TranslationRecognitionEventArgs;
    var P = r(49);
    t.TranslationSynthesisEventArgs = P.TranslationSynthesisEventArgs;
    var b = r(50);
    t.TranslationRecognitionResult = b.TranslationRecognitionResult;
    var R = r(51);
    t.TranslationSynthesisResult = R.TranslationSynthesisResult;
    var I = r(52);
    t.ResultReason = I.ResultReason;
    var O = r(53);
    t.SpeechConfig = O.SpeechConfig, t.SpeechConfigImpl = O.SpeechConfigImpl;
    var w = r(54);
    t.SpeechTranslationConfig = w.SpeechTranslationConfig;
    var E = r(55);
    t.PropertyCollection = E.PropertyCollection;
    var T = r(56);
    t.PropertyId = T.PropertyId;
    var _ = r(57);
    t.Recognizer = _.Recognizer;
    var A = r(58);
    t.SpeechRecognizer = A.SpeechRecognizer;
    var D = r(62);
    t.IntentRecognizer = D.IntentRecognizer;
    var j = r(63);
    t.TranslationRecognizer = j.TranslationRecognizer;
    var M = r(64);
    t.Translations = M.Translations;
    var N = r(65);
    t.NoMatchReason = N.NoMatchReason;
    var k = r(66);
    t.NoMatchDetails = k.NoMatchDetails;
    var z = r(67);
    t.TranslationRecognitionCanceledEventArgs = z.TranslationRecognitionCanceledEventArgs;
    var x = r(68);
    t.IntentRecognitionCanceledEventArgs = x.IntentRecognitionCanceledEventArgs;
    var L = r(69);
    t.CancellationDetails = L.CancellationDetails;
    var B = r(70);
    t.CancellationErrorCode = B.CancellationErrorCode;
    var q = r(71);
    t.ConnectionEventArgs = q.ConnectionEventArgs;
    var U = r(72);
    t.ServiceEventArgs = U.ServiceEventArgs;
    var F = r(73);
    t.Connection = F.Connection;
    var W = r(74);
    t.PhraseListGrammar = W.PhraseListGrammar;
    var H = r(75);
    t.DialogServiceConfig = H.DialogServiceConfig;
    var J = r(76);
    t.BotFrameworkConfig = J.BotFrameworkConfig;
    var G = r(77);
    t.CustomCommandsConfig = G.CustomCommandsConfig;
    var K = r(78);
    t.DialogServiceConnector = K.DialogServiceConnector;
    var V = r(80);
    t.ActivityReceivedEventArgs = V.ActivityReceivedEventArgs;
    var Q = r(81);
    t.ServicePropertyChannel = Q.ServicePropertyChannel;
    var Y = r(82);
    t.ProfanityOption = Y.ProfanityOption;
    var X = r(83);
    t.BaseAudioPlayer = X.BaseAudioPlayer;
    var Z = r(84);
    t.Conversation = Z.Conversation, t.ConversationExpirationEventArgs = Z.ConversationExpirationEventArgs, t.ConversationParticipantsChangedEventArgs = Z.ConversationParticipantsChangedEventArgs, t.ConversationTranslationCanceledEventArgs = Z.ConversationTranslationCanceledEventArgs, t.ConversationTranslationEventArgs = Z.ConversationTranslationEventArgs, t.ConversationTranslationResult = Z.ConversationTranslationResult, t.ConversationTranslator = Z.ConversationTranslator, t.Participant = Z.Participant, t.ParticipantChangedReason = Z.ParticipantChangedReason, t.User = Z.User
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(2),
        s = r(32),
        a = r(30),
        c = r(33),
        p = function () {
            function e() { }
            return e.fromDefaultMicrophoneInput = function () {
                var e = new i.PcmRecorder;
                return new u(new i.MicAudioSource(e))
            }, e.fromMicrophoneInput = function (e) {
                var t = new i.PcmRecorder;
                return new u(new i.MicAudioSource(t, e))
            }, e.fromWavFileInput = function (e) {
                return new u(new i.FileAudioSource(e))
            }, e.fromStreamInput = function (e) {
                if (e instanceof a.PullAudioInputStreamCallback) return new u(new c.PullAudioInputStreamImpl(e));
                if (e instanceof a.AudioInputStream) return new u(e);
                throw new Error("Not Supported Type")
            }, e
        }();
    t.AudioConfig = p;
    var u = function (e) {
        function t(t) {
            var r = e.call(this) || this;
            return r.privSource = t, r
        }
        return o(t, e), Object.defineProperty(t.prototype, "format", {
            get: function () {
                return this.privSource.format
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.close = function () {
            this.privSource.turnOff()
        }, t.prototype.id = function () {
            return this.privSource.id()
        }, t.prototype.turnOn = function () {
            return this.privSource.turnOn()
        }, t.prototype.attach = function (e) {
            return this.privSource.attach(e)
        }, t.prototype.detach = function (e) {
            return this.privSource.detach(e)
        }, t.prototype.turnOff = function () {
            return this.privSource.turnOff()
        }, Object.defineProperty(t.prototype, "events", {
            get: function () {
                return this.privSource.events
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.setProperty = function (e, t) {
            if (s.Contracts.throwIfNull(t, "value"), void 0 === this.privSource.setProperty) throw new Error("This AudioConfig instance does not support setting properties.");
            this.privSource.setProperty(e, t)
        }, t.prototype.getProperty = function (e, t) {
            if (void 0 !== this.privSource.getProperty) return this.privSource.getProperty(e, t);
            throw new Error("This AudioConfig instance does not support getting properties.")
        }, Object.defineProperty(t.prototype, "deviceInfo", {
            get: function () {
                return this.privSource.deviceInfo
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(p);
    t.AudioConfigImpl = u
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function () {
        function e() { }
        return e.throwIfNullOrUndefined = function (e, t) {
            if (null == e) throw new Error("throwIfNullOrUndefined:" + t)
        }, e.throwIfNull = function (e, t) {
            if (null === e) throw new Error("throwIfNull:" + t)
        }, e.throwIfNullOrWhitespace = function (t, r) {
            if (e.throwIfNullOrUndefined(t, r), ("" + t).trim().length < 1) throw new Error("throwIfNullOrWhitespace:" + r)
        }, e.throwIfDisposed = function (e) {
            if (e) throw new Error("the object is already disposed")
        }, e.throwIfArrayEmptyOrWhitespace = function (t, r) {
            if (e.throwIfNullOrUndefined(t, r), 0 === t.length) throw new Error("throwIfArrayEmptyOrWhitespace:" + r);
            for (var n = 0, o = t; n < o.length; n++) {
                var i = o[n];
                e.throwIfNullOrWhitespace(i, r)
            }
        }, e.throwIfFileDoesNotExist = function (t, r) {
            e.throwIfNullOrWhitespace(t, r)
        }, e
    }();
    t.Contracts = n
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(7),
        s = r(25),
        a = r(4),
        c = r(30),
        p = r(24),
        u = function () {
            function e() { }
            return e.createPushStream = function (e) {
                return v.create(e)
            }, e.createPullStream = function (e, t) {
                return f.create(e, t)
            }, e
        }();
    t.AudioInputStream = u;
    var v = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return o(t, e), t.create = function (e) {
            return new l(e)
        }, t
    }(u);
    t.PushAudioInputStream = v;
    var l = function (e) {
        function t(t) {
            var r = e.call(this) || this;
            return r.onEvent = function (e) {
                r.privEvents.onEvent(e), a.Events.instance.onEvent(e)
            }, r.privFormat = void 0 === t ? p.AudioStreamFormatImpl.getDefaultInputFormat() : t, r.privEvents = new a.EventSource, r.privId = i.createNoDashGuid(), r.privStream = new a.ChunkedArrayBufferStream(r.privFormat.avgBytesPerSec / 10), r
        }
        return o(t, e), Object.defineProperty(t.prototype, "format", {
            get: function () {
                return a.PromiseHelper.fromResult(this.privFormat)
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.write = function (e) {
            this.privStream.writeStreamChunk({
                buffer: e,
                isEnd: !1,
                timeReceived: Date.now()
            })
        }, t.prototype.close = function () {
            this.privStream.close()
        }, t.prototype.id = function () {
            return this.privId
        }, t.prototype.turnOn = function () {
            return this.onEvent(new a.AudioSourceInitializingEvent(this.privId)), this.onEvent(new a.AudioSourceReadyEvent(this.privId)), a.PromiseHelper.fromResult(!0)
        }, t.prototype.attach = function (e) {
            var t = this;
            return this.onEvent(new a.AudioStreamNodeAttachingEvent(this.privId, e)), this.turnOn().onSuccessContinueWith((function (e) {
                return t.privStream.getReader()
            })).onSuccessContinueWith((function (r) {
                return t.onEvent(new a.AudioStreamNodeAttachedEvent(t.privId, e)), {
                    detach: function () {
                        r.close(), t.onEvent(new a.AudioStreamNodeDetachedEvent(t.privId, e)), t.turnOff()
                    },
                    id: function () {
                        return e
                    },
                    read: function () {
                        return r.read()
                    }
                }
            }))
        }, t.prototype.detach = function (e) {
            this.onEvent(new a.AudioStreamNodeDetachedEvent(this.privId, e))
        }, t.prototype.turnOff = function () {
            return a.PromiseHelper.fromResult(!1)
        }, Object.defineProperty(t.prototype, "events", {
            get: function () {
                return this.privEvents
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "deviceInfo", {
            get: function () {
                return a.PromiseHelper.fromResult({
                    bitspersample: this.privFormat.bitsPerSample,
                    channelcount: this.privFormat.channels,
                    connectivity: s.connectivity.Unknown,
                    manufacturer: "Speech SDK",
                    model: "PushStream",
                    samplerate: this.privFormat.samplesPerSec,
                    type: s.type.Stream
                })
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(v);
    t.PushAudioInputStreamImpl = l;
    var f = function (e) {
        function t() {
            return e.call(this) || this
        }
        return o(t, e), t.create = function (e, t) {
            return new h(e, t)
        }, t
    }(u);
    t.PullAudioInputStream = f;
    var h = function (e) {
        function t(t, r) {
            var n = e.call(this) || this;
            return n.onEvent = function (e) {
                n.privEvents.onEvent(e), a.Events.instance.onEvent(e)
            }, n.privFormat = void 0 === r ? c.AudioStreamFormat.getDefaultInputFormat() : r, n.privEvents = new a.EventSource, n.privId = i.createNoDashGuid(), n.privCallback = t, n.privIsClosed = !1, n.privBufferSize = n.privFormat.avgBytesPerSec / 10, n
        }
        return o(t, e), Object.defineProperty(t.prototype, "format", {
            get: function () {
                return a.PromiseHelper.fromResult(this.privFormat)
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.close = function () {
            this.privIsClosed = !0, this.privCallback.close()
        }, t.prototype.id = function () {
            return this.privId
        }, t.prototype.turnOn = function () {
            return this.onEvent(new a.AudioSourceInitializingEvent(this.privId)), this.onEvent(new a.AudioSourceReadyEvent(this.privId)), a.PromiseHelper.fromResult(!0)
        }, t.prototype.attach = function (e) {
            var t = this;
            return this.onEvent(new a.AudioStreamNodeAttachingEvent(this.privId, e)), this.turnOn().onSuccessContinueWith((function (r) {
                return t.onEvent(new a.AudioStreamNodeAttachedEvent(t.privId, e)), {
                    detach: function () {
                        t.privCallback.close(), t.onEvent(new a.AudioStreamNodeDetachedEvent(t.privId, e)), t.turnOff()
                    },
                    id: function () {
                        return e
                    },
                    read: function () {
                        for (var e, r = 0; r < t.privBufferSize;) {
                            var n = new ArrayBuffer(t.privBufferSize - r),
                                o = t.privCallback.read(n);
                            if (void 0 === e) e = n;
                            else new Int8Array(e).set(new Int8Array(n), r);
                            if (0 === o) break;
                            r += o
                        }
                        return a.PromiseHelper.fromResult({
                            buffer: e.slice(0, r),
                            isEnd: t.privIsClosed || 0 === r,
                            timeReceived: Date.now()
                        })
                    }
                }
            }))
        }, t.prototype.detach = function (e) {
            this.onEvent(new a.AudioStreamNodeDetachedEvent(this.privId, e))
        }, t.prototype.turnOff = function () {
            return a.PromiseHelper.fromResult(!1)
        }, Object.defineProperty(t.prototype, "events", {
            get: function () {
                return this.privEvents
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "deviceInfo", {
            get: function () {
                return a.PromiseHelper.fromResult({
                    bitspersample: this.privFormat.bitsPerSample,
                    channelcount: this.privFormat.channels,
                    connectivity: s.connectivity.Unknown,
                    manufacturer: "Speech SDK",
                    model: "PullStream",
                    samplerate: this.privFormat.samplesPerSec,
                    type: s.type.Stream
                })
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(f);
    t.PullAudioInputStreamImpl = h
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(7),
        s = r(4),
        a = r(24);
    t.bufferSize = 4096;
    var c = function () {
        function e() { }
        return e.createPullStream = function (e) {
            return p.create(e)
        }, e
    }();
    t.AudioOutputStream = c;
    var p = function (e) {
        function r() {
            return null !== e && e.apply(this, arguments) || this
        }
        return o(r, e), r.create = function (e) {
            return new u(t.bufferSize, e)
        }, r
    }(c);
    t.PullAudioOutputStream = p;
    var u = function (e) {
        function t(t, r) {
            var n = e.call(this) || this;
            return n.privFormat = void 0 === r ? a.AudioStreamFormatImpl.getDefaultInputFormat() : r, n.privId = i.createNoDashGuid(), n.privStream = new s.ChunkedArrayBufferStream(t), n.streamReader = n.privStream.getReader(), n
        }
        return o(t, e), Object.defineProperty(t.prototype, "format", {
            get: function () {
                return this.privFormat
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "isClosed", {
            get: function () {
                return this.privStream.isClosed
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "id", {
            get: function () {
                return this.privId
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.read = function () {
            return this.streamReader.read().onSuccessContinueWithPromise((function (e) {
                return s.PromiseHelper.fromResult(e.buffer)
            }))
        }, t.prototype.write = function (e) {
            this.privStream.writeStreamChunk({
                buffer: e,
                isEnd: !1,
                timeReceived: Date.now()
            })
        }, t.prototype.close = function () {
            this.privStream.close()
        }, t
    }(p);
    t.PullAudioOutputStreamImpl = u
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
        function (e) {
            e[e.Error = 0] = "Error", e[e.EndOfStream = 1] = "EndOfStream"
        }(t.CancellationReason || (t.CancellationReason = {}))
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function () { };
    t.PullAudioInputStreamCallback = n
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(32),
        o = function () {
            function e() {
                this.privDisposed = !1
            }
            return e.fromFile = function (e) {
                throw n.Contracts.throwIfFileDoesNotExist(e, "fileName"), new Error("Not yet implemented.")
            }, e.fromStream = function (e) {
                throw n.Contracts.throwIfNull(e, "file"), new Error("Not yet implemented.")
            }, e.prototype.close = function () {
                this.privDisposed || (this.privDisposed = !0)
            }, e
        }();
    t.KeywordRecognitionModel = o
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function () {
        function e(e) {
            this.privSessionId = e
        }
        return Object.defineProperty(e.prototype, "sessionId", {
            get: function () {
                return this.privSessionId
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.SessionEventArgs = n
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function (e) {
        function t(t, r) {
            var n = e.call(this, r) || this;
            return n.privOffset = t, n
        }
        return o(t, e), Object.defineProperty(t.prototype, "offset", {
            get: function () {
                return this.privOffset
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(r(30).SessionEventArgs);
    t.RecognitionEventArgs = i
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
        function (e) {
            e[e.Simple = 0] = "Simple", e[e.Detailed = 1] = "Detailed"
        }(t.OutputFormat || (t.OutputFormat = {}))
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function (e) {
        function t(t, r, n) {
            var o = e.call(this, r, n) || this;
            return o.privResult = t, o
        }
        return o(t, e), Object.defineProperty(t.prototype, "result", {
            get: function () {
                return this.privResult
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(r(30).RecognitionEventArgs);
    t.IntentRecognitionEventArgs = i
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function () {
        function e(e, t, r, n, o, i, s, a) {
            this.privResultId = e, this.privReason = t, this.privText = r, this.privDuration = n, this.privOffset = o, this.privErrorDetails = i, this.privJson = s, this.privProperties = a
        }
        return Object.defineProperty(e.prototype, "resultId", {
            get: function () {
                return this.privResultId
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "reason", {
            get: function () {
                return this.privReason
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "text", {
            get: function () {
                return this.privText
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "duration", {
            get: function () {
                return this.privDuration
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "offset", {
            get: function () {
                return this.privOffset
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "errorDetails", {
            get: function () {
                return this.privErrorDetails
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "json", {
            get: function () {
                return this.privJson
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "properties", {
            get: function () {
                return this.privProperties
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.RecognitionResult = n
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function (e) {
        function t(t, r, n, o, i, s, a, c) {
            return e.call(this, t, r, n, o, i, s, a, c) || this
        }
        return o(t, e), t
    }(r(30).RecognitionResult);
    t.SpeechRecognitionResult = i
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function (e) {
        function t(t, r, n, o, i, s, a, c, p) {
            var u = e.call(this, r, n, o, i, s, a, c, p) || this;
            return u.privIntentId = t, u
        }
        return o(t, e), Object.defineProperty(t.prototype, "intentId", {
            get: function () {
                return this.privIntentId
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(r(30).SpeechRecognitionResult);
    t.IntentRecognitionResult = i
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(32),
        s = function () {
            function e() { }
            return e.fromEndpoint = function (e) {
                i.Contracts.throwIfNull(e, "uri"), i.Contracts.throwIfNullOrWhitespace(e.hostname, "uri");
                var t = new a,
                    r = e.host.indexOf(".");
                if (-1 === r) throw new Error("Could not determine region from endpoint");
                t.region = e.host.substr(0, r);
                var n = e.pathname.lastIndexOf("/") + 1;
                if (-1 === n) throw new Error("Could not determine appId from endpoint");
                if (t.appId = e.pathname.substr(n), t.subscriptionKey = e.searchParams.get("subscription-key"), void 0 === t.subscriptionKey) throw new Error("Could not determine subscription key from endpoint");
                return t
            }, e.fromAppId = function (e) {
                i.Contracts.throwIfNullOrWhitespace(e, "appId");
                var t = new a;
                return t.appId = e, t
            }, e.fromSubscription = function (e, t, r) {
                i.Contracts.throwIfNullOrWhitespace(e, "subscriptionKey"), i.Contracts.throwIfNullOrWhitespace(t, "appId"), i.Contracts.throwIfNullOrWhitespace(r, "region");
                var n = new a;
                return n.appId = t, n.region = r, n.subscriptionKey = e, n
            }, e
        }();
    t.LanguageUnderstandingModel = s;
    var a = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return o(t, e), t
    }(s);
    t.LanguageUnderstandingModelImpl = a
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function (e) {
        function t(t, r, n) {
            var o = e.call(this, r, n) || this;
            return o.privResult = t, o
        }
        return o(t, e), Object.defineProperty(t.prototype, "result", {
            get: function () {
                return this.privResult
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(r(30).RecognitionEventArgs);
    t.SpeechRecognitionEventArgs = i
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function (e) {
        function t(t, r, n, o, i) {
            var s = e.call(this, o, i) || this;
            return s.privReason = t, s.privErrorDetails = r, s.privErrorCode = n, s
        }
        return o(t, e), Object.defineProperty(t.prototype, "reason", {
            get: function () {
                return this.privReason
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "errorCode", {
            get: function () {
                return this.privErrorCode
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "errorDetails", {
            get: function () {
                return this.privErrorDetails
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(r(30).RecognitionEventArgs);
    t.SpeechRecognitionCanceledEventArgs = i
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function (e) {
        function t(t, r, n) {
            var o = e.call(this, r, n) || this;
            return o.privResult = t, o
        }
        return o(t, e), Object.defineProperty(t.prototype, "result", {
            get: function () {
                return this.privResult
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(r(30).RecognitionEventArgs);
    t.TranslationRecognitionEventArgs = i
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function (e) {
        function t(t, r) {
            var n = e.call(this, r) || this;
            return n.privResult = t, n
        }
        return o(t, e), Object.defineProperty(t.prototype, "result", {
            get: function () {
                return this.privResult
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(r(30).SessionEventArgs);
    t.TranslationSynthesisEventArgs = i
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function (e) {
        function t(t, r, n, o, i, s, a, c, p) {
            var u = e.call(this, r, n, o, i, s, a, c, p) || this;
            return u.privTranslations = t, u
        }
        return o(t, e), Object.defineProperty(t.prototype, "translations", {
            get: function () {
                return this.privTranslations
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(r(30).SpeechRecognitionResult);
    t.TranslationRecognitionResult = i
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function () {
        function e(e, t) {
            this.privReason = e, this.privAudio = t
        }
        return Object.defineProperty(e.prototype, "audio", {
            get: function () {
                return this.privAudio
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "reason", {
            get: function () {
                return this.privReason
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.TranslationSynthesisResult = n
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
        function (e) {
            e[e.NoMatch = 0] = "NoMatch", e[e.Canceled = 1] = "Canceled", e[e.RecognizingSpeech = 2] = "RecognizingSpeech", e[e.RecognizedSpeech = 3] = "RecognizedSpeech", e[e.RecognizingIntent = 4] = "RecognizingIntent", e[e.RecognizedIntent = 5] = "RecognizedIntent", e[e.TranslatingSpeech = 6] = "TranslatingSpeech", e[e.TranslatedSpeech = 7] = "TranslatedSpeech", e[e.SynthesizingAudio = 8] = "SynthesizingAudio", e[e.SynthesizingAudioCompleted = 9] = "SynthesizingAudioCompleted"
        }(t.ResultReason || (t.ResultReason = {}))
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(25),
        s = r(32),
        a = r(30),
        c = function () {
            function e() { }
            return e.fromSubscription = function (e, t) {
                s.Contracts.throwIfNullOrWhitespace(e, "subscriptionKey"), s.Contracts.throwIfNullOrWhitespace(t, "region");
                var r = new p;
                return r.setProperty(a.PropertyId.SpeechServiceConnection_Region, t), r.setProperty(a.PropertyId.SpeechServiceConnection_IntentRegion, t), r.setProperty(a.PropertyId.SpeechServiceConnection_Key, e), r
            }, e.fromEndpoint = function (e, t) {
                s.Contracts.throwIfNull(e, "endpoint");
                var r = new p;
                return r.setProperty(a.PropertyId.SpeechServiceConnection_Endpoint, e.href), void 0 !== t && r.setProperty(a.PropertyId.SpeechServiceConnection_Key, t), r
            }, e.fromHost = function (e, t) {
                s.Contracts.throwIfNull(e, "hostName");
                var r = new p;
                return r.setProperty(a.PropertyId.SpeechServiceConnection_Host, e.protocol + "//" + e.hostname + ("" === e.port ? "" : ":" + e.port)), void 0 !== t && r.setProperty(a.PropertyId.SpeechServiceConnection_Key, t), r
            }, e.fromAuthorizationToken = function (e, t) {
                s.Contracts.throwIfNull(e, "authorizationToken"), s.Contracts.throwIfNullOrWhitespace(t, "region");
                var r = new p;
                return r.setProperty(a.PropertyId.SpeechServiceConnection_Region, t), r.setProperty(a.PropertyId.SpeechServiceConnection_IntentRegion, t), r.authorizationToken = e, r
            }, e.prototype.close = function () { }, e
        }();
    t.SpeechConfig = c;
    var p = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t.privProperties = new a.PropertyCollection, t.speechRecognitionLanguage = "en-US", t.outputFormat = a.OutputFormat.Simple, t
        }
        return o(t, e), Object.defineProperty(t.prototype, "properties", {
            get: function () {
                return this.privProperties
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "endPoint", {
            get: function () {
                return new URL(this.privProperties.getProperty(a.PropertyId.SpeechServiceConnection_Endpoint))
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "subscriptionKey", {
            get: function () {
                return this.privProperties.getProperty(a.PropertyId.SpeechServiceConnection_Key)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "region", {
            get: function () {
                return this.privProperties.getProperty(a.PropertyId.SpeechServiceConnection_Region)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "authorizationToken", {
            get: function () {
                return this.privProperties.getProperty(a.PropertyId.SpeechServiceAuthorization_Token)
            },
            set: function (e) {
                this.privProperties.setProperty(a.PropertyId.SpeechServiceAuthorization_Token, e)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "speechRecognitionLanguage", {
            get: function () {
                return this.privProperties.getProperty(a.PropertyId.SpeechServiceConnection_RecoLanguage)
            },
            set: function (e) {
                this.privProperties.setProperty(a.PropertyId.SpeechServiceConnection_RecoLanguage, e)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "outputFormat", {
            get: function () {
                return a.OutputFormat[this.privProperties.getProperty(i.OutputFormatPropertyName, void 0)]
            },
            set: function (e) {
                this.privProperties.setProperty(i.OutputFormatPropertyName, a.OutputFormat[e])
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "endpointId", {
            get: function () {
                return this.privProperties.getProperty(a.PropertyId.SpeechServiceConnection_EndpointId)
            },
            set: function (e) {
                this.privProperties.setProperty(a.PropertyId.SpeechServiceConnection_EndpointId, e)
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.setProperty = function (e, t) {
            s.Contracts.throwIfNull(t, "value"), this.privProperties.setProperty(e, t)
        }, t.prototype.getProperty = function (e, t) {
            return this.privProperties.getProperty(e, t)
        }, t.prototype.setProxy = function (e, t, r, n) {
            this.setProperty(a.PropertyId[a.PropertyId.SpeechServiceConnection_ProxyHostName], e), this.setProperty(a.PropertyId[a.PropertyId.SpeechServiceConnection_ProxyPort], t), this.setProperty(a.PropertyId[a.PropertyId.SpeechServiceConnection_ProxyUserName], r), this.setProperty(a.PropertyId[a.PropertyId.SpeechServiceConnection_ProxyPassword], n)
        }, t.prototype.setServiceProperty = function (e, t, r) {
            var n = JSON.parse(this.privProperties.getProperty(i.ServicePropertiesPropertyName, "{}"));
            n[e] = t, this.privProperties.setProperty(i.ServicePropertiesPropertyName, JSON.stringify(n))
        }, t.prototype.setProfanity = function (e) {
            this.privProperties.setProperty(a.PropertyId.SpeechServiceResponse_ProfanityOption, a.ProfanityOption[e])
        }, t.prototype.enableAudioLogging = function () {
            this.privProperties.setProperty(a.PropertyId.SpeechServiceConnection_EnableAudioLogging, "true")
        }, t.prototype.requestWordLevelTimestamps = function () {
            this.privProperties.setProperty(a.PropertyId.SpeechServiceResponse_RequestWordLevelTimestamps, "true")
        }, t.prototype.enableDictation = function () {
            this.privProperties.setProperty(i.ForceDictationPropertyName, "true")
        }, t.prototype.clone = function () {
            var e = new t;
            return e.privProperties = this.privProperties.clone(), e
        }, t
    }(c);
    t.SpeechConfigImpl = p
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(25),
        s = r(32),
        a = r(30),
        c = function (e) {
            function t() {
                return e.call(this) || this
            }
            return o(t, e), t.fromSubscription = function (e, t) {
                s.Contracts.throwIfNullOrWhitespace(e, "subscriptionKey"), s.Contracts.throwIfNullOrWhitespace(t, "region");
                var r = new p;
                return r.properties.setProperty(a.PropertyId.SpeechServiceConnection_Key, e), r.properties.setProperty(a.PropertyId.SpeechServiceConnection_Region, t), r
            }, t.fromAuthorizationToken = function (e, t) {
                s.Contracts.throwIfNullOrWhitespace(e, "authorizationToken"), s.Contracts.throwIfNullOrWhitespace(t, "region");
                var r = new p;
                return r.properties.setProperty(a.PropertyId.SpeechServiceAuthorization_Token, e), r.properties.setProperty(a.PropertyId.SpeechServiceConnection_Region, t), r
            }, t.fromHost = function (e, t) {
                s.Contracts.throwIfNull(e, "hostName");
                var r = new p;
                return r.setProperty(a.PropertyId.SpeechServiceConnection_Host, e.protocol + "//" + e.hostname + ("" === e.port ? "" : ":" + e.port)), void 0 !== t && r.setProperty(a.PropertyId.SpeechServiceConnection_Key, t), r
            }, t.fromEndpoint = function (e, t) {
                s.Contracts.throwIfNull(e, "endpoint"), s.Contracts.throwIfNull(t, "subscriptionKey");
                var r = new p;
                return r.properties.setProperty(a.PropertyId.SpeechServiceConnection_Endpoint, e.href), r.properties.setProperty(a.PropertyId.SpeechServiceConnection_Key, t), r
            }, t
        }(a.SpeechConfig);
    t.SpeechTranslationConfig = c;
    var p = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t.privSpeechProperties = new a.PropertyCollection, t.outputFormat = a.OutputFormat.Simple, t
        }
        return o(t, e), Object.defineProperty(t.prototype, "authorizationToken", {
            set: function (e) {
                s.Contracts.throwIfNullOrWhitespace(e, "value"), this.privSpeechProperties.setProperty(a.PropertyId.SpeechServiceAuthorization_Token, e)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "speechRecognitionLanguage", {
            set: function (e) {
                s.Contracts.throwIfNullOrWhitespace(e, "value"), this.privSpeechProperties.setProperty(a.PropertyId.SpeechServiceConnection_RecoLanguage, e)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "subscriptionKey", {
            get: function () {
                return this.privSpeechProperties.getProperty(a.PropertyId[a.PropertyId.SpeechServiceConnection_Key])
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "outputFormat", {
            get: function () {
                return a.OutputFormat[this.privSpeechProperties.getProperty(i.OutputFormatPropertyName, void 0)]
            },
            set: function (e) {
                this.privSpeechProperties.setProperty(i.OutputFormatPropertyName, a.OutputFormat[e])
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "endpointId", {
            get: function () {
                return this.privSpeechProperties.getProperty(a.PropertyId.SpeechServiceConnection_EndpointId)
            },
            set: function (e) {
                this.privSpeechProperties.setProperty(a.PropertyId.SpeechServiceConnection_EndpointId, e)
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.addTargetLanguage = function (e) {
            s.Contracts.throwIfNullOrWhitespace(e, "value");
            var t = this.targetLanguages;
            t.push(e), this.privSpeechProperties.setProperty(a.PropertyId.SpeechServiceConnection_TranslationToLanguages, t.join(","))
        }, Object.defineProperty(t.prototype, "targetLanguages", {
            get: function () {
                return void 0 !== this.privSpeechProperties.getProperty(a.PropertyId.SpeechServiceConnection_TranslationToLanguages, void 0) ? this.privSpeechProperties.getProperty(a.PropertyId.SpeechServiceConnection_TranslationToLanguages).split(",") : []
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "voiceName", {
            get: function () {
                return this.getProperty(a.PropertyId[a.PropertyId.SpeechServiceConnection_TranslationVoice])
            },
            set: function (e) {
                s.Contracts.throwIfNullOrWhitespace(e, "value"), this.privSpeechProperties.setProperty(a.PropertyId.SpeechServiceConnection_TranslationVoice, e)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "region", {
            get: function () {
                return this.privSpeechProperties.getProperty(a.PropertyId.SpeechServiceConnection_Region)
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.setProxy = function (e, t, r, n) {
            this.setProperty(a.PropertyId[a.PropertyId.SpeechServiceConnection_ProxyHostName], e), this.setProperty(a.PropertyId[a.PropertyId.SpeechServiceConnection_ProxyPort], t), this.setProperty(a.PropertyId[a.PropertyId.SpeechServiceConnection_ProxyUserName], r), this.setProperty(a.PropertyId[a.PropertyId.SpeechServiceConnection_ProxyPassword], n)
        }, t.prototype.getProperty = function (e, t) {
            return this.privSpeechProperties.getProperty(e, t)
        }, t.prototype.setProperty = function (e, t) {
            this.privSpeechProperties.setProperty(e, t)
        }, Object.defineProperty(t.prototype, "properties", {
            get: function () {
                return this.privSpeechProperties
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.close = function () { }, t.prototype.setServiceProperty = function (e, t, r) {
            var n = JSON.parse(this.privSpeechProperties.getProperty(i.ServicePropertiesPropertyName, "{}"));
            n[e] = t, this.privSpeechProperties.setProperty(i.ServicePropertiesPropertyName, JSON.stringify(n))
        }, t.prototype.setProfanity = function (e) {
            this.privSpeechProperties.setProperty(a.PropertyId.SpeechServiceResponse_ProfanityOption, a.ProfanityOption[e])
        }, t.prototype.enableAudioLogging = function () {
            this.privSpeechProperties.setProperty(a.PropertyId.SpeechServiceConnection_EnableAudioLogging, "true")
        }, t.prototype.requestWordLevelTimestamps = function () {
            this.privSpeechProperties.setProperty(a.PropertyId.SpeechServiceResponse_RequestWordLevelTimestamps, "true")
        }, t.prototype.enableDictation = function () {
            this.privSpeechProperties.setProperty(i.ForceDictationPropertyName, "true")
        }, t
    }(c);
    t.SpeechTranslationConfigImpl = p
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(30),
        o = function () {
            function e() {
                this.privKeys = [], this.privValues = []
            }
            return e.prototype.getProperty = function (e, t) {
                var r;
                r = "string" == typeof e ? e : n.PropertyId[e];
                for (var o = 0; o < this.privKeys.length; o++)
                    if (this.privKeys[o] === r) return this.privValues[o];
                return t
            }, e.prototype.setProperty = function (e, t) {
                var r;
                r = "string" == typeof e ? e : n.PropertyId[e];
                for (var o = 0; o < this.privKeys.length; o++)
                    if (this.privKeys[o] === r) return void (this.privValues[o] = t);
                this.privKeys.push(r), this.privValues.push(t)
            }, e.prototype.clone = function () {
                for (var t = new e, r = 0; r < this.privKeys.length; r++) t.privKeys.push(this.privKeys[r]), t.privValues.push(this.privValues[r]);
                return t
            }, e
        }();
    t.PropertyCollection = o
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
        function (e) {
            e[e.SpeechServiceConnection_Key = 0] = "SpeechServiceConnection_Key", e[e.SpeechServiceConnection_Endpoint = 1] = "SpeechServiceConnection_Endpoint", e[e.SpeechServiceConnection_Region = 2] = "SpeechServiceConnection_Region", e[e.SpeechServiceAuthorization_Token = 3] = "SpeechServiceAuthorization_Token", e[e.SpeechServiceAuthorization_Type = 4] = "SpeechServiceAuthorization_Type", e[e.SpeechServiceConnection_EndpointId = 5] = "SpeechServiceConnection_EndpointId", e[e.SpeechServiceConnection_TranslationToLanguages = 6] = "SpeechServiceConnection_TranslationToLanguages", e[e.SpeechServiceConnection_TranslationVoice = 7] = "SpeechServiceConnection_TranslationVoice", e[e.SpeechServiceConnection_TranslationFeatures = 8] = "SpeechServiceConnection_TranslationFeatures", e[e.SpeechServiceConnection_IntentRegion = 9] = "SpeechServiceConnection_IntentRegion", e[e.SpeechServiceConnection_ProxyHostName = 10] = "SpeechServiceConnection_ProxyHostName", e[e.SpeechServiceConnection_ProxyPort = 11] = "SpeechServiceConnection_ProxyPort", e[e.SpeechServiceConnection_ProxyUserName = 12] = "SpeechServiceConnection_ProxyUserName", e[e.SpeechServiceConnection_ProxyPassword = 13] = "SpeechServiceConnection_ProxyPassword", e[e.SpeechServiceConnection_RecoMode = 14] = "SpeechServiceConnection_RecoMode", e[e.SpeechServiceConnection_RecoLanguage = 15] = "SpeechServiceConnection_RecoLanguage", e[e.Speech_SessionId = 16] = "Speech_SessionId", e[e.SpeechServiceResponse_RequestDetailedResultTrueFalse = 17] = "SpeechServiceResponse_RequestDetailedResultTrueFalse", e[e.SpeechServiceResponse_RequestProfanityFilterTrueFalse = 18] = "SpeechServiceResponse_RequestProfanityFilterTrueFalse", e[e.SpeechServiceResponse_JsonResult = 19] = "SpeechServiceResponse_JsonResult", e[e.SpeechServiceResponse_JsonErrorDetails = 20] = "SpeechServiceResponse_JsonErrorDetails", e[e.CancellationDetails_Reason = 21] = "CancellationDetails_Reason", e[e.CancellationDetails_ReasonText = 22] = "CancellationDetails_ReasonText", e[e.CancellationDetails_ReasonDetailedText = 23] = "CancellationDetails_ReasonDetailedText", e[e.LanguageUnderstandingServiceResponse_JsonResult = 24] = "LanguageUnderstandingServiceResponse_JsonResult", e[e.SpeechServiceConnection_Url = 25] = "SpeechServiceConnection_Url", e[e.SpeechServiceConnection_InitialSilenceTimeoutMs = 26] = "SpeechServiceConnection_InitialSilenceTimeoutMs", e[e.SpeechServiceConnection_EndSilenceTimeoutMs = 27] = "SpeechServiceConnection_EndSilenceTimeoutMs", e[e.SpeechServiceConnection_EnableAudioLogging = 28] = "SpeechServiceConnection_EnableAudioLogging", e[e.SpeechServiceResponse_ProfanityOption = 29] = "SpeechServiceResponse_ProfanityOption", e[e.SpeechServiceResponse_PostProcessingOption = 30] = "SpeechServiceResponse_PostProcessingOption", e[e.SpeechServiceResponse_RequestWordLevelTimestamps = 31] = "SpeechServiceResponse_RequestWordLevelTimestamps", e[e.SpeechServiceResponse_StablePartialResultThreshold = 32] = "SpeechServiceResponse_StablePartialResultThreshold", e[e.SpeechServiceResponse_OutputFormatOption = 33] = "SpeechServiceResponse_OutputFormatOption", e[e.SpeechServiceResponse_TranslationRequestStablePartialResult = 34] = "SpeechServiceResponse_TranslationRequestStablePartialResult", e[e.Conversation_ApplicationId = 35] = "Conversation_ApplicationId", e[e.Conversation_DialogType = 36] = "Conversation_DialogType", e[e.Conversation_Initial_Silence_Timeout = 37] = "Conversation_Initial_Silence_Timeout", e[e.Conversation_From_Id = 38] = "Conversation_From_Id", e[e.Conversation_Speech_Activity_Template = 39] = "Conversation_Speech_Activity_Template", e[e.SpeechServiceConnection_Host = 40] = "SpeechServiceConnection_Host", e[e.ConversationTranslator_Host = 41] = "ConversationTranslator_Host", e[e.ConversationTranslator_Name = 42] = "ConversationTranslator_Name", e[e.ConversationTranslator_CorrelationId = 43] = "ConversationTranslator_CorrelationId", e[e.ConversationTranslator_Token = 44] = "ConversationTranslator_Token"
        }(t.PropertyId || (t.PropertyId = {}))
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(25),
        o = r(4),
        i = r(32),
        s = r(30),
        a = function () {
            function e(e, t, r) {
                this.audioConfig = void 0 !== e ? e : s.AudioConfig.fromDefaultMicrophoneInput(), this.privDisposed = !1, this.privProperties = t.clone(), this.privConnectionFactory = r, this.implCommonRecognizerSetup()
            }
            return e.prototype.close = function () {
                i.Contracts.throwIfDisposed(this.privDisposed), this.dispose(!0)
            }, Object.defineProperty(e.prototype, "internalData", {
                get: function () {
                    return this.privReco
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.dispose = function (e) {
                this.privDisposed || (e && this.privReco && (this.privReco.audioSource.turnOff(), this.privReco.dispose()), this.privDisposed = !0)
            }, Object.defineProperty(e, "telemetryEnabled", {
                get: function () {
                    return n.ServiceRecognizerBase.telemetryDataEnabled
                },
                enumerable: !0,
                configurable: !0
            }), e.enableTelemetry = function (e) {
                n.ServiceRecognizerBase.telemetryDataEnabled = e
            }, e.prototype.implCommonRecognizerSetup = function () {
                var e = this,
                    t = "undefined" != typeof window ? "Browser" : "Node",
                    r = "unknown",
                    i = "unknown";
                "undefined" != typeof navigator && (t = t + "/" + navigator.platform, r = navigator.userAgent, i = navigator.appVersion);
                var a = this.createRecognizerConfig(new n.SpeechServiceConfig(new n.Context(new n.OS(t, r, i)))),
                    c = this.privProperties.getProperty(s.PropertyId.SpeechServiceConnection_Key, void 0),
                    p = c && "" !== c ? new n.CognitiveSubscriptionKeyAuthentication(c) : new n.CognitiveTokenAuthentication((function (t) {
                        var r = e.privProperties.getProperty(s.PropertyId.SpeechServiceAuthorization_Token, void 0);
                        return o.PromiseHelper.fromResult(r)
                    }), (function (t) {
                        var r = e.privProperties.getProperty(s.PropertyId.SpeechServiceAuthorization_Token, void 0);
                        return o.PromiseHelper.fromResult(r)
                    }));
                this.privReco = this.createServiceRecognizer(p, this.privConnectionFactory, this.audioConfig, a)
            }, e.prototype.recognizeOnceAsyncImpl = function (e, t, r) {
                var n = this;
                try {
                    i.Contracts.throwIfDisposed(this.privDisposed), this.implRecognizerStop().on((function (o) {
                        try {
                            n.privReco.recognize(e, (function (e) {
                                n.implRecognizerStop().on((function (r) {
                                    t && t(e)
                                }), (function (e) {
                                    r && r(e)
                                }))
                            }), (function (e) {
                                n.implRecognizerStop(), r && r(e)
                            })).on((function (e) { }), (function (e) {
                                r && r(e)
                            }))
                        } catch (e) {
                            if (r)
                                if (e instanceof Error) {
                                    var i = e;
                                    r(i.name + ": " + i.message)
                                } else r(e);
                            n.dispose(!0)
                        }
                    }), (function (e) {
                        r && r(e)
                    }))
                } catch (e) {
                    if (r)
                        if (e instanceof Error) {
                            var o = e;
                            r(o.name + ": " + o.message)
                        } else r(e);
                    this.dispose(!0)
                }
            }, e.prototype.startContinuousRecognitionAsyncImpl = function (e, t, r) {
                var n = this;
                try {
                    i.Contracts.throwIfDisposed(this.privDisposed), this.implRecognizerStop().on((function (o) {
                        n.privReco.recognize(e, void 0, void 0).on((function (e) {
                            if (t) {
                                try {
                                    t()
                                } catch (e) {
                                    r && r(e)
                                }
                                t = void 0
                            }
                        }), (function (e) {
                            r && r(e), n.dispose(!0)
                        }))
                    }), (function (e) {
                        r && r(e), n.dispose(!0)
                    }))
                } catch (e) {
                    if (r)
                        if (e instanceof Error) {
                            var o = e;
                            r(o.name + ": " + o.message)
                        } else r(e);
                    this.dispose(!0)
                }
            }, e.prototype.stopContinuousRecognitionAsyncImpl = function (e, t) {
                try {
                    i.Contracts.throwIfDisposed(this.privDisposed), this.implRecognizerStop().on((function (r) {
                        if (e) try {
                            e()
                        } catch (e) {
                            t && t(e)
                        }
                    }), (function (e) {
                        t && t(e)
                    }))
                } catch (e) {
                    if (t)
                        if (e instanceof Error) {
                            var r = e;
                            t(r.name + ": " + r.message)
                        } else t(e);
                    this.dispose(!0)
                }
            }, e.prototype.implRecognizerStop = function () {
                return this.privReco ? this.privReco.stopRecognizing() : o.PromiseHelper.fromResult(!0)
            }, e
        }();
    t.Recognizer = a
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(25),
        s = r(59),
        a = r(32),
        c = r(30),
        p = function (e) {
            function t(t, r) {
                var n = this,
                    o = t;
                return a.Contracts.throwIfNull(o, "speechConfig"), a.Contracts.throwIfNullOrWhitespace(o.properties.getProperty(c.PropertyId.SpeechServiceConnection_RecoLanguage), c.PropertyId[c.PropertyId.SpeechServiceConnection_RecoLanguage]), (n = e.call(this, r, o.properties, new s.SpeechConnectionFactory) || this).privDisposedSpeechRecognizer = !1, n
            }
            return o(t, e), Object.defineProperty(t.prototype, "endpointId", {
                get: function () {
                    return a.Contracts.throwIfDisposed(this.privDisposedSpeechRecognizer), this.properties.getProperty(c.PropertyId.SpeechServiceConnection_EndpointId, "00000000-0000-0000-0000-000000000000")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "authorizationToken", {
                get: function () {
                    return this.properties.getProperty(c.PropertyId.SpeechServiceAuthorization_Token)
                },
                set: function (e) {
                    a.Contracts.throwIfNullOrWhitespace(e, "token"), this.properties.setProperty(c.PropertyId.SpeechServiceAuthorization_Token, e)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "speechRecognitionLanguage", {
                get: function () {
                    return a.Contracts.throwIfDisposed(this.privDisposedSpeechRecognizer), this.properties.getProperty(c.PropertyId.SpeechServiceConnection_RecoLanguage)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "outputFormat", {
                get: function () {
                    return a.Contracts.throwIfDisposed(this.privDisposedSpeechRecognizer), this.properties.getProperty(i.OutputFormatPropertyName, c.OutputFormat[c.OutputFormat.Simple]) === c.OutputFormat[c.OutputFormat.Simple] ? c.OutputFormat.Simple : c.OutputFormat.Detailed
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "properties", {
                get: function () {
                    return this.privProperties
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.recognizeOnceAsync = function (e, t) {
                this.recognizeOnceAsyncImpl(i.RecognitionMode.Interactive, e, t)
            }, t.prototype.startContinuousRecognitionAsync = function (e, t) {
                this.startContinuousRecognitionAsyncImpl(i.RecognitionMode.Conversation, e, t)
            }, t.prototype.stopContinuousRecognitionAsync = function (e, t) {
                this.stopContinuousRecognitionAsyncImpl(e, t)
            }, t.prototype.startKeywordRecognitionAsync = function (e, t, r) {
                a.Contracts.throwIfNull(e, "model"), r && r("Not yet implemented.")
            }, t.prototype.stopKeywordRecognitionAsync = function (e, t) {
                e && e()
            }, t.prototype.close = function () {
                a.Contracts.throwIfDisposed(this.privDisposedSpeechRecognizer), this.dispose(!0)
            }, t.prototype.dispose = function (t) {
                this.privDisposedSpeechRecognizer || (t && (this.implRecognizerStop(), this.privDisposedSpeechRecognizer = !0), e.prototype.dispose.call(this, t))
            }, t.prototype.createRecognizerConfig = function (e) {
                return new i.RecognizerConfig(e, this.properties)
            }, t.prototype.createServiceRecognizer = function (e, t, r, n) {
                var o = r;
                return new i.SpeechServiceRecognizer(e, t, o, n, this)
            }, t
        }(c.Recognizer);
    t.SpeechRecognizer = p
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(2),
        s = r(25),
        a = r(30),
        c = r(60),
        p = r(25),
        u = r(61),
        v = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.interactiveRelativeUri = "/speech/recognition/interactive/cognitiveservices/v1", t.conversationRelativeUri = "/speech/recognition/conversation/cognitiveservices/v1", t.dictationRelativeUri = "/speech/recognition/dictation/cognitiveservices/v1", t.create = function (e, r, n) {
                    var o = e.parameters.getProperty(a.PropertyId.SpeechServiceConnection_Endpoint, void 0),
                        c = e.parameters.getProperty(a.PropertyId.SpeechServiceConnection_Region, void 0),
                        v = e.parameters.getProperty(a.PropertyId.SpeechServiceConnection_Host, "wss://" + c + ".stt.speech.microsoft.com"),
                        l = {},
                        f = e.parameters.getProperty(a.PropertyId.SpeechServiceConnection_EndpointId, void 0),
                        h = e.parameters.getProperty(a.PropertyId.SpeechServiceConnection_RecoLanguage, void 0);
                    if (f ? o && -1 !== o.search(u.QueryParameterNames.DeploymentIdParamName) || (l[u.QueryParameterNames.DeploymentIdParamName] = f) : h && (o && -1 !== o.search(u.QueryParameterNames.LanguageParamName) || (l[u.QueryParameterNames.LanguageParamName] = h)), o && -1 !== o.search(u.QueryParameterNames.FormatParamName) || (l[u.QueryParameterNames.FormatParamName] = e.parameters.getProperty(s.OutputFormatPropertyName, a.OutputFormat[a.OutputFormat.Simple]).toLowerCase()), t.setCommonUrlParams(e, l, o), !o) switch (e.recognitionMode) {
                        case p.RecognitionMode.Conversation:
                            o = "true" === e.parameters.getProperty(s.ForceDictationPropertyName, "false") ? v + t.dictationRelativeUri : v + t.conversationRelativeUri;
                            break;
                        case p.RecognitionMode.Dictation:
                            o = v + t.dictationRelativeUri;
                            break;
                        default:
                            o = v + t.interactiveRelativeUri
                    }
                    var d = {};
                    return void 0 !== r.token && "" !== r.token && (d[r.headerName] = r.token), d[u.QueryParameterNames.ConnectionIdHeader] = n, e.parameters.setProperty(a.PropertyId.SpeechServiceConnection_Url, o), new i.WebsocketConnection(o, l, d, new p.WebsocketMessageFormatter, i.ProxyInfo.fromRecognizerConfig(e), n)
                }, t
            }
            return o(t, e), t
        }(c.ConnectionFactoryBase);
    t.SpeechConnectionFactory = v
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(25),
        o = r(30),
        i = r(61),
        s = function () {
            function e() { }
            return e.prototype.setCommonUrlParams = function (e, t, r) {
                this.setUrlParameter(o.PropertyId.SpeechServiceConnection_EnableAudioLogging, i.QueryParameterNames.EnableAudioLogging, e, t, r), this.setUrlParameter(o.PropertyId.SpeechServiceResponse_RequestWordLevelTimestamps, i.QueryParameterNames.EnableWordLevelTimestamps, e, t, r), this.setUrlParameter(o.PropertyId.SpeechServiceResponse_ProfanityOption, i.QueryParameterNames.Profanify, e, t, r), this.setUrlParameter(o.PropertyId.SpeechServiceConnection_InitialSilenceTimeoutMs, i.QueryParameterNames.InitialSilenceTimeoutMs, e, t, r), this.setUrlParameter(o.PropertyId.SpeechServiceConnection_EndSilenceTimeoutMs, i.QueryParameterNames.EndSilenceTimeoutMs, e, t, r), this.setUrlParameter(o.PropertyId.SpeechServiceResponse_StablePartialResultThreshold, i.QueryParameterNames.StableIntermediateThreshold, e, t, r);
                var s = JSON.parse(e.parameters.getProperty(n.ServicePropertiesPropertyName, "{}"));
                Object.keys(s).forEach((function (e, r, n) {
                    t[e] = s[e]
                }))
            }, e.prototype.setUrlParameter = function (e, t, r, n, o) {
                var i = r.parameters.getProperty(e, void 0);
                !i || o && -1 !== o.search(t) || (n[t] = i.toLocaleLowerCase())
            }, e
        }();
    t.ConnectionFactoryBase = s
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function () {
        function e() { }
        return Object.defineProperty(e, "TestHooksParamName", {
            get: function () {
                return "testhooks"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "ConnectionIdHeader", {
            get: function () {
                return "X-ConnectionId"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "DeploymentIdParamName", {
            get: function () {
                return "cid"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "FormatParamName", {
            get: function () {
                return "format"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "LanguageParamName", {
            get: function () {
                return "language"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "TranslationFromParamName", {
            get: function () {
                return "from"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "TranslationToParamName", {
            get: function () {
                return "to"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "Profanify", {
            get: function () {
                return "profanity"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "EnableAudioLogging", {
            get: function () {
                return "storeAudio"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "EnableWordLevelTimestamps", {
            get: function () {
                return "wordLevelTimestamps"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "InitialSilenceTimeoutMs", {
            get: function () {
                return "initialSilenceTimeoutMs"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "EndSilenceTimeoutMs", {
            get: function () {
                return "endSilenceTimeoutMs"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "StableIntermediateThreshold", {
            get: function () {
                return "stableIntermediateThreshold"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "StableTranslation", {
            get: function () {
                return "stableTranslation"
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.QueryParameterNames = n
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(25),
        s = r(32),
        a = r(30),
        c = function (e) {
            function t(t, r) {
                var n = this;
                s.Contracts.throwIfNullOrUndefined(t, "speechConfig");
                var o = t;
                return s.Contracts.throwIfNullOrUndefined(o, "speechConfig"), (n = e.call(this, r, o.properties, new i.IntentConnectionFactory) || this).privAddedIntents = [], n.privAddedLmIntents = {}, n.privDisposedIntentRecognizer = !1, n.privProperties = o.properties, s.Contracts.throwIfNullOrWhitespace(n.properties.getProperty(a.PropertyId.SpeechServiceConnection_RecoLanguage), a.PropertyId[a.PropertyId.SpeechServiceConnection_RecoLanguage]), n
            }
            return o(t, e), Object.defineProperty(t.prototype, "speechRecognitionLanguage", {
                get: function () {
                    return s.Contracts.throwIfDisposed(this.privDisposedIntentRecognizer), this.properties.getProperty(a.PropertyId.SpeechServiceConnection_RecoLanguage)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "authorizationToken", {
                get: function () {
                    return this.properties.getProperty(a.PropertyId.SpeechServiceAuthorization_Token)
                },
                set: function (e) {
                    this.properties.setProperty(a.PropertyId.SpeechServiceAuthorization_Token, e)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "properties", {
                get: function () {
                    return this.privProperties
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.recognizeOnceAsync = function (e, t) {
                if (s.Contracts.throwIfDisposed(this.privDisposedIntentRecognizer), 0 !== Object.keys(this.privAddedLmIntents).length || void 0 !== this.privUmbrellaIntent) {
                    var r = this.buildSpeechContext();
                    this.privReco.speechContext.setSection("intent", r.Intent), this.privReco.dynamicGrammar.addReferenceGrammar(r.ReferenceGrammars), this.privReco.setIntents(this.privAddedLmIntents, this.privUmbrellaIntent)
                }
                this.recognizeOnceAsyncImpl(i.RecognitionMode.Interactive, e, t)
            }, t.prototype.startContinuousRecognitionAsync = function (e, t) {
                if (0 !== Object.keys(this.privAddedLmIntents).length) {
                    var r = this.buildSpeechContext();
                    this.privReco.speechContext.setSection("intent", r.Intent), this.privReco.dynamicGrammar.addReferenceGrammar(r.ReferenceGrammars), this.privReco.setIntents(this.privAddedLmIntents, this.privUmbrellaIntent)
                }
                this.startContinuousRecognitionAsyncImpl(i.RecognitionMode.Conversation, e, t)
            }, t.prototype.stopContinuousRecognitionAsync = function (e, t) {
                this.stopContinuousRecognitionAsyncImpl(e, t)
            }, t.prototype.startKeywordRecognitionAsync = function (e, t, r) {
                s.Contracts.throwIfNull(e, "model"), r && r("Not yet implemented.")
            }, t.prototype.stopKeywordRecognitionAsync = function (e, t) {
                e && e()
            }, t.prototype.addIntent = function (e, t) {
                s.Contracts.throwIfDisposed(this.privDisposedIntentRecognizer), s.Contracts.throwIfNullOrWhitespace(t, "intentId"), s.Contracts.throwIfNullOrWhitespace(e, "simplePhrase"), this.privAddedIntents.push([t, e])
            }, t.prototype.addIntentWithLanguageModel = function (e, t, r) {
                s.Contracts.throwIfDisposed(this.privDisposedIntentRecognizer), s.Contracts.throwIfNullOrWhitespace(e, "intentId"), s.Contracts.throwIfNull(t, "model");
                var n = t;
                s.Contracts.throwIfNullOrWhitespace(n.appId, "model.appId"), this.privAddedLmIntents[e] = new i.AddedLmIntent(n, r)
            }, t.prototype.addAllIntents = function (e, t) {
                s.Contracts.throwIfNull(e, "model");
                var r = e;
                s.Contracts.throwIfNullOrWhitespace(r.appId, "model.appId"), this.privUmbrellaIntent = new i.AddedLmIntent(r, t)
            }, t.prototype.close = function () {
                s.Contracts.throwIfDisposed(this.privDisposedIntentRecognizer), this.dispose(!0)
            }, t.prototype.createRecognizerConfig = function (e) {
                return new i.RecognizerConfig(e, this.properties)
            }, t.prototype.createServiceRecognizer = function (e, t, r, n) {
                var o = r;
                return new i.IntentServiceRecognizer(e, t, o, n, this)
            }, t.prototype.dispose = function (t) {
                this.privDisposedIntentRecognizer || t && (this.privDisposedIntentRecognizer = !0, e.prototype.dispose.call(this, t))
            }, t.prototype.buildSpeechContext = function () {
                var e, t, r, n = [];
                void 0 !== this.privUmbrellaIntent && (e = this.privUmbrellaIntent.modelImpl.appId, t = this.privUmbrellaIntent.modelImpl.region, r = this.privUmbrellaIntent.modelImpl.subscriptionKey);
                for (var o = 0, i = Object.keys(this.privAddedLmIntents); o < i.length; o++) {
                    var s = i[o],
                        c = this.privAddedLmIntents[s];
                    if (void 0 === e) e = c.modelImpl.appId;
                    else if (e !== c.modelImpl.appId) throw new Error("Intents must all be from the same LUIS model");
                    if (void 0 === t) t = c.modelImpl.region;
                    else if (t !== c.modelImpl.region) throw new Error("Intents must all be from the same LUIS model in a single region");
                    if (void 0 === r) r = c.modelImpl.subscriptionKey;
                    else if (r !== c.modelImpl.subscriptionKey) throw new Error("Intents must all use the same subscription key");
                    var p = "luis/" + e + "-PRODUCTION#" + s;
                    n.push(p)
                }
                return {
                    Intent: {
                        id: e,
                        key: void 0 === r ? this.privProperties.getProperty(a.PropertyId[a.PropertyId.SpeechServiceConnection_Key]) : r,
                        provider: "LUIS"
                    },
                    ReferenceGrammars: void 0 === this.privUmbrellaIntent ? n : ["luis/" + e + "-PRODUCTION"]
                }
            }, t
        }(a.Recognizer);
    t.IntentRecognizer = c
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(25),
        s = r(32),
        a = r(30),
        c = function (e) {
            function t(t, r) {
                var n = this,
                    o = t;
                return s.Contracts.throwIfNull(o, "speechConfig"), (n = e.call(this, r, o.properties, new i.TranslationConnectionFactory) || this).privDisposedTranslationRecognizer = !1, n.privProperties = o.properties.clone(), void 0 !== n.properties.getProperty(a.PropertyId.SpeechServiceConnection_TranslationVoice, void 0) && s.Contracts.throwIfNullOrWhitespace(n.properties.getProperty(a.PropertyId.SpeechServiceConnection_TranslationVoice), a.PropertyId[a.PropertyId.SpeechServiceConnection_TranslationVoice]), s.Contracts.throwIfNullOrWhitespace(n.properties.getProperty(a.PropertyId.SpeechServiceConnection_TranslationToLanguages), a.PropertyId[a.PropertyId.SpeechServiceConnection_TranslationToLanguages]), s.Contracts.throwIfNullOrWhitespace(n.properties.getProperty(a.PropertyId.SpeechServiceConnection_RecoLanguage), a.PropertyId[a.PropertyId.SpeechServiceConnection_RecoLanguage]), n
            }
            return o(t, e), Object.defineProperty(t.prototype, "speechRecognitionLanguage", {
                get: function () {
                    return s.Contracts.throwIfDisposed(this.privDisposedTranslationRecognizer), this.properties.getProperty(a.PropertyId.SpeechServiceConnection_RecoLanguage)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "targetLanguages", {
                get: function () {
                    return s.Contracts.throwIfDisposed(this.privDisposedTranslationRecognizer), this.properties.getProperty(a.PropertyId.SpeechServiceConnection_TranslationToLanguages).split(",")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "voiceName", {
                get: function () {
                    return s.Contracts.throwIfDisposed(this.privDisposedTranslationRecognizer), this.properties.getProperty(a.PropertyId.SpeechServiceConnection_TranslationVoice, void 0)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "authorizationToken", {
                get: function () {
                    return this.properties.getProperty(a.PropertyId.SpeechServiceAuthorization_Token)
                },
                set: function (e) {
                    this.properties.setProperty(a.PropertyId.SpeechServiceAuthorization_Token, e)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "properties", {
                get: function () {
                    return this.privProperties
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.recognizeOnceAsync = function (e, t) {
                s.Contracts.throwIfDisposed(this.privDisposedTranslationRecognizer), this.recognizeOnceAsyncImpl(i.RecognitionMode.Conversation, e, t)
            }, t.prototype.startContinuousRecognitionAsync = function (e, t) {
                this.startContinuousRecognitionAsyncImpl(i.RecognitionMode.Conversation, e, t)
            }, t.prototype.stopContinuousRecognitionAsync = function (e, t) {
                this.stopContinuousRecognitionAsyncImpl(e, t)
            }, t.prototype.close = function () {
                s.Contracts.throwIfDisposed(this.privDisposedTranslationRecognizer), this.dispose(!0)
            }, t.prototype.dispose = function (t) {
                this.privDisposedTranslationRecognizer || t && (this.implRecognizerStop(), this.privDisposedTranslationRecognizer = !0, e.prototype.dispose.call(this, t))
            }, t.prototype.createRecognizerConfig = function (e) {
                return new i.RecognizerConfig(e, this.properties)
            }, t.prototype.createServiceRecognizer = function (e, t, r, n) {
                var o = r;
                return new i.TranslationServiceRecognizer(e, t, o, n, this)
            }, t
        }(a.Recognizer);
    t.TranslationRecognizer = c
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(30),
        o = function () {
            function e() {
                this.privMap = new n.PropertyCollection
            }
            return e.prototype.get = function (e, t) {
                return this.privMap.getProperty(e, t)
            }, e.prototype.set = function (e, t) {
                this.privMap.setProperty(e, t)
            }, e
        }();
    t.Translations = o
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
        function (e) {
            e[e.NotRecognized = 0] = "NotRecognized", e[e.InitialSilenceTimeout = 1] = "InitialSilenceTimeout", e[e.InitialBabbleTimeout = 2] = "InitialBabbleTimeout"
        }(t.NoMatchReason || (t.NoMatchReason = {}))
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(25),
        o = r(30),
        i = function () {
            function e(e) {
                this.privReason = e
            }
            return e.fromResult = function (t) {
                var r = n.SimpleSpeechPhrase.fromJSON(t.json),
                    i = o.NoMatchReason.NotRecognized;
                switch (r.RecognitionStatus) {
                    case n.RecognitionStatus.BabbleTimeout:
                        i = o.NoMatchReason.InitialBabbleTimeout;
                        break;
                    case n.RecognitionStatus.InitialSilenceTimeout:
                        i = o.NoMatchReason.InitialSilenceTimeout;
                        break;
                    default:
                        i = o.NoMatchReason.NotRecognized
                }
                return new e(i)
            }, Object.defineProperty(e.prototype, "reason", {
                get: function () {
                    return this.privReason
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
    t.NoMatchDetails = i
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function () {
        function e(e, t, r, n, o) {
            this.privCancelReason = t, this.privErrorDetails = r, this.privResult = o, this.privSessionId = e, this.privErrorCode = n
        }
        return Object.defineProperty(e.prototype, "result", {
            get: function () {
                return this.privResult
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "sessionId", {
            get: function () {
                return this.privSessionId
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "reason", {
            get: function () {
                return this.privCancelReason
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "errorCode", {
            get: function () {
                return this.privErrorCode
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "errorDetails", {
            get: function () {
                return this.privErrorDetails
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.TranslationRecognitionCanceledEventArgs = n
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function (e) {
        function t(t, r, n, o, i, s) {
            var a = e.call(this, o, i, s) || this;
            return a.privReason = t, a.privErrorDetails = r, a.privErrorCode = n, a
        }
        return o(t, e), Object.defineProperty(t.prototype, "reason", {
            get: function () {
                return this.privReason
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "errorCode", {
            get: function () {
                return this.privErrorCode
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "errorDetails", {
            get: function () {
                return this.privErrorDetails
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(r(30).IntentRecognitionEventArgs);
    t.IntentRecognitionCanceledEventArgs = i
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(25),
        o = r(30),
        i = function () {
            function e(e, t, r) {
                this.privReason = e, this.privErrorDetails = t, this.privErrorCode = r
            }
            return e.fromResult = function (t) {
                var r = o.CancellationReason.Error,
                    i = o.CancellationErrorCode.NoError;
                if (t.json) {
                    var s = n.SimpleSpeechPhrase.fromJSON(t.json);
                    r = n.EnumTranslation.implTranslateCancelResult(s.RecognitionStatus)
                }
                return t.properties && (i = o.CancellationErrorCode[t.properties.getProperty(n.CancellationErrorCodePropertyName, o.CancellationErrorCode[o.CancellationErrorCode.NoError])]), new e(r, t.errorDetails, i)
            }, Object.defineProperty(e.prototype, "reason", {
                get: function () {
                    return this.privReason
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "errorDetails", {
                get: function () {
                    return this.privErrorDetails
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "ErrorCode", {
                get: function () {
                    return this.privErrorCode
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
    t.CancellationDetails = i
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
        function (e) {
            e[e.NoError = 0] = "NoError", e[e.AuthenticationFailure = 1] = "AuthenticationFailure", e[e.BadRequestParameters = 2] = "BadRequestParameters", e[e.TooManyRequests = 3] = "TooManyRequests", e[e.ConnectionFailure = 4] = "ConnectionFailure", e[e.ServiceTimeout = 5] = "ServiceTimeout", e[e.ServiceError = 6] = "ServiceError", e[e.RuntimeError = 7] = "RuntimeError"
        }(t.CancellationErrorCode || (t.CancellationErrorCode = {}))
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return o(t, e), t
    }(r(30).SessionEventArgs);
    t.ConnectionEventArgs = i
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function (e) {
        function t(t, r, n) {
            var o = e.call(this, n) || this;
            return o.privJsonResult = t, o.privEventName = r, o
        }
        return o(t, e), Object.defineProperty(t.prototype, "jsonString", {
            get: function () {
                return this.privJsonResult
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "eventName", {
            get: function () {
                return this.privEventName
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(r(30).SessionEventArgs);
    t.ServiceEventArgs = i
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(30),
        o = function () {
            function e() { }
            return e.fromRecognizer = function (t) {
                var r = t.internalData,
                    o = new e;
                return o.privServiceRecognizer = r, o.privEventListener = o.privServiceRecognizer.connectionEvents.attach((function (e) {
                    "ConnectionEstablishedEvent" === e.name ? o.connected && o.connected(new n.ConnectionEventArgs(e.connectionId)) : "ConnectionClosedEvent" === e.name && o.disconnected && o.disconnected(new n.ConnectionEventArgs(e.connectionId))
                })), o.privServiceEventListener = o.privServiceRecognizer.serviceEvents.attach((function (e) {
                    o.receivedServiceMessage && o.receivedServiceMessage(new n.ServiceEventArgs(e.jsonString, e.name))
                })), o
            }, e.prototype.openConnection = function () {
                this.privServiceRecognizer.connect()
            }, e.prototype.closeConnection = function () {
                this.privServiceRecognizer.disconnect()
            }, e.prototype.close = function () { }, e
        }();
    t.Connection = o
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function () {
        function e(e) {
            this.privGrammerBuilder = e.dynamicGrammar
        }
        return e.fromRecognizer = function (t) {
            return new e(t.internalData)
        }, e.prototype.addPhrase = function (e) {
            this.privGrammerBuilder.addPhrase(e)
        }, e.prototype.addPhrases = function (e) {
            this.privGrammerBuilder.addPhrase(e)
        }, e.prototype.clear = function () {
            this.privGrammerBuilder.clearPhrases()
        }, e
    }();
    t.PhraseListGrammar = n
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(32),
        s = r(30),
        a = function () { };
    t.DialogServiceConfig = a;
    var c = function (e) {
        function t() {
            var t = e.call(this) || this;
            return t.privSpeechConfig = new s.SpeechConfigImpl, t
        }
        return o(t, e), Object.defineProperty(t.prototype, "properties", {
            get: function () {
                return this.privSpeechConfig.properties
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "speechRecognitionLanguage", {
            get: function () {
                return this.privSpeechConfig.speechRecognitionLanguage
            },
            set: function (e) {
                i.Contracts.throwIfNullOrWhitespace(e, "value"), this.privSpeechConfig.speechRecognitionLanguage = e
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.setProperty = function (e, t) {
            this.privSpeechConfig.setProperty(e, t)
        }, t.prototype.getProperty = function (e, t) {
            return this.privSpeechConfig.getProperty(e)
        }, t.prototype.setProxy = function (e, t, r, n) {
            this.setProperty(s.PropertyId.SpeechServiceConnection_ProxyHostName, e), this.setProperty(s.PropertyId.SpeechServiceConnection_ProxyPort, "" + t), r && this.setProperty(s.PropertyId.SpeechServiceConnection_ProxyUserName, r), n && this.setProperty(s.PropertyId.SpeechServiceConnection_ProxyPassword, n)
        }, t.prototype.setServiceProperty = function (e, t, r) {
            this.privSpeechConfig.setServiceProperty(e, t, r)
        }, t.prototype.close = function () { }, t
    }(a);
    t.DialogServiceConfigImpl = c
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(32),
        s = r(75),
        a = r(30),
        c = function (e) {
            function t() {
                return e.call(this) || this
            }
            return o(t, e), t.fromSubscription = function (e, t, r) {
                i.Contracts.throwIfNullOrWhitespace(e, "subscription"), i.Contracts.throwIfNullOrWhitespace(t, "region");
                var n = new s.DialogServiceConfigImpl;
                return n.setProperty(a.PropertyId.Conversation_DialogType, "bot_framework"), n.setProperty(a.PropertyId.SpeechServiceConnection_Key, e), n.setProperty(a.PropertyId.SpeechServiceConnection_Region, t), r && n.setProperty(a.PropertyId.Conversation_ApplicationId, r), n
            }, t.fromAuthorizationToken = function (e, t) {
                i.Contracts.throwIfNullOrWhitespace(e, "authorizationToken"), i.Contracts.throwIfNullOrWhitespace(t, "region");
                var r = new s.DialogServiceConfigImpl;
                return r.setProperty(a.PropertyId.Conversation_DialogType, "bot_framework"), r.setProperty(a.PropertyId.SpeechServiceAuthorization_Token, e), r.setProperty(a.PropertyId.SpeechServiceConnection_Region, t), r
            }, t
        }(s.DialogServiceConfigImpl);
    t.BotFrameworkConfig = c
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(32),
        s = r(75),
        a = r(30),
        c = function (e) {
            function t() {
                return e.call(this) || this
            }
            return o(t, e), t.fromSubscription = function (e, t, r) {
                i.Contracts.throwIfNullOrWhitespace(e, "applicationId"), i.Contracts.throwIfNullOrWhitespace(t, "subscription"), i.Contracts.throwIfNullOrWhitespace(r, "region");
                var n = new s.DialogServiceConfigImpl;
                return n.setProperty(a.PropertyId.Conversation_DialogType, "custom_commands"), n.setProperty(a.PropertyId.Conversation_ApplicationId, e), n.setProperty(a.PropertyId.SpeechServiceConnection_Key, t), n.setProperty(a.PropertyId.SpeechServiceConnection_Region, r), n
            }, t.fromAuthorizationToken = function (e, t, r) {
                i.Contracts.throwIfNullOrWhitespace(e, "applicationId"), i.Contracts.throwIfNullOrWhitespace(t, "authorizationToken"), i.Contracts.throwIfNullOrWhitespace(r, "region");
                var n = new s.DialogServiceConfigImpl;
                return n.setProperty(a.PropertyId.Conversation_DialogType, "custom_commands"), n.setProperty(a.PropertyId.Conversation_ApplicationId, e), n.setProperty(a.PropertyId.SpeechServiceAuthorization_Token, t), n.setProperty(a.PropertyId.SpeechServiceConnection_Region, r), n
            }, Object.defineProperty(t.prototype, "applicationId", {
                get: function () {
                    return this.getProperty(a.PropertyId.Conversation_ApplicationId)
                },
                set: function (e) {
                    i.Contracts.throwIfNullOrWhitespace(e, "value"), this.setProperty(a.PropertyId.Conversation_ApplicationId, e)
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(s.DialogServiceConfigImpl);
    t.CustomCommandsConfig = c
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(79),
        s = r(25),
        a = r(32),
        c = r(30),
        p = r(56),
        u = function (e) {
            function t(t, r) {
                var n = this,
                    o = t;
                a.Contracts.throwIfNull(t, "dialogConfig"), (n = e.call(this, r, o.properties, new i.DialogConnectionFactory) || this).isTurnComplete = !0, n.privIsDisposed = !1, n.privProperties = o.properties.clone();
                var s = n.buildAgentConfig();
                return n.privReco.agentConfig.set(s), n
            }
            return o(t, e), t.prototype.connect = function () {
                this.privReco.connect()
            }, t.prototype.disconnect = function () {
                this.privReco.disconnect()
            }, Object.defineProperty(t.prototype, "authorizationToken", {
                get: function () {
                    return this.properties.getProperty(p.PropertyId.SpeechServiceAuthorization_Token)
                },
                set: function (e) {
                    a.Contracts.throwIfNullOrWhitespace(e, "token"), this.properties.setProperty(p.PropertyId.SpeechServiceAuthorization_Token, e)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "properties", {
                get: function () {
                    return this.privProperties
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "speechActivityTemplate", {
                get: function () {
                    return this.properties.getProperty(p.PropertyId.Conversation_Speech_Activity_Template)
                },
                set: function (e) {
                    this.properties.setProperty(p.PropertyId.Conversation_Speech_Activity_Template, e)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.listenOnceAsync = function (e, t) {
                var r = this;
                if (this.isTurnComplete) try {
                    a.Contracts.throwIfDisposed(this.privIsDisposed), this.connect(), this.implRecognizerStop(), this.isTurnComplete = !1, this.privReco.recognize(s.RecognitionMode.Conversation, (function (t) {
                        r.implRecognizerStop(), r.isTurnComplete = !0, e && e(t)
                    }), (function (e) {
                        r.implRecognizerStop(), r.isTurnComplete = !0, t && t(e)
                    })).on((function (e) { }), (function (e) {
                        t && t(e)
                    }))
                } catch (e) {
                    if (t)
                        if (e instanceof Error) {
                            var n = e;
                            t(n.name + ": " + n.message)
                        } else t(e);
                    this.dispose(!0)
                }
            }, t.prototype.sendActivityAsync = function (e) {
                this.privReco.sendMessage(e)
            }, t.prototype.close = function () {
                a.Contracts.throwIfDisposed(this.privIsDisposed), this.dispose(!0)
            }, t.prototype.dispose = function (t) {
                this.privIsDisposed || t && (this.implRecognizerStop(), this.privIsDisposed = !0, e.prototype.dispose.call(this, t))
            }, t.prototype.createRecognizerConfig = function (e) {
                return new s.RecognizerConfig(e, this.privProperties)
            }, t.prototype.createServiceRecognizer = function (e, t, r, n) {
                var o = r;
                return new s.DialogServiceAdapter(e, t, o, n, this)
            }, t.prototype.buildAgentConfig = function () {
                return {
                    botInfo: {
                        commType: this.properties.getProperty("Conversation_Communication_Type", "Default"),
                        commandsCulture: void 0,
                        connectionId: this.properties.getProperty(p.PropertyId.Conversation_ApplicationId),
                        conversationId: void 0,
                        fromId: this.properties.getProperty(p.PropertyId.Conversation_From_Id, void 0)
                    },
                    version: .2
                }
            }, t
        }(c.Recognizer);
    t.DialogServiceConnector = u
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(2),
        s = r(30),
        a = r(60),
        c = r(25),
        p = r(61),
        u = "convai.speech.microsoft.com",
        v = {
            authHeader: "X-DLS-Secret",
            resourcePath: "",
            version: "v3"
        },
        l = {
            authHeader: "X-CommandsAppId",
            resourcePath: "commands",
            version: "v1"
        },
        f = "api";
    var h = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.create = function (e, r, n) {
                var o = e.parameters.getProperty(s.PropertyId.Conversation_ApplicationId, ""),
                    a = e.parameters.getProperty(s.PropertyId.Conversation_DialogType),
                    h = e.parameters.getProperty(s.PropertyId.SpeechServiceConnection_Region),
                    d = e.parameters.getProperty(s.PropertyId.SpeechServiceConnection_RecoLanguage, "en-US"),
                    g = {};
                g[p.QueryParameterNames.LanguageParamName] = d, g[p.QueryParameterNames.FormatParamName] = e.parameters.getProperty(s.PropertyId.SpeechServiceResponse_OutputFormatOption, s.OutputFormat[s.OutputFormat.Simple]).toLowerCase();
                var y = function (e) {
                    switch (e) {
                        case "custom_commands":
                            return l;
                        case "bot_framework":
                            return v
                    }
                    throw new Error("Invalid dialog type '" + e + "'")
                }(a),
                    m = y.resourcePath,
                    C = y.version,
                    S = y.authHeader,
                    P = {};
                null != r.token && "" !== r.token && (P[r.headerName] = r.token), P[p.QueryParameterNames.ConnectionIdHeader] = n, "" !== o && (P[S] = o);
                var b = e.parameters.getProperty(s.PropertyId.SpeechServiceConnection_Endpoint, "");
                return "" === b && (b = "" === o ? "wss://" + h + "." + u + "/" + f + "/" + C : "wss://" + h + "." + u + "/" + m + "/" + f + "/" + C), t.setCommonUrlParams(e, g, b), new i.WebsocketConnection(b, g, P, new c.WebsocketMessageFormatter, i.ProxyInfo.fromRecognizerConfig(e), n)
            }, t
        }
        return o(t, e), t
    }(a.ConnectionFactoryBase);
    t.DialogConnectionFactory = h
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function () {
        function e(e, t) {
            this.privActivity = e, this.privAudioStream = t
        }
        return Object.defineProperty(e.prototype, "activity", {
            get: function () {
                return this.privActivity
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "audioStream", {
            get: function () {
                return this.privAudioStream
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.ActivityReceivedEventArgs = n
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
        function (e) {
            e[e.UriQueryParameter = 0] = "UriQueryParameter"
        }(t.ServicePropertyChannel || (t.ServicePropertyChannel = {}))
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
        function (e) {
            e[e.Masked = 0] = "Masked", e[e.Removed = 1] = "Removed", e[e.Raw = 2] = "Raw"
        }(t.ProfanityOption || (t.ProfanityOption = {}))
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(10),
        o = function () {
            function e(e) {
                this.audioContext = null, this.gainNode = null, this.autoUpdateBufferTimer = 0, this.init(e)
            }
            return e.prototype.playAudioSample = function (e) {
                this.ensureInitializedContext();
                var t = this.formatAudioData(e),
                    r = new Float32Array(this.samples.length + t.length);
                r.set(this.samples, 0), r.set(t, this.samples.length), this.samples = r
            }, e.prototype.stopAudio = function () {
                null !== this.audioContext && (this.samples = new Float32Array, clearInterval(this.autoUpdateBufferTimer), this.audioContext.close(), this.audioContext = null)
            }, e.prototype.init = function (e) {
                this.audioFormat = e, this.samples = new Float32Array
            }, e.prototype.ensureInitializedContext = function () {
                var e = this;
                if (null === this.audioContext) {
                    this.createAudioContext();
                    this.autoUpdateBufferTimer = setInterval((function () {
                        e.updateAudioBuffer()
                    }), 200)
                }
            }, e.prototype.createAudioContext = function () {
                this.audioContext = new AudioContext, this.gainNode = this.audioContext.createGain(), this.gainNode.gain.value = 1, this.gainNode.connect(this.audioContext.destination), this.startTime = this.audioContext.currentTime
            }, e.prototype.formatAudioData = function (e) {
                switch (this.audioFormat.bitsPerSample) {
                    case 8:
                        return this.formatArrayBuffer(new Int8Array(e), 128);
                    case 16:
                        return this.formatArrayBuffer(new Int16Array(e), 32768);
                    case 32:
                        return this.formatArrayBuffer(new Int32Array(e), 2147483648);
                    default:
                        throw new n.InvalidOperationError("Only WAVE_FORMAT_PCM (8/16/32 bps) format supported at this time")
                }
            }, e.prototype.formatArrayBuffer = function (e, t) {
                for (var r = new Float32Array(e.length), n = 0; n < e.length; n++) r[n] = e[n] / t;
                return r
            }, e.prototype.updateAudioBuffer = function () {
                if (0 !== this.samples.length) {
                    for (var e = this.audioFormat.channels, t = this.audioContext.createBufferSource(), r = this.samples.length / e, n = this.audioContext.createBuffer(e, r, this.audioFormat.samplesPerSec), o = 0; o < e; o++)
                        for (var i = o, s = n.getChannelData(o), a = 0; a < this.samples.length; a++ , i += e) s[a] = this.samples[i];
                    this.startTime < this.audioContext.currentTime && (this.startTime = this.audioContext.currentTime), t.buffer = n, t.connect(this.gainNode), t.start(this.startTime), this.startTime += n.duration, this.samples = new Float32Array
                }
            }, e
        }();
    t.BaseAudioPlayer = o
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(85);
    t.Conversation = n.Conversation;
    var o = r(86);
    t.ConversationExpirationEventArgs = o.ConversationExpirationEventArgs;
    var i = r(87);
    t.ConversationParticipantsChangedEventArgs = i.ConversationParticipantsChangedEventArgs;
    var s = r(88);
    t.ConversationTranslationCanceledEventArgs = s.ConversationTranslationCanceledEventArgs;
    var a = r(89);
    t.ConversationTranslationEventArgs = a.ConversationTranslationEventArgs;
    var c = r(90);
    t.ConversationTranslationResult = c.ConversationTranslationResult;
    var p = r(91);
    t.ConversationTranslator = p.ConversationTranslator;
    var u = r(92);
    t.Participant = u.Participant, t.User = u.User;
    var v = r(93);
    t.ParticipantChangedReason = v.ParticipantChangedReason
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(25),
        o = r(32),
        i = r(30),
        s = function () {
            function e() { }
            return e.createConversationAsync = function (e, t, r) {
                o.Contracts.throwIfNullOrUndefined(e, n.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "config")), o.Contracts.throwIfNullOrUndefined(e.region, n.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "SpeechServiceConnection_Region")), e.subscriptionKey || e.getProperty(i.PropertyId[i.PropertyId.SpeechServiceAuthorization_Token]) || o.Contracts.throwIfNullOrUndefined(e.subscriptionKey, n.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "SpeechServiceConnection_Key"));
                var s = new n.ConversationImpl(e);
                return s.createConversationAsync((function () {
                    t && t()
                }), (function (e) {
                    r && r(e)
                })), s
            }, e
        }();
    t.Conversation = s
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function (e) {
        function t(t, r) {
            var n = e.call(this, r) || this;
            return n.privExpirationTime = t, n
        }
        return o(t, e), Object.defineProperty(t.prototype, "expirationTime", {
            get: function () {
                return this.privExpirationTime
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(r(30).SessionEventArgs);
    t.ConversationExpirationEventArgs = i
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function (e) {
        function t(t, r, n) {
            var o = e.call(this, n) || this;
            return o.privReason = t, o.privParticipant = r, o
        }
        return o(t, e), Object.defineProperty(t.prototype, "reason", {
            get: function () {
                return this.privReason
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "participants", {
            get: function () {
                return this.privParticipant
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(r(30).SessionEventArgs);
    t.ConversationParticipantsChangedEventArgs = i
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function (e) {
        function t(t, r, n, o, i) {
            var s = e.call(this, o, i) || this;
            return s.privReason = t, s.privErrorDetails = r, s.privErrorCode = n, s
        }
        return o(t, e), Object.defineProperty(t.prototype, "reason", {
            get: function () {
                return this.privReason
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "errorCode", {
            get: function () {
                return this.privErrorCode
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "errorDetails", {
            get: function () {
                return this.privErrorDetails
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(r(30).RecognitionEventArgs);
    t.ConversationTranslationCanceledEventArgs = i
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function (e) {
        function t(t, r, n) {
            var o = e.call(this, r, n) || this;
            return o.privResult = t, o
        }
        return o(t, e), Object.defineProperty(t.prototype, "result", {
            get: function () {
                return this.privResult
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(r(30).RecognitionEventArgs);
    t.ConversationTranslationEventArgs = i
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function (e) {
        function t(t, r, n, o, i, s, a, c, p, u, v) {
            var l = e.call(this, r, o, i, s, a, c, p, u, v) || this;
            return l.privId = t, l.privOrigLang = n, l
        }
        return o(t, e), Object.defineProperty(t.prototype, "participantId", {
            get: function () {
                return this.privId
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "originalLang", {
            get: function () {
                return this.privOrigLang
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(r(50).TranslationRecognitionResult);
    t.ConversationTranslationResult = i
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n, o = r(25),
        i = r(32),
        s = r(30),
        a = r(84);
    ! function (e) {
        e[e.Inactive = 0] = "Inactive", e[e.Connecting = 1] = "Connecting", e[e.Connected = 2] = "Connected"
    }(n = t.SpeechState || (t.SpeechState = {}));
    var c = function () {
        function e(e) {
            var t = this;
            this.privIsDisposed = !1, this.privIsSpeaking = !1, this.privSpeechState = n.Inactive, this.onSpeechConnected = function (e) {
                t.privSpeechState = n.Connected
            }, this.onSpeechDisconnected = function (e) {
                t.privSpeechState = n.Inactive, t.cancelSpeech()
            }, this.onSpeechRecognized = function (e, r) {
                var n;
                (null === (n = r.result) || void 0 === n ? void 0 : n.errorDetails) && (t.cancelSpeech(), t.fireCancelEvent(r.result.errorDetails))
            }, this.onSpeechRecognizing = function (e, t) { }, this.onSpeechCanceled = function (e, r) {
                if (t.privSpeechState !== n.Inactive) try {
                    t.cancelSpeech()
                } catch (e) {
                    t.privSpeechState = n.Inactive
                }
            }, this.onSpeechSessionStarted = function (e, r) {
                t.privSpeechState = n.Connected
            }, this.onSpeechSessionStopped = function (e, r) {
                t.privSpeechState = n.Inactive
            }, this.privProperties = new s.PropertyCollection, this.privAudioConfig = e
        }
        return Object.defineProperty(e.prototype, "properties", {
            get: function () {
                return this.privProperties
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "speechRecognitionLanguage", {
            get: function () {
                return this.privSpeechRecognitionLanguage
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "participants", {
            get: function () {
                var e;
                return null === (e = this.privConversation) || void 0 === e ? void 0 : e.participants
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.joinConversationAsync = function (e, t, r, n, a) {
            var c = this;
            try {
                if ("string" == typeof e) {
                    i.Contracts.throwIfNullOrUndefined(e, o.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "conversation id")), i.Contracts.throwIfNullOrWhitespace(t, o.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "nickname")), this.privConversation && this.handleError(new Error(o.ConversationTranslatorConfig.strings.permissionDeniedStart), a);
                    var p = r;
                    null != p && "" !== p || (p = o.ConversationTranslatorConfig.defaultLanguageCode), this.privSpeechTranslationConfig = s.SpeechTranslationConfig.fromSubscription(o.ConversationTranslatorConfig.auth.placeholderSubscriptionKey, o.ConversationTranslatorConfig.auth.placeholderRegion), this.privSpeechTranslationConfig.setProfanity(s.ProfanityOption.Masked), this.privSpeechTranslationConfig.addTargetLanguage(p), this.privSpeechTranslationConfig.setProperty(s.PropertyId[s.PropertyId.SpeechServiceConnection_RecoLanguage], p), this.privSpeechTranslationConfig.setProperty(s.PropertyId[s.PropertyId.ConversationTranslator_Name], t);
                    var u = this.privProperties.getProperty(s.PropertyId.ConversationTranslator_Host);
                    u && this.privSpeechTranslationConfig.setProperty(s.PropertyId[s.PropertyId.ConversationTranslator_Host], u);
                    var v = this.privProperties.getProperty(s.PropertyId.SpeechServiceConnection_Host);
                    v && this.privSpeechTranslationConfig.setProperty(s.PropertyId[s.PropertyId.SpeechServiceConnection_Host], v), this.privConversation = new o.ConversationImpl(this.privSpeechTranslationConfig), this.privConversation.conversationTranslator = this, this.privConversation.joinConversationAsync(e, t, p, (function (e) {
                        e || c.handleError(new Error(o.ConversationTranslatorConfig.strings.permissionDeniedConnect), a), c.privSpeechTranslationConfig.authorizationToken = e, c.privConversation.startConversationAsync((function () {
                            c.handleCallback(n, a)
                        }), (function (e) {
                            c.handleError(e, a)
                        }))
                    }), (function (e) {
                        c.handleError(e, a)
                    }))
                } else "object" == typeof e ? (i.Contracts.throwIfNullOrUndefined(e, o.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "conversation id")), i.Contracts.throwIfNullOrWhitespace(t, o.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "nickname")), this.privProperties.setProperty(s.PropertyId.ConversationTranslator_Name, t), this.privConversation = e, this.privConversation.conversationTranslator = this, i.Contracts.throwIfNullOrUndefined(this.privConversation, o.ConversationTranslatorConfig.strings.permissionDeniedConnect), i.Contracts.throwIfNullOrUndefined(this.privConversation.room.token, o.ConversationTranslatorConfig.strings.permissionDeniedConnect), this.privSpeechTranslationConfig = e.config, this.handleCallback(r, n)) : this.handleError(new Error(o.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "invalid conversation type")), n)
            } catch (e) {
                this.handleError(e, "string" == typeof r ? a : n)
            }
        }, e.prototype.leaveConversationAsync = function (e, t) {
            var r = this;
            try {
                this.cancelSpeech(), this.privConversation.endConversationAsync((function () {
                    r.privConversation.deleteConversationAsync((function () {
                        r.handleCallback(e, t), r.dispose()
                    }), (function (e) {
                        r.handleError(e, t)
                    }))
                }), (function (e) {
                    r.handleError(e, t)
                }))
            } catch (e) {
                this.handleError(e, t)
            }
        }, e.prototype.sendTextMessageAsync = function (e, t, r) {
            var n;
            try {
                i.Contracts.throwIfNullOrUndefined(this.privConversation, o.ConversationTranslatorConfig.strings.permissionDeniedSend), i.Contracts.throwIfNullOrWhitespace(e, o.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", e)), null === (n = this.privConversation) || void 0 === n || n.sendTextMessageAsync(e, t, r)
            } catch (e) {
                this.handleError(e, r)
            }
        }, e.prototype.startTranscribingAsync = function (e, t) {
            var r = this;
            try {
                i.Contracts.throwIfNullOrUndefined(this.privConversation, o.ConversationTranslatorConfig.strings.permissionDeniedSend), i.Contracts.throwIfNullOrUndefined(this.privConversation.room.token, o.ConversationTranslatorConfig.strings.permissionDeniedConnect), this.canSpeak || this.handleError(new Error(o.ConversationTranslatorConfig.strings.permissionDeniedSend), t), void 0 === this.privTranslationRecognizer ? this.connectTranslatorRecognizer((function () {
                    r.startContinuousRecognition((function () {
                        r.privIsSpeaking = !0, r.handleCallback(e, t)
                    }), (function (e) {
                        r.privIsSpeaking = !1, r.cancelSpeech(), r.handleError(e, t)
                    }))
                }), (function (e) {
                    r.handleError(e, t)
                })) : this.startContinuousRecognition((function () {
                    r.privIsSpeaking = !0, r.handleCallback(e, t)
                }), (function (e) {
                    r.privIsSpeaking = !1, r.cancelSpeech(), r.handleError(e, t)
                }))
            } catch (e) {
                this.handleError(e, t), this.cancelSpeech()
            }
        }, e.prototype.stopTranscribingAsync = function (e, t) {
            var r, n = this;
            try {
                if (!this.privIsSpeaking) return this.cancelSpeech(), void this.handleCallback(e, t);
                this.privIsSpeaking = !1, null === (r = this.privTranslationRecognizer) || void 0 === r || r.stopContinuousRecognitionAsync((function () {
                    n.handleCallback(e, t)
                }), (function (e) {
                    n.handleError(e, t), n.cancelSpeech()
                }))
            } catch (e) {
                this.handleError(e, t), this.cancelSpeech()
            }
        }, e.prototype.isDisposed = function () {
            return this.privIsDisposed
        }, e.prototype.dispose = function (e) {
            var t, r;
            this.isDisposed && !this.privIsSpeaking || (this.cancelSpeech(), this.privIsDisposed = !0, null === (t = this.privSpeechTranslationConfig) || void 0 === t || t.close(), this.privSpeechRecognitionLanguage = void 0, this.privProperties = void 0, this.privAudioConfig = void 0, this.privSpeechTranslationConfig = void 0, null === (r = this.privConversation) || void 0 === r || r.dispose(), this.privConversation = void 0)
        }, e.prototype.connectTranslatorRecognizer = function (e, t) {
            try {
                void 0 === this.privAudioConfig && (this.privAudioConfig = s.AudioConfig.fromDefaultMicrophoneInput()), this.privSpeechTranslationConfig.getProperty(s.PropertyId[s.PropertyId.SpeechServiceConnection_Key]) === o.ConversationTranslatorConfig.auth.placeholderSubscriptionKey && this.privSpeechTranslationConfig.setProperty(s.PropertyId[s.PropertyId.SpeechServiceConnection_Key], "");
                var r = encodeURIComponent(this.privConversation.room.token),
                    n = this.privSpeechTranslationConfig.getProperty(s.PropertyId[s.PropertyId.SpeechServiceConnection_Host], o.ConversationTranslatorConfig.speechHost),
                    i = "wss://" + (n = n.replace("{region}", this.privConversation.room.cognitiveSpeechRegion)) + o.ConversationTranslatorConfig.speechPath + "?" + o.ConversationTranslatorConfig.params.token + "=" + r;
                this.privSpeechTranslationConfig.setProperty(s.PropertyId[s.PropertyId.SpeechServiceConnection_Endpoint], i), this.privTranslationRecognizer = new s.TranslationRecognizer(this.privSpeechTranslationConfig, this.privAudioConfig), this.privTranslationRecognizerConnection = s.Connection.fromRecognizer(this.privTranslationRecognizer), this.privTranslationRecognizerConnection.connected = this.onSpeechConnected, this.privTranslationRecognizerConnection.disconnected = this.onSpeechDisconnected, this.privTranslationRecognizer.recognized = this.onSpeechRecognized, this.privTranslationRecognizer.recognizing = this.onSpeechRecognizing, this.privTranslationRecognizer.canceled = this.onSpeechCanceled, this.privTranslationRecognizer.sessionStarted = this.onSpeechSessionStarted, this.privTranslationRecognizer.sessionStopped = this.onSpeechSessionStopped, this.handleCallback(e, t)
            } catch (e) {
                this.handleError(e, t), this.cancelSpeech()
            }
        }, e.prototype.startContinuousRecognition = function (e, t) {
            this.privTranslationRecognizer.startContinuousRecognitionAsync(e, t)
        }, e.prototype.fireCancelEvent = function (e) {
            var t, r, n;
            try {
                if (this.canceled) {
                    var o = new a.ConversationTranslationCanceledEventArgs(null !== (t = null == e ? void 0 : e.reason) && void 0 !== t ? t : s.CancellationReason.Error, null !== (r = null == e ? void 0 : e.errorDetails) && void 0 !== r ? r : e, null !== (n = null == e ? void 0 : e.errorCode) && void 0 !== n ? n : s.CancellationErrorCode.RuntimeError, void 0, null == e ? void 0 : e.sessionId);
                    this.canceled(this, o)
                }
            } catch (e) { }
        }, e.prototype.cancelSpeech = function () {
            var e, t;
            try {
                this.privIsSpeaking = !1, null === (e = this.privTranslationRecognizer) || void 0 === e || e.stopContinuousRecognitionAsync(), null === (t = this.privTranslationRecognizerConnection) || void 0 === t || t.closeConnection(), this.privTranslationRecognizerConnection = void 0, this.privTranslationRecognizer = void 0, this.privSpeechState = n.Inactive
            } catch (e) { }
        }, Object.defineProperty(e.prototype, "canSpeak", {
            get: function () {
                return !!this.privConversation.isConnected && (!this.privIsSpeaking && this.privSpeechState !== n.Connected && this.privSpeechState !== n.Connecting && !this.privConversation.isMutedByHost)
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.handleCallback = function (e, t) {
            if (e) {
                try {
                    e()
                } catch (e) {
                    t && t(e)
                }
                e = void 0
            }
        }, e.prototype.handleError = function (e, t) {
            if (t)
                if (e instanceof Error) {
                    var r = e;
                    t(r.name + ": " + r.message)
                } else t(e)
        }, e
    }();
    t.ConversationTranslator = c
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(30),
        o = function () {
            function e(e) {
                this.privUserId = e
            }
            return Object.defineProperty(e.prototype, "userId", {
                get: function () {
                    return this.privUserId
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
    t.User = o;
    var i = function () {
        function e(e, t, r, o, i, s, a) {
            this.privId = e, this.privAvatar = t, this.privDisplayName = r, this.privIsHost = o, this.privIsMuted = i, this.privIsUsingTts = s, this.privPreferredLanguage = a, this.privPoperties = new n.PropertyCollection
        }
        return Object.defineProperty(e.prototype, "avatar", {
            get: function () {
                return this.privAvatar
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "displayName", {
            get: function () {
                return this.privDisplayName
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "id", {
            get: function () {
                return this.privId
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "preferredLanguage", {
            get: function () {
                return this.privPreferredLanguage
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "isHost", {
            get: function () {
                return this.privIsHost
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "isMuted", {
            get: function () {
                return this.privIsMuted
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "isUsingTts", {
            get: function () {
                return this.privIsUsingTts
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "properties", {
            get: function () {
                return this.privPoperties
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.Participant = i
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
        function (e) {
            e[e.JoinedConversation = 0] = "JoinedConversation", e[e.LeftConversation = 1] = "LeftConversation", e[e.Updated = 2] = "Updated"
        }(t.ParticipantChangedReason || (t.ParticipantChangedReason = {}))
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(4),
        s = function (e) {
            function t(t, r, n, o) {
                void 0 === o && (o = i.EventType.Info);
                var s = e.call(this, t, o) || this;
                return s.privRequestId = r, s.privSessionId = n, s
            }
            return o(t, e), Object.defineProperty(t.prototype, "requestId", {
                get: function () {
                    return this.privRequestId
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "sessionId", {
                get: function () {
                    return this.privSessionId
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(i.PlatformEvent);
    t.SpeechRecognitionEvent = s;
    var a = function (e) {
        function t(t, r, n, o) {
            var i = e.call(this, "RecognitionTriggeredEvent", t, r) || this;
            return i.privAudioSourceId = n, i.privAudioNodeId = o, i
        }
        return o(t, e), Object.defineProperty(t.prototype, "audioSourceId", {
            get: function () {
                return this.privAudioSourceId
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "audioNodeId", {
            get: function () {
                return this.privAudioNodeId
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(s);
    t.RecognitionTriggeredEvent = a;
    var c = function (e) {
        function t(t, r, n, o) {
            var i = e.call(this, "ListeningStartedEvent", t, r) || this;
            return i.privAudioSourceId = n, i.privAudioNodeId = o, i
        }
        return o(t, e), Object.defineProperty(t.prototype, "audioSourceId", {
            get: function () {
                return this.privAudioSourceId
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "audioNodeId", {
            get: function () {
                return this.privAudioNodeId
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(s);
    t.ListeningStartedEvent = c;
    var p = function (e) {
        function t(t, r, n) {
            var o = e.call(this, "ConnectingToServiceEvent", t, n) || this;
            return o.privAuthFetchEventid = r, o
        }
        return o(t, e), Object.defineProperty(t.prototype, "authFetchEventid", {
            get: function () {
                return this.privAuthFetchEventid
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(s);
    t.ConnectingToServiceEvent = p;
    var u, v = function (e) {
        function t(t, r, n, o, i) {
            var s = e.call(this, "RecognitionStartedEvent", t, i) || this;
            return s.privAudioSourceId = r, s.privAudioNodeId = n, s.privAuthFetchEventId = o, s
        }
        return o(t, e), Object.defineProperty(t.prototype, "audioSourceId", {
            get: function () {
                return this.privAudioSourceId
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "audioNodeId", {
            get: function () {
                return this.privAudioNodeId
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "authFetchEventId", {
            get: function () {
                return this.privAuthFetchEventId
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(s);
    t.RecognitionStartedEvent = v,
        function (e) {
            e[e.Success = 0] = "Success", e[e.AudioSourceError = 1] = "AudioSourceError", e[e.AudioSourceTimeout = 2] = "AudioSourceTimeout", e[e.AuthTokenFetchError = 3] = "AuthTokenFetchError", e[e.AuthTokenFetchTimeout = 4] = "AuthTokenFetchTimeout", e[e.UnAuthorized = 5] = "UnAuthorized", e[e.ConnectTimeout = 6] = "ConnectTimeout", e[e.ConnectError = 7] = "ConnectError", e[e.ClientRecognitionActivityTimeout = 8] = "ClientRecognitionActivityTimeout", e[e.UnknownError = 9] = "UnknownError"
        }(u = t.RecognitionCompletionStatus || (t.RecognitionCompletionStatus = {}));
    var l = function (e) {
        function t(t, r, n, o, s, a, c, p) {
            var v = e.call(this, "RecognitionEndedEvent", t, s, c === u.Success ? i.EventType.Info : i.EventType.Error) || this;
            return v.privAudioSourceId = r, v.privAudioNodeId = n, v.privAuthFetchEventId = o, v.privStatus = c, v.privError = p, v.privServiceTag = a, v
        }
        return o(t, e), Object.defineProperty(t.prototype, "audioSourceId", {
            get: function () {
                return this.privAudioSourceId
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "audioNodeId", {
            get: function () {
                return this.privAudioNodeId
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "authFetchEventId", {
            get: function () {
                return this.privAuthFetchEventId
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "serviceTag", {
            get: function () {
                return this.privServiceTag
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "status", {
            get: function () {
                return this.privStatus
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "error", {
            get: function () {
                return this.privError
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(s);
    t.RecognitionEndedEvent = l
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(2),
        o = r(4),
        i = r(30),
        s = r(25),
        a = r(96),
        c = function () {
            function e(t, r, n, c, p) {
                var u = this;
                if (this.recognizeOverride = void 0, this.disconnectOverride = void 0, this.sendTelemetryData = function () {
                    var t = u.privRequestSession.getTelemetry();
                    if (!0 !== e.telemetryDataEnabled || u.privIsDisposed || null === t) return o.PromiseHelper.fromResult(!0);
                    if (e.telemetryData) try {
                        e.telemetryData(t)
                    } catch (e) { }
                    return u.fetchConnection().onSuccessContinueWith((function (e) {
                        return e.send(new a.SpeechConnectionMessage(o.MessageType.Text, "telemetry", u.privRequestSession.requestId, "application/json", t))
                    }))
                }, this.receiveMessageOverride = void 0, this.receiveMessage = function () {
                    return u.fetchConnection().on((function (e) {
                        return e.read().onSuccessContinueWithPromise((function (e) {
                            if (void 0 !== u.receiveMessageOverride) return u.receiveMessageOverride();
                            if (u.privIsDisposed) return o.PromiseHelper.fromResult(void 0);
                            if (!e) return u.privRequestSession.isRecognizing ? u.receiveMessage() : o.PromiseHelper.fromResult(!0);
                            u.privServiceHasSentMessage = !0;
                            var t = a.SpeechConnectionMessage.fromConnectionMessage(e);
                            if (t.requestId.toLowerCase() === u.privRequestSession.requestId.toLowerCase()) switch (t.path.toLowerCase()) {
                                case "turn.start":
                                    u.privMustReportEndOfStream = !0, u.privRequestSession.onServiceTurnStartResponse();
                                    break;
                                case "speech.startdetected":
                                    var r = s.SpeechDetected.fromJSON(t.textBody),
                                        n = new i.RecognitionEventArgs(r.Offset, u.privRequestSession.sessionId);
                                    u.privRecognizer.speechStartDetected && u.privRecognizer.speechStartDetected(u.privRecognizer, n);
                                    break;
                                case "speech.enddetected":
                                    var c = void 0;
                                    c = t.textBody.length > 0 ? t.textBody : "{ Offset: 0 }";
                                    var p = s.SpeechDetected.fromJSON(c);
                                    u.privRecognizerConfig.isContinuousRecognition && u.privRequestSession.onServiceRecognized(p.Offset + u.privRequestSession.currentTurnAudioOffset);
                                    var v = new i.RecognitionEventArgs(p.Offset + u.privRequestSession.currentTurnAudioOffset, u.privRequestSession.sessionId);
                                    u.privRecognizer.speechEndDetected && u.privRecognizer.speechEndDetected(u.privRecognizer, v);
                                    break;
                                case "turn.end":
                                    u.sendTelemetryData(), u.privRequestSession.isSpeechEnded && u.privMustReportEndOfStream && (u.privMustReportEndOfStream = !1, u.cancelRecognitionLocal(i.CancellationReason.EndOfStream, i.CancellationErrorCode.NoError, void 0));
                                    var l = new i.SessionEventArgs(u.privRequestSession.sessionId);
                                    if (u.privRequestSession.onServiceTurnEndResponse(u.privRecognizerConfig.isContinuousRecognition), !u.privRecognizerConfig.isContinuousRecognition || u.privRequestSession.isSpeechEnded || !u.privRequestSession.isRecognizing) return u.privRecognizer.sessionStopped && u.privRecognizer.sessionStopped(u.privRecognizer, l), o.PromiseHelper.fromResult(!0);
                                    u.fetchConnection().onSuccessContinueWith((function (e) {
                                        u.sendSpeechContext(e), u.sendWaveHeader(e)
                                    }));
                                    break;
                                default:
                                    u.processTypeSpecificMessages(t) || u.privServiceEvents && u.serviceEvents.onEvent(new o.ServiceEvent(t.path.toLowerCase(), t.textBody))
                            }
                            return u.receiveMessage()
                        }))
                    }), (function (e) { }))
                }, this.sendSpeechContext = function (e) {
                    var t = u.speechContext.toJSON();
                    return t ? e.send(new a.SpeechConnectionMessage(o.MessageType.Text, "speech.context", u.privRequestSession.requestId, "application/json", t)) : o.PromiseHelper.fromResult(!0)
                }, this.connectImplOverride = void 0, this.configConnectionOverride = void 0, this.fetchConnectionOverride = void 0, this.sendSpeechServiceConfig = function (t, r, n) {
                    if (!0 !== e.telemetryDataEnabled) {
                        var i = {
                            context: {
                                system: JSON.parse(n).context.system
                            }
                        };
                        n = JSON.stringify(i)
                    }
                    return n ? t.send(new a.SpeechConnectionMessage(o.MessageType.Text, "speech.config", r.requestId, "application/json", n)) : o.PromiseHelper.fromResult(!0)
                }, this.sendAudio = function (e) {
                    return u.audioSource.format.onSuccessContinueWithPromise((function (t) {
                        var r = new o.Deferred,
                            n = Date.now(),
                            i = u.privRecognizerConfig.parameters.getProperty("SPEECH-TransmitLengthBeforThrottleMs", "5000"),
                            s = t.avgBytesPerSec / 1e3 * parseInt(i, 10),
                            c = u.privRequestSession.recogNumber,
                            p = function () {
                                u.privIsDisposed || u.privRequestSession.isSpeechEnded || !u.privRequestSession.isRecognizing || u.privRequestSession.recogNumber !== c || u.fetchConnection().on((function (i) {
                                    e.read().on((function (e) {
                                        var c, v;
                                        u.privRequestSession.isSpeechEnded ? r.resolve(!0) : (!e || e.isEnd ? (c = null, v = 0) : (c = e.buffer, u.privRequestSession.onAudioSent(c.byteLength), v = s >= u.privRequestSession.bytesSent ? 0 : Math.max(0, n - Date.now())), setTimeout((function () {
                                            null !== c && (n = Date.now() + 1e3 * c.byteLength / (2 * t.avgBytesPerSec));
                                            var s = i.send(new a.SpeechConnectionMessage(o.MessageType.Binary, "audio", u.privRequestSession.requestId, null, c));
                                            (null == e ? void 0 : e.isEnd) ? (u.privRequestSession.onSpeechEnded(), r.resolve(!0)) : s.continueWith((function (e) {
                                                p()
                                            }))
                                        }), v))
                                    }), (function (e) {
                                        u.privRequestSession.isSpeechEnded ? r.resolve(!0) : r.reject(e)
                                    }))
                                }), (function (e) {
                                    r.reject(e)
                                }))
                            };
                        return p(), r.promise()
                    }))
                }, this.fetchConnection = function () {
                    return void 0 !== u.fetchConnectionOverride ? u.fetchConnectionOverride() : u.configureConnection()
                }, !t) throw new o.ArgumentNullError("authentication");
                if (!r) throw new o.ArgumentNullError("connectionFactory");
                if (!n) throw new o.ArgumentNullError("audioSource");
                if (!c) throw new o.ArgumentNullError("recognizerConfig");
                this.privMustReportEndOfStream = !1, this.privAuthentication = t, this.privConnectionFactory = r, this.privAudioSource = n, this.privRecognizerConfig = c, this.privIsDisposed = !1, this.privRecognizer = p, this.privRequestSession = new s.RequestSession(this.privAudioSource.id()), this.privConnectionEvents = new o.EventSource, this.privServiceEvents = new o.EventSource, this.privDynamicGrammar = new s.DynamicGrammarBuilder, this.privSpeechContext = new s.SpeechContext(this.privDynamicGrammar), this.privAgentConfig = new s.AgentConfig
            }
            return Object.defineProperty(e.prototype, "audioSource", {
                get: function () {
                    return this.privAudioSource
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "speechContext", {
                get: function () {
                    return this.privSpeechContext
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "dynamicGrammar", {
                get: function () {
                    return this.privDynamicGrammar
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "agentConfig", {
                get: function () {
                    return this.privAgentConfig
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "conversationTranslatorToken", {
                set: function (e) {
                    this.privRecognizerConfig.parameters.setProperty(i.PropertyId.ConversationTranslator_Token, e)
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.isDisposed = function () {
                return this.privIsDisposed
            }, e.prototype.dispose = function (e) {
                this.privIsDisposed = !0, this.privConnectionConfigurationPromise && this.privConnectionConfigurationPromise.onSuccessContinueWith((function (t) {
                    t.dispose(e)
                }))
            }, Object.defineProperty(e.prototype, "connectionEvents", {
                get: function () {
                    return this.privConnectionEvents
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "serviceEvents", {
                get: function () {
                    return this.privServiceEvents
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "recognitionMode", {
                get: function () {
                    return this.privRecognizerConfig.recognitionMode
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.recognize = function (e, t, r) {
                var s = this;
                return void 0 !== this.recognizeOverride ? this.recognizeOverride(e, t, r) : (this.privConnectionConfigurationPromise = null, this.privRecognizerConfig.recognitionMode = e, this.privSuccessCallback = t, this.privErrorCallback = r, this.privRequestSession.startNewRecognition(), this.privRequestSession.listenForServiceTelemetry(this.privAudioSource.events), this.connectImpl(), this.audioSource.attach(this.privRequestSession.audioNodeId).onSuccessContinueWithPromise((function (e) {
                    var t;
                    return s.audioSource.format.onSuccessContinueWithPromise((function (r) {
                        return t = new n.ReplayableAudioNode(e, r.avgBytesPerSec), s.privRequestSession.onAudioSourceAttachCompleted(t, !1), s.audioSource.deviceInfo.onSuccessContinueWithPromise((function (e) {
                            return s.privRecognizerConfig.SpeechServiceConfig.Context.audio = {
                                source: e
                            }, s.configureConnection().continueWithPromise((function (e) {
                                if (e.isError) return s.cancelRecognitionLocal(i.CancellationReason.Error, i.CancellationErrorCode.ConnectionFailure, e.error), o.PromiseHelper.fromError(e.error);
                                var r = new i.SessionEventArgs(s.privRequestSession.sessionId);
                                s.privRecognizer.sessionStarted && s.privRecognizer.sessionStarted(s.privRecognizer, r);
                                s.receiveMessage();
                                return s.sendAudio(t).on((function (e) { }), (function (e) {
                                    s.cancelRecognitionLocal(i.CancellationReason.Error, i.CancellationErrorCode.RuntimeError, e)
                                })), o.PromiseHelper.fromResult(!0)
                            }))
                        }))
                    }))
                })))
            }, e.prototype.stopRecognizing = function () {
                var e = this;
                return this.privRequestSession.isRecognizing ? (this.audioSource.turnOff(), this.sendFinalAudio().onSuccessContinueWithPromise((function (t) {
                    return e.privRequestSession.onStopRecognizing(), e.privRequestSession.turnCompletionPromise.onSuccessContinueWith((function (t) {
                        return e.privRequestSession.onStopRecognizing(), e.privRequestSession.dispose(), !0
                    }))
                }))) : o.PromiseHelper.fromResult(!0)
            }, e.prototype.connect = function () {
                this.connectImpl().result()
            }, e.prototype.connectAsync = function (e, t) {
                this.connectImpl().continueWith((function (r) {
                    try {
                        r.isError ? t && t(r.error) : r.isCompleted && e && e()
                    } catch (e) {
                        t && t(e)
                    }
                }))
            }, e.prototype.disconnect = function () {
                void 0 === this.disconnectOverride ? (this.cancelRecognitionLocal(i.CancellationReason.Error, i.CancellationErrorCode.NoError, "Disconnecting"), this.privConnectionPromise.result().isCompleted ? this.privConnectionPromise.result().isError || (this.privConnectionPromise.result().result.dispose(), this.privConnectionPromise = null) : this.privConnectionPromise.onSuccessContinueWith((function (e) {
                    e.dispose()
                }))) : this.disconnectOverride()
            }, e.prototype.disconnectAsync = function (e, t) {
                try {
                    if (void 0 !== this.disconnectOverride) return this.disconnectOverride(), void (e && e());
                    this.cancelRecognitionLocal(i.CancellationReason.Error, i.CancellationErrorCode.NoError, "Disconnecting"), this.privConnectionPromise.continueWith((function (r) {
                        try {
                            r.isError ? t && t(r.error) : r.isCompleted && (r.result.dispose(), e && e())
                        } catch (e) {
                            t && t(e)
                        }
                    }))
                } catch (e) {
                    t && t(e)
                }
            }, e.prototype.sendMessage = function (e) { }, Object.defineProperty(e.prototype, "activityTemplate", {
                get: function () {
                    return this.privActivityTemplate
                },
                set: function (e) {
                    this.privActivityTemplate = e
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.cancelRecognitionLocal = function (e, t, r) {
                this.privRequestSession.isRecognizing && (this.privRequestSession.onStopRecognizing(), this.cancelRecognition(this.privRequestSession.sessionId, this.privRequestSession.requestId, e, t, r))
            }, e.prototype.sendWaveHeader = function (e) {
                var t = this;
                return this.audioSource.format.onSuccessContinueWithPromise((function (r) {
                    return e.send(new a.SpeechConnectionMessage(o.MessageType.Binary, "audio", t.privRequestSession.requestId, "audio/x-wav", r.header))
                }))
            }, e.prototype.connectImpl = function (e) {
                var t = this;
                if (void 0 === e && (e = !1), void 0 !== this.connectImplOverride) return this.connectImplOverride(e);
                if (this.privConnectionPromise) return this.privConnectionPromise.result().isCompleted && (this.privConnectionPromise.result().isError || this.privConnectionPromise.result().result.state() === o.ConnectionState.Disconnected) && !0 === this.privServiceHasSentMessage ? (this.privConnectionId = null, this.privConnectionPromise = null, this.privServiceHasSentMessage = !1, this.connectImpl()) : this.privConnectionPromise;
                this.privAuthFetchEventId = o.createNoDashGuid(), this.privConnectionId = o.createNoDashGuid(), this.privRequestSession.onPreConnectionStart(this.privAuthFetchEventId, this.privConnectionId);
                var r = e ? this.privAuthentication.fetchOnExpiry(this.privAuthFetchEventId) : this.privAuthentication.fetch(this.privAuthFetchEventId);
                return this.privConnectionPromise = r.continueWithPromise((function (r) {
                    if (r.isError) throw t.privRequestSession.onAuthCompleted(!0, r.error), new Error(r.error);
                    t.privRequestSession.onAuthCompleted(!1);
                    var n = t.privConnectionFactory.create(t.privRecognizerConfig, r.result, t.privConnectionId);
                    return t.privRequestSession.listenForServiceTelemetry(n.events), n.events.attach((function (e) {
                        t.connectionEvents.onEvent(e)
                    })), n.open().onSuccessContinueWithPromise((function (r) {
                        return 200 === r.statusCode ? (t.privRequestSession.onPreConnectionStart(t.privAuthFetchEventId, t.privConnectionId), t.privRequestSession.onConnectionEstablishCompleted(r.statusCode), o.PromiseHelper.fromResult(n)) : 403 !== r.statusCode || e ? (t.privRequestSession.onConnectionEstablishCompleted(r.statusCode, r.reason), o.PromiseHelper.fromError("Unable to contact server. StatusCode: " + r.statusCode + ", " + t.privRecognizerConfig.parameters.getProperty(i.PropertyId.SpeechServiceConnection_Endpoint) + " Reason: " + r.reason)) : t.connectImpl(!0)
                    }))
                })), this.privConnectionPromise
            }, e.prototype.writeBufferToConsole = function (e) {
                var t = "Buffer Size: ";
                if (null === e) t += "null";
                else {
                    var r = new Uint8Array(e);
                    t += e.byteLength + "\r\n";
                    for (var n = 0; n < e.byteLength; n++) t += r[n].toString(16).padStart(2, "0") + " "
                }
                console.info(t)
            }, e.prototype.sendFinalAudio = function () {
                var e = this,
                    t = new o.Deferred;
                return this.fetchConnection().on((function (r) {
                    r.send(new a.SpeechConnectionMessage(o.MessageType.Binary, "audio", e.privRequestSession.requestId, null, null)).on((function (e) {
                        t.resolve(!0)
                    }), (function (e) {
                        t.reject(e)
                    }))
                }), (function (e) {
                    t.reject(e)
                })), t.promise()
            }, e.prototype.configureConnection = function () {
                var e = this;
                return void 0 !== this.configConnectionOverride ? this.configConnectionOverride() : this.privConnectionConfigurationPromise ? this.privConnectionConfigurationPromise.result().isCompleted && (this.privConnectionConfigurationPromise.result().isError || this.privConnectionConfigurationPromise.result().result.state() === o.ConnectionState.Disconnected) ? (this.privConnectionConfigurationPromise = null, this.configureConnection()) : this.privConnectionConfigurationPromise : (this.privConnectionConfigurationPromise = this.connectImpl().onSuccessContinueWithPromise((function (t) {
                    return e.sendSpeechServiceConfig(t, e.privRequestSession, e.privRecognizerConfig.SpeechServiceConfig.serialize()).onSuccessContinueWithPromise((function (r) {
                        return e.sendSpeechContext(t).onSuccessContinueWithPromise((function (r) {
                            return e.sendWaveHeader(t).onSuccessContinueWith((function (e) {
                                return t
                            }))
                        }))
                    }))
                })), this.privConnectionConfigurationPromise)
            }, e.telemetryDataEnabled = !0, e
        }();
    t.ServiceRecognizerBase = c
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(4),
        s = "path",
        a = "content-type",
        c = "x-requestid",
        p = "x-timestamp",
        u = function (e) {
            function t(t, r, n, o, u, v, l) {
                var f = this;
                if (!r) throw new i.ArgumentNullError("path");
                if (!n) throw new i.ArgumentNullError("requestId");
                var h = {};
                if (h[s] = r, h[c] = n, h[p] = (new Date).toISOString(), o && (h[a] = o), v)
                    for (var d in v) d && (h[d] = v[d]);
                return (f = l ? e.call(this, t, u, h, l) || this : e.call(this, t, u, h) || this).privPath = r, f.privRequestId = n, f.privContentType = o, f.privAdditionalHeaders = v, f
            }
            return o(t, e), Object.defineProperty(t.prototype, "path", {
                get: function () {
                    return this.privPath
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "requestId", {
                get: function () {
                    return this.privRequestId
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "contentType", {
                get: function () {
                    return this.privContentType
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "additionalHeaders", {
                get: function () {
                    return this.privAdditionalHeaders
                },
                enumerable: !0,
                configurable: !0
            }), t.fromConnectionMessage = function (e) {
                var r = null,
                    n = null,
                    o = null,
                    i = {};
                if (e.headers)
                    for (var u in e.headers) u && (u.toLowerCase() === s.toLowerCase() ? r = e.headers[u] : u.toLowerCase() === c.toLowerCase() ? n = e.headers[u] : u.toLowerCase() === p.toLowerCase() ? e.headers[u] : u.toLowerCase() === a.toLowerCase() ? o = e.headers[u] : i[u] = e.headers[u]);
                return new t(e.messageType, r, n, o, e.body, i, e.id)
            }, t
        }(i.ConnectionMessage);
    t.SpeechConnectionMessage = u
}, function (e, t, r) {
    "use strict";
    var n;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
        function (e) {
            e[e.Interactive = 0] = "Interactive", e[e.Conversation = 1] = "Conversation", e[e.Dictation = 2] = "Dictation"
        }(n = t.RecognitionMode || (t.RecognitionMode = {})),
        function (e) {
            e[e.Simple = 0] = "Simple", e[e.Detailed = 1] = "Detailed"
        }(t.SpeechResultFormat || (t.SpeechResultFormat = {}));
    var o = function () {
        function e(e, t) {
            this.privRecognitionMode = n.Interactive, this.privSpeechServiceConfig = e || new i(new s(null)), this.privParameters = t
        }
        return Object.defineProperty(e.prototype, "parameters", {
            get: function () {
                return this.privParameters
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "recognitionMode", {
            get: function () {
                return this.privRecognitionMode
            },
            set: function (e) {
                this.privRecognitionMode = e, this.privRecognitionActivityTimeout = e === n.Interactive ? 8e3 : 25e3, this.privSpeechServiceConfig.Recognition = n[e]
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "SpeechServiceConfig", {
            get: function () {
                return this.privSpeechServiceConfig
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "recognitionActivityTimeout", {
            get: function () {
                return this.privRecognitionActivityTimeout
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "isContinuousRecognition", {
            get: function () {
                return this.privRecognitionMode !== n.Interactive
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.RecognizerConfig = o;
    var i = function () {
        function e(e) {
            var t = this;
            this.serialize = function () {
                return JSON.stringify(t, (function (e, t) {
                    if (t && "object" == typeof t) {
                        var r = {};
                        for (var n in t) Object.hasOwnProperty.call(t, n) && (r[n && n.charAt(0).toLowerCase() + n.substring(1)] = t[n]);
                        return r
                    }
                    return t
                }))
            }, this.context = e
        }
        return Object.defineProperty(e.prototype, "Context", {
            get: function () {
                return this.context
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "Recognition", {
            get: function () {
                return this.recognition
            },
            set: function (e) {
                this.recognition = e.toLowerCase()
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.SpeechServiceConfig = i;
    var s = function (e) {
        this.system = new a, this.os = e
    };
    t.Context = s;
    var a = function () {
        this.name = "SpeechSDK", this.version = "1.10.0", this.build = "JavaScript", this.lang = "JavaScript"
    };
    t.System = a;
    var c = function (e, t, r) {
        this.platform = e, this.name = t, this.version = r
    };
    t.OS = c;
    var p = function (e, t, r) {
        this.manufacturer = e, this.model = t, this.version = r
    };
    t.Device = p,
        function (e) {
            e.Bluetooth = "Bluetooth", e.Wired = "Wired", e.WiFi = "WiFi", e.Cellular = "Cellular", e.InBuilt = "InBuilt", e.Unknown = "Unknown"
        }(t.connectivity || (t.connectivity = {})),
        function (e) {
            e.Phone = "Phone", e.Speaker = "Speaker", e.Car = "Car", e.Headset = "Headset", e.Thermostat = "Thermostat", e.Microphones = "Microphones", e.Deskphone = "Deskphone", e.RemoteControl = "RemoteControl", e.Unknown = "Unknown", e.File = "File", e.Stream = "Stream"
        }(t.type || (t.type = {}))
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(4),
        o = "\r\n",
        i = function () {
            var e = this;
            this.toConnectionMessage = function (t) {
                var r = new n.Deferred;
                try {
                    if (t.messageType === n.MessageType.Text) {
                        var o = t.textContent,
                            i = {},
                            s = null;
                        if (o) {
                            var a = o.split("\r\n\r\n");
                            a && a.length > 0 && (i = e.parseHeaders(a[0]), a.length > 1 && (s = a[1]))
                        }
                        r.resolve(new n.ConnectionMessage(t.messageType, s, i, t.id))
                    } else if (t.messageType === n.MessageType.Binary) {
                        var c = t.binaryContent;
                        if (i = {}, s = null, !c || c.byteLength < 2) throw new Error("Invalid binary message format. Header length missing.");
                        var p = new DataView(c),
                            u = p.getInt16(0);
                        if (c.byteLength < u + 2) throw new Error("Invalid binary message format. Header content missing.");
                        for (var v = "", l = 0; l < u; l++) v += String.fromCharCode(p.getInt8(l + 2));
                        i = e.parseHeaders(v), c.byteLength > u + 2 && (s = c.slice(2 + u)), r.resolve(new n.ConnectionMessage(t.messageType, s, i, t.id))
                    }
                } catch (e) {
                    r.reject("Error formatting the message. Error: " + e)
                }
                return r.promise()
            }, this.fromConnectionMessage = function (t) {
                var r = new n.Deferred;
                try {
                    if (t.messageType === n.MessageType.Text) {
                        var i = "" + e.makeHeaders(t) + o + (t.textBody ? t.textBody : "");
                        r.resolve(new n.RawWebsocketMessage(n.MessageType.Text, i, t.id))
                    } else if (t.messageType === n.MessageType.Binary) {
                        var s = e.makeHeaders(t),
                            a = t.binaryBody,
                            c = new Int8Array(e.stringToArrayBuffer(s)),
                            p = (i = new ArrayBuffer(2 + c.byteLength + (a ? a.byteLength : 0)), new DataView(i));
                        p.setInt16(0, c.length);
                        for (var u = 0; u < c.byteLength; u++) p.setInt8(2 + u, c[u]);
                        if (a) {
                            var v = new Int8Array(a);
                            for (u = 0; u < v.byteLength; u++) p.setInt8(2 + c.byteLength + u, v[u])
                        }
                        r.resolve(new n.RawWebsocketMessage(n.MessageType.Binary, i, t.id))
                    }
                } catch (e) {
                    r.reject("Error formatting the message. " + e)
                }
                return r.promise()
            }, this.makeHeaders = function (e) {
                var t = "";
                if (e.headers)
                    for (var r in e.headers) r && (t += r + ": " + e.headers[r] + o);
                return t
            }, this.parseHeaders = function (e) {
                var t = {};
                if (e) {
                    var r = e.match(/[^\r\n]+/g);
                    if (t)
                        for (var n = 0, o = r; n < o.length; n++) {
                            var i = o[n];
                            if (i) {
                                var s = i.indexOf(":"),
                                    a = s > 0 ? i.substr(0, s).trim().toLowerCase() : i,
                                    c = s > 0 && i.length > s + 1 ? i.substr(s + 1).trim() : "";
                                t[a] = c
                            }
                        }
                }
                return t
            }, this.stringToArrayBuffer = function (e) {
                for (var t = new ArrayBuffer(e.length), r = new DataView(t), n = 0; n < e.length; n++) r.setUint8(n, e.charCodeAt(n));
                return t
            }
        };
    t.WebsocketMessageFormatter = i
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(2),
        s = r(30),
        a = r(60),
        c = r(25),
        p = r(61),
        u = "X-ConnectionId",
        v = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.create = function (e, r, n) {
                    var o = e.parameters.getProperty(s.PropertyId.SpeechServiceConnection_Endpoint, void 0);
                    if (!o) {
                        var a = e.parameters.getProperty(s.PropertyId.SpeechServiceConnection_Region, void 0);
                        o = e.parameters.getProperty(s.PropertyId.SpeechServiceConnection_Host, "wss://" + a + ".s2s.speech.microsoft.com") + "/speech/translation/cognitiveservices/v1"
                    }
                    var v = {
                        from: e.parameters.getProperty(s.PropertyId.SpeechServiceConnection_RecoLanguage),
                        to: e.parameters.getProperty(s.PropertyId.SpeechServiceConnection_TranslationToLanguages)
                    };
                    t.setCommonUrlParams(e, v, o), t.setUrlParameter(s.PropertyId.SpeechServiceResponse_TranslationRequestStablePartialResult, p.QueryParameterNames.StableTranslation, e, v, o);
                    void 0 !== e.parameters.getProperty(s.PropertyId.SpeechServiceConnection_TranslationVoice, void 0) && (v.voice = e.parameters.getProperty(s.PropertyId.SpeechServiceConnection_TranslationVoice), v.features = "texttospeech");
                    var l = {};
                    return void 0 !== r.token && "" !== r.token && (l[r.headerName] = r.token), l[u] = n, e.parameters.setProperty(s.PropertyId.SpeechServiceConnection_Url, o), new i.WebsocketConnection(o, v, l, new c.WebsocketMessageFormatter, i.ProxyInfo.fromRecognizerConfig(e), n)
                }, t
            }
            return o(t, e), t
        }(a.ConnectionFactoryBase);
    t.TranslationConnectionFactory = v
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(30),
        o = r(25),
        i = function () {
            function e() { }
            return e.implTranslateRecognitionResult = function (e) {
                var t = n.ResultReason.Canceled;
                switch (e) {
                    case o.RecognitionStatus.Success:
                        t = n.ResultReason.RecognizedSpeech;
                        break;
                    case o.RecognitionStatus.NoMatch:
                    case o.RecognitionStatus.InitialSilenceTimeout:
                    case o.RecognitionStatus.BabbleTimeout:
                    case o.RecognitionStatus.EndOfDictation:
                        t = n.ResultReason.NoMatch;
                        break;
                    case o.RecognitionStatus.Error:
                    default:
                        t = n.ResultReason.Canceled
                }
                return t
            }, e.implTranslateCancelResult = function (e) {
                var t = n.CancellationReason.EndOfStream;
                switch (e) {
                    case o.RecognitionStatus.Success:
                    case o.RecognitionStatus.EndOfDictation:
                    case o.RecognitionStatus.NoMatch:
                        t = n.CancellationReason.EndOfStream;
                        break;
                    case o.RecognitionStatus.InitialSilenceTimeout:
                    case o.RecognitionStatus.BabbleTimeout:
                    case o.RecognitionStatus.Error:
                    default:
                        t = n.CancellationReason.Error
                }
                return t
            }, e.implTranslateCancelErrorCode = function (e) {
                var t = n.CancellationErrorCode.NoError;
                switch (e) {
                    case o.RecognitionStatus.Error:
                        t = n.CancellationErrorCode.ServiceError;
                        break;
                    case o.RecognitionStatus.TooManyRequests:
                        t = n.CancellationErrorCode.TooManyRequests;
                        break;
                    default:
                        t = n.CancellationErrorCode.NoError
                }
                return t
            }, e
        }();
    t.EnumTranslation = i
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
        function (e) {
            e[e.Success = 0] = "Success", e[e.SynthesisEnd = 1] = "SynthesisEnd", e[e.Error = 2] = "Error"
        }(t.SynthesisStatus || (t.SynthesisStatus = {})),
        function (e) {
            e[e.Success = 0] = "Success", e[e.NoMatch = 1] = "NoMatch", e[e.InitialSilenceTimeout = 2] = "InitialSilenceTimeout", e[e.BabbleTimeout = 3] = "BabbleTimeout", e[e.Error = 4] = "Error", e[e.EndOfDictation = 5] = "EndOfDictation", e[e.TooManyRequests = 6] = "TooManyRequests"
        }(t.RecognitionStatus || (t.RecognitionStatus = {}))
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(25),
        o = function () {
            function e(e) {
                this.privSynthesisEnd = JSON.parse(e), this.privSynthesisEnd.SynthesisStatus = n.SynthesisStatus[this.privSynthesisEnd.SynthesisStatus]
            }
            return e.fromJSON = function (t) {
                return new e(t)
            }, Object.defineProperty(e.prototype, "SynthesisStatus", {
                get: function () {
                    return this.privSynthesisEnd.SynthesisStatus
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "FailureReason", {
                get: function () {
                    return this.privSynthesisEnd.FailureReason
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
    t.TranslationSynthesisEnd = o
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(21),
        o = function () {
            function e(e) {
                this.privTranslationHypothesis = JSON.parse(e), this.privTranslationHypothesis.Translation.TranslationStatus = n.TranslationStatus[this.privTranslationHypothesis.Translation.TranslationStatus]
            }
            return e.fromJSON = function (t) {
                return new e(t)
            }, Object.defineProperty(e.prototype, "Duration", {
                get: function () {
                    return this.privTranslationHypothesis.Duration
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "Offset", {
                get: function () {
                    return this.privTranslationHypothesis.Offset
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "Text", {
                get: function () {
                    return this.privTranslationHypothesis.Text
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "Translation", {
                get: function () {
                    return this.privTranslationHypothesis.Translation
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
    t.TranslationHypothesis = o
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(25),
        o = r(21),
        i = function () {
            function e(e) {
                this.privTranslationPhrase = JSON.parse(e), this.privTranslationPhrase.RecognitionStatus = n.RecognitionStatus[this.privTranslationPhrase.RecognitionStatus], void 0 !== this.privTranslationPhrase.Translation && (this.privTranslationPhrase.Translation.TranslationStatus = o.TranslationStatus[this.privTranslationPhrase.Translation.TranslationStatus])
            }
            return e.fromJSON = function (t) {
                return new e(t)
            }, Object.defineProperty(e.prototype, "RecognitionStatus", {
                get: function () {
                    return this.privTranslationPhrase.RecognitionStatus
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "Offset", {
                get: function () {
                    return this.privTranslationPhrase.Offset
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "Duration", {
                get: function () {
                    return this.privTranslationPhrase.Duration
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "Text", {
                get: function () {
                    return this.privTranslationPhrase.Text
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "Translation", {
                get: function () {
                    return this.privTranslationPhrase.Translation
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
    t.TranslationPhrase = i
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(4),
        s = r(30),
        a = r(25),
        c = function (e) {
            function t(t, r, n, o, i) {
                var s = e.call(this, t, r, n, o, i) || this;
                return s.privTranslationRecognizer = i, s
            }
            return o(t, e), t.prototype.processTypeSpecificMessages = function (e) {
                var t = new s.PropertyCollection,
                    r = !1;
                switch (e.messageType === i.MessageType.Text && t.setProperty(s.PropertyId.SpeechServiceResponse_JsonResult, e.textBody), e.path.toLowerCase()) {
                    case "translation.hypothesis":
                        var n = this.fireEventForResult(a.TranslationHypothesis.fromJSON(e.textBody), t);
                        if (this.privRequestSession.onHypothesis(this.privRequestSession.currentTurnAudioOffset + n.offset), this.privTranslationRecognizer.recognizing) try {
                            this.privTranslationRecognizer.recognizing(this.privTranslationRecognizer, n)
                        } catch (e) { }
                        r = !0;
                        break;
                    case "translation.phrase":
                        var o = a.TranslationPhrase.fromJSON(e.textBody);
                        if (this.privRequestSession.onPhraseRecognized(this.privRequestSession.currentTurnAudioOffset + o.Offset + o.Duration), o.RecognitionStatus === a.RecognitionStatus.Success) {
                            var c = this.fireEventForResult(o, t);
                            if (this.privTranslationRecognizer.recognized) try {
                                this.privTranslationRecognizer.recognized(this.privTranslationRecognizer, c)
                            } catch (e) { }
                            if (this.privSuccessCallback) {
                                try {
                                    this.privSuccessCallback(c.result)
                                } catch (e) {
                                    this.privErrorCallback && this.privErrorCallback(e)
                                }
                                this.privSuccessCallback = void 0, this.privErrorCallback = void 0
                            }
                            break
                        }
                        var p = a.EnumTranslation.implTranslateRecognitionResult(o.RecognitionStatus),
                            u = new s.TranslationRecognitionResult(void 0, this.privRequestSession.requestId, p, o.Text, o.Duration, this.privRequestSession.currentTurnAudioOffset + o.Offset, void 0, e.textBody, t);
                        if (p === s.ResultReason.Canceled) {
                            var v = a.EnumTranslation.implTranslateCancelResult(o.RecognitionStatus);
                            this.cancelRecognitionLocal(v, a.EnumTranslation.implTranslateCancelErrorCode(o.RecognitionStatus), void 0)
                        } else {
                            if (!this.privRequestSession.isSpeechEnded || p !== s.ResultReason.NoMatch || o.RecognitionStatus === a.RecognitionStatus.InitialSilenceTimeout) {
                                var l = new s.TranslationRecognitionEventArgs(u, u.offset, this.privRequestSession.sessionId);
                                if (this.privTranslationRecognizer.recognized) try {
                                    this.privTranslationRecognizer.recognized(this.privTranslationRecognizer, l)
                                } catch (e) { }
                            }
                            if (this.privSuccessCallback) {
                                try {
                                    this.privSuccessCallback(u)
                                } catch (e) {
                                    this.privErrorCallback && this.privErrorCallback(e)
                                }
                                this.privSuccessCallback = void 0, this.privErrorCallback = void 0
                            }
                        }
                        r = !0;
                        break;
                    case "translation.synthesis":
                        this.sendSynthesisAudio(e.binaryBody, this.privRequestSession.sessionId), r = !0;
                        break;
                    case "translation.synthesis.end":
                        var f = a.TranslationSynthesisEnd.fromJSON(e.textBody);
                        switch (f.SynthesisStatus) {
                            case a.SynthesisStatus.Error:
                                if (this.privTranslationRecognizer.synthesizing) {
                                    var h = new s.TranslationSynthesisResult(s.ResultReason.Canceled, void 0),
                                        d = new s.TranslationSynthesisEventArgs(h, this.privRequestSession.sessionId);
                                    try {
                                        this.privTranslationRecognizer.synthesizing(this.privTranslationRecognizer, d)
                                    } catch (e) { }
                                }
                                if (this.privTranslationRecognizer.canceled) {
                                    var g = new s.TranslationRecognitionCanceledEventArgs(this.privRequestSession.sessionId, s.CancellationReason.Error, f.FailureReason, s.CancellationErrorCode.ServiceError, null);
                                    try {
                                        this.privTranslationRecognizer.canceled(this.privTranslationRecognizer, g)
                                    } catch (e) { }
                                }
                                break;
                            case a.SynthesisStatus.Success:
                                this.sendSynthesisAudio(void 0, this.privRequestSession.sessionId)
                        }
                        r = !0
                }
                return r
            }, t.prototype.cancelRecognition = function (e, t, r, n, o) {
                var i = new s.PropertyCollection;
                if (i.setProperty(a.CancellationErrorCodePropertyName, s.CancellationErrorCode[n]), this.privTranslationRecognizer.canceled) {
                    var c = new s.TranslationRecognitionCanceledEventArgs(e, r, o, n, void 0);
                    try {
                        this.privTranslationRecognizer.canceled(this.privTranslationRecognizer, c)
                    } catch (e) { }
                }
                if (this.privSuccessCallback) {
                    var p = new s.TranslationRecognitionResult(void 0, t, s.ResultReason.Canceled, void 0, void 0, void 0, o, void 0, i);
                    try {
                        this.privSuccessCallback(p), this.privSuccessCallback = void 0
                    } catch (e) { }
                }
            }, t.prototype.fireEventForResult = function (e, t) {
                var r, n;
                if (void 0 !== e.Translation.Translations) {
                    r = new s.Translations;
                    for (var o = 0, c = e.Translation.Translations; o < c.length; o++) {
                        var p = c[o];
                        r.set(p.Language, p.Text)
                    }
                }
                n = e instanceof a.TranslationPhrase ? e.Translation.TranslationStatus === i.TranslationStatus.Success ? s.ResultReason.TranslatedSpeech : s.ResultReason.RecognizedSpeech : s.ResultReason.TranslatingSpeech;
                var u = e.Offset + this.privRequestSession.currentTurnAudioOffset,
                    v = new s.TranslationRecognitionResult(r, this.privRequestSession.requestId, n, e.Text, e.Duration, u, e.Translation.FailureReason, JSON.stringify(e), t);
                return new s.TranslationRecognitionEventArgs(v, u, this.privRequestSession.sessionId)
            }, t.prototype.sendSynthesisAudio = function (e, t) {
                var r = void 0 === e ? s.ResultReason.SynthesizingAudioCompleted : s.ResultReason.SynthesizingAudio,
                    n = new s.TranslationSynthesisResult(r, e),
                    o = new s.TranslationSynthesisEventArgs(n, t);
                if (this.privTranslationRecognizer.synthesizing) try {
                    this.privTranslationRecognizer.synthesizing(this.privTranslationRecognizer, o)
                } catch (e) { }
            }, t
        }(a.ServiceRecognizerBase);
    t.TranslationServiceRecognizer = c
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function () {
        function e(e) {
            this.privSpeechStartDetected = JSON.parse(e)
        }
        return e.fromJSON = function (t) {
            return new e(t)
        }, Object.defineProperty(e.prototype, "Offset", {
            get: function () {
                return this.privSpeechStartDetected.Offset
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.SpeechDetected = n
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function () {
        function e(e) {
            this.privSpeechHypothesis = JSON.parse(e)
        }
        return e.fromJSON = function (t) {
            return new e(t)
        }, Object.defineProperty(e.prototype, "Text", {
            get: function () {
                return this.privSpeechHypothesis.Text
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "Offset", {
            get: function () {
                return this.privSpeechHypothesis.Offset
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "Duration", {
            get: function () {
                return this.privSpeechHypothesis.Duration
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.SpeechHypothesis = n
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(30),
        s = r(25),
        a = function (e) {
            function t(t, r, n, o, i) {
                var s = e.call(this, t, r, n, o, i) || this;
                return s.privSpeechRecognizer = i, s
            }
            return o(t, e), t.prototype.processTypeSpecificMessages = function (e) {
                var t, r = new i.PropertyCollection;
                r.setProperty(i.PropertyId.SpeechServiceResponse_JsonResult, e.textBody);
                var n = !1;
                switch (e.path.toLowerCase()) {
                    case "speech.hypothesis":
                    case "speech.fragment":
                        var o = s.SpeechHypothesis.fromJSON(e.textBody),
                            a = o.Offset + this.privRequestSession.currentTurnAudioOffset;
                        t = new i.SpeechRecognitionResult(this.privRequestSession.requestId, i.ResultReason.RecognizingSpeech, o.Text, o.Duration, a, void 0, e.textBody, r), this.privRequestSession.onHypothesis(a);
                        var c = new i.SpeechRecognitionEventArgs(t, o.Duration, this.privRequestSession.sessionId);
                        if (this.privSpeechRecognizer.recognizing) try {
                            this.privSpeechRecognizer.recognizing(this.privSpeechRecognizer, c)
                        } catch (e) { }
                        n = !0;
                        break;
                    case "speech.phrase":
                        var p = s.SimpleSpeechPhrase.fromJSON(e.textBody),
                            u = s.EnumTranslation.implTranslateRecognitionResult(p.RecognitionStatus);
                        if (this.privRequestSession.onPhraseRecognized(this.privRequestSession.currentTurnAudioOffset + p.Offset + p.Duration), i.ResultReason.Canceled === u) {
                            var v = s.EnumTranslation.implTranslateCancelResult(p.RecognitionStatus);
                            this.cancelRecognitionLocal(v, s.EnumTranslation.implTranslateCancelErrorCode(p.RecognitionStatus), void 0)
                        } else {
                            if (!this.privRequestSession.isSpeechEnded || u !== i.ResultReason.NoMatch || p.RecognitionStatus === s.RecognitionStatus.InitialSilenceTimeout) {
                                if (this.privRecognizerConfig.parameters.getProperty(s.OutputFormatPropertyName) === i.OutputFormat[i.OutputFormat.Simple]) t = new i.SpeechRecognitionResult(this.privRequestSession.requestId, u, p.DisplayText, p.Duration, p.Offset + this.privRequestSession.currentTurnAudioOffset, void 0, e.textBody, r);
                                else {
                                    var l = s.DetailedSpeechPhrase.fromJSON(e.textBody);
                                    t = new i.SpeechRecognitionResult(this.privRequestSession.requestId, u, l.RecognitionStatus === s.RecognitionStatus.Success ? l.NBest[0].Display : void 0, l.Duration, l.Offset + this.privRequestSession.currentTurnAudioOffset, void 0, e.textBody, r)
                                }
                                var f = new i.SpeechRecognitionEventArgs(t, t.offset, this.privRequestSession.sessionId);
                                if (this.privSpeechRecognizer.recognized) try {
                                    this.privSpeechRecognizer.recognized(this.privSpeechRecognizer, f)
                                } catch (e) { }
                            }
                            if (this.privSuccessCallback) {
                                try {
                                    this.privSuccessCallback(t)
                                } catch (e) {
                                    this.privErrorCallback && this.privErrorCallback(e)
                                }
                                this.privSuccessCallback = void 0, this.privErrorCallback = void 0
                            }
                        }
                        n = !0
                }
                return n
            }, t.prototype.cancelRecognition = function (e, t, r, n, o) {
                var a = new i.PropertyCollection;
                if (a.setProperty(s.CancellationErrorCodePropertyName, i.CancellationErrorCode[n]), this.privSpeechRecognizer.canceled) {
                    var c = new i.SpeechRecognitionCanceledEventArgs(r, o, n, void 0, e);
                    try {
                        this.privSpeechRecognizer.canceled(this.privSpeechRecognizer, c)
                    } catch (e) { }
                }
                if (this.privSuccessCallback) {
                    var p = new i.SpeechRecognitionResult(t, i.ResultReason.Canceled, void 0, void 0, void 0, o, void 0, a);
                    try {
                        this.privSuccessCallback(p), this.privSuccessCallback = void 0
                    } catch (e) { }
                }
            }, t
        }(s.ServiceRecognizerBase);
    t.SpeechServiceRecognizer = a
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(25),
        o = function () {
            function e(e) {
                this.privDetailedSpeechPhrase = JSON.parse(e), this.privDetailedSpeechPhrase.RecognitionStatus = n.RecognitionStatus[this.privDetailedSpeechPhrase.RecognitionStatus]
            }
            return e.fromJSON = function (t) {
                return new e(t)
            }, Object.defineProperty(e.prototype, "RecognitionStatus", {
                get: function () {
                    return this.privDetailedSpeechPhrase.RecognitionStatus
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "NBest", {
                get: function () {
                    return this.privDetailedSpeechPhrase.NBest
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "Duration", {
                get: function () {
                    return this.privDetailedSpeechPhrase.Duration
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "Offset", {
                get: function () {
                    return this.privDetailedSpeechPhrase.Offset
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
    t.DetailedSpeechPhrase = o
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(25),
        o = function () {
            function e(e) {
                this.privSimpleSpeechPhrase = JSON.parse(e), this.privSimpleSpeechPhrase.RecognitionStatus = n.RecognitionStatus[this.privSimpleSpeechPhrase.RecognitionStatus]
            }
            return e.fromJSON = function (t) {
                return new e(t)
            }, Object.defineProperty(e.prototype, "RecognitionStatus", {
                get: function () {
                    return this.privSimpleSpeechPhrase.RecognitionStatus
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "DisplayText", {
                get: function () {
                    return this.privSimpleSpeechPhrase.DisplayText
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "Offset", {
                get: function () {
                    return this.privSimpleSpeechPhrase.Offset
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "Duration", {
                get: function () {
                    return this.privSimpleSpeechPhrase.Duration
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
    t.SimpleSpeechPhrase = o
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function (e, t) {
        this.modelImpl = e, this.intentName = t
    };
    t.AddedLmIntent = n
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(4),
        s = r(30),
        a = r(25),
        c = function (e) {
            function t(t, r, n, o, i) {
                var s = e.call(this, t, r, n, o, i) || this;
                return s.privIntentRecognizer = i, s.privIntentDataSent = !1, s
            }
            return o(t, e), t.prototype.setIntents = function (e, t) {
                this.privAddedLmIntents = e, this.privUmbrellaIntent = t, this.privIntentDataSent = !0
            }, t.prototype.processTypeSpecificMessages = function (e) {
                var t, r, n = this,
                    o = !1,
                    c = new s.PropertyCollection;
                switch (e.messageType === i.MessageType.Text && c.setProperty(s.PropertyId.SpeechServiceResponse_JsonResult, e.textBody), e.path.toLowerCase()) {
                    case "speech.hypothesis":
                        var p = a.SpeechHypothesis.fromJSON(e.textBody);
                        if (t = new s.IntentRecognitionResult(void 0, this.privRequestSession.requestId, s.ResultReason.RecognizingIntent, p.Text, p.Duration, p.Offset + this.privRequestSession.currentTurnAudioOffset, void 0, e.textBody, c), this.privRequestSession.onHypothesis(t.offset), r = new s.IntentRecognitionEventArgs(t, p.Offset + this.privRequestSession.currentTurnAudioOffset, this.privRequestSession.sessionId), this.privIntentRecognizer.recognizing) try {
                            this.privIntentRecognizer.recognizing(this.privIntentRecognizer, r)
                        } catch (e) { }
                        o = !0;
                        break;
                    case "speech.phrase":
                        var u = a.SimpleSpeechPhrase.fromJSON(e.textBody);
                        t = new s.IntentRecognitionResult(void 0, this.privRequestSession.requestId, a.EnumTranslation.implTranslateRecognitionResult(u.RecognitionStatus), u.DisplayText, u.Duration, u.Offset + this.privRequestSession.currentTurnAudioOffset, void 0, e.textBody, c), r = new s.IntentRecognitionEventArgs(t, t.offset, this.privRequestSession.sessionId);
                        !1 === this.privIntentDataSent || s.ResultReason.NoMatch === r.result.reason ? (this.privRequestSession.onPhraseRecognized(r.offset + r.result.duration), function () {
                            if (n.privIntentRecognizer.recognized) try {
                                n.privIntentRecognizer.recognized(n.privIntentRecognizer, r)
                            } catch (e) { }
                            if (n.privSuccessCallback) {
                                try {
                                    n.privSuccessCallback(t)
                                } catch (e) {
                                    n.privErrorCallback && n.privErrorCallback(e)
                                }
                                n.privSuccessCallback = void 0, n.privErrorCallback = void 0
                            }
                        }()) : this.privPendingIntentArgs = r, o = !0;
                        break;
                    case "response":
                        if (r = this.privPendingIntentArgs, this.privPendingIntentArgs = void 0, void 0 === r) {
                            if ("" === e.textBody) return;
                            r = new s.IntentRecognitionEventArgs(new s.IntentRecognitionResult, 0, this.privRequestSession.sessionId)
                        }
                        var v = a.IntentResponse.fromJSON(e.textBody),
                            l = this.privAddedLmIntents[v.topScoringIntent.intent];
                        if (void 0 !== this.privUmbrellaIntent && (l = this.privUmbrellaIntent), null !== v && void 0 !== l) {
                            var f = void 0 === l.intentName ? v.topScoringIntent.intent : l.intentName,
                                h = r.result.reason;
                            void 0 !== f && (h = s.ResultReason.RecognizedIntent);
                            var d = void 0 !== r.result.properties ? r.result.properties : new s.PropertyCollection;
                            d.setProperty(s.PropertyId.LanguageUnderstandingServiceResponse_JsonResult, e.textBody), r = new s.IntentRecognitionEventArgs(new s.IntentRecognitionResult(f, r.result.resultId, h, r.result.text, r.result.duration, r.result.offset, r.result.errorDetails, r.result.json, d), r.offset, r.sessionId)
                        }
                        if (this.privRequestSession.onPhraseRecognized(r.offset + r.result.duration), this.privIntentRecognizer.recognized) try {
                            this.privIntentRecognizer.recognized(this.privIntentRecognizer, r)
                        } catch (e) { }
                        if (this.privSuccessCallback) {
                            try {
                                this.privSuccessCallback(r.result)
                            } catch (e) {
                                this.privErrorCallback && this.privErrorCallback(e)
                            }
                            this.privSuccessCallback = void 0, this.privErrorCallback = void 0
                        }
                        o = !0
                }
                return o
            }, t.prototype.cancelRecognition = function (e, t, r, n, o) {
                var i = new s.PropertyCollection;
                if (i.setProperty(a.CancellationErrorCodePropertyName, s.CancellationErrorCode[n]), this.privIntentRecognizer.canceled) {
                    var c = new s.IntentRecognitionCanceledEventArgs(r, o, n, void 0, void 0, e);
                    try {
                        this.privIntentRecognizer.canceled(this.privIntentRecognizer, c)
                    } catch (e) { }
                }
                if (this.privSuccessCallback) {
                    var p = new s.IntentRecognitionResult(void 0, t, s.ResultReason.Canceled, void 0, void 0, void 0, o, void 0, i);
                    try {
                        this.privSuccessCallback(p), this.privSuccessCallback = void 0
                    } catch (e) { }
                }
            }, t
        }(a.ServiceRecognizerBase);
    t.IntentServiceRecognizer = c
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function () {
        function e(e) {
            this.privIntentResponse = JSON.parse(e)
        }
        return e.fromJSON = function (t) {
            return new e(t)
        }, Object.defineProperty(e.prototype, "query", {
            get: function () {
                return this.privIntentResponse.query
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "topScoringIntent", {
            get: function () {
                return this.privIntentResponse.topScoringIntent
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "entities", {
            get: function () {
                return this.privIntentResponse.entities
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.IntentResponse = n
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(4),
        o = r(94),
        i = r(115),
        s = function () {
            function e(e) {
                var t = this;
                this.privIsDisposed = !1, this.privDetachables = new Array, this.privIsAudioNodeDetached = !1, this.privIsRecognizing = !1, this.privIsSpeechEnded = !1, this.privTurnStartAudioOffset = 0, this.privLastRecoOffset = 0, this.privHypothesisReceived = !1, this.privBytesSent = 0, this.privRecogNumber = 0, this.onAudioSourceAttachCompleted = function (e, r, n) {
                    t.privAudioNode = e, t.privIsAudioNodeDetached = !1, r ? t.onComplete() : t.onEvent(new o.ListeningStartedEvent(t.privRequestId, t.privSessionId, t.privAudioSourceId, t.privAudioNodeId))
                }, this.onPreConnectionStart = function (e, r) {
                    t.privAuthFetchEventId = e, t.privSessionId = r, t.onEvent(new o.ConnectingToServiceEvent(t.privRequestId, t.privAuthFetchEventId, t.privSessionId))
                }, this.onAuthCompleted = function (e, r) {
                    e && t.onComplete()
                }, this.onConnectionEstablishCompleted = function (e, r) {
                    if (200 === e) return t.onEvent(new o.RecognitionStartedEvent(t.requestId, t.privAudioSourceId, t.privAudioNodeId, t.privAuthFetchEventId, t.privSessionId)), t.privAudioNode && t.privAudioNode.replay(), t.privTurnStartAudioOffset = t.privLastRecoOffset, void (t.privBytesSent = 0);
                    403 === e && t.onComplete()
                }, this.onServiceTurnEndResponse = function (e) {
                    t.privTurnDeferral.resolve(!0), !e || t.isSpeechEnded ? t.onComplete() : (t.privTurnStartAudioOffset = t.privLastRecoOffset, t.privRequestId = n.createNoDashGuid(), t.privAudioNode.replay())
                }, this.onServiceTurnStartResponse = function () {
                    t.privTurnDeferral.state() === n.PromiseState.None && t.privTurnDeferral.reject("Another turn started before current completed."), t.privTurnDeferral = new n.Deferred
                }, this.dispose = function (e) {
                    if (!t.privIsDisposed) {
                        t.privIsDisposed = !0;
                        for (var r = 0, n = t.privDetachables; r < n.length; r++) {
                            n[r].detach()
                        }
                        t.privServiceTelemetryListener.dispose()
                    }
                }, this.getTelemetry = function () {
                    return t.privServiceTelemetryListener.hasTelemetry ? t.privServiceTelemetryListener.getTelemetry() : null
                }, this.onEvent = function (e) {
                    t.privServiceTelemetryListener && t.privServiceTelemetryListener.onEvent(e), n.Events.instance.onEvent(e)
                }, this.onComplete = function () {
                    t.privIsRecognizing && (t.privIsRecognizing = !1, t.detachAudioNode())
                }, this.detachAudioNode = function () {
                    t.privIsAudioNodeDetached || (t.privIsAudioNodeDetached = !0, t.privAudioNode && t.privAudioNode.detach())
                }, this.privAudioSourceId = e, this.privRequestId = n.createNoDashGuid(), this.privAudioNodeId = n.createNoDashGuid(), this.privTurnDeferral = new n.Deferred, this.privTurnDeferral.resolve(!0)
            }
            return Object.defineProperty(e.prototype, "sessionId", {
                get: function () {
                    return this.privSessionId
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "requestId", {
                get: function () {
                    return this.privRequestId
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "audioNodeId", {
                get: function () {
                    return this.privAudioNodeId
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "turnCompletionPromise", {
                get: function () {
                    return this.privTurnDeferral.promise()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "isSpeechEnded", {
                get: function () {
                    return this.privIsSpeechEnded
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "isRecognizing", {
                get: function () {
                    return this.privIsRecognizing
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "currentTurnAudioOffset", {
                get: function () {
                    return this.privTurnStartAudioOffset
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "recogNumber", {
                get: function () {
                    return this.privRecogNumber
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "bytesSent", {
                get: function () {
                    return this.privBytesSent
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.listenForServiceTelemetry = function (e) {
                this.privServiceTelemetryListener && this.privDetachables.push(e.attachListener(this.privServiceTelemetryListener))
            }, e.prototype.startNewRecognition = function () {
                this.privIsSpeechEnded = !1, this.privIsRecognizing = !0, this.privTurnStartAudioOffset = 0, this.privLastRecoOffset = 0, this.privRequestId = n.createNoDashGuid(), this.privRecogNumber++ , this.privServiceTelemetryListener = new i.ServiceTelemetryListener(this.privRequestId, this.privAudioSourceId, this.privAudioNodeId), this.onEvent(new o.RecognitionTriggeredEvent(this.requestId, this.privSessionId, this.privAudioSourceId, this.privAudioNodeId))
            }, e.prototype.onHypothesis = function (e) {
                this.privHypothesisReceived || (this.privHypothesisReceived = !0, this.privServiceTelemetryListener.hypothesisReceived(this.privAudioNode.findTimeAtOffset(e)))
            }, e.prototype.onPhraseRecognized = function (e) {
                this.privServiceTelemetryListener.phraseReceived(this.privAudioNode.findTimeAtOffset(e)), this.onServiceRecognized(e)
            }, e.prototype.onServiceRecognized = function (e) {
                this.privLastRecoOffset = e, this.privHypothesisReceived = !1, this.privAudioNode.shrinkBuffers(e)
            }, e.prototype.onAudioSent = function (e) {
                this.privBytesSent += e
            }, e.prototype.onStopRecognizing = function () {
                this.onComplete()
            }, e.prototype.onSpeechEnded = function () {
                this.privIsSpeechEnded = !0
            }, e
        }();
    t.RequestSession = s
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(4),
        o = r(94),
        i = function () {
            function e(e, t, r) {
                var i = this;
                this.privIsDisposed = !1, this.privListeningTriggerMetric = null, this.privMicMetric = null, this.privConnectionEstablishMetric = null, this.onEvent = function (e) {
                    i.privIsDisposed || (e instanceof o.RecognitionTriggeredEvent && e.requestId === i.privRequestId && (i.privListeningTriggerMetric = {
                        End: e.eventTime,
                        Name: "ListeningTrigger",
                        Start: e.eventTime
                    }), e instanceof n.AudioStreamNodeAttachingEvent && e.audioSourceId === i.privAudioSourceId && e.audioNodeId === i.privAudioNodeId && (i.privMicStartTime = e.eventTime), e instanceof n.AudioStreamNodeAttachedEvent && e.audioSourceId === i.privAudioSourceId && e.audioNodeId === i.privAudioNodeId && (i.privMicStartTime = e.eventTime), e instanceof n.AudioSourceErrorEvent && e.audioSourceId === i.privAudioSourceId && (i.privMicMetric || (i.privMicMetric = {
                        End: e.eventTime,
                        Error: e.error,
                        Name: "Microphone",
                        Start: i.privMicStartTime
                    })), e instanceof n.AudioStreamNodeErrorEvent && e.audioSourceId === i.privAudioSourceId && e.audioNodeId === i.privAudioNodeId && (i.privMicMetric || (i.privMicMetric = {
                        End: e.eventTime,
                        Error: e.error,
                        Name: "Microphone",
                        Start: i.privMicStartTime
                    })), e instanceof n.AudioStreamNodeDetachedEvent && e.audioSourceId === i.privAudioSourceId && e.audioNodeId === i.privAudioNodeId && (i.privMicMetric || (i.privMicMetric = {
                        End: e.eventTime,
                        Name: "Microphone",
                        Start: i.privMicStartTime
                    })), e instanceof o.ConnectingToServiceEvent && e.requestId === i.privRequestId && (i.privConnectionId = e.sessionId), e instanceof n.ConnectionStartEvent && e.connectionId === i.privConnectionId && (i.privConnectionStartTime = e.eventTime), e instanceof n.ConnectionEstablishedEvent && e.connectionId === i.privConnectionId && (i.privConnectionEstablishMetric || (i.privConnectionEstablishMetric = {
                        End: e.eventTime,
                        Id: i.privConnectionId,
                        Name: "Connection",
                        Start: i.privConnectionStartTime
                    })), e instanceof n.ConnectionEstablishErrorEvent && e.connectionId === i.privConnectionId && (i.privConnectionEstablishMetric || (i.privConnectionEstablishMetric = {
                        End: e.eventTime,
                        Error: i.getConnectionError(e.statusCode),
                        Id: i.privConnectionId,
                        Name: "Connection",
                        Start: i.privConnectionStartTime
                    })), e instanceof n.ConnectionMessageReceivedEvent && e.connectionId === i.privConnectionId && e.message && e.message.headers && e.message.headers.path && (i.privReceivedMessages[e.message.headers.path] || (i.privReceivedMessages[e.message.headers.path] = new Array), i.privReceivedMessages[e.message.headers.path].push(e.networkReceivedTime)))
                }, this.getTelemetry = function () {
                    var e = new Array;
                    i.privListeningTriggerMetric && e.push(i.privListeningTriggerMetric), i.privMicMetric && e.push(i.privMicMetric), i.privConnectionEstablishMetric && e.push(i.privConnectionEstablishMetric), i.privPhraseLatencies.length > 0 && e.push({
                        PhraseLatencyMs: i.privPhraseLatencies
                    }), i.privHypothesisLatencies.length > 0 && e.push({
                        FirstHypothesisLatencyMs: i.privHypothesisLatencies
                    });
                    var t = {
                        Metrics: e,
                        ReceivedMessages: i.privReceivedMessages
                    },
                        r = JSON.stringify(t);
                    return i.privReceivedMessages = {}, i.privListeningTriggerMetric = null, i.privMicMetric = null, i.privConnectionEstablishMetric = null, i.privPhraseLatencies = [], i.privHypothesisLatencies = [], r
                }, this.dispose = function () {
                    i.privIsDisposed = !0
                }, this.getConnectionError = function (e) {
                    switch (e) {
                        case 400:
                        case 1002:
                        case 1003:
                        case 1005:
                        case 1007:
                        case 1008:
                        case 1009:
                            return "BadRequest";
                        case 401:
                            return "Unauthorized";
                        case 403:
                            return "Forbidden";
                        case 503:
                        case 1001:
                            return "ServerUnavailable";
                        case 500:
                        case 1011:
                            return "ServerError";
                        case 408:
                        case 504:
                            return "Timeout";
                        default:
                            return "statuscode:" + e.toString()
                    }
                }, this.privRequestId = e, this.privAudioSourceId = t, this.privAudioNodeId = r, this.privReceivedMessages = {}, this.privPhraseLatencies = [], this.privHypothesisLatencies = []
            }
            return e.prototype.phraseReceived = function (e) {
                e > 0 && this.privPhraseLatencies.push(Date.now() - e)
            }, e.prototype.hypothesisReceived = function (e) {
                e > 0 && this.privHypothesisLatencies.push(Date.now() - e)
            }, Object.defineProperty(e.prototype, "hasTelemetry", {
                get: function () {
                    return 0 !== Object.keys(this.privReceivedMessages).length || null !== this.privListeningTriggerMetric || null !== this.privMicMetric || null !== this.privConnectionEstablishMetric || 0 !== this.privPhraseLatencies.length || 0 !== this.privHypothesisLatencies.length
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
    t.ServiceTelemetryListener = i
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function () {
        function e(e) {
            this.privContext = {}, this.privDynamicGrammar = e
        }
        return e.prototype.setSection = function (e, t) {
            this.privContext[e] = t
        }, e.prototype.toJSON = function () {
            var e = this.privDynamicGrammar.generateGrammarObject();
            return this.setSection("dgi", e), JSON.stringify(this.privContext)
        }, e
    }();
    t.SpeechContext = n
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function () {
        function e() { }
        return e.prototype.addPhrase = function (e) {
            this.privPhrases || (this.privPhrases = []), e instanceof Array ? this.privPhrases = this.privPhrases.concat(e) : this.privPhrases.push(e)
        }, e.prototype.clearPhrases = function () {
            this.privPhrases = void 0
        }, e.prototype.addReferenceGrammar = function (e) {
            this.privGrammars || (this.privGrammars = []), e instanceof Array ? this.privGrammars = this.privGrammars.concat(e) : this.privGrammars.push(e)
        }, e.prototype.clearGrammars = function () {
            this.privGrammars = void 0
        }, e.prototype.generateGrammarObject = function () {
            if (void 0 !== this.privGrammars || void 0 !== this.privPhrases) {
                var e = {};
                if (e.ReferenceGrammars = this.privGrammars, void 0 !== this.privPhrases && 0 !== this.privPhrases.length) {
                    var t = [];
                    this.privPhrases.forEach((function (e, r, n) {
                        t.push({
                            Text: e
                        })
                    })), e.Groups = [{
                        Type: "Generic",
                        Items: t
                    }]
                }
                return e
            }
        }, e
    }();
    t.DynamicGrammarBuilder = n
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(2),
        s = r(4),
        a = r(30),
        c = r(119),
        p = r(25),
        u = r(121),
        v = r(96),
        l = function (e) {
            function t(t, r, n, o, u) {
                var l = e.call(this, t, r, n, o, u) || this;
                return l.sendMessage = function (e) {
                    var t = s.createGuid(),
                        r = s.createNoDashGuid(),
                        n = {
                            context: {
                                interactionId: t
                            },
                            messagePayload: e,
                            version: .5
                        },
                        o = JSON.stringify(n);
                    l.fetchDialogConnection().onSuccessContinueWith((function (e) {
                        e.send(new v.SpeechConnectionMessage(s.MessageType.Text, "agent", r, "application/json", o))
                    }))
                }, l.listenOnce = function (e, t, r) {
                    return l.privRecognizerConfig.recognitionMode = e, l.privSuccessCallback = t, l.privErrorCallback = r, l.privDialogRequestSession.startNewRecognition(), l.privDialogRequestSession.listenForServiceTelemetry(l.privDialogAudioSource.events), l.dialogConnectImpl(), l.sendPreAudioMessages(), l.privDialogAudioSource.attach(l.privDialogRequestSession.audioNodeId).continueWithPromise((function (e) {
                        var t;
                        return e.isError ? (l.cancelRecognition(l.privDialogRequestSession.sessionId, l.privDialogRequestSession.requestId, a.CancellationReason.Error, a.CancellationErrorCode.ConnectionFailure, e.error), s.PromiseHelper.fromError(e.error)) : l.privDialogAudioSource.format.onSuccessContinueWithPromise((function (r) {
                            return t = new i.ReplayableAudioNode(e.result, r.avgBytesPerSec), l.privDialogRequestSession.onAudioSourceAttachCompleted(t, !1), l.privDialogAudioSource.deviceInfo.onSuccessContinueWithPromise((function (e) {
                                return l.privRecognizerConfig.SpeechServiceConfig.Context.audio = {
                                    source: e
                                }, l.configConnection().continueWithPromise((function (e) {
                                    if (e.isError) return l.cancelRecognitionLocal(a.CancellationReason.Error, a.CancellationErrorCode.ConnectionFailure, e.error), s.PromiseHelper.fromError(e.error);
                                    var r = new a.SessionEventArgs(l.privDialogRequestSession.sessionId);
                                    return l.privRecognizer.sessionStarted && l.privRecognizer.sessionStarted(l.privRecognizer, r), l.sendAudio(t).on((function (e) { }), (function (e) {
                                        l.cancelRecognition(l.privDialogRequestSession.sessionId, l.privDialogRequestSession.requestId, a.CancellationReason.Error, a.CancellationErrorCode.RuntimeError, e)
                                    })), s.PromiseHelper.fromResult(!0)
                                }))
                            }))
                        }))
                    }))
                }, l.sendAudio = function (e) {
                    return l.privDialogAudioSource.format.onSuccessContinueWithPromise((function (t) {
                        var r = new s.Deferred,
                            n = Date.now(),
                            o = l.privRecognizerConfig.parameters.getProperty("SPEECH-TransmitLengthBeforThrottleMs", "5000"),
                            i = t.avgBytesPerSec / 1e3 * parseInt(o, 10),
                            a = l.privDialogRequestSession.recogNumber,
                            c = function () {
                                l.privDialogIsDisposed || l.privDialogRequestSession.isSpeechEnded || !l.privDialogRequestSession.isRecognizing || l.privDialogRequestSession.recogNumber !== a || l.fetchDialogConnection().on((function (o) {
                                    e.read().on((function (e) {
                                        var a, p;
                                        l.privDialogRequestSession.isSpeechEnded ? r.resolve(!0) : (!e || e.isEnd ? (a = null, p = 0) : (a = e.buffer, l.privDialogRequestSession.onAudioSent(a.byteLength), p = i >= l.privDialogRequestSession.bytesSent ? 0 : Math.max(0, n - Date.now())), setTimeout((function () {
                                            null !== a && (n = Date.now() + 1e3 * a.byteLength / (2 * t.avgBytesPerSec));
                                            var i = o.send(new v.SpeechConnectionMessage(s.MessageType.Binary, "audio", l.privDialogRequestSession.requestId, null, a));
                                            e && !e.isEnd ? i.continueWith((function (e) {
                                                c()
                                            })) : (l.privDialogRequestSession.onSpeechEnded(), r.resolve(!0))
                                        }), p))
                                    }), (function (e) {
                                        l.privDialogRequestSession.isSpeechEnded ? r.resolve(!0) : r.reject(e)
                                    }))
                                }), (function (e) {
                                    r.reject(e)
                                }))
                            };
                        return c(), r.promise()
                    }))
                }, l.receiveDialogMessageOverride = function () {
                    var e = new s.Deferred;
                    return l.fetchDialogConnection().on((function (t) {
                        return t.read().onSuccessContinueWithPromise((function (t) {
                            var r = l.isDisposed(),
                                n = !l.isDisposed() && l.terminateMessageLoop;
                            if (r || n) return e.resolve(void 0), s.PromiseHelper.fromResult(void 0);
                            if (!t) return l.receiveDialogMessageOverride();
                            var o = v.SpeechConnectionMessage.fromConnectionMessage(t);
                            switch (o.path.toLowerCase()) {
                                case "turn.start":
                                    var i = o.requestId.toUpperCase();
                                    i !== l.privDialogRequestSession.requestId.toUpperCase() ? l.privTurnStateManager.StartTurn(i) : l.privDialogRequestSession.onServiceTurnStartResponse();
                                    break;
                                case "speech.startdetected":
                                    var c = p.SpeechDetected.fromJSON(o.textBody),
                                        u = new a.RecognitionEventArgs(c.Offset, l.privDialogRequestSession.sessionId);
                                    l.privRecognizer.speechStartDetected && l.privRecognizer.speechStartDetected(l.privRecognizer, u);
                                    break;
                                case "speech.enddetected":
                                    var f = void 0;
                                    f = o.textBody.length > 0 ? o.textBody : "{ Offset: 0 }";
                                    var h = p.SpeechDetected.fromJSON(f);
                                    l.privDialogRequestSession.onServiceRecognized(h.Offset + l.privDialogRequestSession.currentTurnAudioOffset);
                                    var d = new a.RecognitionEventArgs(h.Offset + l.privDialogRequestSession.currentTurnAudioOffset, l.privDialogRequestSession.sessionId);
                                    l.privRecognizer.speechEndDetected && l.privRecognizer.speechEndDetected(l.privRecognizer, d);
                                    break;
                                case "turn.end":
                                    var g = o.requestId.toUpperCase();
                                    if (g !== l.privDialogRequestSession.requestId.toUpperCase()) l.privTurnStateManager.CompleteTurn(g);
                                    else {
                                        var y = new a.SessionEventArgs(l.privDialogRequestSession.sessionId);
                                        if (l.privDialogRequestSession.onServiceTurnEndResponse(!1), l.privDialogRequestSession.isSpeechEnded && l.privRecognizer.sessionStopped && l.privRecognizer.sessionStopped(l.privRecognizer, y), l.privSuccessCallback && l.privLastResult) {
                                            try {
                                                l.privSuccessCallback(l.privLastResult), l.privLastResult = null
                                            } catch (e) {
                                                l.privErrorCallback && l.privErrorCallback(e)
                                            }
                                            l.privSuccessCallback = void 0, l.privErrorCallback = void 0
                                        }
                                    }
                                    break;
                                default:
                                    l.processTypeSpecificMessages(o) || l.serviceEvents && l.serviceEvents.onEvent(new s.ServiceEvent(o.path.toLowerCase(), o.textBody))
                            }
                            return l.receiveDialogMessageOverride()
                        }))
                    }), (function (t) {
                        return l.terminateMessageLoop = !0, e.resolve(void 0), s.PromiseHelper.fromResult(void 0)
                    })), e.promise()
                }, l.fetchDialogConnection = function () {
                    return l.configConnection()
                }, l.sendAgentConfig = function (e) {
                    if (l.agentConfig && !l.agentConfigSent) {
                        if ("custom_commands" === l.privRecognizerConfig.parameters.getProperty(a.PropertyId.Conversation_DialogType)) {
                            var t = l.agentConfig.get();
                            t.botInfo.commandsCulture = l.privRecognizerConfig.parameters.getProperty(a.PropertyId.SpeechServiceConnection_RecoLanguage, "en-us"), l.agentConfig.set(t)
                        }
                        var r = l.agentConfig.toJsonString();
                        return l.agentConfigSent = !0, e.send(new v.SpeechConnectionMessage(s.MessageType.Text, "agent.config", l.privDialogRequestSession.requestId, "application/json", r))
                    }
                    return s.PromiseHelper.fromResult(!0)
                }, l.sendAgentContext = function (e) {
                    var t = s.createGuid(),
                        r = l.privDialogServiceConnector.properties.getProperty(a.PropertyId.Conversation_Speech_Activity_Template),
                        n = {
                            channelData: "",
                            context: {
                                interactionId: t
                            },
                            messagePayload: void 0 === typeof r ? void 0 : r,
                            version: .5
                        },
                        o = JSON.stringify(n);
                    return e.send(new v.SpeechConnectionMessage(s.MessageType.Text, "speech.agent.context", l.privDialogRequestSession.requestId, "application/json", o))
                }, l.privDialogServiceConnector = u, l.privDialogAuthentication = t, l.receiveMessageOverride = l.receiveDialogMessageOverride, l.privTurnStateManager = new c.DialogServiceTurnStateManager, l.recognizeOverride = l.listenOnce, l.connectImplOverride = l.dialogConnectImpl, l.configConnectionOverride = l.configConnection, l.fetchConnectionOverride = l.fetchDialogConnection, l.disconnectOverride = l.privDisconnect, l.privDialogAudioSource = n, l.privDialogRequestSession = new p.RequestSession(n.id()), l.privDialogConnectionFactory = r, l.privDialogIsDisposed = !1, l.agentConfigSent = !1, l.privLastResult = null, l
            }
            return o(t, e), t.prototype.isDisposed = function () {
                return this.privDialogIsDisposed
            }, t.prototype.dispose = function (e) {
                this.privDialogIsDisposed = !0, this.privConnectionConfigPromise && this.privConnectionConfigPromise.onSuccessContinueWith((function (t) {
                    t.dispose(e)
                }))
            }, t.prototype.privDisconnect = function () {
                this.cancelRecognition(this.privDialogRequestSession.sessionId, this.privDialogRequestSession.requestId, a.CancellationReason.Error, a.CancellationErrorCode.NoError, "Disconnecting"), this.terminateMessageLoop = !0, this.agentConfigSent = !1, this.privDialogConnectionPromise.result().isCompleted ? this.privDialogConnectionPromise.result().isError || (this.privDialogConnectionPromise.result().result.dispose(), this.privDialogConnectionPromise = null) : this.privDialogConnectionPromise.onSuccessContinueWith((function (e) {
                    e.dispose()
                }))
            }, t.prototype.processTypeSpecificMessages = function (e) {
                var t, r, n = new a.PropertyCollection;
                switch (e.messageType === s.MessageType.Text && n.setProperty(a.PropertyId.SpeechServiceResponse_JsonResult, e.textBody), e.path.toLowerCase()) {
                    case "speech.phrase":
                        var o = p.SimpleSpeechPhrase.fromJSON(e.textBody);
                        if (this.privDialogRequestSession.onPhraseRecognized(this.privDialogRequestSession.currentTurnAudioOffset + o.Offset + o.Duration), o.RecognitionStatus === p.RecognitionStatus.Success) {
                            var i = this.fireEventForResult(o, n);
                            if (this.privLastResult = i.result, this.privDialogServiceConnector.recognized) try {
                                this.privDialogServiceConnector.recognized(this.privDialogServiceConnector, i)
                            } catch (e) { }
                        }
                        r = !0;
                        break;
                    case "speech.hypothesis":
                        var c = p.SpeechHypothesis.fromJSON(e.textBody),
                            v = c.Offset + this.privDialogRequestSession.currentTurnAudioOffset;
                        t = new a.SpeechRecognitionResult(this.privDialogRequestSession.requestId, a.ResultReason.RecognizingSpeech, c.Text, c.Duration, v, void 0, e.textBody, n), this.privDialogRequestSession.onHypothesis(v);
                        var l = new a.SpeechRecognitionEventArgs(t, c.Duration, this.privDialogRequestSession.sessionId);
                        if (this.privDialogServiceConnector.recognizing) try {
                            this.privDialogServiceConnector.recognizing(this.privDialogServiceConnector, l)
                        } catch (e) { }
                        r = !0;
                        break;
                    case "audio":
                        var f = e.requestId.toUpperCase(),
                            h = this.privTurnStateManager.GetTurn(f);
                        try {
                            e.binaryBody ? h.audioStream.write(e.binaryBody) : h.endAudioStream()
                        } catch (e) { }
                        r = !0;
                        break;
                    case "response":
                        var d = e.requestId.toUpperCase(),
                            g = u.ActivityPayloadResponse.fromJSON(e.textBody);
                        h = this.privTurnStateManager.GetTurn(d);
                        if (g.conversationId) {
                            var y = this.agentConfig.get();
                            y.botInfo.conversationId = g.conversationId, this.agentConfig.set(y)
                        }
                        var m = h.processActivityPayload(g),
                            C = new a.ActivityReceivedEventArgs(g.messagePayload, m);
                        if (this.privDialogServiceConnector.activityReceived) try {
                            this.privDialogServiceConnector.activityReceived(this.privDialogServiceConnector, C)
                        } catch (e) { }
                        r = !0
                }
                return r
            }, t.prototype.cancelRecognition = function (e, t, r, n, o) {
                if (this.terminateMessageLoop = !0, this.privDialogRequestSession.isRecognizing && this.privDialogRequestSession.onStopRecognizing(), this.privDialogServiceConnector.canceled) {
                    var i = new a.PropertyCollection;
                    i.setProperty(p.CancellationErrorCodePropertyName, a.CancellationErrorCode[n]);
                    var s = new a.SpeechRecognitionCanceledEventArgs(r, o, n, void 0, e);
                    try {
                        this.privDialogServiceConnector.canceled(this.privDialogServiceConnector, s)
                    } catch (e) { }
                    if (this.privSuccessCallback) {
                        var c = new a.SpeechRecognitionResult(void 0, a.ResultReason.Canceled, void 0, void 0, void 0, o, void 0, i);
                        try {
                            this.privSuccessCallback(c), this.privSuccessCallback = void 0
                        } catch (e) { }
                    }
                }
            }, t.prototype.sendWaveHeader = function (e) {
                var t = this;
                return this.audioSource.format.onSuccessContinueWithPromise((function (r) {
                    return e.send(new v.SpeechConnectionMessage(s.MessageType.Binary, "audio", t.privDialogRequestSession.requestId, null, r.header))
                }))
            }, t.prototype.dialogConnectImpl = function (e) {
                var t = this;
                if (void 0 === e && (e = !1), this.privDialogConnectionPromise) return this.privDialogConnectionPromise.result().isCompleted && (this.privDialogConnectionPromise.result().isError || this.privDialogConnectionPromise.result().result.state() === s.ConnectionState.Disconnected) ? (this.agentConfigSent = !1, this.privDialogConnectionPromise = null, this.terminateMessageLoop = !0, this.configConnection()) : this.privDialogConnectionPromise;
                this.privDialogAuthFetchEventId = s.createNoDashGuid(), void 0 === this.privConnectionId && (this.privConnectionId = s.createNoDashGuid()), this.privDialogRequestSession.onPreConnectionStart(this.privDialogAuthFetchEventId, this.privConnectionId);
                var r = e ? this.privDialogAuthentication.fetchOnExpiry(this.privDialogAuthFetchEventId) : this.privDialogAuthentication.fetch(this.privDialogAuthFetchEventId);
                return this.privDialogConnectionPromise = r.continueWithPromise((function (r) {
                    if (r.isError) throw t.privDialogRequestSession.onAuthCompleted(!0, r.error), new Error(r.error);
                    t.privDialogRequestSession.onAuthCompleted(!1);
                    var n = t.privDialogConnectionFactory.create(t.privRecognizerConfig, r.result, t.privConnectionId);
                    return t.privDialogRequestSession.listenForServiceTelemetry(n.events), n.events.attach((function (e) {
                        t.connectionEvents.onEvent(e)
                    })), n.open().onSuccessContinueWithPromise((function (r) {
                        return 200 === r.statusCode ? (t.privDialogRequestSession.onPreConnectionStart(t.privDialogAuthFetchEventId, t.privConnectionId), t.privDialogRequestSession.onConnectionEstablishCompleted(r.statusCode), s.PromiseHelper.fromResult(n)) : 403 !== r.statusCode || e ? (t.privDialogRequestSession.onConnectionEstablishCompleted(r.statusCode, r.reason), s.PromiseHelper.fromError("Unable to contact server. StatusCode: " + r.statusCode + ", " + t.privRecognizerConfig.parameters.getProperty(a.PropertyId.SpeechServiceConnection_Endpoint) + " Reason: " + r.reason)) : t.dialogConnectImpl(!0)
                    }))
                })), this.privConnectionLoop = this.startMessageLoop(), this.privDialogConnectionPromise
            }, t.prototype.startMessageLoop = function () {
                var e = this;
                return this.terminateMessageLoop = !1, this.receiveDialogMessageOverride().on((function (e) {
                    return !0
                }), (function (t) {
                    e.cancelRecognition(e.privDialogRequestSession.sessionId, e.privDialogRequestSession.requestId, a.CancellationReason.Error, a.CancellationErrorCode.RuntimeError, t)
                }))
            }, t.prototype.configConnection = function () {
                var e = this;
                return this.privConnectionConfigPromise ? this.privConnectionConfigPromise.result().isCompleted && (this.privConnectionConfigPromise.result().isError || this.privConnectionConfigPromise.result().result.state() === s.ConnectionState.Disconnected) ? (this.privConnectionConfigPromise = null, this.configConnection()) : this.privConnectionConfigPromise : this.terminateMessageLoop ? (this.terminateMessageLoop = !1, s.PromiseHelper.fromError("Connection to service terminated.")) : (this.privConnectionConfigPromise = this.dialogConnectImpl().onSuccessContinueWithPromise((function (t) {
                    return e.sendSpeechServiceConfig(t, e.privDialogRequestSession, e.privRecognizerConfig.SpeechServiceConfig.serialize()).onSuccessContinueWithPromise((function (r) {
                        return e.sendAgentConfig(t).onSuccessContinueWith((function (e) {
                            return t
                        }))
                    }))
                })), this.privConnectionConfigPromise)
            }, t.prototype.sendPreAudioMessages = function () {
                var e = this;
                this.fetchDialogConnection().onSuccessContinueWith((function (t) {
                    e.sendAgentContext(t), e.sendWaveHeader(t)
                }))
            }, t.prototype.fireEventForResult = function (e, t) {
                var r = p.EnumTranslation.implTranslateRecognitionResult(e.RecognitionStatus),
                    n = e.Offset + this.privDialogRequestSession.currentTurnAudioOffset,
                    o = new a.SpeechRecognitionResult(this.privDialogRequestSession.requestId, r, e.DisplayText, e.Duration, n, void 0, JSON.stringify(e), t);
                return new a.SpeechRecognitionEventArgs(o, n, this.privDialogRequestSession.sessionId)
            }, t
        }(p.ServiceRecognizerBase);
    t.DialogServiceAdapter = l
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(10),
        o = r(120),
        i = function () {
            function e() {
                this.privTurnMap = new Map
            }
            return e.prototype.StartTurn = function (e) {
                if (this.privTurnMap.has(e)) throw new n.InvalidOperationError("Service error: There is already a turn with id:" + e);
                var t = new o.DialogServiceTurnState(this, e);
                return this.privTurnMap.set(e, t), this.privTurnMap.get(e)
            }, e.prototype.GetTurn = function (e) {
                return this.privTurnMap.get(e)
            }, e.prototype.CompleteTurn = function (e) {
                if (!this.privTurnMap.has(e)) throw new n.InvalidOperationError("Service error: Received turn end for an unknown turn id:" + e);
                var t = this.privTurnMap.get(e);
                return t.complete(), this.privTurnMap.delete(e), t
            }, e
        }();
    t.DialogServiceTurnStateManager = i
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(34),
        o = r(121),
        i = function () {
            function e(e, t) {
                this.privRequestId = t, this.privIsCompleted = !1, this.privAudioStream = null, this.privTurnManager = e, this.resetTurnEndTimeout()
            }
            return Object.defineProperty(e.prototype, "audioStream", {
                get: function () {
                    return this.resetTurnEndTimeout(), this.privAudioStream
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.processActivityPayload = function (e) {
                return e.messageDataStreamType === o.MessageDataStreamType.TextToSpeechAudio && (this.privAudioStream = n.AudioOutputStream.createPullStream()), this.privAudioStream
            }, e.prototype.endAudioStream = function () {
                null === this.privAudioStream || this.privAudioStream.isClosed || this.privAudioStream.close()
            }, e.prototype.complete = function () {
                void 0 !== this.privTimeoutToken && clearTimeout(this.privTimeoutToken), this.endAudioStream()
            }, e.prototype.resetTurnEndTimeout = function () {
                var e = this;
                void 0 !== this.privTimeoutToken && clearTimeout(this.privTimeoutToken), this.privTimeoutToken = setTimeout((function () {
                    e.privTurnManager.CompleteTurn(e.privRequestId)
                }), 2e3)
            }, e
        }();
    t.DialogServiceTurnState = i
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function () {
        function e(e) {
            this.privActivityResponse = JSON.parse(e)
        }
        return e.fromJSON = function (t) {
            return new e(t)
        }, Object.defineProperty(e.prototype, "conversationId", {
            get: function () {
                return this.privActivityResponse.conversationId
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "messageDataStreamType", {
            get: function () {
                return this.privActivityResponse.messageDataStreamType
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "messagePayload", {
            get: function () {
                return this.privActivityResponse.messagePayload
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "version", {
            get: function () {
                return this.privActivityResponse.version
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.ActivityPayloadResponse = n,
        function (e) {
            e[e.None = 0] = "None", e[e.TextToSpeechAudio = 1] = "TextToSpeechAudio"
        }(t.MessageDataStreamType || (t.MessageDataStreamType = {}))
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function () {
        function e() { }
        return e.prototype.toJsonString = function () {
            return JSON.stringify(this.iPrivConfig)
        }, e.prototype.get = function () {
            return this.iPrivConfig
        }, e.prototype.set = function (e) {
            this.iPrivConfig = e
        }, e
    }();
    t.AgentConfig = n
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(124);
    t.ConversationImpl = n.ConversationImpl;
    var o = r(125);
    t.ConversationManager = o.ConversationManager;
    var i = r(126);
    t.ConversationTranslatorConfig = i.ConversationTranslatorConfig;
    var s = r(127);
    t.ConversationTranslatorRecognizer = s.ConversationTranslatorRecognizer;
    var a = r(133);
    t.ConversationReceivedTranslationEventArgs = a.ConversationReceivedTranslationEventArgs, t.LockRoomEventArgs = a.LockRoomEventArgs, t.MuteAllEventArgs = a.MuteAllEventArgs, t.ParticipantAttributeEventArgs = a.ParticipantAttributeEventArgs, t.ParticipantEventArgs = a.ParticipantEventArgs, t.ParticipantsListEventArgs = a.ParticipantsListEventArgs;
    var c = r(134);
    t.ConversationTranslatorCommandTypes = c.ConversationTranslatorCommandTypes, t.ConversationTranslatorMessageTypes = c.ConversationTranslatorMessageTypes, t.InternalParticipants = c.InternalParticipants
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }),
        i = this && this.__spreadArrays || function () {
            for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
            var n = Array(e),
                o = 0;
            for (t = 0; t < r; t++)
                for (var i = arguments[t], s = 0, a = i.length; s < a; s++ , o++) n[o] = i[s];
            return n
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = r(32),
        a = r(30),
        c = r(123),
        p = function (e) {
            function t(t) {
                var r = e.call(this) || this;
                r.privIsDisposed = !1, r.privIsConnected = !1, r.onConnected = function (e) {
                    r.privIsConnected = !0;
                    try {
                        r.privConversationTranslator.sessionStarted && r.privConversationTranslator.sessionStarted(r.privConversationTranslator, e)
                    } catch (e) { }
                }, r.onDisconnected = function (e) {
                    r.close(!1);
                    try {
                        r.privConversationTranslator.sessionStopped && r.privConversationTranslator.sessionStopped(r.privConversationTranslator, e)
                    } catch (e) { }
                }, r.onCanceled = function (e, t) {
                    r.close(!1);
                    try {
                        r.privConversationTranslator.canceled && r.privConversationTranslator.canceled(r.privConversationTranslator, t)
                    } catch (t) { }
                }, r.onParticipantUpdateCommandReceived = function (e, t) {
                    var n, o;
                    try {
                        var i = r.privParticipants.getParticipant(t.id);
                        if (void 0 !== i) {
                            switch (t.key) {
                                case c.ConversationTranslatorCommandTypes.changeNickname:
                                    i.displayName = t.value;
                                    break;
                                case c.ConversationTranslatorCommandTypes.setUseTTS:
                                    i.useTts = t.value;
                                    break;
                                case c.ConversationTranslatorCommandTypes.setProfanityFiltering:
                                    i.profanity = t.value;
                                    break;
                                case c.ConversationTranslatorCommandTypes.setMute:
                                    i.isMuted = t.value;
                                    break;
                                case c.ConversationTranslatorCommandTypes.setTranslateToLanguages:
                                    i.translateToLanguages = t.value
                            }
                            r.privParticipants.addOrUpdateParticipant(i), (null === (n = r.privConversationTranslator) || void 0 === n ? void 0 : n.participantsChanged) && (null === (o = r.privConversationTranslator) || void 0 === o || o.participantsChanged(r.privConversationTranslator, new a.ConversationParticipantsChangedEventArgs(a.ParticipantChangedReason.Updated, [r.toParticipant(i)], t.sessionId)))
                        }
                    } catch (t) { }
                }, r.onLockRoomCommandReceived = function (e, t) { }, r.onMuteAllCommandReceived = function (e, t) {
                    var n, o;
                    try {
                        r.privParticipants.participants.forEach((function (e) {
                            return e.isMuted = !e.isHost && t.isMuted
                        })), (null === (n = r.privConversationTranslator) || void 0 === n ? void 0 : n.participantsChanged) && (null === (o = r.privConversationTranslator) || void 0 === o || o.participantsChanged(r.privConversationTranslator, new a.ConversationParticipantsChangedEventArgs(a.ParticipantChangedReason.Updated, r.toParticipants(!1), t.sessionId)))
                    } catch (t) { }
                }, r.onParticipantJoinCommandReceived = function (e, t) {
                    var n, o;
                    try {
                        var i = r.privParticipants.addOrUpdateParticipant(t.participant);
                        void 0 !== i && (null === (n = r.privConversationTranslator) || void 0 === n ? void 0 : n.participantsChanged) && (null === (o = r.privConversationTranslator) || void 0 === o || o.participantsChanged(r.privConversationTranslator, new a.ConversationParticipantsChangedEventArgs(a.ParticipantChangedReason.JoinedConversation, [r.toParticipant(i)], t.sessionId)))
                    } catch (t) { }
                }, r.onParticipantLeaveCommandReceived = function (e, t) {
                    var n, o;
                    try {
                        var i = r.privParticipants.getParticipant(t.participant.id);
                        void 0 !== i && (r.privParticipants.deleteParticipant(t.participant.id), (null === (n = r.privConversationTranslator) || void 0 === n ? void 0 : n.participantsChanged) && (null === (o = r.privConversationTranslator) || void 0 === o || o.participantsChanged(r.privConversationTranslator, new a.ConversationParticipantsChangedEventArgs(a.ParticipantChangedReason.LeftConversation, [r.toParticipant(i)], t.sessionId))))
                    } catch (t) { }
                }, r.onTranslationReceived = function (e, t) {
                    var n, o, i, s, p, u;
                    try {
                        switch (t.command) {
                            case c.ConversationTranslatorMessageTypes.final:
                                (null === (n = r.privConversationTranslator) || void 0 === n ? void 0 : n.transcribed) && (null === (o = r.privConversationTranslator) || void 0 === o || o.transcribed(r.privConversationTranslator, new a.ConversationTranslationEventArgs(t.payload, void 0, t.sessionId)));
                                break;
                            case c.ConversationTranslatorMessageTypes.partial:
                                (null === (i = r.privConversationTranslator) || void 0 === i ? void 0 : i.transcribing) && (null === (s = r.privConversationTranslator) || void 0 === s || s.transcribing(r.privConversationTranslator, new a.ConversationTranslationEventArgs(t.payload, void 0, t.sessionId)));
                                break;
                            case c.ConversationTranslatorMessageTypes.instantMessage:
                                (null === (p = r.privConversationTranslator) || void 0 === p ? void 0 : p.textMessageReceived) && (null === (u = r.privConversationTranslator) || void 0 === u || u.textMessageReceived(r.privConversationTranslator, new a.ConversationTranslationEventArgs(t.payload, void 0, t.sessionId)))
                        }
                    } catch (t) { }
                }, r.onParticipantsListReceived = function (e, t) {
                    var n, o;
                    try {
                        if (void 0 !== t.sessionToken && null !== t.sessionToken && (r.privRoom.token = t.sessionToken), r.privParticipants.participants = i(t.participants), void 0 !== r.privParticipants.me && (r.privIsReady = !0), (null === (n = r.privConversationTranslator) || void 0 === n ? void 0 : n.participantsChanged) && (null === (o = r.privConversationTranslator) || void 0 === o || o.participantsChanged(r.privConversationTranslator, new a.ConversationParticipantsChangedEventArgs(a.ParticipantChangedReason.JoinedConversation, r.toParticipants(!0), t.sessionId))), r.me.isHost) {
                            var s = r.privConversationTranslator.properties.getProperty(a.PropertyId.ConversationTranslator_Name);
                            void 0 !== s && s.length > 0 && s !== r.me.displayName && r.changeNicknameAsync(s)
                        }
                    } catch (t) { }
                }, r.onConversationExpiration = function (e, t) {
                    var n, o;
                    try {
                        (null === (n = r.privConversationTranslator) || void 0 === n ? void 0 : n.conversationExpiration) && (null === (o = r.privConversationTranslator) || void 0 === o || o.conversationExpiration(r.privConversationTranslator, t))
                    } catch (t) { }
                }, r.privProperties = new a.PropertyCollection, r.privManager = new c.ConversationManager, t.getProperty(a.PropertyId[a.PropertyId.SpeechServiceConnection_RecoLanguage]) || t.setProperty(a.PropertyId[a.PropertyId.SpeechServiceConnection_RecoLanguage], c.ConversationTranslatorConfig.defaultLanguageCode), r.privLanguage = t.getProperty(a.PropertyId[a.PropertyId.SpeechServiceConnection_RecoLanguage]), 0 === t.targetLanguages.length && t.addTargetLanguage(r.privLanguage), t.getProperty(a.PropertyId[a.PropertyId.SpeechServiceResponse_ProfanityOption]) || t.setProfanity(a.ProfanityOption.Masked);
                var n = t.getProperty(a.PropertyId[a.PropertyId.ConversationTranslator_Name]);
                (null == n || n.length <= 1 || n.length > 50) && (n = "Host"), t.setProperty(a.PropertyId[a.PropertyId.ConversationTranslator_Name], n), r.privConfig = t;
                var o = t;
                return s.Contracts.throwIfNull(o, "speechConfig"), r.privProperties = o.properties.clone(), r.privIsConnected = !1, r.privParticipants = new c.InternalParticipants, r.privIsReady = !1, r
            }
            return o(t, e), Object.defineProperty(t.prototype, "conversationTranslator", {
                set: function (e) {
                    this.privConversationTranslator = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "room", {
                get: function () {
                    return this.privRoom
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "connection", {
                get: function () {
                    return this.privConversationRecognizer
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "authorizationToken", {
                get: function () {
                    return this.privToken
                },
                set: function (e) {
                    s.Contracts.throwIfNullOrWhitespace(e, "authorizationToken"), this.privToken = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "config", {
                get: function () {
                    return this.privConfig
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "conversationId", {
                get: function () {
                    return this.privRoom ? this.privRoom.roomId : ""
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "properties", {
                get: function () {
                    return this.privProperties
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "speechRecognitionLanguage", {
                get: function () {
                    return this.privLanguage
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "isMutedByHost", {
                get: function () {
                    var e, t;
                    return (null === (e = this.privParticipants.me) || void 0 === e || !e.isHost) && (null === (t = this.privParticipants.me) || void 0 === t ? void 0 : t.isMuted)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "isConnected", {
                get: function () {
                    return this.privIsConnected && this.privIsReady
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "participants", {
                get: function () {
                    return this.toParticipants(!0)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "me", {
                get: function () {
                    return this.toParticipant(this.privParticipants.me)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "host", {
                get: function () {
                    return this.toParticipant(this.privParticipants.host)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.createConversationAsync = function (e, t) {
                var r = this;
                try {
                    this.privConversationRecognizer && this.handleError(new Error(c.ConversationTranslatorConfig.strings.permissionDeniedStart), t), this.privManager.createOrJoin(this.privProperties, void 0, (function (n) {
                        n || r.handleError(new Error(c.ConversationTranslatorConfig.strings.permissionDeniedConnect), t), r.privRoom = n, r.handleCallback(e, t)
                    }), (function (e) {
                        r.handleError(e, t)
                    }))
                } catch (e) {
                    this.handleError(e, t)
                }
            }, t.prototype.startConversationAsync = function (e, t) {
                var r = this;
                try {
                    this.privConversationRecognizer && this.handleError(new Error(c.ConversationTranslatorConfig.strings.permissionDeniedStart), t), s.Contracts.throwIfNullOrUndefined(this.privRoom, c.ConversationTranslatorConfig.strings.permissionDeniedConnect), this.privParticipants.meId = this.privRoom.participantId, this.privConversationRecognizer = new c.ConversationTranslatorRecognizer(this.privConfig), this.privConversationRecognizer.conversation = this.privRoom, this.privConversationRecognizerConnection = a.Connection.fromRecognizer(this.privConversationRecognizer), this.privConversationRecognizerConnection.connected = this.onConnected, this.privConversationRecognizerConnection.disconnected = this.onDisconnected, this.privConversationRecognizer.canceled = this.onCanceled, this.privConversationRecognizer.participantUpdateCommandReceived = this.onParticipantUpdateCommandReceived, this.privConversationRecognizer.lockRoomCommandReceived = this.onLockRoomCommandReceived, this.privConversationRecognizer.muteAllCommandReceived = this.onMuteAllCommandReceived, this.privConversationRecognizer.participantJoinCommandReceived = this.onParticipantJoinCommandReceived, this.privConversationRecognizer.participantLeaveCommandReceived = this.onParticipantLeaveCommandReceived, this.privConversationRecognizer.translationReceived = this.onTranslationReceived, this.privConversationRecognizer.participantsListReceived = this.onParticipantsListReceived, this.privConversationRecognizer.conversationExpiration = this.onConversationExpiration, this.privConversationRecognizer.connect(this.privRoom.token, (function () {
                        r.handleCallback(e, t)
                    }), (function (e) {
                        r.handleError(e, t)
                    }))
                } catch (e) {
                    this.handleError(e, t)
                }
            }, t.prototype.joinConversationAsync = function (e, t, r, n, o) {
                var i = this;
                try {
                    s.Contracts.throwIfNullOrWhitespace(e, c.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "conversationId")), s.Contracts.throwIfNullOrWhitespace(t, c.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "nickname")), s.Contracts.throwIfNullOrWhitespace(r, c.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "language")), this.privManager.createOrJoin(this.privProperties, e, (function (e) {
                        s.Contracts.throwIfNullOrUndefined(e, c.ConversationTranslatorConfig.strings.permissionDeniedConnect), i.privRoom = e, i.privConfig.authorizationToken = e.cognitiveSpeechAuthToken, n && n(e.cognitiveSpeechAuthToken)
                    }), (function (e) {
                        i.handleError(e, o)
                    }))
                } catch (e) {
                    this.handleError(e, o)
                }
            }, t.prototype.deleteConversationAsync = function (e, t) {
                var r = this;
                try {
                    s.Contracts.throwIfNullOrUndefined(this.privProperties, c.ConversationTranslatorConfig.strings.permissionDeniedConnect), s.Contracts.throwIfNullOrWhitespace(this.privRoom.token, c.ConversationTranslatorConfig.strings.permissionDeniedConnect), this.privManager.leave(this.privProperties, this.privRoom.token, (function () {
                        r.handleCallback(e, t)
                    }), (function (e) {
                        r.handleError(e, t)
                    })), this.dispose()
                } catch (e) {
                    this.handleError(e, t)
                }
            }, t.prototype.endConversationAsync = function (e, t) {
                try {
                    this.close(!0), this.handleCallback(e, t)
                } catch (e) {
                    this.handleError(e, t)
                }
            }, t.prototype.lockConversationAsync = function (e, t) {
                var r, n = this;
                try {
                    s.Contracts.throwIfDisposed(this.privIsDisposed), s.Contracts.throwIfDisposed(this.privConversationRecognizer.isDisposed()), s.Contracts.throwIfNullOrUndefined(this.privRoom, c.ConversationTranslatorConfig.strings.permissionDeniedSend), this.canSendAsHost || this.handleError(new Error(c.ConversationTranslatorConfig.strings.permissionDeniedConversation.replace("{command}", "lock")), t), null === (r = this.privConversationRecognizer) || void 0 === r || r.sendLockRequest(!0, (function () {
                        n.handleCallback(e, t)
                    }), (function (e) {
                        n.handleError(e, t)
                    }))
                } catch (e) {
                    this.handleError(e, t)
                }
            }, t.prototype.muteAllParticipantsAsync = function (e, t) {
                var r, n = this;
                try {
                    s.Contracts.throwIfDisposed(this.privIsDisposed), s.Contracts.throwIfDisposed(this.privConversationRecognizer.isDisposed()), s.Contracts.throwIfNullOrUndefined(this.privConversationRecognizer, c.ConversationTranslatorConfig.strings.permissionDeniedSend), s.Contracts.throwIfNullOrUndefined(this.privRoom, c.ConversationTranslatorConfig.strings.permissionDeniedSend), this.canSendAsHost || this.handleError(new Error(c.ConversationTranslatorConfig.strings.permissionDeniedConversation.replace("{command}", "mute")), t), null === (r = this.privConversationRecognizer) || void 0 === r || r.sendMuteAllRequest(!0, (function () {
                        n.handleCallback(e, t)
                    }), (function (e) {
                        n.handleError(e, t)
                    }))
                } catch (e) {
                    this.handleError(e, t)
                }
            }, t.prototype.muteParticipantAsync = function (e, t, r) {
                var n, o = this;
                try {
                    s.Contracts.throwIfDisposed(this.privIsDisposed), s.Contracts.throwIfDisposed(this.privConversationRecognizer.isDisposed()), s.Contracts.throwIfNullOrWhitespace(e, c.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "userId")), s.Contracts.throwIfNullOrUndefined(this.privRoom, c.ConversationTranslatorConfig.strings.permissionDeniedSend), this.canSend || this.handleError(new Error(c.ConversationTranslatorConfig.strings.permissionDeniedSend), r), this.me.isHost || this.me.id === e || this.handleError(new Error(c.ConversationTranslatorConfig.strings.permissionDeniedParticipant.replace("{command}", "mute")), r), -1 === this.privParticipants.getParticipantIndex(e) && this.handleError(new Error(c.ConversationTranslatorConfig.strings.invalidParticipantRequest), r), null === (n = this.privConversationRecognizer) || void 0 === n || n.sendMuteRequest(e, !0, (function () {
                        o.handleCallback(t, r)
                    }), (function (e) {
                        o.handleError(e, r)
                    }))
                } catch (e) {
                    this.handleError(e, r)
                }
            }, t.prototype.removeParticipantAsync = function (e, t, r) {
                var n, o = this;
                try {
                    s.Contracts.throwIfDisposed(this.privIsDisposed), s.Contracts.throwIfDisposed(this.privConversationRecognizer.isDisposed()), s.Contracts.throwIfNullOrUndefined(this.privRoom, c.ConversationTranslatorConfig.strings.permissionDeniedSend), this.canSendAsHost || this.handleError(new Error(c.ConversationTranslatorConfig.strings.permissionDeniedParticipant.replace("{command}", "remove")), r);
                    var i = "";
                    if ("string" == typeof e) i = e;
                    else if (e.hasOwnProperty("id")) {
                        i = e.id
                    } else if (e.hasOwnProperty("userId")) {
                        i = e.userId
                    }
                    s.Contracts.throwIfNullOrWhitespace(i, c.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "userId")), -1 === this.participants.findIndex((function (e) {
                        return e.id === i
                    })) && this.handleError(new Error(c.ConversationTranslatorConfig.strings.invalidParticipantRequest), r), null === (n = this.privConversationRecognizer) || void 0 === n || n.sendEjectRequest(i, (function () {
                        o.handleCallback(t, r)
                    }), (function (e) {
                        o.handleError(e, r)
                    }))
                } catch (e) {
                    this.handleError(e, r)
                }
            }, t.prototype.unlockConversationAsync = function (e, t) {
                var r, n = this;
                try {
                    s.Contracts.throwIfDisposed(this.privIsDisposed), s.Contracts.throwIfDisposed(this.privConversationRecognizer.isDisposed()), s.Contracts.throwIfNullOrUndefined(this.privRoom, c.ConversationTranslatorConfig.strings.permissionDeniedSend), this.canSendAsHost || this.handleError(new Error(c.ConversationTranslatorConfig.strings.permissionDeniedConversation.replace("{command}", "unlock")), t), null === (r = this.privConversationRecognizer) || void 0 === r || r.sendLockRequest(!1, (function () {
                        n.handleCallback(e, t)
                    }), (function (e) {
                        n.handleError(e, t)
                    }))
                } catch (e) {
                    this.handleError(e, t)
                }
            }, t.prototype.unmuteAllParticipantsAsync = function (e, t) {
                var r, n = this;
                try {
                    s.Contracts.throwIfDisposed(this.privIsDisposed), s.Contracts.throwIfDisposed(this.privConversationRecognizer.isDisposed()), s.Contracts.throwIfNullOrUndefined(this.privRoom, c.ConversationTranslatorConfig.strings.permissionDeniedSend), this.canSendAsHost || this.handleError(new Error(c.ConversationTranslatorConfig.strings.permissionDeniedConversation.replace("{command}", "unmute all")), t), null === (r = this.privConversationRecognizer) || void 0 === r || r.sendMuteAllRequest(!1, (function () {
                        n.handleCallback(e, t)
                    }), (function (e) {
                        n.handleError(e, t)
                    }))
                } catch (e) {
                    this.handleError(e, t)
                }
            }, t.prototype.unmuteParticipantAsync = function (e, t, r) {
                var n, o = this;
                try {
                    s.Contracts.throwIfDisposed(this.privIsDisposed), s.Contracts.throwIfDisposed(this.privConversationRecognizer.isDisposed()), s.Contracts.throwIfNullOrWhitespace(e, c.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "userId")), s.Contracts.throwIfNullOrUndefined(this.privRoom, c.ConversationTranslatorConfig.strings.permissionDeniedSend), this.canSend || this.handleError(new Error(c.ConversationTranslatorConfig.strings.permissionDeniedSend), r), this.me.isHost || this.me.id === e || this.handleError(new Error(c.ConversationTranslatorConfig.strings.permissionDeniedParticipant.replace("{command}", "mute")), r), -1 === this.privParticipants.getParticipantIndex(e) && this.handleError(new Error(c.ConversationTranslatorConfig.strings.invalidParticipantRequest), r), null === (n = this.privConversationRecognizer) || void 0 === n || n.sendMuteRequest(e, !1, (function () {
                        o.handleCallback(t, r)
                    }), (function (e) {
                        o.handleError(e, r)
                    }))
                } catch (e) {
                    this.handleError(e, r)
                }
            }, t.prototype.sendTextMessageAsync = function (e, t, r) {
                var n, o = this;
                try {
                    s.Contracts.throwIfDisposed(this.privIsDisposed), s.Contracts.throwIfDisposed(this.privConversationRecognizer.isDisposed()), s.Contracts.throwIfNullOrWhitespace(e, c.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "message")), s.Contracts.throwIfNullOrUndefined(this.privRoom, c.ConversationTranslatorConfig.strings.permissionDeniedSend), this.canSend || this.handleError(new Error(c.ConversationTranslatorConfig.strings.permissionDeniedSend), r), e.length > c.ConversationTranslatorConfig.textMessageMaxLength && this.handleError(new Error(c.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "message length")), r), null === (n = this.privConversationRecognizer) || void 0 === n || n.sendMessageRequest(e, (function () {
                        o.handleCallback(t, r)
                    }), (function (e) {
                        o.handleError(e, r)
                    }))
                } catch (e) {
                    this.handleError(e, r)
                }
            }, t.prototype.changeNicknameAsync = function (e, t, r) {
                var n, o = this;
                try {
                    s.Contracts.throwIfDisposed(this.privIsDisposed), s.Contracts.throwIfDisposed(this.privConversationRecognizer.isDisposed()), s.Contracts.throwIfNullOrWhitespace(e, c.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "nickname")), s.Contracts.throwIfNullOrUndefined(this.privRoom, c.ConversationTranslatorConfig.strings.permissionDeniedSend), this.canSend || this.handleError(new Error(c.ConversationTranslatorConfig.strings.permissionDeniedSend), r), null === (n = this.privConversationRecognizer) || void 0 === n || n.sendChangeNicknameRequest(e, (function () {
                        o.handleCallback(t, r)
                    }), (function (e) {
                        o.handleError(e, r)
                    }))
                } catch (e) {
                    this.handleError(e, r)
                }
            }, t.prototype.isDisposed = function () {
                return this.privIsDisposed
            }, t.prototype.dispose = function (e) {
                var t;
                this.isDisposed || (this.privIsDisposed = !0, null === (t = this.config) || void 0 === t || t.close(), this.privConversationRecognizerConnection && (this.privConversationRecognizerConnection.closeConnection(), this.privConversationRecognizerConnection.close(), this.privConversationRecognizerConnection = void 0), this.privConfig = void 0, this.privLanguage = void 0, this.privProperties = void 0, this.privRoom = void 0, this.privToken = void 0, this.privManager = void 0, this.privConversationRecognizer = void 0, this.privIsConnected = !1, this.privIsReady = !1, this.privParticipants = void 0, this.privRoom = void 0)
            }, t.prototype.close = function (e) {
                var t, r, n;
                try {
                    this.privIsConnected = !1, null === (t = this.privConversationRecognizerConnection) || void 0 === t || t.closeConnection(), null === (r = this.privConversationRecognizerConnection) || void 0 === r || r.close(), this.privConversationRecognizer.close(), this.privConversationRecognizerConnection = void 0, this.privConversationRecognizer = void 0, null === (n = this.privConversationTranslator) || void 0 === n || n.dispose()
                } catch (e) { }
                e && this.dispose()
            }, Object.defineProperty(t.prototype, "canSend", {
                get: function () {
                    var e;
                    return this.privIsConnected && !(null === (e = this.privParticipants.me) || void 0 === e ? void 0 : e.isMuted)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "canSendAsHost", {
                get: function () {
                    var e;
                    return this.privIsConnected && (null === (e = this.privParticipants.me) || void 0 === e ? void 0 : e.isHost)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.handleCallback = function (e, t) {
                if (e) {
                    try {
                        e()
                    } catch (e) {
                        t && t(e)
                    }
                    e = void 0
                }
            }, t.prototype.handleError = function (e, t) {
                if (t)
                    if (e instanceof Error) {
                        var r = e;
                        t(r.name + ": " + r.message)
                    } else t(e)
            }, t.prototype.toParticipants = function (e) {
                var t = this,
                    r = this.privParticipants.participants.map((function (e) {
                        return t.toParticipant(e)
                    }));
                return e ? r : r.filter((function (e) {
                    return !1 === e.isHost
                }))
            }, t.prototype.toParticipant = function (e) {
                return new a.Participant(e.id, e.avatar, e.displayName, e.isHost, e.isMuted, e.isUsingTts, e.preferredLanguage)
            }, t
        }(a.Conversation);
    t.ConversationImpl = p
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(32),
        o = r(30),
        i = r(126),
        s = function () {
            function e() { }
            return e.prototype.createOrJoin = function (e, t, r, s) {
                try {
                    n.Contracts.throwIfNullOrUndefined(e, "args");
                    var a = e.getProperty(o.PropertyId.SpeechServiceConnection_RecoLanguage, i.ConversationTranslatorConfig.defaultLanguageCode),
                        c = e.getProperty(o.PropertyId.ConversationTranslator_Name),
                        p = e.getProperty(o.PropertyId.ConversationTranslator_Host, i.ConversationTranslatorConfig.host),
                        u = e.getProperty(o.PropertyId.ConversationTranslator_CorrelationId),
                        v = e.getProperty(o.PropertyId.SpeechServiceConnection_Key),
                        l = e.getProperty(o.PropertyId.SpeechServiceConnection_Region),
                        f = e.getProperty(o.PropertyId.SpeechServiceAuthorization_Token);
                    n.Contracts.throwIfNullOrWhitespace(a, "languageCode"), n.Contracts.throwIfNullOrWhitespace(c, "nickname"), n.Contracts.throwIfNullOrWhitespace(p, "endpointHost");
                    var h = {};
                    h[i.ConversationTranslatorConfig.params.apiVersion] = i.ConversationTranslatorConfig.apiVersion, h[i.ConversationTranslatorConfig.params.languageCode] = a, h[i.ConversationTranslatorConfig.params.nickname] = c;
                    var d = {};
                    u && (d[i.ConversationTranslatorConfig.params.correlationId] = u), d[i.ConversationTranslatorConfig.params.clientAppId] = i.ConversationTranslatorConfig.clientAppId, void 0 !== t ? h[i.ConversationTranslatorConfig.params.roomId] = t : (n.Contracts.throwIfNullOrUndefined(l, i.ConversationTranslatorConfig.strings.authInvalidSubscriptionRegion), d[i.ConversationTranslatorConfig.params.subscriptionRegion] = l, v ? d[i.ConversationTranslatorConfig.params.subscriptionKey] = v : f ? d[i.ConversationTranslatorConfig.params.authorization] = "Bearer " + f : n.Contracts.throwIfNullOrUndefined(v, i.ConversationTranslatorConfig.strings.authInvalidSubscriptionKey));
                    var g = {};
                    g.headers = d;
                    var y = "https://" + p + i.ConversationTranslatorConfig.restPath;
                    i.request("post", y, h, null, g, (function (e) {
                        var t = i.extractHeaderValue(i.ConversationTranslatorConfig.params.requestId, e.headers);
                        if (e.ok) {
                            var n = JSON.parse(e.data);
                            if (n && (n.requestId = t), r) {
                                try {
                                    r(n)
                                } catch (e) {
                                    s && s(e)
                                }
                                r = void 0
                            }
                        } else if (s) {
                            var o = i.ConversationTranslatorConfig.strings.invalidCreateJoinConversationResponse.replace("{status}", e.status.toString()),
                                a = void 0;
                            try {
                                o += " [" + (a = JSON.parse(e.data)).error.code + ": " + a.error.message + "]"
                            } catch (t) {
                                o += " [" + e.data + "]"
                            }
                            t && (o += " " + t), s(o)
                        }
                    }))
                } catch (e) {
                    if (s)
                        if (e instanceof Error) {
                            var m = e;
                            s(m.name + ": " + m.message)
                        } else s(e)
                }
            }, e.prototype.leave = function (e, t, r, s) {
                try {
                    n.Contracts.throwIfNullOrUndefined(e, i.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "config")), n.Contracts.throwIfNullOrWhitespace(t, i.ConversationTranslatorConfig.strings.invalidArgs.replace("{arg}", "token"));
                    var a = e.getProperty(o.PropertyId.ConversationTranslator_Host, i.ConversationTranslatorConfig.host),
                        c = e.getProperty(o.PropertyId.ConversationTranslator_CorrelationId),
                        p = {};
                    p[i.ConversationTranslatorConfig.params.apiVersion] = i.ConversationTranslatorConfig.apiVersion, p[i.ConversationTranslatorConfig.params.sessionToken] = t;
                    var u = {};
                    c && (u[i.ConversationTranslatorConfig.params.correlationId] = c);
                    var v = {};
                    v.headers = u;
                    var l = "https://" + a + i.ConversationTranslatorConfig.restPath;
                    i.request("delete", l, p, null, v, (function (e) {
                        if (e.ok, r) {
                            try {
                                r()
                            } catch (e) {
                                s && s(e)
                            }
                            r = void 0
                        }
                    }))
                } catch (e) {
                    if (s)
                        if (e instanceof Error) {
                            var f = e;
                            s(f.name + ": " + f.message)
                        } else s(e)
                }
            }, e
        }();
    t.ConversationManager = s
}, function (e, t, r) {
    "use strict";

    function n(e, t) {
        void 0 === t && (t = {});
        var r = function (e) {
            return void 0 === e && (e = {}), Object.keys(e).map((function (t) {
                return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
            })).join("&")
        }(t);
        return r ? e + (-1 === e.indexOf("?") ? "?" : "&") + r : e
    }

    function o(e, t) {
        return void 0 === t && (t = null), {
            data: t || e.statusText,
            headers: e.getAllResponseHeaders(),
            json: function () {
                return JSON.parse(t || '"' + e.statusText + '"')
            },
            ok: !1,
            status: e.status,
            statusText: e.statusText
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ConversationTranslatorConfig = {
        apiVersion: "2.0",
        auth: {
            placeholderRegion: "westus",
            placeholderSubscriptionKey: "abcdefghijklmnopqrstuvwxyz012345"
        },
        clientAppId: "FC539C22-1767-4F1F-84BC-B4D811114F15",
        defaultLanguageCode: "en-US",
        defaultRequestOptions: {
            headers: {
                Accept: "application/json"
            },
            ignoreCache: !1,
            timeout: 5e3
        },
        host: "dev.microsofttranslator.com",
        params: {
            apiVersion: "api-version",
            authorization: "Authorization",
            clientAppId: "X-ClientAppId",
            correlationId: "X-CorrelationId",
            languageCode: "language",
            nickname: "nickname",
            profanity: "profanity",
            requestId: "X-RequestId",
            roomId: "roomid",
            sessionToken: "token",
            subscriptionKey: "Ocp-Apim-Subscription-Key",
            subscriptionRegion: "Ocp-Apim-Subscription-Region",
            token: "X-CapitoToken"
        },
        restPath: "/capito/room",
        speechHost: "{region}.s2s.speech.microsoft.com",
        speechPath: "/speech/translation/cognitiveservices/v1",
        strings: {
            authInvalidSubscriptionKey: "You must specify either an authentication token to use, or a Cognitive Speech subscription key.",
            authInvalidSubscriptionRegion: "You must specify the Cognitive Speech region to use.",
            invalidArgs: "Required input not found: {arg}.",
            invalidCreateJoinConversationResponse: "Creating/Joining conversation failed with HTTP {status}.",
            invalidParticipantRequest: "The requested participant was not found.",
            permissionDeniedConnect: "Required credentials not found.",
            permissionDeniedConversation: "Invalid operation: only the host can {command} the conversation.",
            permissionDeniedParticipant: "Invalid operation: only the host can {command} a participant.",
            permissionDeniedSend: "Invalid operation: the conversation is not in a connected state.",
            permissionDeniedStart: "Invalid operation: there is already an active conversation."
        },
        textMessageMaxLength: 1e3,
        webSocketPath: "/capito/translate"
    }, t.extractHeaderValue = function (e, t) {
        var r = "";
        try {
            var n = t.trim().split(/[\r\n]+/),
                o = {};
            n.forEach((function (e) {
                var t = e.split(": "),
                    r = t.shift().toLowerCase(),
                    n = t.join(": ");
                o[r] = n
            })), r = o[e.toLowerCase()]
        } catch (e) { }
        return r
    }, t.request = function (e, r, i, s, a, c) {
        void 0 === i && (i = {}), void 0 === s && (s = null), void 0 === a && (a = t.ConversationTranslatorConfig.defaultRequestOptions);
        var p = a.ignoreCache || t.ConversationTranslatorConfig.defaultRequestOptions.ignoreCache,
            u = a.headers || t.ConversationTranslatorConfig.defaultRequestOptions.headers,
            v = a.timeout || t.ConversationTranslatorConfig.defaultRequestOptions.timeout,
            l = new XMLHttpRequest;
        l.open(e, n(r, i), !0), u && Object.keys(u).forEach((function (e) {
            return l.setRequestHeader(e, u[e])
        })), p && l.setRequestHeader("Cache-Control", "no-cache"), l.timeout = v, l.onload = function (e) {
            c(function (e) {
                return {
                    data: e.responseText,
                    headers: e.getAllResponseHeaders(),
                    json: function () {
                        return JSON.parse(e.responseText)
                    },
                    ok: e.status >= 200 && e.status < 300,
                    status: e.status,
                    statusText: e.statusText
                }
            }(l))
        }, l.onerror = function (e) {
            c(o(l, "Failed to make request."))
        }, l.ontimeout = function (e) {
            c(o(l, "Request took longer than expected."))
        }, "post" === e && s ? (l.setRequestHeader("Content-Type", "application/json"), l.send(JSON.stringify(s))) : l.send()
    }, t.PromiseToEmptyCallback = function (e, t, r) {
        e ? e.continueWith((function (e) {
            try {
                e.isError ? r && r(e.error) : t && t()
            } catch (t) {
                r && r("'Unhandled error on promise callback: " + t + ". InnerError: " + e.error + "'")
            }
        })) : r && r("Null promise")
    }
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(25),
        s = r(32),
        a = r(30),
        c = r(128),
        p = r(131),
        u = r(134),
        v = r(126),
        l = function (e) {
            function t(t, r) {
                var n = this,
                    o = t;
                return s.Contracts.throwIfNull(o, "speechConfig"), (n = e.call(this, r, o.properties, new c.ConversationConnectionFactory) || this).privIsDisposed = !1, n.privProperties = o.properties.clone(), n
            }
            return o(t, e), Object.defineProperty(t.prototype, "conversation", {
                set: function (e) {
                    this.privRoom = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "speechRecognitionLanguage", {
                get: function () {
                    return this.privSpeechRecognitionLanguage
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "properties", {
                get: function () {
                    return this.privProperties
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.isDisposed = function () {
                return this.privIsDisposed
            }, t.prototype.connect = function (e, t, r) {
                try {
                    s.Contracts.throwIfDisposed(this.privIsDisposed), s.Contracts.throwIfNullOrWhitespace(e, "token"), this.privReco.conversationTranslatorToken = e, this.privReco.connectAsync(t, r)
                } catch (e) {
                    if (r)
                        if (e instanceof Error) {
                            var n = e;
                            r(n.name + ": " + n.message)
                        } else r(e)
                }
            }, t.prototype.disconnect = function (e, t) {
                try {
                    s.Contracts.throwIfDisposed(this.privIsDisposed), this.privRoom = void 0, this.privReco.disconnectAsync(e, t)
                } catch (e) {
                    if (t)
                        if (e instanceof Error) {
                            var r = e;
                            t(r.name + ": " + r.message)
                        } else t(e);
                    this.dispose(!0)
                }
            }, t.prototype.sendMessageRequest = function (e, t, r) {
                try {
                    s.Contracts.throwIfDisposed(this.privIsDisposed), s.Contracts.throwIfNullOrWhitespace(this.privRoom.roomId, "conversationId"), s.Contracts.throwIfNullOrWhitespace(this.privRoom.participantId, "participantId"), s.Contracts.throwIfNullOrWhitespace(e, "message");
                    var n = {
                        participantId: this.privRoom.participantId,
                        roomId: this.privRoom.roomId,
                        text: e,
                        type: u.ConversationTranslatorMessageTypes.instantMessage
                    };
                    this.sendMessage(JSON.stringify(n), t, r)
                } catch (e) {
                    if (r)
                        if (e instanceof Error) {
                            var o = e;
                            r(o.name + ": " + o.message)
                        } else r(e);
                    this.dispose(!0)
                }
            }, t.prototype.sendLockRequest = function (e, t, r) {
                try {
                    s.Contracts.throwIfDisposed(this.privIsDisposed), s.Contracts.throwIfNullOrWhitespace(this.privRoom.roomId, "conversationId"), s.Contracts.throwIfNullOrWhitespace(this.privRoom.participantId, "participantId"), s.Contracts.throwIfNullOrUndefined(e, "isLocked");
                    var n = {
                        command: u.ConversationTranslatorCommandTypes.setLockState,
                        participantId: this.privRoom.participantId,
                        roomid: this.privRoom.roomId,
                        type: u.ConversationTranslatorMessageTypes.participantCommand,
                        value: e
                    };
                    this.sendMessage(JSON.stringify(n), t, r)
                } catch (e) {
                    if (r)
                        if (e instanceof Error) {
                            var o = e;
                            r(o.name + ": " + o.message)
                        } else r(e);
                    this.dispose(!0)
                }
            }, t.prototype.sendMuteAllRequest = function (e, t, r) {
                try {
                    s.Contracts.throwIfDisposed(this.privIsDisposed), s.Contracts.throwIfNullOrWhitespace(this.privRoom.roomId, "conversationId"), s.Contracts.throwIfNullOrWhitespace(this.privRoom.participantId, "participantId"), s.Contracts.throwIfNullOrUndefined(e, "isMuted");
                    var n = {
                        command: u.ConversationTranslatorCommandTypes.setMuteAll,
                        participantId: this.privRoom.participantId,
                        roomid: this.privRoom.roomId,
                        type: u.ConversationTranslatorMessageTypes.participantCommand,
                        value: e
                    };
                    this.sendMessage(JSON.stringify(n), t, r)
                } catch (e) {
                    if (r)
                        if (e instanceof Error) {
                            var o = e;
                            r(o.name + ": " + o.message)
                        } else r(e);
                    this.dispose(!0)
                }
            }, t.prototype.sendMuteRequest = function (e, t, r, n) {
                try {
                    s.Contracts.throwIfDisposed(this.privIsDisposed), s.Contracts.throwIfNullOrWhitespace(this.privRoom.roomId, "conversationId"), s.Contracts.throwIfNullOrWhitespace(e, "participantId"), s.Contracts.throwIfNullOrUndefined(t, "isMuted");
                    var o = {
                        command: u.ConversationTranslatorCommandTypes.setMute,
                        participantId: e,
                        roomid: this.privRoom.roomId,
                        type: u.ConversationTranslatorMessageTypes.participantCommand,
                        value: t
                    };
                    this.sendMessage(JSON.stringify(o), r, n)
                } catch (e) {
                    if (n)
                        if (e instanceof Error) {
                            var i = e;
                            n(i.name + ": " + i.message)
                        } else n(e);
                    this.dispose(!0)
                }
            }, t.prototype.sendEjectRequest = function (e, t, r) {
                try {
                    s.Contracts.throwIfDisposed(this.privIsDisposed), s.Contracts.throwIfNullOrWhitespace(this.privRoom.roomId, "conversationId"), s.Contracts.throwIfNullOrWhitespace(e, "participantId");
                    var n = {
                        command: u.ConversationTranslatorCommandTypes.ejectParticipant,
                        participantId: e,
                        roomid: this.privRoom.roomId,
                        type: u.ConversationTranslatorMessageTypes.participantCommand
                    };
                    if (this.sendMessage(JSON.stringify(n), t, r), t) try {
                        t()
                    } catch (e) {
                        r && r(e)
                    }
                } catch (e) {
                    if (r)
                        if (e instanceof Error) {
                            var o = e;
                            r(o.name + ": " + o.message)
                        } else r(e);
                    this.dispose(!0)
                }
            }, t.prototype.sendChangeNicknameRequest = function (e, t, r) {
                try {
                    s.Contracts.throwIfDisposed(this.privIsDisposed), s.Contracts.throwIfNullOrWhitespace(this.privRoom.roomId, "conversationId"), s.Contracts.throwIfNullOrWhitespace(e, "nickname");
                    var n = {
                        command: u.ConversationTranslatorCommandTypes.changeNickname,
                        nickname: e,
                        participantId: this.privRoom.participantId,
                        roomid: this.privRoom.roomId,
                        type: u.ConversationTranslatorMessageTypes.participantCommand,
                        value: e
                    };
                    this.sendMessage(JSON.stringify(n), t, r)
                } catch (e) {
                    if (r)
                        if (e instanceof Error) {
                            var o = e;
                            r(o.name + ": " + o.message)
                        } else r(e);
                    this.dispose(!0)
                }
            }, t.prototype.close = function () {
                s.Contracts.throwIfDisposed(this.privIsDisposed), this.dispose(!0)
            }, t.prototype.dispose = function (t) {
                this.privIsDisposed || t && (this.privIsDisposed = !0, e.prototype.dispose.call(this, t))
            }, t.prototype.createRecognizerConfig = function (e) {
                return new i.RecognizerConfig(e, this.privProperties)
            }, t.prototype.createServiceRecognizer = function (e, t, r, n) {
                var o = r;
                return new p.ConversationServiceAdapter(e, t, o, n, this)
            }, t.prototype.sendMessage = function (e, t, r) {
                var n = this.privReco;
                v.PromiseToEmptyCallback(n.sendMessageAsync(e), t, r)
            }, t
        }(a.Recognizer);
    t.ConversationTranslatorRecognizer = l
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(2),
        s = r(4),
        a = r(32),
        c = r(30),
        p = r(60),
        u = r(126),
        v = r(129),
        l = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return o(t, e), t.prototype.create = function (e, t, r) {
                var n = e.parameters.getProperty(c.PropertyId.ConversationTranslator_Host, u.ConversationTranslatorConfig.host),
                    o = e.parameters.getProperty(c.PropertyId.ConversationTranslator_CorrelationId, s.createGuid()),
                    p = "wss://" + n + u.ConversationTranslatorConfig.webSocketPath,
                    l = e.parameters.getProperty(c.PropertyId.ConversationTranslator_Token, void 0);
                a.Contracts.throwIfNullOrUndefined(l, "token");
                var f = {};
                return f[u.ConversationTranslatorConfig.params.apiVersion] = u.ConversationTranslatorConfig.apiVersion, f[u.ConversationTranslatorConfig.params.token] = l, f[u.ConversationTranslatorConfig.params.correlationId] = o, new i.WebsocketConnection(p, f, {}, new v.ConversationWebsocketMessageFormatter, i.ProxyInfo.fromRecognizerConfig(e), r)
            }, t
        }(p.ConnectionFactoryBase);
    t.ConversationConnectionFactory = l
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(4),
        o = r(130),
        i = function () {
            this.toConnectionMessage = function (e) {
                var t = new n.Deferred;
                try {
                    if (e.messageType === n.MessageType.Text) {
                        var r = new o.ConversationConnectionMessage(e.messageType, e.textContent, {}, e.id);
                        t.resolve(r)
                    } else e.messageType === n.MessageType.Binary && t.resolve(new o.ConversationConnectionMessage(e.messageType, e.binaryContent, void 0, e.id))
                } catch (e) {
                    t.reject("Error formatting the message. Error: " + e)
                }
                return t.promise()
            }, this.fromConnectionMessage = function (e) {
                var t = new n.Deferred;
                try {
                    if (e.messageType === n.MessageType.Text) {
                        var r = "" + (e.textBody ? e.textBody : "");
                        t.resolve(new n.RawWebsocketMessage(n.MessageType.Text, r, e.id))
                    }
                } catch (e) {
                    t.reject("Error formatting the message. " + e)
                }
                return t.promise()
            }
        };
    t.ConversationWebsocketMessageFormatter = i
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function (e) {
        function t(t, r, n, o) {
            var i = e.call(this, t, r, n, o) || this,
                s = JSON.parse(i.textBody);
            return void 0 !== s.type && (i.privConversationMessageType = s.type), i
        }
        return o(t, e), Object.defineProperty(t.prototype, "conversationMessageType", {
            get: function () {
                return this.privConversationMessageType
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(r(4).ConnectionMessage);
    t.ConversationConnectionMessage = i
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(4),
        s = r(16),
        a = r(30),
        c = r(25),
        p = r(130),
        u = r(132),
        v = r(133),
        l = r(134),
        f = r(135),
        h = function (e) {
            function t(t, r, n, o, c) {
                var h = e.call(this, t, r, n, o, c) || this;
                return h.privUtteranceId = "", h.sendMessageAsync = function (e) {
                    var t = new s.Sink;
                    return h.fetchConversationConnection().continueWith((function (r) {
                        try {
                            r.isError ? t.reject(r.error) : r.result.send(new p.ConversationConnectionMessage(i.MessageType.Text, e)).continueWith((function (e) {
                                try {
                                    e.isError ? t.reject(e.error) : t.resolve(e.result)
                                } catch (e) {
                                    t.reject("Unhandled inner error: " + e)
                                }
                            }))
                        } catch (e) {
                            t.reject("Unhandled error: " + e)
                        }
                    })), new i.Promise(t)
                }, h.noOp = function () { }, h.receiveConversationMessageOverride = function (e, t) {
                    var r = new i.Deferred;
                    return h.fetchConversationConnection().on((function (e) {
                        return e.read().onSuccessContinueWithPromise((function (e) {
                            var t = h.isDisposed(),
                                n = !h.isDisposed() && h.terminateMessageLoop,
                                o = h.privConversationRequestSession.sessionId;
                            if (t || n) return r.resolve(void 0), i.PromiseHelper.fromResult(void 0);
                            if (!e) return h.receiveConversationMessageOverride();
                            try {
                                switch (e.conversationMessageType.toLowerCase()) {
                                    case "info":
                                    case "participant_command":
                                    case "command":
                                        var s = f.CommandResponsePayload.fromJSON(e.textBody);
                                        switch (s.command.toLowerCase()) {
                                            case "participantlist":
                                                var c = f.ParticipantsListPayloadResponse.fromJSON(e.textBody),
                                                    p = c.participants.map((function (e) {
                                                        return {
                                                            avatar: e.avatar,
                                                            displayName: e.nickname,
                                                            id: e.participantId,
                                                            isHost: e.ishost,
                                                            isMuted: e.ismuted,
                                                            isUsingTts: e.usetts,
                                                            preferredLanguage: e.locale
                                                        }
                                                    }));
                                                h.privConversationServiceConnector.participantsListReceived && h.privConversationServiceConnector.participantsListReceived(h.privConversationServiceConnector, new v.ParticipantsListEventArgs(c.roomid, c.token, c.translateTo, c.profanityFilter, c.roomProfanityFilter, c.roomLocked, c.muteAll, p, o));
                                                break;
                                            case "settranslatetolanguages":
                                                h.privConversationServiceConnector.participantUpdateCommandReceived && h.privConversationServiceConnector.participantUpdateCommandReceived(h.privConversationServiceConnector, new v.ParticipantAttributeEventArgs(s.participantId, l.ConversationTranslatorCommandTypes.setTranslateToLanguages, s.value, o));
                                                break;
                                            case "setprofanityfiltering":
                                                h.privConversationServiceConnector.participantUpdateCommandReceived && h.privConversationServiceConnector.participantUpdateCommandReceived(h.privConversationServiceConnector, new v.ParticipantAttributeEventArgs(s.participantId, l.ConversationTranslatorCommandTypes.setProfanityFiltering, s.value, o));
                                                break;
                                            case "setmute":
                                                h.privConversationServiceConnector.participantUpdateCommandReceived && h.privConversationServiceConnector.participantUpdateCommandReceived(h.privConversationServiceConnector, new v.ParticipantAttributeEventArgs(s.participantId, l.ConversationTranslatorCommandTypes.setMute, s.value, o));
                                                break;
                                            case "setmuteall":
                                                h.privConversationServiceConnector.muteAllCommandReceived && h.privConversationServiceConnector.muteAllCommandReceived(h.privConversationServiceConnector, new v.MuteAllEventArgs(s.value, o));
                                                break;
                                            case "roomexpirationwarning":
                                                h.privConversationServiceConnector.conversationExpiration && h.privConversationServiceConnector.conversationExpiration(h.privConversationServiceConnector, new a.ConversationExpirationEventArgs(s.value, h.privConversationRequestSession.sessionId));
                                                break;
                                            case "setusetts":
                                                h.privConversationServiceConnector.participantUpdateCommandReceived && h.privConversationServiceConnector.participantUpdateCommandReceived(h.privConversationServiceConnector, new v.ParticipantAttributeEventArgs(s.participantId, l.ConversationTranslatorCommandTypes.setUseTTS, s.value, o));
                                                break;
                                            case "setlockstate":
                                                h.privConversationServiceConnector.lockRoomCommandReceived && h.privConversationServiceConnector.lockRoomCommandReceived(h.privConversationServiceConnector, new v.LockRoomEventArgs(s.value, o));
                                                break;
                                            case "changenickname":
                                                h.privConversationServiceConnector.participantUpdateCommandReceived && h.privConversationServiceConnector.participantUpdateCommandReceived(h.privConversationServiceConnector, new v.ParticipantAttributeEventArgs(s.participantId, l.ConversationTranslatorCommandTypes.changeNickname, s.nickname, o));
                                                break;
                                            case "joinsession":
                                                var u = f.ParticipantPayloadResponse.fromJSON(e.textBody),
                                                    d = {
                                                        avatar: u.avatar,
                                                        displayName: u.nickname,
                                                        id: u.participantId,
                                                        isHost: u.ishost,
                                                        isMuted: u.ismuted,
                                                        isUsingTts: u.usetts,
                                                        preferredLanguage: u.locale
                                                    };
                                                h.privConversationServiceConnector.participantJoinCommandReceived && h.privConversationServiceConnector.participantJoinCommandReceived(h.privConversationServiceConnector, new v.ParticipantEventArgs(d, o));
                                                break;
                                            case "leavesession":
                                                var g = {
                                                    id: s.participantId
                                                };
                                                h.privConversationServiceConnector.participantLeaveCommandReceived && h.privConversationServiceConnector.participantLeaveCommandReceived(h.privConversationServiceConnector, new v.ParticipantEventArgs(g, o));
                                                break;
                                            case "disconnectsession":
                                                s.participantId
                                        }
                                        break;
                                    case "partial":
                                    case "final":
                                        var y = f.SpeechResponsePayload.fromJSON(e.textBody),
                                            m = new a.ConversationTranslationResult(y.participantId, h.getTranslations(y.translations), y.language, void 0, void 0, y.recognition, void 0, void 0, e.textBody, void 0);
                                        y.isFinal ? void 0 !== m.text && m.text.length > 0 && y.id !== h.privUtteranceId && h.privConversationServiceConnector.translationReceived && h.privConversationServiceConnector.translationReceived(h.privConversationServiceConnector, new v.ConversationReceivedTranslationEventArgs(l.ConversationTranslatorMessageTypes.final, m, o)) : h.privConversationServiceConnector.translationReceived && h.privConversationServiceConnector.translationReceived(h.privConversationServiceConnector, new v.ConversationReceivedTranslationEventArgs(l.ConversationTranslatorMessageTypes.partial, m, o)), h.privUtteranceId = y.id;
                                        break;
                                    case "translated_message":
                                        var C = f.TextResponsePayload.fromJSON(e.textBody),
                                            S = new a.ConversationTranslationResult(C.participantId, h.getTranslations(C.translations), C.language, void 0, void 0, C.originalText, void 0, void 0, void 0, e.textBody, void 0);
                                        h.privConversationServiceConnector.translationReceived && h.privConversationServiceConnector.translationReceived(h.privConversationServiceConnector, new v.ConversationReceivedTranslationEventArgs(l.ConversationTranslatorMessageTypes.instantMessage, S, o))
                                }
                            } catch (e) { }
                            return h.receiveConversationMessageOverride()
                        }))
                    }), (function (e) {
                        h.terminateMessageLoop = !0
                    })), r.promise()
                }, h.fetchConversationConnection = function () {
                    return h.configConnection()
                }, h.privConversationServiceConnector = c, h.privConversationAuthentication = t, h.receiveMessageOverride = h.receiveConversationMessageOverride, h.recognizeOverride = h.noOp, h.connectImplOverride = h.conversationConnectImpl, h.configConnectionOverride = h.configConnection, h.fetchConnectionOverride = h.fetchConversationConnection, h.disconnectOverride = h.privDisconnect, h.privConversationRequestSession = new u.ConversationRequestSession(i.createNoDashGuid()), h.privConversationConnectionFactory = r, h.privConversationIsDisposed = !1, h
            }
            return o(t, e), t.prototype.isDisposed = function () {
                return this.privConversationIsDisposed
            }, t.prototype.dispose = function (e) {
                this.privConversationIsDisposed = !0, this.privConnectionConfigPromise && this.privConnectionConfigPromise.onSuccessContinueWith((function (t) {
                    t.dispose(e)
                }))
            }, t.prototype.sendMessage = function (e) {
                this.fetchConversationConnection().onSuccessContinueWith((function (t) {
                    t.send(new p.ConversationConnectionMessage(i.MessageType.Text, e))
                }))
            }, t.prototype.privDisconnect = function () {
                this.terminateMessageLoop || (this.cancelRecognition(this.privConversationRequestSession.sessionId, this.privConversationRequestSession.requestId, a.CancellationReason.Error, a.CancellationErrorCode.NoError, "Disconnecting"), this.terminateMessageLoop = !0, this.privConversationConnectionPromise.result().isCompleted ? this.privConversationConnectionPromise.result().isError || (this.privConversationConnectionPromise.result().result.dispose(), this.privConversationConnectionPromise = null) : this.privConversationConnectionPromise.onSuccessContinueWith((function (e) {
                    e.dispose()
                })))
            }, t.prototype.processTypeSpecificMessages = function (e, t, r) {
                return !0
            }, t.prototype.cancelRecognition = function (e, t, r, n, o) {
                this.terminateMessageLoop = !0;
                var i = new a.ConversationTranslationCanceledEventArgs(r, o, n, void 0, e);
                try {
                    this.privConversationServiceConnector.canceled && this.privConversationServiceConnector.canceled(this.privConversationServiceConnector, i)
                } catch (e) { }
            }, t.prototype.conversationConnectImpl = function (e) {
                var t = this;
                if (void 0 === e && (e = !1), this.privConversationConnectionPromise) return this.privConversationConnectionPromise.result().isCompleted && (this.privConversationConnectionPromise.result().isError || this.privConversationConnectionPromise.result().result.state() === i.ConnectionState.Disconnected) ? (this.privConnectionId = null, this.privConversationConnectionPromise = null, this.terminateMessageLoop = !0, this.conversationConnectImpl()) : this.privConversationConnectionPromise;
                this.privConversationAuthFetchEventId = i.createNoDashGuid(), void 0 === this.privConnectionId && (this.privConnectionId = i.createNoDashGuid()), this.privConversationRequestSession.onPreConnectionStart(this.privConversationAuthFetchEventId, this.privConnectionId);
                var r = e ? this.privConversationAuthentication.fetchOnExpiry(this.privConversationAuthFetchEventId) : this.privConversationAuthentication.fetch(this.privConversationAuthFetchEventId);
                return this.privConversationConnectionPromise = r.continueWithPromise((function (r) {
                    if (r.isError) throw t.privConversationRequestSession.onAuthCompleted(!0, r.error), new Error(r.error);
                    t.privConversationRequestSession.onAuthCompleted(!1);
                    var n = t.privConversationConnectionFactory.create(t.privRecognizerConfig, r.result, t.privConnectionId);
                    return n.events.attach((function (e) {
                        t.connectionEvents.onEvent(e)
                    })), n.open().onSuccessContinueWithPromise((function (r) {
                        if (200 === r.statusCode) {
                            t.privConversationRequestSession.onPreConnectionStart(t.privConversationAuthFetchEventId, t.privConnectionId), t.privConversationRequestSession.onConnectionEstablishCompleted(r.statusCode);
                            var o = new a.SessionEventArgs(t.privConversationRequestSession.sessionId);
                            return t.privConversationServiceConnector.connectionOpened && t.privConversationServiceConnector.connectionOpened(t.privConversationServiceConnector, o), i.PromiseHelper.fromResult(n)
                        }
                        return 403 !== r.statusCode || e ? (t.privConversationRequestSession.onConnectionEstablishCompleted(r.statusCode, r.reason), i.PromiseHelper.fromError("Unable to contact server. StatusCode: " + r.statusCode + ", " + t.privRecognizerConfig.parameters.getProperty(a.PropertyId.SpeechServiceConnection_Endpoint) + " Reason: " + r.reason)) : t.conversationConnectImpl(!0)
                    }))
                })), this.privConnectionLoop = this.startMessageLoop(), this.privConversationConnectionPromise
            }, t.prototype.startMessageLoop = function () {
                var e = this;
                return this.terminateMessageLoop = !1, this.receiveConversationMessageOverride().on((function (e) {
                    return !0
                }), (function (t) {
                    e.cancelRecognition(e.privRequestSession ? e.privRequestSession.sessionId : "", e.privRequestSession ? e.privRequestSession.requestId : "", a.CancellationReason.Error, a.CancellationErrorCode.RuntimeError, t)
                }))
            }, t.prototype.configConnection = function () {
                return this.privConnectionConfigPromise ? this.privConnectionConfigPromise.result().isCompleted && (this.privConnectionConfigPromise.result().isError || this.privConnectionConfigPromise.result().result.state() === i.ConnectionState.Disconnected) ? (this.privConnectionConfigPromise = null, this.configConnection()) : this.privConnectionConfigPromise : this.terminateMessageLoop ? i.PromiseHelper.fromResult(void 0) : (this.privConnectionConfigPromise = this.conversationConnectImpl().onSuccessContinueWith((function (e) {
                    return e
                })), this.privConnectionConfigPromise)
            }, t.prototype.getTranslations = function (e) {
                var t;
                if (void 0 !== e) {
                    t = new a.Translations;
                    for (var r = 0, n = e; r < n.length; r++) {
                        var o = n[r];
                        t.set(o.lang, o.translation)
                    }
                }
                return t
            }, t
        }(c.ServiceRecognizerBase);
    t.ConversationServiceAdapter = h
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(4),
        o = function () {
            function e(e) {
                var t = this;
                this.privIsDisposed = !1, this.privDetachables = new Array, this.onPreConnectionStart = function (e, r) {
                    t.privSessionId = r
                }, this.onAuthCompleted = function (e, r) {
                    e && t.onComplete()
                }, this.onConnectionEstablishCompleted = function (e, r) {
                    200 !== e && 403 === e && t.onComplete()
                }, this.onServiceTurnEndResponse = function (e) {
                    e ? t.privRequestId = n.createNoDashGuid() : t.onComplete()
                }, this.dispose = function (e) {
                    if (!t.privIsDisposed) {
                        t.privIsDisposed = !0;
                        for (var r = 0, n = t.privDetachables; r < n.length; r++) {
                            n[r].detach()
                        }
                    }
                }, this.onComplete = function () { }, this.privSessionId = e, this.privRequestId = n.createNoDashGuid(), this.privRequestCompletionDeferral = new n.Deferred
            }
            return Object.defineProperty(e.prototype, "sessionId", {
                get: function () {
                    return this.privSessionId
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "requestId", {
                get: function () {
                    return this.privRequestId
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "completionPromise", {
                get: function () {
                    return this.privRequestCompletionDeferral.promise()
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
    t.ConversationRequestSession = o
}, function (e, t, r) {
    "use strict";
    var n, o = this && this.__extends || (n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, t)
    }, function (e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(30),
        s = function (e) {
            function t(t, r) {
                var n = e.call(this, r) || this;
                return n.privIsMuted = t, n
            }
            return o(t, e), Object.defineProperty(t.prototype, "isMuted", {
                get: function () {
                    return this.privIsMuted
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(i.SessionEventArgs);
    t.MuteAllEventArgs = s;
    var a = function (e) {
        function t(t, r) {
            var n = e.call(this, r) || this;
            return n.privIsLocked = t, n
        }
        return o(t, e), Object.defineProperty(t.prototype, "isMuted", {
            get: function () {
                return this.privIsLocked
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(i.SessionEventArgs);
    t.LockRoomEventArgs = a;
    var c = function (e) {
        function t(t, r) {
            var n = e.call(this, r) || this;
            return n.privParticipant = t, n
        }
        return o(t, e), Object.defineProperty(t.prototype, "participant", {
            get: function () {
                return this.privParticipant
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(i.SessionEventArgs);
    t.ParticipantEventArgs = c;
    var p = function (e) {
        function t(t, r, n, o) {
            var i = e.call(this, o) || this;
            return i.privKey = r, i.privValue = n, i.privParticipantId = t, i
        }
        return o(t, e), Object.defineProperty(t.prototype, "value", {
            get: function () {
                return this.privValue
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "key", {
            get: function () {
                return this.privKey
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "id", {
            get: function () {
                return this.privParticipantId
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(i.SessionEventArgs);
    t.ParticipantAttributeEventArgs = p;
    var u = function (e) {
        function t(t, r, n, o, i, s, a, c, p) {
            var u = e.call(this, p) || this;
            return u.privRoomId = t, u.privSessionToken = r, u.privTranslateTo = n, u.privProfanityFilter = o, u.privRoomProfanityFilter = i, u.privIsRoomLocked = s, u.privIsRoomLocked = a, u.privParticipants = c, u
        }
        return o(t, e), Object.defineProperty(t.prototype, "sessionToken", {
            get: function () {
                return this.privSessionToken
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "conversationId", {
            get: function () {
                return this.privRoomId
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "translateTo", {
            get: function () {
                return this.privTranslateTo
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "profanityFilter", {
            get: function () {
                return this.privProfanityFilter
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "roomProfanityFilter", {
            get: function () {
                return this.privRoomProfanityFilter
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "isRoomLocked", {
            get: function () {
                return this.privIsRoomLocked
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "isMuteAll", {
            get: function () {
                return this.privIsMuteAll
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "participants", {
            get: function () {
                return this.privParticipants
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(i.SessionEventArgs);
    t.ParticipantsListEventArgs = u;
    var v = function () {
        function e(e, t, r) {
            this.privPayload = t, this.privCommand = e, this.privSessionId = r
        }
        return Object.defineProperty(e.prototype, "payload", {
            get: function () {
                return this.privPayload
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "command", {
            get: function () {
                return this.privCommand
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "sessionId", {
            get: function () {
                return this.privSessionId
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.ConversationReceivedTranslationEventArgs = v
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function () {
        function e(e, t) {
            void 0 === e && (e = []), this.participants = e, this.meId = t
        }
        return e.prototype.addOrUpdateParticipant = function (e) {
            if (void 0 !== e) {
                var t = this.getParticipantIndex(e.id);
                return t > -1 ? this.participants.splice(t, 1, e) : this.participants.push(e), this.getParticipant(e.id)
            }
        }, e.prototype.getParticipantIndex = function (e) {
            return this.participants.findIndex((function (t) {
                return t.id === e
            }))
        }, e.prototype.getParticipant = function (e) {
            return this.participants.find((function (t) {
                return t.id === e
            }))
        }, e.prototype.deleteParticipant = function (e) {
            this.participants = this.participants.filter((function (t) {
                return t.id !== e
            }))
        }, Object.defineProperty(e.prototype, "host", {
            get: function () {
                return this.participants.find((function (e) {
                    return !0 === e.isHost
                }))
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "me", {
            get: function () {
                return this.getParticipant(this.meId)
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.InternalParticipants = n, t.ConversationTranslatorMessageTypes = {
        command: "command",
        final: "final",
        info: "info",
        instantMessage: "instant_message",
        partial: "partial",
        participantCommand: "participant_command",
        translatedMessage: "translated_message"
    }, t.ConversationTranslatorCommandTypes = {
        changeNickname: "ChangeNickname",
        disconnectSession: "DisconnectSession",
        ejectParticipant: "EjectParticipant",
        instant_message: "instant_message",
        joinSession: "JoinSession",
        leaveSession: "LeaveSession",
        participantList: "ParticipantList",
        roomExpirationWarning: "RoomExpirationWarning",
        setLockState: "SetLockState",
        setMute: "SetMute",
        setMuteAll: "SetMuteAll",
        setProfanityFiltering: "SetProfanityFiltering",
        setTranslateToLanguages: "SetTranslateToLanguages",
        setUseTTS: "SetUseTTS"
    }
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(136);
    t.CommandResponsePayload = n.CommandResponsePayload;
    var o = r(137);
    t.ParticipantsListPayloadResponse = o.ParticipantsListPayloadResponse, t.ParticipantPayloadResponse = o.ParticipantPayloadResponse;
    var i = r(138);
    t.SpeechResponsePayload = i.SpeechResponsePayload, t.TextResponsePayload = i.TextResponsePayload
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function () {
        function e(e) {
            this.privCommandResponse = JSON.parse(e)
        }
        return e.fromJSON = function (t) {
            return new e(t)
        }, Object.defineProperty(e.prototype, "type", {
            get: function () {
                return this.privCommandResponse.type
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "command", {
            get: function () {
                return this.privCommandResponse.command
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "id", {
            get: function () {
                return this.privCommandResponse.id
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "nickname", {
            get: function () {
                return this.privCommandResponse.nickname
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "participantId", {
            get: function () {
                return this.privCommandResponse.participantId
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "roomid", {
            get: function () {
                return this.privCommandResponse.roomid
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "value", {
            get: function () {
                return this.privCommandResponse.value
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.CommandResponsePayload = n
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function () {
        function e(e) {
            this.privParticipantsPayloadResponse = JSON.parse(e)
        }
        return e.fromJSON = function (t) {
            return new e(t)
        }, Object.defineProperty(e.prototype, "roomid", {
            get: function () {
                return this.privParticipantsPayloadResponse.roomid
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "id", {
            get: function () {
                return this.privParticipantsPayloadResponse.id
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "command", {
            get: function () {
                return this.privParticipantsPayloadResponse.command
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "participants", {
            get: function () {
                return this.privParticipantsPayloadResponse.participants
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "token", {
            get: function () {
                return this.privParticipantsPayloadResponse.token
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "translateTo", {
            get: function () {
                return this.privParticipantsPayloadResponse.translateTo
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "profanityFilter", {
            get: function () {
                return this.privParticipantsPayloadResponse.profanityFilter
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "roomProfanityFilter", {
            get: function () {
                return this.privParticipantsPayloadResponse.roomProfanityFilter
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "roomLocked", {
            get: function () {
                return this.privParticipantsPayloadResponse.roomLocked
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "muteAll", {
            get: function () {
                return this.privParticipantsPayloadResponse.muteAll
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "type", {
            get: function () {
                return this.privParticipantsPayloadResponse.type
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.ParticipantsListPayloadResponse = n;
    var o = function () {
        function e(e) {
            this.privParticipantPayloadResponse = JSON.parse(e)
        }
        return e.fromJSON = function (t) {
            return new e(t)
        }, Object.defineProperty(e.prototype, "nickname", {
            get: function () {
                return this.privParticipantPayloadResponse.nickname
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "locale", {
            get: function () {
                return this.privParticipantPayloadResponse.locale
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "usetts", {
            get: function () {
                return this.privParticipantPayloadResponse.usetts
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "ismuted", {
            get: function () {
                return this.privParticipantPayloadResponse.ismuted
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "ishost", {
            get: function () {
                return this.privParticipantPayloadResponse.ishost
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "participantId", {
            get: function () {
                return this.privParticipantPayloadResponse.participantId
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "avatar", {
            get: function () {
                return this.privParticipantPayloadResponse.avatar
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.ParticipantPayloadResponse = o
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function () {
        function e(e) {
            this.privSpeechResponse = JSON.parse(e)
        }
        return e.fromJSON = function (t) {
            return new e(t)
        }, Object.defineProperty(e.prototype, "recognition", {
            get: function () {
                return this.privSpeechResponse.recognition
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "translations", {
            get: function () {
                return this.privSpeechResponse.translations
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "id", {
            get: function () {
                return this.privSpeechResponse.id
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "language", {
            get: function () {
                return this.privSpeechResponse.language
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "nickname", {
            get: function () {
                return this.privSpeechResponse.nickname
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "participantId", {
            get: function () {
                return this.privSpeechResponse.participantId
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "roomid", {
            get: function () {
                return this.privSpeechResponse.roomid
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "timestamp", {
            get: function () {
                return this.privSpeechResponse.timestamp
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "type", {
            get: function () {
                return this.privSpeechResponse.type
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "isFinal", {
            get: function () {
                return "final" === this.privSpeechResponse.type
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.SpeechResponsePayload = n;
    var o = function () {
        function e(e) {
            this.privTextResponse = JSON.parse(e)
        }
        return e.fromJSON = function (t) {
            return new e(t)
        }, Object.defineProperty(e.prototype, "originalText", {
            get: function () {
                return this.privTextResponse.originalText
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "translations", {
            get: function () {
                return this.privTextResponse.translations
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "id", {
            get: function () {
                return this.privTextResponse.id
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "language", {
            get: function () {
                return this.privTextResponse.language
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "nickname", {
            get: function () {
                return this.privTextResponse.nickname
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "participantId", {
            get: function () {
                return this.privTextResponse.participantId
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "roomid", {
            get: function () {
                return this.privTextResponse.roomid
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "timestamp", {
            get: function () {
                return this.privTextResponse.timestamp
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "type", {
            get: function () {
                return this.privTextResponse.type
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.TextResponsePayload = o
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(24),
        o = r(25),
        i = r(4),
        s = function () {
            function e(e, t) {
                var r = this;
                this.privStreams = {}, this.turnOn = function () {
                    if ("undefined" == typeof FileReader) {
                        var e = "Browser does not support FileReader.";
                        return r.onEvent(new i.AudioSourceErrorEvent(e, "")), i.PromiseHelper.fromError(e)
                    }
                    if (r.privFile.name.lastIndexOf(".wav") !== r.privFile.name.length - 4) {
                        e = r.privFile.name + " is not supported. Only WAVE files are allowed at the moment.";
                        return r.onEvent(new i.AudioSourceErrorEvent(e, "")), i.PromiseHelper.fromError(e)
                    }
                    return r.onEvent(new i.AudioSourceInitializingEvent(r.privId)), r.onEvent(new i.AudioSourceReadyEvent(r.privId)), i.PromiseHelper.fromResult(!0)
                }, this.id = function () {
                    return r.privId
                }, this.attach = function (e) {
                    return r.onEvent(new i.AudioStreamNodeAttachingEvent(r.privId, e)), r.upload(e).onSuccessContinueWith((function (t) {
                        return r.onEvent(new i.AudioStreamNodeAttachedEvent(r.privId, e)), {
                            detach: function () {
                                t.close(), delete r.privStreams[e], r.onEvent(new i.AudioStreamNodeDetachedEvent(r.privId, e)), r.turnOff()
                            },
                            id: function () {
                                return e
                            },
                            read: function () {
                                return t.read()
                            }
                        }
                    }))
                }, this.detach = function (e) {
                    e && r.privStreams[e] && (r.privStreams[e].close(), delete r.privStreams[e], r.onEvent(new i.AudioStreamNodeDetachedEvent(r.privId, e)))
                }, this.turnOff = function () {
                    for (var e in r.privStreams)
                        if (e) {
                            var t = r.privStreams[e];
                            t && !t.isClosed && t.close()
                        } return r.onEvent(new i.AudioSourceOffEvent(r.privId)), i.PromiseHelper.fromResult(!0)
                }, this.readHeader = function () {
                    var e = r.privFile.slice(0, 44),
                        t = new FileReader,
                        o = new i.Deferred;
                    return t.onload = function (e) {
                        var t = e.target.result,
                            r = new DataView(t);
                        "RIFF" !== String.fromCharCode(r.getUint8(0), r.getUint8(1), r.getUint8(2), r.getUint8(3)) && o.reject("Invalid WAV header in file, RIFF was not found"), "WAVEfmt" !== String.fromCharCode(r.getUint8(8), r.getUint8(9), r.getUint8(10), r.getUint8(11), r.getUint8(12), r.getUint8(13), r.getUint8(14)) && o.reject("Invalid WAV header in file, WAVEfmt was not found");
                        var i = r.getUint16(22, !0),
                            s = r.getUint32(24, !0),
                            a = r.getUint16(34, !0);
                        o.resolve(n.AudioStreamFormat.getWaveFormatPCM(s, a, i))
                    }, t.readAsArrayBuffer(e), o.promise()
                }, this.upload = function (e) {
                    return r.turnOn().onSuccessContinueWithPromise((function (t) {
                        return r.privAudioFormatPromise.onSuccessContinueWith((function (t) {
                            new i.ChunkedArrayBufferStream(3200);
                            var n = new FileReader,
                                o = new i.ChunkedArrayBufferStream(t.avgBytesPerSec / 10, e);
                            r.privStreams[e] = o;
                            n.onload = function (e) {
                                o.isClosed || (o.writeStreamChunk({
                                    buffer: n.result,
                                    isEnd: !1,
                                    timeReceived: Date.now()
                                }), o.close())
                            }, n.onerror = function (t) {
                                var n = "Error occurred while processing '" + r.privFile.name + "'. " + t;
                                throw r.onEvent(new i.AudioStreamNodeErrorEvent(r.privId, e, n)), new Error(n)
                            };
                            var s = r.privFile.slice(44);
                            return n.readAsArrayBuffer(s), o.getReader()
                        }))
                    }))
                }, this.onEvent = function (e) {
                    r.privEvents.onEvent(e), i.Events.instance.onEvent(e)
                }, this.privId = t || i.createNoDashGuid(), this.privEvents = new i.EventSource, this.privFile = e, this.privAudioFormatPromise = this.readHeader()
            }
            return Object.defineProperty(e.prototype, "format", {
                get: function () {
                    return this.privAudioFormatPromise
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "events", {
                get: function () {
                    return this.privEvents
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "deviceInfo", {
                get: function () {
                    return this.privAudioFormatPromise.onSuccessContinueWithPromise((function (e) {
                        return i.PromiseHelper.fromResult({
                            bitspersample: e.bitsPerSample,
                            channelcount: e.channels,
                            connectivity: o.connectivity.Unknown,
                            manufacturer: "Speech SDK",
                            model: "File",
                            samplerate: e.samplesPerSec,
                            type: o.type.File
                        })
                    }))
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
    t.FileAudioSource = s
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(4),
        o = function () {
            function e() {
                var e = this;
                this.record = function (t, r, o) {
                    var i = function () {
                        var e = 0;
                        try {
                            return t.createScriptProcessor(e, 1, 1)
                        } catch (n) {
                            e = 2048;
                            for (var r = t.sampleRate; e < 16384 && r >= 32e3;) e <<= 1, r >>= 1;
                            return t.createScriptProcessor(e, 1, 1)
                        }
                    }(),
                        s = new n.RiffPcmEncoder(t.sampleRate, 16e3);
                    i.onaudioprocess = function (e) {
                        var t = e.inputBuffer.getChannelData(0);
                        if (o && !o.isClosed) {
                            var r = s.encode(t);
                            r && (o.writeStreamChunk({
                                buffer: r,
                                isEnd: !1,
                                timeReceived: Date.now()
                            }), !1)
                        }
                    };
                    var a = t.createMediaStreamSource(r);
                    e.privSpeechProcessorScript && t.audioWorklet ? t.audioWorklet.addModule(e.privSpeechProcessorScript).then((function () {
                        var n = new AudioWorkletNode(t, "speech-processor");
                        n.port.onmessage = function (e) {
                            var t = e.data;
                            if (o && !o.isClosed) {
                                var r = s.encode(t);
                                r && (o.writeStreamChunk({
                                    buffer: r,
                                    isEnd: !1,
                                    timeReceived: Date.now()
                                }), !1)
                            }
                        }, a.connect(n), n.connect(t.destination), e.privMediaResources = {
                            scriptProcessorNode: n,
                            source: a,
                            stream: r
                        }
                    })).catch((function () {
                        a.connect(i), i.connect(t.destination), e.privMediaResources = {
                            scriptProcessorNode: i,
                            source: a,
                            stream: r
                        }
                    })) : (a.connect(i), i.connect(t.destination), e.privMediaResources = {
                        scriptProcessorNode: i,
                        source: a,
                        stream: r
                    })
                }, this.releaseMediaResources = function (t) {
                    e.privMediaResources && (e.privMediaResources.scriptProcessorNode && (e.privMediaResources.scriptProcessorNode.disconnect(t.destination), e.privMediaResources.scriptProcessorNode = null), e.privMediaResources.source && (e.privMediaResources.source.disconnect(), e.privMediaResources.stream.getTracks().forEach((function (e) {
                        return e.stop()
                    })), e.privMediaResources.source = null))
                }
            }
            return e.prototype.setWorkletUrl = function (e) {
                this.privSpeechProcessorScript = e
            }, e
        }();
    t.PcmRecorder = o
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(4),
        o = r(142),
        i = function () {
            function e(e, t, r, i, s, a) {
                var c = this;
                if (this.privIsDisposed = !1, this.dispose = function () {
                    c.privIsDisposed = !0, c.privConnectionMessageAdapter && c.privConnectionMessageAdapter.close()
                }, this.isDisposed = function () {
                    return c.privIsDisposed
                }, this.state = function () {
                    return c.privConnectionMessageAdapter.state
                }, this.open = function () {
                    return c.privConnectionMessageAdapter.open()
                }, this.send = function (e) {
                    return c.privConnectionMessageAdapter.send(e)
                }, this.read = function () {
                    return c.privConnectionMessageAdapter.read()
                }, !e) throw new n.ArgumentNullError("uri");
                if (!i) throw new n.ArgumentNullError("messageFormatter");
                this.privMessageFormatter = i;
                var p = "",
                    u = 0;
                if (t)
                    for (var v in t) {
                        if (v) p += 0 === u && -1 === e.indexOf("?") ? "?" : "&", p += v + "=" + encodeURIComponent(t[v]), u++
                    }
                if (r)
                    for (var l in r) {
                        if (l) p += 0 === u ? "?" : "&", p += l + "=" + encodeURIComponent(r[l]), u++
                    }
                this.privUri = e + p, this.privId = a || n.createNoDashGuid(), this.privConnectionMessageAdapter = new o.WebsocketMessageAdapter(this.privUri, this.id, this.privMessageFormatter, s, r)
            }
            return Object.defineProperty(e.prototype, "id", {
                get: function () {
                    return this.privId
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "events", {
                get: function () {
                    return this.privConnectionMessageAdapter.events
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
    t.WebsocketConnection = i
}, function (e, t, r) {
    "use strict";
    (function (e, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(4),
            i = r(149),
            s = r(150),
            a = r(151),
            c = function () {
                function t(r, c, p, u, v) {
                    var l = this;
                    if (this.open = function () {
                        if (l.privConnectionState === o.ConnectionState.Disconnected) return o.PromiseHelper.fromError("Cannot open a connection that is in " + l.privConnectionState + " state");
                        if (l.privConnectionEstablishDeferral) return l.privConnectionEstablishDeferral.promise();
                        l.privConnectionEstablishDeferral = new o.Deferred, l.privCertificateValidatedDeferral = new o.Deferred, l.privConnectionState = o.ConnectionState.Connecting;
                        try {
                            var r = void 0 !== e && "0" !== e.env.NODE_TLS_REJECT_UNAUTHORIZED && !l.privUri.startsWith("ws:");
                            if ("undefined" == typeof WebSocket || t.forceNpmWebSocket)
                                if (void 0 !== l.proxyInfo && void 0 !== l.proxyInfo.HostName && l.proxyInfo.Port > 0) {
                                    var c = {
                                        host: l.proxyInfo.HostName,
                                        port: l.proxyInfo.Port
                                    };
                                    void 0 !== l.proxyInfo.UserName && (c.headers = {
                                        "Proxy-Authentication": "Basic " + new n(l.proxyInfo.UserName + ":" + (void 0 === l.proxyInfo.Password) ? "" : l.proxyInfo.Password).toString("base64")
                                    }, r && (c.headers.requestOCSP = "true"));
                                    var p = {
                                        agent: new i(c),
                                        headers: l.privHeaders
                                    };
                                    l.privWebsocketClient = new s(l.privUri, p), r ? l.privWebsocketClient.addListener("upgrade", (function (e) {
                                        var t = e.socket,
                                            r = t.getPeerCertificate(!0);
                                        t.cork(), a.check({
                                            cert: r.raw,
                                            httpOptions: p,
                                            issuer: r.issuerCertificate.raw
                                        }, (function (e, r) {
                                            e ? (l.privCertificateValidatedDeferral.reject(e.message), t.destroy(e)) : (l.privCertificateValidatedDeferral.resolve(!0), t.uncork())
                                        }))
                                    })) : l.privCertificateValidatedDeferral.resolve(!0)
                                } else {
                                    var u = {
                                        headers: l.privHeaders
                                    };
                                    l.privCertificateValidatedDeferral.resolve(!0), r && (u.agent = new a.Agent({})), l.privWebsocketClient = new s(l.privUri, u)
                                }
                            else l.privCertificateValidatedDeferral.resolve(!0), l.privWebsocketClient = new WebSocket(l.privUri);
                            l.privWebsocketClient.binaryType = "arraybuffer", l.privReceivingMessageQueue = new o.Queue, l.privDisconnectDeferral = new o.Deferred, l.privSendMessageQueue = new o.Queue, l.processSendQueue()
                        } catch (e) {
                            return l.privConnectionEstablishDeferral.resolve(new o.ConnectionOpenResponse(500, e)), l.privConnectionEstablishDeferral.promise()
                        }
                        return l.onEvent(new o.ConnectionStartEvent(l.privConnectionId, l.privUri)), l.privWebsocketClient.onopen = function (e) {
                            l.privCertificateValidatedDeferral.promise().on((function () {
                                l.privConnectionState = o.ConnectionState.Connected, l.onEvent(new o.ConnectionEstablishedEvent(l.privConnectionId)), l.privConnectionEstablishDeferral.resolve(new o.ConnectionOpenResponse(200, ""))
                            }), (function (e) {
                                l.privConnectionEstablishDeferral.reject(e)
                            }))
                        }, l.privWebsocketClient.onerror = function (e) {
                            l.privConnectionState, o.ConnectionState.Connecting
                        }, l.privWebsocketClient.onclose = function (e) {
                            l.privConnectionState === o.ConnectionState.Connecting ? (l.privConnectionState = o.ConnectionState.Disconnected, l.privConnectionEstablishDeferral.resolve(new o.ConnectionOpenResponse(e.code, e.reason))) : l.onEvent(new o.ConnectionClosedEvent(l.privConnectionId, e.code, e.reason)), l.onClose(e.code, e.reason)
                        }, l.privWebsocketClient.onmessage = function (e) {
                            var t = (new Date).toISOString();
                            if (l.privConnectionState === o.ConnectionState.Connected) {
                                var r = new o.Deferred;
                                if (l.privReceivingMessageQueue.enqueueFromPromise(r.promise()), e.data instanceof ArrayBuffer) {
                                    var n = new o.RawWebsocketMessage(o.MessageType.Binary, e.data);
                                    l.privMessageFormatter.toConnectionMessage(n).on((function (e) {
                                        l.onEvent(new o.ConnectionMessageReceivedEvent(l.privConnectionId, t, e)), r.resolve(e)
                                    }), (function (e) {
                                        r.reject("Invalid binary message format. Error: " + e)
                                    }))
                                } else {
                                    n = new o.RawWebsocketMessage(o.MessageType.Text, e.data);
                                    l.privMessageFormatter.toConnectionMessage(n).on((function (e) {
                                        l.onEvent(new o.ConnectionMessageReceivedEvent(l.privConnectionId, t, e)), r.resolve(e)
                                    }), (function (e) {
                                        r.reject("Invalid text message format. Error: " + e)
                                    }))
                                }
                            }
                        }, l.privConnectionEstablishDeferral.promise()
                    }, this.send = function (e) {
                        if (l.privConnectionState !== o.ConnectionState.Connected) return o.PromiseHelper.fromError("Cannot send on connection that is in " + l.privConnectionState + " state");
                        var t = new o.Deferred,
                            r = new o.Deferred;
                        return l.privSendMessageQueue.enqueueFromPromise(r.promise()), l.privMessageFormatter.fromConnectionMessage(e).on((function (n) {
                            r.resolve({
                                Message: e,
                                RawWebsocketMessage: n,
                                sendStatusDeferral: t
                            })
                        }), (function (e) {
                            r.reject("Error formatting the message. " + e)
                        })), t.promise()
                    }, this.read = function () {
                        return l.privConnectionState !== o.ConnectionState.Connected ? o.PromiseHelper.fromError("Cannot read on connection that is in " + l.privConnectionState + " state") : l.privReceivingMessageQueue.dequeue()
                    }, this.close = function (e) {
                        if (!l.privWebsocketClient) {
                            var t = new o.Deferred;
                            return t.resolve(!0), t.promise()
                        }
                        return l.privConnectionState !== o.ConnectionState.Disconnected && l.privWebsocketClient.close(1e3, e || "Normal closure by client"), l.privDisconnectDeferral.promise()
                    }, this.sendRawMessage = function (e) {
                        try {
                            return e ? (l.onEvent(new o.ConnectionMessageSentEvent(l.privConnectionId, (new Date).toISOString(), e.Message)), l.isWebsocketOpen ? (l.privWebsocketClient.send(e.RawWebsocketMessage.payload), o.PromiseHelper.fromResult(!0)) : o.PromiseHelper.fromError("websocket send error: Websocket not ready")) : o.PromiseHelper.fromResult(!0)
                        } catch (e) {
                            return o.PromiseHelper.fromError("websocket send error: " + e)
                        }
                    }, this.onClose = function (e, t) {
                        var r = "Connection closed. " + e + ": " + t;
                        l.privConnectionState = o.ConnectionState.Disconnected, l.privDisconnectDeferral.resolve(!0), l.privReceivingMessageQueue.dispose(t), l.privReceivingMessageQueue.drainAndDispose((function (e) { }), r), l.privSendMessageQueue.drainAndDispose((function (e) {
                            e.sendStatusDeferral.reject(r)
                        }), r)
                    }, this.processSendQueue = function () {
                        l.privSendMessageQueue.dequeue().on((function (e) {
                            e && l.sendRawMessage(e).on((function (t) {
                                e.sendStatusDeferral.resolve(t), l.processSendQueue()
                            }), (function (t) {
                                e.sendStatusDeferral.reject(t), l.processSendQueue()
                            }))
                        }), (function (e) { }))
                    }, this.onEvent = function (e) {
                        l.privConnectionEvents.onEvent(e), o.Events.instance.onEvent(e)
                    }, !r) throw new o.ArgumentNullError("uri");
                    if (!p) throw new o.ArgumentNullError("messageFormatter");
                    this.proxyInfo = u, this.privConnectionEvents = new o.EventSource, this.privConnectionId = c, this.privMessageFormatter = p, this.privConnectionState = o.ConnectionState.None, this.privUri = r, this.privHeaders = v
                }
                return Object.defineProperty(t.prototype, "state", {
                    get: function () {
                        return this.privConnectionState
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "events", {
                    get: function () {
                        return this.privConnectionEvents
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isWebsocketOpen", {
                    get: function () {
                        return this.privWebsocketClient && this.privWebsocketClient.readyState === this.privWebsocketClient.OPEN
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.forceNpmWebSocket = !1, t
            }();
        t.WebsocketMessageAdapter = c
    }).call(this, r(143), r(144).Buffer)
}, function (e, t) {
    var r, n, o = e.exports = {};

    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function s() {
        throw new Error("clearTimeout has not been defined")
    }

    function a(e) {
        if (r === setTimeout) return setTimeout(e, 0);
        if ((r === i || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
        try {
            return r(e, 0)
        } catch (t) {
            try {
                return r.call(null, e, 0)
            } catch (t) {
                return r.call(this, e, 0)
            }
        }
    } ! function () {
        try {
            r = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
            r = i
        }
        try {
            n = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (e) {
            n = s
        }
    }();
    var c, p = [],
        u = !1,
        v = -1;

    function l() {
        u && c && (u = !1, c.length ? p = c.concat(p) : v = -1, p.length && f())
    }

    function f() {
        if (!u) {
            var e = a(l);
            u = !0;
            for (var t = p.length; t;) {
                for (c = p, p = []; ++v < t;) c && c[v].run();
                v = -1, t = p.length
            }
            c = null, u = !1,
                function (e) {
                    if (n === clearTimeout) return clearTimeout(e);
                    if ((n === s || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                    try {
                        n(e)
                    } catch (t) {
                        try {
                            return n.call(null, e)
                        } catch (t) {
                            return n.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function h(e, t) {
        this.fun = e, this.array = t
    }

    function d() { }
    o.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        p.push(new h(e, t)), 1 !== p.length || u || a(f)
    }, h.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = d, o.addListener = d, o.once = d, o.off = d, o.removeListener = d, o.removeAllListeners = d, o.emit = d, o.prependListener = d, o.prependOnceListener = d, o.listeners = function (e) {
        return []
    }, o.binding = function (e) {
        throw new Error("process.binding is not supported")
    }, o.cwd = function () {
        return "/"
    }, o.chdir = function (e) {
        throw new Error("process.chdir is not supported")
    }, o.umask = function () {
        return 0
    }
}, function (e, t, r) {
    "use strict";
    (function (e) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <http://feross.org>
         * @license  MIT
         */
        var n = r(146),
            o = r(147),
            i = r(148);

        function s() {
            return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }

        function a(e, t) {
            if (s() < t) throw new RangeError("Invalid typed array length");
            return c.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = c.prototype : (null === e && (e = new c(t)), e.length = t), e
        }

        function c(e, t, r) {
            if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(e, t, r);
            if ("number" == typeof e) {
                if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                return v(this, e)
            }
            return p(this, e, t, r)
        }

        function p(e, t, r, n) {
            if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function (e, t, r, n) {
                if (t.byteLength, r < 0 || t.byteLength < r) throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
                t = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, r) : new Uint8Array(t, r, n);
                c.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = c.prototype : e = l(e, t);
                return e
            }(e, t, r, n) : "string" == typeof t ? function (e, t, r) {
                "string" == typeof r && "" !== r || (r = "utf8");
                if (!c.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
                var n = 0 | h(t, r),
                    o = (e = a(e, n)).write(t, r);
                o !== n && (e = e.slice(0, o));
                return e
            }(e, t, r) : function (e, t) {
                if (c.isBuffer(t)) {
                    var r = 0 | f(t.length);
                    return 0 === (e = a(e, r)).length ? e : (t.copy(e, 0, 0, r), e)
                }
                if (t) {
                    if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (n = t.length) != n ? a(e, 0) : l(e, t);
                    if ("Buffer" === t.type && i(t.data)) return l(e, t.data)
                }
                var n;
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }(e, t)
        }

        function u(e) {
            if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
            if (e < 0) throw new RangeError('"size" argument must not be negative')
        }

        function v(e, t) {
            if (u(t), e = a(e, t < 0 ? 0 : 0 | f(t)), !c.TYPED_ARRAY_SUPPORT)
                for (var r = 0; r < t; ++r) e[r] = 0;
            return e
        }

        function l(e, t) {
            var r = t.length < 0 ? 0 : 0 | f(t.length);
            e = a(e, r);
            for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
            return e
        }

        function f(e) {
            if (e >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
            return 0 | e
        }

        function h(e, t) {
            if (c.isBuffer(e)) return e.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
            "string" != typeof e && (e = "" + e);
            var r = e.length;
            if (0 === r) return 0;
            for (var n = !1; ;) switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                    return r;
                case "utf8":
                case "utf-8":
                case void 0:
                    return U(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * r;
                case "hex":
                    return r >>> 1;
                case "base64":
                    return F(e).length;
                default:
                    if (n) return U(e).length;
                    t = ("" + t).toLowerCase(), n = !0
            }
        }

        function d(e, t, r) {
            var n = !1;
            if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
            if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
            if ((r >>>= 0) <= (t >>>= 0)) return "";
            for (e || (e = "utf8"); ;) switch (e) {
                case "hex":
                    return A(this, t, r);
                case "utf8":
                case "utf-8":
                    return w(this, t, r);
                case "ascii":
                    return T(this, t, r);
                case "latin1":
                case "binary":
                    return _(this, t, r);
                case "base64":
                    return O(this, t, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return D(this, t, r);
                default:
                    if (n) throw new TypeError("Unknown encoding: " + e);
                    e = (e + "").toLowerCase(), n = !0
            }
        }

        function g(e, t, r) {
            var n = e[t];
            e[t] = e[r], e[r] = n
        }

        function y(e, t, r, n, o) {
            if (0 === e.length) return -1;
            if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = o ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                if (o) return -1;
                r = e.length - 1
            } else if (r < 0) {
                if (!o) return -1;
                r = 0
            }
            if ("string" == typeof t && (t = c.from(t, n)), c.isBuffer(t)) return 0 === t.length ? -1 : m(e, t, r, n, o);
            if ("number" == typeof t) return t &= 255, c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : m(e, [t], r, n, o);
            throw new TypeError("val must be string, number or Buffer")
        }

        function m(e, t, r, n, o) {
            var i, s = 1,
                a = e.length,
                c = t.length;
            if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                if (e.length < 2 || t.length < 2) return -1;
                s = 2, a /= 2, c /= 2, r /= 2
            }

            function p(e, t) {
                return 1 === s ? e[t] : e.readUInt16BE(t * s)
            }
            if (o) {
                var u = -1;
                for (i = r; i < a; i++)
                    if (p(e, i) === p(t, -1 === u ? 0 : i - u)) {
                        if (-1 === u && (u = i), i - u + 1 === c) return u * s
                    } else -1 !== u && (i -= i - u), u = -1
            } else
                for (r + c > a && (r = a - c), i = r; i >= 0; i--) {
                    for (var v = !0, l = 0; l < c; l++)
                        if (p(e, i + l) !== p(t, l)) {
                            v = !1;
                            break
                        } if (v) return i
                }
            return -1
        }

        function C(e, t, r, n) {
            r = Number(r) || 0;
            var o = e.length - r;
            n ? (n = Number(n)) > o && (n = o) : n = o;
            var i = t.length;
            if (i % 2 != 0) throw new TypeError("Invalid hex string");
            n > i / 2 && (n = i / 2);
            for (var s = 0; s < n; ++s) {
                var a = parseInt(t.substr(2 * s, 2), 16);
                if (isNaN(a)) return s;
                e[r + s] = a
            }
            return s
        }

        function S(e, t, r, n) {
            return W(U(t, e.length - r), e, r, n)
        }

        function P(e, t, r, n) {
            return W(function (e) {
                for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                return t
            }(t), e, r, n)
        }

        function b(e, t, r, n) {
            return P(e, t, r, n)
        }

        function R(e, t, r, n) {
            return W(F(t), e, r, n)
        }

        function I(e, t, r, n) {
            return W(function (e, t) {
                for (var r, n, o, i = [], s = 0; s < e.length && !((t -= 2) < 0); ++s) r = e.charCodeAt(s), n = r >> 8, o = r % 256, i.push(o), i.push(n);
                return i
            }(t, e.length - r), e, r, n)
        }

        function O(e, t, r) {
            return 0 === t && r === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, r))
        }

        function w(e, t, r) {
            r = Math.min(e.length, r);
            for (var n = [], o = t; o < r;) {
                var i, s, a, c, p = e[o],
                    u = null,
                    v = p > 239 ? 4 : p > 223 ? 3 : p > 191 ? 2 : 1;
                if (o + v <= r) switch (v) {
                    case 1:
                        p < 128 && (u = p);
                        break;
                    case 2:
                        128 == (192 & (i = e[o + 1])) && (c = (31 & p) << 6 | 63 & i) > 127 && (u = c);
                        break;
                    case 3:
                        i = e[o + 1], s = e[o + 2], 128 == (192 & i) && 128 == (192 & s) && (c = (15 & p) << 12 | (63 & i) << 6 | 63 & s) > 2047 && (c < 55296 || c > 57343) && (u = c);
                        break;
                    case 4:
                        i = e[o + 1], s = e[o + 2], a = e[o + 3], 128 == (192 & i) && 128 == (192 & s) && 128 == (192 & a) && (c = (15 & p) << 18 | (63 & i) << 12 | (63 & s) << 6 | 63 & a) > 65535 && c < 1114112 && (u = c)
                }
                null === u ? (u = 65533, v = 1) : u > 65535 && (u -= 65536, n.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), n.push(u), o += v
            }
            return function (e) {
                var t = e.length;
                if (t <= E) return String.fromCharCode.apply(String, e);
                var r = "",
                    n = 0;
                for (; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += E));
                return r
            }(n)
        }
        t.Buffer = c, t.SlowBuffer = function (e) {
            +e != e && (e = 0);
            return c.alloc(+e)
        }, t.INSPECT_MAX_BYTES = 50, c.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function () {
            try {
                var e = new Uint8Array(1);
                return e.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function () {
                        return 42
                    }
                }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
            } catch (e) {
                return !1
            }
        }(), t.kMaxLength = s(), c.poolSize = 8192, c._augment = function (e) {
            return e.__proto__ = c.prototype, e
        }, c.from = function (e, t, r) {
            return p(null, e, t, r)
        }, c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype, c.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
            value: null,
            configurable: !0
        })), c.alloc = function (e, t, r) {
            return function (e, t, r, n) {
                return u(t), t <= 0 ? a(e, t) : void 0 !== r ? "string" == typeof n ? a(e, t).fill(r, n) : a(e, t).fill(r) : a(e, t)
            }(null, e, t, r)
        }, c.allocUnsafe = function (e) {
            return v(null, e)
        }, c.allocUnsafeSlow = function (e) {
            return v(null, e)
        }, c.isBuffer = function (e) {
            return !(null == e || !e._isBuffer)
        }, c.compare = function (e, t) {
            if (!c.isBuffer(e) || !c.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
            if (e === t) return 0;
            for (var r = e.length, n = t.length, o = 0, i = Math.min(r, n); o < i; ++o)
                if (e[o] !== t[o]) {
                    r = e[o], n = t[o];
                    break
                } return r < n ? -1 : n < r ? 1 : 0
        }, c.isEncoding = function (e) {
            switch (String(e).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
            }
        }, c.concat = function (e, t) {
            if (!i(e)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length) return c.alloc(0);
            var r;
            if (void 0 === t)
                for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
            var n = c.allocUnsafe(t),
                o = 0;
            for (r = 0; r < e.length; ++r) {
                var s = e[r];
                if (!c.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                s.copy(n, o), o += s.length
            }
            return n
        }, c.byteLength = h, c.prototype._isBuffer = !0, c.prototype.swap16 = function () {
            var e = this.length;
            if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2) g(this, t, t + 1);
            return this
        }, c.prototype.swap32 = function () {
            var e = this.length;
            if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4) g(this, t, t + 3), g(this, t + 1, t + 2);
            return this
        }, c.prototype.swap64 = function () {
            var e = this.length;
            if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8) g(this, t, t + 7), g(this, t + 1, t + 6), g(this, t + 2, t + 5), g(this, t + 3, t + 4);
            return this
        }, c.prototype.toString = function () {
            var e = 0 | this.length;
            return 0 === e ? "" : 0 === arguments.length ? w(this, 0, e) : d.apply(this, arguments)
        }, c.prototype.equals = function (e) {
            if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === c.compare(this, e)
        }, c.prototype.inspect = function () {
            var e = "",
                r = t.INSPECT_MAX_BYTES;
            return this.length > 0 && (e = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (e += " ... ")), "<Buffer " + e + ">"
        }, c.prototype.compare = function (e, t, r, n, o) {
            if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === o && (o = this.length), t < 0 || r > e.length || n < 0 || o > this.length) throw new RangeError("out of range index");
            if (n >= o && t >= r) return 0;
            if (n >= o) return -1;
            if (t >= r) return 1;
            if (this === e) return 0;
            for (var i = (o >>>= 0) - (n >>>= 0), s = (r >>>= 0) - (t >>>= 0), a = Math.min(i, s), p = this.slice(n, o), u = e.slice(t, r), v = 0; v < a; ++v)
                if (p[v] !== u[v]) {
                    i = p[v], s = u[v];
                    break
                } return i < s ? -1 : s < i ? 1 : 0
        }, c.prototype.includes = function (e, t, r) {
            return -1 !== this.indexOf(e, t, r)
        }, c.prototype.indexOf = function (e, t, r) {
            return y(this, e, t, r, !0)
        }, c.prototype.lastIndexOf = function (e, t, r) {
            return y(this, e, t, r, !1)
        }, c.prototype.write = function (e, t, r, n) {
            if (void 0 === t) n = "utf8", r = this.length, t = 0;
            else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0;
            else {
                if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                t |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
            }
            var o = this.length - t;
            if ((void 0 === r || r > o) && (r = o), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");
            for (var i = !1; ;) switch (n) {
                case "hex":
                    return C(this, e, t, r);
                case "utf8":
                case "utf-8":
                    return S(this, e, t, r);
                case "ascii":
                    return P(this, e, t, r);
                case "latin1":
                case "binary":
                    return b(this, e, t, r);
                case "base64":
                    return R(this, e, t, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return I(this, e, t, r);
                default:
                    if (i) throw new TypeError("Unknown encoding: " + n);
                    n = ("" + n).toLowerCase(), i = !0
            }
        }, c.prototype.toJSON = function () {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        };
        var E = 4096;

        function T(e, t, r) {
            var n = "";
            r = Math.min(e.length, r);
            for (var o = t; o < r; ++o) n += String.fromCharCode(127 & e[o]);
            return n
        }

        function _(e, t, r) {
            var n = "";
            r = Math.min(e.length, r);
            for (var o = t; o < r; ++o) n += String.fromCharCode(e[o]);
            return n
        }

        function A(e, t, r) {
            var n = e.length;
            (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
            for (var o = "", i = t; i < r; ++i) o += q(e[i]);
            return o
        }

        function D(e, t, r) {
            for (var n = e.slice(t, r), o = "", i = 0; i < n.length; i += 2) o += String.fromCharCode(n[i] + 256 * n[i + 1]);
            return o
        }

        function j(e, t, r) {
            if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
            if (e + t > r) throw new RangeError("Trying to access beyond buffer length")
        }

        function M(e, t, r, n, o, i) {
            if (!c.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (t > o || t < i) throw new RangeError('"value" argument is out of bounds');
            if (r + n > e.length) throw new RangeError("Index out of range")
        }

        function N(e, t, r, n) {
            t < 0 && (t = 65535 + t + 1);
            for (var o = 0, i = Math.min(e.length - r, 2); o < i; ++o) e[r + o] = (t & 255 << 8 * (n ? o : 1 - o)) >>> 8 * (n ? o : 1 - o)
        }

        function k(e, t, r, n) {
            t < 0 && (t = 4294967295 + t + 1);
            for (var o = 0, i = Math.min(e.length - r, 4); o < i; ++o) e[r + o] = t >>> 8 * (n ? o : 3 - o) & 255
        }

        function z(e, t, r, n, o, i) {
            if (r + n > e.length) throw new RangeError("Index out of range");
            if (r < 0) throw new RangeError("Index out of range")
        }

        function x(e, t, r, n, i) {
            return i || z(e, 0, r, 4), o.write(e, t, r, n, 23, 4), r + 4
        }

        function L(e, t, r, n, i) {
            return i || z(e, 0, r, 8), o.write(e, t, r, n, 52, 8), r + 8
        }
        c.prototype.slice = function (e, t) {
            var r, n = this.length;
            if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e), c.TYPED_ARRAY_SUPPORT) (r = this.subarray(e, t)).__proto__ = c.prototype;
            else {
                var o = t - e;
                r = new c(o, void 0);
                for (var i = 0; i < o; ++i) r[i] = this[i + e]
            }
            return r
        }, c.prototype.readUIntLE = function (e, t, r) {
            e |= 0, t |= 0, r || j(e, t, this.length);
            for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256);) n += this[e + i] * o;
            return n
        }, c.prototype.readUIntBE = function (e, t, r) {
            e |= 0, t |= 0, r || j(e, t, this.length);
            for (var n = this[e + --t], o = 1; t > 0 && (o *= 256);) n += this[e + --t] * o;
            return n
        }, c.prototype.readUInt8 = function (e, t) {
            return t || j(e, 1, this.length), this[e]
        }, c.prototype.readUInt16LE = function (e, t) {
            return t || j(e, 2, this.length), this[e] | this[e + 1] << 8
        }, c.prototype.readUInt16BE = function (e, t) {
            return t || j(e, 2, this.length), this[e] << 8 | this[e + 1]
        }, c.prototype.readUInt32LE = function (e, t) {
            return t || j(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
        }, c.prototype.readUInt32BE = function (e, t) {
            return t || j(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }, c.prototype.readIntLE = function (e, t, r) {
            e |= 0, t |= 0, r || j(e, t, this.length);
            for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256);) n += this[e + i] * o;
            return n >= (o *= 128) && (n -= Math.pow(2, 8 * t)), n
        }, c.prototype.readIntBE = function (e, t, r) {
            e |= 0, t |= 0, r || j(e, t, this.length);
            for (var n = t, o = 1, i = this[e + --n]; n > 0 && (o *= 256);) i += this[e + --n] * o;
            return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i
        }, c.prototype.readInt8 = function (e, t) {
            return t || j(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
        }, c.prototype.readInt16LE = function (e, t) {
            t || j(e, 2, this.length);
            var r = this[e] | this[e + 1] << 8;
            return 32768 & r ? 4294901760 | r : r
        }, c.prototype.readInt16BE = function (e, t) {
            t || j(e, 2, this.length);
            var r = this[e + 1] | this[e] << 8;
            return 32768 & r ? 4294901760 | r : r
        }, c.prototype.readInt32LE = function (e, t) {
            return t || j(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }, c.prototype.readInt32BE = function (e, t) {
            return t || j(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }, c.prototype.readFloatLE = function (e, t) {
            return t || j(e, 4, this.length), o.read(this, e, !0, 23, 4)
        }, c.prototype.readFloatBE = function (e, t) {
            return t || j(e, 4, this.length), o.read(this, e, !1, 23, 4)
        }, c.prototype.readDoubleLE = function (e, t) {
            return t || j(e, 8, this.length), o.read(this, e, !0, 52, 8)
        }, c.prototype.readDoubleBE = function (e, t) {
            return t || j(e, 8, this.length), o.read(this, e, !1, 52, 8)
        }, c.prototype.writeUIntLE = function (e, t, r, n) {
            (e = +e, t |= 0, r |= 0, n) || M(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            var o = 1,
                i = 0;
            for (this[t] = 255 & e; ++i < r && (o *= 256);) this[t + i] = e / o & 255;
            return t + r
        }, c.prototype.writeUIntBE = function (e, t, r, n) {
            (e = +e, t |= 0, r |= 0, n) || M(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            var o = r - 1,
                i = 1;
            for (this[t + o] = 255 & e; --o >= 0 && (i *= 256);) this[t + o] = e / i & 255;
            return t + r
        }, c.prototype.writeUInt8 = function (e, t, r) {
            return e = +e, t |= 0, r || M(this, e, t, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
        }, c.prototype.writeUInt16LE = function (e, t, r) {
            return e = +e, t |= 0, r || M(this, e, t, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : N(this, e, t, !0), t + 2
        }, c.prototype.writeUInt16BE = function (e, t, r) {
            return e = +e, t |= 0, r || M(this, e, t, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : N(this, e, t, !1), t + 2
        }, c.prototype.writeUInt32LE = function (e, t, r) {
            return e = +e, t |= 0, r || M(this, e, t, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : k(this, e, t, !0), t + 4
        }, c.prototype.writeUInt32BE = function (e, t, r) {
            return e = +e, t |= 0, r || M(this, e, t, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : k(this, e, t, !1), t + 4
        }, c.prototype.writeIntLE = function (e, t, r, n) {
            if (e = +e, t |= 0, !n) {
                var o = Math.pow(2, 8 * r - 1);
                M(this, e, t, r, o - 1, -o)
            }
            var i = 0,
                s = 1,
                a = 0;
            for (this[t] = 255 & e; ++i < r && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + i - 1] && (a = 1), this[t + i] = (e / s >> 0) - a & 255;
            return t + r
        }, c.prototype.writeIntBE = function (e, t, r, n) {
            if (e = +e, t |= 0, !n) {
                var o = Math.pow(2, 8 * r - 1);
                M(this, e, t, r, o - 1, -o)
            }
            var i = r - 1,
                s = 1,
                a = 0;
            for (this[t + i] = 255 & e; --i >= 0 && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + i + 1] && (a = 1), this[t + i] = (e / s >> 0) - a & 255;
            return t + r
        }, c.prototype.writeInt8 = function (e, t, r) {
            return e = +e, t |= 0, r || M(this, e, t, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
        }, c.prototype.writeInt16LE = function (e, t, r) {
            return e = +e, t |= 0, r || M(this, e, t, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : N(this, e, t, !0), t + 2
        }, c.prototype.writeInt16BE = function (e, t, r) {
            return e = +e, t |= 0, r || M(this, e, t, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : N(this, e, t, !1), t + 2
        }, c.prototype.writeInt32LE = function (e, t, r) {
            return e = +e, t |= 0, r || M(this, e, t, 4, 2147483647, -2147483648), c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : k(this, e, t, !0), t + 4
        }, c.prototype.writeInt32BE = function (e, t, r) {
            return e = +e, t |= 0, r || M(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : k(this, e, t, !1), t + 4
        }, c.prototype.writeFloatLE = function (e, t, r) {
            return x(this, e, t, !0, r)
        }, c.prototype.writeFloatBE = function (e, t, r) {
            return x(this, e, t, !1, r)
        }, c.prototype.writeDoubleLE = function (e, t, r) {
            return L(this, e, t, !0, r)
        }, c.prototype.writeDoubleBE = function (e, t, r) {
            return L(this, e, t, !1, r)
        }, c.prototype.copy = function (e, t, r, n) {
            if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
            if (n < 0) throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
            var o, i = n - r;
            if (this === e && r < t && t < n)
                for (o = i - 1; o >= 0; --o) e[o + t] = this[o + r];
            else if (i < 1e3 || !c.TYPED_ARRAY_SUPPORT)
                for (o = 0; o < i; ++o) e[o + t] = this[o + r];
            else Uint8Array.prototype.set.call(e, this.subarray(r, r + i), t);
            return i
        }, c.prototype.fill = function (e, t, r, n) {
            if ("string" == typeof e) {
                if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === e.length) {
                    var o = e.charCodeAt(0);
                    o < 256 && (e = o)
                }
                if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                if ("string" == typeof n && !c.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
            } else "number" == typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
            if (r <= t) return this;
            var i;
            if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
                for (i = t; i < r; ++i) this[i] = e;
            else {
                var s = c.isBuffer(e) ? e : U(new c(e, n).toString()),
                    a = s.length;
                for (i = 0; i < r - t; ++i) this[i + t] = s[i % a]
            }
            return this
        };
        var B = /[^+\/0-9A-Za-z-_]/g;

        function q(e) {
            return e < 16 ? "0" + e.toString(16) : e.toString(16)
        }

        function U(e, t) {
            var r;
            t = t || 1 / 0;
            for (var n = e.length, o = null, i = [], s = 0; s < n; ++s) {
                if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
                    if (!o) {
                        if (r > 56319) {
                            (t -= 3) > -1 && i.push(239, 191, 189);
                            continue
                        }
                        if (s + 1 === n) {
                            (t -= 3) > -1 && i.push(239, 191, 189);
                            continue
                        }
                        o = r;
                        continue
                    }
                    if (r < 56320) {
                        (t -= 3) > -1 && i.push(239, 191, 189), o = r;
                        continue
                    }
                    r = 65536 + (o - 55296 << 10 | r - 56320)
                } else o && (t -= 3) > -1 && i.push(239, 191, 189);
                if (o = null, r < 128) {
                    if ((t -= 1) < 0) break;
                    i.push(r)
                } else if (r < 2048) {
                    if ((t -= 2) < 0) break;
                    i.push(r >> 6 | 192, 63 & r | 128)
                } else if (r < 65536) {
                    if ((t -= 3) < 0) break;
                    i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                } else {
                    if (!(r < 1114112)) throw new Error("Invalid code point");
                    if ((t -= 4) < 0) break;
                    i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                }
            }
            return i
        }

        function F(e) {
            return n.toByteArray(function (e) {
                if ((e = function (e) {
                    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                }(e).replace(B, "")).length < 2) return "";
                for (; e.length % 4 != 0;) e += "=";
                return e
            }(e))
        }

        function W(e, t, r, n) {
            for (var o = 0; o < n && !(o + r >= t.length || o >= e.length); ++o) t[o + r] = e[o];
            return o
        }
    }).call(this, r(145))
}, function (e, t) {
    var r;
    r = function () {
        return this
    }();
    try {
        r = r || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (r = window)
    }
    e.exports = r
}, function (e, t, r) {
    "use strict";
    t.byteLength = function (e) {
        var t = p(e),
            r = t[0],
            n = t[1];
        return 3 * (r + n) / 4 - n
    }, t.toByteArray = function (e) {
        var t, r, n = p(e),
            s = n[0],
            a = n[1],
            c = new i(function (e, t, r) {
                return 3 * (t + r) / 4 - r
            }(0, s, a)),
            u = 0,
            v = a > 0 ? s - 4 : s;
        for (r = 0; r < v; r += 4) t = o[e.charCodeAt(r)] << 18 | o[e.charCodeAt(r + 1)] << 12 | o[e.charCodeAt(r + 2)] << 6 | o[e.charCodeAt(r + 3)], c[u++] = t >> 16 & 255, c[u++] = t >> 8 & 255, c[u++] = 255 & t;
        2 === a && (t = o[e.charCodeAt(r)] << 2 | o[e.charCodeAt(r + 1)] >> 4, c[u++] = 255 & t);
        1 === a && (t = o[e.charCodeAt(r)] << 10 | o[e.charCodeAt(r + 1)] << 4 | o[e.charCodeAt(r + 2)] >> 2, c[u++] = t >> 8 & 255, c[u++] = 255 & t);
        return c
    }, t.fromByteArray = function (e) {
        for (var t, r = e.length, o = r % 3, i = [], s = 0, a = r - o; s < a; s += 16383) i.push(u(e, s, s + 16383 > a ? a : s + 16383));
        1 === o ? (t = e[r - 1], i.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === o && (t = (e[r - 2] << 8) + e[r - 1], i.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="));
        return i.join("")
    };
    for (var n = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, c = s.length; a < c; ++a) n[a] = s[a], o[s.charCodeAt(a)] = a;

    function p(e) {
        var t = e.length;
        if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var r = e.indexOf("=");
        return -1 === r && (r = t), [r, r === t ? 0 : 4 - r % 4]
    }

    function u(e, t, r) {
        for (var o, i, s = [], a = t; a < r; a += 3) o = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), s.push(n[(i = o) >> 18 & 63] + n[i >> 12 & 63] + n[i >> 6 & 63] + n[63 & i]);
        return s.join("")
    }
    o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63
}, function (e, t) {
    t.read = function (e, t, r, n, o) {
        var i, s, a = 8 * o - n - 1,
            c = (1 << a) - 1,
            p = c >> 1,
            u = -7,
            v = r ? o - 1 : 0,
            l = r ? -1 : 1,
            f = e[t + v];
        for (v += l, i = f & (1 << -u) - 1, f >>= -u, u += a; u > 0; i = 256 * i + e[t + v], v += l, u -= 8);
        for (s = i & (1 << -u) - 1, i >>= -u, u += n; u > 0; s = 256 * s + e[t + v], v += l, u -= 8);
        if (0 === i) i = 1 - p;
        else {
            if (i === c) return s ? NaN : 1 / 0 * (f ? -1 : 1);
            s += Math.pow(2, n), i -= p
        }
        return (f ? -1 : 1) * s * Math.pow(2, i - n)
    }, t.write = function (e, t, r, n, o, i) {
        var s, a, c, p = 8 * i - o - 1,
            u = (1 << p) - 1,
            v = u >> 1,
            l = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            f = n ? 0 : i - 1,
            h = n ? 1 : -1,
            d = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = u) : (s = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -s)) < 1 && (s-- , c *= 2), (t += s + v >= 1 ? l / c : l * Math.pow(2, 1 - v)) * c >= 2 && (s++ , c /= 2), s + v >= u ? (a = 0, s = u) : s + v >= 1 ? (a = (t * c - 1) * Math.pow(2, o), s += v) : (a = t * Math.pow(2, v - 1) * Math.pow(2, o), s = 0)); o >= 8; e[r + f] = 255 & a, f += h, a /= 256, o -= 8);
        for (s = s << o | a, p += o; p > 0; e[r + f] = 255 & s, f += h, s /= 256, p -= 8);
        e[r + f - h] |= 128 * d
    }
}, function (e, t) {
    var r = {}.toString;
    e.exports = Array.isArray || function (e) {
        return "[object Array]" == r.call(e)
    }
}, function (e, t) { }, function (e, t) { }, function (e, t) { }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(4),
        o = function () {
            function e(e, t) {
                var r = this;
                this.privBuffers = [], this.privReplayOffset = 0, this.privLastShrinkOffset = 0, this.privBufferStartOffset = 0, this.privBufferSerial = 0, this.privBufferedBytes = 0, this.privReplay = !1, this.privLastChunkAcquiredTime = 0, this.id = function () {
                    return r.privAudioNode.id()
                }, this.privAudioNode = e, this.privBytesPerSecond = t
            }
            return e.prototype.read = function () {
                var e = this;
                if (this.privReplay && 0 !== this.privBuffers.length) {
                    var t = this.privReplayOffset - this.privBufferStartOffset,
                        r = Math.round(t * this.privBytesPerSecond * 1e-7);
                    0 != r % 2 && r++;
                    for (var o = 0; o < this.privBuffers.length && r >= this.privBuffers[o].chunk.buffer.byteLength;) r -= this.privBuffers[o++].chunk.buffer.byteLength;
                    var s = this.privBuffers[o].chunk.buffer.slice(r);
                    return this.privReplayOffset += s.byteLength / this.privBytesPerSecond * 1e7, o === this.privBuffers.length - 1 && (this.privReplay = !1), n.PromiseHelper.fromResult({
                        buffer: s,
                        isEnd: !1,
                        timeReceived: this.privBuffers[o].chunk.timeReceived
                    })
                }
                return this.privAudioNode.read().onSuccessContinueWith((function (t) {
                    return t && t.buffer && (e.privBuffers.push(new i(t, e.privBufferSerial++, e.privBufferedBytes)), e.privBufferedBytes += t.buffer.byteLength), t
                }))
            }, e.prototype.detach = function () {
                this.privAudioNode.detach(), this.privBuffers = void 0
            }, e.prototype.replay = function () {
                this.privBuffers && 0 !== this.privBuffers.length && (this.privReplay = !0, this.privReplayOffset = this.privLastShrinkOffset)
            }, e.prototype.shrinkBuffers = function (e) {
                if (void 0 !== this.privBuffers) {
                    this.privLastShrinkOffset = e;
                    for (var t = e - this.privBufferStartOffset, r = Math.round(t * this.privBytesPerSecond * 1e-7), n = 0; n < this.privBuffers.length && r >= this.privBuffers[n].chunk.buffer.byteLength;) r -= this.privBuffers[n++].chunk.buffer.byteLength;
                    this.privBufferStartOffset = Math.round(e - r / this.privBytesPerSecond * 1e7), this.privBuffers = this.privBuffers.slice(n)
                }
            }, e.prototype.findTimeAtOffset = function (e) {
                if (e < this.privBufferStartOffset || void 0 === this.privBuffers) return 0;
                for (var t = 0, r = this.privBuffers; t < r.length; t++) {
                    var n = r[t],
                        o = n.byteOffset / this.privBytesPerSecond * 1e7,
                        i = o + n.chunk.buffer.byteLength / this.privBytesPerSecond * 1e7;
                    if (e >= o && e <= i) return n.chunk.timeReceived
                }
                return 0
            }, e
        }();
    t.ReplayableAudioNode = o;
    var i = function (e, t, r) {
        this.chunk = e, this.serial = t, this.byteOffset = r
    }
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(30),
        o = function () {
            function e(e, t, r, n) {
                this.privProxyHostName = e, this.privProxyPort = t, this.privProxyUserName = r, this.privProxyPassword = n
            }
            return e.fromRecognizerConfig = function (t) {
                return new e(t.parameters.getProperty(n.PropertyId.SpeechServiceConnection_ProxyHostName), parseInt(t.parameters.getProperty(n.PropertyId.SpeechServiceConnection_ProxyPort), 10), t.parameters.getProperty(n.PropertyId.SpeechServiceConnection_ProxyUserName), t.parameters.getProperty(n.PropertyId.SpeechServiceConnection_ProxyPassword))
            }, Object.defineProperty(e.prototype, "HostName", {
                get: function () {
                    return this.privProxyHostName
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "Port", {
                get: function () {
                    return this.privProxyPort
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "UserName", {
                get: function () {
                    return this.privProxyUserName
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "Password", {
                get: function () {
                    return this.privProxyPassword
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
    t.ProxyInfo = o
}]);