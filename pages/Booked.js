  /*Screen to view all the user*/
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'tc_db.db' }); 
export default class Booked extends React.Component {
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
      <View style={{ height: 0.2, width: '100%', backgroundColor: '#808080' }} />
    );
  };
  render() {
    return (
      <View>
        <FlatList
          data={this.state.FlatListItems}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View key={item.user_id} style={{ backgroundColor: '#D7BDE2', padding: 20 }}>
              <Text>Id: {item.book_id}</Text>
              <Text>Service: {item.book_ser}</Text>
              <Text>Car: {item.book_car}</Text>
              <Text>Start: {item.book_start}</Text>
              <Text>End: {item.book_end}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}