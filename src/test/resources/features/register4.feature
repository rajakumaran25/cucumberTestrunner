Feature: Add customer flow

  Scenario Outline: validate the add customer option
    Given user launch the browser
    And user should be in telecom page
    When user should enter all the details "<fname>","<lname>","<mail>","<adrs>","<phone>"
    Then user should be displayed id is generated

    Examples: 
      | fname  | lname   | mail              | adrs    | phone      |
      | raja   | kumaran | raja@gmail.com    | chennai | 7402458544 |
      | shyam  | balaji  | shyam@gmail.com   | chennai | 9864237515 |
      | hazeeb | mhd     | mhd.hzb@gmail.com | chennai | 9967342845 |
