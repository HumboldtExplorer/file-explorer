import { FileExplorerFile } from "@/types/files"

interface BreadcrumbProps {
    data: FileExplorerFile[],
    currentFolder: FileExplorerFile | null | undefined,
}

export { type BreadcrumbProps }