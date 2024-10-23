import { PropsWithChildren } from 'react';

import styles from './PageLayout.module.css';
import Header from '../Header';
import Footer from '../Footer';

export default function PageLayout({ children }: PropsWithChildren) {
  return (
    <div className={styles['page-layout']}>
      <div className={styles['page-layout--header']}>
        <Header />
      </div>
      <main className={styles['page-layout--content']}>{children}</main>
      <div className={styles['page-layout--footer']}>
        <Footer />
      </div>
    </div>
  );
}
