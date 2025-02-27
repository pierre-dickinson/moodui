import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionHeaders1 from '../components/headers/IndexSectionHeaders1';
import IndexSection__structures8 from '../components/__structures/IndexSection__structures8';
import IndexSectionFeatures18 from '../components/features/IndexSectionFeatures18';
import IndexSection__structures17 from '../components/__structures/IndexSection__structures17';
import IndexSection__structures3 from '../components/__structures/IndexSection__structures3';
import IndexSectionFeatures5 from '../components/features/IndexSectionFeatures5';
import IndexSectionFeatures7 from '../components/features/IndexSectionFeatures7';
import IndexSectionCta16 from '../components/cta/IndexSectionCta16';
import IndexSectionTeams15 from '../components/teams/IndexSectionTeams15';
import IndexSectionCta6 from '../components/cta/IndexSectionCta6';
import IndexSectionTeams14 from '../components/teams/IndexSectionTeams14';
import IndexSectionTestimonials9 from '../components/testimonials/IndexSectionTestimonials9';
import IndexSectionPricing11 from '../components/pricing/IndexSectionPricing11';
import IndexSectionFeatures13 from '../components/features/IndexSectionFeatures13';
import IndexSectionFaqs12 from '../components/faqs/IndexSectionFaqs12';
import IndexSectionCta10 from '../components/cta/IndexSectionCta10';
import IndexSectionFooters4 from '../components/footers/IndexSectionFooters4';

const meta = {
  title:
    'Mood\u0020UI\u0020\u002D\u0020Votre\u0020site\u0020web\u0020optimis\u00E9\u0020livr\u00E9\u0020en\u00205\u0020jours',
  meta: [
    {
      name: 'description',
      content:
        'Un\u0020site\u0020web,\u0020des\u0020landing\u0020pages\u0020design,\u0020des\u0020formulaires\u0020avanc\u00E9s\u0020et\u0020des\u0020milliers\u0020d\u0027int\u00E9grations\u0020pour\u0020automatiser',
    },
  ],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionHeaders1 />
      <IndexSection__structures8 />
      <IndexSectionFeatures18 />
      <IndexSection__structures17 />
      <IndexSection__structures3 />
      <IndexSectionFeatures5 />
      <IndexSectionFeatures7 />
      <IndexSectionCta16 />
      <IndexSectionTeams15 />
      <IndexSectionCta6 />
      <IndexSectionTeams14 />
      <IndexSectionTestimonials9 />
      <IndexSectionPricing11 />
      <IndexSectionFeatures13 />
      <IndexSectionFaqs12 />
      <IndexSectionCta10 />
      <IndexSectionFooters4 />
    </React.Fragment>
  );
}

