import axios from "axios";
import { useEffect, useState } from "react";

const DEFAULT_WALLPAPER = {
  path: "/imgMetadata/noaa-kcvlb727mn8-unsplash.jpg",
  imgsrc:
    "https://unsplash.com/photos/green-trees-on-mountain-under-cloudy-sky-during-daytime-kcvlb727mn8",
  authorname: "NOAA",
  autorlink: "https://unsplash.com/@noaa",
}

const useWallpaper = () => {
  const [wallpaper, setWallpaper] = useState(DEFAULT_WALLPAPER);

  const backend_ip = import.meta.env.VITE_BACKEND_IP || "localhost";
  const backend_port = import.meta.env.VITE_BACKEND_PORT || 3000;
  const api = axios.create({
    baseURL: `http://${backend_ip}:${backend_port}`,
  });

  async function changeWallpaper(type, is_day) {
    try {
      const response = await api.get("/get_wallpaper", {
        params: {
          type: type,
          is_day: is_day,
        },
      });
      setWallpaper(response.data);
    } catch (error) {
      if (error.response) {
        console.error(error.response.message);
        // TODO Create error when backend is responding with error code
      } else {
        // TODO Axios error
        console.error(error);
      }
    }
  }

  return { wallpaper, changeWallpaper };
};

export default useWallpaper;
