import imagePath from '../assets/pusheen.jpg';
import { Link } from 'react-router-dom';

const styles = {
  container: { textAlign: 'center' },
  status: { fontSize: 96, marginBottom: 16 },
};

const NotFound = () => (
  <div style={styles.container}>
    <h1 style={styles.status}>404</h1>
    <img src={imagePath} alt="cat detective" width="320" />
    <p>
      Упс, кажется Вы потерялись. Вот <Link to="/">ссылка </Link>на главную
      страницу.
    </p>
  </div>
);
export default NotFound;
