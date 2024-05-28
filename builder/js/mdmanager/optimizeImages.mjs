import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";
import imageminPngquant from "imagemin-pngquant";
import Jimp from "jimp";

export async function optimizeImages(allDraftFiles, draft, path) {
  await Promise.all(
    allDraftFiles.map(async (file) => {
      const finalImageFolderPath = `../pages/dist/${path}/${draft}-images/`;
      console.log(`final path: ${finalImageFolderPath + file}`);

      if (
        file.endsWith(".jpg") ||
        file.endsWith(".png") ||
        file.endsWith(".JPG" || file.endsWith(".PNG"))
      ) {
        await imagemin([`./drafts/${draft}/${draft}-images/${file}`], {
          destination: finalImageFolderPath,
          plugins: [
            imageminJpegtran(),
            imageminPngquant({
              quality: [0.6, 0.8],
            }),
          ],
        });

        //add watermarking with this tutorial: https://dev.to/skipperhoa/create-image-watermark-using-nodejs-23n3

        const image = await Jimp.read(finalImageFolderPath + file);
        const logo = await Jimp.read("./static/logo.png");

        await image.resize(800, Jimp.AUTO); // resize to max 800px
        await logo.resize(80, Jimp.AUTO); // resize to max 800px

        const X = 10;
        const Y = 10;
        image.composite(logo, X, Y, [
          {
            mode: Jimp.BLEND_SCREEN,
            opacitySource: 0.1,
            opacityDest: 1,
          },
        ]);

        //I need to change this to path, and not hardcode.

        await image.write(finalImageFolderPath + file);
      }
    })
  );
}
