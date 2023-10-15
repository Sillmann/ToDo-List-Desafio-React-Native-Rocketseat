import { StatusBar } from "react-native";
import { Todo } from './src/Todo';

export default function App() {
  return (
    <>

      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent" 
        translucent
      />

      <Todo />
    </>
  )
}

