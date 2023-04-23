import FilePreview from "@/components/FilePreview/FilePreview"
import { FilePreviewListProps } from "./FilePreviewList.types"

export default function FilePreviewList({children}: FilePreviewListProps) {
    return (
        <>
            {Boolean(children?.length > 0) 
            ?
            <>
                <p className="font-sans font-bold text-lg my-4">Files</p>

                <ul className="grid grid-cols-12 gap-4">
                    {children.map(child => {
                        if (child.name && child.ext) {
                            return (
                                <li className="col-span-6 md:col-span-4 lg:col-span-3" key={child.id}>
                                    <FilePreview name={child.name} ext={child.ext} />
                                </li>
                            )
                        }
                    })}
                </ul>
            </>
            :
                <>
                </>
            }
        </>
    )
}