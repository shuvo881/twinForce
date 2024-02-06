import banner_imgs_file from '@salesforce/resourceUrl/banner_imgs';

import { LightningElement } from 'lwc';

export default class Temp1BannerComp extends LightningElement {
    banner_imgs = [
        {id: 1, url: banner_imgs_file + '/Banner_img/1.jpg', alt: 'image 1'},
        {id: 2, url: banner_imgs_file + '/Banner_img/2.jpg', alt: 'image 2'},
        {id: 3, url: banner_imgs_file + '/Banner_img/3.png', alt: 'image 3'},
        {id: 4, url: banner_imgs_file + '/Banner_img/4.jpg', alt: 'image 4'},
        {id: 5, url: banner_imgs_file + '/Banner_img/5.jpg', alt: 'image 5'},
        {id: 6, url: banner_imgs_file + '/Banner_img/6.jpg', alt: 'image 6'},
        {id: 7, url: banner_imgs_file + '/Banner_img/7.jpeg', alt: 'image 7'},
        {id: 8, url: banner_imgs_file + '/Banner_img/8.jpeg', alt: 'image 8'},
    ]
    img1 = banner_imgs_file + '/Banner_img/1.jpg'
    img2 = banner_imgs_file + '/Banner_img/2.jpg'
    img3 = banner_imgs_file + '/Banner_img/5.jpg'

    handleHireDevClick(event){
        
    }
}