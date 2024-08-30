import { css } from "@emotion/css";

const contact = {
  box: css`
    padding-top: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 2rem;
  `,
  title: css`
    font-size: 52px;
    border-bottom: 1px solid #000;
    padding: 0 52px;
    margin-bottom: 1.5rem;
  `,
  container: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

const Contact = () => {
  return (
    <div id="contact" className={contact.box}>
      <h1 className={contact.title}>Contact</h1>
      <div className={contact.container}>
        <h2>ご用件はこちらのメールへ</h2>
        <p>j.higashiyama.sys23@morijyobi.ac.jp</p>
      </div>
    </div>
  );
};

export default Contact;
