# NativeScript CleverTap Plugin

## Install and Integration

`tns plugin add nativescript-cleartap`

### iOS

Add the following to your `Info.plist` under `app/App_Resources/iOS`:

```plist
<key>CleverTapAccountID</key>
<string>YOUR-TEST-ACCOUNTID</string>
<key>CleverTapToken</key>
<string>YOUR-TEST-TOKEN</string>
```

### Android

Add the following to your `AndroidManifest.xml` under `app/App_Resources/Android/src/main`

```
<meta-data
	android:name="CLEVERTAP_ACCOUNT_ID"
	android:value="YOUR-TEST-ACCOUNTID>" />

<meta-data
	android:name="CLEVERTAP_TOKEN"
	android:value="YOUR-TEST-TOKEN" />
```

**_Or_ programmatically set credentials**

```
import { cleverTap } from 'nativescript-clevertap';

...
cleverTap.changeCredentials(accountId, token);
...

```

## Additional Resources

-  [CleverTap Android SDK Integration guide](https://support.clevertap.com/docs/android/getting-started.html)
-  [CleverTap iOS SDK Integration guide](https://support.clevertap.com/docs/ios/getting-started.html)

## Example Usage

### Reference

`import { cleverTap } from 'nativescript-clevertap';`

### Record an event

`cleverTap.pushEvent('testEvent', { attr1 : "val1" });`

### Update a user profile

`cleverTap.updateProfile({Name: 'testUserA1', Identity: '123456', Email: 'test@test.com', customAttr: 123});`

## License

Apache License Version 2.0, January 2004
