import DemoBaseClass from 'c/demoBaseClass';
import demoCmp3 from './demoCmp3.css';

export default class DemoCmp3 extends DemoBaseClass {
	// *********************
	// Properties
	// *********************

	static stylesheets = [...super.stylesheets, demoCmp3];
}
