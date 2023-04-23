import { FileExplorerFile } from "@/types/files"

interface FolderContentProps {
    data: FileExplorerFile[],
    folders: FileExplorerFile[],
    files: FileExplorerFile[],
    currentFolder: FileExplorerFile|null,
}

export { type FolderContentProps }