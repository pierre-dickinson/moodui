import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MoodboardSectionSignIn1 from '../components/sign-in/MoodboardSectionSignIn1';

const meta = {
  title: 'Votre\u0020moodboard\u0020gratuit',
  meta: [
    {
      name: 'description',
      content:
        'Obtenez\u0020votre\u0020moodboard\u0020Moodui\u0020gratuitement\u0020en\u0020quelques\u0020clics.\u0020Recevez\u002Dle\u0020sous\u002024H.\u0020La\u0020premi\u00E8re\u0020\u00E9tape\u0020vers\u0020le\u0020succ\u00E8s\u0020de\u0020votre\u0020marque\u0020\u0021',
    },
    {
      name: 'description',
      content:
        'Un\u0020site\u0020web,\u0020des\u0020landing\u0020pages\u0020design,\u0020des\u0020formulaires\u0020avanc\u00E9s\u0020et\u0020\u002B2000\u0020int\u00E9grations\u0020pour\u0020automatiser\u0020vos\u0020processus.',
    },
  ],
  link: [],
  style: [],
  script: [
    {
      src: 'https://app.moodui.com/wp-content/plugins/gravity-forms-iframe-develop/assets/scripts/gfembed.min.js',
    },
  ],
};

export default function Moodboard() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <MoodboardSectionSignIn1 />
    </React.Fragment>
  );
}

