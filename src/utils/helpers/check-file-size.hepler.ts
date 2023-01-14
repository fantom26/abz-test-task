export const checkIfFilesAreTooBig = (filelist: FileList): boolean => {
  const [file] = filelist;
  let valid = true;

  if (file) {
    const size = file.size / 1024 / 1024;
    if (size > 5) {
      valid = false;
    }
  }
  return valid;
};
