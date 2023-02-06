import { MdOutlineRemoveCircle } from 'react-icons/md';

function Note() {
    return (
        <div className="bg-[rgba(255, 255, 255, 0.1)] | backdrop-filter backdrop-blur-sm | shadow-md | rounded-2xl border border-solid border-gray-700 | text-[#FFF] p-4 m-1 max-w-sm max-h-96 | flex flex-col justify-between break-words">
            <div className=""></div>
            <div className="flex items-center justify-between mb-4">
                <MdOutlineRemoveCircle 
                 className="cursor-pointer | hover:scale-x-110"
                 aria-hidden="true"
                 ></MdOutlineRemoveCircle>
            </div>
        </div>
    )
}

export default Note