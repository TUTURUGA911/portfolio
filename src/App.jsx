import DataImage from "./data";
import { listTools, listProyek } from "./data";
function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl-gap-0 gap-6 grod-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
            />
            <q>
              Member IMPHNEN (Ingin Menjadi Programmer Handal Namun Enggan
              Ngoding).😁
            </q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, Saya Feriardus Banggur
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya adalah seorang junior web developer yang bersemangat dan
            berkomitmen untuk membangun karir dalam dunia pengembangan web.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              className="bg-amber-700 p-4 rounded-2xl hover:bg-amber-600"
              href="assets/cv.pdf"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
              href="https://github.com/TUTURUGA911"
            >
              Github <i className="ri-github-fill ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto rounded-4xl animate__animated animate__fadeInUp animate__delay-4s"
          loading="lazy"
        />
      </div>
      {/* Tentang */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
        >
          <p className="text-base/loose mb-10">
            Hai, Perkernalakan saya Feriardus Banggur Saya adalah seorang junior
            web developer yang bersemangat dan berkomitmen untuk membangun karir
            dalam dunia pengembangan web. Saya memiliki dasar yang kuat dalam
            HTML, CSS, dan JavaScript, dan saya senang belajar teknologi baru
            yang terkait dengan pengembangan web. Saya telah mengambil bagian
            dalam beberapa proyek kecil dan telah bekerja keras untuk memahami
            konsep-konsep dasar dalam pengembangan web, seperti responsif design
            dan aksesibilitas.
          </p>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl mb-1">
                2<span className="text-amber-500">+</span>
              </h1>
              <p>Proyek Selesai</p>
            </div>
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  1<span className="text-amber-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="tools mt-32"
        >
          <h1 className="text-4xl/snug font-bold mb-4">Tools yang digunakan</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:2/3 sm:w-3/4 w-full text-base/loose opacity-50">
            Berikut ini beberapa tools yang biasa saya gunakan untuk pembuatan
            Website
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
              >
                <img
                  src={tool.gambar}
                  alt="Tools Imagee"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-40">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Tentang */}

      {/* Proyek */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-os-delay="300"
        className="proyek mt-32 py-10"
        id="proyek"
      >
        <h1 className="text-center text-4xl font-bold mb-2">Proyek</h1>
        <p className="text-base/loose text-center opacity-50">
          Berikut ini beberapa proyek yang telah saya buat.
        </p>
        <div className="proyek-box mt-14 md:grid-cols-2 grid-cols-1 gap-4 grid">
          {listProyek.map((proyek) => (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
              key={proyek.id}
              className="p-4 bg-zinc-800 rounded-md"
            >
              <img src={proyek.gambar} alt="Proyek Image" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    className="bg-amber-800 p-3 cursor-pointer rounded-lg block border border-zinc-600 hover:bg-amber-600"
                    href={proyek.web}
                  >
                    Lihat webiste
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Proyek */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-os-delay="300"
        className="kontak mt-32 p-10"
        id="kontak"
      >
        <h1 className="text-4xl mb-2 font-bold text-center">
          Kon<span className="text-amber-600">tak</span>
        </h1>
        <p className="text-base/loose text-center mb-10 opacity-50">
          Mari Terhubung dengan saya.
        </p>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-os-delay="300"
          className="grid md:grid-cols-2 grid-cols-1 gap-8"
        >
          {/* Form */}
          <form
            action="https://formsubmit.co/feriardusbanggur23@gmail.com"
            method="POST"
            className="bg-zinc-800 p-8 rounded-lg border border-zinc-600 shadow-md"
            autoComplete="off"
          >
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span>📩</span> Send Message
            </h2>
            <div className="flex flex-col gap-5">
              <div>
                <label className="block mb-1 font-semibold">Nama Lengkap</label>
                <input
                  className="border border-zinc-600 bg-zinc-900 p-2 w-full rounded-md text-white"
                  type="text"
                  name="nama"
                  placeholder="Masukkan Nama..."
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Email</label>
                <input
                  className="border border-zinc-600 bg-zinc-900 p-2 w-full rounded-md text-white"
                  type="email"
                  name="email"
                  placeholder="Masukkan Email..."
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Pesan</label>
                <textarea
                  className="border border-zinc-600 bg-zinc-900 p-2 w-full rounded-md text-white"
                  name="pesan"
                  rows="6"
                  placeholder="Pesan..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-amber-700 hover:bg-amber-600 text-white py-2 rounded-md w-full font-semibold"
              >
                Kirim Pesan
              </button>
              <p className="text-sm text-amber-600 bg-zinc-900 border border-zinc-700 rounded-md p-2">
                ➤ Saya biasanya merespon dalam 24 jam!
              </p>
            </div>
          </form>

          {/* Info Box */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-os-delay="300"
            className="flex flex-col gap-6"
          >
            {/* Quick Connect */}
            <div className="bg-zinc-800 border border-zinc-600 p-6 rounded-lg">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-amber-500">
                🚀 Quick Connect
              </h2>
              <div className="flex flex-col gap-3 text-gray-300">
                <p className="break-words sm:break-normal">
                  <span className="font-semibold text-amber-400">
                    📧 Email:
                  </span>{" "}
                  <a
                    href="mailto:feriardusbanggur23@gmail.com"
                    className="text-gray-300 hover:text-amber-500 break-all"
                  >
                    feriardusbanggur23@gmail.com
                  </a>
                </p>{" "}
                <p>
                  <span className="font-semibold text-amber-400">
                    📍 Location:
                  </span>{" "}
                  Indonesia ID
                </p>
                <p>
                  <span className="font-semibold text-amber-400">
                    ⏰ Timezone:
                  </span>{" "}
                  UTC+7 (WIB)
                </p>
              </div>
            </div>

            {/* Social Networks */}
            <div className="bg-zinc-800 border border-zinc-600 p-6 rounded-lg">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-amber-500">
                🔗 Social Networks
              </h2>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/TUTURUGA911"
                  className="bg-zinc-700 border cursor-pointer border-zinc-600 rounded-md p-2 text-center hover:bg-amber-600 hover:text-white"
                >
                  GitHub <i className="ri-github-fill ri-lg"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/feriardus-orlan-banggur-3100b8285/"
                  className="bg-zinc-700 border cursor-pointer border-zinc-600 rounded-md p-2 text-center hover:bg-amber-600 hover:text-white"
                >
                  LinkedIn <i className="ri-linkedin-box-fill ri-lg"></i>
                </a>
                <a
                  href="https://www.instagram.com/fee_rry/"
                  className="bg-zinc-700 border cursor-pointer border-zinc-600 rounded-md p-2 text-center hover:bg-amber-600 hover:text-white"
                >
                  Instagram <i className="ri-instagram-fill ri-lg"></i>
                </a>
                <a
                  href="https://www.youtube.com/@Ktsu-LoF"
                  className="bg-zinc-700 border cursor-pointer border-zinc-600 rounded-md p-2 text-center hover:bg-amber-600 hover:text-white"
                >
                  YouTube <i className="ri-youtube-fill ri-lg"></i>
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-zinc-900 border border-amber-500 p-3 rounded-md text-amber-400 font-semibold">
              ✅ Currently available for new projects!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
