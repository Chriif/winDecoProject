Feature: [Admin] Client B2B - Shop detail view

Feature Login page will work depending on the user credentials.

        Background:
            Given A web browser is at the config application
        Scenario: Log To application Error Check
             When the user enter the username "user_1" and password "user_1"
             Then Verify the page message is "Groupements de familles disponibles !" test