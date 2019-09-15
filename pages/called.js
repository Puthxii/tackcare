  /*Screen to view all the user*/
  import React from 'react';
  import { FlatList, StyleSheet, View } from 'react-native';
  import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';

  import { openDatabase } from 'react-native-sqlite-storage';
  
  var db = openDatabase({ name: 'tc_db.db' }); 
  export default class called extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        FlatListItems: [],
      };
      db.transaction(tx => {
        tx.executeSql('SELECT * FROM book', [], (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i) {
            temp.push(results.rows.item(i));
          }
  
          this.setState({
            FlatListItems: temp,
          });
        });
      }, function(err) {
        alert('Open database ERROR: ' + JSON.stringify(err));
      });
    }
    ListViewItemSeparator = () => {
      return (
        <View style={{ height: 0.2, width: '100%', backgroundColor: 'ffffff' }} />
      );
    };
    render() {
      return (
        <Container>
          <FlatList
            data={this.state.FlatListItems}
            ItemSeparatorComponent={this.ListViewItemSeparator}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View key={item.user_id} style={{ backgroundColor: '#E4E9EC', padding: 20 }}>
                <Text>Id: {item.book_id}</Text>
                <Text>Service: {item.book_ser}</Text>
                <Text>Car: {item.book_car}</Text>
                <Text>Start: {item.book_start}</Text>
                <Text>End: {item.book_end}</Text>
              </View>
            )}
          />

          <Content />
          <Footer>
          <FooterTab style = {{ backgroundColor: '#574344'}}>
            <Button vertical onPress={() => this.props.navigation.navigate('HomeScreen')}>
              {/* <Badge><Text>2</Text></Badge> */}
              <Icon  name="home" />
              <Text>home</Text>
            </Button>
            <Button active vertical  style={styles.active} onPress={() => this.props.navigation.navigate('called')}>
              <Icon active name="time" />
              <Text>histoy</Text>
            </Button>
            <Button badge vertical onPress={() => this.props.navigation.navigate('Booked')}>
              <Badge ><Text>2</Text></Badge>
              <Icon name="book" />
              <Text>book</Text>
            </Button>
            <Button vertical>
              <Icon name="person" onPress={() => this.props.navigation.navigate('Profile')}/>
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
        </Container>
      );
    }
  }

  const styles = StyleSheet.create({
  active: {
      backgroundColor: '#B39C8E',
    }
  })

