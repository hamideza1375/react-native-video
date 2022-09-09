import notifee, { AndroidStyle } from '@notifee/react-native';

function Notification() {
  async function create(title, body, icon) {
    const channelId = await notifee.createChannel({ id: 'default', name: 'Default Channel', });
    await notifee.requestPermission();

    const notificationId = notifee.displayNotification({
      id: 'del',
      title: title,
      body: body,
      android: icon ? {
        channelId,
        // asForegroundService:true,
        largeIcon: icon,
        style: { type: AndroidStyle.BIGPICTURE, picture: icon },
      } :
        { channelId },
      ios: {
        categoryId: "reminder",
        attachments: [{ url: icon }]
      },
    });
    return notificationId;
  }


  async function close(notificationId) {
    await notifee.cancelNotification(notificationId);
  }

  return {
    create,
    close,
  }
}

export default Notification