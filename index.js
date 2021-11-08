import * as Extensions from "trimble-connect-project-workspace-api";

//saludo
console.log("Hola");

/** Instantiate extension .
   *  @param window - Parent window object.
   *  @param callback - Listen the events with args from the parent.
   *  @param timeout - Connect timeout in milliseconds.
   *  @returns TCExtensionAPI - Object with the interaction methods.
*/
this.API = await Extensions.connect(
  window.parent,
  (event, args) => {
    switch (event) {
      case "extension.command":
        //"Command executed by the user: args.data"
        break;
      case "extension.accessToken":
        //"Accestoken or status: args.data"
        break;
      case "extension.userSettingsChanged":
        //"User settings changed!"
        break;
      default:
    }
  },
  30000
);

// Updating the menu object.
this.API.ui.setMenu("<mainMenuObject>:ExtensionMainMenu")
// Where <mainMenuObject> is the menu object and ExtensionMainMenu is the object type which you can find it in the documentation.

const mainMenuObject = {
    title: "Test extension app",
    icon: "https://qcingenieros.com/wp-content/uploads/2020/06/Icon.png",
    command: "main_nav_menu_cliked",
    subMenus: [
      {
        title: "Sub menu 1",
        icon: "https://qcingenieros.com/wp-content/uploads/2020/06/Icon.png",
        command: "submenu_1_clicked",
      },
      {
        title: "Sub menu 2",
        icon: "https://qcingenieros.com/wp-content/uploads/2020/06/Icon.png",
        command: "submenu_2_clicked",
      },
    ],
  };

mainMenuObject();