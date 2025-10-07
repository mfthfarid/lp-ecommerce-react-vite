import React from "react";
import "@/assets/css/About.css";

function About() {
  return (
    <div className="container">
      <h2 className="sectionTitle">Tentang Kami</h2>
      <div className="aboutContent">
        <div className="aboutText">
          <p className="aboutParagraph">
            Toko Snack adalah destinasi terbaik untuk semua kebutuhan camilan
            Anda. Kami telah melayani pelanggan dengan produk berkualitas sejak
            2020.
          </p>
          <p className="aboutParagraph">
            Dengan lebih dari 500+ varian produk, kami berkomitmen untuk
            menyediakan makanan ringan terbaik dengan harga yang bersahabat
            untuk semua kalangan.
          </p>
          <div className="aboutStats">
            <div className="statItem">
              <h3 className="statNumber">500+</h3>
              <p className="statLabel">Produk</p>
            </div>
            <div className="statItem">
              <h3 className="statNumber">10k+</h3>
              <p className="statLabel">Pelanggan</p>
            </div>
            <div className="statItem">
              <h3 className="statNumber">4.9</h3>
              <p className="statLabel">Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
