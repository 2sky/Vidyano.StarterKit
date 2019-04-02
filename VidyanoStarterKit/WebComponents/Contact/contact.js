"use strict";
var VidyanoStarterKit;
(function (VidyanoStarterKit) {
    var WebComponents;
    (function (WebComponents) {
        var Contact = /** @class */ (function (_super) {
            __extends(Contact, _super);
            function Contact() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Contact.prototype.attached = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _super.prototype.attached.call(this);
                                this.app.importComponent("PersistentObjectTab");
                                return [4 /*yield*/, this.service.initialize];
                            case 1:
                                _b.sent();
                                _a = this._setContact;
                                return [4 /*yield*/, this.service.getPersistentObject(null, "Contact", undefined, true)];
                            case 2:
                                _a.apply(this, [_b.sent()]);
                                return [2 /*return*/];
                        }
                    });
                });
            };
            Contact.prototype._computeCanSend = function (busy, isDirty) {
                return isDirty && !busy;
            };
            Contact.prototype._send = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var e_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, this.contact.getAction("Save").execute({
                                        throwExceptions: true
                                    })];
                            case 1:
                                _a.sent();
                                if (this.contact.notification)
                                    this.app.showAlert(this.contact.notification, this.contact.notificationType, this.contact.notificationDuration);
                                return [3 /*break*/, 3];
                            case 2:
                                e_1 = _a.sent();
                                this.app.showAlert(e_1, Vidyano.NotificationType.Error);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            };
            Contact = __decorate([
                Vidyano.WebComponents.WebComponent.register({
                    properties: {
                        contact: {
                            type: Object,
                            readOnly: true
                        },
                        busy: {
                            type: Boolean,
                            computed: "contact.isBusy",
                            value: true
                        },
                        canSend: {
                            type: Boolean,
                            computed: "_computeCanSend(busy, contact.isDirty)"
                        }
                    },
                    forwardObservers: [
                        "contact.isBusy",
                        "contact.isDirty"
                    ]
                }, "vsk")
            ], Contact);
            return Contact;
        }(Vidyano.WebComponents.WebComponent));
        WebComponents.Contact = Contact;
    })(WebComponents = VidyanoStarterKit.WebComponents || (VidyanoStarterKit.WebComponents = {}));
})(VidyanoStarterKit || (VidyanoStarterKit = {}));
