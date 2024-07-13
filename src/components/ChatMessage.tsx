import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ReactNode } from 'react';

type ChatMessageProps = {
    children: ReactNode;
}

const ChatMessage = ({children}: ChatMessageProps) => {
  return (
    <div className='px-3 flex flex-col text-slate-300'>
        <div className='flex items-center'>
            <AccountCircleIcon className='mr-1' fontSize='large'/>
            <h4>
              <span className='mr-2'>Shin Code</span>
              <small className='text-gray-500'>2022/12/23</small>
            </h4>
        </div>
        <p className='max-w-3xl ml-10'>{children}</p>
    </div>
  )
}

export default ChatMessage
