public with sharing class GetUserDetails {
    public GetUserDetails() {

    }
    @AuraEnabled(cacheable=true)
    public static string getUserById(ID userId){
        try {
            List<User>  users = 
            [
                SELECT 
                AboutMe,
                Address,
                Alias,
                FirstName,
                LastName,
                CommunityNickname,
                Phone,
                Username,
                Title,
                ContactId
                FROM 
                User 
                WHERE 
                ID =: userId
            ];
            System.debug( JSON.serialize(users));
            return JSON.serialize(users);
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}