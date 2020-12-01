import React, { useEffect, useState } from "react";
import { ScrollView, Text, StyleSheet, StatusBar } from "react-native";

import api from './services/api';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response.data);
      setProjects(response.data);
    });
  }, []);

  return (<>
    <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
    <ScrollView style={styles.container}>
      {projects.map(project =>
      <Text style={styles.title} key={projects.id}>
        {project.title}
      </Text>)}
    </ScrollView>
  </>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },

  title: {
    color: '#fff',
    fontSize: 120,
    fontWeight: 'bold',
  }
});