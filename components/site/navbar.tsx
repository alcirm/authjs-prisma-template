import Link from 'next/link';
import { Fingerprint, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import LoginBadge from '@/components/auth/login-badge';
import { ThemeToggle } from '../theme-toggle';
import Image from 'next/image';
type Props = {};

const Navbar = (props: Props) => {
  return (
    <>
      <nav className='hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
        <Link
          href='#'
          className='flex items-center gap-2 text-lg font-semibold md:text-base'
        >
          {/* <Fingerprint className="h-6 w-6 text-green-500" />
          <span className="sr-only">DeveloperDeck101 - Authjs</span> */}
          <Image
            className='block dark:hidden'
            src='/logo.png'
            width={250}
            height={60}
            alt='Logo'
          />
          <Image
            className='hidden dark:block'
            src='/logo_dark.png'
            width={250}
            height={60}
            alt='Logo'
          />
        </Link>
        <Link
          href='#'
          className='text-foreground transition-colors hover:text-foreground'
        >
          HOME
        </Link>
        <Link
          href='#'
          className='text-muted-foreground transition-colors hover:text-foreground'
        >
          Servidor
        </Link>
        <Link
          href='#'
          className='text-muted-foreground transition-colors hover:text-foreground'
        >
          Cliente
        </Link>
        <Link
          href='#'
          className='text-muted-foreground transition-colors hover:text-foreground'
        >
          API
        </Link>
        <Link
          href='#'
          className='text-muted-foreground transition-colors hover:text-foreground'
        >
          Middleware
        </Link>
      </nav>
      <div className='flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4'>
        <form className='ml-auto flex-1 sm:flex-initial'>
          <div className='relative'>
            <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
            <Input
              type='search'
              placeholder='Exemplo de pesquisa...'
              className='pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]'
            />
          </div>
        </form>
        <LoginBadge />
        <ThemeToggle />
      </div>
    </>
  );
};

export default Navbar;
