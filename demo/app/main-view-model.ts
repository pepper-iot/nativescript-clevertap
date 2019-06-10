import { Observable } from "tns-core-modules/data/observable";
import { cleverTap } from "nativescript-clevertap";

export class HelloWorldModel extends Observable {
	public message: string;
	public userId: string;

	constructor() {
		super();
		this.onGetUserIdTapped();
	}

	onLoginTapped() {
		cleverTap.onUserLogin({
			Name: "Harsha Nutal",
			Date: new Date(),
			Identity: 112,
			Email: "harsha@webileapps.com"
		});
	}

	onGetUserIdTapped() {
		this.message = "Hello " + (cleverTap.profileGetProperty("Identity") ? cleverTap.profileGetProperty("Identity") : "Anonymous");
	}

	onPushEventTapped() {
		cleverTap.pushEvent("SampleEvent1", {
			SampleProp1: "SampleValue" + Math.round(1000 * Math.random())
		});
	}

	onRegisterForPushNotifications() {
		UNUserNotificationCenter.currentNotificationCenter().requestAuthorizationWithOptionsCompletionHandler(UNAuthorizationOptions.Alert, null);
		UIApplication.sharedApplication.registerForRemoteNotifications();
	}
}
