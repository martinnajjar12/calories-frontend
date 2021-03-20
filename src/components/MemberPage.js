import React from 'react';
import Header from './Header';
import MemberPageContent from './MemberPageContent';
import NavigationBar from './NavigationBar';
import carbohydrates from '../assets/images/carbohydrates.cms';
import commonStyles from '../utils/commonStyles';

const carbInfo = 'Carbohydrates are found in a wide array of both healthy and unhealthy foods—bread, beans, milk, popcorn, potatoes, cookies, spaghetti, soft drinks, corn, and cherry pie. They also come in a variety of forms. The most common and abundant forms are sugars, fibers, and starches.';
const proteinsInfo = 'Proteins are found';
const fatsInfo = 'Fats are found';

const MemberPage = () => {
  const commonClasses = commonStyles();
  return (
    <div className={commonClasses.bottomMargin70}>
      <Header title="Add Meal" />
      <MemberPageContent name="Carbohydrates" image={carbohydrates} info={carbInfo} />
      <MemberPageContent name="Proteins" image={carbohydrates} info={proteinsInfo} />
      <MemberPageContent name="Fats" image={carbohydrates} info={fatsInfo} />
      <NavigationBar />
    </div>
  );
};

export default MemberPage;
