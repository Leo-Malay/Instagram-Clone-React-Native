import React from 'react';
import {View, Text} from 'react-native';
// Style
import General from '../../style/General';

const Comment = ({props}) => {
  const comment_list = props.comments;
  return (
    <View>
      {comment_list.map((ele, i) => {
        return (
          <Text style={General.TextSmall} key={i}>
            <Text style={General.Bold}>{ele.name}</Text>
            {'\t'}
            {ele.comment}
          </Text>
        );
      })}
    </View>
  );
};

export default Comment;
