import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={clsx(css.friendCard)}>
      <img src={avatar} alt="Avatar" width="48" className={css.avatar} />
      <p className={css.name}>{name}</p>
      <p className={isOnline ? css.online : css.offline}>
        {" "}
        {isOnline ? "Online" : "Offline"}{" "}
      </p>
    </div>
  );
};

export default FriendListItem;
