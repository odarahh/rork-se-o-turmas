import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ChevronDown, ChevronUp, Award } from 'lucide-react-native';
import { useTheme } from '@/context/ThemeContext';
import ProgressBar from './ProgressBar';
import { TurmaData } from '@/mocks/turmasData';

interface TurmasCardProps {
  turma: TurmaData;
  onCertificatePress: (contentId: string) => void;
  onStartPress: (contentId: string) => void;
  onContinuePress: (contentId: string) => void;
}

const TurmasCard: React.FC<TurmasCardProps> = ({ turma, onCertificatePress, onStartPress, onContinuePress }) => {
  const { isDark } = useTheme();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <View style={[styles.card, { backgroundColor: isDark ? '#121212' : '#F5F5F5' }]} testID="turmas-card">
      <TouchableOpacity 
        onPress={() => setIsExpanded(!isExpanded)}
        activeOpacity={0.7}
        style={styles.headerContainer}
      >
        <View style={styles.headerContent}>
          <Text style={[styles.title, { color: isDark ? '#FFFFFF' : '#000000' }]} numberOfLines={2}>
            {turma.name}
          </Text>
          {isExpanded ? (
            <ChevronUp color={isDark ? '#FFFFFF' : '#000000'} size={24} />
          ) : (
            <ChevronDown color={isDark ? '#FFFFFF' : '#000000'} size={24} />
          )}
        </View>
      </TouchableOpacity>

      {isExpanded && (
        <View style={styles.dropdownContent}>
          {turma.contents.map((content, index) => (
            <View key={content.id}>
              <View style={styles.contentItem}>
                <View style={styles.contentInfo}>
                  <Text style={[styles.contentName, { color: isDark ? '#DDDDDD' : '#333333' }]}>
                    {content.name}
                  </Text>
                  <Text style={[styles.contentProgress, { color: '#EC4899' }]}>
                    {content.progress}%
                  </Text>
                </View>
                <View style={styles.contentProgressBar}>
                  <ProgressBar 
                    current={content.progress} 
                    total={100} 
                    color="#EC4899"
                  />
                </View>
                {content.progress === 100 ? (
                  <TouchableOpacity 
                    style={[styles.contentActionButton, { backgroundColor: isDark ? '#2A2A2A' : '#E5E5E5' }]} 
                    onPress={() => onCertificatePress(content.id)}
                    activeOpacity={0.7}
                    testID={`content-certificate-button-${content.id}`}
                  >
                    <View style={styles.certificateButtonContent}>
                      <Award color={isDark ? '#FFFFFF' : '#000000'} size={14} />
                      <Text style={[styles.contentActionButtonText, { color: isDark ? '#FFFFFF' : '#000000' }]}>
                        Emitir certificado
                      </Text>
                    </View>
                  </TouchableOpacity>
                ) : content.progress === 0 ? (
                  <TouchableOpacity 
                    style={[styles.contentActionButton, { backgroundColor: isDark ? '#2A2A2A' : '#E5E5E5' }]} 
                    onPress={() => onStartPress(content.id)}
                    activeOpacity={0.7}
                    testID={`content-start-button-${content.id}`}
                  >
                    <Text style={[styles.contentActionButtonText, { color: isDark ? '#FFFFFF' : '#000000' }]}>
                      Iniciar
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity 
                    style={[styles.contentActionButton, { backgroundColor: isDark ? '#2A2A2A' : '#E5E5E5' }]} 
                    onPress={() => onContinuePress(content.id)}
                    activeOpacity={0.7}
                    testID={`content-continue-button-${content.id}`}
                  >
                    <Text style={[styles.contentActionButtonText, { color: isDark ? '#FFFFFF' : '#000000' }]}>
                      Continuar
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
              {index < turma.contents.length - 1 && (
                <View style={[styles.divider, { backgroundColor: isDark ? '#333333' : '#E5E5E5' }]} />
              )}
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  headerContainer: {
    marginBottom: 12,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 12,
  },
  dropdownContent: {
    marginBottom: 16,
  },
  contentItem: {
    paddingVertical: 8,
  },
  contentInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  contentName: {
    fontSize: 14,
    flex: 1,
    marginRight: 8,
  },
  contentProgress: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  contentProgressBar: {
    marginTop: 4,
    marginBottom: 8,
  },
  contentActionButton: {
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginTop: 4,
  },
  contentActionButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    marginVertical: 8,
  },
  actionButton: {
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 4,
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  certificateButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default TurmasCard;
