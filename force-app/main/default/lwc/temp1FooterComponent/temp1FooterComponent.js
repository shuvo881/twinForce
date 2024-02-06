import { LightningElement, track } from 'lwc';
import logo from '@salesforce/resourceUrl/Tforce_Vertical_Logo';
export default class Temp1FooterComponent extends LightningElement {
    @track company_logo = logo;
    renderedCallback() {
        const style = document.createElement('style');
        style.innerText = `.slds-map {
        min-width: 0 !important;
        }`;
        this.template.querySelector('lightning-map').appendChild(style);
    }
        mapMarkers = [
            {
                location: {
                    Street: '1 Market St',
                    City: 'San Francisco',
                    Country: 'USA',
                },
            },
        ];
}