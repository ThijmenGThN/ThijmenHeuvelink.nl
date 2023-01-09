import Image from 'next/image'
import { FiLogOut, FiSmile } from 'react-icons/fi'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import type Directus from '@/types/Directus'

import Navbar from '@/components/Navbar'
import User from '@/components/portal/User'
import Switcher from '@/components/portal/Switcher'

export default function Index({ API }: { API: Directus }) {
  const [me, setMe] = useState<any>()
  const [payments, setPayments] = useState<any>()

  useEffect(() => {
    API.users.me.read()
      .catch(() => window.location.replace('/portal/login'))
      .then((_me: any) => {
        setMe(_me)
        API.items('payments').readByQuery({ limit: -1 })
          .then((_payments: any) => setPayments(_payments.data.filter((payment: any) => payment.paid == false)))
      })
  }, [API])

  return (
    <>
      <Navbar />

      <div className='mt-16 mx-auto container'>
        <User me={me} />

        <div className='flex mt-4 gap-2'>
          <Switcher link='payments' />

          <div className='grow rounded-lg bg-white w-full border px-4 py-2 flex flex-col gap-2'>
            <p className='font-semibold'>Payments</p>

            {
              payments && payments.length > 0 ? (
                <ul className='grid grid-cols-2 gap-4'>
                  {
                    payments.map((payment: any, index: number) => !payment.paid && (
                      <li key={index} className='relative border bg-neutral-100 rounded z-0 overflow-hidden'>
                        <div className='absolute top-0 left-0 w-full -z-10 h-full'>
                          <Image src={"https://picsum.photos/300?random=" + payment.shortcode} alt="BG" fill />
                        </div>

                        <div className='flex gap-4 flex-col bg-white/70 backdrop-blur px-4 py-2 h-full'>
                          <div className='font-semibold flex justify-between'>
                            <p>{payment.shortcode}</p>
                            <p>€{payment.amount}</p>
                          </div>
                          <p className='grow'><span className='font-semibold'>{payment.title}</span> • {payment.description}</p>
                          {
                            payment.revolut ? (
                              <Link className='bg-black px-4 py-2 rounded text-white hover:-m-1 hover:px-5 text-center hover:py-3 transition-all' href={payment.revolut}>
                                Pay
                              </Link>
                            ) : (
                              <div className='border-black border px-4 py-2 rounded text-center'>
                                Payment unavailable
                              </div>
                            )
                          }
                        </div>
                      </li>
                    ))
                  }
                </ul>
              ) : (
                <div className='flex h-full w-full justify-center items-center'>
                  <div className='flex flex-col gap-2 items-center'>
                    <div className='p-4 rounded-full bg-neutral-100 border'>
                      <FiSmile />
                    </div>
                    <p>All payments have been settled</p>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}
