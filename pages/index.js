import Header from '../components/Header'
import MainStyles from '../styles/main'

export default () => (
  <div className="container">
    <MainStyles />
    <style jsx>{`
      .container {
        position: fixed;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .container img {
        height: 250px;
      }
      ul li {
        list-style: none;
        display:inline;
        margin-left: 20px;
      }
    `}</style>
    <img src="/static/logo.png" alt="" />
    <ul>
      <li><a href="">Meetup</a></li>
      <li><a href="">Youtube</a></li>
    </ul>
  </div>
)
