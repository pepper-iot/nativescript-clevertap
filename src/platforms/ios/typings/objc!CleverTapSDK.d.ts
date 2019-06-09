
declare class CleverTap extends NSObject {

	static alloc(): CleverTap; // inherited from NSObject

	static autoIntegrate(): CleverTap;

	static autoIntegrateWithCleverTapID(cleverTapID: string): CleverTap;

	static changeCredentialsWithAccountIDAndToken(accountID: string, token: string): void;

	static changeCredentialsWithAccountIDTokenRegion(accountID: string, token: string, region: string): void;

	static disablePersonalization(): void;

	static enablePersonalization(): void;

	static getDebugLevel(): CleverTapLogLevel;

	static getLocationWithSuccessAndError(success: (p1: CLLocationCoordinate2D) => void, error: (p1: string) => void): void;

	static handleOpenURL(url: NSURL): void;

	static handlePushNotificationOpenDeepLinksInForeground(notification: NSDictionary<any, any>, openInForeground: boolean): void;

	static instanceWithConfig(config: CleverTapInstanceConfig): CleverTap;

	static instanceWithConfigAndCleverTapID(config: CleverTapInstanceConfig, cleverTapID: string): CleverTap;

	static new(): CleverTap; // inherited from NSObject

	static setCredentialsWithAccountIDAndToken(accountID: string, token: string): void;

	static setCredentialsWithAccountIDTokenRegion(accountID: string, token: string, region: string): void;

	static setDebugLevel(level: number): void;

	static setLocation(location: CLLocationCoordinate2D): void;

	static sharedInstance(): CleverTap;

	static sharedInstanceWithCleverTapID(cleverTapID: string): CleverTap;

	readonly config: CleverTapInstanceConfig;

	deleteInboxMessage(message: CleverTapInboxMessage): void;

	enableDeviceNetworkInfoReporting(enabled: boolean): void;

	eventGetDetail(event: string): CleverTapEventDetail;

	eventGetFirstTime(event: string): number;

	eventGetLastTime(event: string): number;

	eventGetOccurrences(event: string): number;

	getAllInboxMessages(): NSArray<CleverTapInboxMessage>;

	getInboxMessageCount(): number;

	getInboxMessageForId(messageId: string): CleverTapInboxMessage;

	getInboxMessageUnreadCount(): number;

	getUnreadInboxMessages(): NSArray<CleverTapInboxMessage>;

	handleNotificationWithData(data: any): void;

	handleNotificationWithDataOpenDeepLinksInForeground(data: any, openInForeground: boolean): void;

	handleOpenURLSourceApplication(url: NSURL, sourceApplication: string): void;

	initializeInboxWithCallback(callback: (p1: boolean) => void): void;

	isCleverTapNotification(payload: NSDictionary<any, any>): boolean;

	markReadInboxMessage(message: CleverTapInboxMessage): void;

	newInboxViewControllerWithConfigAndDelegate(config: CleverTapInboxStyleConfig, delegate: CleverTapInboxViewControllerDelegate): CleverTapInboxViewController;

	notifyApplicationLaunchedWithOptions(launchOptions: any): void;

	onUserLogin(properties: NSDictionary<any, any>): void;

	onUserLoginWithCleverTapID(properties: NSDictionary<any, any>, cleverTapID: string): void;

	profileAddMultiValueForKey(value: string, key: string): void;

	profileAddMultiValuesForKey(values: NSArray<string> | string[], key: string): void;

	profileGet(propertyName: string): any;

	profileGetCleverTapAttributionIdentifier(): string;

	profileGetCleverTapID(): string;

	profilePush(properties: NSDictionary<any, any>): void;

	profilePushGooglePlusUser(googleUser: any): void;

	profilePushGraphUser(fbGraphUser: any): void;

	profileRemoveMultiValueForKey(value: string, key: string): void;

	profileRemoveMultiValuesForKey(values: NSArray<string> | string[], key: string): void;

	profileRemoveValueForKey(key: string): void;

	profileSetMultiValuesForKey(values: NSArray<string> | string[], key: string): void;

	pushInstallReferrerSourceMediumCampaign(source: string, medium: string, campaign: string): void;

	recordChargedEventWithDetailsAndItems(chargeDetails: NSDictionary<any, any>, items: NSArray<any> | any[]): void;

	recordErrorWithMessageAndErrorCode(message: string, code: number): void;

	recordEvent(event: string): void;

	recordEventWithProps(event: string, properties: NSDictionary<any, any>): void;

	recordNotificationViewedEventWithData(notificationData: any): void;

	recordScreenView(screenName: string): void;

	registerInboxUpdatedBlock(block: () => void): void;

	sessionGetTimeElapsed(): number;

	sessionGetUTMDetails(): CleverTapUTMDetail;

	setInAppNotificationDelegate(delegate: CleverTapInAppNotificationDelegate): void;

	setLocation(location: CLLocationCoordinate2D): void;

	setOffline(offline: boolean): void;

	setOptOut(enabled: boolean): void;

	setPushToken(pushToken: NSData): void;

	setPushTokenAsString(pushTokenString: string): void;

	setSyncDelegate(delegate: CleverTapSyncDelegate): void;

	showInAppNotificationIfAny(): void;

	userGetEventHistory(): NSDictionary<any, any>;

	userGetPreviousVisitTime(): number;

	userGetScreenCount(): number;

	userGetTotalVisits(): number;
}

declare class CleverTapEventDetail extends NSObject {

	static alloc(): CleverTapEventDetail; // inherited from NSObject

	static new(): CleverTapEventDetail; // inherited from NSObject

	count: number;

	eventName: string;

	firstTime: number;

	lastTime: number;
}

interface CleverTapInAppNotificationDelegate extends NSObjectProtocol {

	inAppNotificationDismissedWithExtrasAndActionExtras?(extras: NSDictionary<any, any>, actionExtras: NSDictionary<any, any>): void;

	shouldShowInAppNotificationWithExtras?(extras: NSDictionary<any, any>): boolean;
}
declare var CleverTapInAppNotificationDelegate: {

	prototype: CleverTapInAppNotificationDelegate;
};

declare class CleverTapInboxMessage extends NSObject {

	static alloc(): CleverTapInboxMessage; // inherited from NSObject

	static new(): CleverTapInboxMessage; // inherited from NSObject

	readonly backgroundColor: string;

	readonly campaignId: string;

	readonly content: NSArray<CleverTapInboxMessageContent>;

	readonly customData: NSDictionary<any, any>;

	readonly date: number;

	readonly expires: number;

	readonly isRead: boolean;

	readonly json: NSDictionary<any, any>;

	readonly messageId: string;

	readonly orientation: string;

	readonly relativeDate: string;

	readonly tagString: string;

	readonly tags: NSArray<any>;

	readonly type: string;

	setRead(read: boolean): void;
}

declare class CleverTapInboxMessageContent extends NSObject {

	static alloc(): CleverTapInboxMessageContent; // inherited from NSObject

	static new(): CleverTapInboxMessageContent; // inherited from NSObject

	readonly actionHasLinks: boolean;

	readonly actionHasUrl: boolean;

	readonly actionUrl: string;

	readonly backgroundColor: string;

	readonly iconUrl: string;

	readonly links: NSArray<any>;

	readonly mediaIsAudio: boolean;

	readonly mediaIsGif: boolean;

	readonly mediaIsImage: boolean;

	readonly mediaIsVideo: boolean;

	readonly mediaUrl: string;

	readonly message: string;

	readonly messageColor: string;

	readonly title: string;

	readonly titleColor: string;

	readonly videoPosterUrl: string;

	urlForLinkAtIndex(index: number): string;
}

declare class CleverTapInboxStyleConfig extends NSObject {

	static alloc(): CleverTapInboxStyleConfig; // inherited from NSObject

	static new(): CleverTapInboxStyleConfig; // inherited from NSObject

	backgroundColor: UIColor;

	messageTags: NSArray<any>;

	navigationBarTintColor: UIColor;

	navigationTintColor: UIColor;

	tabSelectedBgColor: UIColor;

	tabSelectedTextColor: UIColor;

	tabUnSelectedTextColor: UIColor;

	title: string;
}

declare class CleverTapInboxViewController extends UITableViewController {

	static alloc(): CleverTapInboxViewController; // inherited from NSObject

	static new(): CleverTapInboxViewController; // inherited from NSObject
}

interface CleverTapInboxViewControllerDelegate extends NSObjectProtocol {

	messageDidSelectAtIndexWithButtonIndex(message: CleverTapInboxMessage, index: number, buttonIndex: number): void;
}
declare var CleverTapInboxViewControllerDelegate: {

	prototype: CleverTapInboxViewControllerDelegate;
};

declare class CleverTapInstanceConfig extends NSObject {

	static alloc(): CleverTapInstanceConfig; // inherited from NSObject

	static new(): CleverTapInstanceConfig; // inherited from NSObject

	readonly accountId: string;

	readonly accountRegion: string;

	readonly accountToken: string;

	analyticsOnly: boolean;

	disableAppLaunchedEvent: boolean;

	enablePersonalization: boolean;

	logLevel: CleverTapLogLevel;

	useCustomCleverTapId: boolean;

	useIDFA: boolean;

	constructor(o: { accountId: string; accountToken: string; });

	constructor(o: { accountId: string; accountToken: string; accountRegion: string; });

	initWithAccountIdAccountToken(accountId: string, accountToken: string): this;

	initWithAccountIdAccountTokenAccountRegion(accountId: string, accountToken: string, accountRegion: string): this;
}

declare class CleverTapJSInterface extends NSObject implements WKScriptMessageHandler {

	static alloc(): CleverTapJSInterface; // inherited from NSObject

	static new(): CleverTapJSInterface; // inherited from NSObject

	userContentController: WKUserContentController;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { config: CleverTapInstanceConfig; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithConfig(config: CleverTapInstanceConfig): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	userContentControllerDidReceiveScriptMessage(userContentController: WKUserContentController, message: WKScriptMessage): void;
}

declare const enum CleverTapLogLevel {

	Off = -1,

	Info = 0,

	Debug = 1
}

declare var CleverTapProfileDidChangeNotification: string;

declare var CleverTapProfileDidInitializeNotification: string;

declare var CleverTapSDKVersionNumber: number;

declare var CleverTapSDKVersionString: interop.Reference<number>;

interface CleverTapSyncDelegate extends NSObjectProtocol {

	profileDataUpdated?(updates: NSDictionary<any, any>): void;

	profileDidInitialize?(CleverTapID: string): void;

	profileDidInitializeForAccountId?(CleverTapID: string, accountId: string): void;
}
declare var CleverTapSyncDelegate: {

	prototype: CleverTapSyncDelegate;
};

declare class CleverTapTrackedViewController extends UIViewController {

	static alloc(): CleverTapTrackedViewController; // inherited from NSObject

	static new(): CleverTapTrackedViewController; // inherited from NSObject

	screenName: string;
}

declare class CleverTapUTMDetail extends NSObject {

	static alloc(): CleverTapUTMDetail; // inherited from NSObject

	static new(): CleverTapUTMDetail; // inherited from NSObject

	campaign: string;

	medium: string;

	source: string;
}
