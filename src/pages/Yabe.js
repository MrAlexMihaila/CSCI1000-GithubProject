export default function examplePage() {
  return (
    <div className="container">
      <title>Website</title>
      <link rel="icon" href="/favicon.ico" />

      <main>
        <div className="heading">
          <h1 className="title">Hi, my name is Yabe!</h1>
        </div>

        <div className="content">
          <p className="description">
            <strong>About me:</strong><br />
    💻I'm a CS major <br />
    ♟️I used to play chess alot. <br />
    ⚽I play soccer and 🏀basketball for fun.<br />
    💻I video edit as a hobby. <br />

    <strong>Fun facts:</strong><br />
    🌟I have 4 younger brothers. <br />
    🌟I was born in Ethiopia.<br />
    🌟I visted 11 states with my familiy so far. (Washington state, Colorado, New Mexico, California, Virgina, Kansas, Oregon, Texas, MaryLand, DC, and Arizona.

          </p>

          <a className="button" href="/">
            <p>Back to Home Page</p>
          </a>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #f9f9f9;
          max-width: 80rem;
          margin: auto;
        }

        main {
          padding: 3rem 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .heading {
          margin-bottom: 2rem;
        }

        .title {
          margin: 0;
          font-size: 3.5rem;
          font-weight: 700;
          color: #333;
        }

        .content {
          max-width: 800px;
          padding: 1rem;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .description {
          line-height: 1.8;
          font-size: 1.2rem;
          color: #555;
          margin-bottom: 2rem;
        }

        .button {
          display: inline-block;
          padding: 1rem 2rem;
          background-color: #0070f3;
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          border-radius: 5px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .button:hover {
          background-color: #005bb5;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
        }

        .button:active {
          background-color: #003f7d;
          transform: translateY(0);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .button p {
          margin: 0;
        }

        @media (max-width: 768px) {
          .title {
            font-size: 2.5rem;
          }

          .description {
            font-size: 1rem;
          }

          .button {
            font-size: 1rem;
            padding: 0.8rem 1.6rem;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f9f9f9;
          color: #333;
        }

        * {
          box-sizing: border-box;
        }

        h1, p {
          margin: 0;
        }
      `}</style>
    </div>
  );
}