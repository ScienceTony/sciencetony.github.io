---
layout: post
postTitle: "Creating Web App Manifest"
keywords: "Web manifest, Computing, Tony McDonald, Computer Science, Sciencetony, Learning Curve, Journal"
description: "A journal post, from Tony McDonald, about using a web manifest to  pass some google audits."
date: 2020-02-19
---

## Task outline
1. Validate each webpage of sciencetony.github.io 
2. Test each page using audits within Google developer tools.
3. Reduce any errors, warnings and suggestions thrown by Google developer tools 
for my webpage. Holding down <kbd>Option</kbd> + <kbd>Cmd / Ctl</kbd>  + <kbd>I</kbd> will open Google developer tools; obviously, in Chrome browser.

About PageSpeed Insights [PageSpeed Insights](https://developers.google.com/speed/docs/insights/v5/about) 

## Output or results of activity
A particular point of interest was the 'Progressive Web App (PWA)' section of the tests.  
This was failing on many issues:
* Fast and reliable.
* Installable.
* PWA Optimized.


I decided to investigate PWA Optimized, which meant reading and researching on the internet until I found a solution: 
create a web app manifest.
After creating the web app manifest, all the errors in the PWA Optimized section went away and 'Web app manifest meets the installability requirements' in the 'Installable' section.
However, problems related to the service worker remain since it is about to be depreciated. 

## Comments on knowledge and skills demonstrated 
This took a lot of reading and researching on the internet until I found a solution. 
Once I found a solution, it was simple to understand the code and instructions in order to make the final solution workable for my needs. 
This involved altering the code in the webmaster file, which I chose to save as a JSON extension.  It turns out that the code is JSON, yet I could have saved it as a webmaster extension.
Once I added this to the site, I referenced it in the header, this solved most of the problem. Some warnings in the PWA still remain because of the service worker. Notably, the file has some mandatory aspects such as icon for splash screens and name amongst others. 
Now, when I went to developer tools in chrome, under the 'Application tab' I could see the web manifest.

### Resources:
[MDN Web docs](https://developer.mozilla.org/en-US/docs/Web/Manifest)<br>
[web.dev](https://web.dev/add-manifest/#create-the-manifest.webmanifest-file)<br>
[PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) 
