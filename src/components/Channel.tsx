import { ReactNode } from "react"

type ChannelProps = {
    children: ReactNode;
}

const Channel = ({children}: ChannelProps) => {
  return (
    <div className='mt-2 pl-6 text-gray-500 cursor-pointer rounded-md hover:bg-custom-gray-100 hover:text-slate-300 duration-150'>
        <p><span className='mr-2'>#</span>{children}</p>
    </div>
  )
}

export default Channel
