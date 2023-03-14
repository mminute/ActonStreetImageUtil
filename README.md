# ActonStreetImageUtil
Small browser function to grab image src from the house website and another to download them

To use:
Go to the website `https://www.3012acton.com/`
Go to photos and click on the first image to enter the gallery
Open the console and past the code from `browserUtil.js`
Run `addButton()`
Click through the image using the `GET SRC` button
Once you've cycled through all the images enter `srcs` in the console to get the array of image srcs
Copy the array
Open `nodeUtil.js` and paste the array into the `srcs` variable
Update `folderPath` to the folder you want to save the images to
Run the node script and the images are downloaded to your folder