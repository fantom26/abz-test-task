import { RootState } from "store";

export const getAllTranslations = (state: RootState) => state.translation;

export const getTranslation = (lang: string) => (state: RootState) => state.translation.translations[lang];
