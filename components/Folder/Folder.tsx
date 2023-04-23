import { FileExplorerFileType } from "@/types/files";
import { FolderIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { useState } from "react";
import { FolderProps } from "./Folder.types";
import Link from "next/link";

// Known issues:
// 1) Could use a details element for the expanding element - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
// 2) Using max-height for the expande/collapse animation is not scalable because content could be over 1000px height.

export default function Folder({file} : FolderProps) {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
      <>
        <div className={`hover:cursor-pointer flex flex-row items-center pb-2 ${file?.children?.some(c => c.type === FileExplorerFileType.Folder) ? '-ml-4' : ''}`}>
          {file.children?.some(c => c.type === FileExplorerFileType.Folder) && (
            <button onClick={() => setIsExpanded(!isExpanded)}>
              <ChevronRightIcon className={`transition ease-in-out duration-300 h-4 w-4 ${isExpanded ? 'rotate-90' : ''}`}/>
            </button>
          )}
          <div className="flex flex-row items-center">
            <FolderIcon className="shrink-0 h-6 w-6 ml-1 text-zinc-600" />
            <Link 
              className={`font-sans text-sm ml-2 transition-colors transition-text-transform duration-200 hover:text-blue-500`}
              href={`/files/${file.id}`}>
              {file.name}
            </Link>
          </div>
        </div>

        <ul className={`${isExpanded ? 'max-h-[1000px]' : 'max-h-0'} transition transition-max-height duration-300 overflow-hidden`} aria-expanded={isExpanded}>
          {file.children?.map(child => {
            if (child.type !== FileExplorerFileType.Folder) { return }

            return (
              <li key={child.id} className="pl-4">
                <Folder file={child} />
              </li>
            )
          })}
        </ul>
      </>
    )
  }