import React from "react";
import "../assets/css/Home.css";
import { Link } from "lucide-react";
// import Katalog from "../Pages/Katalog";

function MainContent({ userStatus }) {
  const features = [
    "React Components",
    "JSX Syntax",
    "State Management",
    "Props System",
  ];

  const services = [
    {
      title: "Web Development",
      desc: "Membangun website modern & responsif.",
    },
    {
      title: "Mobile Apps",
      desc: "Membuat aplikasi mobile Android & iOS.",
    },
    {
      title: "UI/UX Design",
      desc: "Desain antarmuka yang menarik & mudah digunakan.",
    },
  ];

  return (
    <main className="hero">
      <div className="hero-content">
        <h1>Selamat Datang di Toko Snack</h1>
        <p>
          Temukan berbagai pilihan snack favorit Anda dengan harga terbaik. Kami
          menyediakan snack berkualitas untuk keluarga Indonesia.
        </p>
        {/* <Link to={"/katalog"} className="cta-button">
          Lihat Katalog
        </Link> */}
        <a href="/katalog" className="cta-button">
          Belanja Sekarang
        </a>
      </div>

      {/* <section>
        <div className="home">
          <h2>Selamat Datang di platform kami</h2>
          <p>
            User Status:{" "}
            <span
              style={{
                color: userStatus === "Premium" ? "gold" : "green",
                fontWeight: "bold",
              }}>
              {userStatus.toUpperCase()}
            </span>
          </p>

          {userStatus === "Premium" ? (
            <div>
              <h3>Premium Features:</h3>
              <ul style={{}}>
                {features.map((feature, index) => (
                  <li key={index} style={{ marginBottom: "5px" }}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <p>Upgrade to premium access</p>
              <button
                style={{
                  padding: "10px 20px",
                  backgroundColor: "blue",
                  border: "none",
                  borderRadius: "5px",
                  marginBottom: "10px",
                }}>
                Upgrade Sekarang
              </button>
            </div>
          )}
        </div>
      </section> */}

      {/* Hero Section */}
      {/* <section className="hero">
        <div className="home">
          <h1>Selamat Datang di Website Kami</h1>
          <p>Kami menyediakan layanan terbaik untuk Anda</p>
          <button>Pelajari Lebih Lanjut</button>

          <div className="hero-image">
            <h3>Saat ini status anda masih : </h3>
            <p>
              User Status:{" "}
              <span
                style={{
                  color: userStatus === "Premium" ? "gold" : "green",
                  fontWeight: "bold",
                }}>
                {userStatus.toUpperCase()}
              </span>
            </p>

            {userStatus === "Premium" ? (
              <div>
                <h3>Premium Features:</h3>
                <ul style={{}}>
                  {features.map((feature, index) => (
                    <li key={index} style={{ marginBottom: "5px" }}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div>
                <p>Upgrade to premium access</p>
                <button
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "blue",
                    border: "none",
                    borderRadius: "5px",
                    marginBottom: "10px",
                  }}>
                  Upgrade Sekarang
                </button>
              </div>
            )}
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      {/* <section className="services">
        <div className="home">
          <h2>Layanan Kami</h2>
          <div className="service-list">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* <Katalog /> */}
    </main>
  );
}

export default MainContent;
