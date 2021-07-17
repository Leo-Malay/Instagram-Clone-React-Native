import React from 'react';
import {ScrollView} from 'react-native';
import {AvatarName} from './sub/Avatar';
import {
  People_Angelina,
  People_Lily,
  People_Mike,
  People_Sofia,
  People_Malay,
} from '../assets/Images';
const Stories = ({props}) => {
  var story = Array(props.length || 5).fill(0);
  var n;
  const images = [
    People_Angelina,
    People_Lily,
    People_Mike,
    People_Sofia,
    People_Malay,
  ];
  const names = ['Angelina', 'Lily', 'Mike', 'Sofia', 'Malay'];
  return (
    <ScrollView horizontal>
      {story.map((ele, i) => {
        if (i > 4) {
          n = i - 4;
        } else {
          n = i;
        }
        return (
          <AvatarName
            props={{
              name: names[n],
              length: props.width || 60,
              image: images[n],
            }}
            key={i}
          />
        );
      })}
    </ScrollView>
  );
};

export default Stories;
