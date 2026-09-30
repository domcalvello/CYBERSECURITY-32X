import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("/Users/domcalvello/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");

const browser = await chromium.launch({ headless: true });

async function capture(name, width, height) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  page.on("console", message => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.goto("http://127.0.0.1:4173", { waitUntil: "networkidle" });
  await page.click("#boot-start");
  await page.waitForTimeout(150);
  for (const chapter of await page.$$(".chapter")) {
    await chapter.scrollIntoViewIfNeeded();
    await page.waitForTimeout(40);
  }
  await page.evaluate(async () => {
    await Promise.all([...document.images].map(image => image.complete
      ? Promise.resolve()
      : new Promise(resolve => {
          image.addEventListener("load", resolve, { once: true });
          image.addEventListener("error", resolve, { once: true });
        })));
    scrollTo(0, 0);
  });
  await page.waitForTimeout(100);
  await page.screenshot({ path: `.impeccable/review/${name}.png`, fullPage: true });
  if (name === "desktop") {
    for (const slug of ["power-deck", "discovery", "title-screen", "boss", "hijack", "takedown"]) {
      await page.locator(`#${slug}`).screenshot({ path: `.impeccable/review/detail-${slug}.png` });
    }
    await page.locator("#recovered-video").screenshot({ path: ".impeccable/review/detail-gameplay.png" });
    await page.locator(".archive-footer").screenshot({ path: ".impeccable/review/detail-footer.png" });
  }
  if (name === "mobile") {
    await page.locator("#title-screen").screenshot({ path: ".impeccable/review/detail-mobile-title.png" });
    await page.locator("#takedown").screenshot({ path: ".impeccable/review/detail-mobile-takedown.png" });
  }
  const report = await page.evaluate(() => ({
    title: document.title,
    chapters: document.querySelectorAll(".chapter").length,
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    buttons: document.querySelectorAll("button").length,
    images: [...document.images].map(image => ({ src: image.getAttribute("src"), loaded: image.complete && image.naturalWidth > 0 })),
    overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth
  }));
  console.log(JSON.stringify({ name, errors, report }, null, 2));
  await page.close();
}

await capture("desktop", 1440, 1000);
await capture("mobile", 390, 844);
await browser.close();
