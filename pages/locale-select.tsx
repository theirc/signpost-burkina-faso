import { default as LocaleSelectPageBase } from '@ircsignpost/signpost-base/dist/src/locale-select-page';
import type { Lang } from '@ircsignpost/signpost-base/dist/src/locale-select-page';
import Image from 'next/image';

import { SITE_TITLE } from '../lib/constants';

// Import the image from the public folder
import KibaruImage from '../public/Kibaru_white yellow.png';

const langs: Lang[] = [
  {
    langShort: 'fr',
    langLong: 'Français',
  },
];

/** The locale selection page.
 *
 * This page has two functionalities:
 * - Allow first time visitors to select their locale.
 * - Redirect recurring visitors to their selected locale.
 *
 * Before this page gets all data to make distinction between those two, it
 * renders a spinner.
 *
 * The page only shows the locale selection dialog to first time visitors.
 */
export default function LocaleSelectPage() {
  return (
    <LocaleSelectPageBase
      siteTitle={SITE_TITLE}
      message={'Sélectionnez votre langue'}
      langs={langs}
      // Use the Image component from next/image
      image={<Image src={KibaruImage} alt="Locale Selection Image" />}
    />
  );
}
