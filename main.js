const { argv } = require("node:process");
const { crawlPage } = require("./crawl.js");

function main() {
    if (!argv[2]) {
        throw new Error("No command line argument provided!");
    }
    if (argv[3]) {
        throw new Error("Too many command line arguments provided!");
    }

    console.log(`Starting web crawler on URL: ${argv[2]}`);

    const page = crawlPage("https://wagslane.dev");
}

main();
