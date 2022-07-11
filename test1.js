const screenRecorderOptions = {
 followNewTab: true,
 fps: 120,
 recordDurationLimit:960
}

const puppeteer = require('puppeteer');
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const recorder = new PuppeteerScreenRecorder(page , screenRecorderOptions);
  await recorder.start('./simple.mp4'); // supports extension - mp4, avi, webm and mov
  await page.goto('https://www.kikk.be/');


  await recorder.stop();
  await browser.close();
})();






