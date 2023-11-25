import CloudFogIcon from "../assets/icons/weather/cloud-fog.svg?react";

export default function Forecast() {
  return (
    <div className="flex flex-col items-center">
      <div>Sat</div>

      <CloudFogIcon className="w-9 h-auto my-3" />

      <div className="font-bold text-lg mb-1">21º C</div>

      <div>10º C</div>
    </div>
  );
}
