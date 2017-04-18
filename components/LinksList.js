export default () => (
  <ul>
    <li><a target="_blank" href="//meetup.com/es-ES/graphql-ba/">🍻 ME</a></li>
    <li><a target="_blank" href="//github.com/graphqlba">🐙 GH</a></li>
    <li><a target="_blank" href="//www.youtube.com/channel/UC2V4oFVunyLf89DFj7YBNYg">📹 YT</a></li>
    <style jsx>{`
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        justify-content:center;
        align-items: center;
      }
      li:not(:last-child) {
        margin-right: 2em;
      }
      a {
        font-family: monospace;
        color: #ddd;
        font-size: 1.3em;
        text-decoration: none;
        transition: all 0.3s ease-out;
        line-height: 50px;
      }
      a:hover {
        font-size: 1.5em;
        position: relative;
        color: #d62d81;
      }
    `}</style>
  </ul>
)
