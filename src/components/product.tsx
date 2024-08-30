import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { css } from "@emotion/css";

type Props = {
  // title
  title: string;
  // 詳細
  detail: string;
  // GithubLink
  link: string;
  // サムネイル
  thumbnail: string;
  // alt
  alt: string;
};

const product = {
  productBox: css`
    width: 300px;
    height: 350px;
    background-color: #ffffff;
    border: 1px solid #000000;
    display: flex;
    flex-direction: column;
    margin: 20px 30px;
  `,
  image: css`
    object-fit: cover;
  `,
  textBox: css`
    display: flex;
    flex-direction: column;
    padding: 8px;
  `,
  title: css`
    font-size: 20px;
  `,
  text: css`
    font-size: 14px;
    margin: 8px 0;
  `,
  link: css`
    color: #69b9ff;
  `,
};

const Product: FC<Props> = ({ title, detail, thumbnail, alt, link }) => {
  return (
    <div className={product.productBox}>
      <Image
        src={thumbnail ? thumbnail : "/images/nuo.png"}
        alt={alt ? alt : ""}
        width={300}
        height={170}
        className={product.image}
      />
      <div className={product.textBox}>
        <h3 className={product.title}>{title}</h3>
        <p className={product.text}>{detail}</p>
        <Link
          href={link ? link : ""}
          className={product.link}
          target="_brank"
        >
          Github
        </Link>
      </div>
    </div>
  );
};

export default Product;
