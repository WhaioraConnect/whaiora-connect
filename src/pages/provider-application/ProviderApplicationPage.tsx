import React from 'react';
import { Link } from 'react-router-dom';

export default function ProviderApplicationPage() {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-background'>
            <h1 className='text-3xl font-bold mb-6'>Provider Application</h1>
            <form className='flex flex-col gap-4 w-80'>
                <input type='text' placeholder='Business Name' className='p-3 border rounded-lg'/>
                <input type='text' placeholder='Contact Person' className='p-3 border rounded-lg'/>
                <input type='email' placeholder='Email' className='p-3 border rounded-lg'/>
                <button type='submit' className='bg-primary text-primary-foreground p-3 rounded-lg font-semibold hover:bg-primary/90 transition-all'>Apply</button>
            </form>
            <Link to='/' className='mt-4 text-primary font-semibold'>Back to Home</Link>
        </div>
    );
}



