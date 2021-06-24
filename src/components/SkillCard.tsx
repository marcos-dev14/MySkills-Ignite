import React from 'react';
import { 
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
  Platform

} from 'react-native';

interface SkillProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({ skill, ...rest }: SkillProps) {
  return (
    <TouchableOpacity 
      style={styles.buttonSkills}
      {...rest}  
    >
      <Text style={styles.textSkills}>
        {skill}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkills: {
    backgroundColor: '#1F1E25',
    padding: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkills: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  }
})