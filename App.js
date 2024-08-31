/*import React from 'react';
import {View, StyleSheet} from 'react-native';

const App = () =>{
  return(
    <>
<View style={styles.contenedor}>
  <View style={styles.caja1}></View>
  <View style={styles.caja2}></View>
  <View style={styles.caja3}></View>
  <View style={styles.caja4}></View>
</View>
</>
  );
};
const styles = StyleSheet.create({
  contenedor:{
    backgroundColor:'cornflowerblue',
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems:'flex-end'
  },
  caja1:{
    padding:20,
    flex:1,
    backgroundColor:'navy'
  },
  caja2:{
    padding:20,
    flex:1,
    backgroundColor:'yellow'
  },
  caja3:{
    padding:20,
    flex:1,
    backgroundColor:'green'
  },
  caja4:{
    padding:20,
    flex:1,
    backgroundColor:'teal'
  },

});

export default App;*/
//Parte 2
import React, { useState } from 'react';
import {View, StyleSheet, Image, Text, ScrollView, Modal, Button, TouchableHighlight} from 'react-native';

const App = () =>{
  const {modalVisibleplaya, setModalVisibleplaya}= useState(false);
  return(
    <>
    <ScrollView>
    <Modal
  transparent={true}
  animationType="slide"
  visible={modalVisibleplaya}
  onRequestClose={() => {
    alert('Modal has been closed.');
  }}
>
  <View style={styles.vistaModal}>
    <View style={styles.Modal}>
      <Text style={styles.subtitulo}>Ir a la playa</Text>
      <Text>El Salvador cuenta con hermosas playas a nivel Centroamérica.</Text>
      <Button
        title="Cerrar"
        onPress={() => setModalVisibleplaya(!modalVisibleplaya)}
      />
    </View>
  </View>
</Modal>
    <View style={{ flexDirection: 'row' }}>
  <Image style={styles.banner} source={require('./src/img/bg.jpg')} />
  </View>
  </ScrollView> 
  <View style={styles.contenedor}>
    <Text style={styles.titulo}>Que hacer en El Salvador</Text>
    <ScrollView horizontal>
      <View>
      <TouchableHighlight
  onPress={() => setModalVisibleplaya(!modalVisibleplaya)}
>
  <Image
    style={styles.ciudad}
    source={require('./src/img/actividad1.jpg')}
  />
</TouchableHighlight>
      </View>
      <View>
        <Image style={styles.ciudad} source={require('./src/img/actividad2.jpg')} />
      </View>
      <View>
        <Image style={styles.ciudad} source={require('./src/img/actividad3.jpg')} />
      </View>
      <View>
        <Image style={styles.ciudad} source={require('./src/img/actividad4.jpg')} />
      </View>
      <View>
        <Image style={styles.ciudad} source={require('./src/img/actividad5.jpg')} />
      </View>
    </ScrollView>
  </View>
  <Text style={styles.titulo}>Platillos Salvadoreños</Text>
<View>
  <View>
    <Image style={styles.mejores} source={require('./src/img/mejores1.jpg')} />
  </View>
  <View>
    <Image style={styles.mejores} source={require('./src/img/mejores2.jpg')} />
  </View>
  <View>
    <Image style={styles.mejores} source={require('./src/img/mejores3.jpg')} />
  </View>
</View>
<Text style={styles.titulo}>Rutas Turísticas</Text>
<View style={styles.listado}>
  <View style={styles.listaItem}>
    <Image style={styles.mejores} source={require('./src/img/ruta1.jpg')} />
  </View>
  <View style={styles.listaItem}>
    <Image style={styles.mejores} source={require('./src/img/ruta2.jpg')} />
  </View>
  <View style={styles.listaItem}>
    <Image style={styles.mejores} source={require('./src/img/ruta3.jpg')} />
  </View>
  <View style={styles.listaItem}>
    <Image style={styles.mejores} source={require('./src/img/ruta4.jpg')} />
  </View>
</View>
</>
  );
};
const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10
  },
  contenedor: {
    marginHorizontal: 10
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5
  },
  listaItem:{
    flexBasis: '49%'
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  vistaModal: {
    backgroundColor: '#000000aa', 
    flex: 1,
  },
  
  Modal: {
    backgroundColor: '#fff', 
    margin: 50,
    padding: 40, 
    borderRadius: 10, 
    flex: 1, 
  },
  
  subtitulo: {
    fontWeight: 'bold', 
    fontSize: 14, 
    justifyContent: 'center', 
  },
  
});

export default App;