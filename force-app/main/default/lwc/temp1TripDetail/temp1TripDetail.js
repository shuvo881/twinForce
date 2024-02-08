import { LightningElement, track, api } from 'lwc';

export default class Temp1TripDetail extends LightningElement {
    @track country;
    @track tripName;
    @track tripLocation;
    @track tripDestination;
    @track previousPrice;
    @track tripPrice;
    @track tripDuration;
    @track pricePerPerson;
    @track tripStatus;
    @track tripDesc;
    @track numOfSpots;
    @track spotsBooked;
    @track availableSpots;
    @track daysUntilTripStarts;
    @track minimumDeposit;
    @track tripStartsFrom;
    @track tripEnds;

    //Replace the id value with a valid Id

    // @api id = 'a005f00000ADOoUAAX';
    //using connected callback
    connectedCallback() {
        //Note: Replace below code with custom apex method 

        // getOneTrip({tripId: this.id})
        // .then((data)=>{
        //     const trips = JSON.parse(data)
        //     // console.log("Fetched trips: ", trips);
        //     this.country =  trips[0].Country__c;
        //     this.tripName = trips[0].Name;
        //     this.tripLocation = trips[0].City__c;
        //     this.tripDestination = trips[0].Destination__c;
        //     this.tripPrice = trips[0].Price__c;
        //     this.tripDuration = trips[0].Trip_Duration__c;
        //     this.pricePerPerson = trips[0].Price_Per_Person__c;
        //     this.tripStatus = trips[0].Status__c;
        //     this.tripDesc = trips[0].Trip_Description__c;
        //     this.numOfSpots = trips[0].Num_of_Total_Spots__c;
        //     this.spotsBooked = trips[0].Num_of_Spots_Booked__c;
        //     this.availableSpots = trips[0].Num_of_Available_Spots__c;
        //     this.daysUntilTripStarts = trips[0].Days_Until_Trip_Starts__c;
        //     this.minimumDeposit = trips[0].Minimum_Deposit_Required__c;
        //     this.tripStartsFrom = trips[0].Start_Date__c;
        //     this.previousPrice = trips[0].Previous_Price__c;
        //     this.tripEnds = trips[0].End_Date__c;
        // })
        // .catch((err)=>{
        //     console.log(err);
        // })
    }

    //using wire (works)
    // @wire(getOneTrip, { tripId: '$id' })
    // wiredTrip({ error, data }) {
    //     if (data) {
    //         this.country = data[0].Country__c;
    //         this.tripName = data[0].Name;
    //         this.tripLocation = data[0].City__c;
    //         console.log(data);
    //     } else if (error) {
    //         console.error('Error retrieving record:', error);
    //     }
    // }
}