import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

const CreateSchools = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <TouchableOpacity style={styles.actionRow}>
          <Text style={styles.actionText}>View Details</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.detailSection}>
        <DetailRow title="Status" value="Active" valueStyle={styles.activeStatus} />
        <DetailRow title="User ID" value="123623" />
        <DetailRow title="Parent" value="ABCDE" />
        <DetailRow title="Password" value="*******" />
      </View>
    </ScrollView>
  );
};

const DetailRow = ({ title, value, valueStyle }) => (
  <View style={styles.row}>
    <Text style={styles.label}>{title}</Text>
    <Text style={[styles.value, valueStyle]}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  section: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionText: {
    fontSize: 16,
  },
  detailSection: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
  },
  value: {
    fontSize: 16,
  },
  activeStatus: {
    color: 'green',
  },
});

export default CreateSchools;
