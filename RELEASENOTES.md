









































    via interfaces
  * All builds [use Gradle by default](Android%20Shell%20Tool%20Guide_building_with_gradle), instead of Ant
  * Android Studio is now fully supported, and recommended over Eclipse
  * Core WebView functionality is encapsulated, with extension points exposed
  * Legacy whitelist behaviour is still available via plugin (although not recommended).
  * Plugins can add their own gradle build steps!
  * Plugins can depend on Maven libraries using `<framework>` tags
  * Setting of Content-Security-Policy is now supported by the framework (see details in plugin readme)
  * The system WebView can be replaced in your app, via a plugin
  * The whitelist has been enhanced to be more secure and configurable
  * Uses the pluggable WebView framework
  * You will need to add the new [cordova-crosswalk-engine](https://github.com/MobileChromeApps/cordova-crosswalk-engine) plugin
  * You will need to add the new [cordova-plugin-splashscreen](https://github.com/apache/cordova-plugin-splashscreen) plugin to continue using a splash screen
  * You will need to add the new [cordova-plugin-whitelist](https://github.com/apache/cordova-plugin-whitelist) plugin
#
#
#
#
#  KIND, either express or implied.  See the License for the
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# "License"); you may not use this file except in compliance
# distributed with this work for additional information
# http://www.apache.org/licenses/LICENSE-2.0
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# regarding copyright ownership.  The ASF licenses this file
# software distributed under the License is distributed on an
# specific language governing permissions and limitations
# to you under the Apache License, Version 2.0 (the
# under the License.
# Unless required by applicable law or agreed to in writing,
# with the License.  You may obtain a copy of the License at
## Release Notes for Cordova (Android) ##
### 3.1.0 (Sept 2013) ###
### 3.2.0 (Nov 2013) ###
### 3.3.0 (Dec 2013) ###
### 3.4.0 (Feb 2014) ###
### 3.5.0 (May 2014) ###
### 3.5.1 (August 2014) ###
### 3.6.0 (Sept 2014) ###
### 3.6.4 (Sept 30, 2014) ###
### 5.0.0 (Nov 01, 2015)
### 5.1.0 (Jan 19, 2016)
### 5.1.1 (Feb 24, 2016)
### Release 3.7.0 (January 2015) ###
### Release 3.7.1 (January 2015) ###
### Release 4.0.0 (March 2015) ###
### Release 4.0.1 (April 2015) ### 
### Release 4.0.2 (May 2015) ###
### Release 4.1.0 (Jul 2015) ###
### Release 4.1.1 (Aug 2015) ###
#### Major Changes ####
#### Other Changes ####
* @Deprecate methods of PluginManager that were never meant to be public
* [CB-3384] Fix thread assertion when plugins remap URIs
* [CB-3542] rewrote cli tooling scripts in node
* [CB-3819] Made it easier to set SplashScreen delay.
* [CB-4013] Fixed loadUrlTimeoutValue preference.
* [CB-4096] Implemented new unified whitelist for android
* [CB-4198] bin/create script should be better at handling non-word characters in activity name. Patched windows script as well.

* [CB-4764] Deprecated DirectoryManager.java (moved into plugins)
* [CB-4765] Deprecated ExifHelper.java (moved into plugins)
* [CB-4766] Deprecated JSONUtils.java (moved into plugins)
* [CB-4782] Convert ApplicationInfo.java -> appinfo.js
* [CB-4817] Remove unused assets in project template.
* `"onScrollChanged"` message removed. Use `view.getViewTreeObserver().addOnScrollChangedListener(...)` instead
* Add a comment to custom_rules.xml saying why we move AndroidManifest.xml
* Add another convenience overload for CordovaResourceApi.copyResource
* Add documentation referencing other implementation.
* Add JavaDoc for CordovaResourceApi
* Add node_module licenses to LICENSE
* Add non-String overloades for CordovaPreferences.set()
* Add NOTICE file
* added node_modules back into `.gitignore`
* Adding .ratignore file.
* Adding tests related to 3.5.1
* Adding tests to confirm that preferences aren't changed by Intents
* Adding tests to confirm that preferences aren't changed by Intents
* Adds licence header to Adb to pass rat audit
* Allow CordovaChromeClient subclasses access to CordovaInterface and CordovaWebView members
* Automated tools fail, and you have to remember all four places where this is set.
* Backport CordovaBridge from 4.0.x -> master
* Bug fixed where platform failed to install on a version downgrade
* Build using Gradle
* Bump up to API level 23
* Catch uncaught exceptions in from plugins and turn them into error responses.
* CB-10014: Set gradle `applicationId` to `package name`.
* CB-10105: Spot fix for tilde errors on paths.
* CB-10138 Adds missing plugin metadata to `plugin_list` module.
* CB-10157 Uninstall app from device/emulator only when signed apk is already installed
* CB-10386 Add `android.useDeprecatedNdk=true` to support `NDK` in `gradle`
* CB-10406 Fixes an exception, thrown when building using Ant. 
* CB-10421 Fixes exception when calling run script with `--help` option
* CB-10443 Fix `this.root` null reference
* CB-10443 Pass original options instead of remaining
* CB-10472 `NullPointerException`: `org.apache.cordova.PluginManager.onSaveInstanceState` check if `pluginManager` is `null` before using it
* CB-10498: Resume event should be sticky if it has a plugin result
* CB-10510: Add an optional timeout to `emu` start script
* CB-10618 Handle gradle frameworks on plugin installation/uninstallation
* CB-10628 Fix `emulate android --target`
* CB-3360 Allow setting a custom User-Agent (close #162)
* CB-3445 Add .gradle template files for "update" as well as "create"
* CB-3445 Add gradle support clean command (plus some code cleanup)
* CB-3445 Copy gradle wrapper in build instead of create
* CB-3445 Speed up gradle building (incremental builds go from 10s -> 1.5s for me)
* CB-3445: Add an initial set of Gradle build scripts
* CB-3445: Add environment variable 'BUILD_MULTIPLE_APKS' for splitting APKs based on architecture
* CB-3445: Add option to build and install with gradle
* CB-3445: Add which to checked-in node_modules
* CB-3445: Allow build and run scripts to select APK by architecture
* CB-3445: android: Copy Gradle wrapper from Android SDK rather than bundling a JAR
* CB-3445: Ensure that JAR files in libs directory are included
* CB-3445: Read project.properties to configure gradle libraries
* CB-4404 Revert setting android:windowSoftInputMode to "adjustPan"
* CB-4404: Changing where android:windowSoftInputMode is in the manifest so it works
* CB-4527 Don't delete .bat files even when on non-windows platform
* CB-4872 Added android version scripts (android_sdk_version, etc)
* CB-4892 Fix create script only escaping the first space instead of all spaces.
* CB-4910 Update CLI project template to point to config.xml at the root now that it's not in www/ by default.
* CB-4984 Don't create on CordovaActivity name
* CB-4996 Fix paths with spaces while launching on emulator and device
* CB-5080 Find resources in a way that works with aapt's --rename-manifest-package
* CB-5117 Output confirmation message if check_reqs passes.
* CB-5191 Deprecate <url-filter>
* CB-5193 Fix Android WebSQL sometime throwing SECURITY_ERR.
* CB-5209 Cannot build Android app if project path contains spaces
* CB-5232 Change create script to use Cordova as a Library Project instead of a .jar
* CB-5255 Prefer Google API targets over android-## targets when building.
* CB-5302 Massive movement to get tests working again
* CB-5395: Make scheme and host (but not path) case-insensitive in whitelist
* CB-5398 Apply KitKat content URI fix to all content URIs
* CB-5398 Work-around for KitKat content: URLs not rendering in <img> tags
* CB-5422 Don't require JAVA_HOME to be defined
* CB-5445 Adding onScrollChanged and the ScrollEvent object
* CB-5447 Removed android:debuggable=“true” from project template.
* CB-5471 Deprecated DroidGap class
* CB-5481 Fix for Cordova trying to get config.xml from the wrong namespace
* CB-5487 Enable Remote Debugging when your Android app is debuggable.
* CB-5490 Add javadoc target to ant script
* CB-5504 Adding onDestroy to app plugin to deregister telephonyReceiver
* CB-5592 Set MIME type for openExternal when scheme is file:
* CB-5652 make visible cordova version
* CB-5714 Fix of android build when too big output stops build with error due to buffer overflow.
* CB-5715 Add Eclipse .project file to create template. For CLI projects, it adds refs for root www/ & config.xml and hides platform versions
* CB-5715 For CLI, hide assets/www and res/xml/config.xml by default
* CB-5793 ant builds: Rename AndroidManifest during -post-build to avoid Eclipse detecting ant-build/
* CB-5793 Don't clean before build and change output directory to ant-build to avoid conflicts with Eclipse.
* CB-5799 Update version of OkHTTP to 1.3
* CB-5801 exec->spawn in build to make sure compile errors are shown.
* CB-5803 Fix cordova/emulate on windows.
* CB-5889 Add a message in the update script about needing to import CordovaLib when using an IDE.
* CB-5889 Add a message in the update script about needing to import CordovaLib when using an IDE.
* CB-5889 Make update script find project name instead of using "null" for CordovaLib
* CB-5889 Make update script find project name instead of using "null" for CordovaLib
* CB-5908: add splascreen images to template
* CB-5917 Add a loadUrlIntoView overload that doesn't recreate plugins.
* CB-5917 Add a loadUrlIntoView overload that doesn't recreate plugins.
* CB-5971: Add unit tests to cordova-android
* CB-5971: Factor out package/project name validation logic
* CB-5971: Fix package / project validation
* CB-5971: This would have been a good first bug, too bad
* CB-5988 Allow exec() only from file: or start-up URL's domain
* CB-6047 Fix online sometimes getting in a bad state on page transitions.
* CB-6153 Add a preference for controlling hardware button audio stream (DefaultVolumeStream)
* CB-6315: Wrapping this so it runs on the UI thread
* CB-6388: Handle binary data correctly in LOAD_URL bridge
* CB-6491 add CONTRIBUTING.md
* CB-6511 Fixes build for android when app name contains unicode characters.
* CB-6511 Fixes build for android when app name contains unicode characters.
* CB-6543 Fix cordova/run failure when no custom_rules.xml available
* CB-6552: added top level package.json
* CB-6630 Removed OkHttp from core library. It's now available as a plugin: [cordova-plugin-okhttp](https://www.npmjs.com/package/cordova-plugin-okhttp)
* CB-6707 Update minSdkVersion to 10 consistently
* CB-6723 Update package name for Robotium
* CB-6761 Fix native->JS bridge ceasing to fire when page changes and online is set to false and the JS loads quickly
* CB-6784 Add license to CONTRIBUTING.md
* CB-6784 Add missing licenses
* CB-6818: I want to remove this code, because Square didn't do their headers properly
* CB-6837 Fix leaked window when hitting back button while alert being rendered
* CB-6851 Deprecate WebView.sendJavascript()
* CB-6860 Add activity_name and launcher_name to AndroidManifest.xml & strings.xml
* CB-6876 Fix the "print usage"
* CB-6876 Show the correct executable name
* CB-7017 Fix onload=true being set on all subsequent plugins
* CB-7018 Clean up and deprecation of some button-related functions
* CB-7018 Fix setButtonPlumbedToJs never un-listening
* CB-7044 Add JAVA_HOME when not set. Be stricter about ANDROID_HOME
* CB-7044 Fix typo in prev commit causing check_reqs to always fail.
* CB-7044, CB-7299 Fix up PATH problems when possible.
* CB-7159 BackgroundColor not used when `<html style="opacity:0">`, nor during screen rotation
* CB-7159 Set background color of webView as well as its parent
* CB-7172 Force window to have focus after resume
* CB-7238: I should have collapsed this, but Config.init() must go before the creation of CordovaWebView
* CB-7238: Minor band-aid to get tests running again, this has to go away before 3.6.0 is released, since this is an API change.
* CB-7261 Fix setNativeToJsBridgeMode sometimes crashing when switching to ONLINE_EVENT
* CB-7265 Fix crash when navigating to custom protocol (introduced in 3.5.1)
* CB-7267 update RELEASENOTES for 3.5.1
* CB-7291 propogate change in method signature to the native tests
* CB-7291: Add defaults to external whitelist
* CB-7291: Add external-launch-whitelist and use it for filtering intent launches
* CB-7291: Only add file, content and data URLs to internal whitelist
* CB-7291: Restrict meaning of "\*" in internal whitelist to just http and https
* CB-7321 Don't require ant for create script
* CB-7325 Fix error message in android_sdk_version.js when missing SDK on windows
* CB-7330 Don't run "android update" during creation
* CB-7330 Don't run check_reqs for bin/create.
* CB-7330 Fix dangling function call in last commit (broke gradle builds)
* CB-7335 Add a .gitignore to android project template
* CB-7385 update cordova.js for testing prior to branch/tag
* CB-7410 add whitelist entries to get iframe/GoogleMaps working
* CB-7410 clarify the title
* CB-7410 Fix Basic Authentication test
* CB-7410 Fix the errorUrl test
* CB-7410 fix the menu test
* CB-7460: Fixing bug with KitKat where the background colour would override the CSS colours on the application
* CB-7463: Adding licences.  I don't know what the gradle syntax is for comments, that still needs to be done.
* CB-7463: Looked at the Apache BigTop git, gradle uses C-style comments
* CB-7499 Support RTL text direction
* CB-7579 Fix run script's ability to use non-arch-specific APKs
* CB-7634 Detect JAVA_HOME properly on Ubuntu
* CB-7674 Move preference activation back into onCreate()
* CB-7707 Added multipart PluginResult
* CB-7758 Allow content-url-hosted pages to access the bridge
* CB-7827 Add `--activity-name` for `bin/create`
* CB-7881 Android tooling shouldn't lock application directory
* CB-7940 Disable exec bridge if bridgeSecret is wrong
* CB-7974 Cancel timeout timer if view is destroyed
* CB-8017 Add support for `<input type=file>` for Lollipop
* CB-8026 Bumping up Android Version and setting it up to allow third-party cookies.  This might change later.
* CB-8031 Fix race condition that shows as ConcurrentModificationException
* CB-8079 Use activity class package name, but fallback to application package name when looking for splash screen drawable
* CB-8112 Turn off mediaPlaybackRequiresUserGesture
* CB-8143 Loads of gradle improvements (try it with cordova/build --gradle)
* CB-8147 Have corodva/build warn about unrecognized flags rather than fail
* CB-8168 Add support for `cordova/run --list` (closes #139)
* CB-8176 Vastly better auto-detection of SDK & JDK locations
* CB-8201 Add support for auth dialogs into Cordova Android
* CB-8210 Use PluginResult for various events from native so that content-security-policy <meta> can be used
* CB-8320 Setting up gradle so we can use CordovaLib as a standard Android Library
* CB-8328 Allow plugins to handle certificate challenges (close #150)
* CB-8329 Cancel outstanding ActivityResult requests when a new startActivityForResult occurs
* CB-8378 Removed `hidekeyboard` and `showkeyboard` events (apps should use a plugin instead)
* CB-8411 Initialize plugins only after `createViews()` is called (regression in 3.7.0)
* CB-8417 updated platform specific files from cordova.js repo
* CB-8545 Don't add a layout as a parent of the WebView
* CB-8548 Use debug-signing.properties and release-signing.properties when they exist
* CB-8587 Don't allow WebView navigations within showWebPage that are not whitelisted
* CB-8588 Add CATEGORY_BROWSABLE to intents from showWebPage openExternal=true
* CB-8592 Fix NPE if lifecycle events reach CordovaWebView before `init()` has been called
* CB-8693 CordovaLib should not contain icons / splashscreens
* CB-8699 Fix CordovaResourceApi `copyResource` creating zero-length files when src=uncompressed asset
* CB-8702 New API for plugins to override `shouldInterceptRequest` with a stream
* CB-8735 `bin/create` regex relaxed / better support for numbers
* CB-8834 Don't fail to install on VERSION_DOWNGRADE
* CB-8834 Don't fail to install on VERSION_DOWNGRADE
* CB-8864: Fixing this to mitigate CB-8685 and CB-10104
* CB-8884 Delete Eclipse tweaks from create script
* CB-8891 Add a gradle helper for retrieving config.xml preference values
* CB-8891 Add a note about when the gradle helpers were added
* CB-8894: Updating the template to target mininumSdkTarget=14
* CB-8897 Delete drawable/icon.png since it duplicates drawable-mdpi/icon.png
* CB-8898 Fixes gradle check failure due to missing quotes
* CB-8898 Report expected gradle location properly
* CB-8902 Use immersive mode when available when going fullscreen (close #175)
* CB-8917: New Plugin API for passing results on resume after Activity destruction
* CB-8954 Adds `requirements` command support to check_reqs module
* CB-9042 coho failed to update version, so here we are
* CB-9080 Cordova CLI run for Android versions 4.1.1 and lower throws error
* CB-9080: -d option is not supported on Android 4.1.1 and lower, removing
* CB-9115 android: Grant Lollipop permission req
* CB-9119 Adding lib/retry.js for retrying promise-returning functions. Retrying 'adb install' in emulator.js because it sometimes hangs.
* CB-9149 Fixes JSHint issue introduced by 899daa9
* CB-9149 Make gradle alias subprojects in order to handle libs that depend on libs. This closes #182
* CB-9172 Improved emulator deploy stability. This closes #188.
* CB-9185 Fix signed release build exception. This closes #193.
* CB-9185 Fixed an issue when unsigned apks couldn't be found. 
* CB-9255 Make getUriType case insensitive.
* CB-9260 Install Android-22 on Travis-CI
* CB-9284 Fix for handling absolute path for keystore in build.json
* CB-9286 Fixes build failure when ANDROID_HOME is not set.
* CB-9343 Split the Content-Type to obtain a clean mimetype
* CB-9372: Remove unused files: 'main.js' & 'master.css'. This closes #198
* CB-9382 [Android] Fix KeepRunning setting when Plugin activity is showed. This closes #200
* CB-9389 Fixes build/check_reqs hang
* CB-9391 Fixes cdvBuildMultipleApks option casting
* CB-9392 Fixed printing flavored versions. This closes #184.
* CB-9397 Fixes minor issues with `cordova requirements android`
* CB-9402 Allow to set gradle distubutionUrl via env variable CORDOVA_ANDROID_GRADLE_DISTRIBUTION_URL
* CB-9404 Fixed an exception when path contained -debug or -release
* CB-9428 update script now bumps up minSdkVersion to 14 if it is less than that
* CB-9428 update script now bumps up minSdkVersion to 14 if it is less than that.
* CB-9430 Fixes check_reqs failure when javac returns an extra line
* CB-9430 Fixes check_reqs failure when javac returns an extra line
* CB-9479: Fixing the conditionals again, we should 
* CB-9496 removed permissions added for crosswalk
* CB-9557 Fixes apk install failure when switching from debug to release build
* CB-9608 cordova-android no longer builds on Node 0.10 or below
* CB-9782 Check in `cordova-common` dependency
* CB-9782 Implements PlatformApi contract for Android platform.
* CB-9800 Fixing contribute link.
* CB-9826 Fixed `test-build` script on windows. 
* CB-9835 Downgrade `properties-parser` to prevent failures in Node < 4.x
* CB-9836 Add `.gitattributes` to prevent `CRLF` line endings in repos
* CB-9844 Remove old .java after renaming activity
* CB-9870 updated hello world template
* CB-9880 Fixes platform update failure when upgrading from android@<4.1.0
* CB-9909 Shouldn't escape spaces in paths on Windows.
* CB-9949: Fixing menu button event not fired in **Android**
* CB-9971 Suppress `gradlew _JAVA_OPTIONS` output during build
* CB9042 - Updating Release Notes
* Change getProperty -> prefs.get\* within CordovaActivity
* Change in test's AndroidManifest.xml needed for the test to run properly
* Change in test's AndroidManifest.xml needed for the test to run properly. Forgot the manifest.
* Commiting code to handle permissions, and the special case of the Geolocation Plugin
* Convert usages of Config.\* to use the non-static versions
* defaults.xml: Add AndroidLaunchMode preference
* Delete "CB-3064: The errorUrl is..." Log message left over from debugging presumably
* Delete dead code from CordovaActivity
* Delete explicit activity.finish() in back button handling. No change in behaviour.
* Delete Location-change JS->Native bridge mode
* Deprecate some convenience methods on CordovaActivity
* Develop in Android Studio
* Displaying error when regex does not match.
* Don't re-parse config.xml in onResume.
* Don't show warning when gradlew file is read-only
* Don't show warning when prepEnv copies gradlew and it's read-only
* Extend whitelist to handle URLs without // chars
* Fail fast in create script if package name is not com.foo.bar.
* Filter out non-launchable intents
* Filter out non-launchable intents
* fix `HtmlNotFoundTest` so that it passes when file not found is handled correctly
* Fix broken compile due to previous commit :(
* Fix broken unit test due to missing Config.init() call
* Fix CB-6048: Set launchMode=singleTop so tapping app icon does not always restart app
* Fix CordovaPluginTest on KitKat (start-up events seem to change)
* Fix CordovaPreferences not correctly parsing hex values (valueOf->decode)
* Fix data URI decoding in CordovaResourceApi
* Fix for `android` not being in PATH check on Windows
* Fix NPE when POLLING bridge mode is used.
* Fix PluginManager.setPluginEntries not removing old entries
* Forgot to remove the method that copied over the intent data
* Forgot to remove the method that copied over the intent data
* Getting around to removing this old Intent code
* Getting around to removing this old Intent code
* Handle unsupported protocol errors in webview better
* Handle unsupported protocol errors in webview better
* Ignore multiple onPageFinished() callbacks & onReceivedError due to stopLoading()
* Incrementing version check for Android 4.3 API Level 18
* Log WebView IOExceptions only when they are not 404s
* Make BridgeMode methods public (they were always supposed to be)
* Make CordovaUriHelper class package-private
* Make CordovaWebview resilient to init() not being called (for backwards-compatibility)
* Make gradle wrapper prepEnv code work even when android-sdk is read-only
* Make setWebViewClient an override instead of an overload. Delete Location-change JS->Native bridge mode (missed some of it).
* Manually updating version to 5.0.0-dev for engine tags
* Move handling of Fullscreen preference to CordovaActivity
* Move plugin instantiation and instance storing logic PluginEntry->PluginManager
* Move registration of App plugin from config.xml -> code
* New APIs: `onStart`, `onStop`, `onConfigurationChanged`
* OkHttp has broken headers. Updating for ASF compliance.
* Provide CordovaPlugin with CordovaPreferences. Add new Plugin.initialize()
* README.md: `android update` to `android-19`.
* Refactor Config into ConfigXmlParser, CordovaPreferences
* Refactor CordovaActivity.init so that subclasses can easily override factory methods for webview objects
* Refactor of the Cordova Plugin/Permissions API
* Refactor: Move url-filter information into PluginEntry.
* Refactor: Use ConfigXmlParser in activity. Adds CordovaWebView.init()
* Refactoring the URI handling on Cordova, removing dead code
* Refactoring the URI handling on Cordova, removing dead code
* Remove +x from README.md
* Remove extra console message
* Remove incorrect usage of AlertDialog.Builder.create
* Removed Intent Functionality from Preferences - Preferences can no longer be set by intents
* Removing addJavascriptInterface support from all Android versions lower than 4.2 due to security vu
* Removing addJavascriptInterface support from all Android versions lower than 4.2 due to security vulnerability
* Revert "defaults.xml: Add AndroidLaunchMode preference"
* Revert accidentally removed lines from NOTICE
* Set VERSION to 3.6.0 (via coho)
* Set VERSION to 3.6.0-dev (via coho)
* Set VERSION to 3.6.4 (via coho)
* Simplify: EncodingUtils.getBytes(str) -> str.getBytes()
* Splash screen functionality is now provided via plugin
* Support for Crosswalk to bring the modern Chromium WebView to older devices
* Support for pluggable WebViews
* This breaks running the JUnit tests, we'll bring it back soon
* Trivial spelling fix in comments when reading CordovaResourceApi
* Tweak CordovaPlugin.initialize method to be less deprecated.
* Tweak log messages in CordovaBridge with bridgeSecret is wrong
* Tweak the online bridge to not send excess online events.
* Un-deprecate CordovaActivity.init() - it's needed to tweak prefs in onCreate
* Undeprecate some just-deprecated symbols in PluginManager.
* Update .classpath to make Eclipse happy (just re-orders one line)
* Update cordova.js snapshot to work with bridge changes
* Update CordovaWebViewEngine.java
* Update framework's .classpath to what Eclipse wants it to be.
* Update JS snapshot to version 3.6.0-dev (via coho)
* Update JS snapshot to version 3.6.0-dev (via coho)
* Update JS snapshot to version 3.6.4 (via coho)
* Update JS snapshot to version 4.1.0-dev (via coho)
* Update JS snapshot to version 4.1.0-dev (via coho)
* Update licenses. This closes #190
* Update min SDK version to 14
* Update the errorurl to no longer use intents
* Update the errorurl to no longer use intents
* Update the package.json
* Update theme to `Theme.DeviceDefault.NoActionBar`
* Update to check for Google Glass APIs
* Update unit tests to not use most deprecated things (e.g. DroidGap)
* updated `.gitignore`
* updated `cordova-common` dependnecy to `1.1.0`
* updated RELEASENOTES
* updating existing test code
* Updating NOTICE to include Square for OkHttp
* Updating shelljs to 0.2.6. Copy now preserves mode bits.
* Updating the template to target mininumSdkTarget=14
* Upgrading project to Android 4.3
* Use a higher threshold for slow exec() warnings when debugger is attached.
* Use thread pool for load timeout.
* Whitelist functionality is now provided via plugin (CB-7747)
-->
27 commits from 7 authors. Highlights include:
41 commits from 11 authors. Highlights include:
43 commits from 10 authors. Highlights include:
55 commits from 9 authors. Highlights include:
<!--
and CVE-2014-3502. For more information, see
Changes For Plugin Developers:
http://cordova.apache.org/announcements/2014/08/04/android-351.html
of breaking changes.  Some of the changes to the code base will be of
particular interest to plugin developers.
This release adds significant functionality, and also introduces a number
This was a security update to address CVE-2014-3500, CVE-2014-3501,