import { router } from 'expo-router';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { BOOKS } from '../../data/books';

export default function LibraryScreen() {
  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.content}
      data={BOOKS}
      keyExtractor={(book) => book.id}
      renderItem={({ item: book }) => (
        <Pressable
          style={styles.row}
          // Send the book ID; the details screen looks the book up by it.
          onPress={() => router.push({ pathname: '/details/[id]', params: { id: book.id } })}
        >
          <View>
            <Text style={styles.title}>{book.title}</Text>
            <Text style={styles.author}>{book.author}</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: { backgroundColor: '#fafafa' },
  content: { padding: 16, gap: 10 },
  row: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  title: { fontSize: 17, fontWeight: '700', color: '#111827' },
  author: { fontSize: 14, color: '#6b7280', marginTop: 2 },
  chevron: { fontSize: 24, color: '#9ca3af' },
});