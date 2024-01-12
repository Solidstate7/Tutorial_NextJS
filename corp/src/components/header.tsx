import Link from 'next/link';

export default function Header() {
  return (
    <div className='text-grey-500'>
      <Link href={'/'}>Home Page</Link>
      <Link href={'/performance'}>Performance Page</Link>
      <Link href={'/reliability'}>Reliability Page</Link>
      <Link href={'/scale'}>Scale Page</Link>
    </div>
  );
}
