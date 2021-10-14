import { configure } from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';
import registerRequireContextHook from 'babel-plugin-require-context-hook/register';

configure({ adapter: new Adapter() });
registerRequireContextHook();
