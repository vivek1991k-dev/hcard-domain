import notification from "antd/lib/notification";
import classNames from "classnames";

export enum NotificationType {
  SUCCESS = 'success'
}

const NOTIFICATION_DELAY = 2;

export const displayNotification = (message: string, messageType: NotificationType, duration = NOTIFICATION_DELAY): void => {
  notification.config({
      duration: duration,
      getContainer: () => document.body,
      placement: 'bottomLeft'
  });

  notification.open({
      className: classNames('alert', messageType),
      message
  })
}