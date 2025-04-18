import "../bootstrap/bootstrap.min.css"
import "../App.css"


const Header = () => {

return (

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">Taniti</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/lodging">Places to Stay</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/attractions">Attractions</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/travel">Travel</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/food">Food</a>
            </li>
        </ul>
        </div>
    
    </div>
    </nav>

);

}

export default Header;