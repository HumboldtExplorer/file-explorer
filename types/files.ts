enum FileExplorerFileType {
    File = 'file',
    Folder = 'folder',
}

interface FileExplorerFile {
    id: string,
    name: string,
    type: FileExplorerFileType,
    parent: string | null,
    children: FileExplorerFile[],
    ext?: string,
}

export { type FileExplorerFile, FileExplorerFileType }