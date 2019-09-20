$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/register4.feature");
formatter.feature({
  "name": "Add customer flow",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "validate the add customer option",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launch the browser",
  "keyword": "Given "
});
formatter.step({
  "name": "user should be in telecom page",
  "keyword": "And "
});
formatter.step({
  "name": "user should enter all the details \"\u003cfname\u003e\",\"\u003clname\u003e\",\"\u003cmail\u003e\",\"\u003cadrs\u003e\",\"\u003cphone\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should be displayed id is generated",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "mail",
        "adrs",
        "phone"
      ]
    },
    {
      "cells": [
        "raja",
        "kumaran",
        "raja@gmail.com",
        "chennai",
        "7402458544"
      ]
    },
    {
      "cells": [
        "shyam",
        "balaji",
        "shyam@gmail.com",
        "chennai",
        "9864237515"
      ]
    },
    {
      "cells": [
        "hazeeb",
        "mhd",
        "mhd.hzb@gmail.com",
        "chennai",
        "9967342845"
      ]
    }
  ]
});
formatter.scenario({
  "name": "validate the add customer option",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.user_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be in telecom page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_should_be_in_telecom_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter all the details \"raja\",\"kumaran\",\"raja@gmail.com\",\"chennai\",\"7402458544\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_should_enter_all_the_details(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be displayed id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_should_be_displayed_id_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "validate the add customer option",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.user_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be in telecom page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_should_be_in_telecom_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter all the details \"shyam\",\"balaji\",\"shyam@gmail.com\",\"chennai\",\"9864237515\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_should_enter_all_the_details(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be displayed id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_should_be_displayed_id_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "validate the add customer option",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.user_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be in telecom page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_should_be_in_telecom_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter all the details \"hazeeb\",\"mhd\",\"mhd.hzb@gmail.com\",\"chennai\",\"9967342845\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_should_enter_all_the_details(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be displayed id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_should_be_displayed_id_is_generated()"
});
formatter.result({
  "status": "passed"
});
});