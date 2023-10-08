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

function a() {
    chrome.runtime.sendMessage({
        checkCookie: true
    }, function (response) {
        if (response.cookied === null) {
            chrome.runtime.sendMessage({
                requestCookieSpoof: true,
                url: window.location.href
            }, function (response) {
                return window.location.replace(response.urlTwo)
                // DONE !! !! !!
            });
        } else {
            let newUrl = window.location.href

            if (filter.test(window.location.href)) {
                // has agecheck //
                newUrl = newUrl.replace("agecheck", "")
                return window.location.replace(newUrl)
            }
        }
    });
}

a()