import CloudSunIcon from "../assets/icons/weather/cloud-sun.svg?react";

export default function CurrentWeatherArea() {
  return (
    <div className="flex flex-col items-center">
      <p className="mt-10 mb-4 text-lg max-md:mt-3">Sunday, November 12</p>

      <div className="text-8xl font-bold mb-2">18º C</div>

      <div className="flex items-center gap-2">
        <CloudSunIcon className="h-16 w-auto fill-white" />

        <div className="text-5xl">Cloudy</div>
      </div>
    </div>
  );
}