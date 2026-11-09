import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { BOOKS } from '../../data/books';

export default function HomeScreen() {
  const featured = BOOKS[0];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Book Tracker</Text>
      <Text style={styles.sub}>Pick up where you left off.</Text>

      <Pressable
        style={styles.card}
        // Pass only the stable ID, not the whole book object.
        onPress={() => router.push({ pathname: '/details/[id]', params: { id: featured.id } })}
      >
        <Text style={styles.cardLabel}>FEATURED</Text>
        <Text style={styles.cardTitle}>{featured.title}</Text>
        <Text style={styles.cardAuthor}>{featured.author}</Text>
      </Pressable>

      <Pressable style={styles.link} onPress={() => router.push('/library')}>
        <Text style={styles.linkText}>Browse the full library →</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 72, backgroundColor: '#fafafa' },
  heading: { fontSize: 32, fontWeight: '800', color: '#111827' },
  sub: { fontSize: 16, color: '#6b7280', marginTop: 4, marginBottom: 24 },
  card: { backgroundColor: '#4f46e5', borderRadius: 16, padding: 20 },
  cardLabel: { color: '#c7d2fe', fontSize: 12, fontWeight: '700', letterSpacing: 1 },
  cardTitle: { color: '#fff', fontSize: 26, fontWeight: '800', marginTop: 8 },
  cardAuthor: { color: '#e0e7ff', fontSize: 15, marginTop: 2 },
  link: { marginTop: 24 },
  linkText: { color: '#4f46e5', fontSize: 16, fontWeight: '600' },
});