import React, { useEffect, useState } from 'react';

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

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  const data = {
    id: String(new Date().getTime()),
    name: newSkill
  }

  // Criando uma função para adicionar novas Skills
  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, data]);
  }

  // Criando uma funcção para remover as Skills
  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ));
  }

  useEffect(() => {
    const currentHour = new Date().getHours(); // variável para guardar o horário atual

    // Condição if e else para mostrar a frase dependendo da hora
    if(currentHour < 12) {
      setGreeting('Good Morning');
    } else if(currentHour >= 12 && currentHour < 18) {
      setGreeting('Good Afternoon');
    }else{
      setGreeting('Good Night');
    }
  }, []);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Welcome, Marcos Paulo</Text>
      <Text style={styles.greetingText}>
        {greeting}
      </Text>

      <TextInput 
        style={styles.input}
        placeholder="New Skills"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button 
        onPress={handleAddNewSkill}
        title="Add Skill" 
      />

      <Text style={[styles.title, { marginVertical: 50 }]}>
        New Skills
      </Text>

      <FlatList 
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard 
            skill={item.name} 
            onPress={() => handleRemoveSkill(item.id)}
          />
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
  greetingText: {
    color: '#FFF',
    fontSize: 18,

  }
  
})