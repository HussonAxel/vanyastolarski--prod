import { Link } from "@tanstack/react-router";
// import Breadcrumb from "@components/Breadcrumb/Breadcrumb";

const Header: React.FC = () => {
  return (
    <>
      <header className="bg-green font-Poppins text-white">
        <div className="mx-auto">
          <nav className="flex justify-between items-center py-4 border-b border-gray-300 mx-auto w-4/5">
            <ul className="uppercase flex space-x-4">
              {/* <li>
                <Link to="/livres">Livres</Link>
              </li> */}
              <li>
                <Link to="/shop">Boutique</Link>
              </li>
            </ul>
            <span className="text-7xl font-myfont font-thin mx-auto">
              <Link to="/">VS</Link>
            </span>
            <ul className="uppercase flex space-x-4">
              <li>
                <Link to="/quotes">Lectures</Link>
              </li>
              <li>
                <Link to="/blog">Actus</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="text-section text-center m-auto w-fit font-myfont py-12">
          <h2 className="text-6xl">LES DOUZE DIVINS</h2>
          <p className="text-3xl">TOME 1 : LES ANGES MORTELS</p>
        </div>
      </header>
      {/* <Breadcrumb
        title={"LES DOUZE DIVINS"}
        subtitle={"TOME 1 : LES ANGES MORTELS"}
      /> */}
    </>
  );
};

export default Header;
