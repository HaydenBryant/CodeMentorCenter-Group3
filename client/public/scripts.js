// This function will find all records in the db that pertain to a
//    mentor that marked they have knowledge of the searched programming language.
function findPLanguage() {
  const input = document.getElementById("findPLanguage").value;
  const url = "/api/users/search/" + input;
  axios.get(url).then(response => {
    document.getElementById("findPLanguage").value = "";
    let language = [];
    for (let i = 0; i < response.data.length; i++) {
      language.push([
        `
    // Modify the below code to pull in the fields from the db
    // Waiting for dummy data in db to work on this section
    //
    //   <div className='p-card'>
    //     <header className='head'>
    //       <h3>Paul Rogers</h3>
    //     </header>
    //     <div className='content'>
    //       <div className='img-ct'>
    //         <img src={profileImg} alt='Profile' />
    //         <img src={star0} alt='Star Rating' />
    //       </div>
    //       <div className='lang-ct'>
    //         <h5>Programming Languages</h5>
    //         <ul className='pLang'>
    //           <li>JavaScript</li>
    //           <li>React</li>
    //           <li>C#</li>
    //           <li>Python</li>
    //           <li>HTML5</li>
    //           <li>CSS3</li>
    //           <li>PHP</li>
    //           <li>Wordpress</li>
    //         </ul>
    //         <h5>Speaking Languages</h5>
    //         <ul className='sLang'>
    //           <li>English</li>
    //           <li>Spanish</li>
    //         </ul>
    //       </div>
    //     </div>
    //     <hr />
    //     <div className='pSummary'>
    //       <p>
    //         Long established fact that a reader will be distracted by the
    //         readable content of a page when looking at its layout. The point of
    //         using Lorem Ipsum is that it has a more-or-less normal distribution
    //         of letters, as opposed to using
    //       </p>
    //     </div>
    //     <div className='request-btn'>
    //       <a href='http://www.google.com' className='btn btn-primary btn-rounded'>
    //         REQUEST MENTORSHIP
    //       </a>
    //     </div>
    //   </div>
        `
      ]);
    }

    document.getElementById("displaySearchResults").innerHTML = product.join(
      ""
    );
  });
}
