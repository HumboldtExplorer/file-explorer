import { SidebarProps } from './Sidebar.types'
import Folder from '../Folder/Folder';
import { createFolderStructure } from '@/utils/FileExplorer/utils';
import Link from 'next/link';

export default function Sidebar({data}: SidebarProps) {
    const folders = createFolderStructure(data, null)

    return (
        <aside className="min-h-screen max-h-screen col-span-2 p-6 bg-slate-100 shadow-xl shadow-black-500/50">
            <p className='font-sans font-bold text-2xl mb-6'>File Explorer</p>
            <Link 
              className="font-sans block font-bold text-md mb-2"
              href={'/'}>
              My Files
            </Link>

            <ul className="ml-4">
            {folders.map(folder => {
              return (
                <li key={folder.id} className='py-1'>
                  <Folder file={folder} />
                </li> 
              )
            })}
           </ul>
        </aside>
    )
  }