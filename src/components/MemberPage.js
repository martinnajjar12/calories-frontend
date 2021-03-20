import React from 'react';
import Header from './Header';
import MemberPageContent from './MemberPageContent';
import NavigationBar from './NavigationBar';
import carbohydrates from '../assets/images/carbohydrates.cms';
import proteins from '../assets/images/proteins.png';
import fats from '../assets/images/fats.jpg';
import commonStyles from '../utils/commonStyles';

const carbInfo = 'Carbohydrates are found in a wide array of both healthy and unhealthy foods—bread, beans, milk, popcorn, potatoes, cookies, spaghetti, soft drinks, corn, and cherry pie. They also come in a variety of forms. The most common and abundant forms are sugars, fibers, and starches.';
const proteinsInfo = 'You can get Proteins from lean meats (such as beef and lamb) and also from the poultry (such as chicken and ducks). Fish and seafood also contain a good amount of Protein as well as dairy products like milk, yoghurt, cheese... etc. Legumes and nuts also contain Protein.';
const fatsInfo = 'Fats can be found in different kinds of food such as Avocado, cheese and dark chocolate. Eggs and fatty fish also contain Fats. You can have fats also in coconuts and full fat yoghurt.';

const MemberPage = () => {
  const commonClasses = commonStyles();
  return (
    <div className={commonClasses.bottomMargin70}>
      <Header title="Add Meal" />
      <MemberPageContent name="Carbohydrates" image={carbohydrates} info={carbInfo} />
      <MemberPageContent name="Proteins" image={proteins} info={proteinsInfo} />
      <MemberPageContent name="Fats" image={fats} info={fatsInfo} />
      <NavigationBar />
    </div>
  );
};

export default MemberPage;
