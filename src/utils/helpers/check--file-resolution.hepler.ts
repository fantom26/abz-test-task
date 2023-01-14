import { getMediaDimensions } from "./get-media-dimensions.helper";

export const checkFileResolution = async (filelist: FileList): Promise<boolean> => {
  const [file] = filelist;
  let valid = true;

  if (file) {
    const { width, height } = await getMediaDimensions(file);

    if (width > 70 || height > 70) {
      valid = false;
    }
  }
  return valid;
};
