import { defaults } from "./modules/defaults";
import { forms } from "./modules/forms";
import { modals } from "./modules/modals";
import { toogle } from "./modules/toogle";
import { brandsList } from "./modules/brands-list";
import { checkboxs } from "./modules/checkboxs";
import { tags } from "./modules/tags";
import { price } from "./modules/price";
import { config } from "./config";

var App = () => {};

App.prototype.init = () => {

	defaults.init();
	forms.init();
	modals.init();

	config.log('app init')
	
};

export { App };