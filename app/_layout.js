import { Stack } from 'expo-router';

// Root Stack: the (tabs) group is the base screen, and details opens ABOVE it,
// so the tab bar is hidden and a native back button appears automatically.
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="details/[id]" options={{ title: 'Book details' }} />
    </Stack>
  );
}