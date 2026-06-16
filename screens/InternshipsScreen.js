import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView,
  TouchableOpacity, SafeAreaView
} from 'react-native';
import { Colors } from '../constants/theme';

const internships = [
  {
    title: 'Mobile App Development',
    category: 'Tech',
    emoji: '📱',
    duration: '1 Month',
    mode: 'Remote',
    skills: ['React Native', 'Expo', 'JavaScript'],
    desc: 'Build real mobile apps for NayePankh Foundation. Work on volunteer management and student outreach apps.',
    color: '#1a237e',
  },
  {
    title: 'Full Stack Development',
    category: 'Tech',
    emoji: '⚙️',
    duration: '1 Month',
    mode: 'Remote',
    skills: ['React', 'Node.js', 'Database'],
    desc: 'Build end-to-end web applications. Create systems that help manage volunteers and internship programs.',
    color: '#1b5e20',
  },
  {
    title: 'Artificial Intelligence',
    category: 'AI/ML',
    emoji: '🤖',
    duration: '1 Month',
    mode: 'Remote',
    skills: ['Python', 'AI APIs', 'Automation'],
    desc: 'Apply AI to automate NGO operations. Build chatbots and tools to help students find opportunities.',
    color: '#4a148c',
  },
  {
    title: 'UI/UX Design',
    category: 'Design',
    emoji: '🎨',
    duration: '1 Month',
    mode: 'Remote',
    skills: ['Figma', 'Prototyping', 'User Research'],
    desc: 'Design beautiful and accessible interfaces for NayePankh\'s digital products and campaigns.',
    color: '#bf360c',
  },
  {
    title: 'Data Analytics',
    category: 'Data',
    emoji: '📊',
    duration: '1 Month',
    mode: 'Remote',
    skills: ['Excel', 'Python', 'Visualization'],
    desc: 'Analyze volunteer data, campaign performance, and student engagement to drive better decisions.',
    color: '#006064',
  },
  {
    title: 'Frontend Development',
    category: 'Tech',
    emoji: '🌐',
    duration: '1 Month',
    mode: 'Remote',
    skills: ['HTML', 'CSS', 'React'],
    desc: 'Build responsive, beautiful web pages for NayePankh. Make our digital presence shine.',
    color: '#e65100',
  },
  {
    title: 'AI Agent Development',
    category: 'AI/ML',
    emoji: '🧠',
    duration: '1 Month',
    mode: 'Remote',
    skills: ['LLMs', 'APIs', 'Automation'],
    desc: 'Create intelligent AI agents that automate tasks and help volunteers work more efficiently.',
    color: '#1a237e',
  },
  {
    title: 'Machine Learning',
    category: 'AI/ML',
    emoji: '🔬',
    duration: '1 Month',
    mode: 'Remote',
    skills: ['Python', 'Scikit-learn', 'Data'],
    desc: 'Build ML models to predict student needs, optimize campaigns, and improve program outcomes.',
    color: '#880e4f',
  },
];

const categories = ['All', 'Tech', 'AI/ML', 'Design', 'Data'];

export default function InternshipsScreen({ navigate }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedIndex, setExpandedIndex] = useState(null);

  const filtered = selectedCategory === 'All'
    ? internships
    : internships.filter(i => i.category === selectedCategory);

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigate('Home')} style={styles.backBtn}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Internships</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero */}
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Find Your{'\n'}Internship 💼</Text>
          <Text style={styles.heroSub}>All internships are free, remote, and beginner-friendly</Text>
        </View>

        {/* Filters */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filters}>
          {categories.map((cat, i) => (
            <TouchableOpacity
              key={i}
              style={[styles.filterBtn, selectedCategory === cat && styles.filterBtnActive]}
              onPress={() => setSelectedCategory(cat)}
            >
              <Text style={[styles.filterText, selectedCategory === cat && styles.filterTextActive]}>
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Count */}
        <Text style={styles.countText}>{filtered.length} opportunities available</Text>

        {/* Cards */}
        <View style={styles.cardsList}>
          {filtered.map((item, i) => (
            <TouchableOpacity
              key={i}
              style={styles.card}
              onPress={() => setExpandedIndex(expandedIndex === i ? null : i)}
              activeOpacity={0.9}
            >
              <View style={styles.cardHeader}>
                <View style={[styles.cardIcon, { backgroundColor: item.color + '20' }]}>
                  <Text style={styles.cardEmoji}>{item.emoji}</Text>
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <View style={styles.cardMeta}>
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>⏱ {item.duration}</Text>
                    </View>
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>🌐 {item.mode}</Text>
                    </View>
                  </View>
                </View>
                <Text style={styles.expandIcon}>{expandedIndex === i ? '▲' : '▼'}</Text>
              </View>

              {expandedIndex === i && (
                <View style={styles.cardExpanded}>
                  <Text style={styles.cardDesc}>{item.desc}</Text>
                  <View style={styles.skillsRow}>
                    {item.skills.map((s, j) => (
                      <View key={j} style={[styles.skill, { borderColor: item.color }]}>
                        <Text style={[styles.skillText, { color: item.color }]}>{s}</Text>
                      </View>
                    ))}
                  </View>
                  <TouchableOpacity
                    style={[styles.applyBtn, { backgroundColor: item.color }]}
                    onPress={() => navigate('Register')}
                  >
                    <Text style={styles.applyBtnText}>Apply Now →</Text>
                  </TouchableOpacity>
                </View>
              )}
            </TouchableOpacity>
          ))}
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
    paddingHorizontal: 20,
    paddingBottom: 28,
    paddingTop: 8,
  },
  heroTitle: { color: Colors.white, fontSize: 26, fontWeight: '700', marginBottom: 8, lineHeight: 34 },
  heroSub: { color: 'rgba(255,255,255,0.7)', fontSize: 13 },
  filters: { paddingHorizontal: 16, paddingVertical: 16 },
  filterBtn: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.white,
    marginRight: 8,
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  filterBtnActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  filterText: { fontSize: 13, fontWeight: '600', color: Colors.textGray },
  filterTextActive: { color: Colors.white },
  countText: {
    paddingHorizontal: 20,
    fontSize: 13,
    color: Colors.textGray,
    marginBottom: 12,
  },
  cardsList: { paddingHorizontal: 16, gap: 12 },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    elevation: 3,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 6,
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center' },
  cardIcon: {
    width: 48, height: 48, borderRadius: 12,
    alignItems: 'center', justifyContent: 'center',
    marginRight: 12,
  },
  cardEmoji: { fontSize: 22 },
  cardInfo: { flex: 1 },
  cardTitle: { fontSize: 15, fontWeight: '700', color: Colors.textDark, marginBottom: 6 },
  cardMeta: { flexDirection: 'row', gap: 6 },
  badge: {
    backgroundColor: Colors.offWhite,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeText: { fontSize: 11, color: Colors.textGray, fontWeight: '500' },
  expandIcon: { fontSize: 12, color: Colors.textGray, paddingLeft: 8 },
  cardExpanded: { marginTop: 14, paddingTop: 14, borderTopWidth: 1, borderTopColor: '#eee' },
  cardDesc: { fontSize: 13, color: '#555', lineHeight: 20, marginBottom: 12 },
  skillsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginBottom: 14 },
  skill: {
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  skillText: { fontSize: 12, fontWeight: '600' },
  applyBtn: {
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
  },
  applyBtnText: { color: Colors.white, fontWeight: '700', fontSize: 14 },
});
