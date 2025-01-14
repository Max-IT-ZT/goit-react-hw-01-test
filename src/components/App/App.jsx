import Profile from "../Profile/Profile";
import userData from "../../data/userData.json";
import FriendList from "../FriendList/FriendList";
import friends from "../../data/friends.json";
export default function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      {/* <TransactionHistory items={transactions} /> */}
    </div>
  );
}
