import { ReactNode } from "react"
import Channel from './Channel';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';

type ChannelGroupProps = {
    children: ReactNode;
}

const ChannelGroup = ({children}: ChannelGroupProps) => {
  return (
    <>
        <div className='mt-4 flex justify-between items-center text-slate-300'>
            <div className='flex items-center'>
                <KeyboardArrowDownIcon className='cursor-pointer hover:opacity-70 duration-150' fontSize="small"/>
                <h2 className='text-sm'>{children}</h2>
            </div>
            <AddIcon className='cursor-pointer hover:opacity-70 duration-150' fontSize="small"/>
        </div>
        <div className='flex flex-col justify-between'>
            <Channel>Udemy</Channel>    
            <Channel>Youtube</Channel>    
            <Channel>Udemy</Channel>    
            <Channel>Youtube</Channel>    
        </div>
    </>
  )
}

export default ChannelGroup
