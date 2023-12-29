# Post with an image

I will use this post to test the ability to add images to posts:

<div class="post-figure">
<figure>
    <img src="./20180201_072252.jpg"
         alt="Dnipro, Ukraine"
        >
    <figcaption>A flight over mouth of a Dnipro river and Black Sea</figcaption>

</figure>    
</div>

## Update December 29th 2023

So far I managed to do the following in regards to images: when writer decides to add an image, they should copy it to the folder of the draft article. When the upgrade.mjs script is executed, then all the images are minimized using imagemin and resized to 800px using jimp and then moved to the root folder of the website.

<code> 
import imagemin from "imagemin";<br>
import imageminJpegtran from "imagemin-jpegtran";<br>
import imageminPngquant from "imagemin-pngquant"; </code>

Next steps would probably require the creation of an image database, where all the images have their characteristics stores, like location, descritpions, etc.. Will keep you posted
