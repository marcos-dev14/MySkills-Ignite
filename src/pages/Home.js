import React, { useState } from 'react';

import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Platform,
  FlatList,
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  // Criando uma função para adicionar novas Skills
  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Marcos Paulo</Text>

      <TextInput 
        style={styles.input}
        placeholder="New Skills"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginVertical: 50 }]}>
        New Skills
      </Text>

      <FlatList 
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <SkillCard skill={item} />
        )}
      />
    </View>
  );
}

// Com o StyleSheet, pordemos deixar a estilização do component mais organizado

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10, // para dar o valor diferente para cada sistemas 'IOS' e 'ANDROID'
    marginTop: 30,
    borderRadius: 10,
  },
  
})