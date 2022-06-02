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

I used one image across both the main game page and the results area for consistency

### Font

The font used on this site is Oxanium, imported from Google Fonts. I really like this font as it is neat and easy to read. 
I had considered using a font closer to the popular Elvish style writing from the source material, however, this would likely have been to elaborate a font and may have caused issues in reading.

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

The results page displays once the final question has been answered, 
