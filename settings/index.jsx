function mySettings(props) {
  return (


    <Page>
    <Section
      title={<Text bold align="center">Weather data</Text>}>
      <Text>
        <Link source="https://www.darksky.net">Powered by Dark Sky</Link>. The Dark Sky API is backed by a wide range of weather data sources, which are aggregated together to provide the most accurate forecast possible for a given location.
      </Text>
    </Section>
      <Section
        title={<Text bold align="center">Known issues</Text>}>
        <Text>
          The exercise name is shown as cycling on the activity screen on the fitbit website. This is a known bug on the Fitbit API.
        </Text>
        <Text>
          When water is on the touch screen there is a chance that the activity is pausing
        </Text>
      </Section>
      <Section
        title={<Text bold align="center">Contact Me</Text>}>
        <Text>
          Please don't hesitate to contact me with questions or suggestions; but be sure to let me know which watch and software version you are talking about. This app will always be free and Open Source. If you really like my app please consider buying me a coffee (or more likely electronic components). Thanks!
        </Text>
        <Link source="https://pfederi.github.io">
          <TextImageRow
            label="Email"
            sublabel="patrick@federi.com"
            icon="https://pfederi.github.io/resources/mail.png"
          />
        </Link>
        <Link source="https://github.com/pfederi/fitbit-sup">
          <TextImageRow
            label="Github"
            sublabel="https://github.com/pfederi/fitbit-sup"
            icon="https://pfederi.github.io/resources/github.png"
          />
        </Link>
        <Link source="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4C66E4L5WYXSS&source=url">
          <TextImageRow
            label="PayPal"
            sublabel="patrick@federi.com"
            icon="https://pfederi.github.io/resources/paypal.png"
          />
        </Link>
      </Section>
      <Section
        title={<Text bold align="center">Build Version and Notes</Text>}>
        <Text>
          2.0: Added Weather Module; Updated Settings
        </Text>
        <Text>
          1.2.5: Smaller font size because the time was cut off when training lasted more than one hour; Updated to SDK 3.1.2; Updated lodash to 4.17.13 (Known high severity security vulnerability in older Version)
        </Text>
        <Text>
          1.2.4: Fixed an issue on the summary screen. The average speed and the max speed didn't had any numbers.
        </Text>
        <Text>
          1.2.3: Updated to SDK 3.1.1, added Versa Lite support.
        </Text>
         <Text>
          1.2.2: Updated to SDK 3.1, small improvements.
        </Text>
        <Text>
          1.2.1: Smaller number styles to avoid truncate on large numbers.
        </Text>
        <Text>
          1.2: Added analytics; added possibility to make a donation and to contact the developer in the settings
        </Text>
        <Text>
          1.1: Added Fitibit Ionic Support
        </Text>
        <Text>
          1.0: First official release
        </Text>
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
