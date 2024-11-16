export default function examplePage() {
  return (
    <div className="container">
      <title>Website</title>
      <link rel="icon" href="/favicon.ico" />

      <main>
        <div className="heading">
          <h1 className="title">Hi, my name is Sara!</h1>
        </div>

        <div className="content">
          <p className="description">
            <strong>About me:</strong><br />
    💻 I'm a comp sci major (I have experience in Java, HTML, CSS, Javascript, and a little Python)<br />
    🍜 I love Asian food and boba🧋!<br />
    🏐 I played both high school and club volleyball<br />
    🎹 I also play the piano<br />
    🎨 I love drawing and painting, 🛍️shopping, 📚reading, 🍿watching movies, 🥐baking and cooking, and hanging out with friends!<br />
    🏝️ I love to travel<br /><br />

    <strong>Fun facts:</strong><br />
    🌟 I can solve a rubik's cube in under 1 min (or at least I used to)<br />
    🌟 I was born with one less tooth...I only have 3 front teeth in my bottom row<br />
    🌟 When I went to Australia, I pet a koala and was also pushed out of the way by a kangaroo

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