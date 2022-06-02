# Lord of The Rings Quiz

The live website can be found [here](https://charlie-vf.github.io/lotr-quiz-game/).
<br>

*In this README, I use 'Lord of The Rings' and its acronym, 'LoTR', interchangeably.*

## **Purpose**

This eleven-question quiz game was designed mostly for fans of Lord of The Rings to test their knowledge of less obvious topics in the LoTR-universe.

## **User Design and Experience**

## User Goals

- The site should be easy to navigate
- The site should be responsive to all devices
- To test my knowledge of Lord of The Rings

## Design

### Colors

The main color scheme of this site is purple:

- The background is a paler shade: rgb(198, 172, 241)
- The options buttons are slightly darker: rgb(185, 123, 244)
- The headings are darker: rgb(126, 82, 237)

The font color is either black or white, dependent on which is best for accessibility

### Imagery

I used one image across both the main game page and the results area for consistency. It depicts Gandalf (a main character in the series) riding towards Minas Tirith, a major location of the final instalment: Return of the King.
I chose this image because it fits well with my chosen color scheme and does not detract from the main content of each page.
The image was taken from [Screen Rant](https://screenrant.com/lord-of-the-rings-interesting-facts-trivia-minas-tirith/).

### Font

The font used on this site is Oxanium, imported from [Google Fonts](https://fonts.google.com/specimen/Oxanium). I really like this font as it is neat and easy to read. 
I had considered using a font closer to the popular Elvish style writing from the source material, however, this would likely have been to elaborate a font and may have caused issues in reading.
I used text transform on the button texts of the main game page and results area for contrast and readability.

## Features

### Existing Features

### Home Page

The home page is very simple, featuring the site title and two buttons which link to the game itself and an information page which gives the user some information about Lord of The Rings.
By keeping it simple, this relates to the user goal of easy navigation.

### The Quiz

The quiz page features:
- A progress bar which updates as the user moves through the questions. I implemented this as it can be frustrating completing a quiz with no knowledge of how close you are to the end.
- A score count which adds ten (10) each time the user selects a correct answer.
- A center-aligned question
- Four (4) answer options to choose from
    - If the answer selected is correct, it will turn a light blue (rgb(28, 200, 177))
    - If the answer selected is incorrect, it will turn a burn orange (rgb(255, 85, 0))
    - There is a 500ms delay before the next question is displayed, giving the user time to see the result of their choice before moving on
    - On hover, the answer option bars will expand, creating a more visual representation of what is about to be selected
- A 'Restart Game' button which will bring the user back to Question One (1) and Score Zero (0)
    - This is useful in case an answer is selected by accident as it means the user does not have to waste a turn on the quiz game in order to try again

### Results page

The results page displays once the final question has been answered. It features the user's score, a congratulatory message and buttons to Restart the game or navigate back to the Home page.

## Changes and Updates

- Originally, the results area was a separate page called results.html. This was changed so the results area was part of the main game.html content as it prevents users from simply being able to enter the URL for the results area and reach it without first needing to complete the quiz.

## Future Instalments

- I will likely add many more questions in the future to really fill out the quiz game. Once this has begun, I will add a highscores page so users can keep track of how they have been doing.
    - I chose not to include a highscores page at the current stage as there are only eleven (11) questions, and I wanted to focus more on providing information and context for the quiz.

## Deployment and Cloning

This website was deployed using GitHub pages:
- In the GitHub repo, navigate to Settings
- Select Pages from the navigation bar
- Select branch:main and folder:/root
- Hit Save
- A link to the live website is provided (it may take a few minutes to go live)

The live website will update following any new commits and pushes to the main branch.
<br>

To clone this site and run it locally on your device:

- Copy the following text: git clone https://github.com/charlie-vf/lotr-quiz-game.git
- In your terminal, navigate to your chosen local directory
- Paste the copied text and hit enter


## Credits

### Sites Which Helped Me Out

- 
