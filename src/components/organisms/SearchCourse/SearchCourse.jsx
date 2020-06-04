import React from 'react';
import InputIcon from '@UI/Molecules/InputIcon';
import Tab from '@UI/Atoms/Tab';
import Dropdown from '@UI/Molecules/Dropdown';
import { SearchCourseBox, Content, DropdownSection, TextFind, TabSection } from './styles';

const tabs = [{ name: 'Courses', active: true }, { name: 'Providers' }];
const City = [
  { label: 'Alabama', value: 'AL' },
  { label: 'Alaska ', value: 'AK' },
  { label: 'Arizona ', value: 'AZ' },
  { label: 'Arkansas ', value: 'AR' },
  { label: 'California ', value: 'CA' },
  { label: 'California ', value: 'CA' },
  { label: 'Colorado ', value: 'CO' },
  { label: 'Connecticut ', value: 'CT' },
  { label: 'Delaware ', value: 'DE' },
  { label: 'District of Columbia', value: 'DC' },
  { label: 'Florida', value: 'FL' },
  { label: 'Georgia', value: 'GA' },
  { label: 'Hawaii', value: 'HI' },
  { label: 'Idaho', value: 'ID' },
  { label: 'Illinois', value: 'IL' },
  { label: 'Indiana', value: 'IN' },
  { label: 'Iowa', value: 'IA' },
  { label: 'Kansas', value: 'KS' },
];
const Professions = [
  { label: 'Occupational Therapist', value: '249' },
  { label: 'Occupational Therapist Assistant ', value: '250' },
  { label: 'Veterinarian ', value: '4340' },
  { label: 'Veterinarian Technician ', value: '4342' },
];
export default function SearchCourse() {
  return (
    <SearchCourseBox>
      <Content>
        <DropdownSection>
          <div>
            <TextFind>Find CE for a</TextFind>
          </div>
          <div className="dropdown">
            <Dropdown value="Florida" size="big" options={City} />
          </div>
          <div className="dropdown">
            <Dropdown value="Medical" size="big" options={Professions} />
          </div>
        </DropdownSection>
        <div>
          <InputIcon placeholder="Search courses and providers" />
        </div>
        <TabSection>
          {tabs.map((tab) => (
            <Tab key={tab.name} {...tab} />
          ))}
        </TabSection>
      </Content>
    </SearchCourseBox>
  );
}
