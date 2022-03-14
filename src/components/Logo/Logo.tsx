import { FC } from 'react'
import classnames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

import ILogo from './Logo.types'

const Logo: FC<ILogo> = ({ className, href = '/', ...rest }) => {
  return (
    <Link href={href}>
      <a className={classnames('flex-center', className)} {...rest}>
        <Image src={'/assets/header-logo.svg'} alt="Logo" width={174} height={45} />
      </a>
    </Link>
  )
}

export default Logo
