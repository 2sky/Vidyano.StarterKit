"use strict";
var VidyanoStarterKit;
(function (VidyanoStarterKit) {
    var WebComponents;
    (function (WebComponents) {
        var Home = /** @class */ (function (_super) {
            __extends(Home, _super);
            function Home() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Home.prototype.attached = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var sections, i, result, data;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _super.prototype.attached.call(this);
                                sections = Array.prototype.slice.call(Polymer.dom(this.root).querySelectorAll("section"));
                                this.fire("home-menu", sections);
                                // Build Sample Data for Team Members
                                this._setTeam(["CEO", "CTO", "Project Lead", "Software Engineer", "Software Engineer", "Graphics Designer", "Marketing"].map(function (title) { return ({ title: title }); }));
                                i = 0;
                                _a.label = 1;
                            case 1:
                                if (!(i < this.team.length)) return [3 /*break*/, 5];
                                return [4 /*yield*/, fetch("https://randomuser.me/api/")];
                            case 2:
                                result = _a.sent();
                                return [4 /*yield*/, result.json()];
                            case 3:
                                data = _a.sent();
                                this.set("team." + i + ".name", data.results[0].name.first + " " + data.results[0].name.last);
                                this.set("team." + i + ".img", data.results[0].picture.large);
                                _a.label = 4;
                            case 4:
                                i++;
                                return [3 /*break*/, 1];
                            case 5: return [2 /*return*/];
                        }
                    });
                });
            };
            Home = __decorate([
                Vidyano.WebComponents.WebComponent.register({
                    properties: {
                        team: {
                            type: Array,
                            readOnly: true
                        }
                    }
                }, "vsk")
            ], Home);
            return Home;
        }(Vidyano.WebComponents.WebComponent));
        WebComponents.Home = Home;
    })(WebComponents = VidyanoStarterKit.WebComponents || (VidyanoStarterKit.WebComponents = {}));
})(VidyanoStarterKit || (VidyanoStarterKit = {}));
