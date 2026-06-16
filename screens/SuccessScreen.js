import React, { useRef, useEffect } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  Animated, SafeAreaView, ScrollView
} from 'react-native';
import { Colors } from '../constants/theme';

export default function SuccessScreen({ navigate, data }) {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 6,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Success Icon */}
        <Animated.View style={[styles.iconContainer, { transform: [{ scale: scaleAnim }] }]}>
          <View style={styles.iconOuter}>
            <View style={styles.iconInner}>
              <Text style={styles.iconEmoji}>✅</Text>
            </View>
          </View>
        </Animated.View>

        <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
          <Text style={styles.title}>Application Submitted!</Text>
          <Text style={styles.subtitle}>
            Thank you for applying to NayePankh Foundation 🕊️
          </Text>

          {/* Details Card */}
          {data && (
            <View style={styles.detailsCard}>
              <Text style={styles.detailsTitle}>Your Application Details</Text>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Name</Text>
                <Text style={styles.detailValue}>{data.name}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Email</Text>
                <Text style={styles.detailValue}>{data.email}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>College</Text>
                <Text style={styles.detailValue}>{data.college}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Year</Text>
                <Text style={styles.detailValue}>{data.year}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Role</Text>
                <Text style={[styles.detailValue, styles.roleValue]}>{data.role}</Text>
              </View>
            </View>
          )}

          {/* What's Next */}
          <View style={styles.nextCard}>
            <Text style={styles.nextTitle}>What happens next?</Text>
            {[
              { step: '1', text: 'Our team reviews your application', emoji: '👀' },
              { step: '2', text: 'You receive a confirmation email', emoji: '📧' },
              { step: '3', text: 'Shortlisted candidates are contacted', emoji: '📞' },
              { step: '4', text: 'Internship begins!', emoji: '🚀' },
            ].map((item, i) => (
              <View key={i} style={styles.nextStep}>
                <View style={styles.stepBadge}>
                  <Text style={styles.stepNumber}>{item.step}</Text>
                </View>
                <Text style={styles.stepText}>{item.text}</Text>
                <Text style={styles.stepEmoji}>{item.emoji}</Text>
              </View>
            ))}
          </View>

          {/* Social reminder */}
          <View style={styles.socialCard}>
            <Text style={styles.socialTitle}>Stay Connected 📱</Text>
            <Text style={styles.socialText}>
              Follow NayePankh on WhatsApp, Instagram, and LinkedIn for important updates about your application.
            </Text>
          </View>

          {/* Buttons */}
          <TouchableOpacity
            style={styles.homeBtn}
            onPress={() => navigate('Home')}
            activeOpacity={0.85}
          >
            <Text style={styles.homeBtnText}>Back to Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.internshipsBtn}
            onPress={() => navigate('Internships')}
            activeOpacity={0.85}
          >
            <Text style={styles.internshipsBtnText}>Browse More Internships</Text>
          </TouchableOpacity>
        </Animated.View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.offWhite },
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  iconContainer: { marginBottom: 24 },
  iconOuter: {
    width: 120, height: 120, borderRadius: 60,
    backgroundColor: Colors.green + '15',
    alignItems: 'center', justifyContent: 'center',
  },
  iconInner: {
    width: 90, height: 90, borderRadius: 45,
    backgroundColor: Colors.green + '25',
    alignItems: 'center', justifyContent: 'center',
  },
  iconEmoji: { fontSize: 44 },
  content: { width: '100%', alignItems: 'center' },
  title: {
    fontSize: 26, fontWeight: '700',
    color: Colors.textDark, marginBottom: 8, textAlign: 'center',
  },
  subtitle: {
    fontSize: 14, color: Colors.textGray,
    textAlign: 'center', lineHeight: 20, marginBottom: 24,
  },
  detailsCard: {
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    elevation: 3,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 6,
  },
  detailsTitle: {
    fontSize: 15, fontWeight: '700', color: Colors.primary,
    marginBottom: 14, paddingBottom: 10,
    borderBottomWidth: 1, borderBottomColor: '#eee',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  detailLabel: { fontSize: 13, color: Colors.textGray, fontWeight: '500', flex: 1 },
  detailValue: { fontSize: 13, color: Colors.textDark, fontWeight: '600', flex: 2, textAlign: 'right' },
  roleValue: { color: Colors.primary },
  nextCard: {
    width: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  nextTitle: { color: Colors.accent, fontSize: 15, fontWeight: '700', marginBottom: 14 },
  nextStep: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  stepBadge: {
    width: 28, height: 28, borderRadius: 14,
    backgroundColor: Colors.accent,
    alignItems: 'center', justifyContent: 'center',
    marginRight: 12,
  },
  stepNumber: { color: Colors.white, fontSize: 13, fontWeight: '700' },
  stepText: { flex: 1, color: 'rgba(255,255,255,0.85)', fontSize: 13 },
  stepEmoji: { fontSize: 16, marginLeft: 8 },
  socialCard: {
    width: '100%',
    backgroundColor: Colors.accent + '15',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: Colors.accent + '30',
  },
  socialTitle: { color: Colors.accent, fontSize: 14, fontWeight: '700', marginBottom: 6 },
  socialText: { color: '#555', fontSize: 13, lineHeight: 19 },
  homeBtn: {
    width: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    marginBottom: 10,
  },
  homeBtnText: { color: Colors.white, fontWeight: '700', fontSize: 15 },
  internshipsBtn: {
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: Colors.primary,
  },
  internshipsBtnText: { color: Colors.primary, fontWeight: '700', fontSize: 15 },
});
