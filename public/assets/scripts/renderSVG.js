




export function renderSVG(){
  


  for (let i = 0; i < 5; i++) {
    const row = `
      <div class="chars-row${i + 1}"></div>
    `;
    document.querySelector('#chars').insertAdjacentHTML('beforeend', row);
  }



  let chars = [];

  for (let i = 0; i < 11; i++) {
  let SVG = /* html */ `
  
    <div class="chars-item${i + 1}">
      <svg xmlns="http://www.w3.org/2000/svg" width="136.978px" height="191.953px" viewBox="0 0 136.978 191.953" enable-background="new 0 0 136.978 191.953" xml:space="preserve"> 
      <path d="M0,191.953V0h65.786c21.708,0,38.232,4.351,49.57,13.052s17.007,21.667,17.007,38.892c0,8.79-2.373,16.7-7.119,23.73 c-4.746,7.033-11.69,12.481-20.83,16.348c10.37,2.814,18.391,8.108,24.06,15.886s8.503,17.118,8.503,28.015 c0,18.018-5.78,31.861-17.336,41.528c-11.558,9.669-28.104,14.502-49.636,14.502H0z M33.354,80.815H66.05 c10.37,0,18.478-2.351,24.324-7.053c5.844-4.701,8.767-11.358,8.767-19.973c0-9.492-2.703-16.348-8.108-20.566 s-13.822-6.328-25.247-6.328H33.354V80.815z M33.354,105.337v59.985H70.4c10.458,0,18.632-2.591,24.521-7.778 c5.887-5.185,8.833-12.393,8.833-21.621c0-19.951-10.197-30.145-30.586-30.586H33.354z" data-svg-origin="68.4885025024414 95.97650146484375" style="transform-origin: 0px 0px;"></path> 
      </svg>
    </div>
`;
  chars.push(SVG)
  }

  // console.log(chars);

  for(let i = 0; i < 5; i++){
    chars.forEach((item,index)=>{
      document.querySelector(`.chars-row${i + 1}`).insertAdjacentHTML('beforeend',chars[index]);
    })
  }
  


  
}

  
 

