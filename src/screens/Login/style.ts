import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 28,
    justifyContent: 'center',
  },

  logo: {
    width: '70%',
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 35,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 35,
    color: '#8c3f9b', // 🔥 ROXO PRINCIPAL
    textAlign: 'center',
    letterSpacing: 0.5,
  },

  label: {
    fontSize: 13,
    marginBottom: 6,
    color: '#8c3f9b',
    fontWeight: '600',
  },

  input: {
    borderWidth: 1.5,
    borderColor: '#ccc', // 🔥 BORDA CINZA
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginBottom: 18,
    backgroundColor: '#F2F2F2', // 🔥 CINZA CLARO
    color: '#000',
  },

  link: {
    color: '#A33AA3',
    marginBottom: 25,
    fontSize: 13,
    textAlign: 'right',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },

  botaoLogin: {
    backgroundColor: '#8c3f9b', // 🔥 ROXO PRINCIPAL
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: 'center',
  },

  textoBotaoLogin: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },

  botaoCadastro: {
    marginTop: 25,
    borderWidth: 1.5,
    borderColor: '#A33AA3',
    paddingVertical: 16,
    borderRadius: 14,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  textoBotaoCadastro: {
    fontWeight: '600',
    fontSize: 15,
    color: '#8c3f9b',
  },

  // ESQUECEU SENHA

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