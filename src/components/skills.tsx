import { css } from "@emotion/css";
import Skill from "./skill";

const skill = {
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
  flexRow: css`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `,
  itemBox: css`
    width: 400px;
    padding: 20px;
  `,
  itemTitle: css`
    font-size: 28px;
    text-align: center;
  `,
  thead: css`
    border-bottom: 1px solid #000000;
  `,
  itemSkill: css`
    width: 120px;
    font-size: 20px;
  `,
};

const Skills = () => {
  return (
    <div id="skills" className={skill.box}>
      <h1 className={skill.title}>Skill</h1>
      <div className={skill.flexRow}>
        <div className={skill.itemBox}>
          <h1 className={skill.itemTitle}>フロントエンド</h1>
          <table>
            <thead className={skill.thead}>
              <tr>
                <th className={skill.itemSkill}>技術</th>
                <th className={skill.itemSkill}>経験年数</th>
                <th className={skill.itemSkill}>
                  習熟度
                  <br />
                  (Max:100)
                </th>
              </tr>
            </thead>
            <tbody>
              <Skill tech="HTML/CSS" exp={1} pro={40} />
              <Skill tech="JavaScript" exp={0.5} pro={20} />
            </tbody>
          </table>
        </div>
        <div className={skill.itemBox}>
          <h1 className={skill.itemTitle}>バックエンド</h1>
          <table>
            <thead className={skill.thead}>
              <tr>
                <th className={skill.itemSkill}>技術</th>
                <th className={skill.itemSkill}>経験年数</th>
                <th className={skill.itemSkill}>習熟度(Max:100)</th>
              </tr>
            </thead>
            <tbody>
              <Skill tech="Java" exp={1} pro={50} />
              <Skill tech="PHP" exp={0.5} pro={20} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Skills;
