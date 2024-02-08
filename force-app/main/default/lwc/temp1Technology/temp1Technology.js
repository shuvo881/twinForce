import { LightningElement } from 'lwc';
import TechnologyPic from '@salesforce/resourceUrl/Tech';
import Icon from '@salesforce/resourceUrl/Icon';
// Example :- import TRAILHEAD_LOGO from '@salesforce/resourceUrl/trailhead_logo';

export default class Temp1Technology extends LightningElement {
    techPic = TechnologyPic+'/Technology.png';

    vueJs = Icon+'/Icons/vue.png';
    java = Icon+'/Icons/java.png';
    react = Icon+'/Icons/react.png';
    angular = Icon+'/Icons/angular.png';
    python = Icon+'/Icons/python.png';
    azure = Icon+'/Icons/azure.png';
    net = Icon+'/Icons/net.png';
    aws = Icon+'/Icons/aws.png';
    flutter = Icon+'/Icons/flutter.png';
    go = Icon+'/Icons/go.png';
    
    
}