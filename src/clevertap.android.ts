import { Common } from "./clevertap.common";
import { CleverTap as CleverTapInterface } from "./";
import * as utils from "tns-core-modules/utils/utils";

declare const com: any;
const CleverTapSdk = com.clevertap.android.sdk;
const CleverTapAPI = CleverTapSdk.CleverTapAPI;
const HashMap = java.util.HashMap;
const ArrayList = java.util.ArrayList;

export class CleverTap extends Common implements CleverTapInterface {

   private get instance() {
      return CleverTapAPI.getDefaultInstance(utils.ad.getApplicationContext());
   }

   public register(): void {
      CleverTapSdk.ActivityLifecycleCallback.register(utils.ad.getApplication());
   }

   public setDebugLevel(level: number): void {
      CleverTapAPI.setDebugLevel(level);
   }

   public changeCredentials(accountId: string, token: string): void {
      CleverTapAPI.changeCredentials(accountId, token);
   }

   public updateProfile(profile: any): void {
      this.instance.pushProfile(getHashMap(profile));
   }

   public pushEvent(eventKey: string, eventMeta: any): void {
      if (eventMeta) {
         this.instance.pushEvent(eventKey, getHashMap(eventMeta));
      } else {
         this.instance.pushEvent(eventKey);
      }
   }

   public pushChargedEvent(chargeDetails: any, items: any): void {
      this.instance.pushChargedEvent(
         getHashMap(chargeDetails),
         getArrayList(items)
      );
   }

   public onUserLogin(profile: any): void {
      this.instance.onUserLogin(getHashMap(profile));
   }

   public profileGetProperty(propertyName: string): any {
      return this.instance.getProperty(propertyName);
   }

   public createNotificationChannel({
      channelId = "Clevertap",
      name = "Clevertap",
      description = "Clevertap",
      importance = 5,
      showBadge = true
   }): void {
      CleverTapAPI.createNotificationChannel(
         utils.ad.getApplicationContext(),
         channelId,
         name,
         description,
         importance,
         showBadge
      );
   }

   public pushFcmRegistrationId(fcmRegId: string): void {
      this.instance.pushFcmRegistrationId(fcmRegId, true);
   }

   public handleMessage(message: any): boolean {
      const extras = new android.os.Bundle();
      Object.keys(message).forEach(key => {
         extras.putString(key, message[key]);
      });
      const info = CleverTapAPI.getNotificationInfo(extras);
      if (info.fromCleverTap) {
         CleverTapAPI.createNotification(utils.ad.getApplicationContext(), extras);
         return true;
      }
      return false;
   }
}

export const cleverTap = new CleverTap();

const getArrayList = (items) => {
   const arrayList = new ArrayList();
   items.forEach(item => {
      arrayList.add(getHashMap(item));
   });
   return arrayList;
};

const getHashMap = (ob) => {
   const hashMap = new HashMap();
   Object.keys(ob).forEach(key => {
      hashMap.put(key, getNativeValue(ob[key]));
   });
   return hashMap;
};

const getNativeValue = (value) => {
   return [
      { predicate: isString, converter: value => value },
      { predicate: isObject, converter: value => getHashMap(value) },
      { predicate: isString, converter: value => value },
      {
         predicate: isDate,
         converter: (date: Date) => new java.util.Date(date.valueOf())
      },
      { predicate: isInt, converter: value => java.lang.Integer.valueOf(value) },
      { predicate: isFloat, converter: value => java.lang.Float.valueOf(value) }
   ]
      .find(({ predicate }) => predicate(value))
      .converter(value);
};

const isDate = (date) => {
   return date instanceof Date;
};

const isString = (value) => {
   return typeof value === "string";
};

const isObject = (value) => {
   return !isDate(value) && typeof value === "object";
};

// Taken from https://stackoverflow.com/a/20779354/4694010
const isInt = (nVal) => {
   return (
      typeof nVal === "number" &&
      isFinite(nVal) &&
      nVal > -9007199254740992 &&
      nVal < 9007199254740992 &&
      Math.floor(nVal) === nVal
   );
};

const isFloat = (nVal) => {
   return (
      typeof nVal === "number" &&
      isFinite(nVal) &&
      nVal > -9007199254740992 &&
      nVal < 9007199254740992 &&
      Math.floor(nVal) !== nVal
   );
};
