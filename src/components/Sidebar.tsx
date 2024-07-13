import ChannelGroup from './ChannelGroup';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
  return (
    <div className='h-full flex basis-1/3'>
        {/* サイドバー左側*/}
        <div className='h-full w-20 py-4 flex flex-col items-center gap-3 bg-custom-gray-300'>
            <div className="h-12 w-12 rounded-full flex items-center justify-center bg-custom-gray-100 cursor-pointer hover:opacity-70 duration-150"><img src="../../public/vite.svg"/></div>
            <div className="h-12 w-12 rounded-full flex items-center justify-center bg-custom-gray-100 cursor-pointer hover:opacity-70 duration-150"><img src="../../public/vite.svg"/></div>
        </div>
        {/* サイドバー右側*/}
        <div className='h-full grid grid-rows-10 grow bg-custom-gray-200'>
            {/*ヘッダー*/}
            <div className='row-span-1  px-4 flex justify-between items-center text-slate-300'>
                <h1 className='text-lg'>Discord</h1>
                <KeyboardArrowDownIcon className='cursor-pointer hover:opacity-70 duration-150'/>
            </div>
            {/*チャンネル*/}
            <div className='row-span-8 px-2 overflow-auto'>
              <ChannelGroup>プログラミングチャンネル</ChannelGroup>
              <ChannelGroup>プログラミングチャンネル</ChannelGroup>
            </div>
            {/*アカウント情報*/}
            <div className='row-span-1 flex justify-between items-center py-3 px-4 text-sm border-t border-gray-500 bg-custom-gray-200'>
              <div className='flex '>
                <img src="../../vite.svg" className='mr-3'/>
                <div>
                  <h2 className='text-slate-300'>shiroishi</h2>
                  <span className='text-gray-500 text-xs'>#4959</span>
                </div>
              </div>
              <div className='text-slate-300 flex gap-1'>
                <MicIcon className='cursor-pointer hover:opacity-70 duration-150' fontSize="small"/>
                <HeadphonesIcon className='cursor-pointer hover:opacity-70 duration-150' fontSize="small"/>
                <SettingsIcon className='cursor-pointer hover:opacity-70 duration-150' fontSize="small"/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
