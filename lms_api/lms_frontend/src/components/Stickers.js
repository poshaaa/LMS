// var styles = `
// #only-this {
//     * {
//     margin: 0;
//     padding : 0;
// }

// body {
//           font-family: arial, sans-serif;
//           font-size: 100%;
//           margin: 3em;
//           background: #666;
//           color: #FFF;
// }

// h2, p {
//           font-size: 100%;
//           font-weight: normal;
// }

// ul, li {
//         list-style: none;
// }

// ul {
//      overflow: hidden;
//      padding: 3em;
// }

// ul li a {
//           text-decoration: none;
//           color: #000;
//           background: #FFC;
//           display: block;
//           height: 10em;
//           width: 10em;
//           padding: 1em;
// }

// ul li {
//        margin: 1em;
//        float: left;
// }
//   }
// `
// var styleSheet = document.createElement("style")
// styleSheet.innerText = styles
// document.head.appendChild(styleSheet)

function Stickers() {
    return (
        <div id="only-this">
            <ul>
                <li>
                <a href = "#">
                    <h2>Title #1</h2>
                <p>Content #1</p>
                    </a>
                </li>
                <li>
                <a href = "#">
                <h2>Title #1</h2>
                <p>Content #2</p>
                </a>
                </li>
            </ul>
        </div>
    );
  }
  
  export default Stickers;
  