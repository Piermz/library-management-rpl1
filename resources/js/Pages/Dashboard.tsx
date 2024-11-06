import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import React, { useState } from "react";
import {
    IconArrowLeft,
    IconBrandTabler,
    IconSettings,
    IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarBody, SidebarLink } from '@/Components/ui/sidebar';
import { IconBooks, IconBook2, IconBookOff, IconBookUpload } from '@tabler/icons-react';

// Komponen utama Dashboard dengan layout dan sidebar
export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <DashboardContent />
        </AuthenticatedLayout>
    );
}



// Konten dashboard
const DashboardContent = () => (
    <div className="flex flex-col ps-6 pe-6">
        <div className='p-4 bg-[#FBFBFB] rounded-xl shadow-md  '>
            <div className='flex flex-row gap-14 p-4 justify-between'>
                <img src="image/1.png" alt="" className='w-full max-w-md ' />
                <div className='flex flex-col justify-center'>
                    <h1 className='text-4xl'><span className='font-extrabold'>halo</span>, admin!</h1>
                    <p className='text-sm font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed unde, at magni aperiam, veritatis provident fugit delectus aut totam nesciunt necessitatibus voluptas. Accusantium eos a, quos necessitatibus numquam expedita odio.</p>
                    <div className='flex flex-row gap-4 mt-4'>
                        <Link href='#' className='bg-neutral-200 p-3 rounded-xl shadow-md text-black hover:shadow-lg transition duration-300'>Baca Buku</Link>
                        <Link href='#' className='bg-[#A78B61] p-3 rounded-xl shadow-md text-white hover:shadow-lg transition duration-300'>Pinjam Buku</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-between items-center'>
            <div>
            <h1 className='mt-8 text-2xl font-semibold'>Info Dashboard Buku</h1>
            <p>Dashboard informasi buku total buku dipinjam, buku sedang dipinjam, buku dikembalikan, buku rusak</p>
            </div>
            <button className='bg-neutral-200 p-3 mt-4 rounded-xl shadow-md text-black hover:shadow-lg transition duration-300'>Kelola</button>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative p-6 bg-[#6E987C] text-white rounded-xl shadow-lg h-48 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <IconBooks className="w-16 h-16" />
                    <p className="text-5xl">150</p>
                </div>
                <p className="text-sm text-center mt-4">Total buku dipinjam</p>
            </div>
            <div className="relative p-6 bg-[#22615D] text-white rounded-xl shadow-lg h-48 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <IconBook2 className="w-16 h-16" />
                    <p className="text-5xl">45</p>
                </div>
                <p className="text-sm text-center mt-4">Sedang dipinjam</p>
            </div>
            <div className="relative p-6 bg-[#FBC78F] text-white rounded-xl shadow-lg h-48 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <IconBookUpload className="w-16 h-16" />
                    <p className="text-5xl">90</p>
                </div>
                <p className="text-sm text-center mt-4">Buku dikembalikan</p>
            </div>
            <div className="relative p-6 bg-[#AC455E] text-white rounded-xl shadow-lg h-48 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <IconBookOff className="w-16 h-16" />
                    <p className="text-5xl">5</p>
                </div>
                <p className="text-sm text-center mt-4">Buku rusak</p>
            </div>
        </div>
    </div>
);
