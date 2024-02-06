public with sharing class CommunityAuthController  {
  
    @AuraEnabled
    public static Map<String, String> doLogin(String username, String password, String startURL){
        Map<String, String> returnMap = new Map<String, String>();
        try {
            
            if(startURL == null || startURL == ''){
                startURL = System.Label.Template1_Community_URL;
            }
            ApexPages.PageReference pageRef = Site.login(username, password, startURL);

            if(pageRef != null){ 
                returnMap.put('status', 'success');
                returnMap.put('value', pageRef.getUrl());
                return returnMap;
            }

            throw new CalloutException();
        } 
        catch (Exception e) {
            system.debug('e.getMessagelogin+   '+e.getMessage());
            returnMap.put('status', 'failed');
            returnMap.put('value', e.getMessage());
            return returnMap;
        }
    }

    @AuraEnabled
    public static String forgotPassword(String username) {
        boolean success = Site.forgotPassword(username);
        
        if (success) {
            return 'success';
        } else {
            return 'Invalid Email Address!';
        }
    }

    @AuraEnabled
    public static Map<String, String> agentRegister(String firstName, String middleName, String lastName, String email, String phone, Date dob, String street, String city, String state, String zipCode, String country, String agency) {
        
        System.debug(email);
        List<Contact> conList = [Select Id, Email From Contact Where Email = :email ];
        Map<String, String> returnMap = new Map<String, String>();
        System.debug(conList.size());
        if (conList.size() > 0) {

            returnMap.put('status', 'failed');
            returnMap.put('value', '/AgentRegistrationUnsuccess');
            return returnMap;
        } 
        else{
            Contact con = new Contact();
            con.FirstName = firstName; 
            con.LastName = lastname;
            // con.MiddleName = middlename;
            // con.Email = email;
            // con.Phone = phone;
            // con.Street__c = street;
            // con.City__c = city;
            // con.State__c = state;
            // con.zipcode__c = zipCode;
            // con.Country__c = country;
            // con.Date_of_Birth__c = dob;
            // con.Travel_Agency_Name__c = agency;

            insert con;

            returnMap.put('status', 'success');
            returnMap.put('value', '/s/CheckAgentRegisterEmail');
            return returnMap;
        }
    }
}