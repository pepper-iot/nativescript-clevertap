export interface CleverTap {

   setDebugLevel(level: number): void;

   changeCredentials(accountId: string, token: string): void;

   updateProfile(profile: any): void;

   pushEvent(eventKey: string, eventMeta: any): void;

   pushChargedEvent(chargeDetails: any, items: any[]): void;

   onUserLogin(profile: any): void;

   profileGetProperty(propertyName: string): any;

   /**
    * iOS only
    * @param deviceToken
    */
   setPushToken(deviceToken: any): void;

   /**
    * iOS only
    * @param deviceToken
    */
   setPushTokenAsString(deviceToken: string): void;

   /**
    * iOS only
    * @param deviceToken
    */
   handleNotificationWithData(data: any): void;

	/**
	 * Android only
	 */
   register(): void;

	/**
	 * Android only
	 * @param fcmRegId
	 */
   pushFcmRegistrationId(fcmRegId: string): void;

	/**
	 * Android only
	 * @param message
	 */
   handleMessage(message: any): boolean;

	/**
	 * Android only
	 * @param param0
	 */
   createNotificationChannel({ channelId, name, description, importance, showBadge }): void;
}

export const cleverTap: CleverTap;
