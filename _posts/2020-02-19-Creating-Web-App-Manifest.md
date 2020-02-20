---
layout: post
title: "Creating Web App Manifest"
date: 2020-02-19
---

## Task outline
<hr class="journalHR">
1. Test each webpage of sciencetony.github.io
2. Reduce any errors, warnings and suggestions thrown by Google [PageSpeed Insights](https://developers.google.com/speed/docs/insights/v5/about) 
for my webpage.
3. Test each page using audits within google developer tools.

## Output or results of activity
<hr class="journalHR">
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
<hr class="journalHR">
Reading and researching on the internet until I found a solution. 
Once I found a solution, it was simple to understand the code and instructions in order to make the final solution workable for my needs. 
This involved altering the code in the webmaster file, which I chose to save as a JSON extension.  It turns out that the code is JSON, yet i code save it as a webmaster extension.
Once I added this to the site, I referenced it in the header and this solved the problem. The file has some mandatory aspects such as icon for splash screens and name amongst others. 
Now, when I went to developer tools in chrome, under the 'Application tab' I could see the web manifest.

### Resources:
[MDN Web docs](https://developer.mozilla.org/en-US/docs/Web/Manifest)<br>
[web.dev](https://web.dev/add-manifest/#create-the-manifest.webmanifest-file)
