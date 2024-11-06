import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

function index() {

    const [count, setCount] = React.useState(0);
    const [text, setText] = React.useState(0);
    // const DashboardContent = () => (
    //     <div className='flex flex-col ps-6 pe-6'>
    //         ini halaman anggota
    //     </div>
    // )


    const AdminIndex = () => (
        // <Authenticated>
        <div>
            <p>Kamu sudah mengklik tombol sebanyak {count} kali .</p>
            <p>Text yang kamu masukkan adalah {text}.</p>
            <input
                type="number"
                value={text}
                onChange={(e) => setText(parseInt(e.target.value))}
                className="border rounded-md p-2 mt-2 mb-2"
            />
            <button className='bg-neutral-200 p-3 mt-4 rounded-xl shadow-md text-black hover:shadow-lg transition duration-300' onClick={() => setCount(count + 1)}>
                Klik saya
            </button>
        </div>        // </Authenticated>
    )

    return (

        <Authenticated>
            <Head title="" />
            {/* <DashboardContent /> */}
            <AdminIndex />
        </Authenticated>

    )

}

export default index
