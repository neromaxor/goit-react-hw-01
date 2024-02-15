import css from "./Profile.module.css";

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileCard}>
      <div>
        <img src={image} alt="User avatar" className={css.profileImage} />
        <div className={css.profileInfo}>
          <p className={css.name}>{name}</p>
          <p className={css.info}>{tag}</p>
          <p className={css.info}>{location}</p>
        </div>
      </div>

      <ul className={css.profileStats}>
        <li className={css.profileStatsItem}>
          <span className={css.textStatsItem}>Followers</span>
          <span className={css.allData}>{stats.followers}</span>
        </li>
        <li className={css.profileStatsItem}>
          <span className={css.textStatsItem}>Views</span>
          <span className={css.allData}>{stats.views}</span>
        </li>
        <li className={css.profileStatsItem}>
          <span className={css.textStatsItem}>Likes</span>
          <span className={css.allData}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
