import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Header from '../../components/Header';
import store from '../../store';

describe('Header component', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Header title="Home" />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
