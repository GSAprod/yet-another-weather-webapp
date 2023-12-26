import PropTypes, { string } from "prop-types";

export default function WeatherDetail(props) {
  return (
    <div className="w-fit grid grid-cols-[auto auto] gap-x-2">
      <props.icon className="w-4 h-auto my-auto fill-white" />

      <div className="align-baseline mb-0">{props.name}</div>
      <div className="col-start-2 text-lg font-bold">{props.value}</div>
    </div>
  );
}

WeatherDetail.propTypes = {
  icon: PropTypes.elementType,
  name: string,
  value: string,
};
