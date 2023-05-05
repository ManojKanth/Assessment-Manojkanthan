import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Colors} from '../config/Colors';

type SearchBarProps = {
  onSearch: (username: string) => void;
};

const SearchBar = ({onSearch}: SearchBarProps) => {
  const [username, setUsername] = useState('');

  const handleSearch = () => {
    onSearch(username);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search user by username"
        value={username}
        onChangeText={text => setUsername(text)}
        onSubmitEditing={handleSearch}
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 50,
    width: '100%',
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  searchButton: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginLeft: 10,
  },
  searchButtonText: {
    color: Colors.blue,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SearchBar;
