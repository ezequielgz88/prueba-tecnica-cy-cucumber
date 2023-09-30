Feature: Google Search

  Scenario Outline: Search Google for the word “automation” and validate the results
    Given the user opens the Google homepage
    When the user searches for "<criteria>"
    And the user clicks on the "<pageLink>" link in the search results
    Then the user should be on the "<web>" page
    And the user should find the text "<validateText>" on the page

    Examples:
      | criteria        | pageLink  | web       | validateText                                                                        | 
      | automatización  | Wikipedia | wikipedia | en 1785, convirtiéndose en el primer proceso industrial completamente automatizado. |
      | automatización  | Wikipedia | Wikipedia | en qué año se hizo el primer proceso automático                                     |