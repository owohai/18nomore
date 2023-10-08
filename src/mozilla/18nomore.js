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

const filter = {
    //urls: ["*://store.steampowered.com/agecheck/*", "*://store.steampowered.com/app/*"]
    urls: ["https://store.steampowered.com/*"]
}

// Switch to the non-age verification locked page 

function updateHandler(tabId, changeInfo, tabInfo) {
   browser.cookies.set({
        url: "https://store.steampowered.com",
        name: "birthtime",
        value: "1070229601",
      })

      //window.location.href = `https://store.steampowered.com/app/${tabInfo.url.split("/")[5]}`
     // console.info("It is a known issue that the steam page in question doesn't update when the\nDevTools console is open. Try again with the console closed.")
     //return tryReload(`https://store.steampowered.com/app/${tabInfo.url.split("/")[5]}`);
    }

browser.tabs.onUpdated.addListener(updateHandler, filter);

function tryReload(url) {
    window.location.replace(url)
}
// - tested on Mozilla Firefox v118.0.1 - // 
