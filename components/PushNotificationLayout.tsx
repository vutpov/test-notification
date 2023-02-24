import React, { useEffect } from "react";
import "firebase/messaging";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import { onMessage } from "firebase/messaging";
import { getFcmToken, messaging, requestPermission } from "@/firebase";

const PushNotificationLayout: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  async function setToken() {
    try {
      const token = await getFcmToken();
      if (token) {
        console.log(token);
        getMessage();
      }
    } catch (error) {
      console.log(error);
    }
  }

  const router = useRouter();
  useEffect(() => {
    setToken();

    // Event listener that listens for the push notification event in the background
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener("message", (event) => {
        console.log("event for the service worker", event);
      });
    }

    // Calls the getMessage() function if the token is there
  }, []);

  // Handles the click function on the toast showing push notification
  const handleClickPushNotification = (url: any) => {
    if (url) {
      router.push(url);
    }
  };

  // Get the push notification message and triggers a toast to display it
  async function getMessage() {
    // const result = await requestPermission();

    // if (result === "granted") {
    //   onMessage(messaging, (message) => {
    //     toast(
    //       <div onClick={() => handleClickPushNotification(message?.data?.url)}>
    //         <h5>{message?.notification?.title}</h5>
    //         <h6>{message?.notification?.body}</h6>
    //       </div>,
    //       {
    //         closeOnClick: false,
    //       }
    //     );
    //   });
    // }

    onMessage(messaging, (message) => {
      toast(
        <div onClick={() => handleClickPushNotification(message?.data?.url)}>
          <h5>{message?.notification?.title}</h5>
          <h6>{message?.notification?.body}</h6>
        </div>,
        {
          closeOnClick: false,
        }
      );
    });
  }

  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
};

export default PushNotificationLayout;
