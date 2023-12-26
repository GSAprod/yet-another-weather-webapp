import SettingsIcon from '../assets/icons/gear-six.svg?react'

export default function SettingsButton() {
    return (
        <div className='self-end justify-self-end'>
            <div className='p-1 inline-block rounded-md bg-black/20 hover:bg-black/40 w-min h-min'>
                <SettingsIcon className="w-5 h-auto my-auto" />
            </div>
        </div>
    )
}