import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-row gap-24 items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
            <div>
            <img src="image/1.png" alt="" className='w-full max-w-md' />
            </div>

            <div className="mt-6 w-full overflow-hidden bg-[#6E987C] px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
