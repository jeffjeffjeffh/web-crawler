const jsdom = require("jsdom");
const { JSDOM } = jsdom;

function normalizeURL(str) {
    const url = new URL(str);
    let normalizedURL = "";
    normalizedURL += url.hostname;
    normalizedURL += url.pathname;
    normalizedURL += url.search;
    normalizedURL += url.searchParams;
    console.log(`Normalized URL: ${normalizedURL}`);
    return normalizedURL;
}

function addHostnameToURLs(urls, baseURL) {
    for (let i = 0; i < urls.length; i++) {
        if (urls[i][0] == "/") {
            urls[i] = baseURL + urls[i];
        }
    }
}

function getURLsFromHTML(page, baseURL) {
    const dom = new JSDOM(page);
    const anchors = dom.window.document.querySelectorAll("a");
    const links = [];
    anchors.forEach(({ href }) => links.push(href));
    addHostnameToURLs(links, baseURL);
    links.forEach((link) => console.log(link));
    return links;
}

getURLsFromHTML(
    "<html><a href='www.yahoo.com'>Visit Yahoo!</a><a href='/blog'>Visit Our Blog!</a></html>",
    "http://www.birdwatching.com"
);

module.exports = {
    normalizeURL,
};
