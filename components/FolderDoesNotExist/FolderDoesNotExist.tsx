import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

export default function FolderDoesNotExist() {
  return (
    <div className="flex flex-col items-start justify-center">
      <div className="flex flex-col bg-red-200/50 p-8 rounded-lg text-center">
        <ExclamationTriangleIcon className='mx-auto h-12 w-12 text-red-500' />
        <p className="font-sans font-bold text-2xl">This folder does not exist</p>
      </div>
    </div>
  )
}