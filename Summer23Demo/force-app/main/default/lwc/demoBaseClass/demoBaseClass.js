import { LightningElement } from 'lwc';
import textColors from './textColors.css';

export default class DemoBaseClass extends LightningElement {
	// *********************
	// Properties
	// *********************
	
	static stylesheets = [textColors];
}
