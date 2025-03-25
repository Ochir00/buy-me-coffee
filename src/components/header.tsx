import { Coffee } from 'lucide-react';
export function NormalHeader() {
    return (
        <div className="w-[100vw] h-[56px] flex justify-between items-center px-20">
            <div className='flex justify-center items-center'>
                <Coffee />
                <h2 className='text-[16px] font-semibold ml-3'>Buy Me Coffee</h2>
            </div>
            <button className='w-[102px] h-[40px] px-4 py-2 rounded-[8px] bg-[#F4F4F5]'>Log out</button>
        </div>
    )
}