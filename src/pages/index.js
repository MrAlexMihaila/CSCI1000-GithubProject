import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Team Webapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to our about me page!</h1>

        <p className="description">
          Click on any of us to learn more!
        </p>

        <div className="grid">
          <a href="/AlexMihaila" className="card">
            <h3>Alex Mihaila's About Me &rarr;</h3>
            <p>Click to learn more about Alex!</p>
          </a>

          <a href="/Sara" className="card">
            <h3>Sara Nguyen's About Me &rarr;</h3>
            <p>Click to learn more about Sara!</p>
          </a>

          <a href="/Yabe" className="card">
            <h3>Yabe Beneberu's About Me &rarr;</h3>
            <p>Click to learn more about Yabe!</p>
          </a>

          <a href="/MarieViita" className="card">
            <h3>Marie Viita's About Me &rarr;</h3>
            <p>Click to learn more about Marie!</p>
          </a>
        </div>
      </main>

      <footer>
        <p>&copy; CSCI 1000 2024 | All rights reserved</p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          background: #f9fafb;
          padding: 0 2rem;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          max-width: 1200px;
          width: 100%;
          text-align: center;
        }

        footer {
          padding: 1rem;
          width: 100%;
          background-color: #222;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .title {
          font-size: 3rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 2rem;
        }

        .description {
          font-size: 1.25rem;
          color: #666;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .description2 {
          font-size: 1.2rem;
          color: #555;
          margin-bottom: 1.5rem;
        }

        code {
          background: #e6f4f1;
          padding: 0.5rem 1rem;
          font-size: 1.1rem;
          border-radius: 8px;
          color: #4f79d4;
        }

        .grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          margin-top: 3rem;
        }

        .card {
          background: #ffffff;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          padding: 2rem;
          text-align: center;
          width: 250px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
        }

        .card h3 {
          font-size: 1.4rem;
          color: #0070f3;
          margin-bottom: 1rem;
        }

        .card p {
          font-size: 1rem;
          color: #555;
        }

        footer p {
          font-size: 1rem;
          color: #ddd;
        }

        @media (max-width: 768px) {
          .grid {
            flex-direction: column;
            align-items: center;
          }

          .title {
            font-size: 2.5rem;
          }
        }
      `}</style>

      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
          font-family: 'Helvetica Neue', sans-serif;
          background-color: #f4f4f4;
          color: #333;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
