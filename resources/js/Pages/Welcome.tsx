import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { IconCalendarClock } from '@tabler/icons-react';
import { PropsWithChildren, ReactNode, useState, useEffect } from 'react';

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

      const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formattedDate = currentTime.toLocaleString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const formattedTime = currentTime.toLocaleString("id-ID", {
        hour: "numeric",
        minute: "numeric",
        hour12: false,
        timeZone: "Asia/Jakarta",
    });

    return (
        <>
            <Head title="Welcome" />
            {/* <nav className="bg-neutral-100">
                <div className="mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="flex justify-end items-center h-16">
                        <div className="flex items-center space-x-4">
                            <div className="text-white flex gap-3 text-sm">
                                <p className='text-black'>{formattedDate}</p>
                                <p className="text-right text-black font-semibold">{formattedTime}</p>
                                <IconCalendarClock className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav> */}
            <div className="flex flex-col items-center bg-[#F4F4F4] justify-center min-h-screen">
                <img src="image/1.png" alt="" className='w-full max-w-md' />
                <h1 className="text-center mt-4  text-4xl">Selamat Datang di e perpustakaan SMK Pesat IT XPRO</h1>
                <p className="text-center mt-2 max-w-screen-lg mx-auto">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem
                    Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
                <Link href={route('login')}  className="bg-[#aeaeae] text-black px-4 py-2 mt-3 rounded-lg transition duration-150 ease-in-out hover:bg-[#b5b5b5]">Explore</Link>
            </div>

        </>
    );
}
