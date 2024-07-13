import ChatMessage from './ChatMessage';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PushPinIcon from '@mui/icons-material/PushPin';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import HelpIcon from '@mui/icons-material/Help';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Chat = () => {
  return (
    <div className='h-full grid grid-rows-10 grow bg-custom-gray-100'>
        {/*チャットヘッダー*/}
        <div className='row-span-1 py-3 px-4 flex justify-between items-center'>
            <div>
                <span className='mr-2 text-gray-500'>#</span><span className='text-slate-300'>Udemy</span>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 text-gray-500'>
                    <NotificationsIcon className='cursor-pointer hover:opacity-70 duration-150' fontSize="small"/>
                    <PushPinIcon className='cursor-pointer hover:opacity-70 duration-150' fontSize="small"/>
                    <PeopleAltIcon className='cursor-pointer hover:opacity-70 duration-150' fontSize="small"/>
                </div>
                <div className='w-52 mx-4 pl-3 py-1 flex justify-between bg-custom-gray-300 rounded-md'>
                    <input className='text-xs text-slate-300' placeholder='検索'/>
                    <SearchIcon className='cursor-pointer hover:opacity-70 duration-150 text-gray-500'  fontSize="small"/>
                </div>
                <div className='flex gap-2'>
                    <SendIcon className='cursor-pointer hover:opacity-70 duration-150 text-gray-500'  fontSize="small"/>
                    <HelpIcon className='cursor-pointer hover:opacity-70 duration-150 text-gray-500'  fontSize="small"/>
                </div>
            </div>
        </div>
        {/*チャットメッセージ*/}
        <div className='row-span-8 flex flex-col gap-5 overflow-y-auto'>
            <ChatMessage>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum culpa perspiciatis sunt ut numquam nihil dolore sapiente. Assumenda laborum obcaecati, perspiciatis in cum reprehenderit recusandae, sunt ducimus odio, enim excepturi.</ChatMessage>
            <ChatMessage>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum culpa perspiciatis sunt ut numquam nihil dolore sapiente. Assumenda laborum obcaecati, perspiciatis in cum reprehenderit recusandae, sunt ducimus odio, enim excepturi.</ChatMessage>
            <ChatMessage>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum culpa perspiciatis sunt ut numquam nihil dolore sapiente. Assumenda laborum obcaecati, perspiciatis in cum reprehenderit recusandae, sunt ducimus odio, enim excepturi.</ChatMessage>
            <ChatMessage>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum culpa perspiciatis sunt ut numquam nihil dolore sapiente. Assumenda laborum obcaecati, perspiciatis in cum reprehenderit recusandae, sunt ducimus odio, enim excepturi.</ChatMessage>
            <ChatMessage>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum culpa perspiciatis sunt ut numquam nihil dolore sapiente. Assumenda laborum obcaecati, perspiciatis in cum reprehenderit recusandae, sunt ducimus odio, enim excepturi.</ChatMessage>
            <ChatMessage>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum culpa perspiciatis sunt ut numquam nihil dolore sapiente. Assumenda laborum obcaecati, perspiciatis in cum reprehenderit recusandae, sunt ducimus odio, enim excepturi.</ChatMessage>
            <ChatMessage>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum culpa perspiciatis sunt ut numquam nihil dolore sapiente. Assumenda laborum obcaecati, perspiciatis in cum reprehenderit recusandae, sunt ducimus odio, enim excepturi.</ChatMessage>
            <ChatMessage>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum culpa perspiciatis sunt ut numquam nihil dolore sapiente. Assumenda laborum obcaecati, perspiciatis in cum reprehenderit recusandae, sunt ducimus odio, enim excepturi.</ChatMessage>
        </div>
        {/*チャットヘッダー*/}
        <div className='row-span-1 flex items-center'>
            <div className='w-full  mx-4 p-3 flex justify-between items-center rounded-md bg-custom-gray-400'>
                <div className='flex w-full'>
                    <AddCircleOutlineIcon  className='cursor-pointer hover:opacity-70 duration-150 text-gray-500' fontSize="small"/>
                    <form className='w-full'>
                        <input className='w-full px-3 text-slate-300' placeholder='#Udemyへメッセージを送信'/>
                        <button type='submit'></button>
                    </form>
                </div>
                <div className='flex gap-1'>
                    <CardGiftcardIcon  className='cursor-pointer hover:opacity-70 duration-150 text-gray-500' fontSize="small"/>
                    <GifIcon  className='cursor-pointer hover:opacity-70 duration-150 text-gray-500' fontSize="small"/>
                    <EmojiEmotionsIcon  className='cursor-pointer hover:opacity-70 duration-150 text-gray-500' fontSize="small"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chat
