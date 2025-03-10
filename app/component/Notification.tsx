import React from "react";
import NotificationsSystem, {
  atalhoTheme,
  useNotifications,
  setUpNotifications,
} from "reapop";

export default function NotificationWrapper() {
  // 1. Retrieve the notifications to display, and the function used to dismiss a notification.
  const { notifications, dismissNotification } = useNotifications();

  setUpNotifications({
    defaultProps: {
      position: "top-right",
      dismissible: true,
      dismissAfter: 1500
    },
  });
  return (
    <div>
      <NotificationsSystem
        // 2. Pass the notifications you want Reapop to display.
        notifications={notifications}
        // 3. Pass the function used to dismiss a notification.
        dismissNotification={(id) => dismissNotification(id)}
        // 4. Pass a builtIn theme or a custom theme.
        theme={atalhoTheme}
      />
    </div>
  );
}
