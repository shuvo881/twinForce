import { LightningElement, track } from 'lwc';
import logo from '@salesforce/resourceUrl/Tforce_logo';

export default class Temp1SignUp extends LightningElement {
    @track company_logo = logo;

    firstName = '';
    lastName = '';
    email = '';
    password = '';
    city = '';
    phone = '';
    street = '';
    state = '';
    zip = '';
    error;
    errorCheck = false;
    errorMessage;
    startURL = '';

    selectedOption;
    picklistOptions = [
        { label: 'Bangladesh', value: 'A' },
        { label: 'USA', value: 'B' },
        { label: 'India', value: 'C' },
        { label: 'Australia', value: 'D' },
    ];

    handleChange(event) {
        this.selectedOption = event.detail.value;
        // Handle selected option change
        // You can perform any actions here based on the selected value
    }
}