// import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';

import { connect } from 'react-redux';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

function UserMenu({ avatar, name, onLogout }) {
  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Добро пожаловать, {name}</span>
      <button type="button" onClick={onLogout}>
        Выйти
      </button>
    </div>
  );
}
const mapStateToProps = state => ({
  avatar: defaultAvatar,
  name: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
