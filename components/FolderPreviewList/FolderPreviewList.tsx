import { FileExplorerFileType } from "@/types/files"
import FolderPreview from "../FolderPreview/FolderPreview"
import { FolderPreviewListProps } from "./FolderPreviewList.types"

// TODO: 
// Duplicating code between FolderPreviewList/FilePreviewList.
// Refactor FolderPreviewList and FilePreviewList to use a generic PreviewListComponent that accepts the component to render as an argument
// Additionally, rename FilePreview and FolderPreview components to FilePreviewListItem and FolderPreviewListItem, respectively. 

export default function FolderPreviewList({children}: FolderPreviewListProps) {
    return (
        <>
            {Boolean(children?.length > 0) 
            ?
            <>
                <p className="font-sans font-bold text-lg my-4">Folders</p>

                <ul className="grid grid-cols-12 gap-4">

                {children?.map(child => {
                    return (
                        <li className="col-span-6 md:col-span-4 lg:col-span-3" key={child.id}>
                            <FolderPreview id={child.id} name={child.name} />
                        </li>
                    )
                })
                }
                </ul> 
            </>
            :
                <>
                </>
            }
        </>
    )
}