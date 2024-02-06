import { LightningElement, wire, track } from 'lwc';
import logo from '@salesforce/resourceUrl/Tforce_logo';
import doLogin from '@salesforce/apex/CommunityAuthController.doLogin';


import { CurrentPageReference } from 'lightning/navigation';

export default class Temp1LoginComponent extends LightningElement {


    @track company_logo = logo;

    username = '';
    password = '';
    error;
    errorCheck = false;
    errorMessage;
    startURL = '';

    @wire(CurrentPageReference)
        getStateParameters(currentPageReference) {
        if (currentPageReference) {

            console.log(currentPageReference.state);

            this.startURL = currentPageReference.state?.startURL;
        }
    }

    handleUsername(event){
        this.username = event.target.value;
    }

    handlePassword(event){
        this.password = event.target.value;
    }

    handleLogin(event){

        if(this.username && this.password){
 
            doLogin({ username: this.username, password: this.password, startURL : this.startURL })
            .then((result) => {
                console.log(result);
                if(result && result.status == 'success'){
                    window.location.href = result.value;
                }
                else{
                    this.errorCheck = true;
                    this.errorMessage = result.value;
                }
            })
            .catch((error) => {
                console.error(error);
                this.error = error;      
                this.errorCheck = true;
                this.errorMessage = error.body.message;
            });
    
        }
        else{
            this.errorCheck = true;
            this.errorMessage = 'Please enter Username and Password!';
        }
    }


}