import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useLocation, useParams } from 'react-router-dom';

export default function VideoRoom() {

  const { roomID } = useParams();
  const location = useLocation();

  const userName = location.state?.name || "Guest";

  const myMeeting = async (element) => {

const appID = Number(import.meta.env.VITE_APP_ID);
console.log(appID)
const serverSecret = import.meta.env.VITE_SERVER_SECRET;

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),   // Unique User ID
      userName
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Copy Link',
          url: `https://video-conference-teal.vercel.app/room/${roomID}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };

  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
}
