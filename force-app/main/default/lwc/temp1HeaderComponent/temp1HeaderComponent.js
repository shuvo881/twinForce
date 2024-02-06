import { LightningElement, wire, track } from 'lwc';
import logo from '@salesforce/resourceUrl/Tforce_Vertical_Logo';
import icon_destination from '@salesforce/resourceUrl/icon_destination';
import icon_authentic from '@salesforce/resourceUrl/icon_authentic';
import icon_happy from '@salesforce/resourceUrl/icon_happy';
import doLogin from '@salesforce/apex/CommunityAuthController.doLogin';


import { CurrentPageReference } from 'lightning/navigation';

export default class Temp1HeaderComponent extends LightningElement {

    @track company_logo = logo;
 @track icon_happy = icon_happy;
 @track icon_authentic = icon_authentic;
  @track icon_destination = icon_destination;



  connectedCallback() {
   // window.addEventListener('resize', this.myFunction);
}

// myFunction = () => {
//     if(window.innerWidth>1099)
//     {
//       this.template.querySelector('.second-menu').classList.add('noDisplay');
//     }
//     else{
// this.template.querySelector('.second-menu').classList.remove('noDisplay');
// this.template.querySelector('.nav-second-menu').classList.add('noDisplay');
//     }
// };

clickNav(event)
{
  const clickedParent = event.currentTarget;
console.log(clickedParent);
   if (window.innerWidth <= 1099) {
      if (clickedParent.classList.contains("active"))
 {
  clickedParent.classList.remove('active');
  clickedParent.querySelector('.second-menu').classList.remove('forceDisplay');

      } else {
        clickedParent.classList.add('active');
        clickedParent.querySelector('.second-menu').classList.add('forceDisplay');
        

      }
  }
}





handleMenu()
  {
    this.template.querySelector('.header-of-page').classList.add('show-phone-menu');
  }

  handleClose()
  {
    this.template.querySelector('.header-of-page').classList.remove('show-phone-menu');
  }


}