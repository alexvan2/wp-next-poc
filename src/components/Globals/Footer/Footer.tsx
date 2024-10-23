import logoBlack from '@/assets/logo-black.svg';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles['footer']}>
      <Link href="/homepage-en">
        <Image className={styles['logo']} src={logoBlack} alt="Doodle Logo" />
      </Link>
      <div className={styles['navigation']}>Navigation</div>
      <div className={styles['language-selector']}>🇬🇧 EN</div>
    </footer>
  );
}
