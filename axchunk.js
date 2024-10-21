const localeRoutes = [
  ["/", "/en/home"],
  ["/about-us", "/en/about-us"],
  ["/career", "/en/career"],
  ["/blog", "/en/blog"],
  ["/our-solution", "/en/our-solution"],
  ["/solutions/digital-products-ppob", "/en/solutions/digital-products-ppob"],
  ["/solutions/direct-debit", "/en/solutions/direct-debit"],
  ["/solutions/virtual-cards", "/en/solutions/virtual-cards"],
  ["/solutions/instant-transfer", "/en/solutions/instant-transfer"],
  ["/solutions/payment-gateway", "/en/solutions/payment-gateway"]
];

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("AYC Locale, version 1.0.7");
  const currentPathName = window.location.pathname
  const currentlyInEnglish = currentPathName.startsWith('/en')

  // Store the attribute selectors inside variables
  const currentLangElement = document.querySelector('[data-custom-js-id="current_lang_uppercase"]');
  const langIdButton = document.querySelector('[data-custom-js-id="nav_btn_lang_id"]');
  const langEnButton = document.querySelector('[data-custom-js-id="nav_btn_lang_en"]');
  const langButtonWrapper = document.querySelector('[data-custom-js-id="nav_btn_lang_wrapper"]');

  function switchLangRoute() {
    let nextPath = null
    if(currentlyInEnglish) {
      const pathObj = localeRoutes.filter(item => item[1] === currentPathName)
      if(pathObj?.length > 0) {
        nextPath = pathObj[0][0]
      } // endif
    } else {
      const pathObj = localeRoutes.filter(item => item[0] === currentPathName)
      if(pathObj?.length > 0) {
        nextPath = pathObj[0][1]
      } // endif
    } // endif
  
    if(nextPath) {
      window.location.href = nextPath
    } else {
      console.log("AYC Locale: No path found", {currentlyInEnglish, currentPathName})
    }
  }

  function isHavingLocales(currentPathName) {
    const joinedRoutes = [].concat(...localeRoutes);
    return joinedRoutes.includes(currentPathName)
  }

  function hideElm(selector) {
    selector.setAttribute('style', 'display:none !important')
  }

  // Stop other function if the page didn't have locales
  if(! isHavingLocales(currentPathName)) {
    hideElm(langButtonWrapper)
    return false
  } // endif

  if(currentlyInEnglish) {
    hideElm(langEnButton)
    currentLangElement.textContent = 'EN';
  } else {
    hideElm(langIdButton)
    currentLangElement.textContent = 'ID';
  } // endif

  // Add event listeners to the buttons
  langIdButton.addEventListener('click', () => {
    switchLangRoute()
  });

  langEnButton.addEventListener('click', () => {
    switchLangRoute()
  });
});
