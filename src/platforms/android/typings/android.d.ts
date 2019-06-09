/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class ActivityLifecycleCallback {
					public static class: java.lang.Class<com.clevertap.android.sdk.ActivityLifecycleCallback>;
					public constructor();
					public static register(param0: globalAndroid.app.Application): void;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class Application {
					public static class: java.lang.Class<com.clevertap.android.sdk.Application>;
					public onCreate(): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class BuildConfig {
					public static class: java.lang.Class<com.clevertap.android.sdk.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public static SDK_VERSION_STRING: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export abstract class CTInAppBaseFragment {
					public static class: java.lang.Class<com.clevertap.android.sdk.CTInAppBaseFragment>;
					public constructor();
					public onAttach(param0: globalAndroid.app.Activity): void;
					public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
				}
				export module CTInAppBaseFragment {
					export class CTInAppNativeButtonClickListener {
						public static class: java.lang.Class<com.clevertap.android.sdk.CTInAppBaseFragment.CTInAppNativeButtonClickListener>;
						public onClick(param0: globalAndroid.view.View): void;
					}
					export class InAppListener {
						public static class: java.lang.Class<com.clevertap.android.sdk.CTInAppBaseFragment.InAppListener>;
						/**
						 * Constructs a new instance of the com.clevertap.android.sdk.CTInAppBaseFragment$InAppListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							inAppNotificationDidShow(param0: globalAndroid.content.Context, param1: com.clevertap.android.sdk.CTInAppNotification, param2: globalAndroid.os.Bundle): void;
							inAppNotificationDidClick(param0: globalAndroid.content.Context, param1: com.clevertap.android.sdk.CTInAppNotification, param2: globalAndroid.os.Bundle): void;
							inAppNotificationDidDismiss(param0: globalAndroid.content.Context, param1: com.clevertap.android.sdk.CTInAppNotification, param2: globalAndroid.os.Bundle): void;
						});
						public constructor();
						public inAppNotificationDidDismiss(param0: globalAndroid.content.Context, param1: com.clevertap.android.sdk.CTInAppNotification, param2: globalAndroid.os.Bundle): void;
						public inAppNotificationDidClick(param0: globalAndroid.content.Context, param1: com.clevertap.android.sdk.CTInAppNotification, param2: globalAndroid.os.Bundle): void;
						public inAppNotificationDidShow(param0: globalAndroid.content.Context, param1: com.clevertap.android.sdk.CTInAppNotification, param2: globalAndroid.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export abstract class CTInAppBaseFullFragment extends com.clevertap.android.sdk.CTInAppBaseFragment {
					public static class: java.lang.Class<com.clevertap.android.sdk.CTInAppBaseFullFragment>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export abstract class CTInAppBaseFullHtmlFragment extends com.clevertap.android.sdk.CTInAppBaseFullFragment {
					public static class: java.lang.Class<com.clevertap.android.sdk.CTInAppBaseFullHtmlFragment>;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public constructor();
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
					public onAttach(param0: globalAndroid.app.Activity): void;
					public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
				}
				export module CTInAppBaseFullHtmlFragment {
					export class InAppWebViewClient {
						public static class: java.lang.Class<com.clevertap.android.sdk.CTInAppBaseFullHtmlFragment.InAppWebViewClient>;
						public shouldOverrideUrlLoading(param0: globalAndroid.webkit.WebView, param1: string): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export abstract class CTInAppBaseFullNativeFragment extends com.clevertap.android.sdk.CTInAppBaseFullFragment {
					public static class: java.lang.Class<com.clevertap.android.sdk.CTInAppBaseFullNativeFragment>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export abstract class CTInAppBasePartialFragment extends com.clevertap.android.sdk.CTInAppBaseFragment {
					public static class: java.lang.Class<com.clevertap.android.sdk.CTInAppBasePartialFragment>;
					public onStart(): void;
					public constructor();
					public onPause(): void;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export abstract class CTInAppBasePartialHtmlFragment extends com.clevertap.android.sdk.CTInAppBasePartialFragment {
					public static class: java.lang.Class<com.clevertap.android.sdk.CTInAppBasePartialHtmlFragment>;
					public constructor();
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public onLongClick(param0: globalAndroid.view.View): boolean;
					public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
					public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
					public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
				}
				export module CTInAppBasePartialHtmlFragment {
					export class GestureListener {
						public static class: java.lang.Class<com.clevertap.android.sdk.CTInAppBasePartialHtmlFragment.GestureListener>;
						public onFling(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
					}
					export class InAppWebViewClient {
						public static class: java.lang.Class<com.clevertap.android.sdk.CTInAppBasePartialHtmlFragment.InAppWebViewClient>;
						public shouldOverrideUrlLoading(param0: globalAndroid.webkit.WebView, param1: string): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export abstract class CTInAppBasePartialNativeFragment extends com.clevertap.android.sdk.CTInAppBasePartialFragment {
					public static class: java.lang.Class<com.clevertap.android.sdk.CTInAppBasePartialNativeFragment>;
					public constructor();
					public onLongClick(param0: globalAndroid.view.View): boolean;
					public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
				}
				export module CTInAppBasePartialNativeFragment {
					export class GestureListener {
						public static class: java.lang.Class<com.clevertap.android.sdk.CTInAppBasePartialNativeFragment.GestureListener>;
						public onDown(param0: globalAndroid.view.MotionEvent): boolean;
						public onFling(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class CTInAppHtmlCoverFragment extends com.clevertap.android.sdk.CTInAppBaseFullHtmlFragment {
					public static class: java.lang.Class<com.clevertap.android.sdk.CTInAppHtmlCoverFragment>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class CTInAppHtmlFooterFragment extends com.clevertap.android.sdk.CTInAppBasePartialHtmlFragment {
					public static class: java.lang.Class<com.clevertap.android.sdk.CTInAppHtmlFooterFragment>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class CTInAppHtmlHalfInterstitialFragment extends com.clevertap.android.sdk.CTInAppBaseFullHtmlFragment {
					public static class: java.lang.Class<com.clevertap.android.sdk.CTInAppHtmlHalfInterstitialFragment>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class CTInAppHtmlHeaderFragment extends com.clevertap.android.sdk.CTInAppBasePartialHtmlFragment {
					public static class: java.lang.Class<com.clevertap.android.sdk.CTInAppHtmlHeaderFragment>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class CTInAppHtmlInterstitialFragment extends com.clevertap.android.sdk.CTInAppBaseFullHtmlFragment {
					public static class: java.lang.Class<com.clevertap.android.sdk.CTInAppHtmlInterstitialFragment>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class CTInAppNativeCoverFragment extends com.clevertap.android.sdk.CTInAppBaseFullNativeFragment {
					public static class: java.lang.Class<com.clevertap.android.sdk.CTInAppNativeCoverFragment>;
					public constructor();
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class CTInAppNativeCoverImageFragment extends com.clevertap.android.sdk.CTInAppBaseFullFragment {
					public static class: java.lang.Class<com.clevertap.android.sdk.CTInAppNativeCoverImageFragment>;
					public constructor();
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class CTInAppNativeFooterFragment extends com.clevertap.android.sdk.CTInAppBasePartialNativeFragment {
					public static class: java.lang.Class<com.clevertap.android.sdk.CTInAppNativeFooterFragment>;
					public constructor();
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class CTInAppNativeHalfInterstitialFragment extends com.clevertap.android.sdk.CTInAppBaseFullNativeFragment {
					public static class: java.lang.Class<com.clevertap.android.sdk.CTInAppNativeHalfInterstitialFragment>;
					public constructor();
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class CTInAppNativeHalfInterstitialImageFragment extends com.clevertap.android.sdk.CTInAppBaseFullFragment {
					public static class: java.lang.Class<com.clevertap.android.sdk.CTInAppNativeHalfInterstitialImageFragment>;
					public constructor();
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class CTInAppNativeHeaderFragment extends com.clevertap.android.sdk.CTInAppBasePartialNativeFragment {
					public static class: java.lang.Class<com.clevertap.android.sdk.CTInAppNativeHeaderFragment>;
					public constructor();
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class CTInAppNativeInterstitialFragment extends com.clevertap.android.sdk.CTInAppBaseFullNativeFragment {
					public static class: java.lang.Class<com.clevertap.android.sdk.CTInAppNativeInterstitialFragment>;
					public onStart(): void;
					public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
					public constructor();
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public onPause(): void;
					public onStop(): void;
					public onResume(): void;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class CTInAppNativeInterstitialImageFragment extends com.clevertap.android.sdk.CTInAppBaseFullFragment {
					public static class: java.lang.Class<com.clevertap.android.sdk.CTInAppNativeInterstitialImageFragment>;
					public constructor();
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class CTInAppNotification {
					public static class: java.lang.Class<com.clevertap.android.sdk.CTInAppNotification>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.clevertap.android.sdk.CTInAppNotification>;
					public describeContents(): number;
					public getActionExtras(): org.json.JSONObject;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getInAppType(): com.clevertap.android.sdk.CTInAppType;
				}
				export module CTInAppNotification {
					export class CTInAppNotificationListener {
						public static class: java.lang.Class<com.clevertap.android.sdk.CTInAppNotification.CTInAppNotificationListener>;
						/**
						 * Constructs a new instance of the com.clevertap.android.sdk.CTInAppNotification$CTInAppNotificationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							notificationReady(param0: com.clevertap.android.sdk.CTInAppNotification): void;
						});
						public constructor();
						public notificationReady(param0: com.clevertap.android.sdk.CTInAppNotification): void;
					}
					export class GifCache {
						public static class: java.lang.Class<com.clevertap.android.sdk.CTInAppNotification.GifCache>;
					}
					export class ImageCache {
						public static class: java.lang.Class<com.clevertap.android.sdk.CTInAppNotification.ImageCache>;
					}
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class CTInAppNotificationButton {
					public static class: java.lang.Class<com.clevertap.android.sdk.CTInAppNotificationButton>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.clevertap.android.sdk.CTInAppNotificationButton>;
					public constructor(param0: globalAndroid.os.Parcel);
					public getBorderRadius(): string;
					public describeContents(): number;
					public setBorderColor(param0: string): void;
					public getBorderColor(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public setBorderRadius(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class CTInAppType {
					public static class: java.lang.Class<com.clevertap.android.sdk.CTInAppType>;
					public static CTInAppTypeHTML: com.clevertap.android.sdk.CTInAppType;
					public static CTInAppTypeCoverHTML: com.clevertap.android.sdk.CTInAppType;
					public static CTInAppTypeInterstitialHTML: com.clevertap.android.sdk.CTInAppType;
					public static CTInAppTypeHeaderHTML: com.clevertap.android.sdk.CTInAppType;
					public static CTInAppTypeFooterHTML: com.clevertap.android.sdk.CTInAppType;
					public static CTInAppTypeHalfInterstitialHTML: com.clevertap.android.sdk.CTInAppType;
					public static CTInAppTypeCover: com.clevertap.android.sdk.CTInAppType;
					public static CTInAppTypeInterstitial: com.clevertap.android.sdk.CTInAppType;
					public static CTInAppTypeHalfInterstitial: com.clevertap.android.sdk.CTInAppType;
					public static CTInAppTypeHeader: com.clevertap.android.sdk.CTInAppType;
					public static CTInAppTypeFooter: com.clevertap.android.sdk.CTInAppType;
					public static CTInAppTypeAlert: com.clevertap.android.sdk.CTInAppType;
					public static CTInAppTypeCoverImageOnly: com.clevertap.android.sdk.CTInAppType;
					public static CTInAppTypeInterstitialImageOnly: com.clevertap.android.sdk.CTInAppType;
					public static CTInAppTypeHalfInterstitialImageOnly: com.clevertap.android.sdk.CTInAppType;
					public toString(): string;
					public static values(): native.Array<com.clevertap.android.sdk.CTInAppType>;
					public static valueOf(param0: string): com.clevertap.android.sdk.CTInAppType;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class CTInAppWebView {
					public static class: java.lang.Class<com.clevertap.android.sdk.CTInAppWebView>;
					public onMeasure(param0: number, param1: number): void;
					public performClick(): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: number, param2: number, param3: number, param4: number);
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class CTNotificationIntentService {
					public static class: java.lang.Class<com.clevertap.android.sdk.CTNotificationIntentService>;
					public static MAIN_ACTION: string;
					public static TYPE_BUTTON_CLICK: string;
					public constructor();
					public onHandleIntent(param0: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class CTPushNotificationReceiver {
					public static class: java.lang.Class<com.clevertap.android.sdk.CTPushNotificationReceiver>;
					public constructor();
					public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class CleverTapAPI implements com.clevertap.android.sdk.CTInAppNotification.CTInAppNotificationListener, com.clevertap.android.sdk.InAppNotificationActivity.InAppActivityListener, com.clevertap.android.sdk.CTInAppBaseFragment.InAppListener {
					public static class: java.lang.Class<com.clevertap.android.sdk.CleverTapAPI>;
					public static CHARGED_EVENT: string;
					public static NOTIFICATION_TAG: string;
					public event: com.clevertap.android.sdk.EventHandler;
					public profile: com.clevertap.android.sdk.ProfileHandler;
					public data: com.clevertap.android.sdk.DataHandler;
					public session: com.clevertap.android.sdk.SessionHandler;
					public inAppNotificationDidClick(param0: globalAndroid.content.Context, param1: com.clevertap.android.sdk.CTInAppNotification, param2: globalAndroid.os.Bundle): void;
					public pushInstallReferrer(param0: globalAndroid.content.Intent): void;
					public updateLocation(param0: globalAndroid.location.Location): void;
					public static setAppForeground(param0: boolean): void;
					public setInAppNotificationListener(param0: com.clevertap.android.sdk.InAppNotificationListener): void;
					public getCleverTapID(): string;
					public addMultiValueForKey(param0: string, param1: string): void;
					public static createNotification(param0: globalAndroid.content.Context, param1: globalAndroid.os.Bundle): void;
					public getTotalVisits(): number;
					public getScreenCount(): number;
					public pushNotificationViewedEvent(param0: globalAndroid.os.Bundle): void;
					public pushError(param0: string, param1: number): void;
					public pushGcmRegistrationId(param0: string, param1: boolean): void;
					public pushNotificationEvent(param0: globalAndroid.os.Bundle): void;
					public static createNotificationChannel(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string, param4: number, param5: string, param6: boolean): void;
					public enableDeviceNetworkInfoReporting(param0: boolean): void;
					public static instanceWithConfig(param0: globalAndroid.content.Context, param1: com.clevertap.android.sdk.CleverTapInstanceConfig): com.clevertap.android.sdk.CleverTapAPI;
					public getCount(param0: string): number;
					public static changeCredentials(param0: string, param1: string, param2: string): void;
					public setDevicePushTokenRefreshListener(param0: com.clevertap.android.sdk.CleverTapAPI.DevicePushTokenRefreshListener): void;
					public removeValueForKey(param0: string): void;
					public static createNotificationChannel(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string, param4: number, param5: string, param6: boolean, param7: string): void;
					public static createNotificationChannelGroup(param0: globalAndroid.content.Context, param1: string, param2: string): void;
					public getLocation(): globalAndroid.location.Location;
					public static getDefaultInstance(param0: globalAndroid.content.Context): com.clevertap.android.sdk.CleverTapAPI;
					public static getDebugLevel(): number;
					public addMultiValuesForKey(param0: string, param1: java.util.ArrayList<string>): void;
					public setLocation(param0: globalAndroid.location.Location): void;
					public getProperty(param0: string): any;
					public pushEvent(param0: string, param1: java.util.Map<string,any>): void;
					public static createNotification(param0: globalAndroid.content.Context, param1: globalAndroid.os.Bundle, param2: number): void;
					public static deleteNotificationChannelGroup(param0: globalAndroid.content.Context, param1: string): void;
					public getHistory(): java.util.Map<string,com.clevertap.android.sdk.EventDetail>;
					public static getInstance(param0: globalAndroid.content.Context): com.clevertap.android.sdk.CleverTapAPI;
					public pushDeepLink(param0: globalAndroid.net.Uri): void;
					public flush(): void;
					public getUTMDetails(): com.clevertap.android.sdk.UTMDetail;
					public notificationReady(param0: com.clevertap.android.sdk.CTInAppNotification): void;
					public getFirstTime(param0: string): number;
					public getDevicePushToken(param0: com.clevertap.android.sdk.PushType): string;
					public inAppNotificationDidShow(param0: globalAndroid.content.Context, param1: com.clevertap.android.sdk.CTInAppNotification, param2: globalAndroid.os.Bundle): void;
					public onUserLogin(param0: java.util.Map<string,any>): void;
					public getDevicePushTokenRefreshListener(): com.clevertap.android.sdk.CleverTapAPI.DevicePushTokenRefreshListener;
					public setOffline(param0: boolean): void;
					public pushProfile(param0: java.util.Map<string,any>): void;
					public pushNotificationClickedEvent(param0: globalAndroid.os.Bundle): void;
					public setSyncListener(param0: com.clevertap.android.sdk.SyncListener): void;
					public pushChargedEvent(param0: java.util.HashMap<string,any>, param1: java.util.ArrayList<java.util.HashMap<string,any>>): void;
					public disablePersonalization(): void;
					public pushEvent(param0: string): void;
					public recordScreen(param0: string): void;
					public enablePersonalization(): void;
					public pushFacebookUser(param0: org.json.JSONObject): void;
					public removeMultiValuesForKey(param0: string, param1: java.util.ArrayList<string>): void;
					public getPreviousVisitTime(): number;
					public getLastTime(param0: string): number;
					public setOptOut(param0: boolean): void;
					public static changeCredentials(param0: string, param1: string): void;
					public static deleteNotificationChannel(param0: globalAndroid.content.Context, param1: string): void;
					public static setDebugLevel(param0: com.clevertap.android.sdk.CleverTapAPI.LogLevel): void;
					public getSyncListener(): com.clevertap.android.sdk.SyncListener;
					public removeMultiValueForKey(param0: string, param1: string): void;
					public static getNotificationInfo(param0: globalAndroid.os.Bundle): com.clevertap.android.sdk.NotificationInfo;
					public getInAppNotificationListener(): com.clevertap.android.sdk.InAppNotificationListener;
					public setMultiValuesForKey(param0: string, param1: java.util.ArrayList<string>): void;
					public pushFcmRegistrationId(param0: string, param1: boolean): void;
					public getTimeElapsed(): number;
					public getDetails(param0: string): com.clevertap.android.sdk.EventDetail;
					public static setDebugLevel(param0: number): void;
					public pushInstallReferrer(param0: string, param1: string, param2: string): void;
					public static onActivityResumed(param0: globalAndroid.app.Activity): void;
					public static createNotificationChannel(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string, param4: number, param5: boolean, param6: string): void;
					public static onActivityPaused(): void;
					public static createNotificationChannel(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string, param4: number, param5: boolean): void;
					public inAppNotificationDidDismiss(param0: globalAndroid.content.Context, param1: com.clevertap.android.sdk.CTInAppNotification, param2: globalAndroid.os.Bundle): void;
					public getCleverTapAttributionIdentifier(): string;
					public pushGooglePlusPerson(param0: com.google.android.gms.plus.model.people.Person): void;
				}
				export module CleverTapAPI {
					export class DevicePushTokenRefreshListener {
						public static class: java.lang.Class<com.clevertap.android.sdk.CleverTapAPI.DevicePushTokenRefreshListener>;
						/**
						 * Constructs a new instance of the com.clevertap.android.sdk.CleverTapAPI$DevicePushTokenRefreshListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							devicePushTokenDidRefresh(param0: string, param1: com.clevertap.android.sdk.PushType): void;
						});
						public constructor();
						public devicePushTokenDidRefresh(param0: string, param1: com.clevertap.android.sdk.PushType): void;
					}
					export class LogLevel {
						public static class: java.lang.Class<com.clevertap.android.sdk.CleverTapAPI.LogLevel>;
						public static OFF: com.clevertap.android.sdk.CleverTapAPI.LogLevel;
						public static INFO: com.clevertap.android.sdk.CleverTapAPI.LogLevel;
						public static DEBUG: com.clevertap.android.sdk.CleverTapAPI.LogLevel;
						public static valueOf(param0: string): com.clevertap.android.sdk.CleverTapAPI.LogLevel;
						public static values(): native.Array<com.clevertap.android.sdk.CleverTapAPI.LogLevel>;
						public intValue(): number;
					}
					export class NotificationPrepareRunnable {
						public static class: java.lang.Class<com.clevertap.android.sdk.CleverTapAPI.NotificationPrepareRunnable>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class CleverTapInstanceConfig {
					public static class: java.lang.Class<com.clevertap.android.sdk.CleverTapInstanceConfig>;
					public logger: com.clevertap.android.sdk.Logger;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.clevertap.android.sdk.CleverTapInstanceConfig>;
					public getLogger(): com.clevertap.android.sdk.Logger;
					public getAccountRegion(): string;
					public describeContents(): number;
					public setAnalyticsOnly(param0: boolean): void;
					public static createInstance(param0: globalAndroid.content.Context, param1: string, param2: string): com.clevertap.android.sdk.CleverTapInstanceConfig;
					public static createDefaultInstance(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string): com.clevertap.android.sdk.CleverTapInstanceConfig;
					public isAnalyticsOnly(): boolean;
					public static createInstance(param0: string): com.clevertap.android.sdk.CleverTapInstanceConfig;
					public useGoogleAdId(param0: boolean): void;
					public getDebugLevel(): number;
					public static createInstance(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string): com.clevertap.android.sdk.CleverTapInstanceConfig;
					public setDebugLevel(param0: number): void;
					public setDebugLevel(param0: com.clevertap.android.sdk.CleverTapAPI.LogLevel): void;
					public getAccountToken(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getAccountId(): string;
					public enablePersonalization(param0: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class CloseImageView {
					public static class: java.lang.Class<com.clevertap.android.sdk.CloseImageView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public onMeasure(param0: number, param1: number): void;
					public onDraw(param0: globalAndroid.graphics.Canvas): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class Constants {
					public static class: java.lang.Class<com.clevertap.android.sdk.Constants>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class DBAdapter {
					public static class: java.lang.Class<com.clevertap.android.sdk.DBAdapter>;
					public static DB_UNDEFINED_CODE: number;
					public cleanupStaleEvents(param0: com.clevertap.android.sdk.DBAdapter.Table): void;
					public removeUserProfile(param0: string): void;
					public cleanupEventsFromLastId(param0: string, param1: com.clevertap.android.sdk.DBAdapter.Table): void;
					public removeEvents(param0: com.clevertap.android.sdk.DBAdapter.Table): void;
					public storeObject(param0: org.json.JSONObject, param1: com.clevertap.android.sdk.DBAdapter.Table): number;
					public storeUserProfile(param0: string, param1: org.json.JSONObject): number;
					public fetchUserProfileById(param0: string): org.json.JSONObject;
					public fetchEvents(param0: com.clevertap.android.sdk.DBAdapter.Table, param1: number): org.json.JSONObject;
				}
				export module DBAdapter {
					export class DatabaseHelper {
						public static class: java.lang.Class<com.clevertap.android.sdk.DBAdapter.DatabaseHelper>;
						public onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
						public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
					}
					export class Table {
						public static class: java.lang.Class<com.clevertap.android.sdk.DBAdapter.Table>;
						public static EVENTS: com.clevertap.android.sdk.DBAdapter.Table;
						public static PROFILE_EVENTS: com.clevertap.android.sdk.DBAdapter.Table;
						public static USER_PROFILES: com.clevertap.android.sdk.DBAdapter.Table;
						public static valueOf(param0: string): com.clevertap.android.sdk.DBAdapter.Table;
						public static values(): native.Array<com.clevertap.android.sdk.DBAdapter.Table>;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class DataHandler {
					public static class: java.lang.Class<com.clevertap.android.sdk.DataHandler>;
					public pushGcmRegistrationId(param0: string, param1: boolean): void;
					public pushFcmRegistrationId(param0: string, param1: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class DeviceInfo {
					public static class: java.lang.Class<com.clevertap.android.sdk.DeviceInfo>;
					public initDeviceID(): void;
				}
				export module DeviceInfo {
					export class DeviceCachedInfo {
						public static class: java.lang.Class<com.clevertap.android.sdk.DeviceInfo.DeviceCachedInfo>;
					}
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class EventDetail {
					public static class: java.lang.Class<com.clevertap.android.sdk.EventDetail>;
					public getCount(): number;
					public getFirstTime(): number;
					public getLastTime(): number;
					public getName(): string;
					public constructor(param0: number, param1: number, param2: number, param3: string);
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class EventHandler {
					public static class: java.lang.Class<com.clevertap.android.sdk.EventHandler>;
					public pushError(param0: string, param1: number): void;
					public push(param0: string): void;
					public pushNotificationEvent(param0: globalAndroid.os.Bundle): void;
					public getDetails(param0: string): com.clevertap.android.sdk.EventDetail;
					public push(param0: string, param1: java.util.HashMap<string,any>, param2: java.util.ArrayList<java.util.HashMap<string,any>>): void;
					public getHistory(): java.util.Map<string,com.clevertap.android.sdk.EventDetail>;
					public getLastTime(param0: string): number;
					public getCount(param0: string): number;
					public push(param0: string, param1: java.util.Map<string,any>): void;
					public pushNotificationClickedEvent(param0: globalAndroid.os.Bundle): void;
					public getFirstTime(param0: string): number;
					public pushNotificationViewedEvent(param0: globalAndroid.os.Bundle): void;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class FcmMessageListenerService {
					public static class: java.lang.Class<com.clevertap.android.sdk.FcmMessageListenerService>;
					public constructor();
					public onMessageReceived(param0: com.google.firebase.messaging.RemoteMessage): void;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class FcmTokenListenerService {
					public static class: java.lang.Class<com.clevertap.android.sdk.FcmTokenListenerService>;
					public onTokenRefresh(): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class GcmMessageListenerService {
					public static class: java.lang.Class<com.clevertap.android.sdk.GcmMessageListenerService>;
					public onMessageReceived(param0: string, param1: globalAndroid.os.Bundle): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class GcmTokenListenerService {
					public static class: java.lang.Class<com.clevertap.android.sdk.GcmTokenListenerService>;
					public onTokenRefresh(): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class GifDecoder {
					public static class: java.lang.Class<com.clevertap.android.sdk.GifDecoder>;
				}
				export module GifDecoder {
					export class BitmapProvider {
						public static class: java.lang.Class<com.clevertap.android.sdk.GifDecoder.BitmapProvider>;
						/**
						 * Constructs a new instance of the com.clevertap.android.sdk.GifDecoder$BitmapProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							obtain(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
							release(param0: globalAndroid.graphics.Bitmap): void;
							obtainByteArray(param0: number): native.Array<number>;
							release(param0: native.Array<number>): void;
							obtainIntArray(param0: number): native.Array<number>;
							release(param0: native.Array<number>): void;
						});
						public constructor();
						public obtain(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
						public release(param0: native.Array<number>): void;
						public obtainIntArray(param0: number): native.Array<number>;
						public release(param0: globalAndroid.graphics.Bitmap): void;
						public obtainByteArray(param0: number): native.Array<number>;
					}
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class GifFrame {
					public static class: java.lang.Class<com.clevertap.android.sdk.GifFrame>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class GifHeader {
					public static class: java.lang.Class<com.clevertap.android.sdk.GifHeader>;
					public constructor();
					public getHeight(): number;
					public getWidth(): number;
					public getNumFrames(): number;
					public getStatus(): number;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class GifHeaderParser {
					public static class: java.lang.Class<com.clevertap.android.sdk.GifHeaderParser>;
					public static TAG: string;
					public isAnimated(): boolean;
					public constructor();
					public clear(): void;
					public setData(param0: native.Array<number>): com.clevertap.android.sdk.GifHeaderParser;
					public setData(param0: java.nio.ByteBuffer): com.clevertap.android.sdk.GifHeaderParser;
					public parseHeader(): com.clevertap.android.sdk.GifHeader;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class GifImageView {
					public static class: java.lang.Class<com.clevertap.android.sdk.GifImageView>;
					public onDetachedFromWindow(): void;
					public stopAnimation(): void;
					public setOnAnimationStart(param0: com.clevertap.android.sdk.GifImageView.OnAnimationStart): void;
					public isAnimating(): boolean;
					public run(): void;
					public startAnimation(): void;
					public setFramesDisplayDuration(param0: number): void;
					public resetAnimation(): void;
					public gotoFrame(param0: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public getOnAnimationStop(): com.clevertap.android.sdk.GifImageView.OnAnimationStop;
					public getFramesDisplayDuration(): number;
					public setOnAnimationStop(param0: com.clevertap.android.sdk.GifImageView.OnAnimationStop): void;
					public setOnFrameAvailable(param0: com.clevertap.android.sdk.GifImageView.OnFrameAvailable): void;
					public clear(): void;
					public getFrameCount(): number;
					public setBytes(param0: native.Array<number>): void;
					public getGifWidth(): number;
					public getGifHeight(): number;
					public getOnFrameAvailable(): com.clevertap.android.sdk.GifImageView.OnFrameAvailable;
				}
				export module GifImageView {
					export class OnAnimationStart {
						public static class: java.lang.Class<com.clevertap.android.sdk.GifImageView.OnAnimationStart>;
						/**
						 * Constructs a new instance of the com.clevertap.android.sdk.GifImageView$OnAnimationStart interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onAnimationStart(): void;
						});
						public constructor();
						public onAnimationStart(): void;
					}
					export class OnAnimationStop {
						public static class: java.lang.Class<com.clevertap.android.sdk.GifImageView.OnAnimationStop>;
						/**
						 * Constructs a new instance of the com.clevertap.android.sdk.GifImageView$OnAnimationStop interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onAnimationStop(): void;
						});
						public constructor();
						public onAnimationStop(): void;
					}
					export class OnFrameAvailable {
						public static class: java.lang.Class<com.clevertap.android.sdk.GifImageView.OnFrameAvailable>;
						/**
						 * Constructs a new instance of the com.clevertap.android.sdk.GifImageView$OnFrameAvailable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onFrameAvailable(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
						});
						public constructor();
						public onFrameAvailable(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
					}
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class InAppFCManager {
					public static class: java.lang.Class<com.clevertap.android.sdk.InAppFCManager>;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class InAppNotificationActivity implements com.clevertap.android.sdk.CTInAppBaseFragment.InAppListener {
					public static class: java.lang.Class<com.clevertap.android.sdk.InAppNotificationActivity>;
					public inAppNotificationDidShow(param0: globalAndroid.content.Context, param1: com.clevertap.android.sdk.CTInAppNotification, param2: globalAndroid.os.Bundle): void;
					public inAppNotificationDidClick(param0: globalAndroid.content.Context, param1: com.clevertap.android.sdk.CTInAppNotification, param2: globalAndroid.os.Bundle): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public constructor();
					public onBackPressed(): void;
					public setTheme(param0: number): void;
					public inAppNotificationDidDismiss(param0: globalAndroid.content.Context, param1: com.clevertap.android.sdk.CTInAppNotification, param2: globalAndroid.os.Bundle): void;
				}
				export module InAppNotificationActivity {
					export class InAppActivityListener {
						public static class: java.lang.Class<com.clevertap.android.sdk.InAppNotificationActivity.InAppActivityListener>;
						/**
						 * Constructs a new instance of the com.clevertap.android.sdk.InAppNotificationActivity$InAppActivityListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							inAppNotificationDidShow(param0: globalAndroid.content.Context, param1: com.clevertap.android.sdk.CTInAppNotification, param2: globalAndroid.os.Bundle): void;
							inAppNotificationDidClick(param0: globalAndroid.content.Context, param1: com.clevertap.android.sdk.CTInAppNotification, param2: globalAndroid.os.Bundle): void;
							inAppNotificationDidDismiss(param0: globalAndroid.content.Context, param1: com.clevertap.android.sdk.CTInAppNotification, param2: globalAndroid.os.Bundle): void;
						});
						public constructor();
						public inAppNotificationDidDismiss(param0: globalAndroid.content.Context, param1: com.clevertap.android.sdk.CTInAppNotification, param2: globalAndroid.os.Bundle): void;
						public inAppNotificationDidClick(param0: globalAndroid.content.Context, param1: com.clevertap.android.sdk.CTInAppNotification, param2: globalAndroid.os.Bundle): void;
						public inAppNotificationDidShow(param0: globalAndroid.content.Context, param1: com.clevertap.android.sdk.CTInAppNotification, param2: globalAndroid.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class InAppNotificationListener {
					public static class: java.lang.Class<com.clevertap.android.sdk.InAppNotificationListener>;
					/**
					 * Constructs a new instance of the com.clevertap.android.sdk.InAppNotificationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						beforeShow(param0: java.util.Map<string,any>): boolean;
						onDismissed(param0: java.util.Map<string,any>, param1: java.util.Map<string,any>): void;
					});
					public constructor();
					public onDismissed(param0: java.util.Map<string,any>, param1: java.util.Map<string,any>): void;
					public beforeShow(param0: java.util.Map<string,any>): boolean;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class InstallReferrerBroadcastReceiver {
					public static class: java.lang.Class<com.clevertap.android.sdk.InstallReferrerBroadcastReceiver>;
					public constructor();
					public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class LocalDataStore {
					public static class: java.lang.Class<com.clevertap.android.sdk.LocalDataStore>;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class Logger {
					public static class: java.lang.Class<com.clevertap.android.sdk.Logger>;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class ManifestInfo {
					public static class: java.lang.Class<com.clevertap.android.sdk.ManifestInfo>;
					public useGoogleAdId(): boolean;
					public isAppLaunchedDisabled(): boolean;
					public static getInstance(param0: globalAndroid.content.Context): com.clevertap.android.sdk.ManifestInfo;
					public getGCMSenderId(): string;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class ManifestValidator {
					public static class: java.lang.Class<com.clevertap.android.sdk.ManifestValidator>;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class NotificationInfo {
					public static class: java.lang.Class<com.clevertap.android.sdk.NotificationInfo>;
					public fromCleverTap: boolean;
					public toString(): string;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class ProfileHandler {
					public static class: java.lang.Class<com.clevertap.android.sdk.ProfileHandler>;
					public addMultiValuesForKey(param0: string, param1: java.util.ArrayList<string>): void;
					public setMultiValuesForKey(param0: string, param1: java.util.ArrayList<string>): void;
					public pushFacebookUser(param0: org.json.JSONObject): void;
					public getProperty(param0: string): any;
					public addMultiValueForKey(param0: string, param1: string): void;
					public removeMultiValuesForKey(param0: string, param1: java.util.ArrayList<string>): void;
					public push(param0: java.util.Map<string,any>): void;
					public removeValueForKey(param0: string): void;
					public pushGooglePlusPerson(param0: com.google.android.gms.plus.model.people.Person): void;
					public removeMultiValueForKey(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class PushType {
					public static class: java.lang.Class<com.clevertap.android.sdk.PushType>;
					public static FCM: com.clevertap.android.sdk.PushType;
					public static GCM: com.clevertap.android.sdk.PushType;
					public toString(): string;
					public static valueOf(param0: string): com.clevertap.android.sdk.PushType;
					public static values(): native.Array<com.clevertap.android.sdk.PushType>;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class QueueCursor {
					public static class: java.lang.Class<com.clevertap.android.sdk.QueueCursor>;
					public getLastId(): string;
					public toString(): string;
					public setData(param0: org.json.JSONArray): void;
					public setTableName(param0: com.clevertap.android.sdk.DBAdapter.Table): void;
					public setLastId(param0: string): void;
					public getTableName(): com.clevertap.android.sdk.DBAdapter.Table;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class SSLContextBuilder {
					public static class: java.lang.Class<com.clevertap.android.sdk.SSLContextBuilder>;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class SessionHandler {
					public static class: java.lang.Class<com.clevertap.android.sdk.SessionHandler>;
					public getTimeElapsed(): number;
					public getPreviousVisitTime(): number;
					public getUTMDetails(): com.clevertap.android.sdk.UTMDetail;
					public getTotalVisits(): number;
					public getScreenCount(): number;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class SimpleBitmapProvider extends com.clevertap.android.sdk.GifDecoder.BitmapProvider {
					public static class: java.lang.Class<com.clevertap.android.sdk.SimpleBitmapProvider>;
					public obtain(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
					public release(param0: globalAndroid.graphics.Bitmap): void;
					public constructor();
					public release(param0: native.Array<number>): void;
					public obtainIntArray(param0: number): native.Array<number>;
					public obtainByteArray(param0: number): native.Array<number>;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class StorageHelper {
					public static class: java.lang.Class<com.clevertap.android.sdk.StorageHelper>;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class SyncListener {
					public static class: java.lang.Class<com.clevertap.android.sdk.SyncListener>;
					/**
					 * Constructs a new instance of the com.clevertap.android.sdk.SyncListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						profileDataUpdated(param0: org.json.JSONObject): void;
						profileDidInitialize(param0: string): void;
					});
					public constructor();
					public profileDidInitialize(param0: string): void;
					public profileDataUpdated(param0: org.json.JSONObject): void;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class UTMDetail {
					public static class: java.lang.Class<com.clevertap.android.sdk.UTMDetail>;
					public setCampaign(param0: string): void;
					public getCampaign(): string;
					public setMedium(param0: string): void;
					public constructor();
					public getSource(): string;
					public setSource(param0: string): void;
					public getMedium(): string;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class UriHelper {
					public static class: java.lang.Class<com.clevertap.android.sdk.UriHelper>;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class Utils {
					public static class: java.lang.Class<com.clevertap.android.sdk.Utils>;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class ValidationResult {
					public static class: java.lang.Class<com.clevertap.android.sdk.ValidationResult>;
					public setObject(param0: any): void;
					public getErrorCode(): number;
					public getErrorDesc(): string;
					public setErrorDesc(param0: string): void;
					public setErrorCode(param0: number): void;
					public getObject(): any;
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export class Validator {
					public static class: java.lang.Class<com.clevertap.android.sdk.Validator>;
					public static ADD_VALUES_OPERATION: string;
					public static REMOVE_VALUES_OPERATION: string;
				}
				export module Validator {
					export class RestrictedMultiValueFields {
						public static class: java.lang.Class<com.clevertap.android.sdk.Validator.RestrictedMultiValueFields>;
						public static Name: com.clevertap.android.sdk.Validator.RestrictedMultiValueFields;
						public static Email: com.clevertap.android.sdk.Validator.RestrictedMultiValueFields;
						public static Education: com.clevertap.android.sdk.Validator.RestrictedMultiValueFields;
						public static Married: com.clevertap.android.sdk.Validator.RestrictedMultiValueFields;
						public static DOB: com.clevertap.android.sdk.Validator.RestrictedMultiValueFields;
						public static Gender: com.clevertap.android.sdk.Validator.RestrictedMultiValueFields;
						public static Phone: com.clevertap.android.sdk.Validator.RestrictedMultiValueFields;
						public static Age: com.clevertap.android.sdk.Validator.RestrictedMultiValueFields;
						public static FBID: com.clevertap.android.sdk.Validator.RestrictedMultiValueFields;
						public static GPID: com.clevertap.android.sdk.Validator.RestrictedMultiValueFields;
						public static Birthday: com.clevertap.android.sdk.Validator.RestrictedMultiValueFields;
						public static valueOf(param0: string): com.clevertap.android.sdk.Validator.RestrictedMultiValueFields;
						public static values(): native.Array<com.clevertap.android.sdk.Validator.RestrictedMultiValueFields>;
					}
					export class ValidationContext {
						public static class: java.lang.Class<com.clevertap.android.sdk.Validator.ValidationContext>;
						public static Profile: com.clevertap.android.sdk.Validator.ValidationContext;
						public static Event: com.clevertap.android.sdk.Validator.ValidationContext;
						public static values(): native.Array<com.clevertap.android.sdk.Validator.ValidationContext>;
						public static valueOf(param0: string): com.clevertap.android.sdk.Validator.ValidationContext;
					}
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export module exceptions {
					export abstract class CleverTapException {
						public static class: java.lang.Class<com.clevertap.android.sdk.exceptions.CleverTapException>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export module exceptions {
					export class CleverTapMetaDataNotFoundException extends com.clevertap.android.sdk.exceptions.CleverTapException {
						public static class: java.lang.Class<com.clevertap.android.sdk.exceptions.CleverTapMetaDataNotFoundException>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export module exceptions {
					export class CleverTapPermissionsNotSatisfied extends com.clevertap.android.sdk.exceptions.CleverTapException {
						public static class: java.lang.Class<com.clevertap.android.sdk.exceptions.CleverTapPermissionsNotSatisfied>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module clevertap {
		export module android {
			export module sdk {
				export module exceptions {
					export class InvalidEventNameException extends com.clevertap.android.sdk.exceptions.CleverTapException {
						public static class: java.lang.Class<com.clevertap.android.sdk.exceptions.InvalidEventNameException>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

//Generics information:

