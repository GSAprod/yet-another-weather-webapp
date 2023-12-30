import Forecast from "./Forecast";

export default function ForecastArea() {
  return (
    <div
      className="col-span-3 justify-center flex gap-10 pb-7 
    max-sm:flex-col max-sm:gap-5">
      <Forecast />

      <Forecast />

      <Forecast />
    </div>
  );
}
