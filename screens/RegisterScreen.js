import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  TextInput, SafeAreaView, Alert
} from 'react-native';
import { Colors } from '../constants/theme';

const roles = [
  'Mobile App Development',
  'Full Stack Development',
  'Frontend Development',
  'Artificial Intelligence',
  'AI Agent Development',
  'Machine Learning',
  'Data Analytics',
  'UI/UX Design',
  'Backend Development',
  'Python Development',
];

const years = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Graduate'];

export default function RegisterScreen({ navigate }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    year: '',
    role: '',
    why: '',
    experience: '',
  });
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [errors, setErrors] = useState({});

  const update = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim() || !form.email.includes('@')) newErrors.email = 'Valid email is required';
    if (!form.phone.trim() || form.phone.length < 10) newErrors.phone = 'Valid phone number required';
    if (!form.college.trim()) newErrors.college = 'College name is required';
    if (!selectedYear) newErrors.year = 'Please select your year';
    if (!selectedRole) newErrors.role = 'Please select a role';
    if (!form.why.trim()) newErrors.why = 'Please tell us why you want to join';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) {
      Alert.alert('Missing Information', 'Please fill all required fields.');
      return;
    }
    const data = { ...form, year: selectedYear, role: selectedRole };
    navigate('Success', data);
  };

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigate('Home')} style={styles.backBtn}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Volunteer Registration</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        {/* Hero */}
        <View style={styles.hero}>
          <Text style={styles.heroEmoji}>🚀</Text>
          <Text style={styles.heroTitle}>Join NayePankh</Text>
          <Text style={styles.heroSub}>Fill in your details to apply for an internship</Text>
        </View>

        <View style={styles.form}>
          {/* Personal Info */}
          <Text style={styles.groupTitle}>Personal Information</Text>

          <View style={styles.field}>
            <Text style={styles.label}>Full Name *</Text>
            <TextInput
              style={[styles.input, errors.name && styles.inputError]}
              placeholder="Enter your full name"
              placeholderTextColor="#aaa"
              value={form.name}
              onChangeText={v => update('name', v)}
            />
            {errors.name && <Text style={styles.error}>{errors.name}</Text>}
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Email Address *</Text>
            <TextInput
              style={[styles.input, errors.email && styles.inputError]}
              placeholder="your@email.com"
              placeholderTextColor="#aaa"
              value={form.email}
              onChangeText={v => update('email', v)}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Phone Number *</Text>
            <TextInput
              style={[styles.input, errors.phone && styles.inputError]}
              placeholder="10-digit mobile number"
              placeholderTextColor="#aaa"
              value={form.phone}
              onChangeText={v => update('phone', v)}
              keyboardType="phone-pad"
              maxLength={10}
            />
            {errors.phone && <Text style={styles.error}>{errors.phone}</Text>}
          </View>

          {/* Academic Info */}
          <Text style={styles.groupTitle}>Academic Details</Text>

          <View style={styles.field}>
            <Text style={styles.label}>College / University *</Text>
            <TextInput
              style={[styles.input, errors.college && styles.inputError]}
              placeholder="Your college name"
              placeholderTextColor="#aaa"
              value={form.college}
              onChangeText={v => update('college', v)}
            />
            {errors.college && <Text style={styles.error}>{errors.college}</Text>}
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Current Year *</Text>
            <View style={styles.optionsRow}>
              {years.map((y, i) => (
                <TouchableOpacity
                  key={i}
                  style={[styles.optionBtn, selectedYear === y && styles.optionBtnActive]}
                  onPress={() => { setSelectedYear(y); setErrors(p => ({ ...p, year: '' })); }}
                >
                  <Text style={[styles.optionText, selectedYear === y && styles.optionTextActive]}>
                    {y}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            {errors.year && <Text style={styles.error}>{errors.year}</Text>}
          </View>

          {/* Role */}
          <Text style={styles.groupTitle}>Internship Preference</Text>

          <View style={styles.field}>
            <Text style={styles.label}>Select Role *</Text>
            <View style={styles.rolesGrid}>
              {roles.map((r, i) => (
                <TouchableOpacity
                  key={i}
                  style={[styles.roleBtn, selectedRole === r && styles.roleBtnActive]}
                  onPress={() => { setSelectedRole(r); setErrors(p => ({ ...p, role: '' })); }}
                >
                  <Text style={[styles.roleText, selectedRole === r && styles.roleTextActive]}>
                    {r}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            {errors.role && <Text style={styles.error}>{errors.role}</Text>}
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Prior Experience (Optional)</Text>
            <TextInput
              style={[styles.input, styles.textarea]}
              placeholder="Any projects, skills, or experience you have..."
              placeholderTextColor="#aaa"
              value={form.experience}
              onChangeText={v => update('experience', v)}
              multiline
              numberOfLines={3}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Why do you want to join NayePankh? *</Text>
            <TextInput
              style={[styles.input, styles.textarea, errors.why && styles.inputError]}
              placeholder="Tell us your motivation and what you hope to achieve..."
              placeholderTextColor="#aaa"
              value={form.why}
              onChangeText={v => update('why', v)}
              multiline
              numberOfLines={4}
            />
            {errors.why && <Text style={styles.error}>{errors.why}</Text>}
          </View>

          <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit} activeOpacity={0.85}>
            <Text style={styles.submitBtnText}>Submit Application 🚀</Text>
          </TouchableOpacity>

          <Text style={styles.disclaimer}>
            By submitting, you agree to be contacted by NayePankh Foundation regarding your application.
          </Text>
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
  headerTitle: { color: Colors.white, fontSize: 16, fontWeight: '700' },
  hero: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    paddingVertical: 24,
    paddingBottom: 28,
  },
  heroEmoji: { fontSize: 40, marginBottom: 8 },
  heroTitle: { color: Colors.white, fontSize: 22, fontWeight: '700', marginBottom: 6 },
  heroSub: { color: 'rgba(255,255,255,0.7)', fontSize: 13 },
  form: { padding: 20 },
  groupTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.primary,
    marginBottom: 14,
    marginTop: 8,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary + '20',
  },
  field: { marginBottom: 16 },
  label: { fontSize: 13, fontWeight: '600', color: Colors.textDark, marginBottom: 6 },
  input: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#e0e0e0',
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: Colors.textDark,
  },
  inputError: { borderColor: '#e53935' },
  textarea: { height: 90, textAlignVertical: 'top', paddingTop: 12 },
  error: { color: '#e53935', fontSize: 12, marginTop: 4 },
  optionsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  optionBtn: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.white,
    borderWidth: 1.5,
    borderColor: '#e0e0e0',
  },
  optionBtnActive: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  optionText: { fontSize: 13, fontWeight: '500', color: Colors.textGray },
  optionTextActive: { color: Colors.white },
  rolesGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  roleBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: Colors.white,
    borderWidth: 1.5,
    borderColor: '#e0e0e0',
  },
  roleBtnActive: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  roleText: { fontSize: 12, fontWeight: '500', color: Colors.textGray },
  roleTextActive: { color: Colors.white },
  submitBtn: {
    backgroundColor: Colors.accent,
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    marginTop: 8,
    elevation: 4,
    shadowColor: Colors.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  submitBtnText: { color: Colors.white, fontWeight: '700', fontSize: 16 },
  disclaimer: {
    fontSize: 11,
    color: Colors.textGray,
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 16,
  },
});
