import Menu from "../Menu/Menu";
import { ReactNode } from "react";

type ILayout = {
    children: ReactNode
}

const Layout = ({ children }: ILayout) => {
    return(
    <div className="container-fluid">
        <Menu />
        <div className="container">
            <div className="row">
                { children }
            </div>
        </div>
    </div>
    )
}

export default Layout;