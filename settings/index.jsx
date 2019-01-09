function mySettings(props) {
  return (
    <Page>
      <Section
<<<<<<< HEAD
        title={<Text bold align="center">Donate</Text>}>
=======
        title={<Text bold align="left">Donate</Text>}>
>>>>>>> Release-1.3.0
        <Link source="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=patrick@supweather.net&item_name=Fitbit+SUP+App+Donation">
          <TextImageRow
            label="PayPal"
            sublabel="patrick@supweather.net"
            icon="https://pfederi.github.io/resources/paypal.png"
          />
        </Link>
      </Section>
      <Section
<<<<<<< HEAD
        title="Contact">
=======
        title={<Text bold align="left">Contact</Text>}>
>>>>>>> Release-1.3.0
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
