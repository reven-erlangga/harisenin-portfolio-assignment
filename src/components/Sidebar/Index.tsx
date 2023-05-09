import SidebarItem from "../SidebarItem/Index";

const Sidebar = () => {
  return (
    <div className="flex-shrink-0 xl:min-w-[15rem]">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <article className="prose text-justify">
            <h3>Reven Ferlian Erlangga!</h3>
            <p>(Fullstack Developer)</p>
          </article>
        </div>
      </div>
      <br />
      <div className="sticky top-[8.5rem] ">
        <div className="card bg-base-100 shadow-xl">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="flex gap-4 menu p-4 w-80 bg-base-100 text-base-content">
            <li className="">
              <SidebarItem title="Tentang Saya" href="/" />
            </li>
            <li>
              <SidebarItem
                title="Pengalaman Bekerja"
                href={`/work-experience`}
              />
            </li>
            <li>
              <SidebarItem title="Kontak Saya" href={`/contact`} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
