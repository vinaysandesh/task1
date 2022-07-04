import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {useRecoilState} from 'recoil';
import Header from '../../components/Header';
import {loggedInUserType} from '../../recoil/store';


const HomeTab = props => { 
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(null);

  const [userType, setText] = useRecoilState(loggedInUserType);

  useEffect(() => { 
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(results => results.json())
      .then(data => {
        setData(data);
      });
  }, []);
  const openAccordion = item => { 
    if(item.index == index ) {
        setIndex(null)
    }
    else{setIndex(item.index);}
  };
  const renderUsers = item => {
    return (
     <>
      <TouchableOpacity
        onPress={() => {
            openAccordion(item);
        }}
        style={styles.itemContainer}>
        <Text style={{color: "#121212"}}> {userType=="supervisor"? item.item.username : item.item.company.name} </Text>
      </TouchableOpacity>
      {index == item.index &&(
        <View style={{margin:8}}>
        {userType=="supervisor"? renderIndividualUser(): renderIndividualCompany()}
        </View>
      )}
     </>
    );
  };
  const renderIndividualUser = () => { 
    let address_object = data[index].address;
    let geo = address_object.geo;
    delete address_object.geo;
    const address = Object.values(data[index].address).join(',');
    return (
      <View>
        <Text style={styles.textColor}>
          <Text style={styles.labelTextStyle}>Name :</Text> {data[index].name}
        </Text>
        <Text style={styles.textColor}>
          <Text style={styles.labelTextStyle}>Username :</Text>{' '}
          {data[index].username}
        </Text>
        <Text style={styles.textColor}>
          <Text style={styles.labelTextStyle}>Email :</Text> {data[index].email}
        </Text>
        <Text style={styles.textColor}>
          <Text style={styles.labelTextStyle}>Address :</Text>: {address}
        </Text> 
        <Text style={styles.textColor}>
          <Text style={styles.labelTextStyle}>Phone :</Text>: {data[index].phone}
        </Text>
        <Text style={styles.textColor}>
          <Text style={styles.labelTextStyle}>Address :</Text>: {data[index].website}
        </Text>
      </View>
    );
  };
  const renderIndividualCompany = () => {
    return (
      <View>
        <Text style={styles.textColor}>
          <Text style={styles.labelTextStyle}>Name :</Text> {data[index].company.name}
        </Text>
        <Text style={styles.textColor}>
          <Text style={styles.labelTextStyle}>Catch Phrase :</Text>{' '}
          {data[index].company.catchPhrase}
        </Text>
        <Text style={styles.textColor}>
          <Text style={styles.labelTextStyle}>BS :</Text> {data[index].company.bs}
        </Text>
        
      </View>
    );
  };
  return (
    <View>
      <Header title={props.route.name} />
      <Text>Home Tab</Text>
      {data.length > 0 ? (
        <>
          <FlatList data={data} renderItem={renderUsers} />
          
        </>
      ) : (
        <ActivityIndicator size="large" />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#fff',
    elevation: 2,
    borderRadius: 8,
    padding: 24,
    margin: 8,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modalItemCard: {
    margin: 8,
    padding: 24,
    elevation: 2,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  labelTextStyle: {
    fontWeight: 'bold',
    color: '#121212',
  },
  textColor:{color:'#121212'}
});
export default HomeTab;
