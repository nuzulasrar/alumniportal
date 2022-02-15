import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const Dashboard = () => {
  const [checksession, setCheckSession] = useState(true);
  const [getdata, setGetData] = useState(true);
  const [getsenaraipangkat, setGetSenaraiPangkat] = useState(true);
  const [idalumni, setIdalumni] = useState(0);

  //array senarai pangkat
  const [senaraipangkat, setSenaraiPangkat] = useState([]);
  const [senaraipangkat2, setSenaraiPangkat2] = useState([]);

  //maklumat pelajar
  const [selectedImage, setSelectedImage] = useState("");
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
  const [sektor, setSektor] = useState("");
  const [sektorlevel, setSektorLevel] = useState("");
  const [occupation, setOccupation] = useState("");
  const [alumni_namasektor, setAlumniNamaSektor] = useState("");
  const [caddress1, setCAddress1] = useState("");
  const [caddress2, setCAddress2] = useState("");
  const [cpostcode, setCPostcode] = useState("");
  const [ctown, setCTown] = useState("");
  const [cstate, setCState] = useState("");
  const [ccountry, setCCountry] = useState("");

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
            setSektor(response.data.dataall.alumnidata.alumni_sektor);
            setSektorLevel(
              response.data.dataall.alumnidata.idkodsektorpekerjaan
            );
            setOccupation(response.data.dataall.alumnidata.alumni_sektor);
            setAlumniNamaSektor(
              response.data.dataall.alumnidata.alumni_namasektor
            );
            setCAddress1(response.data.dataall.alumnidata.alumni_alamatsektor1);
            setCAddress2(response.data.dataall.alumnidata.alumni_alamatsektor2);
            setCPostcode(response.data.dataall.alumnidata.alumni_poskodsektor);
            setCTown(response.data.dataall.alumnidata.alumni_bandarsektor);
            setCState(response.data.dataall.alumnidata.idkodnegeri_pekerjaan);
            setCCountry(response.data.dataall.alumnidata.idkodnegara_pekerjaan);

            setGetData(false);
          } else {
            alert("error fetching data");
          }
        });
    };
    if (getdata) fngetalumnidata();
  }, [getdata]);

  const [a, b] = useState(false);

  useEffect(() => {
    const fngetsenaraipangkat = async () => {
      let sessiondata = sessionStorage.getItem("session");
      sessionStorage.setItem("ok", "TWISTER FRIES");

      const res = await axios
        .post("https://alumniportal.ucyp.edu.my/api/senaraipangkat", {
          idalumni: sessiondata,
        })
        .then((res) => {
          if (res.data.status == 200) {
            setSenaraiPangkat(res.data.senaraipangkat);
            setSenaraiPangkat2(res.data.senaraipangkat[2]);
            b(true);
          }
        });

      console.log(res.data);
    };
    if (getsenaraipangkat) fngetsenaraipangkat();
  }, [getsenaraipangkat]);

  const [entah, setEntah] = useState();

  useEffect(() => {
    const fn11 = async () => {
      // alert(JSON.stringify(senaraipangkat[1].label));
      // entah = senaraipangkat.map((item) => {
      //   return (
      //     <li>{senaraipangkat.label}</li>
      //   )
      // })
    };
    if (a) fn11();
  }, [a]);

  function Selectlist(props) {
    // console.log(JSON.stringify(senaraipangkat2));
    const listall = props.list;
    return (
      <select value={pangkat} onChange={(event) => setPangkat(event.target.value)} className="form-control" name="gelaran">
        {listall.map((number) => {
          return <option value={number.value}>{number.label}</option>;
        })}
      </select>
    );
  }

  const animatedComponents = makeAnimated();

  const defaultt = {
    value: sessionStorage.getItem("idpangkat"),
    label: sessionStorage.getItem("idpangkat"),
  };

  const onFileChange = (event) => {
    setSelectedImage(event.target.files[0]);

    const fd = new FormData();
    fd.append('profilepic2', selectedImage);
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    
    const idd = sessionStorage.getItem("session");

    var form = document.forms.namedItem("fileinfo");

    const fd = new FormData(form);
    fd.append("profilepic", selectedImage);

    // alert(JSON.stringify(fd.get('profilepic')));

    axios.post("https://alumniportal.ucyp.edu.my/api/postform", fd, { 
      headers: { "Content-Type": "multipart/form-data" }}).then((response) => {
      alert(response.data.profilepic + " " + response.data.message);
    });
  }

  return (
    <div>
      {/* <Header /> */}
      <main id="main" class="main">
        <div class="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li class="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>

        <section class="section">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <form onSubmit={handlesubmit} action="post" enctype="multipart/form-data" name="fileinfo">
                    <h5 class="card-title">Profile Picture</h5>
                    {/* <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    options={senaraipangkat}
                    defaultValue={defaultt}
                    isSearchable
                    isMulti
                  /> */}

                    <br />
                    <div className="row">
                      <div className="col-sm-6">
                      <label htmlFor="">Profile Picture: </label> &nbsp;
                        <input
                          type="file"
                          name="profilepic"
                          id="profilepic"
                          className="form-control"
                          onChange={onFileChange}
                        />
                      </div>
                      <div className="col-sm-6">
                        <img src="" />
                      </div>
                    </div>
                    <h5 class="card-title">Profil</h5>
                    <div className="row">
                      <div className="col-sm-6">
                        <label htmlFor="">Gelaran: </label> &nbsp;
                        <Selectlist list={senaraipangkat} />
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="">Nama: </label> &nbsp;
                        <input
                          type="text"
                          class="form-control"
                          name="nama"
                          readOnly
                          value={nama}
                          onChange={(e) => setNama(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <label htmlFor="">Nombor KP: </label> &nbsp;
                        <input
                          type="text"
                          class="form-control"
                          name="nokp"
                          readOnly
                          value={nokp}
                          onChange={(e) => setNokp(e.target.value)}
                        />
                      </div>
                    </div>
                    <h5 class="card-title mt-3">Alamat</h5>
                    <div className="row">
                      <div className="col-sm-6">
                        <label htmlFor="">Alamat 1: </label> &nbsp;
                        <input
                          type="text"
                          class="form-control"
                          name="alamat1"
                          value={alamat1}
                          onChange={(e) => setAlamat1(e.target.value)}
                        />
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="">Alamat 2: </label> &nbsp;
                        <input
                          type="text"
                          class="form-control"
                          name="alamat2"
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
                          name="poskod"
                          value={poskod}
                          onChange={(e) => setPoskod(e.target.value)}
                        />
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="">Bandar: </label> &nbsp;
                        <input
                          type="text"
                          class="form-control"
                          name="bandar"
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
                          name="negeri"
                          value={negeri}
                          onChange={(e) => setNegeri(e.target.value)}
                        />
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="">Negara: </label> &nbsp;
                        <input
                          type="text"
                          class="form-control"
                          name="negara"
                          value={negara}
                          onChange={(e) => setNegara(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <label htmlFor="">No Telefon: </label> &nbsp;
                        <input
                          type="text"
                          class="form-control"
                          name="notel"
                          value={notel}
                          onChange={(e) => setNotel(e.target.value)}
                        />
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="">No HP: </label> &nbsp;
                        <input
                          type="text"
                          class="form-control"
                          name="nohp"
                          value={nohp}
                          onChange={(e) => setNohp(e.target.value)}
                        />
                      </div>
                    </div>
                    <h5 class="card-title mt-3">Current Employment</h5>
                    <div className="row">
                      <div className="col-sm-6">
                        <label htmlFor="">Sector: </label> &nbsp;
                        <input
                          type="text"
                          class="form-control"
                          name="sektor"
                          value={sektor}
                          onChange={(e) => setSektor(e.target.value)}
                        />
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="">Level: </label> &nbsp;
                        <input
                          type="text"
                          class="form-control"
                          name="sektorlevel"
                          value={sektorlevel}
                          onChange={(e) => setSektorLevel(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <label htmlFor="">Occupation: </label> &nbsp;
                        <input
                          type="text"
                          class="form-control"
                          name="occupation"
                          value={occupation}
                          onChange={(e) => setOccupation(e.target.value)}
                        />
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="">Company: </label> &nbsp;
                        <input
                          type="text"
                          class="form-control"
                          name="alumni_namasektor"
                          value={alumni_namasektor}
                          onChange={(e) => setAlumniNamaSektor(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <label htmlFor="">Company Address (Line 1): </label>{" "}
                        &nbsp;
                        <input
                          type="text"
                          class="form-control"
                          name="caddress1"
                          value={caddress1}
                          onChange={(e) => setCAddress1(e.target.value)}
                        />
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="">Company Address (Line 2): </label>{" "}
                        &nbsp;
                        <input
                          type="text"
                          class="form-control"
                          name="caddress2"
                          value={caddress2}
                          onChange={(e) => setCAddress2(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <label htmlFor="">Postcode: </label> &nbsp;
                        <input
                          type="text"
                          class="form-control"
                          name="cpostcode"
                          value={cpostcode}
                          onChange={(e) => setCPostcode(e.target.value)}
                        />
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="">Town: </label> &nbsp;
                        <input
                          type="text"
                          class="form-control"
                          name="ctown"
                          value={ctown}
                          onChange={(e) => setCTown(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <label htmlFor="">State: </label> &nbsp;
                        <input
                          type="text"
                          class="form-control"
                          name="cstate"
                          value={cstate}
                          onChange={(e) => setCState(e.target.value)}
                        />
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="">Country: </label> &nbsp;
                        <input
                          type="text"
                          class="form-control"
                          name="ccountry"
                          value={ccountry}
                          onChange={(e) => setCCountry(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 mt-3">
                        <button
                          type="submit"
                          className="btn btn-primary float-end"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
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
