import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import FilePreviewList from "../FilePreviewList/FilePreviewList";
import FolderDoesNotExist from "../FolderDoesNotExist/FolderDoesNotExist";
import FolderPreviewList from "../FolderPreviewList/FolderPreviewList";
import NoFiles from "../NoFiles/NoFiles";
import Sidebar from "../Sidebar/Sidebar";
import { FolderContentProps } from "./FolderContent.types";

export default function FolderContent({data, currentFolder, folders, files} : FolderContentProps) {
    return (
        <div className="grid grid-rows-1 grid-cols-12 gap-4">
            <Sidebar data={data} />

            <section className="col-span-12 md:col-span-8 lg:col-span-10 px-6 md:p-6">
                <Breadcrumbs data={data} currentFolder={currentFolder} />

                {currentFolder && Boolean(folders.length === 0 && Boolean(files.length === 0)) && (
                    <NoFiles />
                )}

                {!Boolean(currentFolder) && (
                    <FolderDoesNotExist />
                )}

                <FolderPreviewList children={folders} />
                <FilePreviewList children={files} />
            </section>
        </div>
    )
}