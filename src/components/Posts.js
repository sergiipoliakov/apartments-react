// import withLog from './hoc/withLog';
import withToggle from './hoc/withToggle';

const Posts = props => <h1>в моих пропсах будут data , loading error</h1>;

// export default withToggle('https://jsonplaceholder.typicode.com/todos')(Posts);
export default withToggle(Posts);
