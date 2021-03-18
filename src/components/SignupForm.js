import { useState } from 'react';
const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
  },
};

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPasswor] = useState('');

  const handleEmail = evt => {
    setEmail(evt.target.value);
  };
  const handlePassword = evt => {
    setPasswor(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    console.log(email, password);
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <label style={styles.label}>
        <span>Email</span>
        <input type="email" name="email" onChange={handleEmail} value={email} />
      </label>

      <label style={styles.label}>
        <span>Password</span>
        <input
          type="password"
          name="password"
          onChange={handlePassword}
          value={password}
        />
      </label>

      <button type="submit">Sign up</button>
    </form>
  );
}

// export default class SignupForm extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = evt => {
//     const { name, value } = evt.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <form style={styles.form}>
//         <label style={styles.label}>
//           <span>Email</span>
//           <input
//             type="email"
//             name="email"
//             onChange={this.handleChange}
//             value={this.state.email}
//           />
//         </label>

//         <label style={styles.label}>
//           <span>Password</span>
//           <input
//             type="password"
//             name="password"
//             onChange={this.handleChange}
//             value={this.state.password}
//           />
//         </label>

//         <button type="submit">Sign up</button>
//       </form>
//     );
//   }
// }
