const puppeteer = require("puppeteer");
const { exec } = require("child_process");
const express = require("express");
const serveStatic = require("serve-static");

const PORT = 5000;

// Start a local server to serve the frontend build
const app = express();
app.use(serveStatic("dist", { index: ["index.html"] }));

const server = app.listen(PORT, async () => {
    console.log(`Local server running at http://localhost:${PORT}`);

    try {
        // Launch Puppeteer
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        console.log("Checking for console errors...");
        page.on("console", (msg) => {
            if (msg.type() === "error") console.error("Console Error:", msg.text());
        });

        await page.goto(`http://localhost:${PORT}`, { waitUntil: "networkidle0" });

        console.log("Running Lighthouse audit in a separate process...");

        // Run Lighthouse in a child process
        exec(`npx lighthouse http://localhost:${PORT} --quiet --output=json --chrome-flags="--headless"`, (error, stdout) => {
            if (error) {
                console.error("Lighthouse Error:", error.message);
            } else {
                try {
                    const util = require("util");
                    console.log("Lighthouse Results:");
                    console.log(`Performance: ${results.categories.performance.score * 100}`);
                    console.log(`Accessibility: ${results.categories.accessibility.score * 100}`);
                    console.log(`SEO: ${results.categories.seo.score * 100}`);
                } catch (parseError) {
                    console.error("Error:", util.inspect(error, { depth: null }));
                }
            }

            // Close Puppeteer and server
            browser.close();
            server.close();
        });

    } catch (error) {
        console.error("Error:", error);
        server.close();
    }
});
