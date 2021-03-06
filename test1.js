const screenRecorderOptions = {
 followNewTab: true,
 fps: 30,
 recordDurationLimit:8000
}

const puppeteer = require('puppeteer');
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const recorder = new PuppeteerScreenRecorder(page, screenRecorderOptions);
  await recorder.start('./simple.mp4'); // supports extension - mp4, avi, webm and mov
  await page.goto('https://jmrsuarez.github.io/onepage/clock.html');


  await recorder.stop();
  await browser.close();
})();






