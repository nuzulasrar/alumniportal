import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [checksession, setCheckSession] = useState(true);
  const [getdata, setGetData] = useState(true);
  const [idalumni, setIdalumni] = useState(0);

  //maklumat pelajar
  const [nama, setNama] = useState("");
  const [gelaran, setGelaran] = useState("");
  const [pangkat, setPangkat] = useState("");
  const [nokp, setNokp] = useState("");
  const [alamat1, setAlamat1] = useState("");
  const [alamat2, setAlamat2] = useState("");
  const [poskod, setPoskod] = useState("");
  const [bandar, setBandar] = useState("");
  const [negeri, setNegeri] = useState("");
  const [negara, setNegara] = useState("");
  const [notel, setNotel] = useState("");
  const [nohp, setNohp] = useState("");

  useEffect(() => {
    const getsessiondata = async () => {
      let sessiondata = sessionStorage.getItem("session");

      console.log(sessiondata);

      if (sessiondata != null) {
        // window.location.href = "/students";
        setIdalumni(sessiondata);
        console.log(`id alumni:  ${idalumni}`);
      } else {
        window.location.href = "/login";
      }

      setCheckSession(false);
    };
    if (checksession) getsessiondata();
  }, [checksession]);

  useEffect(() => {
    const fngetalumnidata = async () => {
      let sessiondata = sessionStorage.getItem("session");
      axios
        .post("https://alumniportal.ucyp.edu.my/api/getalumnidata", {
          idalumni: sessiondata,
        })
        .then((response) => {
          if (response.data.status == 200) {
            //alert(response.data.dataall.alumnidata.alumni_nama);
            setNama(response.data.dataall.alumnidata.alumni_nama);
            setGelaran(response.data.dataall.alumnidata.alumni_gelaran);
            setPangkat(response.data.dataall.alumnidata.idpangkat);
            setNokp(response.data.dataall.alumnidata.alumni_nokp);
            setAlamat1(response.data.dataall.alumnidata.alumni_alamat);
            setAlamat2(response.data.dataall.alumnidata.alumni_alamat2);
            setPoskod(response.data.dataall.alumnidata.alumni_poskod);
            setBandar(response.data.dataall.alumnidata.alumni_bandar);
            setNegeri(
              response.data.dataall.alumnidata.idkodnegeri_alumni_alamat
            );
            setNegara(
              response.data.dataall.alumnidata.idkodnegara_alumni_alamat
            );
            setNotel(response.data.dataall.alumnidata.alumni_notel);
            setNohp(response.data.dataall.alumnidata.alumni_nohp);

            setGetData(false);
          } else {
            alert("error fetching data");
          }
        });
    };
    if (getdata) fngetalumnidata();
  }, [getdata]);

  return (
    <div>
      {/* <Header /> */}
      <main id="main" class="main">
        <div class="pagetitle">
          <h1>Blank Page</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li class="breadcrumb-item">Pages</li>
              <li class="breadcrumb-item active">Blank</li>
            </ol>
          </nav>
        </div>

        <section class="section">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Profil</h5>
                  <br />
                  <div className="row">
                    <div className="col-sm-6">
                      <label htmlFor="">Gelaran: </label> &nbsp;
                      <input
                        type="text"
                        class="form-control"
                        name="gelaran"
                        value={gelaran}
                        onChange={(e) => setGelaran(e.target.value)}
                      />
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="">Nama: </label> &nbsp;
                      <input
                        type="text"
                        class="form-control"
                        name="pangkat"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <label htmlFor="">Pangkat: </label> &nbsp;
                      <input
                        type="text"
                        class="form-control"
                        name="nokp"
                        value={pangkat}
                        nokp
                        onChange={(e) => setPangkat(e.target.value)}
                      />
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="">Nombor KP: </label> &nbsp;
                      <input
                        type="text"
                        class="form-control"
                        name="name"
                        value={nokp}
                        onChange={(e) => setNokp(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <label htmlFor="">Alamat1: </label> &nbsp;
                      <input
                        type="text"
                        class="form-control"
                        name="name"
                        value={alamat1}
                        onChange={(e) => setAlamat1(e.target.value)}
                      />
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="">Alamat2: </label> &nbsp;
                      <input
                        type="text"
                        class="form-control"
                        name="name"
                        value={alamat2}
                        onChange={(e) => setAlamat2(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <label htmlFor="">Poskod: </label> &nbsp;
                      <input
                        type="text"
                        class="form-control"
                        name="name"
                        value={poskod}
                        onChange={(e) => setPoskod(e.target.value)}
                      />
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="">Bandar: </label> &nbsp;
                      <input
                        type="text"
                        class="form-control"
                        name="name"
                        value={bandar}
                        onChange={(e) => setBandar(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <label htmlFor="">Negeri: </label> &nbsp;
                      <input
                        type="text"
                        class="form-control"
                        name="name"
                        value={negeri}
                        onChange={(e) => setPoskod(e.target.value)}
                      />
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="">Negara: </label> &nbsp;
                      <input
                        type="text"
                        class="form-control"
                        name="name"
                        value={negara}
                        onChange={(e) => setBandar(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <label htmlFor="">No Telefon: </label> &nbsp;
                      <input
                        type="text"
                        class="form-control"
                        name="name"
                        value={notel}
                        onChange={(e) => setNotel(e.target.value)}
                      />
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="">No HP: </label> &nbsp;
                      <input
                        type="text"
                        class="form-control"
                        name="name"
                        value={nohp}
                        onChange={(e) => setNohp(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;