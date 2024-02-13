import { Profile } from "./components/Profile/Profile";
import userData from "../userData.json";

export const App = () => {
  return (
    <>
      <Profile
        name={userData[0].username}
        tag={userData[0].tag}
        location={userData[0].location}
        image={userData[0].avatar}
        stats={userData[0].stats}
      />
    </>
  );
};
