---
layout: post
title: "Compress Your Images To Speed Up Your webpage"
date: 2019-09-4
---

## Task outline
Check webpage load time and speed up site.  In order to achieve this, 
First, check the speed of my site using [pageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) from Google.
Second, act upon analysis feedback and carry out at least one suggestion made.

## Output or results of activity
I spent many hours looking for different ways to check the speed of my site but Googles pageSpeed insights was by far the best. 
The google resource made several suggestions including to '_Serve images in next-gen formats_', which i followed up on. 
However, the recommended formats do not cover all the browsers. For instance, webP does not work with Safari! The problem I have is that the images in the slideshow are selected by the JS file, which is making it difficult to select the needed image for view port size and image type.  It looks as though i will need to redo the slideshow using html instead of javaScript in order to use the picture element. Not to be deterred, I found a site that compresses jpeg file called [compressjpeg.com](https://compressjpeg.com/) and reduced the size of the image files by up to 85%.  I further reduced file size by reducing the pixel size of the images. This will have to do until i change the slideshow from javaScript to html and css. 

## Comments on knowledge and skills demonstrated 
* Using the internet as an information resource.  
* Knowing which sites give or are likely to give the best information. 
* Knowing to check out all scenarios.
* Determination. 

## What I Learned
* There are next gen formats for images, but they do not yet cover all browsers. See [webP browser support](https://caniuse.com/#feat=webp), [jpeg 2000](https://caniuse.com/#feat=jpeg2000) and [jpeg XR](https://caniuse.com/#feat=jpegxr).  This is very reminiscent of the browser wars of the 1980s.  
* Next gen formats.
* WebP.
* jpeg 2000.
* jpeg XR.

Browser detection is possible using the picture element. 

### Resources:
[pageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)<br>
[WebP](https://developers.google.com/speed/webp/faq#how_can_i_detect_browser_support_for_webp)<br>
[Webp FAQ](https://developers.google.com/speed/webp/faq#how_can_i_detect_browser_support_for_webp)

