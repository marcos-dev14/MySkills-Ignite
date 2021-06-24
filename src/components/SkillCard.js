import React from 'react';
import { 
    TouchableOpacity,
    Text,
    StyleSheet,

} from 'react-native';

export function SkillCard({ skill }) {
    return (
        <TouchableOpacity style={styles.buttonSkills}>
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