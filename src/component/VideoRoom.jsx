import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useLocation, useParams } from 'react-router-dom';

export default function VideoRoom() {

  const { roomID } = useParams();
  const location = useLocation();

  const userName = location.state?.name || "Guest";

  const myMeeting = async (element) => {

    const appID = 1121225539;
    const serverSecret = "e1d4dafe35e274b4cdc2bb9458f84630";

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
          url: `http://localhost:5173/room/${roomID}`,
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
