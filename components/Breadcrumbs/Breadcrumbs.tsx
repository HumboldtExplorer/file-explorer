import { FileExplorerFile } from "@/types/files";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { BreadcrumbProps } from "./Breadcrumbs.types";
import Link from "next/link";

export default function Breadcrumbs({data, currentFolder} : BreadcrumbProps) {
    const getBreadCrumbs = (files: FileExplorerFile[], currentFolder: FileExplorerFile|null|undefined, breadcrumbs: FileExplorerFile[] = []) : FileExplorerFile[] => {
        if (!currentFolder) { return [] }

        breadcrumbs.unshift(currentFolder)

        if (currentFolder.parent) {
            const parentFolder: FileExplorerFile|undefined = files.find(file => file.id === currentFolder.parent)
            getBreadCrumbs(files, parentFolder, breadcrumbs)
        }
        
        return breadcrumbs
    }

    const isLastBreadcrumb = (breadcrumbs: FileExplorerFile[] | null, id: string) => {
        return breadcrumbs?.at(-1)?.id === id
    }

    return (
        <nav className='mt-14 mb-6'>
            <ul className="flex flex-row">
                <li className="flex flex-row items-center">
                    <Link 
                        className="font-sans font-bold text-2xl"
                        href={'/'}>
                        My Files
                    </Link>
                    <ChevronRightIcon className='mx-2 h-4 w-4' />
                </li>

                {getBreadCrumbs(data, currentFolder).map(breadcrumb => {
                    return <li key={breadcrumb.id} className="flex flex-row items-center">
                        <Link 
                            className="font-sans font-bold text-2xl"
                            href={`/files/${currentFolder?.id}`}>
                            {breadcrumb.name}
                        </Link>
                        {!isLastBreadcrumb(getBreadCrumbs(data, currentFolder), breadcrumb.id) && <ChevronRightIcon className='mx-2 h-4 w-4' />}
                    </li>
                })}
            </ul>
        </nav>
    )
}