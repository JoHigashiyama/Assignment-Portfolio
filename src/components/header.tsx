import { css } from "@emotion/css";
import Link from "next/link";

const link = {
  linkbox: css`
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 5rem;
    position: fixed;
    top: 0;
    background-color: #374151;
  `,
  link: css`
    display: block;
    margin: auto;
    font-size: 1.5rem;
    line-height: 2rem;
    color: #ffffff;
    &:hover {
      color: rgb(255, 200, 100);
    }
  `,
};

const Header = () => {
  return (
    <div className={link.linkbox}>
      {/* ページ内遷移 */}
      <a href="#profile" className={link.link}>
        Profile
      </a>
      <a href="#skills" className={link.link}>
        Skill
      </a>
      <a href="#products" className={link.link}>
        Works
      </a>
      <a href="#contact" className={link.link}>
        Contact
      </a>
    </div>
  );
};

export default Header;
