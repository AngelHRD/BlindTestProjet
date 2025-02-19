import { Outlet } from "react-router-dom";
import Header from "./Header";

function MainLayout() {
    return (
        <div>
            {/* <Component navbar/sidebar /> */}

            {/* Content content */}
            <div>
                <Header />
                <main>
                    <Outlet />
                    {/* C'est ou les routes enfant seront render */}
                </main>
            </div>
        </div>
    );
}

export default MainLayout;
