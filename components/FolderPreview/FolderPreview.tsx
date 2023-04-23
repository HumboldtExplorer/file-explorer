import { FileExplorerFile } from "@/types/files";
import { FolderIcon } from '@heroicons/react/24/solid'

// TODO: Replace Partial with specific interfaces. 
export default function FolderPreview({type, name, parent, ext, children}: Partial<FileExplorerFile>) {
    return (
      <li>
        <div className="p-4 mb-2 bg-slate-100 rounded-md">
            <p className="font-sans text-md mb-2">{name}</p>

            <div className="bg-white p-8 rounded-md">
                <FolderIcon className="mx-auto h-12 w-12 text-blue-500" />
            </div>
        </div>
      </li>
    )
  }