import { PropsWithChildren } from 'react';

import styles from './PageLayout.module.css';
import Header from '../Header';
import Footer from '../Footer';
import { AlternateLocale } from '../LanguageSelector';

type PageLayoutProps = PropsWithChildren<{
  alternateLocales?: AlternateLocale[];
}>;

export default function PageLayout({ children, alternateLocales }: PageLayoutProps) {
  return (
    <div className={styles['page-layout']}>
      <div className={styles['page-layout--header']}>
        <Header />
      </div>
      <main className={styles['page-layout--content']}>{children}</main>
      <div className={styles['page-layout--footer']}>
        <Footer alternateLocales={alternateLocales} />
      </div>
    </div>
  );
}
