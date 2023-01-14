export const checkIfFilesAreCorrectType = (filelist: FileList): boolean => {
  const [file] = filelist;
  let valid = true;

  if (file) {
    if (!["image/jpeg", "image/jpg"].includes(file.type)) {
      valid = false;
    }
  }

  return valid;
};
