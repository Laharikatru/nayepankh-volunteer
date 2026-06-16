import React, { useRef, useEffect } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  Animated, Dimensions, SafeAreaView
} from 'react-native';
import { Colors } from '../constants/theme';

const { width } = Dimensions.get('window');

const stats = [
  { number: '10,000+', label: 'Students Helped', emoji: '🎓' },
  { number: '500+', label: 'Volunteers', emoji: '🤝' },
  { number: '50+', label: 'Cities', emoji: '🏙️' },
  { number: '5+', label: 'Years of Impact', emoji: '⭐' },
];

const quickLinks = [
  { title: 'About Us', subtitle: 'Our mission & story', emoji: '💙', screen: 'About' },
  { title: 'Internships', subtitle: 'Explore opportunities', emoji: '💼', screen: 'Internships' },
  { title: 'Volunteer', subtitle: 'Join our community', emoji: '🌟', screen: 'Register' },
  { title: 'Apply Now', subtitle: 'Start your journey', emoji: '🚀', screen: 'Register' },
];

export default function HomeScreen({ navigate }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 600, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 600, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerGreeting}>Welcome to</Text>
            <Text style={styles.headerTitle}>NayePankh 🕊️</Text>
          </View>
          <TouchableOpacity style={styles.notifBtn}>
            <Text style={styles.notifIcon}>🔔</Text>
          </TouchableOpacity>
        </View>

        {/* Hero Card */}
        <Animated.View style={[styles.heroCard, {
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }]
        }]}>
          <View style={styles.heroContent}>
            <Text style={styles.heroLabel}>🌱 NGO for Students</Text>
            <Text style={styles.heroTitle}>Giving Wings{'\n'}to Dreams</Text>
            <Text style={styles.heroSubtitle}>
              Join thousands of students building a better future through learning, internships, and community.
            </Text>
            <TouchableOpacity
              style={styles.heroBtn}
              onPress={() => navigate('Register')}
              activeOpacity={0.85}
            >
              <Text style={styles.heroBtnText}>Join as Volunteer →</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.heroDecor}>
            <Text style={styles.heroEmoji}>🎓</Text>
          </View>
        </Animated.View>

        {/* Stats */}
        <Text style={styles.sectionTitle}>Our Impact</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.statsRow}>
          {stats.map((s, i) => (
            <View key={i} style={styles.statCard}>
              <Text style={styles.statEmoji}>{s.emoji}</Text>
              <Text style={styles.statNumber}>{s.number}</Text>
              <Text style={styles.statLabel}>{s.label}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Quick Links */}
        <Text style={styles.sectionTitle}>Explore</Text>
        <View style={styles.grid}>
          {quickLinks.map((item, i) => (
            <TouchableOpacity
              key={i}
              style={[styles.gridItem, i % 2 === 0 && { marginRight: 8 }]}
              onPress={() => navigate(item.screen)}
              activeOpacity={0.85}
            >
              <Text style={styles.gridEmoji}>{item.emoji}</Text>
              <Text style={styles.gridTitle}>{item.title}</Text>
              <Text style={styles.gridSubtitle}>{item.subtitle}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Mission Banner */}
        <View style={styles.missionBanner}>
          <Text style={styles.missionTitle}>Our Mission</Text>
          <Text style={styles.missionText}>
            NayePankh Foundation is dedicated to empowering underprivileged students by providing free internships, mentorship, and skill development programs across India.
          </Text>
          <TouchableOpacity onPress={() => navigate('About')}>
            <Text style={styles.missionLink}>Learn more about us →</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom CTA */}
        <TouchableOpacity
          style={styles.ctaBtn}
          onPress={() => navigate('Internships')}
          activeOpacity={0.85}
        >
          <Text style={styles.ctaBtnText}>🔍 Browse Internships</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.offWhite },
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
    backgroundColor: Colors.primary,
  },
  headerGreeting: { color: 'rgba(255,255,255,0.7)', fontSize: 13 },
  headerTitle: { color: Colors.white, fontSize: 24, fontWeight: '700' },
  notifBtn: {
    width: 40, height: 40, borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center', justifyContent: 'center',
  },
  notifIcon: { fontSize: 18 },
  heroCard: {
    margin: 16,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    padding: 24,
    flexDirection: 'row',
    overflow: 'hidden',
    elevation: 8,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 12,
  },
  heroContent: { flex: 1 },
  heroLabel: {
    color: Colors.accent,
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  heroTitle: {
    color: Colors.white,
    fontSize: 26,
    fontWeight: '700',
    lineHeight: 32,
    marginBottom: 10,
  },
  heroSubtitle: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 13,
    lineHeight: 19,
    marginBottom: 18,
  },
  heroBtn: {
    backgroundColor: Colors.accent,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 25,
    alignSelf: 'flex-start',
  },
  heroBtnText: { color: Colors.white, fontWeight: '700', fontSize: 13 },
  heroDecor: {
    justifyContent: 'center',
    paddingLeft: 12,
  },
  heroEmoji: { fontSize: 56 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.textDark,
    paddingHorizontal: 20,
    marginBottom: 12,
    marginTop: 8,
  },
  statsRow: { paddingLeft: 20, marginBottom: 24 },
  statCard: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    marginRight: 12,
    alignItems: 'center',
    minWidth: 110,
    elevation: 4,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
  },
  statEmoji: { fontSize: 24, marginBottom: 6 },
  statNumber: { fontSize: 20, fontWeight: '700', color: Colors.primary },
  statLabel: { fontSize: 11, color: Colors.textGray, textAlign: 'center', marginTop: 2 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    marginBottom: 24,
    gap: 8,
  },
  gridItem: {
    flex: 1,
    minWidth: (width - 48) / 2,
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 18,
    elevation: 3,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 6,
  },
  gridEmoji: { fontSize: 28, marginBottom: 8 },
  gridTitle: { fontSize: 15, fontWeight: '700', color: Colors.textDark, marginBottom: 4 },
  gridSubtitle: { fontSize: 12, color: Colors.textGray },
  missionBanner: {
    marginHorizontal: 16,
    backgroundColor: Colors.primary,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  missionTitle: { color: Colors.accent, fontWeight: '700', fontSize: 14, marginBottom: 8 },
  missionText: { color: 'rgba(255,255,255,0.8)', fontSize: 13, lineHeight: 20, marginBottom: 12 },
  missionLink: { color: Colors.accentLight, fontWeight: '600', fontSize: 13 },
  ctaBtn: {
    marginHorizontal: 16,
    backgroundColor: Colors.accent,
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    elevation: 4,
  },
  ctaBtnText: { color: Colors.white, fontWeight: '700', fontSize: 15 },
});
