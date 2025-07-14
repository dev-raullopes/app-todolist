import { registerRootComponent } from 'expo';
import { New } from '@/app/New';
import { Home } from '@/app/Home';
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Home);
