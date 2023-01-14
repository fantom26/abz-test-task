import { useParams } from "react-router-dom";
import { getAllTranslations } from "store/selectors";
import { ITranslation } from "utils/declarations";
import { mergeDeep } from "utils/helpers";

import { useAppSelector } from "./use-store";

export const useTranslation = () => {
  // **Props
  const { lang } = useParams();

  const { translations } = useAppSelector(getAllTranslations);

  const defaultT = translations["en"];
  const currentT = lang && translations?.hasOwnProperty(lang) ? translations[lang] : translations["en"];

  return mergeDeep({}, defaultT, currentT) as ITranslation;
};
