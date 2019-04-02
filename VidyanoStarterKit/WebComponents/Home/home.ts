namespace VidyanoStarterKit.WebComponents {
    interface IMember {
        title: string;
        name?: string;
        img?: string;
    }

    @Vidyano.WebComponents.WebComponent.register({
        properties: {
            team: {
                type: Array,
                readOnly: true
            }
        }
    }, "vsk")
	export class Home extends Vidyano.WebComponents.WebComponent {
        readonly team: IMember[]; private _setTeam: (team: IMember[]) => void;

        async attached() {
            super.attached();

            // Notify the wrapper of all available sections
            const sections = <HTMLElement[]>Array.prototype.slice.call(Polymer.dom(this.root).querySelectorAll("section"));
            this.fire("home-menu", sections);

            // Build Sample Data for Team Members
            this._setTeam(["CEO", "CTO", "Project Lead", "Software Engineer", "Software Engineer", "Graphics Designer", "Marketing"].map(title => ({title: title})));
            for (let i=0; i<this.team.length; i++) {
                const result = await fetch("https://randomuser.me/api/");
                const data = await result.json();
                this.set(`team.${i}.name`, `${data.results[0].name.first} ${data.results[0].name.last}`);
                this.set(`team.${i}.img`, data.results[0].picture.large);
            }
        }
    }
}