Feature: Greeting

  Scenario: Placing the order
  Given Open Amazon Homepage
  When page opens, it should have nagivation bar
    Then verify page titile
    When search the product
    Then verify search page titile
    When click on add to card product
    Then check product added to orders page