import logo from '@salesforce/resourceUrl/Tforce_logo';
import forgotPassword from'@salesforce/apex/ForgotPassController.customForgotPassword'
import { LightningElement, track } from 'lwc';

export default class Temp1ForgotPassComp extends LightningElement {
    @track company_logo = logo;
    @track username = '';
    errorMessage = ''; // I will show occure an error
    handleUsername(event){
        this.username = event.target.value;
    }

    
    handlesend(){
        console.log(this.username);
        forgotPassword({username:this.username})
        .then(response => {
            this.errorMessage = response
            console.log('response', response)
        })
        .catch(error => {
            this.errorMessage = error.body
            console.log('error', error)
        })
    }
}