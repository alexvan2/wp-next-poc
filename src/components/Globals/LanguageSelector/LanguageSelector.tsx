'use client';

import { useState } from 'react';
import styles from './LanguageSelector.module.css';
import classNames from 'classnames';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export type AlternateLocale = {
  locale: string;
  slug: string;
};

type LanguageSelectorProps = {
  alternateLocales?: AlternateLocale[];
};

function getLabel(locale: string) {
  switch (locale) {
    case 'en':
      return '🇬🇧 EN';
    case 'de':
      return '🇩🇪 DE';
    case 'pt_BR':
      return '🇧🇷 PT';
    default:
      return '🇬🇧 EN';
  }
}

export default function LanguageSelector({ alternateLocales }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { locale } = useParams<{ locale: string }>();

  return (
    <div className={styles['language-selector']}>
      <div
        className={classNames(styles['language-selector--label'], {
          [styles['language-selector--label__active']]: isOpen,
        })}
        onClick={() => setIsOpen(!isOpen)}
      >
        {getLabel(locale ?? '')}
      </div>

      <div
        className={classNames(styles['language-selector--links'], {
          [styles['language-selector--links__active']]: isOpen,
        })}
      >
        {alternateLocales?.map((locale) => (
          <Link
            key={locale.locale}
            href={`/${locale.locale}/${locale.slug}`}
            className={styles['language-selector--link']}
          >
            {getLabel(locale.locale)}
          </Link>
        ))}
      </div>
    </div>
  );
}
