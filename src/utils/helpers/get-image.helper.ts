export const getImage = (tag: string) => {
  const images: Record<string, string> = {
    // hero
    heroBg1x: "/abz-test-task/img/hero/img@1x.jpg",
    heroBg2x: "/abz-test-task/img/hero/img@2x.jpg",
    heroBg1xMob: "/abz-test-task/img/hero/img@1x-mobile.jpg",
    heroBg2xMob: "/abz-test-task/img/hero/img@2x-mobile.jpg"
  };

  if (images.hasOwnProperty(tag)) {
    return images[tag];
  }

  return "";
};
