import axios from "axios";
import wallpaper_data from "./wallpaper_data.js";

//* Change this to true to use the test examples instead of making API calls.
//* Preserves API quota.
const TEST_MODE = process.env.USE_EXAMPLES === "true" || false;

export default class UnsplashAPI {
  constructor() {
    this.endpoint = axios.create({
      baseURL: "https://api.unsplash.com",
      timeout: 10000,
    });
  }

  format_wallpaper_response(data) {
  }

  async get_wallpaper(type, is_day) {
    const condition = type === "drizzle" ? "rain" : type;
    const time_of_day = is_day ? "day" : "night";

    const photoId = "kcvlb727mn8"; // TODO: Choose an ID
    try {
      const response = await this.endpoint.get(`/photos/${photoId}`, {
        params: {
          client_id: process.env.UNSPLASH_ACCESS_KEY,
        },
      });
      
      const formatted_response = {
        href: response.data.urls.full,
        imgsrc: response.data.links.html,
        authorname: response.data.user.name,
        authorlink: response.data.user.links.html,
      };
      return [200, formatted_response];

    } catch (error) {
      if (error.response) {
        // TODO Error comes from Unsplash API
      } else {
        // TODO Error comes from REST API Connection
      }
    }
  }
}
