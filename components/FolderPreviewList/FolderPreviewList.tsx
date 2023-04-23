import { FileExplorerFileType } from "@/types/files"
import FolderPreview from "../FolderPreview/FolderPreview"
import { FolderPreviewListProps } from "./FolderPreviewList.types"

export default function FolderPreviewList({children}: FolderPreviewListProps) {
    return (
        <>
            {Boolean(children?.length > 0) 
            ?
            <>
                <p className="font-sans font-bold text-lg mb-4">Folders</p>

                <ul className="grid grid-cols-12 gap-4">

                {children?.map(child => {
                    return (
                        <li className="col-span-6 md:col-span-3" key={child.id}>
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