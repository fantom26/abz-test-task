import { toast } from "react-toastify";

import { useTranslation } from "./use-translation";

interface useRequestProps {
  errorMessage?: string;
}

export const useRequest = (props?: useRequestProps) => {
  // **Props
  const t = useTranslation();

  const handleRequest =
    (callback: any) =>
    async (...args: any) => {
      try {
        await callback(...args);
      } catch (error: any) {
        const getErrorMessage = (error: unknown) => {
          if (error instanceof Error) return error?.message;

          return null;
        };

        toast(getErrorMessage(error) || props?.errorMessage || t.notifications.smthWentWrong);
      }
    };

  return { handleRequest };
};
