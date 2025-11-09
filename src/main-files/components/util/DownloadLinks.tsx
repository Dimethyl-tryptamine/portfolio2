
import { BsDownload } from 'react-icons/bs';





type DownloadLinksProps = {
    text?: string;
    file?: string;
};





const DownloadLinks = ({text,file}: DownloadLinksProps) => {
    return (
        <a download="BryanReyes-portfolio" href ={file} className='bg-tertiary m-1  cursor-pointer text-[.8rem] sml:text-[1rem] med:text-[1.5rem] border-primary border-[.1rem] flex justify-center items-center rounded-xl p-1 pt-[.15rem] pb-[.15rem] shadow-[0px_0px_5px_1px_rgba(136,0,255,0.8)]'>
            <BsDownload /> {text}
        </a>
    )
}
export default DownloadLinks