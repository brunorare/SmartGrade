import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerEsqueceu: { 
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 28,
    justifyContent: 'center',
  },

  tituloEsqueceu: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#8c3f9b',
    textAlign: 'center',
    letterSpacing: 0.5,
  },

  textoEsqueceu: {
    fontSize: 14,
    color: '#8c3f9b',
    marginBottom: 25,
    textAlign: 'center',
    fontWeight: '500',
  },

  inputEsqueceu: {
    borderWidth: 1.5,
    borderColor: '#ccc',
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginBottom: 20,
    backgroundColor: '#F2F2F2',
    color: '#000',
  },

  botaoEsqueceu: {
    backgroundColor: '#8c3f9b',
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 20,
  },

  textoBotaoEsqueceu: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#FFFFFF',
  },

  voltarEsqueceu: {
    color: '#A33AA3',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});

export default styles;