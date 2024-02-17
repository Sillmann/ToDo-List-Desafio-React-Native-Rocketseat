import { StyleSheet } from 'react-native';
import { help } from 'yargs';

export const estilos = StyleSheet.create({
  tela: {
   flex: 1,
   backgroundColor: '#0D0D0D',
  },
  
  digitar: {
    width: '100%',
    flexDirection: 'row',
    padding: 16,  
    // marginTop: 36,
  },
  input: {
    flex: 1,
    borderRadius: 5,
    padding: 16,
    fontSize: 16,
    height: 54,
    backgroundColor: '#262626',
    color: '#fff',
  },
  button: {
    marginLeft: 8,
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24
  },
  criadas: {
    color: '#4EA8DE',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 24
  },
  concluidas: {
    color: '#5E60CE',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 24
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    margin: 8,
    height: 64,
    backgroundColor: '#262626',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  check: {
    marginLeft: 16
  },
  descricao: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFF',
    height: 64,
    fontSize: 16,
    paddingLeft: 18,
    marginTop: 40,
  },

  descricaoTarefaCompletada: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#808080',
    height: 64,
    fontSize: 16,
    paddingLeft: 30,
    marginTop: 40,
    textDecorationLine: 'line-through',
  },

  trash: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16
  }, 

  empty: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },  

  textoemptybold: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#808080',
    fontSize: 16,
    fontWeight: 'bold',
  },

  textoempty: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#808080',
    fontSize: 14,
  },
});