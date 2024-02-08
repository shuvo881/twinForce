import { LightningElement, api, track } from 'lwc';
import getUserDetail from'@salesforce/apex/GetUserDetails.getUserById';
export default class Temp1UserDetail extends LightningElement {
    @track firstName;
    @track lastName;
    @track userName;
    @track role;
    @track alias;
    @track aboutUser;
    @track title;
    @track address;
    @track phone;
    @track email;
    @api userId ='0055j00000CDGar';
    connectedCallback()
    {
        // if(window.location.href){
        //     try{
        //         const url = new URL(window.location.href);
        //         const searchParam = JSON.stringify(url.search);
        //         const searchId = searchParam.substring(5,searchParam.length-1);
        //         console.log('Search Id is',searchId);
        //         this.id = searchId;
        //     } catch(e){
        //         if(console){
        //             console.log(JSON.stringify(e));
        //         }
        //     }
        // }
        getUserDetail({userId: this.userId})
        .then((data)=>{
            const users = JSON.parse(data)
            console.log("User detail: ",users);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}