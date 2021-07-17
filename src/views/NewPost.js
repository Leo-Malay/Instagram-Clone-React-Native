import React, {Component} from 'react';
import {Alert, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
// Style
import General from '../style/General';
import {IonIcons} from '../component/sub/Icons';

class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      takingPic: false,
    };
  }
  takePicture = async () => {
    if (this.camera && !this.state.takingPic) {
      let options = {
        quality: 0.85,
        fixOrientation: true,
        forceUpOrientation: true,
      };

      this.setState({takingPic: true});

      try {
        const data = await this.camera.takePictureAsync(options);
        Alert.alert('Success', JSON.stringify(data));
      } catch (err) {
        Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
        return;
      } finally {
        this.setState({takingPic: false});
      }
    }
  };
  render() {
    return (
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        captureAudio={false}
        style={{flex: 1}}
        type={RNCamera.Constants.Type.back}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      />
    );
  }
}

const NewPost = () => {
  return (
    <View style={General.Container}>
      <Camera />
      <View
        style={{
          flex: 1,
          position: 'absolute',
          justifyContent: 'flex-end',
          bottom: 15,
          left: '41.5%',
          backgroundColor: 'white',
          paddingHorizontal: 15,
          paddingVertical: 10,
          borderRadius: 50,
        }}>
        <IonIcons props={{name: 'camera-outline', size: 50, color: '#000'}} />
      </View>
    </View>
  );
};
export default NewPost;
