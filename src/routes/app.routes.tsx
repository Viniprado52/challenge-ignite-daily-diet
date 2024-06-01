import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/home';
import { Edit } from '@screens/edit';
import { Detail } from '@screens/detail';
import { Create } from '@screens/create';
import { Created } from '@screens/created';
import { Statistics } from '@screens/statistics';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
  return(
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="home"
        component={Home}
      />

      <Screen 
        name="statistic"
        component={Statistics}
      />

      <Screen 
        name="create"
        component={Create}
      />

      <Screen 
        name="created"
        component={Created}
      />

      <Screen 
        name="detail"
        component={Detail}
      />

      <Screen 
        name="edit"
        component={Edit}
      />
    </Navigator>
  );
}