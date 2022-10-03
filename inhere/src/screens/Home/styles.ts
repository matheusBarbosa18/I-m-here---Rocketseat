import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 24,
    color: '#131016',
  },
  eventName: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fdfcfe',
    marginTop: 48,
  },
  eventData: {
    fontSize: 16,
    color: '#d80909',
  },
  input: {
    backgroundColor: '#1f1e25',
    flex: 1,
    marginRight: 12,
    height: 56,
    borderRadius: 5,
    color: '#fff',
    padding: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31cf67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  },
  ListEmptyText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
  },
});
