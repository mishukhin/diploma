import { Fragment, useEffect } from "react";
import Directory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";
import { fetchDirectoryStart } from "../../store/categories/category.action";
import { useDispatch } from "react-redux"
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDirectoryStart());
  }, []);
  return (
    <Fragment>
      <Directory />
      <Outlet />
    </Fragment>
  );
}

export default Home;
