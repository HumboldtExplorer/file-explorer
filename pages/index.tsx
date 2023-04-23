import FolderContent from '@/components/FolderContent/FolderContent';

import { FileExplorerFileType } from '@/types/files';
import { createFolderStructure } from '@/utils/FileExplorer/utils';
import useSWR from 'swr'

// TODO: Add loading component while data is loading
// TODO: Add error component to handle any API errors
export default function FileExplorer() {
  const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then((res) => res.json())
  const { data, error } = useSWR('/api/file-explorer', fetcher,{ refreshInterval: 30000 })

  if (data) {
    const root = {
        'id': '',
        'name': '',
        'parent': null,
        'type': FileExplorerFileType.Folder,
        'children': createFolderStructure(data, null)
    }
    const folders = root?.children?.filter(child => child.type === FileExplorerFileType.Folder) || []
    const files = root?.children?.filter(child => child.type === FileExplorerFileType.File) || []

    return data && (
      <FolderContent data={data} currentFolder={root} folders={folders} files={files} />
    )
  }
}
