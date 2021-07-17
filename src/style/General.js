import {StyleSheet} from 'react-native';

const General = StyleSheet.create({
  Container: {flex: 1, justifyContent: 'center'},
  TextSmaller: {fontSize: 10},
  TextSmall: {fontSize: 12},
  TextMedium: {fontSize: 15},
  TextLarge: {fontSize: 20},
  TextLarger: {fontSize: 25},
  Bold: {fontWeight: 'bold'},
  Inline: {flexDirection: 'row', flexWrap: 'wrap'},
  AlignCenter: {flex: 1, alignItems: 'center'},
  AlignLeft: {flex: 1, alignItems: 'center'},
  AlignRight: {flex: 1, alignItems: 'center'},
  Pad: {padding: 20},
  TextIn: {
    borderWidth: 0.5,
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 2,
    width: 300,
    marginBottom: 20,
  },
});

export default General;
