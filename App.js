import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import PostContainer from './PostContainer';
import PhotoViewer from './PhotoViewer';
import * as SplashScreen from 'expo-splash-screen';

const image1 = require('./assets/chichen.png');
const image2 = require('./assets/colosseum.png');
const image3 = require('./assets/machu.png');
const image4 = require('./assets/petra.png');
const image5 = require('./assets/redeemer.png')
const image6 = require('./assets/taj.png');
const image7 = require('./assets/wall.png');


const timeline = [
  { title: 'Chichen', image: image1 },
  { title: 'The Colusseum', image: image2 },
  { title: 'Machu', image:  image3 },
  { title: 'Petra', image: image4 },
  {title:'Redeemer', image: image5},
  {title:'The Taj Mahal', image: image6},
  {title:'The Great Wall of China', image: image7},
];

export default class App extends Component {
  
  
  state = {
    selected: null,
    position: null,
  };

  showImage = (selected, position) => {
    this.setState({
      selected,
      position,
    });
  }

  closeViewer = () => {
    this.setState({
      selected: null,
      position: null,
    });
  }

  renderViewer() {
    const { selected, position } = this.state;

    if (selected) {
      return (
        <PhotoViewer
          post={selected}
          position={position}
          onClose={this.closeViewer}
        />
      );
    }
  }

  render() {
    SplashScreen.preventAutoHideAsync();
    setTimeout(SplashScreen.hideAsync, 2000);
    return (
      <SafeAreaView style={styles.main}>
        <Text style={styles.toolbar}>Timeline</Text>
        <ScrollView style={styles.content}>
        {
          timeline.map((post, index) =>
            <PostContainer key={index} post={post}
            onPress={this.showImage} />
          )
        }
        </ScrollView>
        {this.renderViewer()}
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ecf0f1',
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#2c3e50',
    color: '#fff',
    fontSize: 22,
    padding: 20,
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
});