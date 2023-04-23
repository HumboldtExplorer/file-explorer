import { FileExplorerFile } from "@/types/files";
import { DocumentIcon } from '@heroicons/react/24/solid'

export default function File({type, name, parent, ext, children}: Partial<FileExplorerFile>) {
  return (
    <li>
      <div className="flex flex-row pb-2">
        <DocumentIcon className="h-6 w-6 text-red-500" />
        <p className="ml-2">{name}</p>
      </div>
    </li>
  )
}