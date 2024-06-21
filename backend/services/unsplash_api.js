export default class UnsplashAPI {
  constructor() {
    try {
      this.endpoint = axios.create({
        baseURL: "https://api.unsplash.com/",
        headers: { "Accept-Version": "v1" },
        auth: {
          username: "Client-ID",
          password: process.env.UNSPLASH_ACCESS_KEY,
        },
      });
    } catch (error) {
      console.error(
        "Could not get credentials to access Unsplash. " +
        "Check if the key is valid and retry"
      );
    }
  }
}
