const localeMapping = [
  ["/", "/en/home"],
  ["/about-us", "/en/about-us"],
  ["/career", "/en/career"],
  ["/blog", "/en/blog"],
  ["/solutions/digital-products-ppob", "/en/solutions/digital-products-ppob"],
  ["/solutions/direct-debit", "/en/solutions/direct-debit"],
  ["/solutions/virtual-cards", "/en/solutions/virtual-cards"],
  ["/solutions/instant-transfer", "/en/solutions/instant-transfer"]
];

function getLocalePath({currentlyInEnglish, currentPathName}) {
  let nextPath = null
  if(currentlyInEnglish) {
    const pathObj = localeMapping.filter(item => item[1] === currentPathName)
    if(pathObj?.length > 0) {
      nextPath = pathObj[0]
    } // endif
  } else {
    const pathObj = localeMapping.filter(item => item[0] === currentPathName)
    if(pathObj?.length > 0) {
      nextPath = pathObj[1]
    } // endif
  } // endif

  if(nextPath) {
    window.location.href = nextPath
  } else {
    console.log("AYC Locale: No path found", {currentlyInEnglish, currentPathName})
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  const currentPathName = window.location.pathname
  const currentlyInEnglish = currentPathName.startsWith('/en')

  // Store the attribute selectors inside variables
  const currentLangElement = document.querySelector('[data-custom-js-id="current_lang_uppercase"]');
  const langIdButton = document.querySelector('[data-custom-js-id="nav_btn_lang_id"]');
  const langEnButton = document.querySelector('[data-custom-js-id="nav_btn_lang_en"]');

  if(currentlyInEnglish) {
    langEnButton.setAttribute('style', 'display:none !important')
    currentLangElement.textContent = 'EN';
  } else {
    langIdButton.setAttribute('style', 'display:none !important')
    currentLangElement.textContent = 'ID';
  } // endif

  // Add event listeners to the buttons
  langIdButton.addEventListener('click', () => {
    getLocalePath({currentlyInEnglish, currentPathName})
  });

  langEnButton.addEventListener('click', () => {
    getLocalePath({currentlyInEnglish, currentPathName})
  });
});
