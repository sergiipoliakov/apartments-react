import PropTypes from 'prop-types';
import s from './Painting.module.css';

import defaultImage from './default.jpg';

const Painting = ({
  imageUrl = defaultImage,
  title,
  profileUrl,
  author = 'не известно',
  price,
  quantiy,
}) => {
  return (
    <div className={s.container}>
      <img src={imageUrl} alt={title} width="480" />
      <h2></h2>
      <p>
        Автор: <a href={profileUrl}>{author}</a>
      </p>
      <p>Цена:{price} кредитов</p>
      <p>Доступность:{quantiy < 10 ? 'заканчивается' : ' есть в наличии'}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
};

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantiy: PropTypes.number.isRequired,
};

export default Painting;
