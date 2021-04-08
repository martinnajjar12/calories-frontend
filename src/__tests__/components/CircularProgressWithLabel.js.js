import renderer from 'react-test-renderer';
import CircularProgressWithLabel from '../../components/CircularProgressWithLabel';

describe('CircularProgressWithLabel', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<CircularProgressWithLabel />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
