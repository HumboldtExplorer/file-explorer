import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

export default function NoFiles() {
  return (
    <div className="flex flex-col items-start justify-center">
      <div className="flex flex-col bg-blue-200/50 p-8 rounded-lg text-center">
        <ExclamationCircleIcon className='mx-auto h-12 w-12 text-blue-500' />
        <p className="font-sans font-bold text-2xl">There's nothing here.</p>
        <p className="font-sans text-l">There are no folders or files in this location.</p>
      </div>
    </div>
  )
}