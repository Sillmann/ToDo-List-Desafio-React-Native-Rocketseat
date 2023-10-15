import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, FlatList } from 'react-native';
import { estilos } from "./style";
import { Topo } from '../componentes/Topo';

export function Todo() {

  type ListaDeTarefas = {
    tarefa: string;
    completada: boolean;
  }[];

  const [tarefaCadastrada, setTarefaCadastrada] = useState<ListaDeTarefas>([]);
  
  // Controlar digitação da tarefa
  const [tarefa, setTarefa] = useState('');

  function fazIncluirTarefa() {
    if (tarefaCadastrada.includes(tarefa)) {
        return Alert.alert('Tarefa já existe', 'Tarefa já cadastrada!')
    }

    // setTarefaCadastrada(prevState => [...prevState, { tarefa, completada: false }]);
    setTarefaCadastrada((tarefaCadastrada) => [...tarefaCadastrada, { tarefa,  completada: false }]);
    
    // console.log(tarefaCadastrada);

    setTarefa('');
  }

  function fazExcluirTarefa(item: string) {
    Alert.alert('Remover', `Excluir a tarefa ${item} ?`, [
        {
            text: 'Sim',

            onPress: () => onPressExcluir( item ),
        },
        {
            text: 'Não',
            style: 'cancel',
        }
    ])
}

function onPressExcluir(item: string) {
  // setCountCreated(countCreated - 1);
  // console.log(item);
  setTarefaCadastrada(prevState => prevState.filter(i => i.tarefa !== item));

  // if (checked) {
  //     setCompletedTask(completedTaks - 1);
  // }
}

function handleTaskDone(id: string) {
  // console.log(id);
  // console.log(tarefaCadastrada);
  
  setTarefaCadastrada((task) => task.map((task) => {
      task.tarefa === id ? (task.completada = !task.completada) : null
      return task
  }))
}

  return (
    <View style={estilos.tela}>
      
      <Topo />

      <View style={estilos.digitar}>
        <TextInput style={estilos.input}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor= '#808080'
          onChangeText={setTarefa}
          value={tarefa}
        />

        <TouchableOpacity 
          style={estilos.button}
          onPress={fazIncluirTarefa}> 
          
          <Image
            source={require('../imagens/plus.png')}
          />     
                      
        </TouchableOpacity>

      </View>

      <View style={estilos.info}>

        <Text style={estilos.criadas}>
          Criadas: 0
        </Text>
        
        <Text style={estilos.concluidas}>
          Concluídas: 0
        </Text>

      </View>

      

      <FlatList
        data={tarefaCadastrada}
        keyExtractor={tarefaCadastrada => tarefaCadastrada.tarefa}
        renderItem={({ item }) => (

        <View 
          style={estilos.item}>
          
          <TouchableOpacity style={estilos.check}
           onPress={()=>handleTaskDone(item.tarefa)}> 
          
            <Image
              source={item.completada ? require('../imagens/checked.png') : require('../imagens/check.png') }
              />
            
          </TouchableOpacity>
        
          <Text 
            style={item.completada ? estilos.descricaoTarefaCompletada : estilos.descricao}
          >
            {item.tarefa}
          </Text>
  
          <TouchableOpacity 
            style={estilos.trash}
            onPress={()=>fazExcluirTarefa(item.tarefa)}> 
            <Image
              source={require('../imagens/trash.png')}
            />
          </TouchableOpacity>
  
        </View>  
  

        )}
                // showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
               
                  <View style={estilos.empty}>
                    <Image
                        source={require('../imagens/clipboard.png')}
                    />
                    <Text style={estilos.textoemptybold}>
                      Você ainda não tem tarefas cadastradas  
                    </Text>
                    <Text style={estilos.textoempty}>
                      Crie tarefas e organize seus itens a fazer  
                    </Text>
                  </View>                  
                )}

            />


      

    </View>
  );
}

