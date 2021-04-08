import renderer from 'react-test-renderer';
import LoginForm from '../../components/LoginForm';

describe('LoginForm component', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<LoginForm
      state={{}}
      submitHandler={() => ({})}
      changeHandler={() => ({})}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
