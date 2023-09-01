import MainNavigation from "../../components/navigation/MainNavigation";
import { Outlet } from "react-router-dom";

const AppRoot = () => {
    return (
        <div>
        <MainNavigation />
        <main>
          <Outlet />
        </main>
      </div>
    )
};

export default AppRoot