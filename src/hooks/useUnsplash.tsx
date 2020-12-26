import React from "react";
import { unsplash } from "src";

interface IUnsplash {
  random: string | null;
}

export type queryType = "random" | "collection";

interface IUnsplashConfig {
  queryType?: "random" | "collection";
  fetchNewAlways?: boolean;
}

const useUnsplash = (config?: IUnsplashConfig): IUnsplash => {
  const [random, setRandom] = React.useState<string | null>(null);

  const getUnsplashRandom = React.useCallback(() => {
    if (localStorage.getItem("lastImage") && !config?.fetchNewAlways) {
      setRandom(localStorage.getItem("lastImage"));
      return;
    }
    return unsplash
      .getNewRandomImage()
      .then((img) => {
        setRandom(img);
        localStorage.setItem("lastImage", img);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [config?.fetchNewAlways]);

  React.useEffect(() => {
    getUnsplashRandom();
  }, [getUnsplashRandom]);

  return { random };
};

export default useUnsplash;
