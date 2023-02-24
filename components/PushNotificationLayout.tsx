import React, { useEffect } from "react";
import "firebase/messaging";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import { onMessage } from "firebase/messaging";
import { getFcmToken, messaging } from "@/firebase";

const PushNotificationLayout: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
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
  });

  // Handles the click function on the toast showing push notification
  const handleClickPushNotification = (url: any) => {
    if (url) {
      router.push(url);
    }
  };

  //   useEffect(() => {
  //     toast(<div>hello</div>);
  //   }, []);

  // Get the push notification message and triggers a toast to display it
  async function getMessage() {
    console.log(`message hello`);
    onMessage(messaging, (message) => {
      console.log(message, `hello`);

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
