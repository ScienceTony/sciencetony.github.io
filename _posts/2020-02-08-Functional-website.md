---
layout: post
title: "Functional website"
keywords: "js, javascript, functional, journal"
description: "My learning jounal while increasing the functionality of a website"
date: 2020-02-08
---

## Task outline
Make the website functional by adding an interactive quiz. <br>  
__Complete the following:__
* Use multiple choice answers and a submit button for each question.
* After submitting, button must be greyed out.
* Feedback is either a:
    * green tick and green background to correct answer. text.
    * red cross and red background to incorrect answer text.
* Show number of correct answers and total number of questions answered after each question. 
* Calculate parentage (user most invoke this by pressing a button).  This button must be greyed out until all questions have been attempted.
* This must be created as a card and placed on the 'My Faith' page. 
* All code must be validated. <br> 

__Technologies to be used:__
* HTML
* CSS
* JavaScript (JS)

## Output or results of activity
[Quiz](https://sciencetony.github.io/my_faith.html) <br> 
The quiz works as planed. 

I found this an interesting project to complete. 

## Comments on knowledge and skills demonstrated 
I used a lot of already learned knowledge to create the HTML and style with CSS. However, I needed to learn more JS in order to complete the project. This involved searching the internet and finding suitable learning and resource sites. For this project I used a lot of functions and both local and global variables. With some thought, I was able to put some code into functions that can be called by the other functions when needed; thus, cutting down on repeated code. I chose to used radio buttons for the questions since only one answer is needed to answer a question. <br>
<picture>
<source media="(min-width: 859px)" srcset="/images/forBlog/functionalWebsite/radio60.jpg">
<source media="(min-width: 573px)" srcset="/images/forBlog/functionalWebsite/radio40.jpg">
<img src="/images/forBlog/functionalWebsite/radio20.jpg" alt="Radio Buttons" style="width:auto;" >
</picture>
_Figure 1 example of question with radio buttons used to select an answer._ 
<br>

<picture>
<source media="(min-width: 905px)" srcset="/images/forBlog/functionalWebsite/CorIncor60.jpg">
<source media="(min-width: 603px)" srcset="/images/forBlog/FunctionalWebsite/CorIncor40.jpg">
<img src="/images/forBlog/FunctionalWebsite/CorIncor20.jpg" alt="Correct and incorrect answers" style="width:auto;" title="Correct and incorrect answers">
</picture>

_Figure 2 example of correct and incorrect answers._

__Areas investigated and things learned:__
* Using variables in HTML. This involved finding out about `<var>` elements. 
* I learned about using `word-break: break-all;` in CSS to brake up long unbroken example code displayed in HTML. This is handy for small view ports.
* Learned about and how to use the JS's `.createElement()` to creat a new HTML element. 
* Learned about JS's `.appendChild()`, which creates and appends a new element in the specified HTML.
* Learned about JS's `.disabled = true`, which is used to disable a button. 
* Code to indicate that JS functions where awaiting use by user activity. `/*eslint-env browser*/` at the top of the JS page stopped a lot of non-defined errors and `/* exported functionName */` stopped defined but never used errors, however, this needed to be placed just before the function or at the top of the page in a list separated by commers.
* I learned to tidy up the JS and make it easier to read. 

### Resources:
[w3schools](https://www.w3schools.com/) <br> 
[stackoverflow](https://stackoverflow.com/)

