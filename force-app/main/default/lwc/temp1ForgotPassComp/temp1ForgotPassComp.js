import logo from '@salesforce/resourceUrl/Tforce_logo';

import { LightningElement, track } from 'lwc';

export default class Temp1ForgotPassComp extends LightningElement {
    @track company_logo = logo;
    username = '';
    errorMessage = 'an error';
    handleUsername(event){
        this.username = event.target.value;
    }

    handleLogin(){

    }
}