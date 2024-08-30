import { css } from "@emotion/css";
import { FC } from "react";

const skillItem = {
    item: css`
    font-size: 20px;
    text-align: center;
    `,
};

type Props = {
    // 技術
    tech: string;
    // 経験年数
    exp: number;
    // 習熟度
    pro: number;
};

const Skill: FC<Props> = ({tech, exp, pro}) => {
    return (
        <tr>
            <td className={skillItem.item}>{tech}</td>
            <td className={skillItem.item}>{exp}年</td> 
            <td className={skillItem.item}>{pro}</td>
        </tr>
    );
}
export default Skill;