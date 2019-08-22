---
layout: post
title: "Finding out about Jekyll"
date: 2019-08-07
---

# Date: 07 August 2019

## Task
Since I cannot use php, I need an alternative. <br><br>
Today, I learnt about **Jekyll** and how i can use include.  First I needed to make an `_includes` directory and then I set about making the files.
<br>
<br>
Where php uses require, **Jekyll** uses include within double %, which in turn is within curly braces as follows:
  \{% include [insert name of html file] %}\.  Note, you will not need the [] brackets. 
<br>
Like php, i can now create blocks of code and then use include to call them when i need them.  I can also us different default templates and storm them in the `_Layouts` folder. <br>
I made a `_layouts` directory and added a default template to it. <br><br>
This will make maintenance much easier now. 
<br>
<br>
Resources:<br>
This gets me stared and has [info about blog](http://jmcglone.com/guides/github-pages/)
<br>
Video lessons on [Jekyll](https://youtu.be/HfcJeRby2a8)
