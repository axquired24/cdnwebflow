window.addEventListener("DOMContentLoaded", (event) => {
  // Store the attribute selectors inside variables
  const currentLangElement = document.querySelector('[data-custom-js-id="current_lang_uppercase"]');
  const langIdButton = document.querySelector('[data-custom-js-id="nav_btn_lang_id"]');
  const langEnButton = document.querySelector('[data-custom-js-id="nav_btn_lang_en"]');

  // Add event listeners to the buttons
  langIdButton.addEventListener('click', () => {
    currentLangElement.textContent = 'ID';
  });

  langEnButton.addEventListener('click', () => {
    currentLangElement.textContent = 'EN';
  });
});
