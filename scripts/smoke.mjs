import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("/Users/domcalvello/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const errors = [];
page.on("pageerror", error => errors.push(error.message));
await page.goto("http://127.0.0.1:4173", { waitUntil: "networkidle" });

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

for (const viewport of [
  { width: 1440, height: 1000 },
  { width: 980, height: 900 },
  { width: 680, height: 820 },
  { width: 390, height: 844 }
]) {
  await page.setViewportSize(viewport);
  const controls = await page.evaluate(() => {
    const power = document.querySelector("#power-switch").getBoundingClientRect();
    const lamp = document.querySelector("#power-lamp").getBoundingClientRect();
    return { power: { left: power.left, right: power.right }, lamp: { left: lamp.left, right: lamp.right } };
  });
  assert(controls.power.right <= controls.lamp.left, `Power controls overlap at ${viewport.width}px`);
}
await page.setViewportSize({ width: 1280, height: 800 });

assert(await page.locator(".chapter").count() === 19, "Expected 19 chapters");
const storyTextures = await page.locator(".story-panel").evaluateAll(nodes =>
  nodes.map(node => getComputedStyle(node).backgroundImage)
);
storyTextures.forEach((texture, index) => {
  const archive = index + 1;
  if (archive <= 5) assert(texture.includes("graph-paper"), `Archive ${archive} is missing graph paper`);
  else if (archive % 2 === 0) assert(texture.includes("black-plastic"), `Archive ${archive} should use black plastic`);
  else assert(texture.includes("notebook"), `Archive ${archive} should use notebook texture`);
});
assert(await page.locator(".hand-note").count() === 0, "Handwritten blue notes should be removed");
const requiredLabels = [
  "Discontinued find", "Unboxing", "Box cover", "Hardware setup", "Start screen!",
  "Fighter Selected", "Enemies", "Special move", "Level two boss"
];
const archiveLabels = await page.locator(".chapter-label").allTextContents();
requiredLabels.forEach(label => assert(archiveLabels.some(text => text.includes(label)), `Missing archive label: ${label}`));
const gameplayLayout = await page.evaluate(() => {
  const copy = document.querySelector(".video-copy").getBoundingClientRect();
  const video = document.querySelector(".video-shell").getBoundingClientRect();
  const heading = document.querySelector(".video-copy h2");
  return { copyRight: copy.right, videoLeft: video.left, headingFits: heading.scrollWidth <= heading.clientWidth };
});
assert(gameplayLayout.copyRight <= gameplayLayout.videoLeft, "Gameplay copy overlaps the video");
assert(gameplayLayout.headingFits, "Gameplay heading does not fit its column");
const footerBackground = await page.locator(".archive-footer").evaluate(node => getComputedStyle(node).backgroundImage);
assert(footerBackground.includes("black-plastic"), "Footer is missing the black-plastic texture");
const homeImageOpacity = await page.locator(".power-deck").evaluate(() =>
  getComputedStyle(document.querySelector(".power-deck"), "::after").opacity
);
assert(homeImageOpacity === "0.58", `Home image opacity is ${homeImageOpacity}, expected 0.58`);
const heroScanlines = await page.locator(".deck-grid").evaluate(node => getComputedStyle(node, "::before").backgroundImage);
assert(heroScanlines.includes("repeating-linear-gradient"), "Hero CRT scanlines are missing");
const archiveHeaderStyle = await page.locator(".archive-header").evaluate(node => ({
  position: getComputedStyle(node).position,
  background: getComputedStyle(node).backgroundImage
}));
assert(archiveHeaderStyle.position === "sticky", "32X archive banner is not sticky");
assert(archiveHeaderStyle.background.includes("repeating-linear-gradient"), "32X archive banner stripes are missing");
const firstPaper = await page.locator(".chapter .story-panel").first().evaluate(node => getComputedStyle(node).backgroundImage);
assert(firstPaper.includes("205, 190, 151"), "Early archive text graph paper is not tan");
const thirdPaper = await page.locator(".chapter .story-panel").nth(2).evaluate(node => getComputedStyle(node).backgroundImage);
assert(thirdPaper.includes("176, 177, 174"), "Archive 03 text graph paper is not grey");
const notebookBlend = await page.locator(".chapter .story-panel").nth(6).evaluate(node => getComputedStyle(node).backgroundBlendMode);
assert(notebookBlend.startsWith("color"), "Colored notebook tint is not using true color blending");
const homeTitle = await page.locator("#power-title").evaluate(node => ({
  text: node.textContent,
  fits: node.scrollWidth <= node.clientWidth,
  hasBreak: Boolean(node.querySelector("br"))
}));
assert(homeTitle.text === "CYBERSECURITY" && homeTitle.fits && !homeTitle.hasBreak, "Homepage title is not a fitted single word");
const prebootBrightness = await page.locator(".story").evaluate(node => getComputedStyle(node).filter);
assert(prebootBrightness.includes("0.58"), `Preboot archive is not visibly fail-safe: ${prebootBrightness}`);
await page.click("#boot-start");
assert(await page.locator("body").evaluate(node => node.classList.contains("powered")), "Power state did not activate");
await page.waitForTimeout(1000);
const poweredBrightness = await page.locator(".story").evaluate(node => getComputedStyle(node).filter);
assert(poweredBrightness === "brightness(1)", `Powered archive remains dimmed: ${poweredBrightness}`);
await page.locator("#discovery").scrollIntoViewIfNeeded();
await page.locator('#discovery [data-action="inspect"]').click();
assert(await page.locator("#discovery").evaluate(node => node.classList.contains("inspected")), "Inspect did not open");
await page.locator('#discovery [data-action="next"]').click();
await page.waitForTimeout(120);
assert((await page.evaluate(() => location.hash)) === "#unboxing", "Continue did not update the chapter hash");
await page.keyboard.press("Enter");
assert(await page.locator("#stage-dialog").evaluate(node => node.open), "Start/Enter did not open chapter select");
await page.locator('[data-stage="18"]').click();
await page.waitForTimeout(120);
assert((await page.evaluate(() => location.hash)) === "#takedown", "Chapter select did not navigate");
await page.locator('#takedown [data-action="back"]').click();
await page.waitForTimeout(120);
assert((await page.evaluate(() => location.hash)) === "#unboxing", "Back did not retrace the non-linear chapter history");
assert(errors.length === 0, `Page errors: ${errors.join(" | ")}`);

console.log("Smoke test passed: exact copy and texture sequence, clean Gameplay/video columns, textured footer, responsive power-control clearance, navigation, and runtime console.");
await browser.close();
