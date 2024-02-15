import styles from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => (
        <li key={friend.id} className={styles.friendListItem}>
          <FriendListItem />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
