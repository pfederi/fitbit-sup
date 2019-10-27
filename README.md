# SUP

Use your Fitbit to track your Stand Up Paddling sessions on the water.

Displays important statistics such as:
- heart rate
- current speed
- average speed
- max speed
- distance paddled
- total strokes*
- total session duration

**Please Note:**
The exercise name is shown as cycling on the activity screen on the fitbit website. This is a known bug on the Fitbit API and will be fixed by Fitbit.

When water is on the touch screen there is a slightly chance that the activity is pausing

I am using the step detection for counting the strokes. I tested it multiple times while paddling and I am quite happy with the count.

Please don't hesitate to contact me with questions or suggestions; but be sure to let me know which watch and software version you are talking about. This app will always be free and Open Source. If you really like my app please consider buying me a coffee (or more likely electronic components). Thanks!

If you find problems or other things, please post add Github issues, or discuss in [this](https://community.fitbit.com/t5/Fitbit-App-Gallery/SUP-Support/m-p/3169975#M7201) forum thread and I will try to fix the issues.

## Further ideas (Help appreciated)
- Average strokes per minute
- Possibility to set a distance (n) for interval trainings. After n meters the watch vibrates.
- Editing the name of activity in the settings. User can choose between SUP, Kayak, Kanu
- Setting Interval Training on or off in Settings and on watch.
- Choose between two stats or one activity per screen in the settings
- enable or disable stats in settings
- Order stats in settings
- Disable touchscreen while activity is running

## Updates
### Release 2.0.1
- Fixed an issue where the physical button for the weather didn't work

### Release 2.0
- Added Weather Module; Updated Settings

### Release 1.2.5
- Smaller font size because the time was cut off when training lasted more than one hour
- Updated to SDK 3.1.2
- Updated lodash to 4.17.13 (Known high severity security vulnerability in older Version)

### Release 1.2.4
- Fixed an issue on the summary screen. The average speed and the max speed didn't had any numbers.

### Release 1.2.3
- Updated to SDK 3.1.1, added Versa Lite support.

### Release 1.2.2
- Updated to SDK 3.1, small improvements.

### Release 1.2.1
- Smaller number styles to avoid truncate on large numbers.

### Release 1.2.0
- added analytics
- added possibility to make a donation and to contact the developer in the settings

### Release 1.1
- Added Fitibit Ionic Support

### Release 1.0
#### Features
- statistics such as: heart rate, current speed, average speed, max speed, distance paddled, total strokes*, total session duration
- pause and restart activity
- cumulation of statistics at the end

### Known Issues
- When water is on the touch screen there is a chance that the activity is pausing
- GPS track is not shown in Fitbit activity log
- Fitbit activity log is showing Aerobic as activity name (Bug reported to fitbit)

### Versa Screenshots
![screenshot](/screenshots/versa-1.png)
![screenshot](/screenshots/versa-2.png)
![screenshot](/screenshots/versa-3.png)
![screenshot](/screenshots/versa-4.png)
![screenshot](/screenshots/versa-5.png)
![screenshot](/screenshots/versa-6.png)
![screenshot](/screenshots/versa-7.png)
![screenshot](/screenshots/versa-8.png)

### Ionic Screenshots
![screenshot](/screenshots/ionic-1.png)
![screenshot](/screenshots/ionic-2.png)
![screenshot](/screenshots/ionic-3.png)
![screenshot](/screenshots/ionic-4.png)
![screenshot](/screenshots/ionic-5.png)
![screenshot](/screenshots/ionic-6.png)
![screenshot](/screenshots/ionic-7.png)
![screenshot](/screenshots/ionic-8.png)

The application uses the Exercise API added in Fitbit OS 3.1 and is based on the sdk-exercise by Jon Barlow and the fitbit-weather module by Grégoire Sage
