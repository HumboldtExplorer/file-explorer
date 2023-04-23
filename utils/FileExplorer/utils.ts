import { FileExplorerFile, FileExplorerFileType } from "@/types/files";


// TODO: Refactor this to use a generic interface (e.g.: Node, with the properties id, parent and children (optional))
// Then it can be re-used for any data structure that adheres to this interface
// Recursively iterates through an array of folders and creates a hierarchical folder structure
function createFolderStructure(files: FileExplorerFile[], parentId: string|null) : FileExplorerFile[] {
    
    if (!files) { return [] }

    const parents = files.filter(file => file.parent === parentId);
  
    if (parents.length === 0) { return [] }
  
    return parents.map<FileExplorerFile>(child => {
      const children = createFolderStructure(files, child.id)
  
      if (children?.length) {
        child.children = children;
      }
  
      return child
    })
}

function getFolderById(files: FileExplorerFile[], id: string): FileExplorerFile | null {
    const foldersById: { [key: string]: FileExplorerFile } = {}
    files.forEach(file => {
        if (file.type === FileExplorerFileType.Folder) {
            foldersById[file.id] = file
        }
    })

    if (foldersById[id]) {
        return foldersById[id]
    }

    for (const file of Object.values(foldersById)) {
        if (file.hasOwnProperty('children') && file.children.length > 0) {
            const foundFolder = getFolderById(file.children, id)
            if (foundFolder !== null) {
                return foundFolder
            }
        } 
    }

    return null
}

export { createFolderStructure, getFolderById }