"use strict";
var VidyanoStarterKit;
(function (VidyanoStarterKit) {
    var WebComponents;
    (function (WebComponents) {
        var Wrapper = /** @class */ (function (_super) {
            __extends(Wrapper, _super);
            function Wrapper() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Wrapper.prototype._onUpdateMenu = function (e, sections) {
                this.set("sections", sections);
            };
            Wrapper.prototype._getMenuFromSection = function (section) {
                return section.getAttribute("menu");
            };
            Wrapper.prototype._toggleMenu = function () {
                var menuOpen = this.get("menuOpen");
                this.set("menuOpen", !menuOpen);
            };
            Wrapper.prototype._signIn = function () {
                document.location.assign(Vidyano.Path.routes.rootPath + "admin/");
            };
            Wrapper.prototype._scrollIntoView = function (e) {
                var section = e.model.section;
                if (e.model.index > 0)
                    section.scrollIntoView({ behavior: "smooth" });
                else
                    this.$$("#scroller").scrollToTop(0, true);
            };
            Wrapper = __decorate([
                Vidyano.WebComponents.WebComponent.register({
                    properties: {
                        sections: Array,
                        menuOpen: {
                            type: Boolean,
                            value: false
                        }
                    },
                    listeners: {
                        "home-menu": "_onUpdateMenu"
                    },
                    mediaQueryAttributes: true
                }, "vsk")
            ], Wrapper);
            return Wrapper;
        }(Vidyano.WebComponents.WebComponent));
        WebComponents.Wrapper = Wrapper;
    })(WebComponents = VidyanoStarterKit.WebComponents || (VidyanoStarterKit.WebComponents = {}));
})(VidyanoStarterKit || (VidyanoStarterKit = {}));
