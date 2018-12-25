import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import { Icon } from 'react-native-elements';
import { sharedStyles } from '../scripts/sharedStyles.js';
import ListGarmentsContainer from '../components/ListGarmentsContainer.js';

export default class GarmentsScreens extends Component {
  static navigationOptions = {
    title: 'Clothes',
  }

  navigateToGarmentNew()  {
    this.props.navigation.navigate('GarmentNewView');
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <ListGarmentsContainer />
        </ScrollView>
        <View style={sharedStyles.floatingButton.bottomRight}>
          <Icon
              raised
              name='plus'
              type='font-awesome'
              color='#f50'
              onPress={() => this.navigateToGarmentNew()} 
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});