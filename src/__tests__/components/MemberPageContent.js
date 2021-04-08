import renderer from 'react-test-renderer';
import MemberPageContent from '../../components/MemberPageContent';

describe('MemberPageContent component', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<MemberPageContent
      name="Carbohydrates"
      image="fajdjf"
      info="Some text"
      value="25"
      changeHandler={() => ({})}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
