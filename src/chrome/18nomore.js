/**
 * ageSkiip
 * 
 * Skip Steam's age verification. Proven results!
 * 
 * With a double i (skiip) to match the amount
 * of letters in "steam".
 * 
 * (at)owohai
 */
const filter = new RegExp("(.*\.)?steampowered\.com.(agecheck).*$")
//const filterTooGood = new RegExp("(.*\.)?steampowered\.com.(agecheck|app).*$")


// Switch to the non-age verification locked page 
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.checkCookie) {
        chrome.cookies.get({
            "url": "https://store.steampowered.com",
            "name": "birthtime"
        }, function (cookie) {
            sendResponse({
                recieved: request,
                cookied: cookie,
                response: true
            });
        });
        return true
    }

    if (request.requestCookieSpoof) {
        let newUrl

        if (filter.test(request.url)) {
            // has agecheck //
            newUrl = request.url.replace("agecheck", "")
            console.log(newUrl)
        }
        chrome.cookies.set({
            url: "https://store.steampowered.com",
            name: "birthtime",
            value: "1070229601",
        })
        sendResponse({
            recieved: request,
            urlTwo: newUrl,
            response: true
        });
        return true
    }
});

// - tested on Chromium v117.0.5938 - // 