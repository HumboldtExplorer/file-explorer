import { DocumentIcon, PhotoIcon, CodeBracketIcon } from '@heroicons/react/24/solid'
import { FilePreviewProps } from "./FilePreview.types";

const defaultIcon = <DocumentIcon className={`mx-auto h-12 w-12 text-blue-500`} />;
const photoIcon = <PhotoIcon className={`mx-auto h-12 w-12 text-blue-500`} />;
const codeIcon = <CodeBracketIcon className={`mx-auto h-12 w-12 text-blue-500`} />;

const getExtensionIcon = (ext: string) => {
    const icons: Record<string, JSX.Element> = {
        'default': defaultIcon,
        'svg': photoIcon,
        'webp': photoIcon,
        'js': codeIcon,
        'json': codeIcon,
        'ts': codeIcon,
    }

    return icons[ext] || icons['default']
}

export default function FilePreview({name, ext}: FilePreviewProps) {
  return (
    <div className="h-full flex flex-col p-4 mb-2 bg-slate-100 rounded-md">
        <p className="font-sans text-md mb-2">{name}.{ext}</p>

        <div className="mt-auto bg-white p-8 rounded-md">
            {getExtensionIcon(ext)}
        </div>
    </div>
  )
}