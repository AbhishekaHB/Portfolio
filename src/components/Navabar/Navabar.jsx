import "./Navabar.css"

const Navabar = () => {
  return (
    <>
    {/* <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid px-lg-5">
    <a class="navbar-brand px-lg-2" href="#">Abhisheka H B</a>
   <div>
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <ul class="navbar-nav  me-auto my-2 my-lg-0 navbar-nav-scroll">
      <li class="nav-item mx-lg-3">
          <a class="nav-link active" aria-current="page" href="/Home">Home</a>
        </li>
        <li class="nav-item mx-lg-3">
          <a class="nav-link active" aria-current="page" href="/Resume">Resume</a>
        </li>
        <li class="nav-item mx-lg-3">
          <a class="nav-link active" aria-current="page" href="/Contact">Contact</a>
        </li>
       </ul>
    </div>
   </div>
  </div>
</nav> */}

<nav class="navbar navbar-expand-lg bg-body-tertiary px-2">
  <div class="container-fluid  px-lg-5">
    <a class="navbar-brand" href="#">Abhisheka H B</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse px-lg-5 mx-lg-5" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto px-lg-5 mx-lg-5 mb-2 mb-lg-0">
      <li class="nav-item mx-lg-3">
          <a class="nav-link active"  href="/Home">Home</a>
        </li>
        <li class="nav-item mx-lg-3">
          <a class="nav-link active" aria-current="page" href="/Resume">Resume</a>
        </li>
        <li class="nav-item mx-lg-3">
          <a class="nav-link active" aria-current="page" href="/Contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

</>
  )
}

export default Navabar
