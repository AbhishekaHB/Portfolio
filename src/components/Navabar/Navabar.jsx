import "./Navabar.css"

const Navabar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid px-5">
    <a class="navbar-brand px-2" href="#">Abhisheka H B</a>
   <div>
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item mx-3">
          <a class="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item mx-3">
          <a class="nav-link active" aria-current="page" href="#">Resume</a>
        </li>
        <li class="nav-item mx-3">
          <a class="nav-link active" aria-current="page" href="/Contact">Contact</a>
        </li>
       </ul>
    </div>
   </div>
  </div>
</nav></>
  )
}

export default Navabar
