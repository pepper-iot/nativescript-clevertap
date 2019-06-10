import { Common } from "./clevertap.common";
import { CleverTap as CleverTapInterface } from "./";

export class CleverTapImpl extends Common implements CleverTapInterface {
   constructor() {
      super();
      CleverTap.autoIntegrate();
   }

   public setDebugLevel(level: number): void {
      CleverTap.setDebugLevel(level);
   }

   public changeCredentials(accountId: string, token: string): void {
      CleverTap.changeCredentialsWithAccountIDAndToken(accountId, token);
   }

   public updateProfile(profile: any): void {
      CleverTap.sharedInstance().profilePush(profile);
   }

   public pushEvent(eventKey: string, eventMeta: any): void {
      CleverTap.sharedInstance().recordEventWithProps(eventKey, eventMeta);
   }

   public pushChargedEvent(chargeDetails: any, items: any): void {
      CleverTap.sharedInstance().recordChargedEventWithDetailsAndItems(
         chargeDetails,
         items
      );
   }

   public onUserLogin(profile: any): void {
      CleverTap.sharedInstance().onUserLogin(profile);
   }

   public profileGetProperty(propertyName: string): any {
      return CleverTap.sharedInstance().profileGet(propertyName);
   }


	/**
	 * Android only methods below
	 */

   public register(): void {
      throw new Error("Method not implemented for iOS.");
   }

   public pushFcmRegistrationId(fcmRegId: string) {
      throw new Error("Method not implemented for iOS.");
   }

   public handleMessage(message: any): boolean {
      throw new Error("Method not implemented for iOS.");
   }

   public createNotificationChannel({
      channelId = "Clevertap",
      name = "Clevertap",
      description = "Clevertap",
      importance = 5,
      showBadge = true
   }): void {
      throw new Error("Method not implemented for iOS.");
   }
}

export const cleverTap = new CleverTapImpl();
