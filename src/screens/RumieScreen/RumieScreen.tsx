import React from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, StyleSheet, Pressable, Alert } from 'react-native';
import { useFetchLoggedInUser, useFetchHomepageMarketplaceListingV2 } from '../../hooks';
import { IMAGE_BASE_URL } from '../../utils/constants';
import { useThemeContext } from '../../context/ThemeContext';

const RumieScreen = () => {
  const { user, loading: userLoading } = useFetchLoggedInUser();
  const eduInstituteId = user?.eduInstituteId ?? null;
  const { listings, loading: listingsLoading } = useFetchHomepageMarketplaceListingV2(eduInstituteId);

  const loading = userLoading || listingsLoading;
  const { colors } = useThemeContext();

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }] }>
      <Text style={[styles.pageTitle, { color: colors.text }]}>Rumie Market Place</Text>

      {user ? (
        <Text style={[styles.header, { color: colors.text }]}>Welcome, {user.firstName}</Text>
      ) : (
        <Text style={[styles.header, { color: colors.text }]}>Rumie Screen</Text>
      )}
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const image = item.media && item.media.length > 0 ? item.media[0].name : null;
          return (
            <Pressable
              onPress={() => Alert.alert(item.title, `Price: $${item.price}`)}
              style={({ pressed }) => [styles.item, pressed && styles.itemPressed]}
              accessibilityRole="button"
            >
              {image ? (
                <Image
                  source={{ uri: `${IMAGE_BASE_URL}${image}` }}
                  style={styles.thumb}
                />
              ) : null}

              <View style={styles.meta}>
                <Text style={[styles.title, { color: colors.text }]} numberOfLines={2}>{item.title}</Text>
                <Text style={[styles.price, { color: colors.mutedText }]}>${item.price}</Text>
              </View>
            </Pressable>
          );
        }}
        ListEmptyComponent={<EmptyList color={colors.mutedText} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 32 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  pageTitle: { fontSize: 26, fontWeight: '800', marginBottom: 8, textAlign: 'center', paddingTop: 20 },
  header: { fontSize: 18, fontWeight: '600', marginBottom: 12 , textAlign: 'center' },
  sectionHeader: { fontSize: 20, fontWeight: '700', marginBottom: 12, marginTop: 6 },
  item: { flexDirection: 'column', marginBottom: 16, alignItems: 'center', padding: 12, borderRadius: 10 },
  thumb: { width: 370, height: 370, borderRadius: 8, marginBottom: 10, backgroundColor: '#eee' },
  meta: { width: '100%', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 18, fontWeight: '600', textAlign: 'center' },
  price: { marginTop: 6, fontSize: 16 },
  empty: { textAlign: 'center', marginTop: 24 },
});

type EmptyListProps = { color?: string };
const EmptyList: React.FC<EmptyListProps> = ({ color }) => (
  <Text style={[styles.empty, { color: color ?? '#666' }]}>No listings available</Text>
);

export default RumieScreen;
