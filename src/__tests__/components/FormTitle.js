import renderer from 'react-test-renderer';
import FormTitle from '../../components/FormTitle';

describe('FormTitle component', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<FormTitle title="Home" />);
    expect(tree).toMatchSnapshot();
  });
});
