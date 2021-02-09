import { Head, Link } from "blitz"
export default function(req, res) => {
<div>
<Head>
<title>Post 1 </title>
</Head>
<div>

<h1>The blog is up</h1>
<p> The blog is running! </p>
</div>
<footer>
Powered by <a href = "https://blitzjs.com/">Blitz.js></a>
<a href = "https://github.com/j-p-s-o/blitz-blog">Github</a>
</footer>
	<style jsx>{`
      .container {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
      footer a:hover{
        color: #45009d

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
        font-family: "Libre Franklin", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
      }
    `}</style>
    </div>
}
