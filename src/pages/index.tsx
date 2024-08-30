import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import Profile from "@/components/profile";
import Skills from "@/components/skills";
import Products from "@/components/products";
import Contact from "@/components/contact";
import { useEffect, useState } from "react";
import { Data } from "@/types/products";
import { selectProduct } from "@/utils/supabase";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const [data, setData] = useState<Data[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const product_data = await selectProduct();
  //     setData(product_data);
  //   };
  //   fetchData;
  // }, []);

  // console.log(data ? data : "error")
  return (
    <>
      <Layout>
        {/* プロフィール */}
        <Profile />
        {/* スキル */}
        <Skills />
        {/* 製作物 */}
        <Products />
        {/* コンタクト */}
        <Contact />
      </Layout>
    </>
  );
}
