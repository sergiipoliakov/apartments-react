// import { compose } from 'recompose';
// import withLog from './hoc/withLog';

// import withHigherOrderComponent from './hoc/withHigherOrderComponent';
// import withToggle from './hoc/withToggle';

const MyComponent = props => <p>{JSON.stringify(props, null, 2)}</p>;

// export default withToggle(withLog(withHigherOrderComponent(MyComponent)));
// export default compose(
//   withToggle,
//   withLog,
//   withHigherOrderComponent,
// )(MyComponent);

export default MyComponent;
