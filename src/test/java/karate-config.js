function fn() {
  var config = {}
  var android = {}
  android["desiredConfig"] = {
   //"app" : "https://github.com/babusekaran/droidAction/raw/main/build/UiDemo.apk",
   "app" : "C:\\Users\\Pawk73\\Documents\\Karate-Auto\\karate-Zen_Framework\\Zen_KarateFramework\\apk\\App_nocibe.apk",
   "newCommandTimeout" : 300,
   "platformVersion" : "9.0",
   "platformName" : "Android",
   "connectHardwareKeyboard" : true,
   "deviceName" : "emulator-5554"
  }
  config["android"] = android
  return config;
}
