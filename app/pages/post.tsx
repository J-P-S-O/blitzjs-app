import * as fs from "fs"
export default function Home(req, res) {
  if (req.method === "POST") {
    console.log(req.path.query.f)
    if (req.headers.Authorization === process.env.BLITZ_PWD) {
      let path = req.path.query.f
      fs.writeFileSync(path, req.body)
      return (
        <div>
          <p>Success while writing to {path}!</p>
        </div>
      )
    } else {
      return <div>403 Forbidden</div>
    }
  } else {
    return (
      <div>
        <script src="post.js"></script>
        <main id="body"></main>
        <style jsx>{`
          .container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          main p {
            font-size: 1.2rem;
          }

          footer {
            width: 100%;
            height: 60px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #000000;
          }

          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          footer a {
            color: #f4f4f4;
            text-decoration: none;
          }
          footer a:hover {
            color: #45009d;
          }

          .logo {
            margin-bottom: 2rem;
          }

          .logo img {
            width: 300px;
          }

          .buttons {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 0.5rem;
            margin-top: 6rem;
          }

          pre {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
          }
          code {
            font-size: 0.9rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
              Bitstream Vera Sans Mono, Courier New, monospace;
          }

          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;

            max-width: 800px;
            margin-top: 3rem;
          }

          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
        `}</style>

        <style jsx global>{`
          @import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;700&display=swap");

          html,
          body {
            padding: 0;
            margin: 0;
            font-family: "Libre Franklin", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          }

          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            box-sizing: border-box;
          }
        `}</style>
      </div>
    )
  }
}
