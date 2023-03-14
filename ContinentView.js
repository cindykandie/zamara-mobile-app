import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SOAP } from 'react-native-soap';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const ContinentView = () => {
  const [continents, setContinents] = useState([]);

  useEffect(() => {
    const request = {
      url: 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL',
      method: 'ListOfContinentsByName',
      soapAction: 'http://www.oorsprong.org/websamples.countryinfo/ListOfContinentsByName',
      params: {},
    };

    try {
      SOAP.request(request)
        .then((response) => {
          const continentList = response.ListOfContinentsByNameResult.tContinent.map((continent) => ({
            code: continent.sCode,
            name: continent.sName,
          }));
          setContinents(continentList);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <View style={styles.container}>
      {continents.map((continent) => (
        <Text style={styles.item} key={continent.code}>
          {continent.code} - {continent.name}
        </Text>
      ))}
    </View>
  );
};

export default ContinentView;
