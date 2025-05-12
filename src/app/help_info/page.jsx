import React from 'react'
import Dashboard from '../dashboard'

export default function page() {
  return (
    <Dashboard>
        <div>
            <p className='mb-4'>At <span className='font-bold'>{process.env.APP_NAME}</span>, we are dedicated to ensuring a smooth and efficient experience for everyone using our platform—whether you're a client seeking legal assistance or an attorney managing your cases. Our support team is always ready to help with anything from account setup, profile updates, and document uploads to case management and technical guidance.</p>
            <p className='mb-4'>If you are facing issues connecting with a lawyer, handling documents, or navigating the dashboard, our admin team is just a message away. Attorneys can also reach out for help with managing assigned case types, updating availability, or accessing client details.</p>
            <p className='mb-4'>Your success on <span className='font-bold'>{process.env.APP_NAME}</span> is our priority. For any questions, concerns, or technical assistance, feel free to contact us through our Support Center or at admin@gmail.com. We are here to help—every step of the way.</p>
        </div>
    </Dashboard>
  )
}
