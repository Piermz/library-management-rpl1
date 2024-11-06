import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

function index() {

    const DashboardContent = () => (
    <div className='flex flex-col ps-6 pe-6'>
            ini halaman anggota
        </div>
    )

    return (

        <Authenticated>
            <Head title="" />
            <DashboardContent/>
        </Authenticated>

    )

}

export default index
