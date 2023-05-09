const WorkExperiencePage = () => {
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <article className="prose text-justify">
            <h2>Pengalaman Bekerja</h2> <br />
            <div className="flex flex-col gap-2">
              <h3>Landing Page (Fullstack Developer)</h3>
              <h6>Agustus, 2021</h6>
            </div>
            <img src={"../../public/image-1.png"} className="w-full" />
            <h5>Fitur Website</h5>
            <ul>
              <li>
                Mengembangkan dan membuat website menggunakan Framework
                Codeigniter 3.
              </li>
              <li>Menampilkan gallery dari PT Metrico Primakarsa.</li>
              <li>
                Penganimasian pada landing page website PT Metrico Primakarsa.
              </li>
            </ul>
          </article>
        </div>
      </div>
    </>
  );
};

export default WorkExperiencePage;
