import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import classNames from 'classnames'

export const Header = () => {
  const router = useRouter()

  const headerItems = [
    { title: 'Home', path: '/home' },
    { title: 'Browse', path: '/browse' },
    { title: 'Shopping Cart', path: '/shoppingcart' },
    { title: 'Account', path: '/account' },
  ]
  return (
    <div>
      {headerItems?.map((item) => (
        <Link key={item.title} href={item.path}>
          <a
            className={classNames(
              'font-poppins',
              'text-lg',
              'ml-14',
              'transition-all',
              {
                'font-semibold text-white': router.pathname === item.path,
                'text-grey-300 hover:text-white': router.pathname !== item.path,
              }
            )}
          >
            {item.title}
          </a>
        </Link>
      ))}
    </div>
  )
}
