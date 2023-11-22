/* eslint-disable react/prop-types */
import { PrettyChatWindow } from "react-chat-engine-pretty";
const ChatsPage = ({ user }) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="3cc12d23-6c12-4ffe-9b86-73ccd5027f2c"
        username={user.username}
        secret={user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};
export default ChatsPage;
