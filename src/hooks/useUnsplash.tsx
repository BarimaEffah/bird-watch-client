import React from "react";
import { unsplash } from "src";

interface IUnsplash {
  random: string;
}

export type queryType = "random" | "collection";

interface IUnsplashConfig {
  queryType: "random" | "collection";
}

const useUnsplash = (config: IUnsplashConfig): IUnsplash => {
  const [random, setRandom] = React.useState<string | null>(null);

  function getUnsplashRandom() {
    return unsplash.getNewRandomImage().then((img) => {
      setRandom(img);
    });
  }

  return { random: "" };
};

export default useUnsplash;
