import {FlatList, Image, StyleSheet, Text, View, _View} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Portfolio = () => {
  const values = [
    {
      title: 'NIXET',
      desc: 'Nixet Pvt. Ltd.',
      price: '$8,1106',
      QTY: 'Qty.121',
    },
  ];

  return (
    <View style={styles.body}>
      <Text style={styles.portfolio_heading}>Portfolio</Text>
      <View style={styles.portfolio_hr} />
      <FlatList
        data={values}
        renderItem={el => (
          <View style={styles.portfolio_row}>
            <View style={styles.left}>
              <View
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: '#2e2e2e',
                  borderRadius: 50,
                  marginRight: 5,
                }}>
                <Image
                  style={{height: 30, width: 30, padding: 20}}
                  resizeMode={'contain'}
                  source={require('../../assets/iPhone 13/Vector.png')}
                />
              </View>

              <View>
                <Text style={styles.text_Bold}>{el.item.title}</Text>
                <Text style={styles.text_Light}>{el.item.desc}</Text>
              </View>
            </View>
            <View style={styles.right}>
              <Text style={styles.text_Bold}>{el.item.price}</Text>
              <Text style={styles.text_Light}>{el.item.QTY}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0A0FC9',
    padding: 20,
  },
  portfolio_heading: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  portfolio_hr: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    marginTop: 10,
  },
  portfolio_row: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  text_Bold: {fontWeight: '600'},
  text_Light: {
    color: '#B8B8B8',
  },
  left: {
    display: 'flex',
    flexDirection: 'row',
  },
});
export default Portfolio;
