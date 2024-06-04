import { string } from "prop-types"

export default function LocationSearchResult({ name, description }) {
  return (
    <div className='px-5 py-2 my-1 hover:bg-black/20 cursor-pointer'>
        <div className='font-bold text-lg'>{name}</div>
        <div>{description}</div>
    </div>
  )
}

LocationSearchResult.propTypes = {
  name: string,
  description: string
};
