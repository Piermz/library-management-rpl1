import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Sidebar, SidebarBody, SidebarLink } from '@/Components/ui/sidebar';
import { Head, Link, usePage } from '@inertiajs/react';
import { router } from '@inertiajs/core';
import { IconHome, IconBooks, IconCalendarClock, IconBookUpload, IconInfoCircle, IconUsers, IconUserCircle, IconSettings, IconArrowLeft, IconSearch } from '@tabler/icons-react';
import { PropsWithChildren, ReactNode, useState, useEffect } from 'react';

// Define the Links interface
interface Links {
    label: string;
    href?: string;
    onClick?: () => void;
    icon: ReactNode;
}

export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const links: {
        label: string;
        href: string;
        onClick?: () => void;
        icon: ReactNode;


    }[] = [
            {
                label: "Beranda",
                href: "dashboard",
                icon: (
                    <IconHome className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                ),
            },
            {
                label: "Lemari Buku",
                href: "#",
                icon: (
                    <IconBooks className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                ),
            },
            {
                label: "Tambah Buku",
                href: "#",
                icon: (
                    <IconBookUpload className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                ),
            },
            {
                label: "Informasi",
                href: "#",
                icon: (
                    <IconInfoCircle className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                ),
            },
            {
                label: "Anggota",
                href: "admin",
                icon: (
                    <IconUsers className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                ),
            },
            {
                label: "Karyawan",
                href: "#",
                icon: (
                    <IconUserCircle className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                ),
            },
            {
                label: "Pengaturan",
                href: "#",
                icon: (
                    <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                ),
            },

        ];
    const [open, setOpen] = useState(false);
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

    // const handleLogout = (e: React.MouseEvent) => {
    //     e.preventDefault();
    //     router.post(route('logout'));
    // };

    return (
        <div className="flex min-h-screen bg-gray-100-100 dark:bg-neutral-900">
            <Sidebar open={open} setOpen={setOpen}>
                <SidebarBody className="justify-between gap-10">
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                        <Logo />
                        <div className="mt-8 flex flex-col gap-2">
                            {links.map((link, idx) => (
                                <SidebarLink key={idx} link={link} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <SidebarLink
                            link={{
                                label: "Keluar",
                                href: "#",
                                icon: (
                                    <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                                ),
                            }}
                        />
                    </div>
                </SidebarBody>
            </Sidebar>

            <div className="flex-1 flex flex-col">
                <Head title="Dashboard" />

                {header && (
                    <header className="bg-white shadow dark:bg-neutral-800">
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 text-gray-800 dark:text-white">
                            {header}
                        </div>
                    </header>
                )}


                <nav className="bg-neutral-100">
                    <div className="mx-auto px-4 sm:px-6 lg:px-10">
                        <div className="flex justify-between items-center h-16">
                            <div className="flex-shrink-0 flex items-center">
                                <div className="relative w-64">
                                    <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-700 dark:text-neutral-200 h-5 w-5" />
                                    <input
                                        type="text"
                                        placeholder="Cari buku"
                                        className="pl-10 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="text-white flex gap-3 text-sm">
                                    <p className='text-black'>{formattedDate}</p>
                                    <p className="text-right text-black font-semibold">{formattedTime}</p>
                                    <IconCalendarClock className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                                </div>
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button className="flex items-center font-semibold">
                                            <img
                                                src="image/psht.jpg"
                                                alt="User avatar"
                                                className="w-10 h-10 rounded-full border-2 border-neutral-500 dark:border-white"
                                            />
                                        </button>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content>
                                        <Dropdown.Link href='{route("profile.edit")}'>
                                            <span className='block text-sm text-gray-700 dark:text-white'>
                                                {user.name}
                                            </span>
                                        </Dropdown.Link>
                                        <Dropdown.Link href='{route("profile.edit")}'>
                                        Edit Profile
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </nav>
                <main className="flex-1 p-4">
                    {children}
                </main>
            </div>
        </div>
    );
}

// Komponen Logo untuk sidebar
function Logo() {
    return (
        <Link href="#" className="font-normal flex space-x-2 items-center text-sm text-black dark:text-white py-1 relative z-20">
            <img src='image/2.png' alt='logo buku' className="h-5 w-6 dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
            <span className="font-medium">Library Pesat IT XPRO</span>
        </Link>
    );
}
