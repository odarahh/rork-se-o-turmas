import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, Sun, Moon, Menu, Heart, BookOpen, FileText, Users } from 'lucide-react-native';
import { useTheme } from '@/context/ThemeContext';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const router = useRouter();
  const { toggleTheme, isDark } = useTheme();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={[styles.header, { backgroundColor: isDark ? '#000000' : '#FFFFFF' }]}>
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => router.back()}
        testID="back-button"
      >
        <ArrowLeft color={isDark ? '#FFFFFF' : '#000000'} size={24} />
      </TouchableOpacity>
      
      <Text style={[styles.title, { color: isDark ? '#FFFFFF' : '#000000' }]}>{title}</Text>
      
      <View style={styles.rightButtons}>
        <TouchableOpacity 
          style={styles.themeButton} 
          onPress={toggleTheme}
          testID="theme-toggle"
        >
          {isDark ? (
            <Moon color="#FFFFFF" size={24} />
          ) : (
            <Sun color="#000000" size={24} />
          )}
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.menuButton} 
          testID="menu-button"
          onPress={() => setMenuVisible(true)}
        >
          <Menu color={isDark ? '#FFFFFF' : '#000000'} size={24} />
        </TouchableOpacity>
      </View>

      <Modal
        transparent
        visible={menuVisible}
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setMenuVisible(false)}
        >
          <View style={styles.menuDropdownContainer}>
            <View style={[styles.menuDropdown, { backgroundColor: isDark ? '#1F1F1F' : '#FFFFFF' }]}>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  setMenuVisible(false);
                  console.log('Favoritos clicked');
                }}
              >
                <Heart color={isDark ? '#FFFFFF' : '#000000'} size={20} />
                <Text style={[styles.menuItemText, { color: isDark ? '#FFFFFF' : '#000000' }]}>
                  Favoritos
                </Text>
              </TouchableOpacity>

              <View style={[styles.menuDivider, { backgroundColor: isDark ? '#333333' : '#E5E5E5' }]} />

              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  setMenuVisible(false);
                  router.push('/');
                }}
              >
                <BookOpen color={isDark ? '#FFFFFF' : '#000000'} size={20} />
                <Text style={[styles.menuItemText, { color: isDark ? '#FFFFFF' : '#000000' }]}>
                  Conteúdos
                </Text>
              </TouchableOpacity>

              <View style={[styles.menuDivider, { backgroundColor: isDark ? '#333333' : '#E5E5E5' }]} />

              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  setMenuVisible(false);
                  console.log('Anotações clicked');
                }}
              >
                <FileText color={isDark ? '#FFFFFF' : '#000000'} size={20} />
                <Text style={[styles.menuItemText, { color: isDark ? '#FFFFFF' : '#000000' }]}>
                  Anotações
                </Text>
              </TouchableOpacity>

              <View style={[styles.menuDivider, { backgroundColor: isDark ? '#333333' : '#E5E5E5' }]} />

              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  setMenuVisible(false);
                  router.push('/turmas');
                }}
              >
                <Users color={isDark ? '#FFFFFF' : '#000000'} size={20} />
                <Text style={[styles.menuItemText, { color: isDark ? '#FFFFFF' : '#000000' }]}>
                  Turmas
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  rightButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  themeButton: {
    padding: 8,
    marginRight: 8,
  },
  menuButton: {
    padding: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  menuDropdownContainer: {
    position: 'absolute',
    top: 60,
    right: 16,
    minWidth: 180,
  },
  menuDropdown: {
    borderRadius: 12,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  menuItemText: {
    fontSize: 16,
    marginLeft: 12,
    fontWeight: '500',
  },
  menuDivider: {
    height: 1,
    marginHorizontal: 16,
  },
});

export default Header;