import { string, func } from "prop-types"

export default function LocationSearchResult({ name, description, onSelect }) {

  return (
    <div className='px-5 py-2 my-1 hover:bg-black/20 cursor-pointer' onClick={onSelect}>
        <div className='font-bold'>{name}</div>
        <div className="text-sm">{description}</div>
    </div>
  )
}

LocationSearchResult.propTypes = {
  name: string.isRequired,
  description: string,
  onSelect: func.isRequired,
};
