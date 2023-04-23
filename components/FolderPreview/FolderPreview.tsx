import { FolderIcon } from '@heroicons/react/24/solid'

export default function FolderPreview({name}: FolderPreviewProps) {
  return (
    <div className="h-full flex flex-col p-4 mb-2 bg-slate-100 rounded-md">
      <p className="font-sans text-md mb-2">{name}</p>

      <div className="bg-white p-8 mt-auto rounded-md">
        <FolderIcon className="mx-auto h-12 w-12 text-blue-500" />
      </div>
    </div>
  )
}