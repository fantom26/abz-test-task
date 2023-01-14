import { createSlice } from "@reduxjs/toolkit";
import { DeepPartial, ITranslation } from "utils/declarations";
// Translations
import { translations } from "utils/translations";

type TranlsationStateProps = {
  translations: Record<string, DeepPartial<ITranslation>>;
};

export const tranlsationState: TranlsationStateProps = {
  translations: {
    en: translations.en
  }
};

const TranslationSlice = createSlice({
  name: "translation",
  initialState: tranlsationState,
  reducers: {}
});

export const TranslationActions = {
  ...TranslationSlice.actions
};

export default TranslationSlice.reducer;
