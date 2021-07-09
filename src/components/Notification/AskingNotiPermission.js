import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
/**
 * 
 * expo-permissions is now deprecated — the functionality has been moved to other expo packages that directly use these permissions (e.g. expo-location, expo-camera). The package will be removed in the upcoming releases.
 */
const AskingNotificationPermissonToken = async () => {
  let token;
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS,
  );
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }
  if (finalStatus !== 'granted') {
    console.log('Failed to get push token for push notification!');
    return (token = '');
  }
  token = (await Notifications.getExpoPushTokenAsync()).data;
  return token;
};

export default AskingNotificationPermissonToken;
