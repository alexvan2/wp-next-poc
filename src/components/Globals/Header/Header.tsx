import logo from '@/assets/logo.svg';

import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Button, { ButtonFragment } from '@/components/Blocks/Button';
import Navigation from '../Navigation';
import { MenuLocationEnum } from '@/gql/graphql';

export default function Header() {
  const loginButton: ButtonFragment = {
    clientId: 'login-button',
    name: 'core/button',
    attributes: {
      anchor: null,
      url: 'https://doodle.com/login',
      linkTarget: '__self',
      rel: null,
      text: 'Login',
      fontSize: null,
      textAlign: null,
      className: 'is-style-outline',
      style: JSON.stringify({ border: { radius: '1000px' } }),
      buttonWidth: null,
    },
  };

  const createButton: ButtonFragment = {
    clientId: 'login-button',
    name: 'core/button',
    attributes: {
      anchor: null,
      url: 'https://doodle.com/meeting/organize/groups',
      linkTarget: '__self',
      rel: null,
      text: 'Create',
      fontSize: null,
      textAlign: null,
      className: 'is-style-fill',
      style: JSON.stringify({ border: { radius: '1000px' } }),
      buttonWidth: null,
    },
  };

  return (
    <header className={styles['header']}>
      <Link href="/homepage-en">
        <Image className={styles['logo']} src={logo} alt="Doodle logo" />
      </Link>
      <div className={styles['navigation']}>
        <Navigation location={MenuLocationEnum.Header} />
      </div>
      <div className={styles['actions']}>
        <Button data={loginButton} />
        <Button data={createButton} />
      </div>
    </header>
  );
}
