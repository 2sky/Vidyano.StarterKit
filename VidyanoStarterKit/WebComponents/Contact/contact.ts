namespace VidyanoStarterKit.WebComponents {
    @Vidyano.WebComponents.WebComponent.register({
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
	export class Contact extends Vidyano.WebComponents.WebComponent {
        readonly contact: Vidyano.PersistentObject; private _setContact: (contact: Vidyano.PersistentObject) => void;

        async attached() {
            super.attached();

            this.app.importComponent("PersistentObjectTab");

            await this.service.initialize;
            this._setContact(await this.service.getPersistentObject(null, "Contact", undefined, true));
        }

        private _computeCanSend(busy: boolean, isDirty: boolean): boolean {
            return isDirty && !busy;
        }

        private async _send() {
            try {
                await this.contact.getAction("Save").execute({
                    throwExceptions: true
                });

                if (this.contact.notification)
                    this.app.showAlert(this.contact.notification, this.contact.notificationType, this.contact.notificationDuration);
            }
            catch(e) {
                this.app.showAlert(e, Vidyano.NotificationType.Error);
            }
        }
    }
}