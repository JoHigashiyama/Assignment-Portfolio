import { css } from "@emotion/css";
import Image from "next/image";

const profile = {
  box: css`
    padding: 6rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.3);
  `,
  title: css`
  font-size: 52px;
  border-bottom: 1px solid #000;
  padding: 0 52px;
  margin-bottom: 1.5rem;
  `,
  image: css`
    width: 200px;
    height: 200px;
    object-fit: cover;
  `,
  profile: css`
    width: 500px;
    letter-spacing: 0.1rem;
  `,
  container: css`
    display: flex;
    flex-direction: row;
  `,
};

const Profile = () => {
  return (
    <div id="profile" className={profile.box}>
      <h1 className={profile.title}>Profile</h1>
      <div className={profile.container}>
        <Image src="/images/nuo.png" alt="nuo.png" className={profile.image} width={200} height={200}/>
        <p className={profile.profile}>
          こんにちは!MCL盛岡情報ビジネス&デザイン専門学校の総合システム工学科2年の東山譲と申します。
          2004年7月25日生まれのヌオーが好きな学生です。
        </p>
      </div>
    </div>
  );
};

export default Profile;
