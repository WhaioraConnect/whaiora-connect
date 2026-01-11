import React from 'react';
import { Link } from 'react-router-dom';

export default function VerifyEmailPage() {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-background'>
            <h1 className='text-3xl font-bold mb-6'>Verify Your Email</h1>
            <p className='text-muted-foreground mb-4'>Check your inbox and click the verification link.</p>
            <Link to='/login' className='bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all'>Back to Login</Link>
        </div>
    );
}



