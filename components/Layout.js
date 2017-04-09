export default ({ children }) => (
  <div>
    <style jsx global>{`
      html, body {
        padding: 0;
        border: 0;
        margin: 0;
        background: #202020;
      }
    `}</style>
    {children}
  </div>
)
