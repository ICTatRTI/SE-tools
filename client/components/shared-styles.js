export const sharedStyles = css`
  .blue-button {
    color: white;
    background-color: blue;
  }
  .blue-button:disabled {
    background-color: grey;
  }
  
  /* Page Setup */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
      line-height: 1.15;
      font-size: 1.3vw;
      height: 100%;
      height: -webkit-fill-available;
  }
  body {
      background-color: #f7f6f6 !important;
      /*min-height: 100vh;*/
      height: 100% !important;
      display: flex !important;
      flex-direction: column !important;
      justify-content: center !important;
      align-items: center !important;
      font-family: 'Andika', sans-serif !important;
      font-size: 1.3rem !important;
      font-weight: 400 !important;
      line-height: 1.5 !important;
      margin: 0 !important;
      color: #212121 !important;
      background-image: url("./images/orange_hills_75.png") !important;
      background-size: cover !important;
      background-attachment: fixed !important;
      background-repeat: no-repeat !important;
  }
  body.demo {
      background-image: url("./images/blue_hills_75.png");
  }
  main {
      width: 80vw;
      height: 90vh;
      display: flex;
      flex-direction: column;
  }
  header {
      text-align: center;
  }
  #letters header {
      margin-left: -5vw;
      margin-right: -5vw;
  }
  header .btn {
    font-size: 3rem;
    width: 4.5rem;
    height: 4.5rem;
    margin: 0.5rem;
    padding: 0;
    text-transform: lowercase;
  }
  #letters header .btn {
      font-size: 2.7rem;
      width: 4rem;
      height: 4rem;
  }
  #content {
      background-color: #fff;
      border-radius: 1rem;
      padding: 4rem 1.2rem;
      font-size: 4rem;
      font-weight: 700;
      text-align: center;
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: lowercase;
    margin-top: 1rem;
    margin-bottom: 1rem;
    letter-spacing: .4rem;
    position: relative;
  }
  [data-windows] #content {
      padding: 2rem 1.2rem;
  }
  #content > div {
      min-height: 1.5em;
  }
  #content > .btn {
      width: 4rem;
      height: 4rem;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  #content #erase {
      right: 1rem;
      top: 1rem;
  }
  #content #question {
      left: 1rem;
      top: 1rem;
  }
  #content #more {
      right: 1rem;
      bottom: 1rem;
  }
  .demo #content #more svg path,
  .demo #done svg path,
  .demo #question svg g {
      fill: #0c2fff;
  }
  .demo #content #erase svg path.tangerine {
      fill: #0c2fff;
  }
  /*
  #content > div {
      position: relative;
      padding: 1rem 0;
      background-image: url("./images/eraser2.svg");
      background-size: 2rem auto;
      background-repeat: no-repeat;
      background-position: right bottom;
  }
  */
  [data-numcompare] #content div {
      width: 100%;
      height: 100%;
  }
  [data-sound] #content div,
  [data-decoding] #content div {
      width:  100%;
  }
  [data-windows] #content > div {
      width:  80%;
  }
  [data-windows="kofi"] #content > div,
  [data-windows="mary"] #content > div {
      width:  100%;
  }
  #navigation {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
  }
  #navigation .buttons {
      display: flex;
      align-items: center;
      margin-right: -2rem;
  }
  #navigation .btn {
      width: 6.5rem;
      height: 6.5rem;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  #navigation .btn:last-child {
      margin-right: 0;
  }
  #navigation #skip.btn {
      width: 5.5rem;
      height: 5.5rem;
      background-color: #fff1de;
      border-color: #fff1de;
  }
  
  
  /* Special Components */
  #tangerineMan {
    margin-top: -5rem;
    margin-left: -3rem;
    z-index: 10;
    position: relative;
    transition: color 0.7s;
  }
  #tangerineMan img {
      max-height: 11.5rem;
  }
  #tangerineMan.animate {
      outline: none;
  }
  #tangerineMan:before {
      position: absolute;
      top: 0;
      left: 0;
      margin: -1rem 0 0 -1rem;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      content: '';
      opacity: 0;
      pointer-events: none;
      box-shadow: 0 0 0 2px rgba(255,170,0,1);
      clip-path: polygon(0% 0%, 50% 0%, 50% 50%, 0% 50%);
  }
  #tangerineMan:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      margin: -1rem 0 0 -1rem;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      opacity: 0;
      pointer-events: none;
      box-shadow: 0 0 0 2px rgba(255,170,0,1);
      clip-path: polygon(0% 0%, 50% 0%, 50% 50%, 0% 50%);
  }
  .demo #tangerineMan:before, .demo #tangerineMan:after {
      box-shadow: 0 0 0 2px rgba(12,47,255,1);
  }
  #tangerineMan.animate:before {
      animation: anim-sound 0.7s forwards;
  }
  #tangerineMan.animate:after {
      animation: anim-sound-2 0.7s forwards;
  }
  #window-pane {
    padding: 0.5rem;
    border: 4px solid #ffbf09;
    border-radius: 1rem;
    margin: 0 5rem;
    text-transform: none;
    font-size: 1.4rem;
    text-align: left;
  }
  .demo #window-pane {
      border-color: #a6bdff;
  }
  .compare-nums {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .window-qs {
      display: flex;
      flex-direction: column;
      width: 100%;
  }
  .window-qs p {
      margin-top: 0;
      margin: 0;
      text-transform: none;
      font-size: 2rem;
  }
  .toggle {
      position: absolute;
      clip: rect(0,0,0,0);
      pointer-events: none;
  }
  .toggle:active + label, .toggle:checked + label {
      border-color: #ff620c;
  }
  .demo .toggle:active + label, .demo .toggle:checked + label {
      border-color: #0c2fff;
  }
  .non-game, .sound-qs {
      display: flex;
      width: 100%;
      justify-content: space-around;
  }
  .non-game {
      flex-wrap: wrap;
      text-transform: none;
  }
  .non-game h1 {
      margin: 0;
  }
  .non-game p {
      font-size: 3rem;
      margin-top: 0;
  }
  .equation-container {
      min-width: 50%;
      display: flex;
      align-items: flex-start;
  }
  #maths {
      margin-right: 1rem;
  }
  
  /* Buttons */
  .btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    letter-spacing: 0rem; 
    vertical-align: middle;
    user-select: none;
    padding: 0.375rem 0.75rem;
    font-family: 'Andika', sans-serif;
    font-size: 1.3rem;
    line-height: 1.5;
    border-radius: 0.5rem;
    color: #2a3f55;
    border: 1px solid #ffbf09;
    text-decoration: none;
    box-shadow: 0px 1px 6px 3px #ffaa004d;
    background-color: #ffbf09;
    transition-duration: 0.4s;
    position: relative;
  }
  .btn:after {
      content: "";
    display: block;
    position: absolute;
    border-radius: 4em;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.5s;
    box-shadow: 0 0 10px 40px #ffaa004d;
  }
  .btn:active:after {
      box-shadow: 0 0 0 0 #ffaa004d;
    position: absolute;
    border-radius: 4em;
    left: 0;
    top: 0;
    opacity: 1;
    transition: 0s;
  }
  .demo .btn {
      background-color: #a6bdff;
      border-color: #a6bdff;
      box-shadow: 0px 1px 6px 3px #5682ff4d;
  }
  .demo .btn:after {
      box-shadow: 0 0 10px 40px #5682ff4d;
  }
  .demo .btn:active:after {
      box-shadow: 0 0 0 0 #5682ff4d;
  }
  .btn img,
  .btn svg {
      max-width: 100%;
      height: auto;
      vertical-align: middle;
  }
  .btn-lg {
      width: 6.5rem;
      height: 6.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      margin: 0 .25rem;
  }
  .non-game .btn-lg {
      width: 9rem;
      height: 9rem;
      font-size: 3rem;
  }
  .compare-nums .btn {
      width: 9rem;
      height: 9rem;
      border-width: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3.5rem;
  }
  .window-qs .btn {
      text-align: left;
      font-size: 1.8rem;
      margin-top: 0.5rem;
      border-width: 4px;
      text-transform: none;
  }
  .sound-qs .btn {
      border-width: 4px;
  }
  
  
  @keyframes press {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.92);
    }
    to {
      transform: scale(1);
    }
  }
  
  @keyframes anim-sound {
      0% {
          opacity: 1;
          transform: scale3d(0.3, 0.3, 1);
      }
      100% {
          opacity: 0;
          transform: scale3d(1, 1, 1);
      }
  }
  @keyframes anim-sound-2 {
      0% {
          opacity: 1;
          transform: scale3d(0.5, 0.5, 1);
      }
      100% {
          opacity: 0;
          transform: scale3d(1.5, 1.5, 1);
      }
  }
  
  /* Utilities */
  .grey {
      color: #f0f0f0;
  }
  .transform-none {
      text-transform: none;
  }
  .w-100 {
      width: 100%;
  }
  
  
  /* Example Page */
  #exampleScreen #navigation {
      justify-content: flex-end;
  }
  #topTangerine {
      height: 4rem;
      width: auto;
      position: absolute;
      right: 1rem;
      top: 1rem;
  }
  #ear {
      top: 1rem;
      right: 6rem;
  } 
  `;
