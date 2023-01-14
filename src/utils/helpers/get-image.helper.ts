export const getImage = (tag: string) => {
  const images: Record<string, string> = {
    // hero
    heroBg1x: "/abz-test-task/img/hero/img@1x.avif",
    heroBg2x: "/abz-test-task/img/hero/img@2x.avif",
    heroBg1xMob: "/abz-test-task/img/hero/img@1x-mobile.avif",
    heroBg2xMob: "/abz-test-task/img/hero/img@2x-mobile.avif"
  };

  if (images.hasOwnProperty(tag)) {
    return images[tag];
  }

  return "";
};
