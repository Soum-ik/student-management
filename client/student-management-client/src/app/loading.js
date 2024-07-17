import { Loader  } from 'lucide-react';
function Loading() {
    return <div className='  min-h-screen   flex items-center justify-center'>
        <Loader  className=' animate-spin'/>
    </div>;
}

export default Loading;