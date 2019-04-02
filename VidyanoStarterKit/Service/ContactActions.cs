using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Vidyano.Core.Extensions;
using Vidyano.Service;
using Vidyano.Service.Charts;
using Vidyano.Service.Repository;

namespace VidyanoStarterKit.Service
{
    public class ContactActions : PersistentObjectActionsReference<VidyanoStarterKitEntityModelContainer, object /* replace with .NET class if needed: Contact */>
    {
        protected override void SaveNew(PersistentObject obj)
        {
            if (!CheckRules(obj))
                return;

            obj.Attributes.Run(a => a.SetValue(string.Empty));
            obj.AddNotification("Thanks for contacting us. We will get in touch with you shortly!", NotificationType.OK);
            
            //base.SaveNew(obj);
        }
    }
}