import axios from "axios";
import wallpaper_data from "./wallpaper_data.js";

//* Change this to true to use the test examples instead of making API calls.
//* Preserves API quota.
const TEST_MODE = process.env.USE_EXAMPLES === "true" || false;

const default_response = {
  href: "/imgMetadata/noaa-kcvlb727mn8-unsplash.jpg",
  imgsrc: "https://unsplash.com/photos/green-trees-on-mountain-under-cloudy-sky-during-daytime-kcvlb727mn8",
  authorname: "NOAA",
  authorlink: "https://unsplash.com/@noaa"
}

export default class UnsplashAPI {
  constructor() {
    this.endpoint = axios.create({
      baseURL: "https://api.unsplash.com",
      timeout: 10000,
    });
  }

  async get_wallpaper(type, is_day) {
    if (TEST_MODE)
      return {
        status: 200,
        data: default_response,
      }

    const condition = type === "drizzle" ? "rain" : type;
    const time_of_day = is_day ? "day" : "night";

    const photosList = wallpaper_data[condition][time_of_day];
    const photoId = photosList[Math.floor(Math.random() * photosList.length)].id;
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
      return {
        status: 200,
        data: formatted_response,
      };

    } catch (error) {
      if (error.response) {
        console.error(error.response.data);
        // TODO Error comes from Unsplash API
      } else {
        // TODO Error comes from REST API Connection
      }
    }
  }
}
