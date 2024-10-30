import logoBlack from '@/assets/logo-black.svg';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Footer.module.css';
import Navigation from '../Navigation';
import { MenuLocationEnum } from '@/gql/graphql';
import LanguageSelector, { AlternateLocale } from '../LanguageSelector';

type FooterProps = {
  alternateLocales?: AlternateLocale[];
};

export default function Footer({ alternateLocales }: FooterProps) {
  return (
    <footer className={styles['footer']}>
      <Link href="/homepage-en">
        <Image className={styles['logo']} src={logoBlack} alt="Doodle Logo" />
      </Link>
      <div className={styles['navigation']}>
        <Navigation location={MenuLocationEnum.Footer} />
      </div>
      <LanguageSelector alternateLocales={alternateLocales} />
    </footer>
  );
}
