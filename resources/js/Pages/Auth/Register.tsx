import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>

            <Head title="Register" />
            <div>
                <h1 className="text-2xl font-bold text-white">Daftarkan Anda menjadi Anggota e Perpustakaan <span className='font-normal'>SMK Pesat IT XPRO</span></h1>
                <p className='text-white font-extralight text-sm mt-4 mb-2'>Lengkapi data dibawah ini</p>
            </div>
            <form onSubmit={submit}>
                <div>

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        placeholder='Masukan Nama Kamu'
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">


                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        placeholder='Masukan Email Kamu'
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">


                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                        placeholder='Masukan Password'
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        required
                        placeholder='Konfirmasi Password'
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4">

                    <PrimaryButton  className="justify-center items-center w-full bg-[#D9D9D9]" disabled={processing}>
                        Register
                    </PrimaryButton>
                    <div className="mt-4 text-center">
                        <Link
                            href={route('login')}
                            className="text-sm text-white underline hover:text-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Kamu sudah punya akun? Masuk
                        </Link>
                    </div>
                </div>
            </form>
        </GuestLayout>
    );
}
