import renderer from 'react-test-renderer';
import FoodKind from '../../components/FoodKind';

describe('FoodKind component', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<FoodKind name="carbohydrates" value={25} image="sdkfjshfau" />);
    expect(tree).toMatchSnapshot();
  });
});
