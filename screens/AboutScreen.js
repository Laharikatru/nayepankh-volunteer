import React from 'react';
import {
  View, Text, StyleSheet, ScrollView,
  TouchableOpacity, SafeAreaView
} from 'react-native';
import { Colors } from '../constants/theme';

const values = [
  { emoji: '💙', title: 'Empowerment', desc: 'We believe every student deserves a chance to learn and grow.' },
  { emoji: '🌱', title: 'Growth', desc: 'Providing practical skills and experience for real-world success.' },
  { emoji: '🤝', title: 'Community', desc: 'Building a network of learners, mentors, and changemakers.' },
  { emoji: '🎯', title: 'Impact', desc: 'Every initiative is designed to create measurable, lasting change.' },
];

const team = [
  { name: 'Founder', role: 'Vision & Leadership', emoji: '👨‍💼' },
  { name: 'Tech Team', role: 'Building the future', emoji: '💻' },
  { name: 'Volunteers', role: '500+ across India', emoji: '🌟' },
];

export default function AboutScreen({ navigate }) {
  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigate('Home')} style={styles.backBtn}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>About Us</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero */}
        <View style={styles.hero}>
          <Text style={styles.heroEmoji}>🕊️</Text>
          <Text style={styles.heroTitle}>NayePankh Foundation</Text>
          <Text style={styles.heroTagline}>Giving Wings to Dreams Since 2019</Text>
        </View>

        {/* Mission */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>OUR MISSION</Text>
          <Text style={styles.sectionTitle}>Why We Exist</Text>
          <Text style={styles.sectionText}>
            NayePankh Foundation was born from a simple but powerful belief — that talent is equally distributed, but opportunity is not.{'\n\n'}
            We work to bridge this gap by providing free internships, mentorship, skill development programs, and leadership opportunities to students from all backgrounds across India.{'\n\n'}
            Our name "NayePankh" means "New Wings" — because we help students take flight toward their dreams.
          </Text>
        </View>

        {/* Values */}
        <View style={styles.valuesSection}>
          <Text style={styles.sectionLabel}>OUR VALUES</Text>
          <Text style={styles.sectionTitle}>What We Stand For</Text>
          {values.map((v, i) => (
            <View key={i} style={styles.valueCard}>
              <View style={styles.valueIcon}>
                <Text style={styles.valueEmoji}>{v.emoji}</Text>
              </View>
              <View style={styles.valueContent}>
                <Text style={styles.valueTitle}>{v.title}</Text>
                <Text style={styles.valueDesc}>{v.desc}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Team */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>OUR PEOPLE</Text>
          <Text style={styles.sectionTitle}>Who We Are</Text>
          <View style={styles.teamRow}>
            {team.map((t, i) => (
              <View key={i} style={styles.teamCard}>
                <Text style={styles.teamEmoji}>{t.emoji}</Text>
                <Text style={styles.teamName}>{t.name}</Text>
                <Text style={styles.teamRole}>{t.role}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* CTA */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Ready to join us?</Text>
          <Text style={styles.ctaText}>Become a volunteer or apply for an internship today.</Text>
          <TouchableOpacity style={styles.ctaBtn} onPress={() => navigate('Register')}>
            <Text style={styles.ctaBtnText}>Join NayePankh 🚀</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ctaBtnOutline} onPress={() => navigate('Internships')}>
            <Text style={styles.ctaBtnOutlineText}>View Internships</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.offWhite },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  backBtn: {
    width: 40, height: 40, borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center', justifyContent: 'center',
  },
  backIcon: { color: Colors.white, fontSize: 20, fontWeight: '600' },
  headerTitle: { color: Colors.white, fontSize: 18, fontWeight: '700' },
  hero: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  heroEmoji: { fontSize: 56, marginBottom: 12 },
  heroTitle: { color: Colors.white, fontSize: 24, fontWeight: '700', marginBottom: 6 },
  heroTagline: { color: Colors.accent, fontSize: 14, fontWeight: '600' },
  section: { padding: 20 },
  valuesSection: { paddingHorizontal: 20, paddingBottom: 8 },
  sectionLabel: {
    fontSize: 11, fontWeight: '700', color: Colors.accent,
    letterSpacing: 1.5, marginBottom: 4,
  },
  sectionTitle: { fontSize: 20, fontWeight: '700', color: Colors.textDark, marginBottom: 12 },
  sectionText: { fontSize: 14, color: '#555', lineHeight: 22 },
  valueCard: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 14,
    padding: 16,
    marginBottom: 10,
    alignItems: 'center',
    elevation: 2,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  valueIcon: {
    width: 48, height: 48, borderRadius: 24,
    backgroundColor: Colors.offWhite,
    alignItems: 'center', justifyContent: 'center',
    marginRight: 14,
  },
  valueEmoji: { fontSize: 22 },
  valueContent: { flex: 1 },
  valueTitle: { fontSize: 15, fontWeight: '700', color: Colors.textDark, marginBottom: 3 },
  valueDesc: { fontSize: 13, color: '#666', lineHeight: 18 },
  teamRow: { flexDirection: 'row', gap: 10 },
  teamCard: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    elevation: 2,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  teamEmoji: { fontSize: 28, marginBottom: 6 },
  teamName: { fontSize: 13, fontWeight: '700', color: Colors.textDark, textAlign: 'center' },
  teamRole: { fontSize: 11, color: Colors.textGray, textAlign: 'center', marginTop: 2 },
  ctaSection: {
    margin: 20,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
  },
  ctaTitle: { color: Colors.white, fontSize: 20, fontWeight: '700', marginBottom: 8 },
  ctaText: { color: 'rgba(255,255,255,0.7)', fontSize: 13, textAlign: 'center', marginBottom: 20 },
  ctaBtn: {
    backgroundColor: Colors.accent,
    borderRadius: 25,
    paddingHorizontal: 28,
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  ctaBtnText: { color: Colors.white, fontWeight: '700', fontSize: 15 },
  ctaBtnOutline: {
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.4)',
    borderRadius: 25,
    paddingHorizontal: 28,
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
  },
  ctaBtnOutlineText: { color: Colors.white, fontWeight: '600', fontSize: 14 },
});
