namespace VidyanoStarterKit.WebComponents {
    @Vidyano.WebComponents.WebComponent.register({
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
	export class Wrapper extends Vidyano.WebComponents.WebComponent {
        private _onUpdateMenu(e: CustomEvent, sections: HTMLElement[]) {
            this.set("sections", sections);
        }

        private _getMenuFromSection(section: HTMLElement): string {
            return section.getAttribute("menu");
        }

        private _toggleMenu() {
            const menuOpen = <boolean>this.get("menuOpen");
            this.set("menuOpen", !menuOpen);
        }

        private _signIn() {
            document.location.assign(Vidyano.Path.routes.rootPath + "admin/");
        }

        private _scrollIntoView(e: TapEvent) {
            const section = <HTMLElement>e.model.section;
            if (e.model.index > 0)
                section.scrollIntoView({behavior: "smooth"});
            else
                (<Vidyano.WebComponents.Scroller>this.$$("#scroller")).scrollToTop(0, true);
        }
    }
}