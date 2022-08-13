import Swal from "sweetalert2";

const No = () => {
  return (
    <div className="text-center w-100 bg-dark text-light pt-5">
      <div className="mr-5 ml-3">
        <h1 className="text-light">
          Mubashar Shahzad <span>/</span> Mubashar Shahreef
          < div className="mt-3">
          False Person
          </div>
          <br />
          <div className="text-danger">
          Stay Alert Please!
          </div>
        </h1>
        <div>
          <strong>
            Mubashar Shahzad/Mubashar Shahreef does not have any association <br />
            with our platform digitizepk Anyone claiming this name is false. <br />
            Please be aware Thank you.
          </strong>
        </div>
        <div className="mt-5 mb-5 font-q">
          digitizepk is not providing any business, <br />finance, and technical
          assistance. < br/> We work only with startups and investors.
        </div>
        We will come up with the new idea that will help everyone. So stay tuned
        with us.
        <div className="mt-5">Please subscribe to our mail list </div>
        <input type="text" className="mt-2" />
        <button onClick={ () => { 
            
            Swal.fire('Thank You!', 'You have successfully Subscribed', 'success')
        }} type="submit" className="btn text-light btn-primary ml-3" >Subscribe</button>
        <div className="mt-3">
          <strong>Thank you,</strong>
        </div>
        {/* <Link href="/">
              <a className="default-btn btn-two">Return To Home Page</a>
            </Link> */}
      </div>
    </div>
  );
};

export default No;
