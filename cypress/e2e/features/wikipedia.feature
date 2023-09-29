Feature: Wikipedia Search

  Scenario: Perform the search on Google and validate results on Wikipedia
    Given the user opens the Google homepage
    When the user searches for "automatización"
    And the user clicks on the Wikipedia link in the search results
    Then the user should be on the Wikipedia page
    And the user should find the year of the first automatic process
    And the user takes a screenshot of the Wikipedia page