function mySettings(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="left">Donate</Text>}>
        <Link source="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4C66E4L5WYXSS&source=url">
          <TextImageRow
            label="PayPal"
            sublabel="patrick@federi.com"
            icon="https://pfederi.github.io/resources/paypal.png"
          />
        </Link>
      </Section>
      <Section
        title={<Text bold align="left">Contact</Text>}>
        <Link source="https://pfederi.github.io">
          <TextImageRow
            label="Email"
            sublabel="patrick@federi.com"
            icon="https://pfederi.github.io/resources/mail.png"
          />
        </Link>
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
