const WorkExperiencePage = () => {
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <article className="prose text-justify">
            <h2>Pengalaman Bekerja</h2> <br />
            <div className="flex flex-col gap-2">
              <h3>Golden English (Fullstack Developer)</h3>
              <h6>May, 2022 - Present</h6>
            </div>
            <ul>
              <li>
                Mengembangkan dan membuat website booking class menggunakan
                Framework Codeigniter 3.
              </li>
              <li>
                Mengembangkan website portal golden english portal menggunakan
                Framework Codeigniter yang terintegrasi dengan layanan pihak
                ketiga (whatsapp api).
              </li>
              <li>
                Mengembangkan website dan aplikasi mobile golden english yang
                meliputi dashboard guru & murid menggunakan Framework Laravel
                dan Flutter yang terintegrasi dengan layanan monitoring pihak
                ketiga (Santry)
              </li>
              <li>
                Implementasi keperluan serta melakukan pencadangan database
                secara berkalaÁ
              </li>
              <li>Membuat dokumentasi API menggunakan Postman</li>
            </ul>
            <div className="flex flex-col gap-2">
              <h3>PT Mah Sing Indonesia (Fullstack Developer)</h3>
              <h6>Feb, 2020 - Feb, 2022</h6>
            </div>
            <ul>
              <li>
                Merancang dan mengembangkan aplikasi digital check sheet
                menggunakan Framework Laravel dan Flutter yang diimplementasikan
                di perangkat Zebra TC20 untuk melakukan perawatan forklift.
              </li>
              <li>
                Mengembangkan website incoming dan outgoing untuk department
                warehouse yang diimplementasikan di perangkat Zebra TC20Á
              </li>
              <li>
                Bekerja sama dengan team dalam mengembangkan fitur delivery note
                untuk keperluan HRD portal yang terintegrasi Odoo. Sistem ini
                menggunakan 2 database yang terintegrasi satu sama lain, MySQL
                digunakan untuk portal website dan PostgreSQL digunakan untuk
                database aplikasi Odoo.
              </li>
              <li>
                Bekerja sama dengan team dalam mengembangkan website Coretools
                system menggunakan Framework Laravel untuk kalibrasi alat ukur.
              </li>
              <li>
                Monitoring aplikasi berjalan dan melakukan pemeliharaan pada
                aplikasi
              </li>
            </ul>
          </article>
        </div>
      </div>
    </>
  );
};

export default WorkExperiencePage;
