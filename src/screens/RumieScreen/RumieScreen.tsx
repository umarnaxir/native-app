import React from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, StyleSheet, Pressable, Alert, Button } from 'react-native';
import { useFetchLoggedInUser, useFetchHomepageMarketplaceListingV2 } from '../../hooks';
import { IMAGE_BASE_URL } from '../../utils/constants';
import { useThemeContext } from '../../context/ThemeContext';
import ScreenHeader from '../../components/common/ScreenHeader';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import { IconButton } from '../../elements';

const RumieScreen = () => {
  const { user, loading: userLoading, error: userError, refetch: refetchUser } = useFetchLoggedInUser();
  const eduInstituteId = user?.eduInstituteId ?? null;
  const { listings, loading: listingsLoading, error: listingsError, refetch: refetchListings } = useFetchHomepageMarketplaceListingV2(eduInstituteId);
  const navigation = useNavigation();
  const { colors } = useThemeContext();
  
  const initialLoading = userLoading || (listingsLoading && listings.length === 0);

  if (initialLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (userError || listingsError) {
    const message = userError?.message ?? listingsError?.message ?? 'Something went wrong';
    return (
      <View style={[styles.center, styles.errorContainer, { backgroundColor: colors.background }] }>
        <Text style={[styles.errorText, { color: colors.text }]}>Error: {message}</Text>
        <Button
          title="Retry"
          onPress={() => {
            refetchUser().catch((e) => console.warn('refetchUser failed', e));
            refetchListings().catch((e) => console.warn('refetchListings failed', e));
          }}
        />
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }] }>
      <ScreenHeader
        title="Rumie Market Place"
        subtitle={user ? `Welcome, ${user.firstName}`: 'Rumie Screen'}
        leftIcon={
          <IconButton
            icon="menu"
            variant="ghost"
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            color={colors.text}
            size={24}
            style={{ width: 24, height: 24, padding: 0 }}
          />
        }
      />
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
  itemPressed: { backgroundColor: '#f0f0f0' },
  thumb: { width: 370, height: 370, borderRadius: 8, marginBottom: 10, backgroundColor: '#eee' },
  meta: { width: '100%', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 18, fontWeight: '600', textAlign: 'center' },
  price: { marginTop: 6, fontSize: 16 },
  empty: { textAlign: 'center', marginTop: 24 },
  footer: { paddingVertical: 20 },
  errorContainer: { padding: 16 },
  errorText: { textAlign: 'center', marginBottom: 12 },
});

type EmptyListProps = { color?: string };
const EmptyList: React.FC<EmptyListProps> = ({ color }) => (
  <Text style={[styles.empty, { color: color ?? '#666' }]}>No listings available</Text>
);

export default RumieScreen;
