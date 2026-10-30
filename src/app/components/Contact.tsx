import { getTranslation, Locale } from '@/app/i18n';
import { ButtonLink, Container, LinkedInIcon, MailIcon, sectionTitleClasses } from '@/app/components/ui';

interface ContactProps {
  locale: Locale;
}

const EMAIL_USER = 'contact';
const EMAIL_DOMAIN = 'rockmary.com';
const EMAIL = `${EMAIL_USER}@${EMAIL_DOMAIN}`;
const LINKEDIN_URL = 'https://linkedin.com/in/pprdev/';

export default function Contact({ locale }: ContactProps) {
  const t = getTranslation.bind(null, locale);

  return (
    <Container as="section" id="contact" aria-labelledby="contact-title" className="flex flex-col gap-6 py-26">
      <div className="flex flex-wrap justify-between gap-12 rounded-[28px] bg-contrast p-[clamp(24px,6vw,72px)] text-white">
        <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-[18px]">
          <h2 id="contact-title" className={sectionTitleClasses('xl')}>
            {t('CONTACT_TITLE')}
          </h2>
          <p className="m-0 max-w-[520px] text-[19px] text-silver">{t('CONTACT_TEXT')}</p>
        </div>
        <div className="flex min-w-0 flex-[0_1_360px] flex-col justify-end gap-3.5">
          <ButtonLink
            href={`mailto:${EMAIL}`}
            size="lg"
            tone="dark"
            icon={<MailIcon className="flex-none" />}
            iconPosition="start"
            className="self-start text-[15px] sm:text-[16px]"
          >
            {EMAIL_USER}@<wbr />
            {EMAIL_DOMAIN}
          </ButtonLink>
          <ButtonLink
            href={LINKEDIN_URL}
            variant="outlineOnDark"
            size="lg"
            tone="dark"
            external
            icon={<LinkedInIcon className="flex-none" />}
            iconPosition="start"
            className="self-start"
          >
            {t('CONTACT_LINKEDIN')}
            <span className="sr-only"> {t('COMMON_NEW_TAB')}</span>
          </ButtonLink>
        </div>
      </div>
      <p className="m-0 text-center text-[16px] text-contrast-two">{t('CONTACT_ABOUT')}</p>
    </Container>
  );
}
