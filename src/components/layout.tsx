import { FC } from "react";
import Header from "./header";
import Footer from "./footer";
import { css } from "@emotion/css";

type Props = {
    children: React.ReactNode;
}

const layout = {
    body: css`
    background-color: #d1d5db;
    height: 100%;
    `,
}

const Layout: FC<Props> = ({children}) => {
    return (
        <div className={layout.body}>
        {/* ヘッダー */}
        <Header />

        {/* メイン */}
        {children}

        {/* フッター */}
        <Footer />
        </div>
    );
}
 
export default Layout;