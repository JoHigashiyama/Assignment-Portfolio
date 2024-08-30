import { css } from "@emotion/css";
import Product from "./product";
import { FC, useEffect, useState } from "react";
import { Data } from "@/types/products";
import { selectProduct } from "@/utils/supabase";

const work = {
  box: css`
    padding-top: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 2rem;
    background-color: rgba(255, 255, 255, 0.3);
  `,
  title: css`
    font-size: 52px;
    border-bottom: 1px solid #000;
    padding: 0 52px;
    margin-bottom: 1.5rem;
  `,
  itemBox: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `,
};

// type Props = {
//   products: Data[];
// };

const Products = () => {
  return (
    <div id="products" className={work.box}>
      <h1 className={work.title}>Works</h1>
      <div className={work.itemBox}>
        <Product
          title="Higashiyama's Portfplio"
          detail="東山譲のポートフォリオサイトです"
          thumbnail="/images/sample1.png"
          alt="Higashiyama's Portfolio"
          link="https://github.com/JoHigashiyama/Assignment-Portfolio"
        />
      </div>
    </div>
  );
};

export default Products;
