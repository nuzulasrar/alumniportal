import axios from "axios";

const Form = () => {
  const submitform = () => {
      axios.post("http://alumni.ucyp.edu.my/postform", {}).then((res) => {

      });
  };

  return (
    <div>
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
              <form onSubmit={submitform}>
                Name
                <input type="text" className="form-control" name="name" id="" />
                Gender
                <select name="gender" className="form-control">
                  <option value=""></option>
                  <option value="MALE">MALE</option>
                  <option value="FEMALE">FEMALE</option>
                </select>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Form;
