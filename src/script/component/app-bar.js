class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
           * {
               margin: 0;
               padding: 0;
               box-sizing: border-box;
           }
           :host {
               display: block;
               width: 100%;
               background-color: #930002;
               color: white;
               box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
           }
           h2 {
               padding: 16px;
           }
       </style>
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

       <!-- Image and text -->
        <nav class="navbar sticky-top navbar-light style="background-color: #930002;">
        <a class="navbar-brand " style="color: white; font-size: 190%;" href="#">
        <img src="../src/assets/images/website-logo.png" width="15%" class="d-inline-block align-top" alt="">
        <b>Club Finder v2.0</b>
        </a>
        <button onclick="window.location.href='../src/welcome.html'" style="background-color: #B80000; color: white;" type="button" class="btn"><b>About Club Finder</b></button>
        </nav>
       `;

    }
}

customElements.define("app-bar", AppBar);
