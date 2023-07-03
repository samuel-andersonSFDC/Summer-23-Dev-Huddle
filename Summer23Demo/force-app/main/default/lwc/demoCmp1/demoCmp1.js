import { LightningElement, api } from 'lwc';

// eslint-disable-next-line @lwc/lwc/no-leading-uppercase-api-name
export default class DemoCmp1 extends LightningElement {
	// *********************
	// Properties
	// *********************

	@api $demoProperty1;
	// eslint-disable-next-line @lwc/lwc/valid-api
	@api _demoProperty2;
}
