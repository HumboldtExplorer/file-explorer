import FolderContent from '@/components/FolderContent/FolderContent';
import { FileExplorerFileType } from '@/types/files';
import { createFolderStructure, getFolderById } from '@/utils/FileExplorer/utils';
import { useRouter } from 'next/router'
import useSWR from 'swr'


const File = () => {
  const router = useRouter()
  const { id } = router.query
  const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then((res) => res.json())

  const { data, error } = useSWR('/api/file-explorer', fetcher,{ refreshInterval: 30000 })

  if (data) {
    const folder = getFolderById(createFolderStructure(data, null), id as string)
    const folders = folder?.children?.filter(child => child.type === FileExplorerFileType.Folder) || []
    const files = folder?.children?.filter(child => child.type === FileExplorerFileType.File) || []

    return data && (
     <FolderContent data={data} currentFolder={folder} folders={folders} files={files} />
    )
  }
}

export default File
