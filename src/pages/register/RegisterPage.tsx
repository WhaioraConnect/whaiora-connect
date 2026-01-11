import React from 'react';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-background'>
            <h1 className='text-3xl font-bold mb-6'>Register</h1>
            <form className='flex flex-col gap-4 w-80'>
                <input type='text' placeholder='First Name' className='p-3 border rounded-lg'/>
                <input type='text' placeholder='Last Name' className='p-3 border rounded-lg'/>
                <input type='email' placeholder='Email' className='p-3 border rounded-lg'/>
                <input type='password' placeholder='Password' className='p-3 border rounded-lg'/>
                <button type='submit' className='bg-primary text-primary-foreground p-3 rounded-lg font-semibold hover:bg-primary/90 transition-all'>Register</button>
            </form>
            <p className='mt-4 text-sm text-muted-foreground'>Already have an account? <Link to='/login' className='text-primary font-semibold'>Login</Link></p>
        </div>
    );
}



