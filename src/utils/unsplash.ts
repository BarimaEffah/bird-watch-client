class UnsplashClient {
  getNewRandomImage(size: string = "small"): Promise<string> {
    return fetch(
      "https://api.unsplash.com/photos/random/?client_id=_yKtDWa3kPKndiXlccI4fBiOGySj09dbjQAxX63c92E&collections=1103088,1708734,3694365,219941,4994801,494263&orientation=landscape"
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        return res.urls[size];
      });
  }
}

export default UnsplashClient;
