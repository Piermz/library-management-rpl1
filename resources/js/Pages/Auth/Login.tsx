import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <div>
                <h1 className="text-2xl font-bold text-white">Selamat Datang di Perpustakaan <span className='font-normal'>SMK Pesat IT XPRO</span></h1>
                <p className='text-white font-extralight text-sm mt-4 mb-2'>Silahkan login dengan akun anggota anda</p>
            </div>
            <form onSubmit={submit}>
                <div>

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
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
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                        placeholder='Masukan Password'
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 block">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData('remember', e.target.checked)
                            }
                        />
                        <div className='ms-1 flex flex-row justify-between w-full'>
                            <span className="ms-2 text-sm text-white">
                                Ingat Saya
                            </span>
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="rounded-md text-sm text-white underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Kamu lupa Password?
                                </Link>
                            )}
                        </div>
                    </label>
                </div>

                <div className="mt-4">


                    <PrimaryButton className="justify-center items-center w-full bg-[#D9D9D9]" disabled={processing}>
                        Masuk
                    </PrimaryButton>
                    <div className="mt-4 text-center">
                        <Link
                            href={route('register')}
                            className="text-sm text-white underline hover:text-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Belum punya akun? daftar
                        </Link>
                    </div>
                </div>
            </form>
        </GuestLayout>
    );
}
