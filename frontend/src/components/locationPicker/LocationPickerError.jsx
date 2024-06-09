import { Warning } from "@phosphor-icons/react"

export default function LocationPickerError() {
  return (
    <div className="px-5 py-2 bg-yellow-500/20 flex gap-2">
        <Warning className="w-5 h-auto fill-yellow-500" />
        <div className="text-sm text-yellow-200">Error - Couldn't fetch results. Try again later</div>
    </div>
  )
}
