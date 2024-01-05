import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, FlatList, TextInput} from 'react-native';
// import contacts from '../../../assets/data/contactDetails.json';
// import dummyContacts from '../../../assets/data/contactDetails.json';

const contacts = [
  {
    user_id: '1',
    user_name: 'user1',
    user_display_name: 'User 1',
  },
  {
    user_id: '2',
    user_name: 'user2',
    user_display_name: 'User 2',
  },
  {
    user_id: '3',
    user_name: 'elonmusk',
    user_display_name: 'Elon Musk',
  },
  {
    user_id: '4',
    user_name: 'jobs',
    user_display_name: 'Steve Jobs',
  },
  {
    user_id: '5',
    user_name: 'joe',
    user_display_name: 'Joe',
  },
  {
    user_id: '6',
    user_name: 'peter',
    user_display_name: 'Peter',
  },
  {
    user_id: '7',
    user_name: 'lilnas',
    user_display_name: 'Lil Nas',
  },
  {
    user_id: '8',
    user_name: 'Lukas',
    user_display_name: 'Lukas',
  },
  {
    user_id: '9',
    user_name: 'Yuri',
    user_display_name: 'Yuri Gagarin',
  },
  {
    user_id: '10',
    user_name: 'David',
    user_display_name: 'David Dobrik',
  },
  {
    user_id: '11',
    user_name: 'Logan',
    user_display_name: 'Logan Paul',
  },
];

const ContactScreens = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContacts, setFilteredContacts] = useState('');

  useEffect(() => {
    const newContacts = contacts.filter(contact =>
      contact.user_display_name
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase()),
    );
    setFilteredContacts(newContacts);
  }, [searchTerm]);

  return (
    <View style={styles.container}>
      <TextInput
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Search..."
        style={styles.searchInput}
      />
      <FlatList
        data={filteredContacts}
        renderItem={({item}) => (
          <Text style={styles.textItem}>{item.user_display_name}</Text>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  textItem: {
    fontSize: 16,
    marginVertical: 15,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#f0f0f0',
  },
  searchInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    borderRadius: 5,
    color: '#fff',
  },
});

export default ContactScreens;
