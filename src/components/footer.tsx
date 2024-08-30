import { css } from "@emotion/css";

const footer = {
  linkbox: css`
    width: 320px;
    display: flex;
    flex-direction: row;
    margin: 0 auto 4rem auto;
  `,
  link: css`
    display: block;
    margin: auto;
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: #ffffff;
    &:hover {
      color: rgb(255, 200, 100);
    }
  `,
  footer: css`
  justify-content: center;
  align-items: center;
  background-color: #6b7280;
  padding: 5rem 0;
  `,
  copyright: css`
  font-size: 0.75rem;
  line-heihgt: 1rem;
  text-align: center;
  color: #ffffff;
  `
};

const Footer = () => {
    return (
        <footer className={footer.footer}>
            {/* pagelink */}
            <div className={footer.linkbox}>
                <a href="#profile" className={footer.link}>Profile</a>
                <a href="#skills" className={footer.link}>Skill</a>
                <a href="#products" className={footer.link}>Works</a>
                <a href="#contact" className={footer.link}>Contact</a>
            </div>
            {/* copyright */}
            <p className={footer.copyright}>@HigashiyamaJo. All Right Reserved.</p>
        </footer>
    );
}
 
export default Footer;