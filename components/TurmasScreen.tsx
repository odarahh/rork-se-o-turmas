import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import Header from './Header';
import TurmasCard from './TurmasCard';
import { turmasData } from '@/mocks/turmasData';

const TurmasScreen: React.FC = () => {
  const { isDark } = useTheme();

  const handleCertificatePress = (contentId: string) => {
    console.log(`Emitting certificate for content: ${contentId}`);
  };

  const handleStartPress = (contentId: string) => {
    console.log(`Starting content: ${contentId}`);
  };

  const handleContinuePress = (contentId: string) => {
    console.log(`Continuing content: ${contentId}`);
  };

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#000000' : '#FFFFFF' }]}>
      <Header title="Turmas" />
      
      <FlatList
        data={turmasData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TurmasCard
            turma={item}
            onCertificatePress={handleCertificatePress}
            onStartPress={handleStartPress}
            onContinuePress={handleContinuePress}
          />
        )}
        testID="turmas-list"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
});

export default TurmasScreen;
