import Head from 'next/head';

const LoginPage = () => (
  <div className="container">
    <Head>
      <title>Login Page</title>
      <link rel="icon" href="/sleep.png" />
      <link rel="stylesheet" type="text/css" href="/icon.css" />
    </Head>
    <main className="limiter">
      <div className="container-login">
        <div className="wrap-login">
          <div className="logo">
            <img src="/sleep.png" alt="" />
          </div>

          <form className="login-form validate-form">
            <span className="login-form-title">Login To Record Your Dream!</span>

            <div className="wrap-input validate-input" data-validate="Valid email is: a@email.c">
              <input className="input" type="text" name="email" />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input validate-input" data-validate="Enter password">
              <span className="btn-show-pass">
                <i className="zmdi zmdi-eye"></i>
              </span>
              <input className="input" type="password" name="pass" />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <div className="wrap-login-form-btn">
                <button className="login-form-btn">Login</button>
              </div>
            </div>

            <div className="text-center">
              <span className="txt1">Don’t have an account? </span>

              <a className="txt2" href="#">
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
    </main>

    <style jsx>{`
      /*====google font-Poppins====*/
      @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');

      input {
        outline: none;
        border: none;
      }

      input:focus {
        border-color: transparent !importent;
      }

      input:focus::-webkit-input-placeholder {
        color: transparent !important;
      }

      input::-webkit-input-placeholder {
        color: #adadad;
      }

      .limiter {
        width: 100%;
        margin: 0 auto;
      }

      .container-login {
        width: 100%;
        min-height: 100vh;
        display: flex;
        display: -webkit-box;
        display: -webkit-flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 15px;
        background: #ddd;
      }

      .wrap-login {
        width: 350px;
        background: #ddd;
        border-radius: 10px;
        overflow: hidden;
        padding: 40px 55px 33px 55px;
        box-shadow: 0 0 3px 3px #dddddd, 6px 6px 8px 4px rgba(136, 136, 136, 0.7),
          -6px -6px 8px 4px rgba(244, 244, 244, 0.7);
      }

      .logo {
        display: flex;
        justify-content: center;
      }

      .logo img {
        width: 80px; 
        padding-bottom: 30px ;
      }

       {
      .login-form {
        width: 100%;
      }

      .login-form-title {
        display: block;
        font-family: 'Poppins';
        font-size: 28px;
        font-weight: bold;
        color: #333333;
        line-height: 1.2;
        text-align: center;
        padding-bottom: 60px;
      }

      .wrap-input
      {
        width: 100%;
        position: relative; 
        border-bottom: 2px solid #adadad;
        margin-bottom: 38px;
      }

      .input {
        font-family: 'Poppins';
        font-size: 15px;
        color: #333333;
        line-height: 1.2;
        display: block;
        width: 94%;
        background: transparent;
        padding: 0 5px;
      }

      .focus-input
      {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        top: -5px;
        left: 0;
        pointer-events: none;
      }

      .focus-input:before
      {
        content: "";
        position: absolute;
        display: block;
        bottom: -7px;
        left: 0;
        width: 0;
        height: 2px;
        background: #333333;
        transition: all 0.4s;

      }

      .focus-input:after
      {
        font-family: 'Poppins';
        font-size: 15px;
        color:#999999;
        line-height: 1.2;
        content: attr(data-placeholder);
        display: block;
        width: 100%;
        position:absolute;
        top: 0px;
        left: 0px;
        padding-left: 5px;
        transition: all 0.4s;
        -webkit-transition: all 0.4s;
      }

      .input:focus + .focus-input:after
      {
          top: -20px;
      }
      .input:focus + .focus-input:before
      {
          width: 100%;
      }

      .has-val.input + .focus-input::after
      {
          top: -15px;
      }
      .has-val.input:focus + .focus-input:before
      {
          width: 100%;
      }

      .btn-show-pass
      {
          font-size: 15px;
          color:#999999;
          display: -webkit-flex;
          display: -webkit-box;
          display: flex;
          align-items: center;
          position: absolute;
          height: 100%;
          top: -5px;
          right: 0;
          padding-right: 5px;
          cursor: pointer;
          transition: all 0.4s;
      }
      .btn-show-pass:hover
      {
          color:#333333;
      }

      .btn-show-pass:active
      {
          color:#333333;
      }
      button
      {
          outline: none !important;
          border:none;
          background: transparent;
      }

      .txt1
        {
            font-family: 'Poppins';
            font-size: 13px;
            color: #666666;
            line-height: 1.5;
        }
        .txt2
        {
            font-family: 'Poppins';
            font-size: 13px;
            color: #333333;
            line-height: 1.5;
            text-decoration: none;
            transition: all 0.4s;
        }
        .txt2:hover
        {
            text-decoration: underline;
        }
        .container-login-form-btn
        {
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding-top: 20px;
        }

        .wrap-login-form-btn
        {
            width:100%;
            display:block;
            position: relative;
            z-index: 1;
            border-radius: 25px;
            overflow: hidden;
            margin: 0 auto;
            box-shadow: 0 0 3px 3px #dddddd,
                        4px 4px 6px 2px rgba(136,136,136,0.7),
                        -4px -4px 6px 2px rgba(244,244,244,0.7);

        }

        .login-form-btn
        {
            font-family: 'Poppins';
            font-size: 15px;
            color: #333333;
            line-height: 1.2;
            font-weight: bold;
            text-transform: uppercase;
            display: -webkit-flex;
            display: -webkit-box;
            display: flex;
            justify-content: center;
            align-items: center;
            letter-spacing: 1px;
            padding:0 20px;
            height: 50px;
            width:100%;
        }

        
        /* .login-form-btn:hover
        {
            background: #333333;
            color:#ddd;
        } */

        .login-form-btn:active
        {
            background: #333333;
            color:#ddd;
        }

        .text-center
        {
            text-align: center;
            padding-top: 70px;
        }

        .validate-input
        {
            position: relative;
        }

                

      

    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        height: 100%;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
          Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }
      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default LoginPage;
