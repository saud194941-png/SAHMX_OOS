type UIState = {
  language: "ar" | "en";
  setLanguage: (language: "ar" | "en") => void;
};

export const uiStore: UIState = {
  language: "ar",
  setLanguage(language) {
    uiStore.language = language;
  }
};
