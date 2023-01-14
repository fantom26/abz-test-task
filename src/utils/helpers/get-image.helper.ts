export const getImage = (tag: string) => {
  const images: Record<string, string> = {
    // hero
    heroBg1x: "/img/hero/img@1x.jpg",
    heroBg2x: "/img/hero/img@2x.jpg",
    heroBg1xMob: "/img/hero/img@1x-mobile.jpg",
    heroBg2xMob: "/img/hero/img@2x-mobile.jpg"
  };

  if (images.hasOwnProperty(tag)) {
    return images[tag];
  }

  return "";
};
