import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  FlatList,
  Image,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import Header from '../components/Header';
import filter from 'lodash.filter';

const API_ENDPOINT = 'https://randomuser.me/api/?results=30';

const SearchScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [fullData, setFullData] = useState([]);

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setIsLoading(true);
    fetchData(API_ENDPOINT);
  }, []);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);

      // console.log(json.results);

      setFullData(json.results);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  

  const handleSearch = (queryText) => {
    setSearchQuery(queryText);
    const formattedQuery = queryText.toLowerCase();
    const filteredData = filter(fullData, (user) => {
      return contains(user, formattedQuery);
    });
    setData(filteredData);
  };

  const contains = ({ name, email }, query) => { 
    const { first, last } = name;
    if (
      first.includes(query) ||
      last.includes(query) ||
      email.includes(query)
    ) {
      return true;
    }

    return false;
  }

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={'large'} color="#5500dc" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Error in fetching data .... Please check your internet</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, top: 20 }}>
      <Header />
      <View style={{ marginHorizontal: 20, }}>
        <TextInput
          placeholder="Search"
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          style={styles.searchBox}
          value={searchQuery}
          onChangeText={(queryText) => handleSearch(queryText)}
        />

        <FlatList
          data={data}
          keyExtractor={(item) => item.login.username}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image
                source={{ uri: item.picture.thumbnail }}
                style={styles.image}
              />
              <View>
                <Text style={styles.textName}>
                  {item.name.first} {item.name.last}
                </Text>
                <Text style={styles.textEmail}>{item.email}</Text>
              </View>
            </View>
          )}
          style={{ marginTop: 10 ,marginBottom: 20}}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchBox: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textName: {
    fontWeight: '600',
    fontSize: 17,
    marginLeft: 18,
  },
  textEmail: {
    fontWeight: '400',
    fontSize: 14,
    color: '#666',
    marginLeft: 18,
  },
});
