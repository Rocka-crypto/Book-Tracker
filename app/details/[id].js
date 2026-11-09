import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import { fetchBook } from '../../data/books';

export default function BookDetailsScreen() {
  // Read the route param. The filename [id].js defines the param name "id".
  const { id } = useLocalSearchParams();

  // State: what is true right now on this screen.
  const [book, setBook] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [isReading, setIsReading] = useState(false);

  // Effect: load the matching book whenever the route ID changes.
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetchBook(id).then((found) => {
      if (!cancelled) {
        setBook(found);
        setLoading(false);
      }
    });
    // Cleanup: ignore a stale response if the screen closes or the ID changes.
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!book) {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Book not found</Text>
        <Pressable style={styles.secondary} onPress={() => router.back()}>
          <Text style={styles.secondaryText}>Go back</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>
        {book.author} · {book.pages} pages
      </Text>
      <Text style={styles.summary}>{book.summary}</Text>

      {/* The setter triggers a re-render, so the label and style update. */}
      <Pressable
        style={[styles.button, isReading && styles.buttonActive]}
        onPress={() => setIsReading(!isReading)}
      >
        <Text style={[styles.buttonText, isReading && styles.buttonTextActive]}>
          {isReading ? '✓ Currently reading' : 'Mark as reading'}
        </Text>
      </Pressable>

      <Pressable style={styles.secondary} onPress={() => router.back()}>
        <Text style={styles.secondaryText}>Back</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fafafa' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 },
  title: { fontSize: 28, fontWeight: '800', color: '#111827' },
  author: { fontSize: 15, color: '#6b7280', marginTop: 4 },
  summary: { fontSize: 16, lineHeight: 24, color: '#374151', marginVertical: 20 },
  button: {
    borderWidth: 2,
    borderColor: '#4f46e5',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonActive: { backgroundColor: '#4f46e5' },
  buttonText: { color: '#4f46e5', fontSize: 16, fontWeight: '700' },
  buttonTextActive: { color: '#fff' },
  secondary: { marginTop: 16, alignItems: 'center', padding: 8 },
  secondaryText: { color: '#6b7280', fontSize: 15 },
});