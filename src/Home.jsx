import profile from "../src/assets/img/sampleProfile.jpg";
function Home() {
    return (
        <>  
        <div id="home" class="container">
            <div class="full-screen-height row flex-lg-row-reverse justify-content-center align-items-center text-center g-5 py-3">
            <div class="col-10 col-sm-8 col-lg-6">

                <img src={profile} class="border-outline rounded-circle d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="400" height="500" loading="lazy" />
            </div>
            <div class="col-lg-6 text-center">
                <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Hello!, My name is Kier Christian Reyes</h1>
                <p class="lead">I'm a third year BSCS Student, currently studying at University of Cabuyao. Currently interested in Data Science and also have a hobby of diving to deeper concepts about it.</p>
                <div class="d-grid gap-2 d-md-flex justify-content-center">
                <button type="button" class="btn btn-outline-dark btn-lg px-4 me-md-2">View My Github</button>
                </div>
            </div>
            </div>
        </div>
        </>
    );
  }
  
  export default Home;