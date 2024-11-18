import React from "react";

const NavBarOpenedMenu: React.FC = () => {
  return (
    <>
      <div className="bg-green h-full w-screen absolute left-0 m-auto hidden">
          <article className=" border-2 border-black text-white h-1/4 bg-green">
          <p>VS</p>
            <h2>MES LIVRES</h2>
            <p>I</p>
          </article>
          <article className=" border-2 border-black text-white h-1/4">
            MES LECTURES
          </article>
          <article className=" border-2 border-black text-white h-1/4">
            MES PRESTATIONS
          </article>
          <article className=" border-2 border-black text-white h-1/4">
            Je suis un test
          </article>
      </div>
    </>
  );
};

export default NavBarOpenedMenu;
