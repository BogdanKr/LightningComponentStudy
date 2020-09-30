/**
 * Created by Bogdan on 28.09.2020.
 */

public with sharing class MyContactListController {
    @AuraEnabled
    public static List<Contact> getContacts(Id recordId) {
        return [SELECT Id, FirstName, LastName, Email, Phone From Contact Where AccountId = :recordId];
    }

}